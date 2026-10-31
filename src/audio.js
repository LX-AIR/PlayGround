// A tiny procedural soundscape: no external audio assets.
const NOTE = (midi) => 440 * Math.pow(2, (midi - 69) / 12)

export class SoundEngine {
  constructor() {
    this.ctx = null
    this.master = null
    this.musicGain = null
    this.sfxGain = null
    this.ambientGain = null
    this.enabled = localStorage.getItem('soulyard-muted') !== '1'
    this.started = false
    this.nextStep = 0
    this.step = 0
    this.bpm = 84
    this.musicTimer = null
    this.birdTimer = null
    this.ambienceStarted = false
    this._lastShot = 0
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume()
      return true
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return false
    this.ctx = new AC()
    this.master = this.ctx.createGain()
    this.master.gain.value = this.enabled ? 0.85 : 0
    const comp = this.ctx.createDynamicsCompressor()
    comp.threshold.value = -18
    comp.knee.value = 18
    comp.ratio.value = 3
    comp.attack.value = 0.003
    comp.release.value = 0.25
    this.master.connect(comp).connect(this.ctx.destination)
    this.musicGain = this.ctx.createGain(); this.musicGain.gain.value = 0.21; this.musicGain.connect(this.master)
    this.sfxGain = this.ctx.createGain(); this.sfxGain.gain.value = 0.6; this.sfxGain.connect(this.master)
    this.ambientGain = this.ctx.createGain(); this.ambientGain.gain.value = 0.3; this.ambientGain.connect(this.master)
    this.noiseBuffer = this.makeNoise(2)
    return true
  }

  makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds)
    const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    let last = 0
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1
      last = (last + 0.02 * white) / 1.02
      data[i] = last * 3.5
    }
    return buffer
  }

  start() {
    if (!this.ensure() || this.started) return
    this.started = true
    this.startAmbience()
    this.startMusic()
    this.scheduleBirds()
  }

  setEnabled(on) {
    this.enabled = on
    localStorage.setItem('soulyard-muted', on ? '0' : '1')
    if (this.ensure()) {
      const t = this.ctx.currentTime
      this.master.gain.cancelScheduledValues(t)
      this.master.gain.setTargetAtTime(on ? 0.85 : 0, t, 0.08)
    }
    if (on) this.start()
  }

  toggle() {
    this.setEnabled(!this.enabled)
    return this.enabled
  }

  // ------------------------------------------------------------------ AMBIENCE
  startAmbience() {
    if (this.ambienceStarted) return
    this.ambienceStarted = true
    const ctx = this.ctx
    // Ocean / trade wind bed.
    const src = ctx.createBufferSource()
    src.buffer = this.noiseBuffer
    src.loop = true
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'; lp.frequency.value = 620; lp.Q.value = 0.4
    const waveGain = ctx.createGain(); waveGain.gain.value = 0.22
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 0.12
    lfo.connect(lfoGain).connect(waveGain.gain)
    src.connect(lp).connect(waveGain).connect(this.ambientGain)
    src.start(); lfo.start()
    // High breeze.
    const src2 = ctx.createBufferSource(); src2.buffer = this.noiseBuffer; src2.loop = true
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1800
    const g2 = ctx.createGain(); g2.gain.value = 0.035
    const lfo2 = ctx.createOscillator(); lfo2.frequency.value = 0.05
    const lg2 = ctx.createGain(); lg2.gain.value = 0.025
    lfo2.connect(lg2).connect(g2.gain)
    src2.connect(hp).connect(g2).connect(this.ambientGain)
    src2.start(); lfo2.start()
  }

  scheduleBirds() {
    if (this.birdTimer) return
    const chirp = () => {
      if (this.enabled && this.ctx?.state === 'running' && Math.random() < 0.75) this.bird()
      this.birdTimer = setTimeout(chirp, 2600 + Math.random() * 6500)
    }
    this.birdTimer = setTimeout(chirp, 2200)
  }

  bird() {
    const ctx = this.ctx, t = ctx.currentTime
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null
    if (pan) { pan.pan.value = Math.random() * 1.6 - 0.8; pan.connect(this.ambientGain) }
    const notes = 2 + Math.floor(Math.random() * 3)
    for (let i = 0; i < notes; i++) {
      const o = ctx.createOscillator(); o.type = 'sine'
      const g = ctx.createGain()
      const start = t + i * 0.09 + Math.random() * 0.03
      const f = 1700 + Math.random() * 1400
      o.frequency.setValueAtTime(f, start)
      o.frequency.exponentialRampToValueAtTime(f * (1.2 + Math.random() * 0.5), start + 0.07)
      o.frequency.exponentialRampToValueAtTime(f * 0.8, start + 0.12)
      g.gain.setValueAtTime(0, start)
      g.gain.linearRampToValueAtTime(0.055, start + 0.012)
      g.gain.exponentialRampToValueAtTime(0.0001, start + 0.16)
      o.connect(g); if (pan) g.connect(pan); else g.connect(this.ambientGain)
      o.start(start); o.stop(start + 0.2)
    }
  }

  // ------------------------------------------------------------------ MUSIC
  startMusic() {
    if (this.musicTimer) return
    this.nextStep = this.ctx.currentTime + 0.2
    this.step = 0
    this.musicTimer = setInterval(() => this.scheduleMusic(), 90)
  }

  scheduleMusic() {
    if (!this.ctx || this.ctx.state !== 'running') return
    const spb = 60 / this.bpm / 2 // eighth notes
    while (this.nextStep < this.ctx.currentTime + 0.28) {
      this.playStep(this.step, this.nextStep)
      this.nextStep += spb
      this.step = (this.step + 1) % 64
    }
  }

  playStep(step, t) {
    // Relaxed 8-bar island groove in A minor.
    const bar = Math.floor(step / 8)
    const s = step % 8
    const chords = [
      [57, 60, 64, 67], // Am7
      [53, 57, 60, 64], // Fmaj7
      [48, 55, 60, 64], // Cmaj7
      [55, 59, 62, 65], // G7
      [57, 60, 64, 67],
      [50, 53, 57, 60], // Dm7
      [53, 57, 60, 64],
      [55, 59, 62, 64], // G6
    ]
    const chord = chords[bar]
    // Bass.
    if (s === 0 || s === 5) {
      const n = chord[0] - 12
      this.tone(NOTE(n), t, 0.5, 'sine', 0.2, 280)
      this.tone(NOTE(n), t, 0.4, 'triangle', 0.055, 500)
    }
    if (s === 3) this.tone(NOTE(chord[0] - 5), t, 0.24, 'sine', 0.08, 320)
    // Skank chord stabs on offbeats.
    if (s === 2 || s === 6) {
      chord.slice(1).forEach((n, i) => this.tone(NOTE(n + 12), t + i * 0.004, 0.1, 'triangle', 0.025, 1800))
    }
    // Steel-drum melody, sparse and singable.
    const melodies = [
      [76, null, 79, null, 81, null, 79, null],
      [72, null, 76, 77, null, 76, null, 72],
      [79, null, 81, null, 84, 81, 79, null],
      [74, 76, null, 79, null, 76, 74, null],
      [76, 79, null, 81, null, null, 79, 76],
      [69, null, 72, null, 74, 76, null, null],
      [72, null, 74, 76, null, 79, null, 81],
      [79, null, 77, null, 74, null, 72, null],
    ]
    const note = melodies[bar][s]
    if (note) this.steelDrum(NOTE(note), t, 0.32 + (s % 2) * 0.1)
    // Shaker.
    if (s % 2 === 1 || s === 4) this.shaker(t, s === 4 ? 0.05 : 0.028)
    // Soft kick / heartbeat.
    if (s === 0 || s === 4) this.kick(t, s === 0 ? 0.18 : 0.1)
    // Occasional echo pluck.
    if (step % 16 === 14) this.tone(NOTE(chord[2] + 12), t + 0.15, 0.5, 'sine', 0.03, 2600)
  }

  tone(freq, t, dur, type = 'sine', vol = 0.1, cutoff = 2000) {
    const ctx = this.ctx
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = cutoff
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), t + 0.012)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(f).connect(g).connect(this.musicGain)
    o.start(t); o.stop(t + dur + 0.05)
  }

  steelDrum(freq, t, dur) {
    const ctx = this.ctx
    const carrier = ctx.createOscillator(); carrier.type = 'sine'; carrier.frequency.value = freq
    const mod = ctx.createOscillator(); mod.type = 'sine'; mod.frequency.value = freq * 2.01
    const modGain = ctx.createGain(); modGain.gain.setValueAtTime(freq * 1.8, t); modGain.gain.exponentialRampToValueAtTime(freq * 0.2, t + 0.18)
    mod.connect(modGain).connect(carrier.frequency)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.12, t + 0.008)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null
    if (pan) { pan.pan.value = Math.sin(t * 0.4) * 0.3; carrier.connect(g).connect(pan).connect(this.musicGain) }
    else carrier.connect(g).connect(this.musicGain)
    carrier.start(t); mod.start(t); carrier.stop(t + dur + 0.1); mod.stop(t + dur + 0.1)
  }

  shaker(t, vol) {
    const ctx = this.ctx
    const src = ctx.createBufferSource(); src.buffer = this.noiseBuffer
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 4800
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(vol, t + 0.005)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09)
    src.connect(hp).connect(g).connect(this.musicGain)
    src.start(t, Math.random()); src.stop(t + 0.1)
  }

  kick(t, vol) {
    const ctx = this.ctx
    const o = ctx.createOscillator(); o.type = 'sine'
    o.frequency.setValueAtTime(120, t)
    o.frequency.exponentialRampToValueAtTime(44, t + 0.13)
    const g = ctx.createGain()
    g.gain.setValueAtTime(vol, t)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16)
    o.connect(g).connect(this.musicGain)
    o.start(t); o.stop(t + 0.18)
  }

  // ------------------------------------------------------------------ SFX
  now() { return this.ctx?.currentTime ?? 0 }

  sfx(kind) {
    if (!this.enabled || !this.ensure()) return
    const t = this.ctx.currentTime
    const ctx = this.ctx
    switch (kind) {
      case 'shoot': {
        if (t - this._lastShot < 0.03) return
        this._lastShot = t
        const o = ctx.createOscillator(); o.type = 'square'
        o.frequency.setValueAtTime(680 + Math.random() * 120, t)
        o.frequency.exponentialRampToValueAtTime(190, t + 0.075)
        const g = ctx.createGain(); g.gain.setValueAtTime(0.11, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09)
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 1.4
        o.connect(f).connect(g).connect(this.sfxGain); o.start(t); o.stop(t + 0.1)
        break
      }
      case 'hit': {
        const o = ctx.createOscillator(); o.type = 'triangle'
        o.frequency.setValueAtTime(210, t); o.frequency.exponentialRampToValueAtTime(70, t + 0.1)
        const g = ctx.createGain(); g.gain.setValueAtTime(0.18, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12)
        o.connect(g).connect(this.sfxGain); o.start(t); o.stop(t + 0.14)
        break
      }
      case 'crit': {
        const o = ctx.createOscillator(); o.type = 'sawtooth'
        o.frequency.setValueAtTime(520, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.13)
        const g = ctx.createGain(); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15)
        o.connect(g).connect(this.sfxGain); o.start(t); o.stop(t + 0.17)
        break
      }
      case 'hurt': {
        const o = ctx.createOscillator(); o.type = 'sawtooth'
        o.frequency.setValueAtTime(120, t); o.frequency.exponentialRampToValueAtTime(55, t + 0.22)
        const g = ctx.createGain(); g.gain.setValueAtTime(0.16, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.24)
        o.connect(g).connect(this.sfxGain); o.start(t); o.stop(t + 0.26)
        break
      }
      case 'dash': {
        const src = ctx.createBufferSource(); src.buffer = this.noiseBuffer
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.setValueAtTime(300, t); bp.frequency.exponentialRampToValueAtTime(1800, t + 0.22); bp.Q.value = 0.9
        const g = ctx.createGain(); g.gain.setValueAtTime(0.1, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25)
        src.connect(bp).connect(g).connect(this.sfxGain); src.start(t); src.stop(t + 0.3)
        break
      }
      case 'jump': {
        const o = ctx.createOscillator(); o.type = 'sine'
        o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(480, t + 0.12)
        const g = ctx.createGain(); g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14)
        o.connect(g).connect(this.sfxGain); o.start(t); o.stop(t + 0.16)
        break
      }
      case 'orb': {
        const src = ctx.createBufferSource(); src.buffer = this.noiseBuffer
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.setValueAtTime(500, t); bp.frequency.exponentialRampToValueAtTime(2400, t + 0.3); bp.Q.value = 1.2
        const g = ctx.createGain(); g.gain.setValueAtTime(0.09, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32)
        src.connect(bp).connect(g).connect(this.sfxGain); src.start(t); src.stop(t + 0.35)
        const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(600, t); o.frequency.exponentialRampToValueAtTime(900, t + 0.25)
        const g2 = ctx.createGain(); g2.gain.setValueAtTime(0.04, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.3)
        o.connect(g2).connect(this.sfxGain); o.start(t); o.stop(t + 0.32)
        break
      }
      case 'capture': {
        const notes = [64, 69, 72, 76, 81]
        notes.forEach((n, i) => {
          const o = ctx.createOscillator(); o.type = i % 2 ? 'sine' : 'triangle'; o.frequency.value = NOTE(n)
          const g = ctx.createGain(); const st = t + i * 0.085
          g.gain.setValueAtTime(0.0001, st); g.gain.exponentialRampToValueAtTime(0.1, st + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, st + 0.7)
          o.connect(g).connect(this.sfxGain); o.start(st); o.stop(st + 0.75)
        })
        break
      }
      case 'levelup': {
        [57, 60, 64, 69, 72, 76].forEach((n, i) => {
          const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = NOTE(n)
          const g = ctx.createGain(); const st = t + i * 0.07
          g.gain.setValueAtTime(0.0001, st); g.gain.exponentialRampToValueAtTime(0.08, st + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, st + 0.55)
          o.connect(g).connect(this.sfxGain); o.start(st); o.stop(st + 0.6)
        })
        break
      }
      case 'quest': {
        [69, 72, 76, 81].forEach((n, i) => {
          const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = NOTE(n)
          const g = ctx.createGain(); const st = t + i * 0.11
          g.gain.setValueAtTime(0.0001, st); g.gain.exponentialRampToValueAtTime(0.06, st + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, st + 0.9)
          o.connect(g).connect(this.sfxGain); o.start(st); o.stop(st + 0.95)
        })
        break
      }
      case 'ui': {
        const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 660
        const g = ctx.createGain(); g.gain.setValueAtTime(0.04, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07)
        o.connect(g).connect(this.sfxGain); o.start(t); o.stop(t + 0.08)
        break
      }
      case 'boss': {
        const o = ctx.createOscillator(); o.type = 'sawtooth'
        o.frequency.setValueAtTime(68, t); o.frequency.exponentialRampToValueAtTime(38, t + 1.1)
        const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(320, t); f.frequency.exponentialRampToValueAtTime(90, t + 1.2)
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4)
        o.connect(f).connect(g).connect(this.sfxGain); o.start(t); o.stop(t + 1.5)
        break
      }
      case 'death': {
        [57, 55, 52, 48].forEach((n, i) => {
          const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = NOTE(n)
          const g = ctx.createGain(); const st = t + i * 0.18
          g.gain.setValueAtTime(0.0001, st); g.gain.exponentialRampToValueAtTime(0.08, st + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, st + 1.2)
          o.connect(g).connect(this.sfxGain); o.start(st); o.stop(st + 1.3)
        })
        break
      }
      case 'heal': {
        [72, 76, 79].forEach((n, i) => {
          const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = NOTE(n)
          const g = ctx.createGain(); const st = t + i * 0.06
          g.gain.setValueAtTime(0.0001, st); g.gain.exponentialRampToValueAtTime(0.05, st + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, st + 0.45)
          o.connect(g).connect(this.sfxGain); o.start(st); o.stop(st + 0.5)
        })
        break
      }
    }
  }
}
