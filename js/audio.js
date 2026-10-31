/* GIGAMON: Island Spirits — procedural island soundtrack + sfx */
(function (root) {
  'use strict'
  const YD = root.YD = root.YD || {}
  const audio = YD.audio = YD.audio || {}
  let ctx = null
  let master = null
  let musicBus = null
  let sfxBus = null
  let noiseBuffer = null
  let muted = false
  try { muted = localStorage.getItem('gigamon-muted') === '1' } catch {}
  let scene = null
  let step = 0
  let nextTime = 0
  let timer = null

  const mtof = m => 440 * Math.pow(2, (m - 69) / 12)

  function ensure() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return ctx }
    const AC = root.AudioContext || root.webkitAudioContext
    if (!AC) return null
    ctx = new AC()
    master = ctx.createGain()
    master.gain.value = muted ? 0 : 0.75
    master.connect(ctx.destination)
    musicBus = ctx.createGain(); musicBus.gain.value = 0.34; musicBus.connect(master)
    sfxBus = ctx.createGain(); sfxBus.gain.value = 0.55; sfxBus.connect(master)
    const len = Math.floor(ctx.sampleRate * 1.2)
    noiseBuffer = ctx.createBuffer(1, len, ctx.sampleRate)
    const data = noiseBuffer.getChannelData(0)
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
    return ctx
  }

  function tone(freq, time, dur, opts) {
    if (!ctx) return
    opts = opts || {}
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = opts.type || 'sine'
    osc.frequency.setValueAtTime(Math.max(20, freq), time)
    if (opts.slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.slide), time + dur)
    const vol = opts.vol == null ? 0.2 : opts.vol
    gain.gain.setValueAtTime(0.0001, time)
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, vol), time + (opts.attack || 0.006))
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur)
    let node = osc
    if (opts.filter) {
      const f = ctx.createBiquadFilter()
      f.type = opts.filter; f.frequency.value = opts.cutoff || 1200; f.Q.value = opts.q || 0.7
      node.connect(f); node = f
    }
    node.connect(gain)
    gain.connect(opts.bus === 'sfx' ? sfxBus : musicBus)
    osc.start(time); osc.stop(time + dur + 0.03)
  }

  function noise(time, dur, opts) {
    if (!ctx || !noiseBuffer) return
    opts = opts || {}
    const src = ctx.createBufferSource()
    src.buffer = noiseBuffer
    const gain = ctx.createGain()
    const filter = ctx.createBiquadFilter()
    filter.type = opts.filter || 'highpass'
    filter.frequency.value = opts.freq || 4000
    filter.Q.value = opts.q || 0.6
    const vol = opts.vol == null ? 0.14 : opts.vol
    gain.gain.setValueAtTime(Math.max(0.0002, vol), time)
    gain.gain.exponentialRampToValueAtTime(0.0001, time + dur)
    src.connect(filter); filter.connect(gain); gain.connect(opts.bus === 'sfx' ? sfxBus : musicBus)
    src.start(time); src.stop(time + dur + 0.02)
  }

  function kick(time, vol) { tone(120, time, 0.22, { type: 'sine', slide: 42, vol: vol || 0.5, attack: 0.002 }) }
  function rim(time, vol) { noise(time, 0.05, { filter: 'bandpass', freq: 1800, q: 2, vol: vol || 0.1 }) }
  function snare(time, vol) { noise(time, 0.12, { filter: 'bandpass', freq: 1200, q: 0.9, vol: vol || 0.16 }); tone(180, time, 0.08, { type: 'triangle', vol: 0.05 }) }
  function hat(time, vol) { noise(time, 0.035, { filter: 'highpass', freq: 7500, vol: vol || 0.045 }) }
  function shaker(time, vol) { noise(time, 0.06, { filter: 'highpass', freq: 5500, vol: vol || 0.035 }) }
  function skank(chord, time, vol) {
    for (const n of chord) {
      tone(mtof(n), time, 0.09, { type: 'square', vol: vol || 0.022, filter: 'lowpass', cutoff: 1900, attack: 0.002 })
    }
  }
  function bass(note, time, dur, vol) {
    tone(mtof(note), time, dur, { type: 'triangle', vol: vol || 0.2, filter: 'lowpass', cutoff: 520 })
    tone(mtof(note) * 2, time, dur * 0.8, { type: 'sine', vol: 0.04 })
  }
  function marimba(note, time, vol) {
    tone(mtof(note), time, 0.32, { type: 'sine', vol: vol || 0.11, attack: 0.004 })
    tone(mtof(note) * 2, time, 0.12, { type: 'triangle', vol: 0.025 })
  }
  function steel(note, time, vol) {
    tone(mtof(note), time, 0.4, { type: 'triangle', vol: vol || 0.07, attack: 0.01 })
    tone(mtof(note) * 2.01, time, 0.2, { type: 'sine', vol: 0.02 })
  }

  const CH = {
    C: [48, 52, 55, 59], G: [43, 47, 50, 54], Am: [45, 48, 52, 55], F: [41, 45, 48, 52],
    Em: [40, 43, 47, 50], Dm: [38, 41, 45, 48]
  }
  const CHORDS = [CH.C, CH.G, CH.Am, CH.F]

  const tracks = {
    title: {
      bpm: 74, div: 2,
      play(s, time) {
        const bar = Math.floor(s / 8) % 4, chord = CHORDS[bar], beat = s % 8
        if (beat === 0) { bass(chord[0] - 12, time, 0.9, 0.12); marimba(chord[0] + 12, time, 0.08) }
        if (beat === 3) marimba(chord[2] + 12, time, 0.06)
        if (beat === 4) { bass(chord[2] - 12, time, 0.7, 0.09); marimba(chord[1] + 12, time, 0.07) }
        if (beat === 6) marimba(chord[3] + 12, time, 0.06)
        if (beat % 2 === 1) shaker(time, 0.02)
        if (beat === 2 || beat === 6) tone(mtof(chord[1] + 12), time, 0.5, { type: 'sine', vol: 0.012, attack: 0.15 })
      }
    },
    world: {
      bpm: 78, div: 2,
      play(s, time) {
        const bar = Math.floor(s / 8) % 4, chord = CHORDS[bar], beat = s % 8
        if (beat === 0 || beat === 4) kick(time, beat === 0 ? 0.36 : 0.28)
        if (beat === 4) rim(time, 0.12)
        if (beat === 2 || beat === 6) snare(time, 0.08)
        hat(time, 0.035)
        if (beat % 2 === 1) { shaker(time, 0.05); skank(chord, time, 0.02) }
        if (beat === 0) bass(chord[0] - 12, time, 0.4, 0.16)
        if (beat === 3) bass(chord[2] - 12, time, 0.28, 0.11)
        if (beat === 4) bass(chord[0] - 12, time, 0.3, 0.13)
        if (beat === 6) bass(chord[1] - 12, time, 0.22, 0.1)
        if (bar === 3 && beat === 7) steel(chord[0] + 24, time, 0.06)
        if (bar === 1 && beat === 2) steel(chord[2] + 12, time, 0.05)
      }
    },
    battle: {
      bpm: 142, div: 2,
      play(s, time) {
        const bar = Math.floor(s / 8) % 4, chord = [CH.C, CH.Em, CH.F, CH.G][bar], beat = s % 8
        if (beat % 2 === 0) kick(time, beat === 0 ? 0.42 : 0.3)
        if (beat === 2 || beat === 6) snare(time, 0.13)
        hat(time, 0.04)
        if (beat % 2 === 1) { skank(chord, time, 0.018); shaker(time, 0.045) }
        const bassPattern = [0, 0, 7, 0, 5, 0, 3, 7]
        bass(chord[0] - 12 + bassPattern[beat], time, 0.16, 0.16)
        if (beat === 0) marimba(chord[2] + 12, time, 0.06)
        if (beat === 3) marimba(chord[3] + 12, time, 0.05)
        if (beat === 7 && bar % 2 === 1) marimba(chord[1] + 24, time, 0.05)
      }
    },
    ending: {
      bpm: 88, div: 2,
      play(s, time) {
        const bar = Math.floor(s / 8) % 4, chord = CHORDS[bar], beat = s % 8
        if (beat === 0) { kick(time, 0.2); bass(chord[0] - 12, time, 0.8, 0.12) }
        if (beat === 4) bass(chord[2] - 12, time, 0.6, 0.09)
        if (beat % 2 === 1) { shaker(time, 0.025); skank(chord, time, 0.012) }
        if (beat === 0) steel(chord[2] + 12, time, 0.06)
        if (beat === 3) steel(chord[3] + 12, time, 0.05)
        if (beat === 5) steel(chord[1] + 24, time, 0.045)
      }
    }
  }

  function tick() {
    if (!ctx || !scene) return
    const track = tracks[scene]
    if (!track) return
    const stepDur = 60 / track.bpm / track.div
    while (nextTime < ctx.currentTime + 0.14) {
      try { track.play(step, nextTime) } catch (e) { /* keep the groove */ }
      step = (step + 1) % (track.div * 8 * 4)
      nextTime += stepDur
    }
  }

  audio.start = function (name) {
    if (!ensure()) return
    if (scene === name && timer) return
    scene = name
    step = 0
    nextTime = ctx.currentTime + 0.08
    if (timer) clearInterval(timer)
    timer = setInterval(tick, 40)
    tick()
  }

  audio.stop = function () {
    scene = null
    if (timer) { clearInterval(timer); timer = null }
  }

  audio.setScene = audio.start

  audio.setMuted = function (value) {
    muted = Boolean(value)
    if (master && ctx) master.gain.setTargetAtTime(muted ? 0 : 0.75, ctx.currentTime, 0.05)
    try { localStorage.setItem('gigamon-muted', muted ? '1' : '0') } catch {}
  }
  audio.isMuted = () => muted
  audio.toggle = function () { audio.setMuted(!muted); return muted }

  const SFX = {
    click(t) { tone(660, t, 0.05, { type: 'square', vol: 0.1, bus: 'sfx' }); tone(880, t + 0.04, 0.05, { type: 'square', vol: 0.07, bus: 'sfx' }) },
    confirm(t) { tone(523, t, 0.08, { type: 'square', vol: 0.1, bus: 'sfx' }); tone(784, t + 0.07, 0.12, { type: 'square', vol: 0.09, bus: 'sfx' }) },
    cancel(t) { tone(392, t, 0.08, { type: 'square', vol: 0.09, bus: 'sfx' }); tone(262, t + 0.06, 0.12, { type: 'square', vol: 0.08, bus: 'sfx' }) },
    hit(t) { noise(t, 0.14, { filter: 'lowpass', freq: 900, vol: 0.25, bus: 'sfx' }); tone(150, t, 0.12, { type: 'square', vol: 0.12, slide: 70, bus: 'sfx' }) },
    superhit(t) { noise(t, 0.22, { filter: 'lowpass', freq: 1400, vol: 0.32, bus: 'sfx' }); tone(180, t, 0.2, { type: 'sawtooth', vol: 0.14, slide: 50, bus: 'sfx' }); tone(880, t, 0.08, { type: 'square', vol: 0.06, bus: 'sfx' }) },
    weak(t) { noise(t, 0.1, { filter: 'lowpass', freq: 500, vol: 0.14, bus: 'sfx' }) },
    heal(t) { [523, 659, 784, 1047].forEach((f, i) => tone(f, t + i * 0.07, 0.18, { type: 'sine', vol: 0.08, bus: 'sfx' })) },
    faint(t) { tone(400, t, 0.5, { type: 'sawtooth', vol: 0.1, slide: 70, bus: 'sfx' }) },
    levelup(t) { [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, t + i * 0.06, 0.2, { type: 'triangle', vol: 0.08, bus: 'sfx' })) },
    badge(t) { [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => tone(f, t + i * 0.11, 0.3, { type: 'square', vol: 0.06, bus: 'sfx' })) },
    catch(t) { tone(880, t, 0.08, { type: 'square', vol: 0.1, bus: 'sfx' }); [659, 784, 1047].forEach((f, i) => tone(f, t + 0.2 + i * 0.1, 0.22, { type: 'triangle', vol: 0.09, bus: 'sfx' })) },
    ball(t) { noise(t, 0.18, { filter: 'bandpass', freq: 1400, q: 1.5, vol: 0.14, bus: 'sfx' }); tone(500, t, 0.16, { type: 'sine', vol: 0.06, slide: 900, bus: 'sfx' }) },
    shake(t) { tone(300, t, 0.07, { type: 'square', vol: 0.05, bus: 'sfx' }) },
    encounter(t) { [262, 330, 392, 523, 659].forEach((f, i) => tone(f, t + i * 0.05, 0.12, { type: 'square', vol: 0.07, bus: 'sfx' })); noise(t, 0.4, { filter: 'highpass', freq: 2000, vol: 0.08, bus: 'sfx' }) },
    run(t) { [784, 659, 523, 392].forEach((f, i) => tone(f, t + i * 0.05, 0.1, { type: 'square', vol: 0.06, bus: 'sfx' })) },
    blip(t) { tone(740, t, 0.025, { type: 'square', vol: 0.025, bus: 'sfx' }) },
    step(t) { noise(t, 0.025, { filter: 'lowpass', freq: 380, vol: 0.02, bus: 'sfx' }) },
    toast(t) { tone(988, t, 0.09, { type: 'sine', vol: 0.06, bus: 'sfx' }); tone(1319, t + 0.07, 0.14, { type: 'sine', vol: 0.05, bus: 'sfx' }) }
  }

  audio.sfx = function (name) {
    if (!ensure()) return
    const fn = SFX[name]
    if (fn) fn(ctx.currentTime + 0.001)
  }

  audio.resume = function () { if (ctx && ctx.state === 'suspended') ctx.resume() }
  audio.suspend = function () { if (ctx && ctx.state === 'running') ctx.suspend() }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) audio.suspend()
      else if (ctx && !muted) audio.resume()
    })
  }
})(typeof globalThis !== 'undefined' ? globalThis : this)
