import * as THREE from 'three'
import { CAPTURE_THRESHOLD, CREATURE_BY_ID, typeMultiplier } from './constants.js'
import { buildCreature } from './models.js'
import { angleLerp, clamp, damp, dist2D, glowSprite, lerp, mulberry32, range, TAU } from './utils.js'
import { isWater, terrainHeight } from './terrain.js'

let nextId = 1

export class Creature {
  constructor(def, opts = {}) {
    this.id = nextId++
    this.def = def
    this.game = opts.game
    this.scene = opts.scene
    this.level = opts.level ?? 3
    this.boss = !!opts.boss
    this.bossDef = opts.bossDef ?? null
    this.final = !!opts.final
    this.friendly = !!opts.friendly
    this.minion = !!opts.minion
    this.home = new THREE.Vector3(opts.x ?? 0, 0, opts.z ?? 0)
    this.home.y = terrainHeight(this.home.x, this.home.z)
    this.baseY = this.home.y
    this.fly = !!def.stats.fly
    this.moveSpeed = def.stats.speed * (1 + this.level * 0.012)
    this.aggressive = !opts.passive

    const scale = opts.scale ?? (this.boss ? (this.bossDef?.scale ?? 2.4) : def.stats.scale)
    this.model = buildCreature(def, { boss: this.boss, scale })
    this.model.position.copy(this.home)
    this.scene.add(this.model)
    this.scale = scale
    this.hitRadius = (this.model.userData.radius ?? 1) * scale * 0.82
    this.height = (this.model.userData.height ?? 2) * scale
    this.baseScale = scale

    const multiplier = 1 + (this.level - 1) * 0.11
    this.maxHp = this.boss ? this.bossDef.hp : Math.round(def.stats.hp * multiplier)
    this.hp = this.maxHp
    this.damage = (this.boss ? 14 : def.stats.damage) * (1 + this.level * 0.035)
    this.state = this.boss ? 'dormant' : 'idle'
    this.dormant = this.boss
    this.stateTime = 0
    this.attackCooldown = 0.8 + Math.random() * 1.6
    this.attackWindup = 0
    this.captureReady = false
    this.captureThreshold = CAPTURE_THRESHOLD + (opts.captureBonus ?? 0)
    this.dead = false
    this.captured = false
    this.weakened = false
    this.hitFlash = 0
    this.burn = 0
    this.burnTick = 0
    this.slow = 0
    this.mark = 0
    this.stun = 0
    this.wander = { x: this.home.x, z: this.home.z, timer: 0 }
    this.facing = Math.random() * TAU
    this.velocity = new THREE.Vector3()
    this.speedNow = 0
    this.attackAnim = 0
    this.bossPhase = 1
    this.patternTimer = 2.5
    this.chargeTimer = 0
    this.leash = this.boss ? 30 : 24
    this.flashMats = []
    this.originalEmissive = new Map()
    this.model.traverse(o => {
      if (o.isMesh && o.material && o.material.emissive) {
        o.material = o.material.clone()
        this.flashMats.push(o.material)
        this.originalEmissive.set(o.material, { color: o.material.emissive.clone(), intensity: o.material.emissiveIntensity })
      }
    })

    // Detach the health bar from the scaled model so it stays screen-readable.
    this.bar = this.model.userData.bar
    if (this.bar) {
      this.model.remove(this.bar)
      this.scene.add(this.bar)
      this.bar.position.copy(this.model.position).setY(this.model.position.y + this.height + 0.55)
    }

    this.captureRing = new THREE.Mesh(
      new THREE.RingGeometry(this.hitRadius * 1.1, this.hitRadius * 1.24, 32),
      new THREE.MeshBasicMaterial({ color: 0xf4c95d, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
    )
    this.captureRing.rotation.x = -Math.PI / 2
    this.scene.add(this.captureRing)

    this.aggroRange = this.boss ? 26 : 15
    this.shadow = null
    this.updateBar()
  }

  get alive() { return !this.dead && !this.captured && !this.weakened }
  get hpRatio() { return this.hp / this.maxHp }
  get type() { return this.def.type }
  get name() { return this.boss ? this.bossDef.name : this.def.name }
  get levelLabel() { return `LV ${this.level}` }

  updateBar() {
    if (!this.bar) return
    const fill = this.bar.userData.fill
    if (!fill) return
    const ratio = clamp(this.hp / this.maxHp, 0, 1)
    fill.scale.x = Math.max(0.001, ratio)
    fill.position.x = -(1 - ratio) / 2
    const mat = fill.material
    if (this.captureReady) mat.color.setHex(0xf4c95d)
    else if (this.boss) mat.color.setHex(0xff5d54)
    else mat.color.setHex(0xff6b4a)
    this.bar.visible = !this.dead && !this.captured && (this.boss || this.hp < this.maxHp || this.state === 'aggro' || this.captureReady)
  }

  setDormant(value) {
    this.dormant = value
    this.state = value ? 'dormant' : 'idle'
  }

  awaken() {
    this.dormant = false
    this.state = 'aggro'
    this.attackCooldown = 1.2
    this.patternTimer = 2.4
    this.game.audio.sfx('boss')
    this.game.hud.toast('warden awakened', 'The shrine stone cracks.', 'coral')
  }

  takeDamage(amount, type = 'aether', opts = {}) {
    if (!this.alive || this.dormant) return { damage: 0, crit: false, mult: 1 }
    const mult = typeMultiplier(type, this.type)
    let dmg = amount * mult
    if (this.mark > 0) dmg *= 1.15
    if (this.def.stats.build === 'lion') dmg *= 0.9
    const crit = Math.random() < (opts.critChance ?? 0.09)
    if (crit) dmg *= 1.65
    dmg = Math.max(1, Math.round(dmg))
    if (this.captureReady) {
      this.hp = Math.max(1, this.hp - dmg * 0.1)
    } else {
      this.hp = Math.max(0, this.hp - dmg)
    }
    this.hitFlash = 0.13
    this.flash()
    this.stateTime = 0
    if (this.state === 'idle' || this.state === 'dormant') this.state = 'aggro'
    this.game.hud.damageNumber(this.worldPos(0, this.height * 0.7), dmg, type, { crit, mult })
    this.game.audio.sfx(crit ? 'crit' : 'hit')
    if (type === 'fire' && !this.captureReady) this.burn = Math.max(this.burn, 3.5)
    if (type === 'shadow') this.game.player.heal(Math.round(dmg * 0.12), true)
    if (type === 'spirit') this.mark = Math.max(this.mark, 5)
    this.updateBar()
    this.checkThreshold()

    if (this.hp <= 0 && !this.captureReady) {
      if (this.boss) this.onBossDown()
      else this.die()
    }
    return { damage: dmg, crit, mult }
  }

  checkThreshold() {
    if (this.boss || this.captureReady) return
    if (this.hpRatio <= this.captureThreshold) {
      this.captureReady = true
      this.hp = Math.max(1, this.hp)
      this.state = 'stagger'
      this.attackWindup = 0
      this.velocity.set(0, 0, 0)
      this.stun = 0.9
      this.game.hud.toast('soul exposed', `${this.def.name} can be bonded with a soul orb.`, 'jade')
      this.game.audio.sfx('quest')
      this.updateBar()
    }
  }

  onBossDown() {
    this.hp = 0
    this.weakened = true
    this.state = 'weakened'
    this.velocity.set(0, 0, 0)
    this.captureReady = true
    this.game.audio.sfx('boss')
    this.game.onBossWeakened?.(this)
    this.bar.visible = true
    this.updateBar()
  }

  flash() {
    for (const m of this.flashMats) {
      const orig = this.originalEmissive.get(m)
      if (!orig) continue
      m.emissive.setHex(0xff5d54)
      m.emissiveIntensity = 1.6
    }
  }

  restoreFlash() {
    for (const m of this.flashMats) {
      const orig = this.originalEmissive.get(m)
      if (!orig) continue
      m.emissive.copy(orig.color)
      m.emissiveIntensity = orig.intensity
    }
  }

  worldPos(dx = 0, dy = 0, dz = 0) {
    return new THREE.Vector3(this.model.position.x + dx, this.model.position.y + dy, this.model.position.z + dz)
  }

  die() {
    if (this.dead) return
    this.dead = true
    this.state = 'dead'
    this.hp = 0
    if (this.bar) this.bar.visible = false
    this.game.burst(this.worldPos(0, this.height * 0.5), this.def.colors.glow, 26, 7)
    this.game.ring(this.worldPos(0, 0.2), this.def.colors.glow, 2.2, 10, 0.55)
    this.game.audio.sfx('hit')
    this.deathTime = 0
    this.game.onCreatureDefeated?.(this)
  }

  capture() {
    if (this.captured) return
    this.captured = true
    this.state = 'captured'
    if (this.bar) this.bar.visible = false
    this.captureRing.material.opacity = 0
    this.captureTime = 0
    this.game.audio.sfx('capture')
    this.game.burst(this.worldPos(0, this.height * 0.55), 0x8ff0ce, 36, 8)
    this.game.ring(this.worldPos(0, 0.3), 0x8ff0ce, 1, 7, 0.7)
  }

  remove() {
    this.scene.remove(this.model)
    if (this.bar) this.scene.remove(this.bar)
    this.scene.remove(this.captureRing)
    // Geometry is shared by the procedural model library, so only release the
    // per-instance materials here.
    this.model.traverse(o => {
      if (o.isMesh) {
        if (Array.isArray(o.material)) o.material.forEach(m => m.dispose?.())
        else o.material?.dispose?.()
      }
      if (o.isSprite) o.material?.dispose?.()
    })
    this.captureRing.geometry.dispose()
    this.captureRing.material.dispose()
    if (this.shadow) { this.scene.remove(this.shadow); this.shadow.geometry.dispose(); this.shadow.material.dispose() }
  }

  damagePlayer(amount) {
    this.game.player.takeDamage(amount, this)
  }

  update(dt, t, game) {
    if (this.captured) {
      this.captureTime += dt
      const k = clamp(this.captureTime / 0.65, 0, 1)
      this.model.scale.setScalar(this.baseScale * (1 - k) * (1 + Math.sin(k * Math.PI) * 0.25))
      this.model.rotation.y += dt * 14
      this.model.position.y += dt * 2.4
      if (k >= 1) { this.model.visible = false; this.removeAfter = true }
      return
    }
    if (this.dead) {
      this.deathTime += dt
      const k = clamp(this.deathTime / 1.1, 0, 1)
      this.model.scale.setScalar(this.baseScale * (1 - k))
      this.model.rotation.y += dt * 3
      this.model.position.y += dt * 0.5
      if (k >= 1) this.removeAfter = true
      return
    }

    if (this.hitFlash > 0) {
      this.hitFlash -= dt
      if (this.hitFlash <= 0) this.restoreFlash()
    }
    if (this.burn > 0) {
      this.burn -= dt
      this.burnTick -= dt
      if (this.burnTick <= 0) {
        this.burnTick = 0.65
        if (this.alive && !this.dormant) {
          const d = Math.round(this.maxHp * 0.012 + 2)
          this.hp = Math.max(this.captureReady ? 1 : 0, this.hp - d)
          this.game.hud.damageNumber(this.worldPos(0, this.height * 0.6), d, 'fire', { dot: true })
          this.updateBar()
          if (this.hp <= 0 && !this.captureReady) this.boss ? this.onBossDown() : this.die()
          this.checkThreshold()
        }
      }
    }
    if (this.slow > 0) this.slow -= dt
    if (this.mark > 0) this.mark -= dt
    if (this.stun > 0) this.stun -= dt
    if (this.attackAnim > 0) this.attackAnim -= dt

    if (this.captureReady) {
      this.captureRing.material.opacity = 0.45 + Math.sin(t * 3.4) * 0.18
      this.captureRing.position.copy(this.model.position).setY(terrainHeight(this.model.position.x, this.model.position.z) + 0.1)
      this.captureRing.scale.setScalar(1 + Math.sin(t * 2.2) * 0.05)
    } else {
      this.captureRing.material.opacity = 0
    }

    if (this.dormant) {
      this.animate(dt, t, 0, false)
      this.updateBarTransform(game.camera)
      return
    }

    if (this.state === 'stagger' || this.weakened) {
      this.animate(dt, t, 0, false)
      this.model.position.y = damp(this.model.position.y, this.baseY + (this.weakened ? 0.2 : 0), 4, dt)
      this.updateBarTransform(game.camera)
      return
    }

    if (this.state === 'idle') {
      this.updateIdle(dt, t, game)
    } else if (this.state === 'aggro') {
      this.updateCombat(dt, t, game)
    }

    // Terrain follow and gentle bob.
    const ground = terrainHeight(this.model.position.x, this.model.position.z)
    const hover = this.fly ? (this.boss ? 2.0 : 1.15) * this.scale : 0
    const targetY = ground + hover + (this.fly ? Math.sin(t * 2.1 + this.id) * 0.12 : 0)
    this.model.position.y = damp(this.model.position.y, targetY, this.fly ? 3 : 10, dt)
    if (!this.fly) {
      this.model.position.y = targetY
    }
    // Out-of-bounds / water guard.
    if (isWater(this.model.position.x, this.model.position.z) && !this.fly) {
      const toHome = new THREE.Vector3(this.home.x - this.model.position.x, 0, this.home.z - this.model.position.z)
      if (toHome.lengthSq() > 0.01) this.model.position.addScaledVector(toHome.normalize(), dt * 2)
    }
    this.animate(dt, t, this.speedNow, this.attackAnim > 0)
    this.updateBarTransform(game.camera)
  }

  updateIdle(dt, t, game) {
    this.speedNow = 0
    const p = game.player.position
    const d = dist2D(this.model.position.x, this.model.position.z, p.x, p.z)
    if (this.aggressive && d < this.aggroRange && Math.abs(p.y - this.model.position.y) < 12) {
      this.state = 'aggro'
      this.attackCooldown = 0.4 + Math.random() * 0.8
      return
    }
    this.wander.timer -= dt
    if (this.wander.timer <= 0) {
      this.wander.timer = 2 + Math.random() * 4
      const a = Math.random() * TAU
      const r = Math.random() * (this.boss ? 4 : 7)
      this.wander.x = this.home.x + Math.cos(a) * r
      this.wander.z = this.home.z + Math.sin(a) * r
    }
    const dx = this.wander.x - this.model.position.x
    const dz = this.wander.z - this.model.position.z
    const len = Math.hypot(dx, dz)
    if (len > 0.4) {
      const sp = this.moveSpeed * 0.22
      this.move(dx / len, dz / len, sp, dt)
      this.speedNow = sp
    }
    this.model.rotation.y = angleLerp(this.model.rotation.y, this.facing, 1 - Math.exp(-5 * dt))
  }

  updateCombat(dt, t, game) {
    const p = game.player.position
    const dx = p.x - this.model.position.x
    const dz = p.z - this.model.position.z
    const d = Math.hypot(dx, dz)
    if (d > this.leash * 1.7) {
      this.state = 'idle'
      this.home.x = this.model.position.x
      this.home.z = this.model.position.z
      if (this.boss) this.game.onBossLeash?.(this)
      return
    }
    this.attackCooldown -= dt
    this.speedNow = 0
    const isRanged = this.def.stats.behavior === 'ranged'
    const desired = isRanged ? (this.boss ? 10 : 7.5) : 2.2 + this.scale
    let moveDir = 0

    if (this.boss) this.updateBoss(dt, t, game, d, dx, dz)
    else if (d > desired) moveDir = 1
    else if (d < desired * 0.65) moveDir = -0.7

    if (moveDir !== 0 && this.stun <= 0) {
      const sp = this.moveSpeed * (this.slow > 0 ? 0.55 : 1) * (moveDir > 0 ? 1 : 0.65)
      this.move(dx / (d || 1), dz / (d || 1), sp * moveDir, dt)
      this.speedNow = Math.abs(sp * moveDir)
    } else {
      this.velocity.multiplyScalar(1 - Math.min(1, dt * 7))
    }

    const face = Math.atan2(-dx, -dz)
    this.model.rotation.y = angleLerp(this.model.rotation.y, face, 1 - Math.exp(-7 * dt))

    if (!this.boss && this.attackCooldown <= 0 && d < (isRanged ? 17 : desired + 2.2) && this.stun <= 0) {
      this.attackCooldown = isRanged ? 2.1 + Math.random() * 1.2 : 1.5 + Math.random() * 0.7
      this.performAttack(game, d, dx, dz, t)
    }
  }

  move(dx, dz, speed, dt) {
    const nx = this.model.position.x + dx * speed * dt
    const nz = this.model.position.z + dz * speed * dt
    if (!isWater(nx, nz) || this.fly) {
      this.model.position.x = nx
      this.model.position.z = nz
    } else {
      // Slide along the shoreline.
      if (!isWater(nx, this.model.position.z)) this.model.position.x = nx
      else if (!isWater(this.model.position.x, nz)) this.model.position.z = nz
    }
    this.facing = Math.atan2(-dx, -dz)
  }

  performAttack(game, d, dx, dz, t) {
    const isRanged = this.def.stats.behavior === 'ranged'
    if (isRanged) {
      this.attackAnim = 0.4
      const from = this.worldPos(0, this.height * 0.55)
      const target = game.player.aimPoint()
      const color = this.def.colors.glow
      const count = this.level > 5 ? 2 : 1
      for (let i = 0; i < count; i++) {
        const dir = target.clone().sub(from).normalize()
        if (count > 1) dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), (i - 0.5) * 0.18)
        game.spawnEnemyOrb(from, dir, { damage: this.damage * 0.7, speed: 13, color, radius: 0.3 * this.scale, homing: this.type === 'shadow' ? 0.4 : 0 })
      }
      game.audio.sfx('orb')
    } else {
      this.attackAnim = 0.55
      this.attackWindup = 0.35
      setTimeout(() => {
        if (!this.alive || this.dormant) return
        const pp = game.player.position
        const dd = dist2D(this.model.position.x, this.model.position.z, pp.x, pp.z)
        if (dd < 3.1 * this.scale) this.damagePlayer(this.damage)
        game.burst(this.worldPos(0, this.height * 0.4), this.def.colors.glow, 10, 4)
      }, 320)
    }
  }

  updateBoss(dt, t, game, d, dx, dz) {
    this.patternTimer -= dt
    const hpRatio = this.hpRatio
    const phase = hpRatio < 0.45 ? 2 : 1
    if (phase !== this.bossPhase) {
      this.bossPhase = phase
      this.game.hud.toast('warden enraged', `${this.bossDef.name} draws deeper on the island.`, 'coral')
      this.game.audio.sfx('boss')
    }
    if (this.patternTimer > 0) return
    const id = this.bossDef.id
    this.patternTimer = (phase === 2 ? 2.1 : 3.2) + Math.random() * 1.1
    const from = this.worldPos(0, this.height * 0.55)
    const target = game.player.aimPoint()

    if (id === 'nian-prime') {
      const roll = Math.random()
      if (roll < 0.42) {
        // Charge + quake.
        this.game.hud.toast('the mountain moves', 'Get clear of the stone circle.', 'coral')
        this.game.addShockwave(this.model.position.x, this.model.position.z, { maxRadius: 13, speed: 10, damage: this.damage * 1.1, color: 0xf4c95d, delay: 0.55 })
        if (phase === 2) this.game.addShockwave(this.model.position.x, this.model.position.z, { maxRadius: 18, speed: 8, damage: this.damage * 0.9, color: 0xffd166, delay: 1.35 })
        this.attackAnim = 1.0
      } else if (roll < 0.75) {
        // Rock volley.
        for (let i = 0; i < 3; i++) {
          const dir = target.clone().sub(from).normalize()
          dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), (i - 1) * 0.2)
          game.spawnEnemyOrb(from, dir, { damage: this.damage * 0.8, speed: 11, color: 0xf4c95d, radius: 0.5, gravity: 2.0, homing: 0 })
        }
        game.audio.sfx('orb')
      } else {
        // Lunge.
        const dir = new THREE.Vector3(dx, 0, dz).normalize()
        this.game.dashBoss(this, dir, 18, 0.45)
        setTimeout(() => {
          if (this.alive) {
            const pp = game.player.position
            if (dist2D(this.model.position.x, this.model.position.z, pp.x, pp.z) < 4.5 * this.scale) this.damagePlayer(this.damage * 1.4)
          }
        }, 430)
      }
    } else if (id === 'bakunawa-prime') {
      const roll = Math.random()
      if (roll < 0.45) {
        // Homing moon orbs.
        const n = phase === 2 ? 5 : 3
        for (let i = 0; i < n; i++) {
          const dir = target.clone().sub(from).normalize()
          dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), (i - (n - 1) / 2) * 0.18)
          game.spawnEnemyOrb(from, dir, { damage: this.damage * 0.7, speed: 9.5, color: 0x9f7bff, radius: 0.42, homing: 1.6 })
        }
        game.audio.sfx('orb')
      } else if (roll < 0.78) {
        // Sweeping beam telegraph.
        this.game.addBeamTelegraph(this.model.position.clone().setY(this.model.position.y + this.height * 0.35), target.clone(), { damage: this.damage * 1.6, color: 0xbdf2ff, width: 1.2, delay: 1.1, duration: 0.5 })
        game.audio.sfx('boss')
      } else {
        // Tide rings.
        this.game.addShockwave(this.model.position.x, this.model.position.z, { maxRadius: 16, speed: 9, damage: this.damage, color: 0x79dcff, delay: 0.3 })
      }
    } else if (id === 'quetzal-prime') {
      const roll = Math.random()
      if (roll < 0.4) {
        // Feather fan.
        const n = phase === 2 ? 9 : 6
        for (let i = 0; i < n; i++) {
          const dir = target.clone().sub(from).normalize()
          dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), (i - (n - 1) / 2) * 0.13)
          game.spawnEnemyOrb(from, dir, { damage: this.damage * 0.65, speed: 16, color: 0x8ff0ce, radius: 0.28 })
        }
        game.audio.sfx('orb')
      } else if (roll < 0.72) {
        // Dive.
        const dir = new THREE.Vector3(dx, 0, dz).normalize()
        this.game.dashBoss(this, dir, 26, 0.38, 4.5)
        this.patternTimer = 2.4
      } else {
        // Cyclone: three expanding rings.
        for (let i = 0; i < 3; i++) {
          this.game.addShockwave(this.model.position.x, this.model.position.z, { maxRadius: 8 + i * 5, speed: 12, damage: this.damage * 0.75, color: 0x8ff0ce, delay: i * 0.24 + 0.2 })
        }
      }
    } else if (id === 'anansi-unbound') {
      const roll = Math.random()
      if (roll < 0.34) {
        // Web barrage that slows.
        const n = phase === 2 ? 7 : 4
        for (let i = 0; i < n; i++) {
          const dir = target.clone().sub(from).normalize()
          dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), (i - (n - 1) / 2) * 0.2)
          game.spawnEnemyOrb(from, dir, { damage: this.damage * 0.7, speed: 12, color: 0x7dffd2, radius: 0.46, slow: 1.2 })
        }
        game.audio.sfx('orb')
      } else if (roll < 0.6) {
        // Summon spiderlings.
        this.game.summonMinions(this, 3)
        game.audio.sfx('boss')
      } else if (roll < 0.82) {
        // Expanding web nova.
        this.game.addShockwave(this.model.position.x, this.model.position.z, { maxRadius: 22, speed: 11, damage: this.damage * 1.2, color: 0xc7a4ff, delay: 0.6, slow: 1.5 })
        if (phase === 2) this.game.addShockwave(this.model.position.x, this.model.position.z, { maxRadius: 26, speed: 8, damage: this.damage, color: 0xf4c95d, delay: 1.2 })
      } else {
        // Teleport and lance.
        const a = Math.random() * TAU
        const r = 11
        this.model.position.set(game.player.position.x + Math.cos(a) * r, this.model.position.y, game.player.position.z + Math.sin(a) * r)
        this.game.burst(this.worldPos(0, this.height * 0.5), 0x7dffd2, 20, 6)
        this.game.addBeamTelegraph(this.model.position.clone().setY(this.model.position.y + this.height * 0.4), target.clone(), { damage: this.damage * 1.2, color: 0x7dffd2, width: 0.8, delay: 0.8, duration: 0.35 })
      }
    }
  }

  animate(dt, t, speed, attacking) {
    this.model.userData.animate?.(t, { speed: speed / this.scale, attacking, moving: speed })
    if (this.model.userData.bossAura) this.model.userData.bossAura.material.opacity = 0.12 + Math.sin(t * 2.4) * 0.05
    if (this.model.userData.bossLight) this.model.userData.bossLight.intensity = 1.7 + Math.sin(t * 3.2) * 0.6
  }

  updateBarTransform(camera) {
    if (!this.bar || this.weakened || this.dead || this.captured) return
    const p = this.model.position
    this.bar.position.set(p.x, p.y + this.height + 0.45, p.z)
    this.bar.quaternion.copy(camera.quaternion)
    this.bar.scale.setScalar(clamp(1.15 * this.scale, 1.0, 2.6))
  }

  getScreenTarget() {
    return { name: this.name, hp: clamp(this.hp / this.maxHp, 0, 1), captureReady: this.captureReady, boss: this.boss }
  }
}
