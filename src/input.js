import { clamp } from './utils.js'

const MOVE_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'])

export class Input {
  constructor(game) {
    this.game = game
    this.keys = new Set()
    this.fireHeld = false
    this.firePressed = false
    this.orbPressed = false
    this.jumpPressed = false
    this.dashPressed = false
    this.pulsePressed = false
    this.interactPressed = false
    this.codexPressed = false
    this.pausePressed = false
    this.mutePressed = false
    this.slotPressed = -1
    this.lookDX = 0
    this.lookDY = 0
    this.pointerLocked = false
    this.enabled = false
    this.isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    this.joy = { active: false, pointerId: null, x: 0, y: 0 }
    this.touchLook = { active: false, id: null, x: 0, y: 0 }
    this.touchFire = false
    this._bound = []
    this.bindKeyboard()
    this.bindMouse()
    this.bindTouch()
  }

  bindKeyboard() {
    const down = (e) => {
      if (e.code === 'Tab' || e.code === 'Space') e.preventDefault()
      if (e.repeat) return
      this.keys.add(e.code)
      if (e.code === 'KeyE') this.orbPressed = true
      if (e.code === 'KeyF') this.interactPressed = true
      if (e.code === 'Space') this.jumpPressed = true
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.dashPressed = true
      if (e.code === 'KeyQ') this.pulsePressed = true
      if (e.code === 'Tab') this.codexPressed = true
      if (e.code === 'Escape') this.pausePressed = true
      if (e.code === 'KeyM') this.mutePressed = true
      if (e.code === 'KeyH') this.pausePressed = true
      if (e.code.startsWith('Digit')) {
        const n = Number(e.code.slice(5))
        if (n >= 1 && n <= 4) this.slotPressed = n - 1
      }
      if (e.code === 'KeyP') this.pausePressed = true
    }
    const up = (e) => { this.keys.delete(e.code) }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    this._bound.push(() => window.removeEventListener('keydown', down), () => window.removeEventListener('keyup', up))
  }

  bindMouse() {
    const canvas = this.game.canvas
    const down = (e) => {
      if (!this.enabled) return
      if (e.button === 0) { this.fireHeld = true; this.firePressed = true }
      if (e.button === 2) this.orbPressed = true
      if (this.isTouch) return
      if (!this.pointerLocked && document.pointerLockElement !== canvas) {
        this.requestLock()
      }
    }
    const up = (e) => { if (e.button === 0) this.fireHeld = false }
    const move = (e) => {
      if (!this.enabled || this.isTouch) return
      if (this.pointerLocked) {
        this.lookDX += e.movementX || 0
        this.lookDY += e.movementY || 0
      }
    }
    const context = (e) => e.preventDefault()
    canvas.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    document.addEventListener('mousemove', move)
    canvas.addEventListener('contextmenu', context)
    const lock = () => {
      this.pointerLocked = document.pointerLockElement === canvas
      if (!this.pointerLocked) this.fireHeld = false
      this.game.onPointerLock?.(this.pointerLocked)
    }
    document.addEventListener('pointerlockchange', lock)
    this._bound.push(
      () => canvas.removeEventListener('pointerdown', down),
      () => window.removeEventListener('pointerup', up),
      () => document.removeEventListener('mousemove', move),
      () => canvas.removeEventListener('contextmenu', context),
      () => document.removeEventListener('pointerlockchange', lock),
    )
  }

  bindTouch() {
    const canvas = this.game.canvas
    const joy = document.getElementById('joystick')
    const knob = joy?.querySelector('.stick-knob')
    if (joy) {
      const radius = 46
      const center = () => {
        const r = joy.getBoundingClientRect()
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
      }
      const update = (e) => {
        const c = center()
        let dx = e.clientX - c.x
        let dy = e.clientY - c.y
        const len = Math.hypot(dx, dy)
        if (len > radius) { dx = dx / len * radius; dy = dy / len * radius }
        this.joy.x = dx / radius
        this.joy.y = dy / radius
        knob.style.transform = `translate(${dx}px, ${dy}px)`
      }
      const down = (e) => {
        e.preventDefault()
        this.joy.active = true; this.joy.pointerId = e.pointerId
        joy.setPointerCapture?.(e.pointerId)
        update(e)
      }
      const move = (e) => { if (this.joy.active && e.pointerId === this.joy.pointerId) update(e) }
      const up = (e) => {
        if (e.pointerId !== this.joy.pointerId) return
        this.joy.active = false; this.joy.pointerId = null; this.joy.x = 0; this.joy.y = 0
        knob.style.transform = ''
      }
      joy.addEventListener('pointerdown', down)
      joy.addEventListener('pointermove', move)
      joy.addEventListener('pointerup', up)
      joy.addEventListener('pointercancel', up)
    }

    // Look drag anywhere on the canvas (touch devices).
    const down = (e) => {
      if (!this.enabled || !this.isTouch) return
      if (e.pointerType === 'mouse') return
      if (this.touchLook.active) return
      this.touchLook.active = true; this.touchLook.id = e.pointerId
      this.touchLook.x = e.clientX; this.touchLook.y = e.clientY
      canvas.setPointerCapture?.(e.pointerId)
    }
    const move = (e) => {
      if (!this.touchLook.active || e.pointerId !== this.touchLook.id) return
      const dx = e.clientX - this.touchLook.x
      const dy = e.clientY - this.touchLook.y
      this.lookDX += dx * 1.8
      this.lookDY += dy * 1.8
      this.touchLook.x = e.clientX; this.touchLook.y = e.clientY
    }
    const up = (e) => {
      if (e.pointerId !== this.touchLook.id) return
      this.touchLook.active = false; this.touchLook.id = null
    }
    canvas.addEventListener('pointerdown', down)
    canvas.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    this._bound.push(
      () => canvas.removeEventListener('pointerdown', down),
      () => canvas.removeEventListener('pointermove', move),
      () => window.removeEventListener('pointerup', up),
      () => window.removeEventListener('pointercancel', up),
    )

    const hold = (id, onDown, onUp) => {
      const el = document.getElementById(id)
      if (!el) return
      const d = (e) => { e.preventDefault(); e.stopPropagation(); onDown?.() }
      const u = (e) => { e.preventDefault(); e.stopPropagation(); onUp?.() }
      el.addEventListener('pointerdown', d)
      el.addEventListener('pointerup', u)
      el.addEventListener('pointercancel', u)
      el.addEventListener('pointerleave', u)
      this._bound.push(() => { el.removeEventListener('pointerdown', d); el.removeEventListener('pointerup', u); el.removeEventListener('pointercancel', u); el.removeEventListener('pointerleave', u) })
    }
    hold('btn-fire', () => { this.fireHeld = true; this.firePressed = true }, () => { this.fireHeld = false })
    hold('btn-orb', () => { this.orbPressed = true })
    hold('btn-jump', () => { this.jumpPressed = true })
    hold('btn-dash', () => { this.dashPressed = true })
    hold('btn-pulse', () => { this.pulsePressed = true })
    hold('btn-bonds', () => { this.codexPressed = true })
    hold('btn-talk', () => { this.interactPressed = true })
  }

  requestLock() {
    const canvas = this.game.canvas
    if (this.isTouch) return
    try { canvas.requestPointerLock?.() } catch {}
  }

  exitLock() {
    if (document.pointerLockElement) document.exitPointerLock?.()
  }

  setEnabled(on) {
    this.enabled = on
    if (!on) { this.fireHeld = false; this.keys.clear(); this.joy.x = 0; this.joy.y = 0; this.lookDX = 0; this.lookDY = 0 }
  }

  consumeLook() {
    const dx = this.lookDX, dy = this.lookDY
    this.lookDX = 0; this.lookDY = 0
    return [dx, dy]
  }

  consume(name) {
    if (!this[name]) return false
    this[name] = false
    return true
  }

  consumeSlot() {
    const s = this.slotPressed
    this.slotPressed = -1
    return s
  }

  get moveX() {
    let x = 0
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) x += 1
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) x -= 1
    x += this.joy.x
    return clamp(x, -1, 1)
  }

  get moveY() {
    let y = 0
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) y += 1
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) y -= 1
    y += this.joy.y
    return clamp(y, -1, 1)
  }

  get fire() { return this.fireHeld || this.touchFire }

  endFrame() {
    this.firePressed = false
    this.orbPressed = false
    this.jumpPressed = false
    this.dashPressed = false
    this.pulsePressed = false
    this.interactPressed = false
    this.codexPressed = false
    this.pausePressed = false
    this.mutePressed = false
    this.slotPressed = -1
  }

  dispose() { this._bound.forEach(fn => fn()) }
}
