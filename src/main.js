import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import './style.css'
import { SoundEngine } from './audio.js'
import { Hud } from './hud.js'
import { Input } from './input.js'
import { World } from './world.js'
import { Player } from './player.js'
import { Creature } from './creatures.js'
import { buildCreature, buildSoulOrb } from './models.js'
import {
  BOSSES, CREATURE_BY_ID, CREATURES, FINAL_BOSS, NPCS, PARTY_MAX, SHRINES,
  TYPES, typeMultiplier,
} from './constants.js'
import {
  clamp, canvasPortrait, formatTime, glowSprite, lerp, radialTexture, range, TAU,
} from './utils.js'
import { SHRINE_BAKUNAWA, SHRINE_NIAN, SHRINE_QUETZAL, SILK_TREE, terrainHeight, zoneAt } from './terrain.js'

const query = new URLSearchParams(location.search)
const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window

class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas')
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 900)
    this.clock = new THREE.Timer()
    this.clock.connect(document)
    this.time = 0
    this.elapsed = 0
    this.mode = 'loading'
    this.creatures = []
    this.playerOrbs = []
    this.enemyOrbs = []
    this.allyBolts = []
    this.bursts = []
    this.rings = []
    this.tracers = []
    this.dashTrails = []
    this.shockwaves = []
    this.beams = []
    this.bossDashes = []
    this.droppedOrbs = []
    this.bosses = []
    this.activeBoss = null
    this.purified = new Set()
    this.questStage = 0
    this.talked = new Set()
    this.respawnQueue = []
    this.titleCreatures = []
    this.slowmo = 0
    this.timeScale = 1
    this.introTimer = null
    this.started = false
    this.nearNpc = null
    this.lastPrompt = ''
    this.overlayStack = []
    this.overlayReturn = null
    this.fps = 60
    this.fpsAccum = 0
    this.fpsFrames = 0
    this.particleTex = radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)', 64)
    this._v = new THREE.Vector3()
    this._v2 = new THREE.Vector3()
    this._lineDist = new THREE.Line3()

    this.setupRenderer()
    this.audio = new SoundEngine()
    this.input = new Input(this)
    this.hud = new Hud(this)
    this.onResize = () => this.resize()
    window.addEventListener('resize', this.onResize)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.mode === 'playing') this.pauseGame()
    })
    this.bindButtons()
    this.init()
  }

  setupRenderer() {
    const gl = this.canvas.getContext('webgl2', { antialias: true, alpha: false, powerPreference: 'high-performance' })
    const debugInfo = gl?.getExtension('WEBGL_debug_renderer_info')
    const gpu = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : ''
    const software = /swiftshader|llvmpipe|software/i.test(gpu)
    const qualityParam = query.get('quality')
    this.quality = qualityParam === 'low' || isTouch || software ? 'low' : 'high'
    this.softwareRenderer = software
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas, antialias: !isTouch, powerPreference: 'high-performance',
      alpha: false, stencil: false, preserveDrawingBuffer: false,
    })
    this.renderer.setPixelRatio(this.quality === 'low' ? Math.min(window.devicePixelRatio, 1.35) : Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.08
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.info.autoReset = true
    this.composer = null
    if (this.quality === 'high') {
      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(new RenderPass(this.scene, this.camera))
      const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.38, 0.55, 0.86)
      this.composer.addPass(bloom)
      this.composer.addPass(new OutputPass())
      this.bloomPass = bloom
    }
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
    this.composer?.setSize(w, h)
    if (this.hud) this.hud.el.minimap.style.width = '100%'
  }

  async init() {
    const frame = () => new Promise(resolve => requestAnimationFrame(() => resolve()))
    this.hud.setLoading(0.08, 'Charting the island…')
    await frame()
    this.world = new World(this.scene, this.renderer, { quality: this.quality })
    this.hud.world = this.world
    this.hud.setLoading(0.38, 'Raising the Blue Mountains…')
    await frame()
    this.player = new Player(this)
    this.hud.player = this.player
    this.hud.setLoading(0.58, 'Weaving the old stories…')
    await frame()
    this.spawnWorld()
    this.hud.setLoading(0.74, 'Painting the spirits…')
    await frame()
    this.buildPortraits()
    this.hud.setLoading(0.9, 'Tuning the steel drums…')
    await frame()
    this.setupTitleScene()
    this.hud.setLoading(1, 'The island is listening.')
    await frame()
    this.hud.hideLoading()
    this.player.root.visible = false
    this.mode = 'title'
    this.input.setEnabled(false)
    console.info(`[SOUL YARD] ${gpuLabel(this.renderer)} · quality=${this.quality}`)
    if (query.get('play') === '1') {
      this.startGame(true)
    } else {
      this.hud.toast('welcome to pimento isle', 'Enter the island when you are ready.', 'jade')
    }
    this.loop()
  }

  buildPortraits() {
    const map = {}
    for (const def of CREATURES) {
      try {
        const url = canvasPortrait(this.renderer, () => {
          const model = buildCreature(def, { scale: 1 })
          if (model.userData.bar) model.remove(model.userData.bar)
          return model
        }, 192)
        map[def.id] = url
      } catch (e) {
        console.warn('portrait failed', def.id, e)
      }
    }
    this.portraits = map
    this.hud.setPortraits(map)
  }

  spawnWorld() {
    for (const def of CREATURES) {
      const spawn = def.spawn
      for (let i = 0; i < spawn.count; i++) {
        let x, z, guard = 0
        do {
          const a = Math.random() * TAU
          const r = Math.sqrt(Math.random()) * spawn.radius
          x = spawn.x + Math.cos(a) * r
          z = spawn.z + Math.sin(a) * r
          guard++
        } while (guard < 30 && (terrainHeight(x, z) < 1.4 || this.world.isBlocked(x, z, 1.4) || Math.hypot(x - 9, z - 84) < 8))
        if (terrainHeight(x, z) < 1.2) continue
        const level = Math.floor(range(Math.random, spawn.levels[0], spawn.levels[1] + 1))
        const c = new Creature(def, { game: this, scene: this.scene, x, z, level })
        this.creatures.push(c)
      }
    }
    // Guardians, asleep at their shrines.
    for (const def of BOSSES) {
      const species = CREATURE_BY_ID[def.species]
      const pos = def.final ? { x: -2, z: -53 } : SHRINES[def.shrine]
      const boss = new Creature(species, {
        game: this, scene: this.scene, x: pos.x, z: pos.z,
        level: def.level, boss: true, bossDef: def, final: def.final,
      })
      boss.model.visible = !def.final
      this.bosses.push(boss)
      this.creatures.push(boss)
    }
  }

  setupTitleScene() {
    this.camera.position.set(23, 13, 106)
    this.camera.lookAt(2, 9, 62)
    this.camera.fov = 55
    this.camera.updateProjectionMatrix()
    const defs = [
      { id: 'kitsune', x: 2, z: 72, scale: 1.25, rot: 0.4 },
      { id: 'anansi', x: -7, z: 66, scale: 1.55, rot: -0.4 },
      { id: 'bakunawa', x: -15, z: 73, scale: 1.5, rot: 0.2 },
    ]
    for (const d of defs) {
      const model = buildCreature(CREATURE_BY_ID[d.id], { scale: d.scale })
      if (model.userData.bar) model.remove(model.userData.bar)
      model.position.set(d.x, terrainHeight(d.x, d.z) + (d.id === 'bakunawa' ? 2 : 0), d.z)
      model.rotation.y = d.rot
      this.scene.add(model)
      this.titleCreatures.push({ model, def: CREATURE_BY_ID[d.id], phase: Math.random() * TAU })
    }
    // Fill the title cards.
    this.hud.setPortraits(this.portraits || {})
  }

  bindButtons() {
    document.getElementById('enter-btn').addEventListener('click', () => this.startGame())
    document.getElementById('intro-help').addEventListener('click', () => this.openHelpFromTitle())
    document.getElementById('title-help').addEventListener('click', () => this.openHelpFromTitle())
    document.getElementById('resume-btn').addEventListener('click', () => this.resumeGame())
    document.getElementById('pause-codex').addEventListener('click', () => this.openCodex())
    document.getElementById('pause-help').addEventListener('click', () => this.openHelp())
    document.getElementById('respawn-btn').addEventListener('click', () => this.respawn())
    document.getElementById('victory-btn').addEventListener('click', () => this.continueAfterVictory())
    document.getElementById('btn-bonds').addEventListener('pointerdown', (e) => e.stopPropagation())
    document.getElementById('btn-pause-touch').addEventListener('click', () => this.pauseGame())
  }

  startGame(auto = false) {
    if (this.mode === 'playing') return
    this.mode = 'playing'
    this.started = true
    this.hud.hideTitle()
    this.hud.showHud()
    this.hud.showTouch(isTouch)
    this.hud.hideLoading()
    this.player.setStart(9, 84, 0.16)
    this.player.root.visible = true
    this.player.respawnPoint.set(26, terrainHeight(26, 40), 40)
    this.input.setEnabled(true)
    if (!auto) {
      this.audio.start()
      this.input.requestLock()
    }
    this.hud.el.zone.textContent = 'PIMENTO BEACH'
    this.hud.setZone('PIMENTO BEACH')
    this.hud.setQuest({
      title: 'A Call Across the Water',
      desc: 'Find Elder Nya at the market in Nine Mile Village.',
      progress: 0,
      progressText: '0 / 3 wardens',
      target: { x: NPCS[0].x, z: NPCS[0].z },
    })
    this.hud.setObjectives([
      { x: NPCS[0].x, z: NPCS[0].z, kind: 'npc', label: 'Elder Nya' },
      { x: NPCS[1].x, z: NPCS[1].z, kind: 'npc', label: 'Fitz' },
    ])
    this.world.showWaypoint('nya')
    this.hud.syncParty()
    this.hud.syncVitals()
    this.hud.syncOrbs()
    if (!auto) {
      setTimeout(() => this.hud.toast('the yard is awake', 'Follow the gold beacon to Nine Mile Village.', 'jade'), 900)
      setTimeout(() => this.hud.toast('combat basics', 'LMB fires · RMB or E throws a soul orb · Shift dashes.', ''), 3600)
    }
    for (const t of this.titleCreatures) {
      this.scene.remove(t.model)
      t.model.traverse(o => { if (o.isMesh) o.material?.dispose?.() })
    }
    this.titleCreatures = []
    this.titleTime = 0
  }

  // ------------------------------------------------------------------ LOOP
  loop() {
    requestAnimationFrame(() => this.loop())
    this.clock.update()
    const raw = Math.min(0.05, this.clock.getDelta())
    this.time += raw
    this.fpsFrames++
    this.fpsAccum += raw
    if (this.fpsAccum > 0.75) { this.fps = Math.round(this.fpsFrames / this.fpsAccum); this.fpsFrames = 0; this.fpsAccum = 0 }
    if (this.slowmo > 0) {
      this.slowmo -= raw
      this.timeScale = lerp(this.timeScale, 0.28, 0.25)
    } else {
      this.timeScale = lerp(this.timeScale, 1, 0.12)
    }
    const dt = raw * (this.mode === 'playing' ? this.timeScale : 1)
    this.world?.update(raw, this.time)

    if (this.mode === 'title') this.updateTitle(raw)
    else if (this.mode === 'playing') this.updatePlaying(dt, raw)
    else if (this.mode === 'dialogue') this.updateDialogueInput()
    else if (this.mode === 'paused' || this.mode === 'title-help') this.updatePausedInput()

    this.input.endFrame()
    this.updateEffects(raw)
    this.renderFrame(raw)
  }

  updateTitle(dt) {
    this.titleTime = (this.titleTime || 0) + dt
    const t = this.titleTime
    this.camera.position.set(23 + Math.sin(t * 0.09) * 7, 13 + Math.sin(t * 0.13) * 0.8, 106 - Math.cos(t * 0.07) * 4)
    this.camera.lookAt(2 + Math.sin(t * 0.08) * 2, 9, 62)
    for (const c of this.titleCreatures) {
      c.model.userData.animate?.(this.time, { speed: 0.4, attacking: false })
      c.model.rotation.y += Math.sin(t * 0.3 + c.phase) * 0.0005
    }
  }

  updatePlaying(dt, raw) {
    this.elapsed += dt
    if (this.input.consume('mutePressed')) {
      const on = this.audio.toggle()
      this.hud.syncSoundButton()
      this.hud.toast(on ? 'sound on' : 'sound muted', '', 'jade')
    }
    if (this.input.consume('pausePressed')) { this.pauseGame(); return }
    if (this.input.consume('codexPressed')) { this.openCodex(); return }
    if (this.input.consume('interactPressed')) {
      if (!this.interact()) this.player.spiritPulse(this)
    }

    this.player.update(dt, this.time, this.input, this)
    this.updateCreatures(dt, raw)
    this.updateProjectiles(dt)
    this.updateBossDashes(dt)
    this.updateNPCs()
    this.updateQuest()
    this.updateBossTriggers()
    if (this.activeBoss) {
      this.hud.updateBoss(this.activeBoss)
      if (this.activeBoss.weakened) this.hud.showBoss(this.activeBoss)
    }
    this.hud.updateExploration(this.player, this.world, this.player.yaw, raw)
    this.processRespawns()
    if (this.player.dead && this.mode === 'playing') this.playerDie()
  }

  updateDialogueInput() {
    if (this.input.consume('interactPressed')) this.hud.advanceDialogue()
    if (this.input.consume('pausePressed')) {
      this.hud.closeDialogue()
      this.resumeGame()
    }
  }

  updateCreatures(dt, raw) {
    for (let i = this.creatures.length - 1; i >= 0; i--) {
      const c = this.creatures[i]
      c.update(dt, this.time, this)
      if (c.removeAfter) {
        c.remove()
        this.creatures.splice(i, 1)
      }
    }
    // Downed guardians settle and stop the encounter.
    if (this.activeBoss && this.activeBoss.weakened) {
      this.activeBoss.patternTimer = 99
    }
  }

  updateBossTriggers() {
    if (this.activeBoss || this.mode !== 'playing') return
    if (this.questStage >= 1) {
      for (const b of this.bosses) {
        if (b.final || this.purified.has(b.bossDef.shrine)) continue
        if (!b.dormant) continue
        const d = Math.hypot(this.player.position.x - b.model.position.x, this.player.position.z - b.model.position.z)
        if (d < 13.5) { this.engageBoss(b); break }
      }
    }
    if (this.questStage >= 3) {
      const final = this.bosses.find(b => b.final)
      if (final && final.dormant && final.model.visible) {
        const d = Math.hypot(this.player.position.x - final.model.position.x, this.player.position.z - final.model.position.z)
        if (d < 16) this.engageBoss(final)
      }
    }
  }

  engageBoss(boss) {
    if (!boss || !boss.dormant) return
    this.activeBoss = boss
    boss.model.visible = true
    boss.awaken()
    this.hud.showBoss(boss)
    this.hud.showBossIntro(boss)
    this.mode = 'bossintro'
    this.input.setEnabled(false)
    this.input.exitLock()
    this.audio.sfx('boss')
    clearTimeout(this.introTimer)
    this.introTimer = setTimeout(() => {
      if (this.mode !== 'bossintro') return
      this.mode = 'playing'
      this.input.setEnabled(true)
      if (!isTouch) this.input.requestLock()
    }, 4200)
  }

  onBossLeash(boss) {
    if (boss !== this.activeBoss) return
    boss.hp = boss.maxHp
    boss.weakened = false
    boss.captureReady = false
    boss.dormant = true
    boss.state = 'dormant'
    boss.model.visible = !boss.final
    boss.updateBar()
    if (boss.bar) boss.bar.visible = false
    this.bossDashes = this.bossDashes.filter(d => d.boss !== boss)
    this.activeBoss = null
    this.hud.hideBoss()
    this.hud.toast('the warden withdraws', 'You left the shrine. Its power returns.', 'coral')
  }

  onBossWeakened(boss) {
    this.slowmo = 0.6
    this.hud.showBoss(boss)
    this.hud.toast('warden weakened', 'Throw a soul orb to bind it.', 'coral')
    this.audio.sfx('quest')
    this.burst(boss.worldPos(0, boss.height * 0.5), boss.def.colors.glow, 40, 8)
    this.ring(boss.worldPos(0, 0.3), boss.def.colors.glow, 1, 16, 0.8)
  }

  onFinalBossDefeated(boss) {
    this.onBossWeakened(boss)
  }

  // ------------------------------------------------------------------ INTERACTION
  updateNPCs() {
    if (this.hud.dialogueOpen) return
    let near = null, best = 3.4
    for (const npc of this.world.npcModels) {
      const d = Math.hypot(this.player.position.x - npc.x, this.player.position.z - npc.z)
      if (d < best) { best = d; near = npc }
    }
    this.nearNpc = near
    if (near) {
      const label = `TALK TO ${near.name}`
      if (this.lastPrompt !== label) { this.hud.showPrompt(label); this.lastPrompt = label }
    } else if (this.lastPrompt) {
      this.lastPrompt = ''
      this.hud.hidePrompt()
    }
  }

  interact() {
    if (this.hud.dialogueOpen) { this.hud.advanceDialogue(); return true }
    const npc = this.nearNpc
    if (!npc) return false
    this.openDialogue(npc)
    return true
  }

  openDialogue(npc) {
    this.mode = 'dialogue'
    this.input.setEnabled(false)
    this.input.exitLock()
    this.hud.hidePrompt()
    this.hud.openDialogue(npc, npc.lines, () => this.finishDialogue(npc))
  }

  finishDialogue(npc) {
    this.mode = 'playing'
    this.input.setEnabled(true)
    if (!isTouch) this.input.requestLock()
    if (npc.id === 'nya') {
      if (!this.talked.has('nya')) {
        this.talked.add('nya')
        const starter = CREATURE_BY_ID.kitsune
        const bond = this.makeBond(starter, 4, 'LANTERN')
        this.player.addBond(bond)
        this.hud.markBonded(starter.id)
        this.player.heal(this.player.maxHp)
        this.player.orbs = Math.max(this.player.orbs, 6)
        this.hud.syncOrbs()
        this.player.aether = this.player.maxAether
        this.hud.syncVitals()
        this.questStage = 1
        this.setWardenQuest()
        this.audio.sfx('levelup')
        this.burst(this.player.position.clone().add(new THREE.Vector3(0, 1.2, 0)), 0xc7a4ff, 26, 5)
        this.hud.toast('bond forged', 'LANTERN the kitsune joins you. Press 1 to call on her.', 'jade')
      } else {
        this.player.heal(this.player.maxHp)
        this.player.aether = this.player.maxAether
        this.player.orbs = Math.max(this.player.orbs, 3)
        this.hud.syncOrbs()
        this.hud.syncVitals()
        this.hud.toast('elder nya mends you', 'Health, aether and orbs restored.', 'jade')
        this.audio.sfx('heal')
      }
    } else if (npc.id === 'fitz') {
      this.player.orbs = Math.min(this.player.maxOrbs, this.player.orbs + 1)
      this.hud.syncOrbs()
      this.hud.toast('fitz shares an orb', 'The reef is east. Mind the tide.', 'jade')
    }
  }

  // ------------------------------------------------------------------ QUEST
  setWardenQuest() {
    const remaining = BOSSES.filter(b => !b.final && !this.purified.has(b.shrine))
    const count = this.purified.size
    if (remaining.length === 0) {
      this.questStage = 3
      this.hud.setQuest({
        title: 'The Unbound Trickster',
        desc: 'The Great Silk Cotton is open. Face Anansi beneath its branches.',
        progress: 1,
        progressText: '3 / 3 wardens',
        target: { x: SILK_TREE.x, z: SILK_TREE.z },
      })
      this.hud.setObjectives([{ x: SILK_TREE.x, z: SILK_TREE.z, kind: 'boss', label: 'Anansi Unbound' }])
      this.world.showWaypoint('tree')
      this.unlockFinal()
      return
    }
    // Nearest shrine becomes the waypoint.
    let nearest = remaining[0], nd = Infinity
    for (const b of remaining) {
      const s = SHRINES[b.shrine]
      const d = Math.hypot(this.player.position.x - s.x, this.player.position.z - s.z)
      if (d < nd) { nd = d; nearest = b }
    }
    this.questStage = count > 0 ? 2 : 1
    this.hud.setQuest({
      title: 'The Three Wardens',
      desc: 'Purify the mountain, reef and canopy shrines.',
      progress: count / 3,
      progressText: `${count} / 3 wardens`,
      target: { x: SHRINES[nearest.shrine].x, z: SHRINES[nearest.shrine].z },
    })
    this.hud.setObjectives(remaining.map(b => ({
      x: SHRINES[b.shrine].x, z: SHRINES[b.shrine].z, kind: 'boss', label: b.name,
    })))
    this.world.showWaypoint(nearest.shrine)
  }

  updateQuest() {
    if (this.questStage >= 1 && this.questStage <= 2) {
      const remaining = BOSSES.filter(b => !b.final && !this.purified.has(b.shrine))
      if (remaining.length === 0) this.setWardenQuest()
    }
  }

  unlockFinal() {
    const final = this.bosses.find(b => b.final)
    if (!final) return
    final.model.visible = true
    final.dormant = true
    final.state = 'dormant'
    final.hp = final.maxHp
    final.weakened = false
    final.captureReady = false
    final.updateBar()
    final.setDormant(true)
    this.burst(new THREE.Vector3(SILK_TREE.x, SILK_TREE.y + 2, SILK_TREE.z), 0xf4c95d, 60, 12)
    this.ring(new THREE.Vector3(SILK_TREE.x, SILK_TREE.y + 0.2, SILK_TREE.z), 0xf4c95d, 2, 24, 1.4)
    this.hud.toast('the great tree opens', 'Anansi Unbound waits beneath the silk cotton.', 'coral')
    this.audio.sfx('quest')
  }

  // ------------------------------------------------------------------ CAPTURE
  captureCreature(c) {
    if (!c || !c.captureReady) return
    const wasBoss = c.boss
    const shrineId = wasBoss ? c.bossDef.shrine : null
    c.capture()
    this.slowmo = 0.8
    const def = c.def
    this.hud.showCapture({ ...def, name: c.boss ? c.bossDef.name : def.name })
    this.hud.markBonded(def.id)
    const bond = this.makeBond(def, c.level, c.boss ? c.bossDef.name : def.name)
    if (c.boss) {
      this.player.addXP(90)
      this.player.maxOrbs = Math.min(9, this.player.maxOrbs + 1)
      this.player.addOrbs(2)
      this.player.heal(40)
    } else {
      this.player.addXP(32 + c.level * 5)
      if (Math.random() < 0.55 * (this.player.passives.orbDrop ?? 1)) this.player.addOrbs(1)
      this.player.addBond(bond)
    }
    if (wasBoss) {
      this.purified.add(shrineId)
      this.purifyShrine(shrineId)
      this.activeBoss = null
      this.hud.hideBoss()
      this.hud.toast('warden purified', `${c.bossDef.name} has returned to the old story.`, 'jade')
      this.audio.sfx('quest')
      if (finalCheck(c)) this.finishVictory(c)
      else {
        // Make the warden available in the codex even if the party is full.
        if (c.bossDef.final) this.finishVictory(c)
        this.setWardenQuest()
      }
      // Capture the guardian's essence, then remove its body.
      setTimeout(() => { if (!c.final) { c.model.visible = false; if (c.bar) c.bar.visible = false } }, 900)
    } else {
      this.hud.toast('bond forged', `${def.name} joins your field journal.`, 'jade')
    }
  }

  finishVictory(c) {
    this.mode = 'victory'
    this.input.setEnabled(false)
    this.input.exitLock()
    this.hud.hideBoss()
    this.audio.sfx('levelup')
    this.burst(c.worldPos(0, c.height * 0.5), 0xf4c95d, 70, 12)
    this.ring(c.worldPos(0, 0.2), 0xf4c95d, 1, 30, 1.6)
    this.hud.showVictory({ bonded: this.hud.bonded.size, level: this.player.level, time: this.elapsed })
    this.hud.setQuest({ title: 'The Island Breathes', desc: 'Anansi is unbound. Pimento Isle sings again.', progress: 1, progressText: '3 / 3 wardens', target: null })
    this.hud.setObjectives([])
    this.world.showWaypoint(null)
  }

  purifyShrine(id) {
    const shrine = this.world.shrines[id]
    if (!shrine) return
    shrine.beam.material.color.setHex(0xf4c95d)
    shrine.beam.material.opacity = 0.2
    shrine.aura.material.color.setHex(0xf4c95d)
    for (const c of shrine.crystals) {
      if (c.material && c.material.emissive) {
        c.material.emissive.setHex(0xf4c95d)
        c.material.color.setHex(0xffe7a1)
      } else if (c.material) c.material.color.setHex(0xf4c95d)
    }
    const s = SHRINES[id]
    this.burst(new THREE.Vector3(s.x, s.y + 2, s.z), 0xf4c95d, 60, 10)
    this.ring(new THREE.Vector3(s.x, s.y + 0.2, s.z), 0xf4c95d, 1, 24, 1.2)
    this.audio.sfx('quest')
  }

  makeBond(def, level, name) {
    return { uid: `${def.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, def, level, name: name || def.name }
  }

  // ------------------------------------------------------------------ PROJECTILES
  disposeObject(root) {
    if (!root) return
    root.traverse(o => {
      if (o.isMesh) {
        o.geometry?.dispose?.()
        if (Array.isArray(o.material)) o.material.forEach(m => m?.dispose?.())
        else o.material?.dispose?.()
      } else if (o.isSprite) o.material?.dispose?.()
    })
  }

  spawnSoulOrb(pos, vel) {
    const model = buildSoulOrb(0.33)
    model.position.copy(pos)
    this.scene.add(model)
    this.playerOrbs.push({ model, velocity: vel.clone(), life: 3.2, trail: 0 })
  }

  spawnEnemyOrb(from, dir, opts = {}) {
    const radius = opts.radius ?? 0.32
    const color = opts.color ?? 0xff6b4a
    const model = new THREE.Group()
    const core = new THREE.Mesh(new THREE.SphereGeometry(radius, 10, 8), new THREE.MeshBasicMaterial({ color, toneMapped: false }))
    model.add(core)
    const halo = glowSprite(color, radius * 6, 0.65)
    model.add(halo)
    model.position.copy(from)
    this.scene.add(model)
    this.enemyOrbs.push({
      model, velocity: dir.clone().multiplyScalar(opts.speed ?? 12),
      damage: opts.damage ?? 8, life: opts.life ?? 6, homing: opts.homing ?? 0,
      gravity: opts.gravity ?? 0, radius, slow: opts.slow ?? 0, color,
    })
  }

  spawnAllyBolt(from, target, damage, type, color) {
    const model = glowSprite(color, 1.1, 0.9)
    model.position.copy(from)
    this.scene.add(model)
    this.allyBolts.push({ model, target, damage, type, color, life: 3, speed: 28 })
  }

  spawnCompanionBeam(from, to, color, type) {
    this.beamCylinder(from, to, color, 0.12, 0.35)
  }

  spawnTracer(from, to, color, type) {
    const dir = new THREE.Vector3().subVectors(to, from)
    const len = dir.length()
    if (len < 0.1) return
    const geo = new THREE.CylinderGeometry(0.022, 0.04, len, 5, 1, true)
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.copy(from).addScaledVector(dir, 0.5)
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize())
    this.scene.add(mesh)
    const outer = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, len, 5, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }))
    outer.position.copy(mesh.position)
    outer.quaternion.copy(mesh.quaternion)
    this.scene.add(outer)
    this.tracers.push({ mesh, outer, life: 0.1 })
  }

  beamCylinder(from, to, color, radius, life) {
    const dir = new THREE.Vector3().subVectors(to, from)
    const len = dir.length()
    if (len < 0.1) return
    const geo = new THREE.CylinderGeometry(radius, radius * 1.4, len, 8, 1, true)
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, side: THREE.DoubleSide })
    const m = new THREE.Mesh(geo, mat)
    m.position.copy(from).addScaledVector(dir, 0.5)
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize())
    this.scene.add(m)
    this.beams.push({ mesh: m, life, max: life, decorative: true })
  }

  spawnDashTrail(pos, color) {
    const s = glowSprite(color, 1.5, 0.55)
    s.position.copy(pos)
    this.scene.add(s)
    this.dashTrails.push({ mesh: s, life: 0.4, max: 0.4 })
  }

  spawnDroppedOrb(pos, value = 1) {
    const model = buildSoulOrb(0.26)
    model.position.copy(pos).setY(pos.y + 1)
    this.scene.add(model)
    this.droppedOrbs.push({ model, value, life: 22, phase: Math.random() * TAU, vy: 2.4, landed: false })
  }

  burst(pos, color, count = 16, speed = 6, life = 0.7) {
    const positions = new Float32Array(count * 3)
    const velocities = []
    for (let i = 0; i < count; i++) {
      const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.35, Math.random() - 0.5).normalize()
      velocities.push(dir.multiplyScalar(speed * (0.35 + Math.random() * 0.85)))
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({
      color, size: 0.22, map: this.particleTex, transparent: true, opacity: 0.95,
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    })
    const points = new THREE.Points(geo, mat)
    points.position.copy(pos)
    this.scene.add(points)
    this.bursts.push({ points, geo, mat, velocities, life, max: life, gravity: 6 })
  }

  ring(pos, color, start = 1, end = 8, duration = 0.7) {
    const geo = new THREE.RingGeometry(0.88, 1, 48)
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.rotation.x = -Math.PI / 2
    mesh.position.copy(pos)
    mesh.scale.setScalar(start)
    this.scene.add(mesh)
    this.rings.push({ mesh, geo, mat, start, end, life: duration, max: duration })
  }

  addShockwave(x, z, opts = {}) {
    const color = opts.color ?? 0xff6b4a
    const geo = new THREE.RingGeometry(0.92, 1, 64)
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.rotation.x = -Math.PI / 2
    mesh.position.set(x, terrainHeight(x, z) + 0.18, z)
    mesh.scale.setScalar(0.5)
    this.scene.add(mesh)
    this.shockwaves.push({
      mesh, geo, mat, x, z, radius: 0.6, maxRadius: opts.maxRadius ?? 12, speed: opts.speed ?? 9,
      damage: opts.damage ?? 10, delay: opts.delay ?? 0.3, hit: false, slow: opts.slow ?? 0,
      life: 0, color,
    })
  }

  addBeamTelegraph(origin, target, opts = {}) {
    const color = opts.color ?? 0x79dcff
    const warnGeo = new THREE.CylinderGeometry(0.035, 0.035, 1, 5, 1, true)
    const warnMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })
    const warn = new THREE.Mesh(warnGeo, warnMat)
    const dir = new THREE.Vector3().subVectors(target, origin)
    const len = dir.length()
    warn.position.copy(origin).addScaledVector(dir, 0.5)
    warn.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize())
    warn.scale.y = len
    this.scene.add(warn)
    this.beams.push({
      warn, warnMat, warnGeo, origin: origin.clone(), target: target.clone(), color,
      delay: opts.delay ?? 1.1, duration: opts.duration ?? 0.5, damage: opts.damage ?? 20,
      width: opts.width ?? 1, phase: 'warn', life: (opts.delay ?? 1.1) + (opts.duration ?? 0.5) + 0.2, fired: false,
    })
  }

  dashBoss(boss, dir, speed, duration, reach = 6) {
    this.bossDashes.push({ boss, dir: dir.clone(), speed, time: duration, duration, hit: false, reach })
  }

  summonMinions(boss, count) {
    const def = CREATURE_BY_ID.anansi
    const existing = this.creatures.filter(c => c.minion && c.alive).length
    const n = Math.min(count, 3 - existing)
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU
      const x = boss.model.position.x + Math.cos(a) * 4
      const z = boss.model.position.z + Math.sin(a) * 4
      if (terrainHeight(x, z) < 1) continue
      const m = new Creature(def, { game: this, scene: this.scene, x, z, level: this.player.level + 1, minion: true, scale: 0.68 })
      m.state = 'aggro'
      m.home.copy(m.model.position)
      this.creatures.push(m)
      this.burst(m.model.position.clone().add(new THREE.Vector3(0, 1, 0)), 0x7dffd2, 16, 6)
    }
    this.hud.toast('web spawn', 'Anansi calls his children.', 'coral')
  }

  // ------------------------------------------------------------------ EFFECT UPDATES
  updateProjectiles(dt) {
    const player = this.player
    for (let i = this.playerOrbs.length - 1; i >= 0; i--) {
      const o = this.playerOrbs[i]
      o.life -= dt
      o.velocity.y -= 15 * dt
      o.model.position.addScaledVector(o.velocity, dt)
      o.model.userData.spin?.(this.time)
      o.model.rotation.x += dt * 4
      o.trail -= dt
      if (o.trail <= 0) {
        o.trail = 0.05
        this.spawnDashTrail(o.model.position.clone(), 0x8ff0ce)
      }
      let remove = false
      let captured = false
      for (const c of this.creatures) {
        if (!c.alive && !c.weakened) continue
        const center = c.model.position.clone().add(new THREE.Vector3(0, c.height * 0.45, 0))
        const d = o.model.position.distanceTo(center)
        if (d < c.hitRadius + 0.55) {
          if (c.captureReady) {
            this.captureCreature(c)
            captured = true
          } else {
            this.burst(o.model.position.clone(), 0x8ff0ce, 12, 4)
            this.hud.toast('soul shielded', 'Weaken the spirit until its soul is exposed.', 'coral')
            this.audio.sfx('hit')
          }
          remove = true
          break
        }
      }
      if (!captured && o.model.position.y < terrainHeight(o.model.position.x, o.model.position.z) + 0.2) {
        this.burst(o.model.position.clone(), 0x37d6a5, 10, 4)
        remove = true
      }
      if (o.life <= 0) {
        this.burst(o.model.position.clone(), 0x37d6a5, 8, 3)
        remove = true
      }
      if (remove) {
        this.scene.remove(o.model)
        o.model.traverse(m => { if (m.isMesh) { m.geometry?.dispose?.(); m.material?.dispose?.() } if (m.isSprite) m.material?.dispose?.() })
        this.playerOrbs.splice(i, 1)
      }
    }

    for (let i = this.enemyOrbs.length - 1; i >= 0; i--) {
      const o = this.enemyOrbs[i]
      o.life -= dt
      if (o.homing > 0) {
        const target = player.position.clone().add(new THREE.Vector3(0, 1.0, 0))
        const steer = target.sub(o.model.position).normalize().multiplyScalar(o.homing * dt * 12)
        o.velocity.add(steer)
      }
      if (o.gravity) o.velocity.y -= o.gravity * dt
      o.model.position.addScaledVector(o.velocity, dt)
      const chest = player.position.clone().add(new THREE.Vector3(0, 1.0, 0))
      if (o.model.position.distanceTo(chest) < 0.85 + o.radius) {
        player.takeDamage(o.damage, null)
        this.burst(o.model.position.clone(), o.color, 14, 4)
        this.scene.remove(o.model)
        this.disposeObject(o.model)
        this.enemyOrbs.splice(i, 1)
        continue
      }
      if (o.model.position.y < terrainHeight(o.model.position.x, o.model.position.z) + 0.15 || o.life <= 0) {
        this.burst(o.model.position.clone(), o.color, 8, 3)
        this.scene.remove(o.model)
        this.disposeObject(o.model)
        this.enemyOrbs.splice(i, 1)
      }
    }

    for (let i = this.allyBolts.length - 1; i >= 0; i--) {
      const b = this.allyBolts[i]
      b.life -= dt
      const t = b.target
      if (!t || !t.alive) {
        this.dashTrails.push({ mesh: b.model, life: 0.25, max: 0.25 })
        this.allyBolts.splice(i, 1)
        continue
      }
      const goal = t.model.position.clone().add(new THREE.Vector3(0, t.height * 0.5, 0))
      const dir = goal.clone().sub(b.model.position)
      const dist = dir.length()
      if (dist < 1.2) {
        t.takeDamage(b.damage, b.type, { critChance: this.player.critChance })
        this.burst(goal, b.color, 10, 4)
        this.scene.remove(b.model)
        this.allyBolts.splice(i, 1)
        continue
      }
      b.model.position.addScaledVector(dir.normalize(), b.speed * dt)
      if (b.life <= 0) { this.scene.remove(b.model); this.allyBolts.splice(i, 1) }
    }
  }

  updateBossDashes(dt) {
    for (let i = this.bossDashes.length - 1; i >= 0; i--) {
      const d = this.bossDashes[i]
      d.time -= dt
      const b = d.boss
      if (!b || !b.alive) { this.bossDashes.splice(i, 1); continue }
      const nx = b.model.position.x + d.dir.x * d.speed * dt
      const nz = b.model.position.z + d.dir.z * d.speed * dt
      if (!this.world.isBlocked(nx, nz, b.hitRadius * 0.4)) {
        b.model.position.x = nx
        b.model.position.z = nz
      }
      b.model.position.y = terrainHeight(b.model.position.x, b.model.position.z) + (b.fly ? b.scale * 2 : 0)
      if (!d.hit) {
        const dist = Math.hypot(b.model.position.x - this.player.position.x, b.model.position.z - this.player.position.z)
        if (dist < b.hitRadius + 1.1) {
          d.hit = true
          this.player.takeDamage(b.damage * 1.2, b)
          this.cameraKick(0.15)
        }
      }
      if (Math.random() < 0.5) this.spawnDashTrail(b.model.position.clone().add(new THREE.Vector3(0, 0.6, 0)), b.def.colors.glow)
      if (d.time <= 0) this.bossDashes.splice(i, 1)
    }
  }

  updateEffects(dt) {
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const b = this.bursts[i]
      b.life -= dt
      const arr = b.geo.attributes.position.array
      for (let j = 0; j < b.velocities.length; j++) {
        const v = b.velocities[j]
        arr[j * 3] += v.x * dt
        arr[j * 3 + 1] += v.y * dt
        arr[j * 3 + 2] += v.z * dt
        v.y -= b.gravity * dt
      }
      b.geo.attributes.position.needsUpdate = true
      b.mat.opacity = clamp(b.life / b.max, 0, 1)
      if (b.life <= 0) {
        this.scene.remove(b.points)
        b.geo.dispose(); b.mat.dispose()
        this.bursts.splice(i, 1)
      }
    }
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i]
      r.life -= dt
      const k = 1 - clamp(r.life / r.max, 0, 1)
      r.mesh.scale.setScalar(lerp(r.start, r.end, k))
      r.mat.opacity = (1 - k) * 0.8
      if (r.life <= 0) { this.scene.remove(r.mesh); r.geo.dispose(); r.mat.dispose(); this.rings.splice(i, 1) }
    }
    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i]
      t.life -= dt
      t.mesh.material.opacity = Math.max(0, t.life / 0.1) * 0.95
      t.outer.material.opacity = Math.max(0, t.life / 0.1) * 0.22
      if (t.life <= 0) {
        this.scene.remove(t.mesh, t.outer)
        t.mesh.geometry.dispose(); t.mesh.material.dispose(); t.outer.geometry.dispose(); t.outer.material.dispose()
        this.tracers.splice(i, 1)
      }
    }
    for (let i = this.dashTrails.length - 1; i >= 0; i--) {
      const d = this.dashTrails[i]
      d.life -= dt
      d.mesh.scale?.setScalar(1.5 * (1 + (1 - d.life / d.max) * 1.2))
      if (d.mesh.material) d.mesh.material.opacity = Math.max(0, d.life / d.max) * 0.55
      if (d.life <= 0) {
        if (d.mesh.parent) this.scene.remove(d.mesh)
        d.mesh.material?.dispose?.()
        this.dashTrails.splice(i, 1)
      }
    }
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const s = this.shockwaves[i]
      if (s.delay > 0) {
        s.delay -= dt
        s.mat.opacity = 0.22 + Math.sin(this.time * 20) * 0.1
        s.mesh.scale.setScalar(s.maxRadius * 0.7)
        continue
      }
      s.radius += s.speed * dt
      s.mesh.scale.setScalar(s.radius)
      s.mat.opacity = clamp(1 - s.radius / s.maxRadius, 0, 1) * 0.7
      if (!s.hit) {
        const d = Math.hypot(this.player.position.x - s.x, this.player.position.z - s.z)
        if (Math.abs(d - s.radius) < 1.2) {
          s.hit = true
          this.player.takeDamage(s.damage, null)
          this.cameraKick(0.12)
        }
      }
      if (s.radius >= s.maxRadius) {
        this.scene.remove(s.mesh); s.geo.dispose(); s.mat.dispose(); this.shockwaves.splice(i, 1)
      }
    }
    for (let i = this.beams.length - 1; i >= 0; i--) {
      const b = this.beams[i]
      if (b.decorative) {
        b.life -= dt
        if (b.mesh?.material) b.mesh.material.opacity = clamp(b.life / b.max, 0, 1) * 0.8
        if (b.life <= 0) {
          if (b.mesh) {
            this.scene.remove(b.mesh)
            b.mesh.geometry.dispose()
            b.mesh.material.dispose()
          }
          this.beams.splice(i, 1)
        }
        continue
      }
      if (!b.warn) { this.beams.splice(i, 1); continue }
      if (b.phase === 'warn') {
        b.warnMat.opacity = 0.35 + Math.sin(this.time * 22) * 0.2
        b.delay -= dt
        if (b.delay <= 0) {
          b.phase = 'fire'
          b.warnFade = 0.14
          this.beamCylinder(b.origin, b.target, b.color, 0.28 * b.width, b.duration)
          const chest = this.player.position.clone().add(new THREE.Vector3(0, 1, 0))
          this._lineDist.set(b.origin, b.target)
          const closest = this._lineDist.closestPointToPoint(chest, true, new THREE.Vector3())
          if (closest.distanceTo(chest) < 1.4 + b.width) {
            this.player.takeDamage(b.damage, null)
            this.cameraKick(0.2)
          }
          this.burst(b.target.clone(), b.color, 16, 5)
        }
      } else {
        b.warnFade -= dt
        if (b.warnFade <= 0) {
          this.scene.remove(b.warn)
          b.warnGeo.dispose()
          b.warnMat.dispose()
          this.beams.splice(i, 1)
        }
      }
    }
    for (let i = this.droppedOrbs.length - 1; i >= 0; i--) {
      const o = this.droppedOrbs[i]
      o.life -= dt
      if (!o.landed) {
        o.vy -= 16 * dt
        o.model.position.y += o.vy * dt
        const ground = terrainHeight(o.model.position.x, o.model.position.z) + 0.55
        if (o.model.position.y <= ground) { o.model.position.y = ground; o.landed = true }
      } else {
        o.model.position.y += Math.sin(this.time * 2.1 + o.phase) * dt * 0.2
        o.model.rotation.y += dt * 1.4
      }
      const d = o.model.position.distanceTo(this.player.position.clone().add(new THREE.Vector3(0, 1, 0)))
      if (d < 7) {
        const dir = this.player.position.clone().add(new THREE.Vector3(0, 1, 0)).sub(o.model.position)
        o.model.position.addScaledVector(dir.normalize(), dt * (9 - d * 0.6))
      }
      if (d < 1.2) {
        this.player.addOrbs(o.value)
        this.audio.sfx('capture')
        this.hud.toast('soul orb recovered', '', 'jade')
        this.scene.remove(o.model)
        o.model.traverse(m => { if (m.isMesh) { m.geometry?.dispose?.(); m.material?.dispose?.() } if (m.isSprite) m.material?.dispose?.() })
        this.droppedOrbs.splice(i, 1)
        continue
      }
      if (o.life <= 0) {
        this.scene.remove(o.model)
        o.model.traverse(m => { if (m.isMesh) { m.geometry?.dispose?.(); m.material?.dispose?.() } if (m.isSprite) m.material?.dispose?.() })
        this.droppedOrbs.splice(i, 1)
      }
    }
  }

  // ------------------------------------------------------------------ CREATURE EVENTS
  onCreatureDefeated(c) {
    if (c.boss) return
    this.player.addXP(c.minion ? 8 : 16 + c.level * 4)
    if (!c.minion && Math.random() < 0.35 * (this.player.passives.orbDrop ?? 1)) {
      this.spawnDroppedOrb(c.model.position.clone(), 1)
    }
    if (!c.minion) {
      this.hud.toast('spirit scattered', `${c.def.name} returned to the island.`, '')
      this.respawnQueue.push({
        def: c.def, level: c.level, x: c.home.x, z: c.home.z, at: this.time + 24 + Math.random() * 10,
      })
    }
  }

  processRespawns() {
    for (let i = this.respawnQueue.length - 1; i >= 0; i--) {
      const r = this.respawnQueue[i]
      if (this.time < r.at) continue
      const alive = this.creatures.filter(c => c.def.id === r.def.id && !c.dead && !c.captured).length
      if (alive < 3) {
        const c = new Creature(r.def, {
          game: this, scene: this.scene,
          x: r.x + (Math.random() - 0.5) * 6, z: r.z + (Math.random() - 0.5) * 6,
          level: r.level,
        })
        this.creatures.push(c)
      }
      this.respawnQueue.splice(i, 1)
    }
  }

  // ------------------------------------------------------------------ PLAYER EVENTS
  playerDie() {
    this.mode = 'dead'
    this.input.setEnabled(false)
    this.input.exitLock()
    this.hud.showDeath()
    this.resetBosses()
  }

  resetBosses() {
    for (const b of this.bosses) {
      if (this.purified.has(b.bossDef.shrine)) continue
      b.hp = b.maxHp
      b.weakened = false
      b.captureReady = false
      b.dormant = true
      b.state = 'dormant'
      b.model.visible = !b.final || this.questStage >= 3
      if (b.final && this.questStage < 3) b.model.visible = false
      b.updateBar()
      if (b.bar) b.bar.visible = false
    }
    this.activeBoss = null
    this.hud.hideBoss()
  }

  respawn() {
    this.player.respawn()
    this.hud.hideDeath()
    this.mode = 'playing'
    this.input.setEnabled(true)
    if (!isTouch) this.input.requestLock()
  }

  onPlayerDeath() {
    // Player.die() has already set dead; mode is switched in updatePlaying.
  }

  onPointerLock(locked) {
    if (!locked && this.mode === 'playing' && !isTouch) {
      if (this.hadLock) this.pauseGame()
    }
    if (locked) this.hadLock = true
  }

  // ------------------------------------------------------------------ MODES / OVERLAYS
  pauseGame() {
    if (this.mode !== 'playing') return
    this.mode = 'paused'
    this.input.setEnabled(false)
    this.input.exitLock()
    this.overlayStack = []
    this.overlayStack.push('pause')
    this.hud.openPause(this.player, this.purified.size)
  }

  resumeGame() {
    const top = this.overlayStack[this.overlayStack.length - 1]
    if (top) this.hud.closeOverlay(top, true)
    this.overlayStack = []
    this.mode = 'playing'
    this.input.setEnabled(true)
    this.hud.hidePrompt()
    this.lastPrompt = ''
    if (!isTouch) this.input.requestLock()
  }

  openOverlayStack(name) {
    const prev = this.overlayStack[this.overlayStack.length - 1]
    if (prev) this.hud.closeOverlay(prev, true)
    this.overlayStack.push(name)
    this.mode = 'paused'
    this.input.setEnabled(false)
    this.input.exitLock()
    if (name === 'codex') this.hud.openCodex()
    else if (name === 'howto') this.hud.openHowTo()
    else if (name === 'pause') this.hud.openPause(this.player, this.purified.size)
  }

  closeOverlayStack(type) {
    const idx = this.overlayStack.lastIndexOf(type)
    if (idx >= 0) this.overlayStack.splice(idx, 1)
    this.hud.closeOverlay(type, true)
    const top = this.overlayStack[this.overlayStack.length - 1]
    if (top) {
      this.hud.openOverlay(top)
      if (top === 'pause') this.hud.openPause(this.player, this.purified.size)
    } else {
      this.mode = 'playing'
      this.input.setEnabled(true)
      if (!isTouch) this.input.requestLock()
    }
  }

  openCodex() {
    if (this.mode === 'title' || this.mode === 'victory' || this.mode === 'dead') return
    if (this.overlayStack.includes('codex')) return
    this.openOverlayStack('codex')
  }

  openHelp() {
    if (this.overlayStack.includes('howto')) return
    this.openOverlayStack('howto')
  }

  openHelpFromTitle() {
    this.overlayReturn = 'title'
    this.hud.openHowTo()
    this.mode = 'title-help'
    this.input.setEnabled(false)
  }

  onOverlayClose(type) {
    if (this.mode === 'title-help') {
      this.mode = 'title'
      return
    }
    if (this.mode === 'paused') this.closeOverlayStack(type)
  }

  onSelectBond(index) {
    if (this.mode === 'playing' || this.mode === 'paused') this.player.selectBond(index)
  }

  onSelectBondById(id) {
    const index = this.player.party.findIndex(b => b.def.id === id)
    if (index < 0) return
    this.player.selectBond(index)
    if (this.mode === 'paused') {
      const top = this.overlayStack[this.overlayStack.length - 1]
      if (top) this.closeOverlayStack(top)
    }
  }

  updatePausedInput() {
    if (!this.input.consume('pausePressed') && !this.input.consume('codexPressed')) return
    if (this.mode === 'title-help') {
      this.hud.closeOverlay('howto', true)
      this.mode = 'title'
      return
    }
    const top = this.overlayStack[this.overlayStack.length - 1]
    if (top) this.closeOverlayStack(top)
    else this.resumeGame()
  }

  continueAfterVictory() {
    this.hud.hideVictory()
    this.mode = 'playing'
    this.input.setEnabled(true)
    if (!isTouch) this.input.requestLock()
  }

  renderFrame(dt) {
    if (this.composer) this.composer.render()
    else this.renderer.render(this.scene, this.camera)
  }
}

function finalCheck(c) {
  return c.boss && c.bossDef.final
}

function gpuLabel(renderer) {
  const gl = renderer.getContext()
  const ext = gl.getExtension('WEBGL_debug_renderer_info')
  return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'WebGL renderer'
}

// ------------------------------------------------------------------ BOOT
const game = new Game()
window.__soulYard = {
  game,
  start: () => game.startGame(true),
  teleport: (x, z) => {
    game.player.position.set(x, terrainHeight(x, z), z)
    game.player.updateCamera(0, true)
  },
  look: (yaw, pitch = 0) => { game.player.yaw = yaw; game.player.pitch = pitch; game.player.updateCamera(0, true) },
  boss: (shrine) => {
    const b = game.bosses.find(b => b.bossDef.shrine === shrine)
    if (b) { game.questStage = 3; b.dormant = false; b.model.visible = true; game.engageBoss(b) }
  },
  purify: (n = 3) => {
    const list = game.bosses.filter(b => !b.final).slice(0, n)
    for (const b of list) {
      b.hp = 0; b.weakened = true; b.captureReady = true; b.state = 'weakened'
      game.captureCreature(b)
    }
  },
  captureNearest: () => {
    let best = null, bd = Infinity
    for (const c of game.creatures) {
      if (!c.alive) continue
      const d = c.model.position.distanceTo(game.player.position)
      if (d < bd) { bd = d; best = c }
    }
    if (best) { best.captureReady = true; game.captureCreature(best) }
  },
  attackNearest: (damage = 200) => {
    let best = null, bd = Infinity
    for (const c of game.creatures) {
      if (!c.alive) continue
      const d = c.model.position.distanceTo(game.player.position)
      if (d < bd) { bd = d; best = c }
    }
    if (best) best.takeDamage(damage, game.player.shotType, { critChance: 1 })
  },
  setMode: (m) => { game.mode = m; game.input.setEnabled(m === 'playing') },
  hideTitle: () => { game.hud.hideTitle(); game.hud.showHud(); game.hud.showTouch(isTouch) },
  state: () => ({ mode: game.mode, time: game.time, fps: game.fps, position: game.player?.position.toArray(), party: game.player?.party.map(b => b.def.id), creatures: game.creatures.length, quest: game.questStage, purified: [...game.purified] }),
  hud: game.hud,
  player: game.player,
  world: game.world,
}
