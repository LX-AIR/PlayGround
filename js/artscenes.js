/* GIGAMON: Island Spirits — animated title + battle backdrops */
(function (root) {
  'use strict'
  const YD = root.YD = root.YD || {}
  const art = YD.art = YD.art || {}
  const A = art._
  const { TAU, hash, blob, poly, line, sparkle, leaf } = A

  function palmSilhouette(ctx, x, y, scale, color, sway) {
    ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale)
    ctx.strokeStyle = color; ctx.lineWidth = 5; ctx.lineCap = 'round'
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(sway * 0.4, -40, sway, -78); ctx.stroke()
    const cx = sway, cy = -80
    for (let i = 0; i < 7; i++) {
      const ang = -Math.PI + i * (Math.PI / 6) + Math.sin(sway * 0.1) * 0.05
      ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.quadraticCurveTo(cx + Math.cos(ang) * 26, cy + Math.sin(ang) * 12 - 4, cx + Math.cos(ang) * 52, cy + Math.sin(ang) * 20 + 2); ctx.stroke()
      for (let j = 1; j < 4; j++) {
        const px = cx + Math.cos(ang) * 52 * (j / 4), py = cy + Math.sin(ang) * 20 * (j / 4)
        line(ctx, px, py, px + Math.cos(ang + 1.2) * 10, py + Math.sin(ang + 1.2) * 8, color, 2)
      }
    }
    ctx.restore()
  }

  function cloud(ctx, x, y, s, alpha) {
    ctx.save(); ctx.globalAlpha = alpha == null ? 0.8 : alpha; ctx.fillStyle = '#fff6e2'
    blob(ctx, x, y, 24 * s, 10 * s, '#fff6e2', false)
    blob(ctx, x - 18 * s, y + 4 * s, 16 * s, 8 * s, '#fff6e2', false)
    blob(ctx, x + 20 * s, y + 4 * s, 18 * s, 8 * s, '#fff6e2', false)
    blob(ctx, x + 2 * s, y - 5 * s, 15 * s, 9 * s, '#fff6e2', false)
    ctx.restore()
  }

  function titleScene(ctx, w, h, t) {
    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.72)
    sky.addColorStop(0, '#ff9a62')
    sky.addColorStop(0.45, '#ffbe76')
    sky.addColorStop(1, '#ffe9b0')
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h)

    // sun
    const sx = w * 0.76, sy = h * 0.3
    const glow = ctx.createRadialGradient(sx, sy, 4, sx, sy, 78)
    glow.addColorStop(0, 'rgba(255,246,190,.95)')
    glow.addColorStop(0.35, 'rgba(255,220,140,.35)')
    glow.addColorStop(1, 'rgba(255,220,140,0)')
    ctx.fillStyle = glow; ctx.fillRect(sx - 90, sy - 90, 180, 180)
    ctx.fillStyle = '#fff1b8'; ctx.beginPath(); ctx.arc(sx, sy, 28, 0, TAU); ctx.fill()
    ctx.fillStyle = '#ffe28a'; ctx.beginPath(); ctx.arc(sx, sy, 22, 0, TAU); ctx.fill()

    cloud(ctx, w * 0.16, h * 0.18 + Math.sin(t * 0.12) * 3, 1.1, 0.75)
    cloud(ctx, w * 0.52, h * 0.12 + Math.cos(t * 0.1) * 2, 0.8, 0.55)
    cloud(ctx, w * 0.88, h * 0.46 + Math.sin(t * 0.15 + 1) * 2, 0.7, 0.4)

    // distant mountains
    poly(ctx, [[0, h * 0.58], [w * 0.12, h * 0.36], [w * 0.2, h * 0.45], [w * 0.3, h * 0.31], [w * 0.42, h * 0.43], [w * 0.55, h * 0.36], [w * 0.7, h * 0.46], [w * 0.82, h * 0.4], [w, h * 0.5], [w, h * 0.66], [0, h * 0.66]], '#4f7a67', false)
    poly(ctx, [[0, h * 0.62], [w * 0.16, h * 0.46], [w * 0.28, h * 0.55], [w * 0.4, h * 0.43], [w * 0.55, h * 0.54], [w * 0.7, h * 0.45], [w * 0.86, h * 0.55], [w, h * 0.48], [w, h * 0.68], [0, h * 0.68]], '#375f55', false)

    // sea
    const sea = ctx.createLinearGradient(0, h * 0.64, 0, h)
    sea.addColorStop(0, '#2f9aa8')
    sea.addColorStop(0.5, '#1d7f95')
    sea.addColorStop(1, '#126477')
    ctx.fillStyle = sea; ctx.fillRect(0, h * 0.63, w, h * 0.37)
    // sun reflection
    ctx.save(); ctx.globalAlpha = 0.35
    for (let i = 0; i < 9; i++) {
      const yy = h * 0.65 + i * (h * 0.035)
      const ww = 20 + i * 9
      ctx.fillStyle = '#ffe9a8'; ctx.fillRect(sx - ww / 2 + Math.sin(t * 1.2 + i) * 3, yy, ww, 2)
    }
    ctx.restore()
    // waves
    ctx.save(); ctx.globalAlpha = 0.5
    for (let i = 0; i < 16; i++) {
      const yy = h * 0.67 + (i * 13) % (h * 0.28)
      const xx = ((t * (6 + i * 0.7) + i * 97) % (w + 90)) - 45
      const ww = 16 + (i % 4) * 12
      ctx.strokeStyle = i % 2 ? '#8ee6e0' : '#d7f8ee'; ctx.lineWidth = 1.4
      ctx.beginPath(); ctx.moveTo(xx, yy); ctx.quadraticCurveTo(xx + ww / 2, yy - 3, xx + ww, yy); ctx.stroke()
    }
    ctx.restore()
    // sailboat
    const bx = w * 0.29 + Math.sin(t * 0.1) * 6, by = h * 0.7
    poly(ctx, [[bx - 14, by], [bx + 14, by], [bx + 9, by + 6], [bx - 9, by + 6]], '#3d2a24', false)
    line(ctx, bx, by, bx, by - 34, '#3d2a24', 2)
    poly(ctx, [[bx + 2, by - 33], [bx + 18, by - 12], [bx + 2, by - 12]], '#fff6e0', false)
    poly(ctx, [[bx - 1, by - 28], [bx - 13, by - 12], [bx - 1, by - 12]], '#ffcf7a', false)

    // foreground sand
    ctx.fillStyle = '#e8c78e'
    ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(0, h * 0.84); ctx.quadraticCurveTo(w * 0.35, h * 0.8, w * 0.55, h * 0.86); ctx.quadraticCurveTo(w * 0.8, h * 0.92, w, h * 0.84); ctx.lineTo(w, h); ctx.closePath(); ctx.fill()
    ctx.fillStyle = '#d9b276'
    ctx.beginPath(); ctx.moveTo(0, h); ctx.lineTo(0, h * 0.92); ctx.quadraticCurveTo(w * 0.4, h * 0.88, w, h * 0.94); ctx.lineTo(w, h); ctx.closePath(); ctx.fill()

    // palms
    palmSilhouette(ctx, w * 0.06, h * 0.92, 1.5, '#233f35', Math.sin(t * 0.8) * 4)
    palmSilhouette(ctx, w * 0.94, h * 0.96, 1.7, '#1d352e', Math.sin(t * 0.7 + 1) * 5)
    palmSilhouette(ctx, w * 0.87, h * 0.88, 0.9, '#2c4a3d', Math.sin(t * 0.9 + 2) * 3)

    // flying drbird silhouette
    const fx = ((t * 18) % (w + 120)) - 60
    const fy = h * 0.24 + Math.sin(t * 0.9) * 8
    ctx.save(); ctx.translate(fx, fy); ctx.fillStyle = '#2a1b14'
    blob(ctx, 0, 0, 5, 3, '#2a1b14', false)
    poly(ctx, [[5, -1], [12, 1], [5, 3]], '#2a1b14', false)
    ctx.strokeStyle = '#2a1b14'; ctx.lineWidth = 1.2
    ctx.beginPath(); ctx.moveTo(-3, 1); ctx.bezierCurveTo(-8, 6, -2, 9, -7, 14); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(0, 1); ctx.bezierCurveTo(5, 6, -1, 10, 4, 15); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(-2, -2); ctx.lineTo(-8, -8); ctx.lineTo(-3, -3); ctx.stroke()
    ctx.restore()

    // fireflies
    for (let i = 0; i < 14; i++) {
      const a = t * (0.5 + (i % 3) * 0.2) + i * 1.9
      const fx2 = (w * 0.1 + ((i * 67) % (w * 0.8))) + Math.cos(a) * 10
      const fy2 = (h * 0.62 + ((i * 41) % (h * 0.25))) + Math.sin(a * 1.3) * 7
      const alpha = 0.35 + Math.sin(t * 4 + i) * 0.3
      sparkle(ctx, fx2, fy2, 1.6, '#fff2a0', Math.max(0, alpha))
    }

    // vignette
    const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.35, w / 2, h / 2, h * 0.95)
    vg.addColorStop(0, 'rgba(20,20,10,0)')
    vg.addColorStop(1, 'rgba(20,20,10,.3)')
    ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h)
  }

  function battleScene(ctx, w, h, t) {
    // sky
    const sky = ctx.createLinearGradient(0, 0, 0, h * 0.75)
    sky.addColorStop(0, '#ff8a5c')
    sky.addColorStop(0.4, '#ffbf75')
    sky.addColorStop(0.75, '#ffe6ad')
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h)
    // sun
    ctx.save(); ctx.globalAlpha = 0.9
    ctx.fillStyle = '#fff0b0'; ctx.beginPath(); ctx.arc(w * 0.5, h * 0.19, h * 0.11, 0, TAU); ctx.fill()
    ctx.globalAlpha = 0.25; ctx.beginPath(); ctx.arc(w * 0.5, h * 0.19, h * 0.17, 0, TAU); ctx.fill()
    ctx.restore()
    // clouds
    cloud(ctx, w * 0.12, h * 0.14, 0.55, 0.5)
    cloud(ctx, w * 0.86, h * 0.1, 0.7, 0.4)
    cloud(ctx, w * 0.66, h * 0.24, 0.4, 0.3)
    // mountains
    poly(ctx, [[0, h * 0.5], [w * 0.12, h * 0.3], [w * 0.24, h * 0.42], [w * 0.4, h * 0.27], [w * 0.55, h * 0.4], [w * 0.72, h * 0.29], [w * 0.88, h * 0.42], [w, h * 0.34], [w, h * 0.58], [0, h * 0.58]], '#5a8170', false)
    poly(ctx, [[0, h * 0.55], [w * 0.18, h * 0.4], [w * 0.32, h * 0.5], [w * 0.48, h * 0.38], [w * 0.65, h * 0.5], [w * 0.82, h * 0.4], [w, h * 0.48], [w, h * 0.62], [0, h * 0.62]], '#3d6357', false)
    // sea band
    ctx.fillStyle = '#2f8fa3'; ctx.fillRect(0, h * 0.58, w, h * 0.14)
    ctx.save(); ctx.globalAlpha = 0.4
    for (let i = 0; i < 8; i++) {
      const yy = h * 0.59 + i * 4.2
      ctx.fillStyle = i % 2 ? '#8ee6e0' : '#d7f8ee'
      const xx = (t * 20 + i * 73) % w
      ctx.fillRect(xx, yy, 26, 1)
      ctx.fillRect((xx + w * 0.5) % w, yy + 2, 18, 1)
    }
    ctx.restore()
    // arena ground
    const ground = ctx.createLinearGradient(0, h * 0.68, 0, h)
    ground.addColorStop(0, '#8fbd62')
    ground.addColorStop(1, '#5e9a4c')
    ctx.fillStyle = ground; ctx.fillRect(0, h * 0.68, w, h * 0.32)
    // sandy arena
    ctx.fillStyle = '#e7c98f'
    ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.96, w * 0.62, h * 0.32, 0, 0, TAU); ctx.fill()
    ctx.fillStyle = '#f2d9a4'
    ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.94, w * 0.48, h * 0.23, 0, 0, TAU); ctx.fill()
    // platforms
    for (const [px, py, rx] of [[w * 0.72, h * 0.52, w * 0.15], [w * 0.27, h * 0.79, w * 0.17]]) {
      ctx.fillStyle = 'rgba(70,110,60,.35)'
      ctx.beginPath(); ctx.ellipse(px, py + 4, rx, rx * 0.3, 0, 0, TAU); ctx.fill()
      ctx.fillStyle = '#a8c778'
      ctx.beginPath(); ctx.ellipse(px, py, rx, rx * 0.3, 0, 0, TAU); ctx.fill()
      ctx.strokeStyle = '#7aa456'; ctx.lineWidth = 2; ctx.stroke()
      ctx.fillStyle = '#bcd88a'
      ctx.beginPath(); ctx.ellipse(px - rx * 0.16, py - rx * 0.05, rx * 0.7, rx * 0.16, 0, 0, TAU); ctx.fill()
    }
    // grass tufts + flowers
    for (let i = 0; i < 34; i++) {
      const gx = (hash(i, 3) * w), gy = h * 0.72 + hash(i, 9) * h * 0.27
      ctx.strokeStyle = i % 2 ? '#4f8a43' : '#6aa851'; ctx.lineWidth = 1.2
      ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx + (i % 3 - 1) * 2, gy - 4 - (i % 4)); ctx.stroke()
      if (i % 7 === 0) { ctx.fillStyle = i % 2 ? '#ffcf4a' : '#ff8a6b'; ctx.fillRect(gx, gy - 6, 2, 2) }
    }
    // palm silhouettes at edges
    palmSilhouette(ctx, -10, h * 0.9, 1.1, '#3f6a50', Math.sin(t * 0.8) * 3)
    palmSilhouette(ctx, w + 14, h * 0.84, 1.25, '#355d47', Math.sin(t * 0.7 + 2) * 4)
    // drifting leaves
    for (let i = 0; i < 7; i++) {
      const lx = ((t * (9 + i) + i * 89) % (w + 40)) - 20
      const ly = h * 0.1 + ((i * 37) % (h * 0.6)) + Math.sin(t * 1.2 + i) * 8
      ctx.save(); ctx.globalAlpha = 0.5; ctx.translate(lx, ly); ctx.rotate(t + i)
      ctx.fillStyle = '#7abf5e'; ctx.beginPath(); ctx.ellipse(0, 0, 3, 1.3, 0, 0, TAU); ctx.fill(); ctx.restore()
    }
    // vignette
    const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.4, w / 2, h / 2, h * 1.05)
    vg.addColorStop(0, 'rgba(30,20,10,0)')
    vg.addColorStop(1, 'rgba(30,20,10,.26)')
    ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h)
  }

  // little floating island map motif for the modal/dex screen
  function isleBadge(ctx, x, y, size, color) {
    ctx.save(); ctx.translate(x, y)
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(0, 0, size, 0, TAU); ctx.fill()
    ctx.strokeStyle = 'rgba(42,27,20,.5)'; ctx.lineWidth = 2; ctx.stroke()
    ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.beginPath(); ctx.arc(-size * 0.25, -size * 0.25, size * 0.25, 0, TAU); ctx.fill()
    ctx.restore()
  }

  art.drawTitleScene = titleScene
  art.drawBattleScene = battleScene
  art.isleBadge = isleBadge
  art.palmSilhouette = palmSilhouette
})(typeof globalThis !== 'undefined' ? globalThis : this)
