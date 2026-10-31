/* GIGAMON: Island Spirits — battle screen controller */
(function (root) {
  'use strict'
  const YD = root.YD = root.YD || {}
  const { SPECIES, MOVES, ITEMS, TYPES } = YD.data
  const engine = YD.engine
  const art = YD.art

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
  const pct = (a, b) => Math.max(0, Math.min(100, (a / Math.max(1, b)) * 100))

  function typeChip(type) {
    const t = TYPES[type] || TYPES.Island
    return `<span class="type-chip type-${type.toLowerCase()}">${t.name}</span>`
  }

  class BattleUI {
    constructor() {
      this.screen = document.getElementById('battle-screen')
      this.stage = this.screen.querySelector('.battle-stage')
      this.canvas = document.getElementById('battle-canvas')
      this.ctx = this.canvas.getContext('2d')
      this.fxLayer = document.getElementById('battle-fx')
      this.ballEl = document.getElementById('ball-anim')
      this.mainMenu = document.getElementById('battle-main-menu')
      this.submenu = document.getElementById('battle-submenu')
      this.battleText = document.getElementById('battle-text')
      this.battleSub = document.getElementById('battle-sub')
      this.trainerTag = document.getElementById('battle-trainer')

      this.els = {
        enemyName: document.getElementById('enemy-name'),
        enemyLevel: document.getElementById('enemy-level'),
        enemyTypes: document.getElementById('enemy-types'),
        enemyHp: document.getElementById('enemy-hp'),
        enemyHpText: document.getElementById('enemy-hp-text'),
        enemyStatus: document.getElementById('enemy-status'),
        playerName: document.getElementById('player-name'),
        playerLevel: document.getElementById('player-level'),
        playerTypes: document.getElementById('player-types'),
        playerHp: document.getElementById('player-hp'),
        playerHpText: document.getElementById('player-hp-text'),
        playerXpFill: document.getElementById('player-xp-fill'),
        playerXpText: document.getElementById('player-xp-text'),
        playerStatus: document.getElementById('player-status')
      }

      this.active = false
      this.locked = false
      this.anim = { player: { alpha: 1 }, enemy: { alpha: 1 } }
      this.lastAction = null
      this.frame = 0
      this.time = 0
      this._advance = null
      this._loopStarted = false
      this._onKey = this._onKey.bind(this)
      this._onPointer = this._onPointer.bind(this)
      window.addEventListener('resize', () => { if (this.active) this.resize() })
      document.addEventListener('keydown', this._onKey)
      this.screen.addEventListener('pointerdown', this._onPointer)
    }

    _onKey(e) {
      if (!this.active) return
      if (![' ', 'Enter', 'a', 'A'].includes(e.key)) return
      if (this._advance) {
        e.preventDefault()
        e.stopPropagation()
        const fn = this._advance
        this._advance = null
        fn()
      }
    }

    _onPointer(e) {
      if (!this.active || !this._advance) return
      if (e.target.closest('button')) return
      const fn = this._advance
      this._advance = null
      fn()
    }

    /* ------------------------------------------------------------- lifecycle */
    async start(config) {
      this.config = config
      this.state = config.state
      this.bag = config.bag
      this.active = true
      this.locked = true
      this.result = null
      this.anim = { player: { alpha: 1 }, enemy: { alpha: 1 } }
      this.enemyFaint = false
      this.playerFaint = false
      this.screen.hidden = false
      this.mainMenu.hidden = true
      this.submenu.hidden = true
      this.ballEl.hidden = true
      this.trainerTag.hidden = !config.trainerName
      if (config.trainerName) this.trainerTag.textContent = config.trainerName
      this.resize()
      this.startLoop()
      this.syncCards(true)
      YD.audio.start('battle')

      const enemy = engine.activeMon(this.state, 'enemy')
      if (config.wild) {
        await this.say(`A wild ${enemy.name} appeared!`, 1500)
        const starter = engine.activeMon(this.state, 'player')
        await this.say(`Go, ${starter.name}!`, 900)
        this.anim.player.alpha = 0
        setTimeout(() => { this.anim.player.alpha = 1 }, 140)
        YD.audio.sfx('encounter')
      } else {
        await this.say(`${config.trainerName} wants to battle!`, 1500)
        const starter = engine.activeMon(this.state, 'player')
        await this.say(`Go, ${starter.name}!`, 900)
      }
      this.locked = false
      this.showMainMenu()
      return new Promise(resolve => { this._resolve = resolve })
    }

    startLoop() {
      if (this._loopStarted) return
      this._loopStarted = true
      let last = performance.now()
      const loop = now => {
        if (!this.active) { this._loopStarted = false; return }
        this.time += Math.min(0.05, (now - last) / 1000)
        last = now
        this.render()
        requestAnimationFrame(loop)
      }
      requestAnimationFrame(loop)
    }

    resize() {
      if (!this.stage) return
      const r = this.stage.getBoundingClientRect()
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      this.canvas.width = Math.max(320, Math.round(r.width * dpr))
      this.canvas.height = Math.max(220, Math.round(r.height * dpr))
    }

    close() {
      this.active = false
      this.screen.hidden = true
      this._advance = null
      this.ballEl.hidden = true
    }

    /* ------------------------------------------------------------- event flow */
    askAdvance(ms) {
      return new Promise(resolve => {
        let done = false
        const finish = () => {
          if (done) return
          done = true
          clearTimeout(timer)
          this._advance = null
          resolve()
        }
        const timer = setTimeout(finish, ms)
        this._advance = finish
      })
    }

    setMessage(text, sub) {
      this.battleText.textContent = text
      if (sub !== undefined) this.battleSub.textContent = sub
    }

    async say(text, ms) {
      this.setMessage(text)
      await this.askAdvance(ms || Math.max(850, Math.min(1900, text.length * 30 + 600)))
    }

    async play(events) {
      this.locked = true
      this.hideMenus()
      for (const ev of events) {
        if (ev.kind === 'end') { this.result = ev.result; continue }
        await this.playEvent(ev)
      }
      this.syncCards()
      this.locked = false
    }

    async playEvent(ev) {
      switch (ev.kind) {
        case 'text':
          await this.say(ev.text)
          break
        case 'attack': {
          const now = performance.now()
          this.lunge = this.lunge || {}
          this.lunge[ev.side] = now
          YD.audio.sfx('blip')
          await wait(320)
          break
        }
        case 'damage': {
          this.animateDamage(ev)
          if (ev.effectiveness > 1.5) YD.audio.sfx('superhit')
          else if (ev.effectiveness < 0.75) YD.audio.sfx('weak')
          else YD.audio.sfx('hit')
          this.fxLayer.classList.remove('shake')
          void this.fxLayer.offsetWidth
          this.fxLayer.classList.add('shake')
          await wait(420)
          break
        }
        case 'heal':
          this.animateHeal(ev)
          YD.audio.sfx('heal')
          await wait(420)
          break
        case 'status':
          this.syncCards()
          await wait(200)
          break
        case 'stat':
          this.syncCards()
          await wait(180)
          break
        case 'faint': {
          if (ev.side === 'enemy') this.enemyFaint = true
          else this.playerFaint = true
          YD.audio.sfx('faint')
          await wait(650)
          break
        }
        case 'send': {
          if (ev.side === 'enemy') { this.enemyFaint = false; this.anim.enemy.alpha = 0; setTimeout(() => { this.anim.enemy.alpha = 1 }, 120) }
          else { this.playerFaint = false; this.anim.player.alpha = 0; setTimeout(() => { this.anim.player.alpha = 1 }, 120) }
          this.syncCards()
          YD.audio.sfx('ball')
          await wait(420)
          break
        }
        case 'xp': {
          this.syncCards()
          await wait(260)
          break
        }
        case 'levelup': {
          YD.audio.sfx('levelup')
          await this.say(`${ev.name} grew to Lv. ${ev.level}!`, 1100)
          this.syncCards()
          break
        }
        case 'evolve': {
          YD.audio.sfx('badge')
          await this.say(`What? ${ev.from} evolved into ${ev.to}!`, 1600)
          this.syncCards()
          break
        }
        case 'learn': {
          const extra = ev.replaced ? ` and forgot ${ev.replaced}` : ''
          await this.say(`${ev.name} learned ${ev.moveName}${extra}!`, 1300)
          break
        }
        case 'throwBall': {
          await this.throwBall(ev)
          break
        }
        case 'requestSwitch':
          break
        default:
          break
      }
    }

    async throwBall(ev) {
      YD.audio.sfx('ball')
      this.ballEl.hidden = false
      this.ballEl.style.animation = 'none'
      void this.ballEl.offsetWidth
      this.ballEl.style.animation = 'ballToss .55s ease-out forwards'
      await wait(620)
      const shakes = ev.shakes
      for (let i = 0; i < shakes; i++) {
        YD.audio.sfx('shake')
        this.ballEl.style.animation = 'ballShake .3s ease ' + (i ? '0s' : '0s') + ' 2'
        await wait(360)
      }
      this.ballEl.hidden = true
      this.ballEl.style.animation = ''
      if (ev.success) YD.audio.sfx('catch')
      await wait(240)
    }

    animateDamage(ev) {
      const mon = ev.side === 'enemy' ? engine.activeMon(this.state, 'enemy') : engine.activeMon(this.state, 'player')
      const bar = ev.side === 'enemy' ? this.els.enemyHp : this.els.playerHp
      const text = ev.side === 'enemy' ? this.els.enemyHpText : this.els.playerHpText
      const max = ev.max || (mon && mon.maxHp) || 1
      const target = engine.clamp(pct(ev.to, max), 0, 100)
      bar.style.width = pct(ev.from, max) + '%'
      void bar.offsetWidth
      bar.style.width = target + '%'
      this.applyHpColor(bar, target)
      if (text) text.textContent = `${ev.to}/${max}`
      if (ev.side === 'enemy') this.anim.enemy.hurt = performance.now()
      else this.anim.player.hurt = performance.now()
    }

    animateHeal(ev) {
      const bar = ev.side === 'enemy' ? this.els.enemyHp : this.els.playerHp
      const text = ev.side === 'enemy' ? this.els.enemyHpText : this.els.playerHpText
      const mon = ev.side === 'enemy' ? engine.activeMon(this.state, 'enemy') : engine.activeMon(this.state, 'player')
      const max = (mon && mon.maxHp) || 1
      bar.style.width = pct(ev.from, max) + '%'
      void bar.offsetWidth
      bar.style.width = pct(ev.to, max) + '%'
      this.applyHpColor(bar, pct(ev.to, max))
      if (text) text.textContent = `${ev.to}/${max}`
    }

    applyHpColor(bar, percent) {
      bar.classList.toggle('low', percent <= 50 && percent > 22)
      bar.classList.toggle('crit', percent <= 22)
    }

    /* ------------------------------------------------------------- cards */
    syncCards(initial) {
      const player = engine.activeMon(this.state, 'player')
      const enemy = engine.activeMon(this.state, 'enemy')
      if (enemy) {
        this.els.enemyName.textContent = enemy.name
        this.els.enemyLevel.textContent = 'Lv. ' + enemy.level
        this.els.enemyTypes.innerHTML = typeChip(enemy.type)
        const p = pct(enemy.hp, enemy.maxHp)
        this.els.enemyHp.style.width = p + '%'
        this.applyHpColor(this.els.enemyHp, p)
        this.els.enemyHpText.textContent = `${enemy.hp}/${enemy.maxHp}`
        this.showStatus(this.els.enemyStatus, enemy.status)
      }
      if (player) {
        this.els.playerName.textContent = player.name
        this.els.playerLevel.textContent = 'Lv. ' + player.level
        this.els.playerTypes.innerHTML = typeChip(player.type)
        const p = pct(player.hp, player.maxHp)
        this.els.playerHp.style.width = p + '%'
        this.applyHpColor(this.els.playerHp, p)
        this.els.playerHpText.textContent = `${player.hp}/${player.maxHp}`
        this.els.playerXpFill.style.width = pct(player.xp, player.xpNext) + '%'
        this.els.playerXpText.textContent = `XP ${player.xp}/${player.xpNext}`
        this.showStatus(this.els.playerStatus, player.status)
      }
    }

    showStatus(el, status) {
      if (!status) { el.hidden = true; el.textContent = ''; return }
      el.hidden = false
      el.textContent = status
      el.className = 'status-chip ' + status
    }

    /* ------------------------------------------------------------- menus */
    hideMenus() {
      this.mainMenu.hidden = true
      this.submenu.hidden = true
    }

    showMainMenu() {
      this.locked = false
      this.mainMenu.hidden = false
      this.submenu.hidden = true
      this.setMessage('What will you do?', this.activeSummary())
    }

    activeSummary() {
      const mon = engine.activeMon(this.state, 'player')
      const enemy = engine.activeMon(this.state, 'enemy')
      if (!mon) return ''
      return `${mon.name} Lv. ${mon.level} · ${mon.hp}/${mon.maxHp} HP · Foe ${enemy ? enemy.name + ' Lv. ' + enemy.level : '—'}`
    }

    bindMainMenu() {
      this.mainMenu.querySelectorAll('[data-action]').forEach(btn => {
        btn.onclick = () => {
          if (this.locked) return
          YD.audio.sfx('click')
          const action = btn.dataset.action
          if (action === 'fight') this.openMoves()
          else if (action === 'bag') this.openBag()
          else if (action === 'team') this.openTeam(false)
          else if (action === 'run') this.act({ type: 'run' })
        }
      })
    }

    openMoves() {
      const mon = engine.activeMon(this.state, 'player')
      this.mainMenu.hidden = true
      this.submenu.hidden = false
      this.setMessage('Choose a move.', `${mon.name} · ${mon.hp}/${mon.maxHp} HP`)
      const buttons = mon.moves.map((slot, i) => {
        const move = MOVES[slot.id]
        const color = (TYPES[move.type] || TYPES.Island).color
        const disabled = slot.pp <= 0
        return `<button class="move-btn" data-move="${i}" style="--move-color:${color}" ${disabled ? 'disabled' : ''}>
          <span class="move-name">${move.name}<span class="pp">${slot.pp}/${slot.maxPp}</span></span>
          <span class="move-meta"><span>${move.type}</span><span>${move.power ? 'PWR ' + move.power : 'STATUS'}</span><span>${move.acc}%</span></span>
        </button>`
      }).join('')
      this.submenu.innerHTML = `<div class="move-grid">${buttons || '<p class="empty-note">No moves left — Struggle it is!</p>'}</div><button class="battle-back" data-back>← Back</button>`
      this.submenu.querySelectorAll('[data-move]').forEach(btn => {
        btn.onclick = () => {
          if (this.locked) return
          YD.audio.sfx('confirm')
          this.act({ type: 'move', index: Number(btn.dataset.move) })
        }
      })
      this.submenu.querySelector('[data-back]').onclick = () => { YD.audio.sfx('cancel'); this.showMainMenu() }
    }

    openBag() {
      this.mainMenu.hidden = true
      this.submenu.hidden = false
      this.setMessage('Choose an item.', `Coins: ${this.config.getCoins ? this.config.getCoins() : 0}`)
      const ids = Object.keys(this.bag).filter(id => this.bag[id] > 0 && ITEMS[id])
      const rows = ids.map(id => {
        const item = ITEMS[id]
        const ballDisabled = item.kind === 'ball' && !this.state.enemy.isWild
        const mon = engine.activeMon(this.state, 'player')
        const healDisabled = item.kind === 'heal' && mon.hp >= mon.maxHp
        return `<button class="submenu-row" data-item="${id}" ${ballDisabled || healDisabled ? 'disabled' : ''}>
          <span class="item-icon ${item.icon}" style="width:20px;height:20px"></span>
          <span>${item.name}${ballDisabled ? ' <small>(wild only)</small>' : ''}${healDisabled ? ' <small>(full HP)</small>' : ''}</span>
          <small>×${this.bag[id]}</small>
        </button>`
      }).join('')
      this.submenu.innerHTML = `<div class="submenu-panel">${rows || '<p class="empty-note">Your bag is empty.</p>'}</div><button class="battle-back" data-back>← Back</button>`
      this.submenu.querySelectorAll('[data-item]').forEach(btn => {
        btn.onclick = () => {
          if (this.locked) return
          const id = btn.dataset.item
          if (this.bag[id] <= 0) return
          YD.audio.sfx('confirm')
          if (this.config.onUseItem) this.config.onUseItem(id)
          this.act({ type: 'item', itemId: id })
        }
      })
      this.submenu.querySelector('[data-back]').onclick = () => { YD.audio.sfx('cancel'); this.showMainMenu() }
    }

    openTeam(forced) {
      this.mainMenu.hidden = true
      this.submenu.hidden = false
      const team = this.state.player.team
      const activeIndex = this.state.player.active
      this.setMessage(forced ? 'Choose your next partner.' : 'Switch partner.', forced ? 'Your partner fainted!' : 'A switch uses your turn.')
      const rows = team.map((mon, i) => {
        if (!mon) return ''
        const disabled = mon.fainted || mon.hp <= 0 || i === activeIndex
        const p = pct(mon.hp, mon.maxHp)
        return `<button class="submenu-row" data-team="${i}" ${disabled ? 'disabled' : ''}>
          <span class="type-dot" style="width:10px;height:10px;border-radius:50%;background:${(TYPES[mon.type] || TYPES.Island).color};border:1.5px solid #2a1b14"></span>
          <span>${mon.name} <small style="margin-left:4px">Lv. ${mon.level}</small></span>
          <small>${mon.hp}/${mon.maxHp} HP</small>
          <span class="hp-track" style="width:52px;height:7px"><span class="hp-fill ${p <= 22 ? 'crit' : p <= 50 ? 'low' : ''}" style="display:block;width:${p}%"></span></span>
        </button>`
      }).join('')
      this.submenu.innerHTML = `<div class="submenu-panel">${rows}</div>${forced ? '' : '<button class="battle-back" data-back>← Back</button>'}`
      this.submenu.querySelectorAll('[data-team]').forEach(btn => {
        btn.onclick = () => {
          if (this.locked) return
          YD.audio.sfx('confirm')
          const index = Number(btn.dataset.team)
          if (forced) this.forcedSwitch(index)
          else this.act({ type: 'switch', index })
        }
      })
      const back = this.submenu.querySelector('[data-back]')
      if (back) back.onclick = () => { YD.audio.sfx('cancel'); this.showMainMenu() }
    }

    async act(action) {
      if (this.locked || this.state.over) return
      this.locked = true
      this.lastAction = action
      const events = engine.resolveTurn(this.state, action, Math.random)
      await this.play(events)
      if (this.state.over) return this.finish()
      if (this.state.awaitingSwitch) return this.openTeam(true)
      this.showMainMenu()
    }

    async forcedSwitch(index) {
      this.locked = true
      this.hideMenus()
      const events = engine.resolveForcedSwitch(this.state, index, Math.random)
      await this.play(events)
      if (this.state.over) return this.finish()
      this.showMainMenu()
    }

    async finish() {
      const result = this.state.result
      await wait(500)
      if (result === 'caught') {
        const mon = engine.activeMon(this.state, 'enemy')
        if (mon && this.config.onCatch) this.config.onCatch(mon)
      }
      this.hideMenus()
      this.active = false
      YD.audio.sfx(result === 'win' || result === 'caught' ? 'levelup' : result === 'lose' ? 'faint' : 'run')
      await wait(420)
      this.screen.hidden = true
      this.ballEl.hidden = true
      if (this._resolve) {
        const resolve = this._resolve
        this._resolve = null
        resolve(result)
      }
    }

    /* ------------------------------------------------------------- render */
    render() {
      const ctx = this.ctx
      const w = this.canvas.width, h = this.canvas.height
      const t = this.time
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, w, h)
      art.drawBattleScene(ctx, w, h, t)

      const player = engine.activeMon(this.state, 'player')
      const enemy = engine.activeMon(this.state, 'enemy')
      const base = Math.min(w, h * 1.35)
      const eSize = base * 0.29
      const pSize = base * 0.33
      const ex = w * 0.72, ey = h * 0.53
      const px = w * 0.27, py = h * 0.8

      if (enemy) {
        const lunge = this.lungeOffset('enemy', -1)
        const hurt = this.hurtShake('enemy')
        ctx.save()
        ctx.globalAlpha = this.anim.enemy.alpha * (this.enemyFaint ? Math.max(0, 1 - (t * 2 % 1)) : 1)
        ctx.fillStyle = 'rgba(40,70,40,.25)'
        ctx.beginPath(); ctx.ellipse(ex, ey + 2, eSize * 0.34, eSize * 0.1, 0, 0, Math.PI * 2); ctx.fill()
        const bob = Math.sin(t * 2.2) * eSize * 0.012
        art.drawCreature(ctx, enemy.id, ex + lunge + hurt, ey - eSize * 0.38 + bob, eSize, t, { flip: false })
        ctx.restore()
      }
      if (player) {
        const lunge = this.lungeOffset('player', 1)
        const hurt = this.hurtShake('player')
        ctx.save()
        ctx.globalAlpha = this.anim.player.alpha * (this.playerFaint ? Math.max(0, 1 - (t * 2 % 1)) : 1)
        ctx.fillStyle = 'rgba(40,70,40,.25)'
        ctx.beginPath(); ctx.ellipse(px, py + 2, pSize * 0.34, pSize * 0.1, 0, 0, Math.PI * 2); ctx.fill()
        const bob = Math.sin(t * 2.6 + 1) * pSize * 0.012
        art.drawCreature(ctx, player.id, px + lunge + hurt, py - pSize * 0.4 + bob, pSize, t, { flip: true })
        ctx.restore()
      }
    }

    lungeOffset(side, sign) {
      if (!this.lunge || !this.lunge[side]) return 0
      const p = (performance.now() - this.lunge[side]) / 330
      if (p >= 1) return 0
      return Math.sin(p * Math.PI) * 26 * sign
    }

    hurtShake(side) {
      const stamp = this.anim[side].hurt
      if (!stamp) return 0
      const p = (performance.now() - stamp) / 300
      if (p >= 1) return 0
      return Math.sin(p * Math.PI * 8) * 6 * (1 - p)
    }
  }

  YD.BattleUI = BattleUI
  // Bind the static menu once the DOM is ready (game.js calls this).
  YD.initBattleMenu = function () {
    if (!YD._battleUI) {
      YD._battleUI = new BattleUI()
      YD._battleUI.bindMainMenu()
    }
    return YD._battleUI
  }
})(typeof globalThis !== 'undefined' ? globalThis : this)
