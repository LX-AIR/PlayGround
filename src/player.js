import * as THREE from 'three'
import { PLAYER_BASE, PARTY_MAX, typeMultiplier } from './constants.js'
import { buildCreature, buildPlayer } from './models.js'
import { angleLerp, clamp, damp, lerp, TAU } from './utils.js'
import { isWater, terrainHeight } from './terrain.js'

const UP = new THREE.Vector3(0, 1, 0)

export class Player {
  constructor(game) {
    this.game = game
    this.scene = game.scene
    this.camera = game.camera
    this.root = buildPlayer()
    this.scene.add(this.root)
    this.position = this.root.position
    this.position.set(9, 0, 84)
    this.position.y = terrainHeight(9, 84)
    this.velocityY = 0
    this.grounded = true
    this.yaw = 0.2
    this.pitch = -0.05
    this.bodyYaw = 0.2
    this.aiming = false
    this.fireCooldown = 0
    this.fireBloom = 0
    this.aether = PLAYER_BASE.aether
    this.maxAether = PLAYER_BASE.aether
    this.level = 1
    this.xp = 0
    this.xpNext = 100
    this.maxHp = PLAYER_BASE.hp
    this.hp = PLAYER_BASE.hp
    this.shield = 0
    this.shieldMax = 0
    this.baseSpeed = PLAYER_BASE.speed
    this.damage = PLAYER_BASE.damage
    this.critChance = 0.09
    this.orbs = 4
    this.maxOrbs = 6
    this.orbRecharge = 0
    this.orbsUsed = 0
    this.dashCooldown = 0
    this.dashTime = 0
    this.invuln = 0
    this.lastDamage = -99
    this.lastFire = -99
    this.moving = 0
    this.speedNow = 0
    this.dead = false
    this.deathTime = 0
    this.party = []
    this.activeIndex = -1
    this.companion = null
    this.companionCooldown = 0
    this.companionCooldownMax = 10
    this.companionAttack = 0
    this.captureBonus = 0
    this.passives = {}
    this.cameraShake = 0
    this.cameraDistance = 5.1
    this.recoil = 0
    this.lastStep = 0
    this.respawnPoint = new THREE.Vector3(26, 0, 40)
    this.respawnPoint.y = terrainHeight(26, 40)
    this.trailTimer = 0
    this.lastOrbWarning = -10
    this._tmp = new THREE.Vector3()
    this._ray = new THREE.Raycaster()
    this._screenCenter = new THREE.Vector2(0, 0)
    this.loadoutDirty = true
  }

  get activeBond() { return this.party[this.activeIndex] ?? null }
  get shotType() { return this.activeBond?.def.type ?? 'aether' }
  get shotColor() { return this.activeBond?.def.colors.glow ?? 0x62ffd8 }

  setStart(x, z, yaw = 0.2) {
    this.position.set(x, terrainHeight(x, z), z)
    this.yaw = yaw
    this.bodyYaw = yaw
    this.pitch = -0.08
    this.updateCamera(0, true)
  }

  addBond(bond) {
    if (this.party.length >= PARTY_MAX) {
      this.game.hud.toast('party full', 'Your bonds are full. Visit the codex to study the new spirit.', 'coral')
    } else {
      this.party.push(bond)
      if (this.activeIndex < 0) this.selectBond(this.party.length - 1)
    }
    this.loadoutDirty = true
    this.game.hud.syncParty()
    this.game.hud.syncCodex()
  }

  selectBond(index) {
    if (index < 0 || index >= this.party.length) return false
    if (index === this.activeIndex) return true
    this.activeIndex = index
    this.applyBond()
    this.game.hud.syncParty()
    this.game.hud.syncCompanion()
    this.game.audio.sfx('ui')
    return true
  }

  cycleBond(dir = 1) {
    if (!this.party.length) return
    const next = (this.activeIndex + dir + this.party.length) % this.party.length
    this.selectBond(next)
    this.game.hud.toast('bond changed', `${this.party[next].name} answers your call.`, 'jade')
  }

  applyBond() {
    const bond = this.activeBond
    const oldMaxShield = this.shieldMax
    this.passives = {}
    this.shieldMax = 0
    this.captureBonus = 0
    this.fireBonus = 0
    this.critChance = 0.09
    this.baseSpeed = PLAYER_BASE.speed
    if (!bond) {
      this.shield = 0
      this.companionCooldownMax = 10
      this.spawnCompanion()
      return
    }
    const def = bond.def
    const bonuses = {
      anansi: () => { this.captureBonus = 0.1 },
      calf: () => { this.fireBonus = 0.08 },
      mami: () => { this.passives.regen = 1.2 },
      quetzal: () => { this.baseSpeed *= 1.12 },
      nian: () => { this.shieldMax = 25 },
      bakunawa: () => { this.critChance += 0.08 },
      kitsune: () => { this.passives.aetherRegen = 1.35 },
      raven: () => { this.passives.orbDrop = 1.3 },
    }
    bonuses[def.id]?.()
    if (this.shieldMax > 0) this.shield = Math.max(this.shield, this.shieldMax)
    else if (oldMaxShield > 0) this.shield = Math.min(this.shield, 0)
    this.companionCooldownMax = def.ability.cooldown
    this.companionCooldown = Math.min(this.companionCooldown, this.companionCooldownMax)
    this.spawnCompanion()
    this.loadoutDirty = true
  }

  spawnCompanion() {
    if (this.companion) {
      this.scene.remove(this.companion.model)
      this.companion.model.traverse(o => { if (o.isMesh) o.material?.dispose?.(); if (o.isSprite) o.material?.dispose?.() })
      this.companion = null
    }
    const bond = this.activeBond
    if (!bond) return
    const model = buildCreature(bond.def, { scale: (bond.def.stats.scale ?? 1) * 0.72 })
    model.traverse(o => { if (o.isMesh) o.castShadow = true })
    // Remove the detached health bar that comes with creature models.
    if (model.userData.bar) model.remove(model.userData.bar)
    this.scene.add(model)
    const pos = this.position.clone().add(new THREE.Vector3(-1.8, 0.8, 1.8))
    model.position.copy(pos)
    this.companion = {
      model, def: bond.def, bond,
      follow: pos.clone(), attackTimer: 0.8 + Math.random(),
      bob: Math.random() * TAU, facing: 0,
    }
  }

  update(dt, t, input, game) {
    if (this.dead) {
      this.deathTime += dt
      this.root.visible = this.deathTime < 1.0
      this.updateCamera(dt)
      return
    }

    const [lookDX, lookDY] = input.consumeLook()
    this.yaw -= lookDX * 0.0022
    this.pitch -= lookDY * 0.0019
    this.pitch = clamp(this.pitch, -0.52, 0.62)
    this.yaw = ((this.yaw + Math.PI) % TAU + TAU) % TAU - Math.PI

    const slot = input.consumeSlot()
    if (slot >= 0) this.selectBond(slot)

    // Movement basis from camera yaw.
    const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw)
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw)
    const mx = input.moveX, mz = input.moveY
    let dirX = fx * (-mz) + rx * mx
    let dirZ = fz * (-mz) + rz * mx
    const mag = Math.hypot(dirX, dirZ)
    if (mag > 1) { dirX /= mag; dirZ /= mag }
    const moving = Math.min(1, Math.hypot(dirX, dirZ))
    this.moving = damp(this.moving, moving, 12, dt)
    this.speedNow = moving * this.baseSpeed

    if (this.dashCooldown > 0) this.dashCooldown -= dt
    if (this.invuln > 0) this.invuln -= dt
    if (this.dashTime > 0) {
      this.dashTime -= dt
      const dashSpeed = PLAYER_BASE.dashSpeed
      this.tryMove(dirX * dashSpeed * dt, dirZ * dashSpeed * dt)
      this.trailTimer -= dt
      if (this.trailTimer <= 0) {
        this.trailTimer = 0.045
        game.spawnDashTrail(this.position.clone().add(new THREE.Vector3(0, 0.9, 0)), this.shotColor)
      }
    } else {
      const speed = this.baseSpeed * (this.passives.regen ? 1 : 1)
      if (moving > 0.02) {
        const stepTime = 1 / (3.8 + this.speedNow * 0.3)
        this.lastStep += dt
        if (this.lastStep > stepTime) {
          this.lastStep = 0
          game.audio.sfx('step')
        }
        this.tryMove(dirX * speed * dt, dirZ * speed * dt)
        this.bodyYaw = angleLerp(this.bodyYaw, Math.atan2(-dirX, -dirZ), 1 - Math.exp(-12 * dt))
      }
    }

    if (input.consume('jumpPressed') && this.grounded) {
      this.velocityY = PLAYER_BASE.jump
      this.grounded = false
      game.audio.sfx('jump')
      game.burst(this.position.clone().setY(this.position.y + 0.1), 0xcfe8c4, 8, 2.4)
    }
    if (input.consume('dashPressed') && this.dashCooldown <= 0 && moving > 0.05) {
      this.dashTime = 0.18
      this.dashCooldown = PLAYER_BASE.dashCooldown
      this.invuln = 0.32
      game.audio.sfx('dash')
      game.cameraKick(0.02)
    }

    // Gravity / ground.
    this.velocityY -= 24 * dt
    this.position.y += this.velocityY * dt
    const ground = terrainHeight(this.position.x, this.position.z)
    if (this.position.y <= ground) {
      if (!this.grounded && this.velocityY < -5) game.burst(this.position.clone(), 0xcfe8c4, 7, 2)
      this.position.y = ground
      this.velocityY = 0
      this.grounded = true
    } else {
      this.grounded = false
    }

    // Aiming / firing. A quick tap (common on touch) still fires once.
    const tappedFire = input.consume('firePressed')
    const wantsAim = input.fire || tappedFire || (t - this.lastFire < 0.9)
    this.aiming = wantsAim
    if (this.aiming) this.bodyYaw = angleLerp(this.bodyYaw, this.yaw, 1 - Math.exp(-18 * dt))
    if (input.fire || tappedFire) this.tryShoot(dt, t, game)
    if (this.fireCooldown > 0) this.fireCooldown -= dt
    if (this.fireBloom > 0) this.fireBloom = Math.max(0, this.fireBloom - dt * 2.2)
    if (input.consume('orbPressed')) this.throwOrb(game)

    // Aether regen.
    const regen = PLAYER_BASE.aetherRegen * (this.passives.aetherRegen ?? 1)
    this.aether = Math.min(this.maxAether, this.aether + regen * dt)
    // Orb recharge.
    if (this.orbs < 3) {
      this.orbRecharge += dt
      if (this.orbRecharge > 12) {
        this.orbRecharge = 0
        this.orbs++
        game.hud.toast('soul orb recovered', 'The island provides.', 'jade')
        game.audio.sfx('ui')
      }
    } else this.orbRecharge = 0
    // Health regen.
    const outOfCombat = t - this.lastDamage > 6
    if (outOfCombat && this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + 2.2 * dt)
    if (this.passives.regen) this.hp = Math.min(this.maxHp, this.hp + this.passives.regen * dt)
    // Shield regen.
    if (this.shieldMax > 0 && this.shield < this.shieldMax) {
      this.shield = Math.min(this.shieldMax, this.shield + 2.5 * dt)
    }

    // Companion.
    this.updateCompanion(dt, t, game)
    if (input.consume('pulsePressed')) this.spiritPulse(game)

    // Character animation.
    const airborne = !this.grounded && this.velocityY > 0.5
    this.root.position.copy(this.position)
    this.root.rotation.y = this.bodyYaw
    this.root.userData.animate?.(t, {
      moving: this.moving,
      speed: this.speedNow,
      airborne,
      aiming: this.aiming,
    })
    this.root.visible = this.invuln > 0 ? (Math.floor(t * 30) % 2 === 0) : true

    this.updateCamera(dt)
    this.updateAimUI(game, t)
    this.checkPickups(game)
    this.updateHud(game)
    this.shake = Math.max(0, this.cameraShake - dt * 2.8)
    this.cameraShake = this.shake
    this.recoil = damp(this.recoil, 0, 10, dt)
  }

  tryMove(dx, dz) {
    let nx = this.position.x + dx
    let nz = this.position.z + dz
    const world = this.game.world
    if (isWater(nx, this.position.z)) nx = this.position.x
    if (isWater(this.position.x, nz)) nz = this.position.z
    if (world.isBlocked(nx, this.position.z, 0.38)) nx = this.position.x
    if (world.isBlocked(this.position.x, nz, 0.38)) nz = this.position.z
    const r = Math.hypot(nx, nz)
    if (r > 122) {
      nx = nx / r * 122 * 0.98
      nz = nz / r * 122 * 0.98
    }
    this.position.x = nx
    this.position.z = nz
  }

  cameraBasis() {
    const cp = Math.cos(this.pitch)
    const forward = new THREE.Vector3(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp)
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw))
    return { forward, right }
  }

  updateCamera(dt, snap = false) {
    const { forward, right } = this.cameraBasis()
    const target = this._tmp.copy(this.position).add(new THREE.Vector3(0, 1.55, 0))
    // Pull the camera back when a towering warden is in our face so the
    // model does not swallow the whole viewport.
    let camDist = this.cameraDistance
    const boss = this.game?.activeBoss
    if (boss && !boss.weakened && boss.model.visible) {
      const bd = Math.hypot(this.position.x - boss.model.position.x, this.position.z - boss.model.position.z)
      camDist += clamp((22 - bd) * 0.18, 0, 2.8)
    }
    const desired = new THREE.Vector3().copy(target)
      .addScaledVector(forward, -camDist)
      .addScaledVector(right, 0.72)
      .add(new THREE.Vector3(0, 0.35, 0))
    // Prevent the camera from clipping through the island.
    const steps = 10
    let actual = desired
    for (let i = 3; i <= steps; i++) {
      const p = new THREE.Vector3().lerpVectors(target, desired, i / steps)
      if (p.y < terrainHeight(p.x, p.z) + 0.55) {
        actual = new THREE.Vector3().lerpVectors(target, desired, Math.max(0.16, (i - 1) / steps))
        break
      }
    }
    this.camera.position.lerp(actual, snap ? 1 : 1 - Math.exp(-11 * dt))
    if (snap) this.camera.position.copy(actual)
    const shake = this.cameraShake
    if (shake > 0.001) {
      this.camera.position.x += (Math.random() - 0.5) * shake
      this.camera.position.y += (Math.random() - 0.5) * shake
      this.camera.position.z += (Math.random() - 0.5) * shake
    }
    const look = target.clone().addScaledVector(forward, 26)
    look.y += this.recoil * 3.4
    this.camera.lookAt(look)
    const fovTarget = 62 + (this.dashTime > 0 ? 6 : 0) + this.moving * 2
    this.camera.fov = damp(this.camera.fov, fovTarget, 6, dt)
    this.camera.updateProjectionMatrix()
  }

  aimPoint(maxDist = 60) {
    const { forward } = this.cameraBasis()
    const origin = this.camera.position.clone()
    const dir = forward.clone()
    let dist = maxDist
    const step = 1.0
    for (let d = 2; d < maxDist; d += step) {
      const p = origin.clone().addScaledVector(dir, d)
      if (p.y < terrainHeight(p.x, p.z)) { dist = d; break }
    }
    return origin.addScaledVector(dir, Math.min(dist, maxDist))
  }

  raycastAim(game, spread = 0) {
    const { forward } = this.cameraBasis()
    const origin = this.camera.position.clone()
    const dir = forward.clone()
    if (spread) {
      dir.x += (Math.random() - 0.5) * spread
      dir.y += (Math.random() - 0.5) * spread
      dir.z += (Math.random() - 0.5) * spread
      dir.normalize()
    }
    let wall = 90
    for (let d = 1.5; d < 90; d += 0.8) {
      const p = origin.clone().addScaledVector(dir, d)
      if (p.y < terrainHeight(p.x, p.z)) { wall = d; break }
    }
    let hitCreature = null
    let hitDist = wall
    for (const c of game.creatures) {
      if (!c.alive || c.dormant) continue
      const center = c.model.position.clone().add(new THREE.Vector3(0, c.height * 0.55, 0))
      const oc = center.clone().sub(origin)
      const tca = oc.dot(dir)
      if (tca < 0 || tca > wall) continue
      const d2 = oc.lengthSq() - tca * tca
      const r = c.hitRadius * 1.05
      if (d2 <= r * r) {
        const thc = Math.sqrt(Math.max(0, r * r - d2))
        const t0 = tca - thc
        if (t0 < hitDist && t0 > 0.5) { hitDist = t0; hitCreature = c }
      }
    }
    const point = origin.clone().addScaledVector(dir, hitDist)
    return { creature: hitCreature, point, dist: hitDist, origin, dir }
  }

  tryShoot(dt, t, game) {
    if (this.fireCooldown > 0) return
    const cost = PLAYER_BASE.aetherCost
    if (this.aether < cost) {
      if (t - this.lastFire > 0.6) game.hud.toast('aether spent', 'Release the trigger. The gauntlet recharges.', 'coral')
      return
    }
    this.fireCooldown = 1 / PLAYER_BASE.fireRate
    this.aether -= cost
    this.lastFire = t
    this.fireBloom = Math.min(1.5, this.fireBloom + 0.18)
    const spread = 0.012 + this.fireBloom * 0.017 + this.moving * 0.012 + (this.grounded ? 0 : 0.02)
    const shot = this.raycastAim(game, spread)
    const muzzle = new THREE.Vector3()
    this.root.userData.muzzle.getWorldPosition(muzzle)
    game.spawnTracer(muzzle, shot.point, this.shotColor, this.shotType)
    game.burst(shot.point, this.shotColor, 5, 3.2, 0.25)
    game.audio.sfx('shoot')
    this.cameraKick(0.012 + Math.random() * 0.006)
    this.recoil += 0.55
    game.hud.bloom(this.fireBloom)
    if (shot.creature) {
      const dmg = this.damage + (this.activeBond?.level ?? 0) * 0.7
      const result = shot.creature.takeDamage(dmg, this.shotType, { critChance: this.critChance })
      if (result.crit) this.recoil += 0.35
      game.hud.hitmark(result.crit, result.mult > 1.2)
    }
  }

  throwOrb(game) {
    if (this.orbs <= 0) {
      const t = game.time
      if (t - this.lastOrbWarning > 3) {
        this.lastOrbWarning = t
        game.hud.toast('no soul orbs', 'Find a cache, bond a spirit, or wait for a recharge.', 'coral')
        game.audio.sfx('ui')
      }
      return
    }
    this.orbs--
    this.orbRecharge = 0
    game.hud.syncOrbs()
    const { forward } = this.cameraBasis()
    const muzzle = new THREE.Vector3()
    this.root.userData.muzzle.getWorldPosition(muzzle)
    const aim = this.aimPoint(45)
    const dir = aim.clone().sub(muzzle).normalize()
    const velocity = dir.clone().multiplyScalar(27).add(new THREE.Vector3(0, 2.6, 0))
    game.spawnSoulOrb(muzzle.clone().addScaledVector(dir, 0.7), velocity)
    game.audio.sfx('orb')
    this.recoil += 0.2
  }

  spiritPulse(game) {
    const bond = this.activeBond
    if (!bond) {
      game.hud.toast('no bonded spirit', 'Weaken a wild spirit and throw a soul orb to bond it.', 'coral')
      return
    }
    if (this.companionCooldown > 0) {
      game.hud.toast('spirit recovering', `${bond.name} needs ${Math.ceil(this.companionCooldown)}s.`, 'coral')
      return
    }
    const def = bond.def
    this.companionCooldown = this.companionCooldownMax
    const aim = this.aimPoint(30)
    const p = this.position.clone().add(new THREE.Vector3(0, 1.2, 0))
    if (def.ability.heal) {
      this.heal(def.ability.heal)
      game.ring(p.clone().setY(this.position.y + 0.2), def.colors.glow, 1, 10, 0.8)
      game.audio.sfx('heal')
      game.hud.toast('healing spring', `${def.name} mends your spirit.`, 'jade')
      return
    }
    const from = this.companion ? this.companion.model.position.clone().add(new THREE.Vector3(0, 1, 0)) : p
    game.spawnCompanionBeam(from, aim, def.colors.glow, def.type)
    game.ring(aim.clone().setY(terrainHeight(aim.x, aim.z) + 0.15), def.colors.glow, 1, def.ability.radius, 0.75)
    let hits = 0
    for (const c of game.creatures) {
      if (!c.alive || c.dormant) continue
      const d = c.model.position.distanceTo(aim)
      if (d <= def.ability.radius + c.hitRadius) {
        const dmg = (def.ability.damage + bond.level * 1.5) * typeMultiplier(def.type, c.type)
        c.takeDamage(dmg, def.type, { critChance: this.critChance })
        if (def.type === 'air') c.stun = Math.max(c.stun, 0.9)
        if (def.type === 'earth') c.slow = Math.max(c.slow, 1.5)
        if (def.type === 'water') c.slow = Math.max(c.slow, 2)
        hits++
      }
    }
    game.cameraKick(0.06)
    game.audio.sfx('levelup')
    game.hud.toast(`${def.ability.name.toLowerCase()} released`, hits ? `${hits} spirits caught in the pulse.` : 'The energy dissipates.', 'jade')
  }

  updateCompanion(dt, t, game) {
    if (this.companionCooldown > 0) this.companionCooldown = Math.max(0, this.companionCooldown - dt)
    const c = this.companion
    if (!c) return
    const m = c.model
    const target = new THREE.Vector3(
      this.position.x - Math.cos(this.bodyYaw) * 1.7 + Math.sin(this.bodyYaw) * 0.9,
      0,
      this.position.z + Math.sin(this.bodyYaw) * 1.7 + Math.cos(this.bodyYaw) * 0.9,
    )
    const ground = terrainHeight(target.x, target.z)
    target.y = ground + 0.35 + Math.sin(t * 1.8 + c.bob) * 0.14
    const dist = m.position.distanceTo(target)
    if (dist > 26) {
      m.position.copy(target)
      game.burst(target, c.def.colors.glow, 12, 4)
    } else {
      m.position.lerp(target, 1 - Math.exp(-3.8 * dt))
    }
    const away = new THREE.Vector3().subVectors(target, m.position)
    c.speed = away.length() / Math.max(dt, 0.001)
    // Face nearest enemy, otherwise face where the player looks.
    let nearest = null, nd = 24
    for (const e of game.creatures) {
      if (!e.alive || e.dormant) continue
      const d = e.model.position.distanceTo(m.position)
      if (d < nd) { nd = d; nearest = e }
    }
    let face = this.bodyYaw + Math.PI
    if (nearest) face = Math.atan2(-(nearest.model.position.x - m.position.x), -(nearest.model.position.z - m.position.z))
    m.rotation.y = angleLerp(m.rotation.y, face, 1 - Math.exp(-6 * dt))
    c.attackTimer -= dt
    if (nearest && c.attackTimer <= 0) {
      c.attackTimer = 1.75 + Math.random() * 0.7
      const from = m.position.clone().add(new THREE.Vector3(0, 0.9, 0))
      const dmg = 7 + c.bond.level * 1.4
      game.spawnAllyBolt(from, nearest, dmg, c.def.type, c.def.colors.glow)
    }
    m.userData.animate?.(t, { speed: Math.min(6, c.speed), attacking: c.attackTimer > 1.2 })
  }

  takeDamage(amount, source) {
    if (this.dead || this.invuln > 0) return
    let dmg = Math.max(1, Math.round(amount))
    if (this.shield > 0) {
      const absorbed = Math.min(this.shield, dmg)
      this.shield -= absorbed
      dmg -= absorbed
      this.game.hud.damageNumber(this.position.clone().add(new THREE.Vector3(0, 1.7, 0)), absorbed, 'earth', { absorb: true })
    }
    if (dmg > 0) {
      this.hp = Math.max(0, this.hp - dmg)
      this.game.hud.playerHit(dmg)
      this.game.hud.damageNumber(this.position.clone().add(new THREE.Vector3(0, 1.9, 0)), dmg, 'damage', { player: true })
    }
    this.lastDamage = this.game.time
    this.cameraShake = Math.min(0.32, this.cameraShake + 0.12)
    this.game.audio.sfx('hurt')
    if (this.hp <= 0) this.die()
  }

  heal(amount, silent = false) {
    if (this.dead) return
    const before = this.hp
    this.hp = Math.min(this.maxHp, this.hp + amount)
    if (!silent && this.hp > before) {
      this.game.hud.damageNumber(this.position.clone().add(new THREE.Vector3(0, 1.8, 0)), Math.round(this.hp - before), 'heal', { heal: true })
      this.game.audio.sfx('heal')
    }
  }

  die() {
    if (this.dead) return
    this.dead = true
    this.deathTime = 0
    this.aiming = false
    this.game.audio.sfx('death')
    this.game.onPlayerDeath?.(this)
  }

  respawn() {
    this.dead = false
    this.deathTime = 0
    this.hp = this.maxHp
    this.aether = this.maxAether
    this.shield = this.shieldMax
    this.orbs = Math.max(this.orbs, 3)
    this.position.copy(this.respawnPoint)
    this.position.y = terrainHeight(this.position.x, this.position.z)
    this.velocityY = 0
    this.root.visible = true
    this.yaw = 0
    this.invuln = 2
    this.updateCamera(0, true)
    this.spawnCompanion()
    this.game.hud.syncOrbs()
    this.game.hud.syncVitals()
  }

  addXP(amount) {
    this.xp += amount
    while (this.xp >= this.xpNext) {
      this.xp -= this.xpNext
      this.level++
      this.xpNext = Math.round(this.xpNext * 1.32 + 28)
      this.maxHp += 12
      this.hp = this.maxHp
      this.maxAether += 6
      this.damage += 0.9
      this.game.hud.toast('warden level up', `Level ${this.level} · health and aether restored.`, 'jade')
      this.game.audio.sfx('levelup')
      this.game.ring(this.position.clone(), 0xf4c95d, 0.8, 9, 0.9)
      this.game.burst(this.position.clone().add(new THREE.Vector3(0, 1, 0)), 0xf4c95d, 24, 6)
    }
    this.game.hud.syncVitals()
  }

  addOrbs(n = 1) {
    this.orbs = Math.min(this.maxOrbs, this.orbs + n)
    this.game.hud.syncOrbs()
  }

  checkPickups(game) {
    for (const pickup of game.world.pickups) {
      if (!pickup.active) continue
      if (this.position.distanceTo(new THREE.Vector3(pickup.x, pickup.y, pickup.z)) < 1.7) {
        pickup.active = false
        pickup.group.visible = false
        if (pickup.type === 'mango') {
          this.heal(28)
          game.hud.toast('mango found', '+28 health. Sweet like September.', 'jade')
        } else if (pickup.type === 'bloom') {
          this.aether = this.maxAether
          this.game.audio.sfx('heal')
          game.hud.toast('aether bloom', 'Gauntlet fully charged.', 'jade')
        } else {
          this.addOrbs(2)
          game.hud.toast('soul cache', '+2 soul orbs.', 'jade')
        }
      }
    }
  }

  updateAimUI(game, t) {
    const hit = this.raycastAim(game, 0)
    if (hit.creature) {
      game.hud.setTarget(hit.creature, hit.dist)
      game.hud.setCrosshairDanger(hit.creature.state === 'aggro')
    } else {
      game.hud.setTarget(null)
      game.hud.setCrosshairDanger(false)
    }
  }

  updateHud(game) {
    game.hud.updateVitals({
      hp: this.hp, maxHp: this.maxHp, aether: this.aether, maxAether: this.maxAether,
      shield: this.shield, shieldMax: this.shieldMax, xp: this.xp, xpNext: this.xpNext, level: this.level,
    })
    game.hud.updateOrbRecharge(this.orbs < 3 ? this.orbRecharge / 12 : 1)
    game.hud.updateBloom(this.fireBloom, this.moving, !this.grounded)
    game.hud.updateCompanion(this.companionCooldown, this.companionCooldownMax)
  }

  cameraKick(amount) {
    this.cameraShake = Math.min(0.4, this.cameraShake + amount)
  }

  getBondSummary() {
    return this.party.map((b, i) => ({ ...b, active: i === this.activeIndex }))
  }
}
