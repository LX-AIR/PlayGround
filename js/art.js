/* GIGAMON: Island Spirits — drawing helpers + creature sprites */
(function (root) {
  'use strict'
  const YD = root.YD = root.YD || {}
  const art = YD.art = YD.art || {}
  const TAU = Math.PI * 2
  const INK = '#2a1b14'
  const INK_SOFT = '#4a2f22'

  function hash(x, y, s) {
    let h = Math.imul(x + 374761393, 668265263) ^ Math.imul(y + 1274126177, 2246822519)
    h = Math.imul(h ^ (h >>> 13), 3266489917)
    h ^= (s || 0) * 1013904223
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295
  }

  function blob(ctx, x, y, rx, ry, fill, stroke, lw) {
    ctx.beginPath()
    ctx.ellipse(x, y, rx, ry, 0, 0, TAU)
    if (fill) { ctx.fillStyle = fill; ctx.fill() }
    if (stroke !== false) {
      ctx.lineWidth = lw || 1.5
      ctx.strokeStyle = stroke || INK
      ctx.stroke()
    }
  }

  function poly(ctx, points, fill, stroke, lw) {
    ctx.beginPath()
    ctx.moveTo(points[0][0], points[0][1])
    for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1])
    ctx.closePath()
    if (fill) { ctx.fillStyle = fill; ctx.fill() }
    if (stroke !== false) { ctx.lineWidth = lw || 1.4; ctx.strokeStyle = stroke || INK; ctx.stroke() }
  }

  function line(ctx, x1, y1, x2, y2, color, width) {
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2)
    ctx.lineWidth = width || 2; ctx.strokeStyle = color || INK; ctx.lineCap = 'round'; ctx.stroke()
  }

  function eye(ctx, x, y, rx, ry, lookX, lookY, opts) {
    opts = opts || {}
    blob(ctx, x, y, rx, ry, opts.white || '#fffdf2', INK, 1.1)
    const px = x + (lookX || 0), py = y + (lookY || 0)
    blob(ctx, px, py, rx * 0.52, ry * 0.62, opts.pupil || '#24150f', false)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath(); ctx.arc(px - rx * 0.2, py - ry * 0.25, Math.max(0.7, rx * 0.16), 0, TAU); ctx.fill()
    if (opts.lash) {
      line(ctx, x - rx, y - ry, x - rx - 1.4, y - ry - 1.3, INK, 0.9)
      line(ctx, x + rx, y - ry, x + rx + 1.4, y - ry - 1.3, INK, 0.9)
    }
  }

  function sparkle(ctx, x, y, r, color, alpha) {
    ctx.save(); ctx.globalAlpha = alpha == null ? 1 : alpha; ctx.fillStyle = color || '#fff3a8'
    ctx.beginPath()
    ctx.moveTo(x, y - r); ctx.lineTo(x + r * 0.28, y - r * 0.28); ctx.lineTo(x + r, y)
    ctx.lineTo(x + r * 0.28, y + r * 0.28); ctx.lineTo(x, y + r); ctx.lineTo(x - r * 0.28, y + r * 0.28)
    ctx.lineTo(x - r, y); ctx.lineTo(x - r * 0.28, y - r * 0.28); ctx.closePath(); ctx.fill()
    ctx.restore()
  }

  function leaf(ctx, x, y, len, angle, color, stroke) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(angle)
    ctx.beginPath(); ctx.ellipse(len * 0.5, 0, len * 0.5, len * 0.22, 0, 0, TAU)
    ctx.fillStyle = color; ctx.fill()
    if (stroke !== false) { ctx.lineWidth = 0.9; ctx.strokeStyle = stroke || '#20552a'; ctx.stroke() }
    ctx.restore()
  }

  function flame(ctx, x, y, w, h, t, colors) {
    colors = colors || ['#ffdf6e', '#ff9d3c', '#ef5a2a']
    const sway = Math.sin(t * 8 + x) * w * 0.12
    const hh = h * (0.92 + Math.sin(t * 11 + x) * 0.08)
    poly(ctx, [[x, y - hh], [x + w * 0.46 + sway, y - hh * 0.36], [x + w * 0.3, y], [x - w * 0.34, y], [x - w * 0.5 + sway, y - hh * 0.42]], colors[2], false)
    poly(ctx, [[x, y - hh * 0.78], [x + w * 0.3 + sway, y - hh * 0.3], [x + w * 0.15, y], [x - w * 0.22, y], [x - w * 0.28 + sway, y - hh * 0.34]], colors[1], false)
    poly(ctx, [[x, y - hh * 0.52], [x + w * 0.16, y - hh * 0.2], [x, y], [x - w * 0.15, y - hh * 0.22]], colors[0], false)
  }

  function shadow(ctx, y, rx) {
    ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = '#14261a'
    ctx.beginPath(); ctx.ellipse(32, y, rx || 16, 3.2, 0, 0, TAU); ctx.fill(); ctx.restore()
  }

  function cheek(ctx, x, y, r, color) {
    ctx.save(); ctx.globalAlpha = 0.55; ctx.fillStyle = color || '#ff7d7d'
    ctx.beginPath(); ctx.arc(x, y, r || 2, 0, TAU); ctx.fill(); ctx.restore()
  }

  // ---------------- creatures ----------------
  const CREATURES = {}

  CREATURES.pimenta = (ctx, t) => {
    const bob = Math.sin(t * 3.2) * 1.2
    shadow(ctx, 59, 14)
    ctx.save(); ctx.translate(0, bob)
    // feet
    blob(ctx, 25, 55, 4.5, 3, '#e8622f', INK, 1.4)
    blob(ctx, 39, 55, 4.5, 3, '#e8622f', INK, 1.4)
    // little arms
    const wave = Math.sin(t * 3) * 2
    poly(ctx, [[20, 38], [13, 42 + wave], [12, 46 + wave], [19, 45], [23, 43]], '#ef6a3a', INK, 1.3)
    poly(ctx, [[44, 38], [51, 41 - wave], [52, 45 - wave], [45, 44], [41, 42]], '#ef6a3a', INK, 1.3)
    // pepper body
    poly(ctx, [[32, 13], [40, 20], [46, 31], [45, 43], [39, 53], [32, 56], [25, 53], [19, 43], [18, 31], [24, 20]], '#f25b33', INK, 1.8)
    poly(ctx, [[24, 22], [20, 32], [21, 42], [26, 50], [29, 51], [25, 40], [25, 29]], '#ff8a59', false)
    // shine
    blob(ctx, 26, 30, 2.6, 5, '#ffb08c', false)
    // stem + leaves
    line(ctx, 32, 14, 32, 8, '#3f7a34', 3)
    leaf(ctx, 31, 10, 9, -0.5, '#5fae4a')
    leaf(ctx, 33, 10, 8, 0.7, '#4e9c3d')
    leaf(ctx, 32, 8, 7, -1.55, '#76c65c')
    // face
    eye(ctx, 27, 34, 3.2, 3.9, 0.7, 0.2, { lash: true })
    eye(ctx, 38, 34, 3.2, 3.9, 0.7, 0.2, { lash: true })
    cheek(ctx, 22, 41, 2.2)
    cheek(ctx, 43, 41, 2.2)
    // smile
    ctx.beginPath(); ctx.arc(32.5, 42, 4.4, 0.15, Math.PI - 0.15)
    ctx.lineWidth = 1.3; ctx.strokeStyle = INK; ctx.stroke()
    ctx.restore()
  }

  CREATURES.scorchbonnet = (ctx, t) => {
    const bob = Math.sin(t * 2.7) * 1
    shadow(ctx, 59, 17)
    ctx.save(); ctx.translate(0, bob)
    // flame aura
    flame(ctx, 18, 34, 10, 16, t + 1, ['#ffd45e', '#ff8a35', '#d93b1d'])
    flame(ctx, 46, 34, 10, 16, t + 2.4, ['#ffd45e', '#ff8a35', '#d93b1d'])
    // feet
    blob(ctx, 23, 55, 5, 3.4, '#b93a1e', INK, 1.5)
    blob(ctx, 41, 55, 5, 3.4, '#b93a1e', INK, 1.5)
    // body
    poly(ctx, [[32, 10], [42, 18], [48, 31], [47, 44], [39, 54], [32, 57], [25, 54], [17, 44], [16, 31], [22, 18]], '#d9421f', INK, 1.9)
    poly(ctx, [[23, 24], [18, 36], [20, 47], [25, 52], [24, 40], [25, 30]], '#f06a38', false)
    // yellow streaks
    poly(ctx, [[34, 18], [38, 25], [33, 36], [30, 30]], '#ffc24a', false)
    poly(ctx, [[28, 44], [35, 41], [37, 48], [31, 51]], '#ffc24a', false)
    // crown of flame
    line(ctx, 32, 12, 32, 6, '#3f7a34', 3)
    flame(ctx, 32, 9, 12, 12, t, ['#ffe98a', '#ffb13d', '#ef5a2a'])
    leaf(ctx, 26, 10, 9, -0.9, '#4f9c3d')
    leaf(ctx, 38, 9, 9, 0.9, '#4f9c3d')
    // face
    eye(ctx, 26, 33, 3.4, 3.4, 1, 0.4, { lash: false })
    eye(ctx, 38, 33, 3.4, 3.4, 1, 0.4, { lash: false })
    line(ctx, 22, 27, 28, 29, INK, 1.4)
    line(ctx, 42, 27, 36, 29, INK, 1.4)
    // grin
    ctx.beginPath(); ctx.arc(32, 41, 5.4, 0.1, Math.PI - 0.1)
    ctx.lineWidth = 1.4; ctx.strokeStyle = INK; ctx.stroke()
    ctx.fillStyle = '#fff6e5'
    ctx.beginPath(); ctx.moveTo(28, 42); ctx.lineTo(36, 42); ctx.lineTo(34.5, 45); ctx.lineTo(29.5, 45); ctx.closePath(); ctx.fill()
    cheek(ctx, 21, 39, 2.3, '#ffb36b'); cheek(ctx, 43, 39, 2.3, '#ffb36b')
    ctx.restore()
  }

  CREATURES.turtide = (ctx, t) => {
    const bob = Math.sin(t * 2.2) * 1
    shadow(ctx, 58, 20)
    ctx.save(); ctx.translate(0, bob)
    // flippers
    poly(ctx, [[18, 40], [7, 46], [9, 51], [21, 48]], '#55bfa1', INK, 1.4)
    poly(ctx, [[46, 40], [57, 44], [56, 50], [45, 47]], '#55bfa1', INK, 1.4)
    poly(ctx, [[25, 53], [20, 58], [26, 58], [30, 54]], '#4aa98e', INK, 1.4)
    // shell
    blob(ctx, 32, 40, 20, 16, '#2e6b4b', INK, 1.8)
    blob(ctx, 32, 39, 16, 12.5, '#3f8a5f', false)
    // shell pattern
    poly(ctx, [[32, 28], [39, 33], [36, 42], [28, 42], [25, 33]], '#77b85f', '#2b5b3c', 1.2)
    poly(ctx, [[18, 36], [24, 38], [23, 45], [17, 44]], '#5aa46b', '#2b5b3c', 1)
    poly(ctx, [[46, 36], [40, 38], [41, 45], [47, 44]], '#5aa46b', '#2b5b3c', 1)
    // rim
    ctx.beginPath(); ctx.ellipse(32, 48, 18, 5, 0, 0, Math.PI); ctx.lineWidth = 3; ctx.strokeStyle = '#d98a4a'; ctx.stroke()
    // head
    blob(ctx, 45, 31, 10, 9, '#63c9a5', INK, 1.6)
    blob(ctx, 48, 34, 6.5, 4, '#8adfc1', false)
    // eye
    eye(ctx, 48, 29, 2.8, 3.2, 1, 0.2, { lash: true })
    cheek(ctx, 51, 35, 1.8, '#ff8f7a')
    ctx.beginPath(); ctx.arc(50, 34, 2.4, 0.2, Math.PI - 0.1); ctx.lineWidth = 1; ctx.strokeStyle = INK; ctx.stroke()
    // shell shine
    blob(ctx, 25, 34, 3.4, 1.5, '#9edb8a', false)
    // water drop
    ctx.save(); ctx.globalAlpha = 0.8
    poly(ctx, [[54, 21], [57, 26], [54, 28], [51, 26]], '#8be3f2', '#2b7c93', 1)
    ctx.restore()
    ctx.restore()
  }

  CREATURES.turtempest = (ctx, t) => {
    const bob = Math.sin(t * 2) * 1.2
    shadow(ctx, 58, 22)
    ctx.save(); ctx.translate(0, bob)
    // storm aura
    ctx.save(); ctx.globalAlpha = 0.5 + Math.sin(t * 4) * 0.15
    blob(ctx, 20, 16, 12, 5, '#5d6b8c', false)
    blob(ctx, 31, 14, 10, 5, '#7684a3', false)
    poly(ctx, [[30, 17], [26, 24], [30, 23], [27, 30], [35, 21], [31, 22]], '#ffe066', '#8a6b10', 1)
    ctx.restore()
    // flippers
    poly(ctx, [[16, 40], [4, 47], [7, 53], [20, 48]], '#3f8aa4', INK, 1.5)
    poly(ctx, [[48, 40], [60, 45], [57, 52], [45, 47]], '#3f8aa4', INK, 1.5)
    // shell
    blob(ctx, 32, 41, 22, 17, '#245a6e', INK, 1.9)
    blob(ctx, 32, 40, 18, 13.5, '#347a91', false)
    // storm spiral
    ctx.beginPath(); ctx.arc(32, 40, 8, 0.3, 5.6); ctx.lineWidth = 2.2; ctx.strokeStyle = '#8dd7d2'; ctx.stroke()
    ctx.beginPath(); ctx.arc(32, 40, 4, 2, 5.4); ctx.lineWidth = 1.6; ctx.strokeStyle = '#c5f0ea'; ctx.stroke()
    poly(ctx, [[24, 32], [30, 29], [28, 36], [33, 35], [27, 43], [29, 37], [24, 38]], '#ffe066', '#8a6b10', 1)
    // rim
    ctx.beginPath(); ctx.ellipse(32, 49, 20, 5.4, 0, 0, Math.PI); ctx.lineWidth = 3.4; ctx.strokeStyle = '#e0a155'; ctx.stroke()
    // head
    blob(ctx, 45, 29, 11, 10, '#4fa3b8', INK, 1.6)
    blob(ctx, 49, 33, 7, 4.5, '#7ccbd6', false)
    eye(ctx, 48, 27, 3, 3.2, 1, 0.2, {})
    line(ctx, 43, 22, 51, 24, INK, 1.6)
    ctx.beginPath(); ctx.arc(50, 33, 2.6, 0.2, Math.PI - 0.1); ctx.lineWidth = 1.1; ctx.strokeStyle = INK; ctx.stroke()
    // lightning fin
    poly(ctx, [[21, 25], [14, 19], [18, 31], [12, 33], [23, 34]], '#7fcfdd', INK, 1.3)
    ctx.restore()
  }

  CREATURES.ackee = (ctx, t) => {
    const bob = Math.sin(t * 3.4) * 1.4
    shadow(ctx, 58, 14)
    ctx.save(); ctx.translate(0, bob)
    // feet
    blob(ctx, 26, 54, 4, 2.8, '#d87b2c', INK, 1.3)
    blob(ctx, 38, 54, 4, 2.8, '#d87b2c', INK, 1.3)
    // lobe backs
    blob(ctx, 24, 35, 11, 12, '#f2b23c', INK, 1.7)
    blob(ctx, 40, 35, 11, 12, '#f2b23c', INK, 1.7)
    // center lobe
    blob(ctx, 32, 39, 13, 14, '#ffcf4f', INK, 1.8)
    // red blush tops
    blob(ctx, 24, 28, 6, 4, '#e2603a', false)
    blob(ctx, 40, 28, 6, 4, '#e2603a', false)
    blob(ctx, 32, 29, 8, 5, '#ef7350', false)
    // shine
    blob(ctx, 27, 33, 3.2, 5.4, '#ffe9a3', false)
    // leaves
    leaf(ctx, 32, 18, 12, -1.2, '#4f9c3d')
    leaf(ctx, 32, 18, 12, -1.9, '#65b84e')
    leaf(ctx, 33, 19, 10, -0.4, '#3d8434')
    line(ctx, 32, 22, 32, 14, '#477f33', 2.2)
    // face
    eye(ctx, 27, 38, 3, 3.6, 0.5, 0.3, { lash: true })
    eye(ctx, 38, 38, 3, 3.6, 0.5, 0.3, { lash: true })
    cheek(ctx, 22, 45, 2, '#ff8e7a'); cheek(ctx, 43, 45, 2, '#ff8e7a')
    ctx.beginPath(); ctx.arc(32.5, 46, 4, 0.15, Math.PI - 0.15); ctx.lineWidth = 1.2; ctx.strokeStyle = INK; ctx.stroke()
    // little arms
    poly(ctx, [[20, 44], [15, 48], [16, 51], [22, 49]], '#f2b23c', INK, 1.2)
    poly(ctx, [[44, 44], [49, 48], [48, 51], [42, 49]], '#f2b23c', INK, 1.2)
    ctx.restore()
  }

  CREATURES.ackeen = (ctx, t) => {
    const sway = Math.sin(t * 2.1) * 0.02
    shadow(ctx, 59, 18)
    ctx.save(); ctx.translate(32, 58); ctx.rotate(sway); ctx.translate(-32, -58)
    // roots
    poly(ctx, [[22, 55], [14, 60], [24, 59], [27, 56]], '#6b4226', INK, 1.4)
    poly(ctx, [[42, 55], [50, 60], [40, 59], [37, 56]], '#6b4226', INK, 1.4)
    // trunk body
    poly(ctx, [[26, 25], [38, 25], [41, 45], [38, 56], [26, 56], [23, 45]], '#8a5a33', INK, 1.8)
    poly(ctx, [[28, 28], [31, 30], [30, 50], [27, 44]], '#a97645', false)
    // leafy crown
    blob(ctx, 32, 19, 17, 11, '#3f8a3d', INK, 1.7)
    blob(ctx, 20, 24, 9, 7, '#4e9c45', INK, 1.4)
    blob(ctx, 44, 24, 9, 7, '#4e9c45', INK, 1.4)
    blob(ctx, 32, 13, 9, 7, '#65b84e', INK, 1.4)
    leaf(ctx, 32, 12, 11, -1.1, '#7ccb5e')
    leaf(ctx, 32, 12, 11, -1.9, '#4f9c3d')
    // hanging ackees
    for (const [x, y] of [[21, 30], [43, 31]]) {
      blob(ctx, x, y, 4, 5, '#f2a03d', INK, 1.2)
      blob(ctx, x, y - 3, 2.4, 1.6, '#e2603a', false)
    }
    // face on trunk
    eye(ctx, 28, 36, 3, 3.5, 0.5, 0.4, {})
    eye(ctx, 37, 36, 3, 3.5, 0.5, 0.4, {})
    ctx.beginPath(); ctx.arc(32.5, 43, 3.4, 0.2, Math.PI - 0.2); ctx.lineWidth = 1.2; ctx.strokeStyle = INK; ctx.stroke()
    // arms
    poly(ctx, [[23, 31], [12, 34], [9, 29], [11, 38], [23, 39]], '#7a4d2b', INK, 1.4)
    leaf(ctx, 10, 29, 8, -2.2, '#5fae4a')
    poly(ctx, [[41, 31], [52, 34], [55, 29], [53, 38], [41, 39]], '#7a4d2b', INK, 1.4)
    leaf(ctx, 54, 29, 8, -0.9, '#5fae4a')
    ctx.restore()
  }

  CREATURES.yardgoat = (ctx, t) => {
    const bob = Math.sin(t * 3) * 0.8
    shadow(ctx, 58, 20)
    ctx.save(); ctx.translate(0, bob)
    // tail
    poly(ctx, [[14, 36], [8, 32], [7, 37], [13, 40]], '#e9dcc0', INK, 1.2)
    // legs
    for (const [x, ph] of [[22, 0], [28, 1], [40, 1], [46, 0]]) {
      const off = Math.sin(t * 3 + ph * 2) * 1
      poly(ctx, [[x, 46], [x - 1 + off, 55], [x + 2 + off, 55], [x + 3, 46]], '#c9a87e', INK, 1.2)
      poly(ctx, [[x - 1 + off, 53], [x + 2 + off, 53], [x + 2 + off, 56], [x - 1 + off, 56]], '#5a4632', false)
    }
    // body
    blob(ctx, 33, 40, 19, 11, '#e9dcc0', INK, 1.7)
    blob(ctx, 34, 45, 14, 5, '#d2bd9b', false)
    // back stripe
    poly(ctx, [[20, 31], [29, 29], [36, 30], [34, 34], [24, 35]], '#b08d61', false)
    // head
    blob(ctx, 47, 31, 9, 8, '#f0e5cc', INK, 1.5)
    // snout
    blob(ctx, 54, 35, 4.5, 3.2, '#e5d4b8', INK, 1.2)
    ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(56, 34.5, 0.7, 0, TAU); ctx.fill()
    // horns
    ctx.beginPath(); ctx.moveTo(42, 25); ctx.quadraticCurveTo(37, 15, 44, 13); ctx.lineWidth = 3; ctx.strokeStyle = '#b99a6b'; ctx.stroke()
    ctx.beginPath(); ctx.moveTo(50, 24); ctx.quadraticCurveTo(55, 15, 49, 12); ctx.lineWidth = 3; ctx.strokeStyle = '#b99a6b'; ctx.stroke()
    // ears
    poly(ctx, [[40, 28], [33, 25], [36, 33]], '#e5d4b8', INK, 1.1)
    // beard
    poly(ctx, [[52, 38], [49, 46], [52, 45], [54, 41]], '#efe7d6', INK, 0.9)
    // eye + smirk
    eye(ctx, 48, 30, 2.4, 2.9, 1, 0.2, {})
    ctx.beginPath(); ctx.arc(52, 37, 2.5, 0.3, Math.PI - 0.2); ctx.lineWidth = 1; ctx.strokeStyle = INK; ctx.stroke()
    cheek(ctx, 44, 35, 1.6, '#f0a08a')
    ctx.restore()
  }

  CREATURES.mongoose = (ctx, t) => {
    const bob = Math.sin(t * 4) * 0.7
    shadow(ctx, 58, 18)
    ctx.save(); ctx.translate(0, bob)
    // tail
    ctx.beginPath(); ctx.moveTo(17, 42); ctx.quadraticCurveTo(4, 38, 8, 22); ctx.lineWidth = 5; ctx.strokeStyle = '#8a5c36'; ctx.lineCap = 'round'; ctx.stroke()
    for (let i = 0; i < 4; i++) { blob(ctx, 8 + i * 0.6, 25 + i * 4, 2.6, 1.8, '#5a3a22', false) }
    // legs
    for (const [x, ph] of [[24, 0], [30, 1], [40, 1], [45, 0]]) {
      const off = Math.sin(t * 5 + ph * 2) * 2
      poly(ctx, [[x, 47], [x + off, 56], [x + 2.5 + off, 56], [x + 3, 47]], '#8a5c36', INK, 1.2)
    }
    // body
    blob(ctx, 34, 40, 17, 9, '#9b6a3f', INK, 1.6)
    poly(ctx, [[21, 38], [35, 33], [48, 36], [46, 42], [33, 44]], '#b07c4b', false)
    blob(ctx, 36, 45, 12, 3, '#e0c79e', false)
    // head
    blob(ctx, 50, 34, 8, 7, '#a9744a', INK, 1.5)
    // snout
    poly(ctx, [[55, 33], [61, 36], [55, 39]], '#c9a075', INK, 1.1)
    ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(59, 35, 1, 0, TAU); ctx.fill()
    // ears
    blob(ctx, 46, 27, 3, 3.4, '#8a5c36', INK, 1.1)
    blob(ctx, 52, 27, 3, 3.2, '#8a5c36', INK, 1.1)
    // eye
    eye(ctx, 52, 32, 2.2, 2.6, 1, 0.1, {})
    // grin
    ctx.beginPath(); ctx.moveTo(54, 38); ctx.quadraticCurveTo(58, 40, 61, 37); ctx.lineWidth = 1; ctx.strokeStyle = INK; ctx.stroke()
    // stripe
    poly(ctx, [[22, 33], [30, 30], [38, 31], [36, 35], [27, 36]], '#6f4729', false)
    ctx.restore()
  }

  CREATURES.seacow = (ctx, t) => {
    const bob = Math.sin(t * 1.8) * 1.3
    shadow(ctx, 58, 22)
    ctx.save(); ctx.translate(0, bob)
    // tail
    poly(ctx, [[15, 44], [5, 40], [3, 47], [12, 49]], '#6f9fb3', INK, 1.4)
    // body
    blob(ctx, 33, 41, 23, 14, '#7fa9bd', INK, 1.8)
    blob(ctx, 33, 37, 19, 9, '#93bfd0', false)
    // belly
    blob(ctx, 35, 48, 16, 5, '#cfe3e6', false)
    // head
    blob(ctx, 47, 35, 12, 11, '#8db8c8', INK, 1.6)
    // snout
    blob(ctx, 56, 39, 7, 5.5, '#a8ced8', INK, 1.4)
    ctx.fillStyle = '#557887'; ctx.beginPath(); ctx.arc(53, 38.5, 1.1, 0, TAU); ctx.fill()
    ctx.beginPath(); ctx.arc(58, 38.5, 1.1, 0, TAU); ctx.fill()
    // eye
    eye(ctx, 51, 32, 2.2, 2.4, 0.6, 0.2, { lash: true })
    cheek(ctx, 54, 41, 2, '#e79a92')
    // smile
    ctx.beginPath(); ctx.arc(55, 43, 3, 0.1, Math.PI - 0.2); ctx.lineWidth = 1.1; ctx.strokeStyle = INK; ctx.stroke()
    // flippers
    poly(ctx, [[22, 44], [13, 50], [18, 53], [27, 48]], '#6f9fb3', INK, 1.3)
    // spots
    blob(ctx, 25, 36, 2.2, 1.6, '#a6c9d2', false)
    blob(ctx, 31, 33, 1.8, 1.4, '#a6c9d2', false)
    // water ripple
    ctx.beginPath(); ctx.arc(33, 56, 18, 3.3, 6.1); ctx.lineWidth = 1.4; ctx.strokeStyle = '#8bd7df'; ctx.globalAlpha = 0.7; ctx.stroke(); ctx.globalAlpha = 1
    ctx.restore()
  }

  CREATURES.cockpit = (ctx, t) => {
    const bob = Math.sin(t * 3.6) * 1.1
    shadow(ctx, 58, 14)
    ctx.save(); ctx.translate(0, bob)
    // tail feathers
    poly(ctx, [[24, 42], [8, 54], [14, 56], [28, 47]], '#2e8a62', INK, 1.3)
    poly(ctx, [[25, 44], [14, 58], [20, 58], [30, 48]], '#f0b83d', INK, 1.2)
    // body
    blob(ctx, 32, 38, 13, 14, '#3ba06e', INK, 1.7)
    // wing
    poly(ctx, [[25, 32], [14, 38], [19, 48], [31, 44]], '#e8573c', INK, 1.4)
    poly(ctx, [[18, 38], [23, 36], [26, 43], [20, 45]], '#f0c53d', false)
    poly(ctx, [[22, 41], [27, 40], [27, 44], [22, 46]], '#3b7fc4', false)
    // chest
    blob(ctx, 37, 40, 7, 9, '#f0784f', false)
    // head
    blob(ctx, 41, 24, 10, 9, '#45b27b', INK, 1.6)
    // crest
    poly(ctx, [[39, 16], [44, 8], [46, 17]], '#f0c53d', INK, 1.2)
    poly(ctx, [[43, 16], [50, 10], [49, 19]], '#e8573c', INK, 1.2)
    // beak
    poly(ctx, [[49, 24], [60, 28], [49, 31], [48, 28]], '#f2b33d', INK, 1.3)
    // eye
    eye(ctx, 45, 23, 3, 3.2, 1, 0.2, {})
    // feet
    line(ctx, 30, 50, 28, 56, '#c98a32', 2)
    line(ctx, 37, 50, 38, 56, '#c98a32', 2)
    // motion lines
    ctx.save(); ctx.globalAlpha = 0.35
    line(ctx, 10, 30, 18, 30, '#fff', 1); line(ctx, 8, 35, 15, 35, '#fff', 1)
    ctx.restore()
    ctx.restore()
  }

  CREATURES.anancy = (ctx, t) => {
    const bob = Math.sin(t * 2.6) * 1.4
    shadow(ctx, 59, 15)
    ctx.save(); ctx.translate(0, bob)
    // web thread
    line(ctx, 32, 0, 32, 16, 'rgba(240,240,230,.6)', 1)
    // legs
    ctx.lineWidth = 2.2; ctx.strokeStyle = INK
    for (const side of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        const y = 34 + i * 4.2
        const kx = 32 + side * (17 + i * 2)
        const ky = 30 + i * 7 + Math.sin(t * 5 + i) * 1.5
        ctx.beginPath(); ctx.moveTo(32 + side * 9, y); ctx.lineTo(kx, ky); ctx.lineTo(kx + side * 5, ky + 7); ctx.stroke()
      }
    }
    // abdomen
    blob(ctx, 25, 43, 13, 12, '#6d4bb0', INK, 1.7)
    poly(ctx, [[17, 35], [25, 31], [31, 36], [27, 42], [19, 43]], '#8a67d4', false)
    // hourglass mark
    poly(ctx, [[25, 38], [28, 41], [25, 44], [22, 41]], '#f0c53d', false)
    // head
    blob(ctx, 39, 32, 9, 8, '#4f3487', INK, 1.5)
    // eyes
    eye(ctx, 36, 30, 3.1, 3.4, 0.6, 0.3, { white: '#fff7d6' })
    eye(ctx, 44, 30, 3.1, 3.4, 0.6, 0.3, { white: '#fff7d6' })
    eye(ctx, 40, 36, 1.3, 1.4, 0, 0, { white: '#fff7d6' })
    // top hat
    poly(ctx, [[33, 20], [46, 20], [46, 15], [33, 15]], '#241f2e', '#0f0c15', 1.2)
    poly(ctx, [[30, 20], [49, 20], [49, 22], [30, 22]], '#241f2e', '#0f0c15', 1.2)
    poly(ctx, [[34, 15], [34, 12], [41, 12], [41, 15]], '#241f2e', false)
    line(ctx, 33, 18, 46, 18, '#e85a5a', 1.6)
    // grin
    ctx.beginPath(); ctx.arc(42, 36, 3.4, 0.15, Math.PI - 0.15); ctx.lineWidth = 1.1; ctx.strokeStyle = '#fff'; ctx.stroke()
    // bow tie
    poly(ctx, [[36, 40], [39, 42], [36, 44]], '#e85a5a', false)
    poly(ctx, [[44, 40], [41, 42], [44, 44]], '#e85a5a', false)
    ctx.restore()
  }

  CREATURES.rollingcalf = (ctx, t) => {
    const bob = Math.sin(t * 3) * 0.9
    shadow(ctx, 59, 22)
    ctx.save(); ctx.translate(0, bob)
    // smoke/flame mane
    for (let i = 0; i < 4; i++) flame(ctx, 20 + i * 7, 25 + (i % 2) * 2, 9, 12 + (i % 3) * 3, t + i, ['#ffd45e', '#ff8a35', '#d93b1d'])
    // tail
    poly(ctx, [[11, 38], [3, 33], [2, 40], [10, 43]], '#3a2a26', INK, 1.3)
    flame(ctx, 3, 33, 6, 9, t + 2, ['#ffd45e', '#ff8a35', '#d93b1d'])
    // legs
    for (const [x, ph] of [[20, 0], [27, 1], [41, 1], [48, 0]]) {
      const off = Math.sin(t * 4.2 + ph * 2) * 1.6
      poly(ctx, [[x, 46], [x + off, 55], [x + 3 + off, 55], [x + 3, 46]], '#2f2422', INK, 1.2)
      flame(ctx, x + 1.5 + off, 55, 4, 5, t + x, ['#ffd45e', '#ff8a35', '#d93b1d'])
    }
    // body
    blob(ctx, 33, 38, 17, 11, '#352824', INK, 1.8)
    // ember cracks
    line(ctx, 24, 34, 30, 39, '#ff8a35', 1.4)
    line(ctx, 30, 39, 27, 45, '#ffb13d', 1.1)
    line(ctx, 38, 34, 43, 40, '#ff8a35', 1.4)
    line(ctx, 43, 40, 39, 45, '#ffb13d', 1.1)
    // head
    blob(ctx, 50, 30, 8.5, 8, '#3a2a26', INK, 1.5)
    // snout
    blob(ctx, 57, 34, 4, 3.4, '#4a3630', INK, 1.1)
    // horns
    ctx.beginPath(); ctx.moveTo(46, 24); ctx.quadraticCurveTo(43, 16, 49, 16); ctx.lineWidth = 2.4; ctx.strokeStyle = '#e9dcc0'; ctx.stroke()
    // glowing eyes
    ctx.save(); ctx.shadowColor = '#ff9d3c'; ctx.shadowBlur = 5
    blob(ctx, 50, 28, 1.7, 1.9, '#ffcf4a', false)
    blob(ctx, 56, 28, 1.7, 1.9, '#ffcf4a', false)
    ctx.restore()
    // smoke wisps
    ctx.save(); ctx.globalAlpha = 0.35
    blob(ctx, 16, 20, 7, 4, '#9a8a86', false); blob(ctx, 10, 15, 5, 3, '#9a8a86', false)
    ctx.restore()
    ctx.restore()
  }

  CREATURES.rivermumma = (ctx, t) => {
    const bob = Math.sin(t * 2) * 1.2
    shadow(ctx, 59, 18)
    ctx.save(); ctx.translate(0, bob)
    // tail
    ctx.beginPath(); ctx.moveTo(31, 43); ctx.quadraticCurveTo(42, 52, 36, 58); ctx.quadraticCurveTo(30, 54, 36, 61); ctx.quadraticCurveTo(50, 55, 38, 44); ctx.closePath()
    ctx.fillStyle = '#2f9a9a'; ctx.fill(); ctx.lineWidth = 1.5; ctx.strokeStyle = INK; ctx.stroke()
    // tail fin
    poly(ctx, [[38, 52], [52, 54], [46, 61], [37, 58]], '#51c4bf', INK, 1.2)
    // scales
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(38 + i * 2, 49 + i * 3, 2.2, 0.2, Math.PI - 0.2); ctx.lineWidth = 0.9; ctx.strokeStyle = '#1c6e72'; ctx.stroke() }
    // torso
    poly(ctx, [[27, 25], [37, 25], [40, 38], [36, 47], [29, 47], [25, 38]], '#7a4a2e', INK, 1.5)
    // shell top
    poly(ctx, [[25, 31], [32, 27], [39, 31], [37, 36], [28, 36]], '#e27862', INK, 1.2)
    line(ctx, 28, 29, 36, 29, '#ffd0ae', 1)
    // arms
    poly(ctx, [[27, 32], [16, 36], [14, 42], [20, 42], [29, 38]], '#7a4a2e', INK, 1.3)
    poly(ctx, [[37, 32], [47, 34], [51, 40], [45, 41], [36, 38]], '#7a4a2e', INK, 1.3)
    // hair
    blob(ctx, 32, 20, 12, 10, '#1f5f5f', INK, 1.6)
    blob(ctx, 24, 25, 5, 9, '#267a78', INK, 1.2)
    blob(ctx, 41, 25, 5, 9, '#267a78', INK, 1.2)
    // face
    blob(ctx, 32, 27, 9, 8, '#8a5535', INK, 1.4)
    eye(ctx, 28, 27, 2.8, 3.2, 0.5, 0.2, { lash: true })
    eye(ctx, 37, 27, 2.8, 3.2, 0.5, 0.2, { lash: true })
    cheek(ctx, 25, 33, 1.8, '#e88c7a'); cheek(ctx, 40, 33, 1.8, '#e88c7a')
    ctx.beginPath(); ctx.arc(32.5, 34, 3.2, 0.15, Math.PI - 0.15); ctx.lineWidth = 1.1; ctx.strokeStyle = INK; ctx.stroke()
    // water lilies
    blob(ctx, 13, 48, 5, 2.4, '#4f9c3d', INK, 0.9)
    blob(ctx, 13, 46, 2.6, 2, '#f6d0e0', INK, 0.9)
    ctx.save(); ctx.globalAlpha = 0.8
    blob(ctx, 51, 18, 4, 5, '#a8e8e4', false); blob(ctx, 55, 12, 2.4, 3, '#c8f3ef', false)
    ctx.restore()
    ctx.restore()
  }

  CREATURES.peeniewallie = (ctx, t) => {
    const bob = Math.sin(t * 4) * 1.6
    shadow(ctx, 59, 12)
    ctx.save(); ctx.translate(0, bob)
    // glow
    const glow = 0.45 + Math.sin(t * 5) * 0.18
    ctx.save(); ctx.globalAlpha = glow
    blob(ctx, 42, 42, 14, 12, '#fff2a0', false)
    ctx.restore()
    // wings
    ctx.save(); ctx.globalAlpha = 0.55
    blob(ctx, 26, 27, 12, 6, '#c8f0ff', '#6aa8c2', 1)
    blob(ctx, 27, 34, 10, 4.5, '#d8f6ff', '#6aa8c2', 1)
    ctx.restore()
    // legs
    for (const x of [28, 35, 42]) line(ctx, x, 48, x - 2, 56, '#2e2a44', 1.4)
    // body
    blob(ctx, 36, 40, 11, 9, '#3a3358', INK, 1.5)
    // glowing abdomen
    blob(ctx, 46, 44, 8, 7, '#ffe066', INK, 1.4)
    blob(ctx, 47, 43, 5, 4, '#fff6b8', false)
    blob(ctx, 48, 42, 2.4, 1.8, '#fff', false)
    // head
    blob(ctx, 28, 38, 8, 7, '#4a426b', INK, 1.4)
    // antennae
    ctx.beginPath(); ctx.moveTo(26, 32); ctx.quadraticCurveTo(20, 22, 25, 19); ctx.lineWidth = 1.3; ctx.strokeStyle = INK; ctx.stroke()
    ctx.beginPath(); ctx.moveTo(30, 31); ctx.quadraticCurveTo(29, 22, 34, 20); ctx.lineWidth = 1.3; ctx.strokeStyle = INK; ctx.stroke()
    blob(ctx, 25, 19, 1.8, 1.8, '#ffe066', INK, 0.8)
    blob(ctx, 34, 20, 1.8, 1.8, '#ffe066', INK, 0.8)
    // eyes
    eye(ctx, 26, 37, 2.8, 3.2, 0.5, 0.2, { white: '#f6ffe0' })
    eye(ctx, 33, 37, 2.8, 3.2, 0.5, 0.2, { white: '#f6ffe0' })
    // smile
    ctx.beginPath(); ctx.arc(30, 42, 2.4, 0.1, Math.PI - 0.1); ctx.lineWidth = 1; ctx.strokeStyle = INK; ctx.stroke()
    // sparkles
    for (let i = 0; i < 3; i++) {
      const a = t * 2 + i * 2.1
      sparkle(ctx, 52 + Math.cos(a) * 7, 34 + Math.sin(a) * 8, 2.4, '#fff2a0', 0.8)
    }
    ctx.restore()
  }

  CREATURES.mokojumbie = (ctx, t) => {
    const sway = Math.sin(t * 1.7) * 1.4
    shadow(ctx, 60, 12)
    ctx.save(); ctx.translate(sway, Math.sin(t * 2.2) * 0.8)
    // stilts
    line(ctx, 27, 48, 22, 61, '#8a5a33', 2.2); line(ctx, 37, 48, 42, 61, '#8a5a33', 2.2)
    // feet
    poly(ctx, [[19, 61], [25, 61], [24, 63], [18, 63]], '#5a3a22', false)
    poly(ctx, [[40, 61], [46, 61], [47, 63], [41, 63]], '#5a3a22', false)
    // pants
    poly(ctx, [[25, 38], [39, 38], [40, 50], [34, 48], [32, 52], [30, 48], [24, 50]], '#e8573c', INK, 1.5)
    poly(ctx, [[25, 41], [39, 41], [40, 47], [33, 46], [32, 49], [31, 46], [24, 47]], '#f0c53d', false)
    line(ctx, 32, 40, 32, 50, '#3a8a52', 1.8)
    // torso
    poly(ctx, [[26, 24], [38, 24], [40, 37], [24, 37]], '#3a2a26', INK, 1.5)
    // vest
    poly(ctx, [[27, 25], [31, 25], [30, 36], [25, 36]], '#3a8a52', false)
    poly(ctx, [[37, 25], [33, 25], [34, 36], [39, 36]], '#3a8a52', false)
    // arms raised
    poly(ctx, [[26, 27], [14, 22], [11, 17], [17, 15], [27, 22]], '#7a4a2e', INK, 1.4)
    poly(ctx, [[38, 27], [50, 22], [53, 17], [47, 15], [37, 22]], '#7a4a2e', INK, 1.4)
    // ribbons
    line(ctx, 13, 18, 8, 27, '#e8573c', 1.6); line(ctx, 51, 18, 56, 27, '#f0c53d', 1.6)
    // head
    blob(ctx, 32, 18, 8, 8, '#7a4a2e', INK, 1.4)
    // mask
    poly(ctx, [[24, 14], [40, 14], [38, 22], [32, 24], [26, 22]], '#f0c53d', INK, 1.2)
    // mask eyes
    poly(ctx, [[27, 17], [30, 17], [29, 20], [26, 20]], '#24150f', false)
    poly(ctx, [[34, 17], [37, 17], [38, 20], [35, 20]], '#24150f', false)
    // headdress feathers
    for (let i = 0; i < 3; i++) {
      leaf(ctx, 29 + i * 3, 12, 8, -1.6 + i * 0.35, ['#e8573c', '#f0c53d', '#3a8a52'][i])
    }
    // ribbons in motion
    ctx.save(); ctx.globalAlpha = 0.8
    line(ctx, 11, 26, 5, 32 + Math.sin(t * 3) * 2, '#e8573c', 1.4)
    line(ctx, 53, 26, 59, 32 + Math.cos(t * 3) * 2, '#f0c53d', 1.4)
    ctx.restore()
    ctx.restore()
  }

  CREATURES.drbird = (ctx, t) => {
    const bob = Math.sin(t * 2.4) * 2
    const flap = Math.sin(t * 9) * 0.35
    ctx.save(); ctx.translate(0, bob)
    // aura
    ctx.save(); ctx.globalAlpha = 0.18 + Math.sin(t * 3) * 0.05
    blob(ctx, 32, 32, 28, 26, '#ffe066', false)
    ctx.restore()
    // streamer tail
    ctx.beginPath(); ctx.moveTo(26, 40); ctx.bezierCurveTo(18, 48, 30, 52, 22, 62)
    ctx.lineWidth = 3.2; ctx.strokeStyle = '#1f5f4a'; ctx.stroke()
    ctx.beginPath(); ctx.moveTo(32, 40); ctx.bezierCurveTo(42, 48, 32, 54, 42, 62)
    ctx.lineWidth = 3.2; ctx.strokeStyle = '#2e7a5a'; ctx.stroke()
    ctx.beginPath(); ctx.moveTo(26, 40); ctx.bezierCurveTo(18, 48, 30, 52, 22, 62)
    ctx.lineWidth = 1.2; ctx.strokeStyle = '#8ee0b0'; ctx.stroke()
    // body
    blob(ctx, 32, 34, 13, 11, '#2f9a72', INK, 1.5)
    blob(ctx, 35, 38, 8, 6, '#e8f7e8', false)
    // throat
    blob(ctx, 39, 30, 6, 5, '#e8573c', false)
    // head
    blob(ctx, 41, 22, 8, 7.5, '#2f9a72', INK, 1.4)
    // crest
    poly(ctx, [[40, 15], [42, 7], [46, 14]], '#2e7a5a', INK, 1)
    // beak
    poly(ctx, [[47, 21], [62, 24], [47, 27]], '#2a1b14', false)
    // eye
    eye(ctx, 44, 21, 2.6, 2.8, 1, 0.1, {})
    // wings
    ctx.save(); ctx.translate(32, 30); ctx.rotate(-0.3 + flap)
    poly(ctx, [[0, 0], [-18, -8], [-24, 2], [-14, 8], [-2, 5]], '#3fb88a', INK, 1.2)
    poly(ctx, [[-3, 2], [-16, -4], [-20, 2], [-12, 6]], '#8ee0b0', false)
    ctx.restore()
    ctx.save(); ctx.translate(32, 32); ctx.rotate(0.25 - flap * 0.6)
    poly(ctx, [[0, 0], [12, -6], [20, 0], [12, 7]], '#2e8a6a', INK, 1.1)
    ctx.restore()
    // sparkles
    for (let i = 0; i < 4; i++) {
      const a = t * 1.5 + i * 1.6
      sparkle(ctx, 32 + Math.cos(a) * 24, 30 + Math.sin(a) * 20, 2.2, '#ffe98a', 0.75)
    }
    ctx.restore()
  }

  function drawCreatureOn(ctx, id, cx, cy, size, t, opts) {
    opts = opts || {}
    const draw = CREATURES[id] || CREATURES.pimenta
    const buffer = document.createElement('canvas')
    buffer.width = 64; buffer.height = 64
    const bctx = buffer.getContext('2d')
    bctx.imageSmoothingEnabled = false
    bctx.lineJoin = 'round'; bctx.lineCap = 'round'
    draw(bctx, t, opts)
    ctx.save()
    ctx.imageSmoothingEnabled = false
    if (opts.alpha != null) ctx.globalAlpha = opts.alpha
    ctx.translate(cx, cy)
    if (opts.flip) ctx.scale(-1, 1)
    if (opts.rotate) ctx.rotate(opts.rotate)
    ctx.drawImage(buffer, -size / 2, -size / 2, size, size)
    ctx.restore()
  }

  art._ = { TAU, INK, INK_SOFT, hash, blob, poly, line, eye, sparkle, leaf, flame, shadow, cheek, CREATURES }
  art.drawCreature = drawCreatureOn
  art.creatureIds = Object.keys(CREATURES)
})(typeof globalThis !== 'undefined' ? globalThis : this)
