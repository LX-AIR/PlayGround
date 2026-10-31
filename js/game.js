/* GIGAMON: Island Spirits — game shell: world, story, saves, menus */
(function (root) {
  'use strict'
  const YD = root.YD = root.YD || {}
  const { SPECIES, MOVES, ITEMS, TRAINERS, ENCOUNTERS, ZONE_NAMES, STORY, TYPES } = YD.data
  const engine = YD.engine
  const art = YD.art
  const SAVE_KEY = 'gigamon-save-v2'

  const $ = id => document.getElementById(id)
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

  const titleScreen = $('title-screen')
  const worldScreen = $('world-screen')
  const titleCanvas = $('title-bg')
  const worldCanvas = $('world-canvas')
  const dialogueEl = $('dialogue')
  const dialoguePortrait = $('dialogue-portrait')
  const dialogueName = $('dialogue-name')
  const dialogueRole = $('dialogue-role')
  const dialogueText = $('dialogue-text')
  const dialogueChoices = $('dialogue-choices')
  const dialogueNext = $('dialogue-next')
  const promptEl = $('interact-prompt')
  const promptLabel = $('interact-label')
  const toastEl = $('toast')
  const hintEl = $('hint')
  const flashEl = $('flash')
  const modal = $('modal')
  const modalCard = modal.querySelector('.modal-card')
  const modalContent = $('modal-content')
  const touchControls = $('touch-controls')

  const DIRS = {
    up: { x: 0, y: -1, key: 'ArrowUp' },
    down: { x: 0, y: 1, key: 'ArrowDown' },
    left: { x: -1, y: 0, key: 'ArrowLeft' },
    right: { x: 1, y: 0, key: 'ArrowRight' }
  }
  const KEY_DIR = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    w: 'up', s: 'down', a: 'left', d: 'right',
    W: 'up', S: 'down', A: 'left', D: 'right'
  }

  let state = null
  let world = null
  let view = null
  let npcs = []
  let player = null
  const camera = { x: 0, y: 0 }
  let mode = 'title'
  let gameStarted = false
  let selectedStarter = 'pimenta'
  let dialogueState = null
  let modalTimer = null
  let toastTimer = null
  let hintTimer = null
  let lastCatchInfo = null
  let encounterCooldown = 0
  let saveClock = 0
  let titleTime = 0
  let starterPaintAt = 0
  let lastFrame = performance.now()
  const held = { up: false, down: false, left: false, right: false }
  let lastDir = 'down'

  /* ------------------------------------------------------------ utilities */
  function typeChip(type) {
    const t = TYPES[type] || TYPES.Island
    return `<span class="type-chip type-${type.toLowerCase()}">${t.name}</span>`
  }

  function badgeCount() {
    if (!state) return 0
    return Object.keys(state.badges).filter(k => state.badges[k]).length
  }

  function allBadges() {
    return badgeCount() >= 3
  }

  function ballTotal() {
    if (!state) return 0
    return (state.bag.coconut_ball || 0) + (state.bag.golden_ball || 0)
  }

  function formatTime(seconds) {
    const m = Math.floor((seconds || 0) / 60)
    const h = Math.floor(m / 60)
    return h > 0 ? `${h}h ${m % 60}m` : `${m}m`
  }

  function showToast(title, sub) {
    if (!toastEl) return
    toastEl.innerHTML = `<strong>${title}</strong>${sub ? `<small>${sub}</small>` : ''}`
    toastEl.hidden = false
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => { toastEl.hidden = true }, 3000)
  }

  function showHint(html, ms) {
    hintEl.innerHTML = html
    hintEl.hidden = false
    clearTimeout(hintTimer)
    hintTimer = setTimeout(() => { hintEl.hidden = true }, ms || 7000)
  }

  function flashScreen() {
    flashEl.hidden = false
    flashEl.classList.remove('show')
    void flashEl.offsetWidth
    flashEl.classList.add('show')
    setTimeout(() => { flashEl.hidden = true; flashEl.classList.remove('show') }, 650)
  }

  /* ------------------------------------------------------------ save/load */
  function saveGame() {
    if (!state || !gameStarted) return
    try {
      state.position = { x: player.tx, y: player.ty, dir: player.dir }
      state.savedAt = Date.now()
      localStorage.setItem(SAVE_KEY, JSON.stringify(state))
    } catch (err) { /* storage may be unavailable */ }
  }

  function peekSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY)
      if (!raw) return null
      const data = JSON.parse(raw)
      if (!data || !Array.isArray(data.party) || !data.party.length) return null
      return data
    } catch (err) { return null }
  }

  function sanitizeMonster(mon) {
    if (!mon || !SPECIES[mon.id]) return null
    const sp = SPECIES[mon.id]
    mon.name = mon.name || sp.name
    mon.type = sp.type
    mon.catchRate = sp.catchRate
    mon.level = clamp(Number(mon.level) || 5, 1, 60)
    mon.maxHp = Number(mon.maxHp) || engine.statsFor(mon.id, mon.level).maxHp
    mon.hp = clamp(Number(mon.hp) || 0, 0, mon.maxHp)
    mon.xp = Number(mon.xp) || 0
    mon.xpNext = Number(mon.xpNext) || engine.xpToNext(mon.level)
    mon.fainted = mon.hp <= 0
    mon.status = mon.status || null
    mon.statusTurns = Number(mon.statusTurns) || 0
    mon.stages = mon.stages || { atk: 0, def: 0, spd: 0 }
    if (!Array.isArray(mon.moves) || !mon.moves.length) {
      mon.moves = engine.learnedMoves(mon.id, mon.level).map(id => ({ id, pp: MOVES[id].pp, maxPp: MOVES[id].pp }))
    }
    mon.moves = mon.moves.filter(m => MOVES[m.id]).map(m => ({
      id: m.id,
      pp: clamp(Number(m.pp) || 0, 0, MOVES[m.id].pp),
      maxPp: MOVES[m.id].pp
    }))
    if (!mon.moves.length) mon.moves = [{ id: 'struggle', pp: 1, maxPp: 1 }]
    return mon
  }

  function loadState(raw) {
    const s = {
      version: 2,
      starter: raw.starter || 'pimenta',
      party: raw.party.map(sanitizeMonster).filter(Boolean),
      box: Array.isArray(raw.box) ? raw.box.map(sanitizeMonster).filter(Boolean) : [],
      bag: Object.assign({ coconut_ball: 0, potion: 0 }, raw.bag || {}),
      coins: Math.max(0, Number(raw.coins) || 0),
      badges: Object.assign({ fern: false, finn: false, zeph: false }, raw.badges || {}),
      defeated: Object.assign({}, raw.defeated || {}),
      flags: Object.assign({}, raw.flags || {}),
      seen: Object.assign({}, raw.seen || {}),
      caught: Object.assign({}, raw.caught || {}),
      leadIndex: Number(raw.leadIndex) || 0,
      position: raw.position || null,
      time: Number(raw.time) || 0,
      champion: Boolean(raw.champion),
      zone: raw.zone || 'town',
      savedAt: raw.savedAt || 0
    }
    if (!s.party.length) throw new Error('No partners in save')
    if (s.leadIndex < 0 || s.leadIndex >= s.party.length || s.party[s.leadIndex].fainted) {
      s.leadIndex = Math.max(0, engine.firstAlive(s.party))
    }
    for (const mon of s.party) s.seen[mon.id] = true
    return s
  }

  /* ------------------------------------------------------------ title */
  function resizeTitle() {
    const r = titleScreen.getBoundingClientRect()
    const dpr = Math.min(2, window.devicePixelRatio || 1)
    titleCanvas.width = Math.max(320, Math.round(r.width * dpr))
    titleCanvas.height = Math.max(280, Math.round(r.height * dpr))
    paintStarters(titleTime)
  }

  function paintStarters(t) {
    titleScreen.querySelectorAll('canvas[data-creature]').forEach(canvas => {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      art.drawCreature(ctx, canvas.dataset.creature, canvas.width / 2, canvas.height * 0.56, canvas.width * 0.88, t, {})
    })
  }

  function drawTitle() {
    const ctx = titleCanvas.getContext('2d')
    art.drawTitleScene(ctx, titleCanvas.width, titleCanvas.height, titleTime)
    if (titleTime - starterPaintAt > 0.12) {
      starterPaintAt = titleTime
      paintStarters(titleTime)
    }
  }

  function selectStarter(id) {
    selectedStarter = id
    titleScreen.querySelectorAll('[data-starter]').forEach(card => {
      const on = card.dataset.starter === id
      card.classList.toggle('selected', on)
      card.setAttribute('aria-checked', on ? 'true' : 'false')
    })
    YD.audio.sfx('blip')
  }

  function refreshMuteUI() {
    const muted = YD.audio.isMuted()
    $('title-mute').textContent = `Sound: ${muted ? 'off' : 'on'}`
    $('hud-mute').textContent = muted ? '🔇' : '♪'
    $('hud-mute').setAttribute('aria-label', muted ? 'Unmute sound' : 'Mute sound')
  }

  function toggleMute() {
    YD.audio.toggle()
    refreshMuteUI()
    if (!YD.audio.isMuted()) YD.audio.sfx('confirm')
  }

  /* ------------------------------------------------------------ world setup */
  function createNewState(starter) {
    const mon = engine.makeMonster(starter, 5)
    return {
      version: 2,
      starter,
      party: [mon],
      box: [],
      bag: { coconut_ball: 5, potion: 3 },
      coins: 300,
      badges: { fern: false, finn: false, zeph: false },
      defeated: {},
      flags: {},
      seen: { [starter]: true },
      caught: { [starter]: true },
      leadIndex: 0,
      position: { x: YD.map.TOWN_SPAWN.x, y: YD.map.TOWN_SPAWN.y, dir: 'down' },
      time: 0,
      champion: false,
      zone: 'town',
      savedAt: Date.now()
    }
  }

  function resizeWorldCanvas() {
    const cssW = worldScreen.clientWidth || window.innerWidth
    const cssH = worldScreen.clientHeight || window.innerHeight
    const scale = clamp(Math.round(cssW / 430), 2, 4)
    const w = Math.max(240, Math.round(cssW / scale))
    const h = Math.max(200, Math.round(cssH / scale))
    if (worldCanvas.width !== w || worldCanvas.height !== h) {
      worldCanvas.width = w
      worldCanvas.height = h
      if (view) view.resize(w, h)
    }
  }

  function applyNpcWorldState() {
    for (const n of npcs) {
      if (n.id === 'zeph' && state.defeated.zeph && n.afterPos) {
        n.x = n.afterPos.x
        n.y = n.afterPos.y
      }
      n.px = n.x * world.TILE + world.TILE / 2
      n.py = n.y * world.TILE + world.TILE
      n.frame = 0
    }
  }

  function visibleNpcs() {
    const showLegend = allBadges()
    return npcs.filter(n => n.id !== 'drbird' || showLegend)
  }

  function setupWorld() {
    world = YD.map.createWorld()
    npcs = world.npcs.map(n => Object.assign({}, n, { kind: 'npc', frame: 0 }))
    applyNpcWorldState()

    let pos = state.position || { x: world.spawn.x, y: world.spawn.y, dir: 'down' }
    if (!world.walkable(pos.x, pos.y)) pos = { x: world.spawn.x, y: world.spawn.y, dir: 'down' }
    player = {
      kind: 'player', tx: pos.x, ty: pos.y,
      px: pos.x * world.TILE + world.TILE / 2,
      py: pos.y * world.TILE + world.TILE,
      dir: pos.dir || 'down', frame: 0,
      moving: false, t: 0, fromPx: 0, fromPy: 0, toPx: 0, toPy: 0
    }
    camera.x = player.px
    camera.y = player.py - 8
    state.zone = world.zoneAt(player.tx, player.ty)
    state.leadIndex = clamp(state.leadIndex || 0, 0, state.party.length - 1)

    resizeWorldCanvas()
    if (!view) view = new YD.WorldView(worldCanvas, world)
    else { view.world = world; view.prerender() }
    view.resize(worldCanvas.width, worldCanvas.height)
    updateHud()
    updatePrompt()
  }

  function setPlayer(tx, ty, dir) {
    player.tx = tx; player.ty = ty
    player.px = tx * world.TILE + world.TILE / 2
    player.py = ty * world.TILE + world.TILE
    player.dir = dir || 'down'
    player.moving = false
    player.t = 0
    player.frame = 0
    camera.x = player.px
    camera.y = player.py - 8
    state.position = { x: tx, y: ty, dir: player.dir }
  }

  /* ------------------------------------------------------------ HUD */
  function updateHud() {
    if (!state) return
    $('coin-count').textContent = state.coins
    $('ball-count').textContent = ballTotal()
    const count = badgeCount()
    $('quest-text').textContent = state.champion ? 'Island Guardian' : count >= 3 ? 'Climb the peak' : `${count} / 3 badges`
    document.querySelectorAll('.badge-slot').forEach(slot => {
      slot.classList.toggle('earned', Boolean(state.badges[slot.dataset.badge]))
    })
    if (world && player) {
      const zone = world.zoneAt(player.tx, player.ty)
      $('area-name').textContent = ZONE_NAMES[zone] || 'Sweetwater Bay'
    }
  }

  function updateArea(announce) {
    if (!world || !player || !state) return
    const zone = world.zoneAt(player.tx, player.ty)
    if (zone === state.zone) return
    state.zone = zone
    $('area-name').textContent = ZONE_NAMES[zone] || 'Sweetwater Bay'
    if (announce) {
      YD.audio.sfx('toast')
      showToast(ZONE_NAMES[zone] || 'Sweetwater Bay', 'Gigamon Isles · Jamaica')
    }
  }

  function updatePrompt() {
    if (!gameStarted || mode !== 'world' || !player || player.moving || !modal.hidden) {
      promptEl.hidden = true
      return
    }
    const target = facingTile()
    const npc = findNpcAt(target.x, target.y)
    const obj = world.interactableAt(target.x, target.y)
    let label = ''
    if (npc) label = npc.role === 'goat' ? 'Greet the goat' : `Talk to ${npc.name}`
    else if (obj) {
      if (obj.type === 'sign') label = 'Read sign'
      else if (obj.type === 'door') label = `Enter ${obj.building.label.toLowerCase()}`
      else label = 'Take a look'
    }
    if (label) {
      promptLabel.textContent = label
      promptEl.hidden = false
    } else promptEl.hidden = true
  }

  /* ------------------------------------------------------------ movement */
  function facingTile() {
    const d = DIRS[player.dir] || DIRS.down
    return { x: player.tx + d.x, y: player.ty + d.y }
  }

  function findNpcAt(x, y) {
    return visibleNpcs().find(n => n.x === x && n.y === y) || null
  }

  function attemptMove(dir) {
    if (!gameStarted || mode !== 'world' || !player || player.moving || !dialogueEl.hidden || !modal.hidden) return
    const d = DIRS[dir]
    if (!d) return
    player.dir = dir
    const nx = player.tx + d.x, ny = player.ty + d.y
    if (!world.walkable(nx, ny) || findNpcAt(nx, ny)) {
      updatePrompt()
      return
    }
    player.moving = true
    player.t = 0
    player.fromPx = player.px
    player.fromPy = player.py
    player.toPx = nx * world.TILE + world.TILE / 2
    player.toPy = ny * world.TILE + world.TILE
    player.tx = nx
    player.ty = ny
    player.frame = 1
    promptEl.hidden = true
  }

  function finishStep() {
    player.px = player.toPx
    player.py = player.toPy
    player.moving = false
    player.t = 0
    player.frame = 0
    state.position = { x: player.tx, y: player.ty, dir: player.dir }
    updateArea(true)
    updatePrompt()
    maybeEncounter()
  }

  function updateWorld(dt) {
    if (!state) return
    state.time += dt
    saveClock += dt
    if (saveClock > 12 && mode === 'world') {
      saveClock = 0
      saveGame()
    }
    if (player.moving) {
      player.t += dt / 0.13
      const e = Math.min(1, player.t)
      player.px = player.fromPx + (player.toPx - player.fromPx) * e
      player.py = player.fromPy + (player.toPy - player.fromPy) * e
      player.frame = player.t < 0.5 ? 1 : 0
      if (player.t >= 1) finishStep()
    } else {
      const dir = held[lastDir] ? lastDir : Object.keys(held).find(k => held[k])
      if (dir) attemptMove(dir)
    }
    const targetX = player.px
    const targetY = player.py - 8
    const lerp = Math.min(1, dt * 9)
    camera.x += (targetX - camera.x) * lerp
    camera.y += (targetY - camera.y) * lerp
  }

  function maybeEncounter() {
    if (!world.tallGrassAt(player.tx, player.ty)) return
    const now = performance.now()
    if (now < encounterCooldown) return
    if (Math.random() > 0.17) return
    encounterCooldown = now + 2200
    mode = 'transition'
    YD.audio.sfx('encounter')
    flashScreen()
    setTimeout(startWildEncounter, 260)
  }

  function pickEncounter(zone) {
    const table = ENCOUNTERS[zone] || ENCOUNTERS.meadow
    const total = table.table.reduce((sum, entry) => sum + entry[1], 0)
    let roll = Math.random() * total
    let id = table.table[0][0]
    for (const [species, weight] of table.table) {
      roll -= weight
      if (roll <= 0) { id = species; break }
    }
    const level = table.levels[0] + Math.floor(Math.random() * (table.levels[1] - table.levels[0] + 1))
    return engine.makeMonster(id, level)
  }

  async function startWildEncounter() {
    if (mode !== 'transition' || !state) return
    const zone = world.zoneAt(player.tx, player.ty)
    const mon = pickEncounter(zone)
    state.seen[mon.id] = true
    mode = 'battle'
    const result = await runBattle({ enemyTeam: [mon], isWild: true })
    if (result === 'lose') await blackout()
    else if (result === 'caught' && lastCatchInfo) {
      showToast(`${lastCatchInfo.mon} joined you!`, lastCatchInfo.where === 'box' ? 'Sent to the island reserve' : 'Added to your team')
    }
    updateHud()
    saveGame()
  }

  /* ------------------------------------------------------------ battle */
  async function runBattle(opts) {
    mode = 'battle'
    if (!engine.partyHasAlive(state.party)) engine.healParty(state.party)
    if (!state.party[state.leadIndex] || state.party[state.leadIndex].fainted) {
      const idx = engine.firstAlive(state.party)
      state.leadIndex = idx >= 0 ? idx : 0
    }
    const battleState = engine.createBattle({
      party: state.party,
      activeIndex: state.leadIndex,
      enemyTeam: opts.enemyTeam,
      isWild: opts.isWild,
      trainerName: opts.trainerName
    })
    for (const mon of opts.enemyTeam) state.seen[mon.id] = true
    const ui = YD.initBattleMenu()
    lastCatchInfo = null
    const result = await ui.start({
      state: battleState,
      wild: opts.isWild,
      bag: state.bag,
      trainerName: opts.trainerName || null,
      getCoins: () => state.coins,
      onCatch: mon => {
        state.caught[mon.id] = true
        state.seen[mon.id] = true
        const where = addMonster(mon)
        lastCatchInfo = { mon: mon.name, where }
      },
      onUseItem: id => {
        if (state.bag[id] > 0) state.bag[id] -= 1
        updateHud()
      }
    })
    mode = 'world'
    YD.audio.start('world')
    updateHud()
    updatePrompt()
    saveGame()
    return result
  }

  function addMonster(mon) {
    if (state.party.length < 6) {
      state.party.push(mon)
      return 'party'
    }
    state.box.push(mon)
    return 'box'
  }

  async function blackout() {
    mode = 'transition'
    flashScreen()
    YD.audio.sfx('faint')
    await wait(420)
    engine.healParty(state.party)
    state.leadIndex = 0
    const lost = Math.min(state.coins, 100)
    state.coins -= lost
    setPlayer(world.spawn.x, world.spawn.y, 'down')
    updateHud()
    updateArea(false)
    mode = 'world'
    await showDialogue([{
      name: 'Nurse Orchid', role: 'Health Hut', portrait: 'nurse',
      text: `Easy now, guardian. Your team is patched up and resting. You dropped ${lost} coins on the road, but Sweetwater Bay keeps its own safe.`
    }])
    updatePrompt()
    saveGame()
  }

  /* ------------------------------------------------------------ dialogue */
  function dialogueLines(name, role, portrait, texts) {
    return texts.map(text => ({ name, role, portrait, text }))
  }

  function showDialogue(pages, opts) {
    opts = opts || {}
    if (!Array.isArray(pages)) pages = [pages]
    const normalized = pages.map(p => typeof p === 'string'
      ? { name: opts.name || 'Gigamon Journal', role: opts.role || '', portrait: opts.portrait === undefined ? null : opts.portrait, text: p }
      : Object.assign({ name: 'Gigamon Journal', role: '', portrait: null }, p))
    return new Promise(resolve => {
      dialogueState = { pages: normalized, index: 0, resolve }
      mode = 'dialogue'
      promptEl.hidden = true
      dialogueEl.hidden = false
      renderDialogue()
    })
  }

  function renderDialogue() {
    if (!dialogueState) return
    const page = dialogueState.pages[dialogueState.index]
    dialogueName.textContent = page.name || 'Gigamon Journal'
    dialogueRole.textContent = page.role || ''
    dialogueRole.hidden = !page.role
    dialogueText.textContent = page.text
    const hasPortrait = Boolean(page.portrait)
    dialoguePortrait.style.display = hasPortrait ? '' : 'none'
    if (hasPortrait) {
      const dctx = dialoguePortrait.getContext('2d')
      art.drawPortrait(dctx, page.portrait, dialoguePortrait.width, dialoguePortrait.height)
    }
    dialogueChoices.innerHTML = ''
    const choices = page.choices || null
    dialogueNext.hidden = Boolean(choices && choices.length)
    if (choices && choices.length) {
      for (const choice of choices) {
        const btn = document.createElement('button')
        btn.className = 'btn btn-small btn-primary'
        btn.textContent = choice.label
        btn.onclick = () => { YD.audio.sfx('confirm'); finishDialogue(choice.value) }
        dialogueChoices.appendChild(btn)
      }
    }
  }

  function advanceDialogue() {
    if (!dialogueState) return
    const page = dialogueState.pages[dialogueState.index]
    if (page.choices && page.choices.length) return
    YD.audio.sfx('blip')
    if (dialogueState.index < dialogueState.pages.length - 1) {
      dialogueState.index += 1
      renderDialogue()
    } else {
      finishDialogue()
    }
  }

  function finishDialogue(value) {
    if (!dialogueState) return
    const resolve = dialogueState.resolve
    dialogueState = null
    dialogueEl.hidden = true
    dialogueChoices.innerHTML = ''
    mode = gameStarted ? 'world' : 'title'
    if (gameStarted) {
      updatePrompt()
      YD.audio.start('world')
    }
    resolve(value)
  }

  dialogueEl.addEventListener('click', e => {
    if (e.target.closest('button')) return
    advanceDialogue()
  })

  /* ------------------------------------------------------------ modal */
  function openModal(html, opts) {
    opts = opts || {}
    modal.hidden = false
    modalCard.className = 'modal-card' + (opts.cardClass ? ' ' + opts.cardClass : '')
    modalContent.innerHTML = html
    mode = 'modal'
    promptEl.hidden = true
    updatePrompt()
    stopModalAnimation()
    paintModalSprites(titleTime)
    if (opts.animate !== false) {
      modalTimer = setInterval(() => paintModalSprites(titleTime), 120)
    }
  }

  function paintModalSprites(t) {
    modalContent.querySelectorAll('canvas[data-creature]').forEach(canvas => {
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const size = Math.min(canvas.width, canvas.height) * 0.9
      art.drawCreature(ctx, canvas.dataset.creature, canvas.width / 2, canvas.height * 0.54, size, t, {})
    })
  }

  function stopModalAnimation() {
    if (modalTimer) { clearInterval(modalTimer); modalTimer = null }
  }

  function closeModal() {
    stopModalAnimation()
    modal.hidden = true
    modalCard.className = 'modal-card'
    modalContent.innerHTML = ''
    if (gameStarted) {
      mode = 'world'
      updatePrompt()
      YD.audio.start('world')
    } else {
      mode = 'title'
    }
  }

  function openConfirm(title, text, confirmLabel, onConfirm) {
    openModal(`
      <div class="confirm-card">
        <div class="eyebrow">A fresh start</div>
        <h2>${title}</h2>
        <p>${text}</p>
        <div class="modal-actions" style="justify-content:center">
          <button class="btn btn-primary" data-confirm-yes>${confirmLabel}</button>
          <button class="btn btn-ghost" data-close-modal>Not now</button>
        </div>
      </div>`, { animate: false })
    modalContent.querySelector('[data-confirm-yes]').onclick = onConfirm
  }

  function newJourney() {
    openConfirm('Start a new journey?', 'This erases your current save, badges, team, and island progress. The spirits will remember you, but the file will not.', 'Yes, begin again', () => {
      try { localStorage.removeItem(SAVE_KEY) } catch (err) { /* ignore */ }
      window.location.reload()
    })
  }

  function openParty() {
    if (!gameStarted) return
    const cards = state.party.map((mon, i) => {
      const p = Math.max(0, Math.min(100, (mon.hp / mon.maxHp) * 100))
      const hpClass = p <= 22 ? 'crit' : p <= 50 ? 'low' : ''
      const moves = mon.moves.map(slot => `<span>${MOVES[slot.id].name}</span>`).join('')
      return `<article class="party-card ${mon.fainted ? 'fainted' : ''} ${i === state.leadIndex ? 'selected' : ''}">
        <div class="party-sprite"><canvas width="64" height="64" data-creature="${mon.id}" data-size="58"></canvas></div>
        <div class="party-info">
          <div class="line1"><strong>${mon.name}</strong>${typeChip(mon.type)}<span class="tag">Lv. ${mon.level}</span></div>
          <div class="party-hp"><div class="hp-track"><div class="hp-fill ${hpClass}" style="width:${p}%"></div></div><span>${mon.hp}/${mon.maxHp} HP</span></div>
          <div class="party-moves">${moves}</div>
        </div>
        <div class="party-side">
          <div class="party-stats">ATK ${mon.atk}<br>DEF ${mon.def}<br>SPD ${mon.spd}</div>
          <button class="btn btn-small ${i === state.leadIndex ? '' : 'btn-primary'}" data-lead="${i}" ${i === state.leadIndex || mon.fainted ? 'disabled' : ''}>${i === state.leadIndex ? 'Leading' : 'Make lead'}</button>
        </div>
      </article>`
    }).join('')
    openModal(`
      <div class="eyebrow">Your team</div>
      <h2>Island Partners</h2>
      <p class="lede">Six spirits can travel with you. The lead partner steps out first in a wild encounter. Heal up at the Health Hut or with a potion.</p>
      <div class="party-list">${cards}</div>
      <div class="modal-actions"><button class="btn btn-primary" data-close-modal>Done</button><button class="btn btn-ghost" data-open-bag>Open bag</button><button class="btn btn-ghost" data-open-dex>Field guide</button></div>`)
    modalContent.querySelectorAll('[data-lead]').forEach(btn => {
      btn.onclick = () => {
        const i = Number(btn.dataset.lead)
        if (!state.party[i] || state.party[i].fainted) return
        state.leadIndex = i
        YD.audio.sfx('confirm')
        saveGame()
        openParty()
      }
    })
    const bagBtn = modalContent.querySelector('[data-open-bag]')
    if (bagBtn) bagBtn.onclick = openBag
    const dexBtn = modalContent.querySelector('[data-open-dex]')
    if (dexBtn) dexBtn.onclick = openDex
    paintModalSprites(titleTime)
  }

  function bagRows() {
    return Object.keys(state.bag).filter(id => state.bag[id] > 0 && ITEMS[id]).map(id => {
      const item = ITEMS[id]
      const canUse = item.kind === 'heal'
      return `<div class="item-row">
        <span class="item-icon ${item.icon}"></span>
        <div class="item-info"><strong>${item.name}</strong><p>${item.desc}</p></div>
        <span class="item-count">×${state.bag[id]}</span>
        ${canUse ? `<button class="btn btn-small btn-primary" data-use-item="${id}">Use</button>` : '<span class="tag">In battle</span>'}
      </div>`
    }).join('')
  }

  function openBag() {
    if (!gameStarted) return
    const rows = bagRows()
    openModal(`
      <div class="eyebrow">Your bag</div>
      <h2>Island Kit</h2>
      <p class="lede">Coconut Balls are for wild Gigamon. Potions and mangoes mend your partners here in the field or mid-battle.</p>
      <div class="item-list">${rows || '<p class="empty-note">Your bag is empty. Visit Marcia Market in the plaza.</p>'}</div>
      <div class="modal-actions"><button class="btn btn-primary" data-close-modal>Done</button><button class="btn btn-ghost" data-open-shop>Visit market</button></div>`)
    modalContent.querySelectorAll('[data-use-item]').forEach(btn => {
      btn.onclick = () => openBagTarget(btn.dataset.useItem)
    })
    const shopBtn = modalContent.querySelector('[data-open-shop]')
    if (shopBtn) shopBtn.onclick = openShop
  }

  function openBagTarget(itemId) {
    const item = ITEMS[itemId]
    const rows = state.party.map((mon, i) => {
      const p = Math.max(0, Math.min(100, (mon.hp / mon.maxHp) * 100))
      return `<button class="submenu-row" data-heal-target="${i}" ${mon.hp >= mon.maxHp ? 'disabled' : ''}>
        <span class="type-dot" style="width:10px;height:10px;border-radius:50%;background:${(TYPES[mon.type] || TYPES.Island).color};border:1.5px solid #2a1b14"></span>
        <span>${mon.name} <small style="margin-left:4px">Lv. ${mon.level}</small></span>
        <small>${mon.hp}/${mon.maxHp} HP</small>
        <span class="hp-track" style="width:52px;height:7px"><span class="hp-fill ${p <= 22 ? 'crit' : p <= 50 ? 'low' : ''}" style="display:block;width:${p}%"></span></span>
      </button>`
    }).join('')
    openModal(`
      <div class="eyebrow">${item.name}</div>
      <h2>Who needs it?</h2>
      <p class="lede">${item.desc}</p>
      <div class="submenu-panel" style="max-height:none">${rows}</div>
      <div class="modal-actions"><button class="btn btn-ghost" data-back-bag>Back to bag</button><button class="btn btn-ghost" data-close-modal>Close</button></div>`, { animate: false })
    modalContent.querySelectorAll('[data-heal-target]').forEach(btn => {
      btn.onclick = () => {
        const i = Number(btn.dataset.healTarget)
        const mon = state.party[i]
        if (!mon) return
        const healed = engine.useHealItemOutOfBattle(mon, itemId)
        if (healed <= 0) { showToast('No effect', `${mon.name} is already full of energy`); return }
        state.bag[itemId] -= 1
        YD.audio.sfx('heal')
        updateHud()
        saveGame()
        showToast(`${mon.name} +${healed} HP`, item.name)
        openBag()
      }
    })
    modalContent.querySelector('[data-back-bag]').onclick = openBag
  }

  function openDex() {
    if (!gameStarted) return
    const ids = Object.keys(SPECIES).sort((a, b) => SPECIES[a].no - SPECIES[b].no)
    const caught = Object.keys(state.caught).filter(id => SPECIES[id]).length
    const seen = Object.keys(state.seen).filter(id => SPECIES[id]).length
    const cards = ids.map(id => {
      const sp = SPECIES[id]
      const isCaught = Boolean(state.caught[id])
      const isSeen = Boolean(state.seen[id])
      return `<button class="dex-card ${isCaught ? 'caught' : ''} ${isSeen ? '' : 'locked'}" data-dex="${id}">
        <span class="dex-no">#${String(sp.no).padStart(2, '0')}</span>
        <canvas width="80" height="80" data-creature="${id}"></canvas>
        <div class="dex-name">${isSeen ? sp.name : '???'}</div>
        <div class="dex-state">${isCaught ? 'Caught' : isSeen ? 'Seen' : 'Unknown'}</div>
      </button>`
    }).join('')
    openModal(`
      <div class="eyebrow">Island field guide</div>
      <h2>Gigamon Dex</h2>
      <p class="lede">${caught} caught · ${seen} seen · ${ids.length} island spirits. Tap a spirit to read its story.</p>
      <div class="dex-grid">${cards}</div>
      <div class="modal-actions"><button class="btn btn-primary" data-close-modal>Done</button></div>`)
    modalContent.querySelectorAll('[data-dex]').forEach(btn => {
      btn.onclick = () => openDexEntry(btn.dataset.dex)
    })
  }

  function openDexEntry(id) {
    const sp = SPECIES[id]
    const isSeen = Boolean(state.seen[id])
    const isCaught = Boolean(state.caught[id])
    if (!isSeen) {
      openModal(`<div class="eyebrow">Dex #${String(sp.no).padStart(2, '0')}</div><h2>???</h2>
        <p class="lede">You have not met this spirit yet. Walk through tall grass and listen for the drums.</p>
        <div class="modal-actions"><button class="btn btn-primary" data-back-dex>Back to dex</button></div>`, { animate: false })
    } else {
      openModal(`
        <div class="eyebrow">Dex #${String(sp.no).padStart(2, '0')} · ${isCaught ? 'Caught' : 'Seen'}</div>
        <div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap">
          <div class="party-sprite" style="width:120px;height:120px"><canvas width="120" height="120" data-creature="${id}"></canvas></div>
          <div style="flex:1;min-width:220px">
            <h2>${sp.name}</h2>
            <div style="margin:4px 0 8px">${typeChip(sp.type)}</div>
            <p class="lede">${sp.lore}</p>
          </div>
        </div>
        <div class="ending-stats" style="grid-template-columns:repeat(4,1fr)">
          <div class="ending-stat" style="background:rgba(36,21,15,.07)"><strong style="color:var(--ink)">${sp.base.hp}</strong><span style="color:var(--ink-faint)">HP</span></div>
          <div class="ending-stat" style="background:rgba(36,21,15,.07)"><strong style="color:var(--ink)">${sp.base.atk}</strong><span style="color:var(--ink-faint)">ATK</span></div>
          <div class="ending-stat" style="background:rgba(36,21,15,.07)"><strong style="color:var(--ink)">${sp.base.def}</strong><span style="color:var(--ink-faint)">DEF</span></div>
          <div class="ending-stat" style="background:rgba(36,21,15,.07)"><strong style="color:var(--ink)">${sp.base.spd}</strong><span style="color:var(--ink-faint)">SPD</span></div>
        </div>
        <div class="modal-actions"><button class="btn btn-primary" data-back-dex>Back to dex</button><button class="btn btn-ghost" data-close-modal>Close</button></div>`)
    }
    const back = modalContent.querySelector('[data-back-dex]')
    if (back) back.onclick = openDex
  }

  function openQuest() {
    if (!gameStarted) return
    const count = badgeCount()
    const steps = [
      { done: true, title: 'Meet your first partner', text: 'Professor Pimento helped you choose a Gigamon at the plaza lab.' },
      { done: Boolean(state.badges.fern), title: 'Leaf Badge — Warden Fern', text: 'Cross the bamboo bridge west of town and find Fern at the grove hut.' },
      { done: Boolean(state.badges.finn), title: 'Tide Badge — Warden Finn', text: 'Follow the south road to the pier and challenge Finn at the end of the boards.' },
      { done: Boolean(state.badges.zeph), title: 'Storm Badge — Elder Zeph', text: 'Two badges open the mountain gate. Climb the Blue Mountain Trail and face Zeph.' },
      { done: state.champion, title: 'Meet Dr. Bird at the peak', text: count >= 3 ? 'The summit path is open. Bring Golden Balls and a steady heart.' : 'Earn all three Warden Badges to reveal the summit path.' }
    ]
    openModal(`
      <div class="eyebrow">Guardian quest</div>
      <h2>${state.champion ? 'Island Guardian' : 'The Warden Trail'}</h2>
      <p class="lede">${state.champion ? 'Sweetwater Bay has a guardian. The island is yours to wander now — catch spirits, fill the dex, and keep the grove singing.' : 'Three Wardens keep the island in balance. Earn their badges, open the mountain pass, and climb to meet the legend at the peak.'}</p>
      <div class="quest-steps">
        ${steps.map(s => `<div class="quest-step ${s.done ? 'done' : ''}"><span class="qs-mark">${s.done ? '✓' : '·'}</span><div><strong>${s.title}</strong><p>${s.text}</p></div></div>`).join('')}
      </div>
      <div class="modal-actions"><button class="btn btn-primary" data-close-modal>Walk good</button><button class="btn btn-ghost" data-open-help>Field guide</button></div>`)
    const helpBtn = modalContent.querySelector('[data-open-help]')
    if (helpBtn) helpBtn.onclick = openHelp
  }

  function openHelp() {
    const muted = YD.audio.isMuted()
    openModal(`
      <div class="eyebrow">Field guide</div>
      <h2>How to Play</h2>
      <p class="lede">Gigamon: Island Spirits is a small island adventure. Explore Sweetwater Bay, catch spirits in the tall grass, and earn the three Warden Badges.</p>
      <div class="help-grid">
        <div class="help-card"><h4>Move &amp; talk</h4><ul>
          <li><kbd>WASD</kbd> or <kbd>Arrows</kbd> to walk</li>
          <li><kbd>Space</kbd> / <kbd>Enter</kbd> to talk, read, confirm</li>
          <li><kbd>B</kbd> opens your team, <kbd>M</kbd> mutes sound</li>
          <li>On a phone, use the d-pad and A / B buttons</li>
        </ul></div>
        <div class="help-card"><h4>Catching</h4><ul>
          <li>Walk in tall grass to meet wild Gigamon</li>
          <li>Weaken them first for a better catch</li>
          <li>Sleep and paralysis make catches easier</li>
          <li>Golden Balls are saved for legends</li>
        </ul></div>
        <div class="help-card"><h4>Type smarts</h4><ul>
          <li>Flame beats Leaf · Tide beats Flame &amp; Stone</li>
          <li>Leaf beats Tide &amp; Stone · Stone beats Flame &amp; Storm</li>
          <li>Storm beats Tide &amp; Spirit · Spirit beats Stone &amp; Storm</li>
          <li>Same-type moves hit harder</li>
        </ul></div>
        <div class="help-card"><h4>Island rhythm</h4><ul>
          <li>Health Hut and home restore your team</li>
          <li>Marcia Market sells balls and tonics</li>
          <li>The game saves automatically as you explore</li>
          <li>Music and art are generated right here in the browser</li>
        </ul></div>
      </div>
      <div class="modal-section"><h3>Settings</h3>
        <div class="toggle-row"><span style="font-weight:800;font-size:13px">Sound &amp; music</span><button class="btn btn-small" data-help-mute>${muted ? 'Turn sound on' : 'Mute sound'}</button></div>
        <div class="toggle-row"><span style="font-weight:800;font-size:13px">Progress</span><button class="btn btn-small" data-help-save>Save now</button></div>
        <div class="toggle-row"><span style="font-weight:800;font-size:13px">Erase save</span><button class="btn btn-small" data-help-new>New journey</button></div>
      </div>
      <div class="modal-actions"><button class="btn btn-primary" data-close-modal>Back to the island</button></div>`)
    const muteBtn = modalContent.querySelector('[data-help-mute]')
    if (muteBtn) muteBtn.onclick = () => { toggleMute(); openHelp() }
    const saveBtn = modalContent.querySelector('[data-help-save]')
    if (saveBtn) saveBtn.onclick = () => { saveGame(); showToast('Journey saved', 'Safe travels, guardian') }
    const newBtn = modalContent.querySelector('[data-help-new]')
    if (newBtn) newBtn.onclick = newJourney
  }

  const SHOP_ITEMS = ['coconut_ball', 'potion', 'super_potion', 'mango', 'golden_ball']

  function openShop() {
    if (!gameStarted) return
    const rows = SHOP_ITEMS.map(id => {
      const item = ITEMS[id]
      return `<div class="item-row">
        <span class="item-icon ${item.icon}"></span>
        <div class="item-info"><strong>${item.name}</strong><p>${item.desc}</p></div>
        <div class="item-buy"><span class="item-price">${item.price}c</span><button class="btn btn-small btn-primary" data-buy="${id}" ${state.coins < item.price ? 'disabled' : ''}>Buy</button></div>
      </div>`
    }).join('')
    openModal(`
      <div class="eyebrow">Marcia Market · Sweetwater Bay</div>
      <h2>Fresh Supplies</h2>
      <p class="lede">“Buy a little, share a little,” Marcia says, fanning her stall. “Coconut Balls for the bush, Golden Balls for the big spirits.”</p>
      <div class="money-line"><span class="coin-icon"></span><span>${state.coins} coins</span></div>
      <div class="item-list">${rows}</div>
      <div class="modal-actions"><button class="btn btn-primary" data-close-modal>Walk good</button><button class="btn btn-ghost" data-open-bag>Check bag</button></div>`)
    modalContent.querySelectorAll('[data-buy]').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.buy
        const item = ITEMS[id]
        if (state.coins < item.price) { showToast('Not enough coins', 'Try a battle or two'); return }
        state.coins -= item.price
        state.bag[id] = (state.bag[id] || 0) + 1
        YD.audio.sfx('confirm')
        updateHud()
        saveGame()
        showToast(`Bought ${item.name}`, `${state.coins} coins left`)
        openShop()
      }
    })
    const bagBtn = modalContent.querySelector('[data-open-bag]')
    if (bagBtn) bagBtn.onclick = openBag
  }

  function showEnding(result) {
    state.champion = true
    updateHud()
    saveGame()
    YD.audio.start('ending')
    const ids = Object.keys(SPECIES).length
    const caught = Object.keys(state.caught).filter(id => SPECIES[id]).length
    const confetti = Array.from({ length: 28 }, (_, i) => {
      const left = Math.round((i * 37) % 100)
      const colors = ['#ffe36b', '#ff8a5f', '#8ee0b0', '#8ad8ef', '#c9b8e8']
      return `<i style="left:${left}%;background:${colors[i % colors.length]};animation-duration:${2.4 + (i % 5) * 0.5}s;animation-delay:${(i % 7) * 0.35}s"></i>`
    }).join('')
    openModal(`
      <div class="confetti">${confetti}</div>
      <div class="eyebrow">Blue Mountain Peak · Sweetwater Bay</div>
      <h2>Island Guardian</h2>
      <p class="lede">${result === 'caught' ? 'Dr. Bird settles onto your shoulder, streamer tail catching the sunrise. The peak hums with one clear note — the island has chosen.' : 'Dr. Bird dips its wings and rises into the gold light. It leaves a single bright feather in your hand. The peak is quiet, and the island is safe.'}</p>
      <div class="ending-sprite"><canvas width="180" height="180" data-creature="drbird"></canvas></div>
      <div class="ending-stats">
        <div class="ending-stat"><strong>3 / 3</strong><span>Badges</span></div>
        <div class="ending-stat"><strong>${state.party.length}</strong><span>Partners</span></div>
        <div class="ending-stat"><strong>${caught} / ${ids}</strong><span>Dex caught</span></div>
        <div class="ending-stat"><strong>${formatTime(state.time)}</strong><span>On island</span></div>
      </div>
      <p class="lede" style="color:#dcebd4">Elder Bogle said it best: “A guardian is not the one who climbs highest. It is the one who comes back down and shares the view.”</p>
      <div class="modal-actions" style="justify-content:center">
        <button class="btn btn-primary" data-ending-close>Keep exploring</button>
        <button class="btn btn-ghost" data-ending-new>New journey</button>
      </div>`, { cardClass: 'ending-card' })
    modalContent.querySelector('[data-ending-close]').onclick = () => {
      closeModal()
      showToast('Island Guardian', 'The island is yours to wander')
    }
    modalContent.querySelector('[data-ending-new]').onclick = newJourney
    paintModalSprites(titleTime)
  }

  /* ------------------------------------------------------------ NPCs */
  function trainerDialogue(name, role, style, lines) {
    return dialogueLines(name, role, style, lines)
  }

  async function awardBadge(badgeId, wardenName) {
    state.badges[badgeId] = true
    updateHud()
    saveGame()
    YD.audio.sfx('badge')
    const info = STORY.badges[badgeId]
    showToast(`${info.name} earned!`, `${badgeCount()} / 3 Warden Badges`)
    await wait(420)
    if (badgeId === 'zeph') {
      state.bag.golden_ball = (state.bag.golden_ball || 0) + 3
      state.flags.zephMoved = true
      applyNpcWorldState()
      updateHud()
      saveGame()
      await showDialogue(dialogueLines(wardenName, 'Warden of the Peak', 'zeph', [
        'The mountain offers you three Golden Balls. Dr. Bird has watched every step you took to get here.',
        'The summit path is open. Go gently, guardian. Legends are shy of loud hearts.'
      ]))
      showToast('The summit path is open', 'Dr. Bird waits above the clouds')
    }
  }

  async function handleTrainer(npc, trainerId) {
    const tr = TRAINERS[trainerId]
    if (!tr) return
    if (state.defeated[trainerId]) {
      const lines = trainerId === 'drbird' ? [] : (tr.after || tr.win)
      await showDialogue(trainerDialogue(tr.name, tr.title, npc.style, lines))
      return
    }
    if (npc.role === 'warden' && npc.badge === 'zeph' && badgeCount() < 2) {
      await showDialogue([
        ...dialogueLines('Elder Zeph', 'Warden of the Peak', 'zeph', [
          'Hold, guardian. The pass answers only to two badges, and you carry ' + (badgeCount() === 1 ? 'one' : 'none') + '.',
          'The grove lies west across the bridge. The reef is south at the end of the pier. Return when both Wardens have tested you.'
        ])
      ])
      return
    }
    await showDialogue(trainerDialogue(tr.name, tr.title, npc.style, tr.intro))
    const enemyTeam = tr.team.map(([id, level]) => engine.makeMonster(id, level))
    mode = 'battle'
    YD.audio.sfx('encounter')
    const result = await runBattle({ enemyTeam, isWild: false, trainerName: tr.name })
    if (result === 'win') {
      state.defeated[trainerId] = true
      state.coins += tr.reward
      updateHud()
      saveGame()
      await showDialogue(trainerDialogue(tr.name, tr.title, npc.style, tr.win))
      if (tr.badge) await awardBadge(tr.badge, tr.name)
      showToast(`+${tr.reward} coins`, `Defeated ${tr.name}`)
      saveGame()
    } else if (result === 'lose') {
      await blackout()
    }
  }

  async function handleLegendary(npc) {
    if (state.champion) {
      await showDialogue(dialogueLines('Dr. Bird', 'Legendary Spirit', 'drbird', [
        state.caught.drbird
          ? 'The hummingbird rests on the old flagpole, watching the bay with you. Some guardians are lucky enough to keep a legend close.'
          : 'A bright feather turns slowly above the peak. Dr. Bird is gone, but the mountain still hums your name.'
      ]))
      return
    }
    if (!allBadges()) {
      await showDialogue([{ name: 'Gigamon Journal', role: '', portrait: null, text: 'The peak is empty except for wind and cloud. Three Warden Badges must hum together before the legend will show itself.' }])
      return
    }
    const choice = await showDialogue([
      { name: 'Dr. Bird', role: 'Legendary Spirit', portrait: 'drbird', text: 'A wingbeat like distant rain. The streamer-tailed hummingbird hangs in the air above the flag, and the whole mountain goes still.' },
      { name: 'Dr. Bird', role: 'Legendary Spirit', portrait: 'drbird', text: '“You climbed carrying three badges and a team that trusts you. What will you do with the view, guardian?”', choices: [
        { label: 'Challenge Dr. Bird', value: 'fight' },
        { label: 'Not yet', value: 'later' }
      ] }
    ])
    if (choice !== 'fight') return
    const legend = engine.makeMonster('drbird', 20)
    state.seen.drbird = true
    mode = 'battle'
    YD.audio.sfx('encounter')
    const result = await runBattle({ enemyTeam: [legend], isWild: true, trainerName: 'Dr. Bird' })
    if (result === 'caught' || result === 'win') {
      if (lastCatchInfo) showToast(`${lastCatchInfo.mon} joined you!`, 'A legend follows you home')
      await wait(600)
      showEnding(result)
    } else if (result === 'lose') {
      await blackout()
    }
  }

  async function handleNpc(npc) {
    if (!npc) return
    if (npc.role === 'trainer') return handleTrainer(npc, npc.trainer)
    if (npc.role === 'warden') return handleTrainer(npc, npc.trainer)
    if (npc.role === 'legendary') return handleLegendary(npc)

    if (npc.role === 'shop') {
      await showDialogue(dialogueLines(npc.name, 'Marketkeeper', npc.style, [
        'Sweetheart! Mango ripe, coconut cold, balls ready for the bush. What you need today?'
      ]))
      openShop()
      return
    }

    if (npc.role === 'heal') {
      await showDialogue(dialogueLines(npc.name, 'Health Hut', npc.style, [
        'Come, come. Put the team on the mat. Sweetwater Bay does not send tired partners back into the grass.'
      ]))
      engine.healParty(state.party)
      YD.audio.sfx('heal')
      updateHud()
      saveGame()
      showToast('Team restored', 'Everyone is full of energy')
      return
    }

    if (npc.role === 'professor') {
      if (allBadges() && !state.flags.profGift) {
        state.flags.profGift = true
        state.bag.golden_ball = (state.bag.golden_ball || 0) + 2
        updateHud()
        saveGame()
        await showDialogue(dialogueLines(npc.name, 'Gigamon Professor', npc.style, [
          'Three badges! I knew the island would answer you.',
          'Take two more Golden Balls from my field kit. Dr. Bird is not a battle to win — it is a meeting to be ready for.',
          'Climb with a full team and a calm heart. And come back and tell me everything.'
        ]))
        showToast('Professor Pimento gave 2 Golden Balls', 'For the legend at the peak')
        return
      }
      if (!state.flags.profFirst) {
        state.flags.profFirst = true
        state.bag.potion = (state.bag.potion || 0) + 2
        updateHud()
        saveGame()
        await showDialogue(dialogueLines(npc.name, 'Gigamon Professor', npc.style, [
          'Your partner already trusts you. That is the hardest part, and you did it on the first morning.',
          'Here — two potions from the lab. Walk in the tall grass to meet wild spirits, weaken them, then throw a Coconut Ball.',
          'Earn the three Warden Badges and climb Blue Mountain Peak. Dr. Bird only appears to guardians who finish what they start.'
        ]))
        showToast('Professor Pimento gave 2 Potions', 'Talk to everyone — the island rewards curiosity')
        return
      }
      await showDialogue(dialogueLines(npc.name, 'Gigamon Professor', npc.style, [
        state.champion
          ? 'Guardian! The whole bay is talking about the peak. How does the island look from up there?'
          : 'The Wardens are the island in three moods: grove, reef, and storm. Learn each one and you will understand Sweetwater Bay.'
      ]))
      return
    }

    if (npc.role === 'lore') {
      const count = (state.flags.talks && state.flags.talks[npc.id]) || 0
      state.flags.talks = state.flags.talks || {}
      state.flags.talks[npc.id] = count + 1
      const elderLines = state.champion
        ? ['Island Guardian. Sit a while. The sea does not ask you to prove anything today.', 'A guardian is not the one who climbs highest. It is the one who comes back down and shares the view.']
        : count === 0
          ? ['Walk good, young guardian. Three Wardens keep the island in balance: Fern in the bamboo grove, Finn at the reef, Zeph at the mountain gate.', 'Earn their badges. When the third one hums, the summit path will open and Dr. Bird will decide the rest.']
          : badgeCount() === 0
            ? ['Start west across the bamboo bridge. Fern is patient, but her roots hit hard. Take a few friends from the tall grass first.']
            : badgeCount() < 3
              ? [`${badgeCount()} badge${badgeCount() === 1 ? '' : 's'} already! The island is starting to recognize your footsteps.`, 'Rest at the Health Hut before the next Warden. A tired team makes proud mistakes.']
              : ['Three badges. The mountain gate is open. Bring Golden Balls, a full team, and no hurry. Legends can smell impatience.']
      await showDialogue(dialogueLines(npc.name, 'Village Elder', npc.style, elderLines))
      return
    }

    if (npc.role === 'tip') {
      const tips = [
        'Tall grass wiggles when something is inside. Walk through it and see what pops out!',
        'Sleep makes catching way easier. Anancy and River Mumma know lullabies.',
        'The Health Hut is free. Nurse Orchid never charges a guardian.',
        'If a battle goes bad, Run works in the wild. Wardens do not let you run, though. Rude, honestly.'
      ]
      await showDialogue(dialogueLines(npc.name, 'Likkle Explorer', npc.style, [tips[Math.floor(Math.random() * tips.length)]]))
      return
    }

    if (npc.role === 'goat') {
      await showDialogue([{ name: 'Yard Goat', role: 'Local Menace', portrait: 'goat', text: Math.random() < 0.5 ? 'Maaaaa. The goat looks at your bag as if it contains laundry. It does not.' : 'The goat stamps once, thoroughly unimpressed, then returns to eating a fence.' }])
      return
    }

    if (npc.role === 'tourist') {
      await showDialogue(dialogueLines(npc.name, 'Beach Regular', npc.style, [
        'Sweetest water in the Caribbean, darling. Mind the crabs, mind the sun, and do not try to out-stubborn a goat.',
        'They say the fireflies here spell out old stories if you watch long enough. I have been watching since breakfast.'
      ]))
      return
    }

    await showDialogue(dialogueLines(npc.name, 'Islander', npc.style, ['Walk good, guardian. The island is listening.']))
  }

  async function handleObject(obj) {
    if (obj.type === 'sign') {
      await showDialogue([{ name: 'Island Sign', role: obj.label || '', portrait: null, text: obj.text }])
      return
    }
    if (obj.type === 'door') {
      const b = obj.building
      if (b.type === 'market') { openShop(); return }
      if (b.type === 'clinic') {
        await showDialogue([{ name: 'Health Hut', role: 'Sweetwater Bay', portrait: 'nurse', text: 'The hut smells of lemongrass and clean linen. Nurse Orchid has left a note: “Rest as long as you need, guardian.”' }])
        engine.healParty(state.party)
        YD.audio.sfx('heal')
        updateHud()
        saveGame()
        showToast('Team restored', 'Health Hut · free care')
        return
      }
      if (b.type === 'house') {
        await showDialogue([{ name: 'Gigamon Journal', role: '', portrait: null, text: 'Home. A kettle, a hammock, and a window full of sea. Your team curls up for a proper nap.' }])
        engine.healParty(state.party)
        YD.audio.sfx('heal')
        updateHud()
        saveGame()
        showToast('Everyone rested', 'Home in Sweetwater Bay')
        return
      }
      if (b.type === 'lab') {
        await showDialogue([{ name: 'Gigamon Journal', role: '', portrait: null, text: 'The lab is warm with pepper plants and humming machines. Professor Pimento is outside by the plaza — easier to talk in the breeze.' }])
        return
      }
      await showDialogue([{ name: 'Grove Hut', role: 'Bamboo Grove', portrait: null, text: state.badges.fern ? 'A clay kettle sings on the stove. Fern left a bowl of ackee and two spoons, as if she knew you would come back.' : 'The grove hut is quiet. A hand-painted sign reads: “Fern is in the grove. Bring a team, not excuses.”' }])
      return
    }
    if (obj.id === 'spring') {
      await showDialogue([{ name: 'Gigamon Journal', role: '', portrait: null, text: 'Cool water bubbles out of the rock. Your team drinks, splashes, and comes back shiny and full of energy.' }])
      engine.healParty(state.party)
      YD.audio.sfx('heal')
      updateHud()
      saveGame()
      showToast('Spring water restored the team')
      return
    }
    if (obj.id === 'mango') {
      if (state.flags.mango) {
        await showDialogue([{ name: 'Mango Tree', role: 'Bamboo Grove', portrait: null, text: 'The low branches are picked clean. High above, one stubborn mango refuses to fall.' }])
      } else {
        state.flags.mango = true
        state.bag.mango = (state.bag.mango || 0) + 2
        updateHud()
        saveGame()
        showToast('Found 2 Sweet Mangoes', 'The tree gave them up easily')
        await showDialogue([{ name: 'Mango Tree', role: 'Bamboo Grove', portrait: null, text: 'Two ripe Julie mangoes drop into your hands, warm from the sun. Your partner is already drooling.' }])
      }
      return
    }
    if (obj.id === 'crate') {
      if (state.flags.crate) {
        await showDialogue([{ name: 'Old Crate', role: 'Pier', portrait: null, text: 'Just rope, salt, and one very determined crab.' }])
      } else {
        state.flags.crate = true
        state.bag.coconut_ball = (state.bag.coconut_ball || 0) + 3
        state.coins += 40
        updateHud()
        saveGame()
        showToast('Found 3 Coconut Balls + 40 coins', 'Fisher Jomo will not miss them')
        await showDialogue([{ name: 'Old Crate', role: 'Pier', portrait: null, text: 'Inside: three spare Coconut Balls, a handful of coins, and a note that says “Jomo — do NOT leave the bait in here again.”' }])
      }
      return
    }
    if (obj.id === 'well') {
      await showDialogue([{ name: 'Village Well', role: 'Plaza', portrait: null, text: 'The well is deep and cool. Somebody has tied a bunch of flowers to the rope. The island remembers everyone who draws water here.' }])
      return
    }
    await showDialogue([{ name: 'Gigamon Journal', role: '', portrait: null, text: 'Nothing here but island dust and a small lizard doing push-ups.' }])
  }

  function interact() {
    if (!gameStarted || mode !== 'world' || !player || player.moving) return
    const target = facingTile()
    const npc = findNpcAt(target.x, target.y)
    if (npc) {
      Promise.resolve(handleNpc(npc)).catch(err => {
        console.error(err)
        if (mode === 'dialogue') finishDialogue()
        else mode = 'world'
      })
      return
    }
    const obj = world.interactableAt(target.x, target.y)
    if (obj) {
      Promise.resolve(handleObject(obj)).catch(err => {
        console.error(err)
        if (mode === 'dialogue') finishDialogue()
        else mode = 'world'
      })
    }
  }

  /* ------------------------------------------------------------ start / load */
  function beginGame(intro) {
    gameStarted = true
    titleScreen.hidden = true
    worldScreen.hidden = false
    setupWorld()
    refreshMuteUI()
    updateHud()
    YD.audio.start('world')
    mode = 'world'
    saveGame()
    if (intro) {
      const mon = state.party[0]
      showDialogue([
        { name: 'Elder Bogle', role: 'Village Elder', portrait: 'elder', text: `Walk good, guardian! Sweetwater Bay welcomes you and your ${mon.name}.` },
        { name: 'Elder Bogle', role: 'Village Elder', portrait: 'elder', text: 'The island is full of Gigamon — pepper spirits, tide turtles, grove ghosts. Catch a few in the tall grass, then earn the three Warden Badges.' },
        { name: 'Elder Bogle', role: 'Village Elder', portrait: 'elder', text: 'Fern keeps the bamboo grove west. Finn waits at the pier south. Elder Zeph guards the mountain pass north — two badges open his gate.' },
        { name: 'Elder Bogle', role: 'Village Elder', portrait: 'elder', text: 'When three badges hum together, climb Blue Mountain Peak and meet Dr. Bird. Now go on. The grass is wiggling.' }
      ]).then(() => {
        showHint('<kbd>WASD</kbd> move · <kbd>Space</kbd> talk · <kbd>B</kbd> team', 8000)
        showToast('Quest: earn 3 Warden Badges', 'West grove · South pier · North peak')
      })
    } else {
      showToast('Welcome back, guardian', `${badgeCount()} / 3 badges · ${formatTime(state.time)} on island`)
    }
    updatePrompt()
  }

  function startNewGame() {
    YD.audio.resume()
    state = createNewState(selectedStarter)
    beginGame(true)
  }

  function continueGame() {
    const raw = peekSave()
    if (!raw) { showToast('No saved journey', 'Start a new one'); return }
    try {
      state = loadState(raw)
      YD.audio.resume()
      beginGame(false)
    } catch (err) {
      console.error(err)
      showToast('Could not load save', 'Starting fresh might be safest')
    }
  }

  /* ------------------------------------------------------------ input */
  function primaryAction() {
    if (!gameStarted) return
    if (!modal.hidden) return
    if (mode === 'dialogue') { advanceDialogue(); return }
    if (mode === 'world') interact()
  }

  function onKeyDown(e) {
    const key = e.key
    if (key === 'Escape') {
      if (!modal.hidden) { e.preventDefault(); closeModal() }
      return
    }
    if (mode === 'battle') return
    if (mode === 'dialogue') {
      if (key === ' ' || key === 'Enter' || key === 'a' || key === 'A') {
        e.preventDefault()
        advanceDialogue()
      }
      return
    }
    if (!modal.hidden) return
    if (!gameStarted) return
    if (KEY_DIR[key]) {
      e.preventDefault()
      const dir = KEY_DIR[key]
      held[dir] = true
      lastDir = dir
      attemptMove(dir)
      return
    }
    if (key === ' ' || key === 'Enter' || key === 'a' || key === 'A') {
      e.preventDefault()
      interact()
      return
    }
    if (key === 'b' || key === 'B') { openParty(); return }
    if (key === 'm' || key === 'M') { toggleMute() }
  }

  function onKeyUp(e) {
    const dir = KEY_DIR[e.key]
    if (dir) held[dir] = false
  }

  function bindInput() {
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', () => { held.up = held.down = held.left = held.right = false })

    document.querySelectorAll('.dpad-btn').forEach(btn => {
      const dir = btn.dataset.dir
      const press = e => {
        e.preventDefault()
        held[dir] = true
        lastDir = dir
        attemptMove(dir)
      }
      const release = () => { held[dir] = false }
      btn.addEventListener('pointerdown', press)
      btn.addEventListener('pointerup', release)
      btn.addEventListener('pointercancel', release)
      btn.addEventListener('pointerleave', release)
      btn.addEventListener('contextmenu', e => e.preventDefault())
    })
    $('touch-a').addEventListener('click', e => { e.preventDefault(); primaryAction() })
    $('touch-b').addEventListener('click', e => {
      e.preventDefault()
      if (!gameStarted) return
      if (!modal.hidden) { closeModal(); return }
      if (mode === 'dialogue') { advanceDialogue(); return }
      if (mode === 'world') openParty()
    })

    modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal))
    modalContent.addEventListener('click', e => {
      if (e.target.closest('[data-close-modal]')) closeModal()
    })
  }

  /* ------------------------------------------------------------ frame loop */
  function frame(now) {
    const dt = Math.min(0.05, (now - lastFrame) / 1000)
    lastFrame = now
    titleTime += dt
    if (!titleScreen.hidden) drawTitle()
    if (!worldScreen.hidden && view && player) {
      if (mode === 'world' || mode === 'dialogue' || mode === 'modal') updateWorld(dt)
      if (mode === 'world') view.render(camera, [player].concat(visibleNpcs()), titleTime)
      else view.render(camera, [player].concat(visibleNpcs()), titleTime)
    }
    requestAnimationFrame(frame)
  }

  /* ------------------------------------------------------------ boot */
  function boot() {
    resizeTitle()
    const save = peekSave()
    $('continue-btn').hidden = !save
    refreshMuteUI()
    YD.initBattleMenu()
    bindInput()

    titleScreen.querySelectorAll('[data-starter]').forEach(card => {
      card.addEventListener('click', () => selectStarter(card.dataset.starter))
    })
    $('start-btn').addEventListener('click', () => {
      YD.audio.sfx('confirm')
      startNewGame()
    })
    $('continue-btn').addEventListener('click', () => {
      YD.audio.sfx('confirm')
      continueGame()
    })
    $('title-help').addEventListener('click', openHelp)
    $('title-mute').addEventListener('click', toggleMute)
    $('hud-mute').addEventListener('click', toggleMute)
    $('quest-ribbon').addEventListener('click', () => { if (gameStarted) openQuest() })
    document.querySelectorAll('[data-open]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!gameStarted) return
        const what = btn.dataset.open
        if (what === 'party') openParty()
        else if (what === 'bag') openBag()
        else if (what === 'dex') openDex()
        else if (what === 'help') openHelp()
      })
    })

    window.addEventListener('resize', () => {
      resizeTitle()
      if (gameStarted) {
        resizeWorldCanvas()
        if (view) view.resize(worldCanvas.width, worldCanvas.height)
        if (YD._battleUI && YD._battleUI.active) YD._battleUI.resize()
      }
    })
    window.addEventListener('pagehide', saveGame)
    document.addEventListener('visibilitychange', () => { if (document.hidden) saveGame() })

    // start the title music after the first user gesture (browser autoplay rules)
    const armAudio = () => {
      YD.audio.resume()
      if (!gameStarted) YD.audio.start('title')
      document.removeEventListener('pointerdown', armAudio)
      document.removeEventListener('keydown', armAudio)
    }
    document.addEventListener('pointerdown', armAudio)
    document.addEventListener('keydown', armAudio)

    document.addEventListener('keydown', e => {
      if (!gameStarted && (e.key === 'Enter' || e.key === ' ') && e.target === document.body) {
        e.preventDefault()
        startNewGame()
      }
    })

    requestAnimationFrame(frame)
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot)
  else boot()
})(typeof globalThis !== 'undefined' ? globalThis : this)
