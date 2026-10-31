import * as THREE from 'three'
import { CREATURES, SHRINES, TYPES } from './constants.js'
import { clamp, formatTime, mod } from './utils.js'
import { terrainHeight, zoneAt } from './terrain.js'

const $ = (sel) => document.querySelector(sel)
const $$ = (sel) => [...document.querySelectorAll(sel)]

export class Hud {
  constructor(game) {
    this.game = game
    this.camera = game.camera
    this.world = game.world
    this.bonded = new Set()
    this.portraits = {}
    this.objectives = []
    this.questTarget = null
    this.zone = 'PIMENTO BEACH'
    this.target = null
    this.dialogueOpen = false
    this.dialogue = null
    this.captureTimer = null
    this.fpsFrames = 0
    this.fpsTime = 0
    this.fps = 60
    this.codexBuilt = false
    this.lastDamageNodes = []
    this.el = {
      hud: $('#hud'),
      title: $('#title-screen'),
      loading: $('#loading'),
      loadFill: $('#load-fill'),
      loadStatus: $('#load-status'),
      level: $('#player-level'),
      hpFill: $('#hp-fill'), hpGhost: $('#hp-ghost'), hpText: $('#hp-text'),
      shieldRow: $('#shield-row'), shieldFill: $('#shield-fill'), shieldText: $('#shield-text'),
      aetherFill: $('#aether-fill'), aetherText: $('#aether-text'),
      xpFill: $('#xp-fill'), xpText: $('#xp-text'),
      compass: $('#compass'), compassTicks: $('#compass-strip'), compassMarkers: $('#compass-markers'),
      questTitle: $('#quest-title'), questDesc: $('#quest-desc'), questFill: $('#quest-progress-fill'),
      questProgress: $('#quest-progress-text'), questDistance: $('#quest-distance'),
      minimap: $('#minimap'),
      crosshair: $('#crosshair'), hitmarker: $('#hitmarker'), targetTag: $('#target-tag'),
      targetName: $('#target-name'), targetHp: $('#target-hp'), captureTag: $('#capture-tag'),
      damageLayer: $('#damage-layer'), toasts: $('#toasts'),
      party: $('#party'),
      compCard: $('#companion-card'), compImg: $('#comp-img'), compName: $('#comp-name'),
      compType: $('#comp-type'), compCd: $('#comp-cd-fill'), compAbility: $('#comp-ability'),
      orbCount: $('#orb-count'), orbRecharge: $('#orb-recharge').querySelector('i'),
      prompt: $('#prompt'), promptText: $('#prompt-text'), promptKey: $('#prompt kbd'),
      bossBar: $('#boss-bar'), bossName: $('#boss-name'), bossTitle: $('#boss-title'),
      bossHpFill: $('#boss-hp-fill'), bossHpText: $('#boss-hp-text'), bossHint: $('#boss-hint'),
      zone: $('#zone-name'), fps: $('#fps'),
      codex: $('#codex'), codexGrid: $('#codex-grid'), codexCount: $('#codex-count'),
      howto: $('#howto'), pause: $('#pause'), death: $('#death'), victory: $('#victory'),
      capture: $('#capture-overlay'), captureName: $('#capture-name'), captureEpithet: $('#capture-epithet'),
      captureOrigin: $('#capture-origin'),
      bossIntro: $('#boss-intro'), bossIntroName: $('#boss-intro-name'), bossIntroTitle: $('#boss-intro-eyebrow'),
      bossIntroLore: $('#boss-intro-lore'), bossIntroEyebrow: $('#boss-intro-eyebrow'),
      dialogue: $('#dialogue'), npcName: $('#npc-name'), npcRole: $('#npc-role'), npcGlyph: $('#npc-glyph'),
      dialogueText: $('#dialogue-text'), dialogueNext: $('#dialogue-next'),
      touch: $('#touch-ui'), talkBtn: $('#btn-talk'),
      soundBtns: $$('#sound-toggle, #pause-sound'),
      hurtFlash: $('#hurt-flash'), zoneBanner: $('#zone-banner'),
      pauseBonded: $('#pause-bonded'), pauseWardens: $('#pause-wardens'), pauseLevel: $('#pause-level'),
      victoryBonded: $('#victory-bonded'), victoryLevel: $('#victory-level'), victoryTime: $('#victory-time'),
    }
    this.buildMinimapBase()
    this.buildCompass()
    this.bindUI()
    this.syncSoundButton()
  }

  bindUI() {
    $$('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.close
        this.closeOverlay(type)
        this.game.onOverlayClose?.(type)
        this.game.audio.sfx('ui')
      })
    })
    this.el.party?.querySelectorAll('.party-slot').forEach((slot, i) => {
      slot.addEventListener('click', () => { this.game.onSelectBond?.(i) })
    })
    this.el.dialogueNext.addEventListener('click', () => this.advanceDialogue())
    this.el.codexGrid.addEventListener('click', (e) => {
      const entry = e.target.closest('.codex-entry')
      if (entry?.classList.contains('bonded')) this.game.onSelectBondById?.(entry.dataset.id)
    })
    this.el.soundBtns.forEach(btn => btn.addEventListener('click', () => {
      const on = this.game.audio.toggle()
      this.syncSoundButton()
      this.game.audio.sfx('ui')
    }))
  }

  syncSoundButton() {
    const on = this.game.audio.enabled
    this.el.soundBtns.forEach(btn => { btn.textContent = on ? 'SOUND ON' : 'SOUND OFF' })
    const pauseSound = $('#pause-sound')
    if (pauseSound) pauseSound.textContent = on ? 'SOUND ON' : 'SOUND OFF'
  }

  setPortraits(map) {
    this.portraits = map
    $$('#title-cards .spirit-card').forEach(card => {
      const id = card.dataset.creature
      const img = card.querySelector('img')
      if (img && map[id]) img.src = map[id]
    })
    this.syncParty()
    this.syncCodex()
  }

  setLoading(progress, text) {
    this.el.loadFill.style.width = `${Math.round(progress * 100)}%`
    if (text) this.el.loadStatus.textContent = text
  }

  hideLoading() {
    this.el.loading.classList.add('fade')
    setTimeout(() => this.el.loading.classList.add('hidden'), 750)
  }

  hideTitle() {
    this.el.title.classList.add('hide')
    setTimeout(() => this.el.title.classList.add('hidden'), 850)
  }

  showHud() { this.el.hud.classList.remove('hidden') }
  showTouch(show) { this.el.touch.classList.toggle('hidden', !show) }

  // ------------------------------------------------------------------ VITALS
  syncVitals() { this.game.player?.updateHud(this.game) }
  updateVitals(v) {
    const hp = clamp(v.hp / v.maxHp, 0, 1)
    this.el.hpFill.style.width = `${hp * 100}%`
    this.el.hpGhost.style.width = `${hp * 100}%`
    this.el.hpText.textContent = `${Math.ceil(v.hp)}`
    this.el.level.textContent = v.level
    this.el.aetherFill.style.width = `${clamp(v.aether / v.maxAether, 0, 1) * 100}%`
    this.el.aetherText.textContent = `${Math.round(v.aether)}`
    this.el.xpFill.style.width = `${clamp(v.xp / v.xpNext, 0, 1) * 100}%`
    this.el.xpText.textContent = `${v.xp} / ${v.xpNext}`
    if (v.shieldMax > 0) {
      this.el.shieldRow.classList.remove('hidden')
      this.el.shieldFill.style.width = `${clamp(v.shield / v.shieldMax, 0, 1) * 100}%`
      this.el.shieldText.textContent = `${Math.ceil(v.shield)}`
    } else {
      this.el.shieldRow.classList.add('hidden')
    }
  }

  updateOrbRecharge(ratio) {
    this.el.orbRecharge.style.width = `${clamp(ratio, 0, 1) * 100}%`
  }

  syncOrbs() {
    this.el.orbCount.textContent = this.game.player?.orbs ?? 0
    this.el.orbRecharge.style.width = '0%'
  }

  updateBloom(bloom, moving, airborne) {
    this.el.crosshair.style.setProperty('--spread', `${9 + bloom * 13 + moving * 4 + (airborne ? 4 : 0)}px`)
  }

  setCrosshairDanger(danger) {
    this.el.crosshair.classList.toggle('danger', danger)
  }

  playerHit() {
    this.el.hurtFlash.classList.remove('hit')
    void this.el.hurtFlash.offsetWidth
    this.el.hurtFlash.classList.add('hit')
  }

  hitmark(crit, superHit) {
    const h = this.el.hitmarker
    h.classList.remove('show', 'kill')
    void h.offsetWidth
    h.classList.add('show')
    if (superHit) h.classList.add('kill')
  }

  setTarget(creature, dist) {
    this.target = creature
    if (!creature) {
      this.el.targetTag.classList.remove('show')
      this.el.captureTag.classList.remove('show')
      return
    }
    this.el.targetTag.classList.add('show')
    this.el.targetName.textContent = `${creature.name} · LV ${creature.level}`
    this.el.targetHp.style.setProperty('--hp', `${clamp(creature.hp / creature.maxHp, 0, 1) * 100}%`)
    this.el.captureTag.classList.toggle('show', creature.captureReady)
  }

  // ------------------------------------------------------------------ COMPANION / PARTY
  syncParty() {
    const player = this.game.player
    if (!player) return
    const slots = $$('.party-slot')
    slots.forEach((slot, i) => {
      const bond = player.party[i]
      slot.classList.toggle('empty', !bond)
      slot.classList.toggle('active', i === player.activeIndex)
      const art = slot.querySelector('.slot-art')
      const name = slot.querySelector('.slot-meta b')
      const sub = slot.querySelector('.slot-meta small')
      let dot = slot.querySelector('.slot-type')
      if (bond) {
        const img = this.portraits[bond.def.id]
        art.style.backgroundImage = img ? `url(${img})` : 'none'
        name.textContent = bond.name
        sub.textContent = TYPES[bond.def.type].name.toUpperCase()
        if (!dot) {
          dot = document.createElement('span')
          dot.className = 'slot-type'
          slot.appendChild(dot)
        }
        dot.style.background = TYPES[bond.def.type].color
        dot.style.boxShadow = `0 0 6px ${TYPES[bond.def.type].color}`
      } else {
        art.style.backgroundImage = 'none'
        name.textContent = '—'
        sub.textContent = 'EMPTY'
        dot?.remove()
      }
    })
    this.syncCompanion()
  }

  syncCompanion() {
    const player = this.game.player
    const bond = player?.activeBond
    if (!bond) {
      this.el.compCard.classList.add('hidden')
      return
    }
    this.el.compCard.classList.remove('hidden')
    const img = this.portraits[bond.def.id]
    if (img) this.el.compImg.src = img
    this.el.compName.textContent = bond.name
    this.el.compType.textContent = TYPES[bond.def.type].name.toUpperCase()
    this.el.compType.className = `comp-type ${bond.def.type}`
    this.el.compAbility.textContent = `Q · ${bond.def.ability.name}`
  }

  updateCompanion(cd, max) {
    const ratio = max > 0 ? 1 - cd / max : 1
    this.el.compCd.style.transform = `scaleX(${clamp(ratio, 0, 1)})`
  }

  // ------------------------------------------------------------------ CODEX
  setBonded(ids) {
    this.bonded = new Set(ids)
    this.syncCodex()
  }

  markBonded(id) {
    this.bonded.add(id)
    this.syncCodex()
  }

  syncCodex() {
    if (!this.el.codexGrid) return
    if (!this.codexBuilt) this.buildCodex()
    $$('.codex-entry').forEach(entry => {
      const id = entry.dataset.id
      const isBonded = this.bonded.has(id)
      entry.classList.toggle('bonded', isBonded)
      entry.classList.toggle('unknown', !isBonded)
      const tag = entry.querySelector('.bonded-tag')
      if (tag) tag.style.display = isBonded ? 'block' : 'none'
    })
    this.el.codexCount.textContent = `${this.bonded.size} / ${CREATURES.length} BONDED`
  }

  buildCodex() {
    this.codexBuilt = true
    this.el.codexGrid.innerHTML = CREATURES.map(def => `
      <article class="codex-entry unknown" data-id="${def.id}">
        <div class="codex-art"><img src="${this.portraits[def.id] || ''}" alt="${def.name}" loading="lazy" /></div>
        <div class="codex-num">NO. ${String(def.no).padStart(3, '0')}</div>
        <span class="bonded-tag" style="display:none">BONDED</span>
        <h3>${def.name}</h3>
        <span class="origin">${def.origin}</span>
        <span class="type-pill ${def.type}">${TYPES[def.type].name.toUpperCase()}</span>
        <p>${def.lore}</p>
        <div class="passive"><b>${def.passive.name}</b> — ${def.passive.desc}</div>
      </article>
    `).join('')
  }

  // ------------------------------------------------------------------ EXPLORATION
  setQuest(q) {
    this.el.questTitle.textContent = q.title
    this.el.questDesc.textContent = q.desc
    this.el.questFill.style.width = `${clamp(q.progress ?? 0, 0, 1) * 100}%`
    this.el.questProgress.textContent = q.progressText ?? ''
    this.questTarget = q.target ?? null
  }

  setObjectives(objectives) {
    this.objectives = objectives
    this.el.compassMarkers.innerHTML = ''
    for (const obj of objectives) {
      const marker = document.createElement('div')
      marker.className = `compass-marker ${obj.kind || ''}`
      marker.innerHTML = '<span></span>'
      marker.title = obj.label || ''
      this.el.compassMarkers.appendChild(marker)
      obj.el = marker
    }
  }

  setZone(name) {
    if (name === this.zone) return
    this.zone = name
    this.el.zone.textContent = name
    this.el.zoneBanner.querySelector('b').textContent = name
    this.el.zoneBanner.classList.remove('show')
    void this.el.zoneBanner.offsetWidth
    this.el.zoneBanner.classList.add('show')
  }

  buildCompass() {
    const dirs = [['N', 0], ['NE', 45], ['E', 90], ['SE', 135], ['S', 180], ['SW', 225], ['W', 270], ['NW', 315]]
    const ticks = []
    for (let deg = 0; deg < 360; deg += 15) {
      const label = dirs.find(d => d[1] === deg)?.[0]
      const t = document.createElement('div')
      t.className = `compass-tick ${label ? 'major' : ''}`
      t.textContent = label || '·'
      t.dataset.angle = deg
      this.el.compassTicks.appendChild(t)
      ticks.push(t)
    }
    this.compassTicks = ticks
  }

  updateExploration(player, world, targetYaw, dt = 1 / 60) {
    this.updateCompass(player, targetYaw)
    this.updateMinimap(player, world)
    if (this.questTarget) {
      const d = Math.hypot(player.position.x - this.questTarget.x, player.position.z - this.questTarget.z)
      this.el.questDistance.textContent = d > 200 ? '— m' : `${Math.round(d)} m`
    } else this.el.questDistance.textContent = '— m'
    const zone = zoneAt(player.position.x, player.position.z)
    this.setZone(zone.name)

    this.fpsFrames++
    this.fpsTime += dt
    if (this.fpsTime > 0.7) {
      this.fps = Math.round(this.fpsFrames / this.fpsTime)
      this.el.fps.textContent = `${this.fps} FPS`
      this.fpsFrames = 0
      this.fpsTime = 0
    }
  }

  updateCompass(player, yaw) {
    const W = this.el.compass.clientWidth || 430
    const center = W / 2
    const half = W / 2
    const span = Math.PI * 0.62
    for (const t of this.compassTicks) {
      const angle = (Number(t.dataset.angle) / 180) * Math.PI
      let delta = mod(angle - yaw + Math.PI, Math.PI * 2) - Math.PI
      if (Math.abs(delta) > span) { t.style.display = 'none'; continue }
      t.style.display = 'block'
      t.style.left = `${center + (delta / span) * half}px`
      t.style.opacity = String(1 - Math.abs(delta) / span * 0.7)
    }
    for (const obj of this.objectives) {
      if (!obj.el) continue
      const dx = obj.x - player.position.x
      const dz = obj.z - player.position.z
      const bearing = Math.atan2(dx, -dz)
      let delta = mod(bearing - yaw + Math.PI, Math.PI * 2) - Math.PI
      if (Math.abs(delta) > span * 1.02) { obj.el.style.display = 'none'; continue }
      obj.el.style.display = 'block'
      obj.el.style.left = `${center + (delta / span) * half}px`
    }
  }

  buildMinimapBase() {
    const size = 220
    const canvas = document.createElement('canvas')
    canvas.width = size; canvas.height = size
    const ctx = canvas.getContext('2d')
    const img = ctx.createImageData(size, size)
    const color = new THREE.Color()
    const range = 150
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const wx = (x / size) * range * 2 - range
        const wz = (y / size) * range * 2 - range
        const h = terrainHeight(wx, wz)
        if (h < -0.2) color.setHex(0x0a3d52).lerp(new THREE.Color(0x126976), clamp((h + 8) / 8, 0, 1))
        else if (h < 1.4) color.setHex(0xd9bd82)
        else if (h < 2.6) color.setHex(0xbfa96b).lerp(new THREE.Color(0x5d8c4a), (h - 1.4) / 1.2)
        else if (h < 15) color.setHex(0x467a44).lerp(new THREE.Color(0x2e5c39), (h - 2.6) / 12)
        else color.setHex(0x6b6a58).lerp(new THREE.Color(0x8a8977), clamp((h - 15) / 12, 0, 1))
        const n = 0.92 + Math.random() * 0.16
        const i = (y * size + x) * 4
        img.data[i] = clamp(color.r * 255 * n, 0, 255)
        img.data[i + 1] = clamp(color.g * 255 * n, 0, 255)
        img.data[i + 2] = clamp(color.b * 255 * n, 0, 255)
        img.data[i + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)
    // Paths.
    ctx.strokeStyle = 'rgba(225,193,139,.55)'
    ctx.lineWidth = 2.2
    ctx.lineCap = 'round'
    for (const pts of [worldPath('main'), worldPath('grove'), worldPath('reef')]) {
      ctx.beginPath()
      pts.forEach((p, i) => {
        const x = (p[0] + range) / (range * 2) * size
        const y = (p[2] + range) / (range * 2) * size
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
      })
      ctx.stroke()
    }
    this.minimapBase = canvas
    this.minimapCtx = this.el.minimap.getContext('2d')
  }

  updateMinimap(player, world) {
    const ctx = this.minimapCtx
    const size = 220
    const range = 150
    ctx.clearRect(0, 0, size, size)
    ctx.save()
    ctx.beginPath(); ctx.arc(size / 2, size / 2, size / 2 - 1, 0, Math.PI * 2); ctx.clip()
    // Slight zoom around the player.
    const zoom = 1.55
    ctx.translate(size / 2, size / 2)
    ctx.scale(zoom, zoom)
    ctx.translate(-(player.position.x + range) / (range * 2) * size, -(player.position.z + range) / (range * 2) * size)
    ctx.drawImage(this.minimapBase, 0, 0)
    const toMap = (x, z) => [(x + range) / (range * 2) * size, (z + range) / (range * 2) * size]
    // Shrines.
    for (const key of ['mountain', 'reef', 'canopy', 'tree']) {
      const s = SHRINES[key]
      const [x, y] = toMap(s.x, s.z)
      ctx.fillStyle = key === 'tree' ? 'rgba(244,201,93,.8)' : 'rgba(143,240,206,.65)'
      ctx.beginPath(); ctx.moveTo(x, y - 4); ctx.lineTo(x + 3, y); ctx.lineTo(x, y + 4); ctx.lineTo(x - 3, y); ctx.closePath(); ctx.fill()
    }
    // Creatures.
    for (const c of this.game.creatures) {
      if (!c.alive || c.dormant) continue
      const d = Math.hypot(c.model.position.x - player.position.x, c.model.position.z - player.position.z)
      if (d > 80) continue
      const [x, y] = toMap(c.model.position.x, c.model.position.z)
      ctx.globalAlpha = clamp(1 - d / 90, 0.15, 0.9)
      ctx.fillStyle = c.captureReady ? '#f4c95d' : c.boss ? '#ff5d54' : '#ff8c69'
      ctx.beginPath(); ctx.arc(x, y, c.boss ? 3.5 : 2, 0, Math.PI * 2); ctx.fill()
      if (c.boss) { ctx.strokeStyle = 'rgba(255,93,84,.5)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x, y, 5.5 + Math.sin(this.game.time * 3) * 1.5, 0, Math.PI * 2); ctx.stroke() }
      ctx.globalAlpha = 1
    }
    // Pickups.
    for (const p of world.pickups) {
      if (!p.active) continue
      const [x, y] = toMap(p.x, p.z)
      ctx.fillStyle = 'rgba(255,211,112,.5)'
      ctx.fillRect(x - 1, y - 1, 2, 2)
    }
    // NPCs.
    for (const npc of world.npcModels) {
      const [x, y] = toMap(npc.x, npc.z)
      ctx.fillStyle = '#37d6a5'
      ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill()
    }
    // Quest target pulse.
    if (this.questTarget) {
      const [x, y] = toMap(this.questTarget.x, this.questTarget.z)
      ctx.strokeStyle = 'rgba(244,201,93,.9)'
      ctx.lineWidth = 1.6
      const r = 4 + Math.sin(this.game.time * 2.6) * 2
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke()
    }
    ctx.restore()
    // Player arrow (screen space, fixed at center).
    ctx.save()
    ctx.translate(size / 2, size / 2)
    ctx.rotate(-player.yaw)
    ctx.fillStyle = '#f4c95d'
    ctx.strokeStyle = 'rgba(0,0,0,.55)'
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(0, -7); ctx.lineTo(5, 6); ctx.lineTo(0, 3); ctx.lineTo(-5, 6); ctx.closePath(); ctx.fill(); ctx.stroke()
    ctx.restore()
    // View cone.
    ctx.save()
    ctx.translate(size / 2, size / 2)
    ctx.rotate(-player.yaw)
    const g = ctx.createLinearGradient(0, 0, 0, -34)
    g.addColorStop(0, 'rgba(244,201,93,.12)')
    g.addColorStop(1, 'rgba(244,201,93,0)')
    ctx.fillStyle = g
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-18, -34); ctx.lineTo(18, -34); ctx.closePath(); ctx.fill()
    ctx.restore()
  }

  // ------------------------------------------------------------------ COMBAT UI
  damageNumber(worldPos, amount, type = 'damage', opts = {}) {
    if (!worldPos) return
    const v = worldPos.clone().project(this.camera)
    if (v.z > 1 || v.z < -1) return
    const x = (v.x * 0.5 + 0.5) * window.innerWidth
    const y = (-v.y * 0.5 + 0.5) * window.innerHeight
    if (x < -80 || x > window.innerWidth + 80 || y < -80 || y > window.innerHeight + 80) return
    const d = document.createElement('div')
    d.className = `dmg ${opts.crit ? 'crit' : ''} ${opts.super ? 'super' : ''} ${opts.resist ? 'resist' : ''} ${opts.heal ? 'heal' : ''} ${opts.absorb ? 'resist' : ''}`
    d.textContent = opts.absorb ? `+${amount} ◈` : opts.heal ? `+${amount}` : `${amount}${opts.crit ? '!' : ''}`
    d.style.left = `${x}px`
    d.style.top = `${y}px`
    if (type === 'fire') d.style.color = '#ffb36b'
    else if (type === 'water') d.style.color = '#9fe9ff'
    else if (type === 'earth') d.style.color = '#ffe7a1'
    else if (type === 'air') d.style.color = '#b8ffe5'
    else if (type === 'spirit') d.style.color = '#e3d0ff'
    else if (type === 'shadow') d.style.color = '#c7a4ff'
    else if (opts.player) d.style.color = '#ff8a84'
    this.el.damageLayer.appendChild(d)
    this.lastDamageNodes.push(d)
    if (this.lastDamageNodes.length > 30) this.lastDamageNodes.shift()?.remove()
    setTimeout(() => d.remove(), 900)
  }

  toast(title, desc, kind = '') {
    const t = document.createElement('div')
    t.className = `toast ${kind}`
    t.innerHTML = `<b>${title}</b>${desc ? ` — ${desc}` : ''}`
    this.el.toasts.appendChild(t)
    while (this.el.toasts.children.length > 3) this.el.toasts.firstChild.remove()
    setTimeout(() => t.remove(), 3400)
  }

  showPrompt(text, key = 'F') {
    this.el.prompt.classList.remove('hidden')
    this.el.promptText.textContent = text
    this.el.promptKey.textContent = key
    this.el.talkBtn.classList.remove('hidden')
  }

  hidePrompt() {
    this.el.prompt.classList.add('hidden')
    this.el.talkBtn.classList.add('hidden')
  }

  showBoss(boss) {
    this.el.bossBar.classList.remove('hidden')
    this.el.bossName.textContent = boss.name
    this.el.bossTitle.textContent = boss.bossDef.warden
    this.el.bossHint.textContent = `${TYPES[boss.type].name.toUpperCase()} WARDEN · ${boss.weakened ? 'WEAKENED' : 'SHRINE GUARDIAN'}`
    this.updateBoss(boss)
  }

  updateBoss(boss) {
    if (!boss) return
    const ratio = clamp(boss.hp / boss.maxHp, 0, 1)
    this.el.bossHpFill.style.width = `${ratio * 100}%`
    this.el.bossHpText.textContent = boss.weakened ? 'WEAKENED' : `${Math.ceil(boss.hp)} / ${boss.maxHp}`
    this.el.bossHint.textContent = boss.weakened ? 'THROW A SOUL ORB TO BIND THE WARDEN' : `${TYPES[boss.type].name.toUpperCase()} WARDEN · ${boss.bossDef.shrine.toUpperCase()} SHRINE`
  }

  hideBoss() { this.el.bossBar.classList.add('hidden') }

  showBossIntro(boss) {
    this.el.bossIntroTitle.textContent = boss.bossDef.warden
    this.el.bossIntroName.textContent = boss.name
    this.el.bossIntroLore.textContent = boss.bossDef.intro
    this.el.bossIntro.classList.remove('hidden')
    this.el.bossIntro.style.animation = 'none'
    void this.el.bossIntro.offsetWidth
    this.el.bossIntro.style.animation = ''
    clearTimeout(this.bossIntroTimer)
    this.bossIntroTimer = setTimeout(() => this.el.bossIntro.classList.add('hidden'), 4100)
  }

  showCapture(def) {
    clearTimeout(this.captureTimer)
    this.el.captureName.textContent = def.name
    this.el.captureEpithet.textContent = def.epithet
    this.el.captureOrigin.textContent = def.origin
    this.el.capture.classList.remove('hidden')
    this.el.capture.style.display = 'flex'
    const flash = this.el.capture.querySelector('.capture-flash')
    const orb = this.el.capture.querySelector('.capture-orb')
    const copy = this.el.capture.querySelector('.capture-copy')
    for (const el of [flash, orb, copy]) { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = '' }
    this.captureTimer = setTimeout(() => { this.el.capture.classList.add('hidden'); this.el.capture.style.display = '' }, 1900)
  }

  // ------------------------------------------------------------------ DIALOGUE
  openDialogue(npc, lines, onEnd) {
    this.dialogueOpen = true
    this.dialogue = { npc, lines, index: 0, onEnd, typing: false, timer: null }
    this.el.npcName.textContent = npc.name
    this.el.npcRole.textContent = npc.role
    this.el.npcGlyph.textContent = npc.glyph
    this.el.dialogue.classList.remove('hidden')
    this.typeLine()
  }

  typeLine() {
    const d = this.dialogue
    if (!d) return
    clearInterval(d.timer)
    d.typing = true
    const line = d.lines[d.index]
    let i = 0
    this.el.dialogueText.textContent = ''
    d.timer = setInterval(() => {
      i += 2
      this.el.dialogueText.textContent = line.slice(0, i)
      if (i >= line.length) { clearInterval(d.timer); d.typing = false; this.el.dialogueText.textContent = line }
    }, 13)
  }

  advanceDialogue() {
    const d = this.dialogue
    if (!d) return
    if (d.typing) {
      clearInterval(d.timer)
      d.typing = false
      this.el.dialogueText.textContent = d.lines[d.index]
      return
    }
    if (d.index < d.lines.length - 1) {
      d.index++
      this.typeLine()
      this.game.audio.sfx('ui')
    } else {
      this.closeDialogue()
      d.onEnd?.()
    }
  }

  closeDialogue() {
    const d = this.dialogue
    if (d) clearInterval(d.timer)
    this.dialogue = null
    this.dialogueOpen = false
    this.el.dialogue.classList.add('hidden')
  }

  // ------------------------------------------------------------------ OVERLAYS
  openOverlay(type) {
    this.closeOverlay(type, true)
    const map = { codex: this.el.codex, howto: this.el.howto, pause: this.el.pause, death: this.el.death, victory: this.el.victory }
    map[type]?.classList.remove('hidden')
  }

  closeOverlay(type, keep) {
    const map = { codex: this.el.codex, howto: this.el.howto, pause: this.el.pause, death: this.el.death, victory: this.el.victory }
    map[type]?.classList.add('hidden')
    if (!keep) this.game.audio.sfx('ui')
  }

  openCodex() {
    this.syncCodex()
    this.openOverlay('codex')
  }

  openHowTo() { this.openOverlay('howto') }

  openPause(player, wardenCount) {
    this.el.pauseBonded.textContent = this.bonded.size
    this.el.pauseWardens.textContent = `${wardenCount}/3`
    this.el.pauseLevel.textContent = player.level
    this.syncSoundButton()
    this.openOverlay('pause')
  }

  showDeath() { this.openOverlay('death') }
  hideDeath() { this.closeOverlay('death', true) }

  showVictory(stats) {
    this.el.victoryBonded.textContent = stats.bonded
    this.el.victoryLevel.textContent = stats.level
    this.el.victoryTime.textContent = formatTime(stats.time)
    this.openOverlay('victory')
  }

  hideVictory() { this.closeOverlay('victory', true) }
}

function worldPath(name) {
  // Avoids a circular import while keeping the map paths in sync with the world.
  const map = {
    main: [[8, 92], [12, 78], [18, 62], [25, 48], [28, 36], [21, 24], [8, 14], [-8, 6], [-22, -2], [-31, -9], [-40, -17], [-47, -25]],
    grove: [[28, 36], [24, 22], [20, 8], [14, -8], [9, -24], [5, -38], [1, -52], [-1, -61]],
    reef: [[25, 48], [38, 45], [50, 40], [58, 31], [64, 20], [66, 10]],
  }
  return map[name].map(([x, z]) => [x, terrainHeight(x, z), z])
}
