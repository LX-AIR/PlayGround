/* GIGAMON: Island Spirits — world tiles, props, buildings, characters */
(function (root) {
  'use strict'
  const YD = root.YD = root.YD || {}
  const art = YD.art = YD.art || {}
  const A = art._
  const { TAU, INK, hash, blob, poly, line, leaf, sparkle } = A
  const T = 16

  // ---------------------------------------------------------------- tiles
  function tileBase(ctx, tile, px, py, x, y) {
    const h = hash(x, y, 2)
    if (tile === 'grass' || tile === 'meadow' || tile === 'forest' || tile === 'mountain') {
      const colors = {
        grass: ['#67b258', '#5da64f', '#76c163'],
        meadow: ['#7ac266', '#6fb75b', '#8ad273'],
        forest: ['#4f8d4c', '#447e42', '#5b9c56'],
        mountain: ['#7d9a6b', '#728d61', '#89a677']
      }[tile]
      ctx.fillStyle = colors[0]
      ctx.fillRect(px, py, T, T)
      // soft patches
      for (let i = 0; i < 3; i++) {
        const hx = hash(x, y, 10 + i), hy = hash(x, y, 20 + i)
        ctx.fillStyle = i % 2 ? colors[1] : colors[2]
        ctx.globalAlpha = 0.5
        ctx.fillRect(px + Math.floor(hx * 13), py + Math.floor(hy * 13), 3, 2)
        ctx.globalAlpha = 1
      }
      // blade details
      const blades = tile === 'forest' ? 3 : 2
      ctx.strokeStyle = tile === 'forest' ? '#386b37' : '#4b8f40'
      ctx.lineWidth = 1
      for (let i = 0; i < blades; i++) {
        const bx = px + 2 + Math.floor(hash(x, y, 30 + i) * 12)
        const by = py + 4 + Math.floor(hash(x, y, 40 + i) * 9)
        ctx.beginPath(); ctx.moveTo(bx, by + 3); ctx.lineTo(bx + (i % 2 ? 1 : 0), by); ctx.stroke()
        ctx.fillStyle = tile === 'forest' ? '#79b96b' : '#94d67c'
        ctx.fillRect(bx + (i % 2 ? 1 : 0), by, 1, 1)
      }
      if (h > 0.86) {
        ctx.fillStyle = tile === 'forest' ? '#8fc27a' : '#b5e39a'
        ctx.fillRect(px + 3 + Math.floor(h * 9), py + 8, 1, 1)
      }
      return
    }
    if (tile === 'tallgrass') {
      ctx.fillStyle = '#5a9a4c'
      ctx.fillRect(px, py, T, T)
      ctx.fillStyle = '#4c8a40'
      ctx.fillRect(px, py + 10, T, 6)
      for (let i = 0; i < 6; i++) {
        const bx = px + 1 + Math.floor(hash(x, y, 50 + i) * 14)
        const bh = 7 + Math.floor(hash(x, y, 60 + i) * 6)
        const bend = hash(x, y, 70 + i) > 0.5 ? 2 : -2
        ctx.strokeStyle = i % 2 ? '#2f6f34' : '#3f843c'
        ctx.lineWidth = 1.5
        ctx.beginPath(); ctx.moveTo(bx, py + 16); ctx.quadraticCurveTo(bx + bend * 0.4, py + 16 - bh * 0.6, bx + bend, py + 16 - bh); ctx.stroke()
        ctx.fillStyle = '#7cc35a'
        ctx.fillRect(bx + bend, py + 15 - bh, 1, 2)
      }
      return
    }
    if (tile === 'sand') {
      ctx.fillStyle = '#f2d69e'
      ctx.fillRect(px, py, T, T)
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = i % 2 ? '#e4c485' : '#fae7b8'
        ctx.globalAlpha = 0.7
        ctx.fillRect(px + Math.floor(hash(x, y, 80 + i) * 14), py + Math.floor(hash(x, y, 90 + i) * 14), 1, 1)
        ctx.globalAlpha = 1
      }
      if (h > 0.9) {
        ctx.strokeStyle = '#d8b478'; ctx.lineWidth = 1
        ctx.beginPath(); ctx.arc(px + 8, py + 9, 2.4, 3.4, 5.9); ctx.stroke()
      }
      return
    }
    if (tile === 'shallow' || tile === 'deep' || tile === 'waterfall') {
      const deep = tile === 'deep'
      ctx.fillStyle = deep ? '#167a9b' : '#42bfc0'
      ctx.fillRect(px, py, T, T)
      ctx.fillStyle = deep ? '#12708f' : '#34adad'
      const off = Math.floor((Math.sin(x * 0.9 + y * 0.5) + 1) * 3)
      ctx.globalAlpha = 0.55
      ctx.fillRect(px, py + 3 + off, T, 2)
      ctx.fillRect(px, py + 11, T, 1)
      ctx.globalAlpha = 1
      if (!deep && h > 0.55) {
        ctx.strokeStyle = '#9ce9e4'; ctx.lineWidth = 1; ctx.globalAlpha = 0.6
        ctx.beginPath(); ctx.moveTo(px + 3, py + 9); ctx.lineTo(px + 6, py + 9); ctx.moveTo(px + 9, py + 12); ctx.lineTo(px + 12, py + 12); ctx.stroke()
        ctx.globalAlpha = 1
      }
      if (tile === 'waterfall') {
        ctx.fillStyle = 'rgba(255,255,255,.55)'
        for (let i = 0; i < 3; i++) ctx.fillRect(px + 2 + i * 5, py + (i % 2 ? 2 : 0), 2, 16)
      }
      return
    }
    if (tile === 'path') {
      ctx.fillStyle = '#d9b98a'
      ctx.fillRect(px, py, T, T)
      ctx.fillStyle = '#e8cfa7'
      ctx.fillRect(px + 1, py + 1, 14, 14)
      ctx.strokeStyle = '#bd9767'; ctx.lineWidth = 1
      const seam = h > 0.5
      if (seam) { ctx.beginPath(); ctx.moveTo(px, py + 8); ctx.lineTo(px + 16, py + 8); ctx.stroke() }
      else { ctx.beginPath(); ctx.moveTo(px + 8, py); ctx.lineTo(px + 8, py + 16); ctx.stroke() }
      ctx.fillStyle = '#c9a678'
      ctx.fillRect(px + 2 + Math.floor(hash(x, y, 100) * 10), py + 2 + Math.floor(hash(x, y, 101) * 10), 2, 1)
      return
    }
    if (tile === 'plaza' || tile === 'peak') {
      const light = tile === 'peak'
      ctx.fillStyle = light ? '#cfc6ae' : '#d7c19b'
      ctx.fillRect(px, py, T, T)
      const alt = (x + y) % 2 === 0
      ctx.fillStyle = light ? (alt ? '#dcd5c0' : '#c6bda5') : (alt ? '#e6d5b4' : '#ceb992')
      ctx.fillRect(px + 1, py + 1, 14, 14)
      ctx.strokeStyle = light ? '#a49a82' : '#b49a72'
      ctx.lineWidth = 0.8
      ctx.strokeRect(px + 1.5, py + 1.5, 13, 13)
      if (h > 0.82) { ctx.fillStyle = light ? '#b6ab93' : '#c0a47c'; ctx.fillRect(px + 4, py + 11, 5, 1) }
      if (tile === 'peak' && h > 0.9) sparkle(ctx, px + 11, py + 4, 1.6, '#ffe98a', 0.6)
      return
    }
    if (tile === 'bridge' || tile === 'dock') {
      const dock = tile === 'dock'
      ctx.fillStyle = dock ? '#b88950' : '#a9743f'
      ctx.fillRect(px, py, T, T)
      ctx.fillStyle = dock ? '#caa066' : '#bd8a52'
      for (let i = 0; i < 4; i++) {
        ctx.fillRect(px + 1, py + i * 4 + 1, 14, 3)
      }
      ctx.strokeStyle = dock ? '#8d6435' : '#7e542a'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(px, py + 4); ctx.lineTo(px + 16, py + 4); ctx.moveTo(px, py + 12); ctx.lineTo(px + 16, py + 12); ctx.stroke()
      ctx.fillStyle = '#5f4022'
      ctx.fillRect(px + 2, py + 2, 1, 1); ctx.fillRect(px + 13, py + 10, 1, 1)
      return
    }
    if (tile === 'cliff') {
      ctx.fillStyle = '#5d6b5c'
      ctx.fillRect(px, py, T, T)
      ctx.fillStyle = '#697a66'
      ctx.fillRect(px, py, 16, 3)
      ctx.fillStyle = '#4a5648'
      ctx.fillRect(px, py + 6, 16, 2)
      ctx.fillRect(px, py + 12, 16, 2)
      ctx.fillStyle = '#7d8f74'
      ctx.fillRect(px + 2, py + 3, 4, 2); ctx.fillRect(px + 10, py + 9, 4, 2)
      ctx.strokeStyle = '#3b473a'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(px + 5, py + 2); ctx.lineTo(px + 7, py + 8); ctx.moveTo(px + 12, py + 1); ctx.lineTo(px + 10, py + 7); ctx.stroke()
      return
    }
    if (tile === 'soil') {
      ctx.fillStyle = '#8a5a3a'
      ctx.fillRect(px, py, T, T)
      ctx.fillStyle = '#7a4c2f'
      for (let i = 0; i < 3; i++) ctx.fillRect(px, py + 3 + i * 5, 16, 2)
      ctx.fillStyle = '#a8734c'
      ctx.fillRect(px + 3, py + 1, 2, 1); ctx.fillRect(px + 11, py + 8, 2, 1)
      return
    }
    ctx.fillStyle = '#67b258'; ctx.fillRect(px, py, T, T)
  }

  function drawTile(ctx, tile, x, y, world) {
    const px = x * T, py = y * T
    tileBase(ctx, tile, px, py, x, y)
    if (['grass', 'meadow', 'forest', 'mountain', 'tallgrass', 'sand', 'path', 'plaza'].includes(tile)) {
      // foam on land edges touching water
      for (const [dx, dy, side] of [[0, -1, 'top'], [0, 1, 'bottom'], [-1, 0, 'left'], [1, 0, 'right']]) {
        const n = world.tileAt(x + dx, y + dy)
        if (n === 'shallow' || n === 'deep') {
          ctx.fillStyle = 'rgba(240,255,250,.8)'
          if (side === 'top') for (let i = 0; i < 4; i++) ctx.fillRect(px + i * 4 + 1, py, 3, 1)
          if (side === 'bottom') for (let i = 0; i < 4; i++) ctx.fillRect(px + i * 4 + 1, py + 15, 3, 1)
          if (side === 'left') for (let i = 0; i < 3; i++) ctx.fillRect(px, py + i * 5 + 1, 1, 3)
          if (side === 'right') for (let i = 0; i < 3; i++) ctx.fillRect(px + 15, py + i * 5 + 1, 1, 3)
        }
        if (tile === 'sand' && ['grass', 'meadow', 'forest'].includes(n) && side === 'top') {
          ctx.fillStyle = '#68a94f'
          for (let i = 0; i < 3; i++) ctx.fillRect(px + i * 6 + 2, py, 4, 2)
        }
        if (tile === 'cliff' && side === 'bottom' && n !== 'cliff') {
          ctx.fillStyle = '#39463a'; ctx.fillRect(px, py + 14, 16, 2)
        }
      }
    }
  }

  // ---------------------------------------------------------------- props
  function basePos(p) { return { x: p.x * T + T / 2, y: p.y * T + T } }
  function propShadow(ctx, x, y, rx) {
    ctx.save(); ctx.globalAlpha = 0.17; ctx.fillStyle = '#14261a'
    ctx.beginPath(); ctx.ellipse(x, y - 1, rx, 3, 0, 0, TAU); ctx.fill(); ctx.restore()
  }

  const PROPS = {
    palm(ctx, p, t) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 7)
      const sway = Math.sin(t * 1.2 + p.x) * 1.5
      ctx.strokeStyle = '#8a5f33'; ctx.lineWidth = 3; ctx.lineCap = 'round'
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + sway * 0.4, y - 12, x + sway, y - 22); ctx.stroke()
      ctx.strokeStyle = '#a97b48'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(x + 0.5, y); ctx.quadraticCurveTo(x + sway * 0.4, y - 12, x + sway, y - 22); ctx.stroke()
      const cx = x + sway, cy = y - 23
      for (let i = 0; i < 6; i++) {
        const ang = -Math.PI + i * (Math.PI / 5)
        const fx = cx + Math.cos(ang) * 9, fy = cy + Math.sin(ang) * 6
        ctx.strokeStyle = i % 2 ? '#2f7a3e' : '#3e9149'; ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.quadraticCurveTo(cx + Math.cos(ang) * 6, cy + Math.sin(ang) * 3 - 2, fx, fy); ctx.stroke()
        for (let j = 1; j <= 3; j++) {
          const lx = cx + (fx - cx) * (j / 4), ly = cy + (fy - cy) * (j / 4)
          line(ctx, lx, ly, lx + Math.cos(ang + 1.3) * 3, ly + Math.sin(ang + 1.3) * 3, '#5fae4a', 1)
        }
      }
      ctx.fillStyle = '#c98a35'; ctx.beginPath(); ctx.arc(cx - 1, cy + 1, 1.6, 0, TAU); ctx.fill()
      ctx.fillStyle = '#8a5f33'; ctx.fillRect(cx - 1, cy + 1, 2, 2)
    },
    broadleaf(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 8)
      ctx.strokeStyle = '#7a4d2b'; ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 14); ctx.stroke()
      blob(ctx, x - 5, y - 20, 8, 7, '#3a7d3a', INK, 1.2)
      blob(ctx, x + 5, y - 21, 8, 7, '#438b41', INK, 1.2)
      blob(ctx, x, y - 26, 9, 7, '#4f9c47', INK, 1.2)
      blob(ctx, x - 2, y - 24, 3, 2, '#7cc35a', false)
      ctx.fillStyle = '#2f6a30'
      ctx.fillRect(x - 7, y - 20, 2, 2); ctx.fillRect(x + 6, y - 22, 2, 2)
    },
    bamboo(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 6)
      for (let i = 0; i < 3; i++) {
        const bx = x - 4 + i * 4, top = y - 24 - (i % 2) * 4
        ctx.strokeStyle = i % 2 ? '#6fa83f' : '#7dbb4a'; ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(bx, y); ctx.lineTo(bx + (i - 1) * 1.5, top); ctx.stroke()
        ctx.strokeStyle = '#4d7d2b'; ctx.lineWidth = 1
        for (let k = 1; k < 5; k++) {
          const yy = y - k * 5
          ctx.beginPath(); ctx.moveTo(bx - 1, yy); ctx.lineTo(bx + 1, yy); ctx.stroke()
        }
        leaf(ctx, bx + (i - 1) * 1.5, top, 7, -1.1 + i * 0.7, '#7dbb4a')
        leaf(ctx, bx + (i - 1) * 1.5, top + 4, 6, 0.6 - i * 0.4, '#5f9a35')
      }
    },
    pine(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 7)
      ctx.fillStyle = '#6b4a2a'; ctx.fillRect(x - 1, y - 6, 2, 6)
      for (let i = 0; i < 3; i++) {
        const top = y - 24 + i * 6, w = 5 + i * 3
        poly(ctx, [[x, top], [x - w, top + 10], [x + w, top + 10]], i % 2 ? '#3d7446' : '#356b3f', '#264f2e', 1)
      }
      ctx.fillStyle = '#5d9b56'; ctx.fillRect(x - 2, y - 22, 2, 1)
    },
    bush(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 7)
      blob(ctx, x - 4, y - 6, 6, 5, '#4a8c3f', INK, 1.1)
      blob(ctx, x + 4, y - 7, 6, 5, '#569d49', INK, 1.1)
      blob(ctx, x, y - 10, 6, 5, '#63ae51', INK, 1.1)
      ctx.fillStyle = '#e8573c'; ctx.fillRect(x - 3, y - 7, 1, 1); ctx.fillRect(x + 3, y - 9, 1, 1)
    },
    fern(ctx, p) {
      const { x, y } = basePos(p)
      for (let i = 0; i < 4; i++) {
        const ang = -1.9 + i * 0.55
        leaf(ctx, x, y - 1, 9, ang, i % 2 ? '#5f9a4d' : '#74b45c')
      }
    },
    flower(ctx, p) {
      const { x, y } = basePos(p)
      const colors = ['#ff7b6b', '#ffcf4a', '#f7a8d8']
      for (let i = 0; i < 3; i++) {
        const fx = x - 4 + i * 4, fy = y - 2 - (i % 2) * 2
        ctx.strokeStyle = '#4a8c3f'; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(fx, y); ctx.lineTo(fx, fy); ctx.stroke()
        ctx.fillStyle = colors[(p.x + i) % 3]
        ctx.fillRect(fx - 1, fy - 1, 3, 2)
        ctx.fillStyle = '#fff2a8'; ctx.fillRect(fx, fy, 1, 1)
      }
    },
    mountainflower(ctx, p) {
      const { x, y } = basePos(p)
      ctx.strokeStyle = '#5d7a52'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 5); ctx.stroke()
      ctx.fillStyle = '#9a7bd4'; ctx.beginPath(); ctx.arc(x, y - 6, 2, 0, TAU); ctx.fill()
      ctx.fillStyle = '#f4e8ff'; ctx.fillRect(x - 1, y - 7, 1, 1)
    },
    rock(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 7)
      poly(ctx, [[x - 7, y], [x - 6, y - 7], [x - 2, y - 10], [x + 5, y - 9], [x + 8, y - 3], [x + 6, y]], '#8a8f85', INK, 1.2)
      poly(ctx, [[x - 2, y - 9], [x + 1, y - 10], [x + 3, y - 7], [x - 1, y - 6]], '#b3b7ab', false)
      poly(ctx, [[x - 5, y - 1], [x - 4, y - 4], [x - 1, y - 5], [x, y - 1]], '#737a70', false)
    },
    driftwood(ctx, p) {
      const { x, y } = basePos(p)
      ctx.strokeStyle = '#c9b18f'; ctx.lineWidth = 2.4; ctx.lineCap = 'round'
      ctx.beginPath(); ctx.moveTo(x - 7, y - 2); ctx.quadraticCurveTo(x, y - 5, x + 7, y - 1); ctx.stroke()
      ctx.strokeStyle = '#a88b68'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(x - 2, y - 4); ctx.lineTo(x - 4, y - 7); ctx.stroke()
    },
    shell(ctx, p) {
      const { x, y } = basePos(p)
      ctx.fillStyle = '#f7c6c0'; ctx.strokeStyle = '#b97873'; ctx.lineWidth = 0.8
      ctx.beginPath(); ctx.arc(x, y - 2, 3, Math.PI, TAU); ctx.closePath(); ctx.fill(); ctx.stroke()
      for (let i = 0; i < 3; i++) line(ctx, x, y - 2, x - 2 + i * 2, y - 5, '#d99a94', 0.6)
    },
    banana(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 7)
      ctx.strokeStyle = '#6b8a3a'; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 1, y - 16); ctx.stroke()
      for (let i = 0; i < 4; i++) {
        const ang = -2.2 + i * 0.52
        const lx = x + 1 + Math.cos(ang) * 8, ly = y - 16 + Math.sin(ang) * 5
        ctx.strokeStyle = '#5a8f33'; ctx.lineWidth = 1.2
        ctx.beginPath(); ctx.moveTo(x + 1, y - 16); ctx.quadraticCurveTo(x + 1 + Math.cos(ang) * 4, y - 16 + Math.sin(ang) * 2 - 2, lx, ly); ctx.stroke()
        ctx.fillStyle = '#78b84a'; ctx.beginPath(); ctx.ellipse(lx, ly, 4, 2.2, ang, 0, TAU); ctx.fill()
        ctx.strokeStyle = '#41762a'; ctx.lineWidth = 0.7; ctx.stroke()
      }
      ctx.fillStyle = '#f2cf4a'
      for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(x + 4, y - 12 + i * 2, 1.3, 0, TAU); ctx.fill() }
    },
    well(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x + 8, y, 16)
      ctx.fillStyle = '#9a9a8e'; ctx.fillRect(x - 15, y - 14, 30, 14)
      ctx.strokeStyle = '#63645c'; ctx.lineWidth = 1.5; ctx.strokeRect(x - 15, y - 14, 30, 14)
      ctx.fillStyle = '#b8b7a8'; ctx.fillRect(x - 12, y - 12, 24, 3)
      ctx.fillStyle = '#2a6a72'; ctx.fillRect(x - 11, y - 9, 22, 7)
      ctx.fillStyle = '#4fbfc6'; ctx.fillRect(x - 9, y - 8, 8, 2)
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(x - 13, y - 14); ctx.lineTo(x - 11, y - 27); ctx.lineTo(x + 11, y - 27); ctx.lineTo(x + 13, y - 14); ctx.stroke()
      poly(ctx, [[x - 15, y - 26], [x, y - 32], [x + 15, y - 26]], '#8a5a3a', '#5a3a22', 1.2)
      line(ctx, x, y - 27, x, y - 20, '#6b4a2b', 1)
      ctx.fillStyle = '#8a5a3a'; ctx.fillRect(x - 2, y - 21, 4, 3)
    },
    spring(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x + 8, y, 16)
      ctx.fillStyle = '#4fb6b7'; ctx.beginPath(); ctx.ellipse(x + 8, y - 5, 16, 8, 0, 0, TAU); ctx.fill()
      ctx.strokeStyle = '#2b7c83'; ctx.lineWidth = 1.4; ctx.stroke()
      ctx.fillStyle = '#8fe0dd'; ctx.beginPath(); ctx.ellipse(x + 5, y - 7, 6, 2.4, 0, 0, TAU); ctx.fill()
      for (let i = 0; i < 5; i++) {
        const a = i * 1.4 + p.x
        ctx.fillStyle = '#8a8f85'; ctx.beginPath(); ctx.arc(x + 8 + Math.cos(a) * 14, y - 4 + Math.sin(a) * 5, 2.2, 0, TAU); ctx.fill()
      }
      sparkle(ctx, x + 12, y - 9, 2.4, '#dffbf4', 0.9)
    },
    mango(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 8)
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 1, y - 15); ctx.stroke()
      blob(ctx, x - 5, y - 22, 9, 8, '#3a7d3a', INK, 1.2)
      blob(ctx, x + 5, y - 23, 9, 8, '#478b41', INK, 1.2)
      blob(ctx, x, y - 28, 8, 6, '#5aa34b', INK, 1.2)
      for (const [fx, fy] of [[x - 7, y - 17], [x + 4, y - 19], [x + 8, y - 14]]) {
        blob(ctx, fx, fy, 2.4, 3, '#f2b23c', '#a86a1e', 0.8)
        ctx.fillStyle = '#e8573c'; ctx.fillRect(fx - 1, fy - 2, 1, 1)
      }
    },
    crate(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 7)
      ctx.fillStyle = '#b8893f'; ctx.fillRect(x - 7, y - 11, 14, 11)
      ctx.strokeStyle = '#6f4d22'; ctx.lineWidth = 1.2; ctx.strokeRect(x - 7, y - 11, 14, 11)
      ctx.strokeStyle = '#8a642e'; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(x - 7, y - 6); ctx.lineTo(x + 7, y - 6); ctx.moveTo(x - 7, y - 11); ctx.lineTo(x + 7, y); ctx.stroke()
      ctx.fillStyle = '#6b4a2a'; ctx.fillRect(x - 5, y - 14, 10, 3)
      ctx.fillStyle = '#8a5f33'; ctx.fillRect(x - 4, y - 13, 8, 1)
    },
    firepit(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 8)
      for (let i = 0; i < 6; i++) {
        const a = i * 1.05
        ctx.fillStyle = '#7b7f74'; ctx.beginPath(); ctx.arc(x + Math.cos(a) * 7, y - 2 + Math.sin(a) * 3, 2.4, 0, TAU); ctx.fill()
      }
      ctx.strokeStyle = '#5a3a22'; ctx.lineWidth = 2
      line(ctx, x - 5, y - 2, x + 5, y - 4, '#5a3a22', 2)
      line(ctx, x - 4, y - 5, x + 4, y - 1, '#6b4a2b', 2)
      A.flame(ctx, x, y - 3, 8, 10, p.x, ['#ffe066', '#ff9d3c', '#ef5a2a'])
    },
    flag(ctx, p) {
      const { x, y } = basePos(p)
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(x - 1, y - 26, 2, 26)
      poly(ctx, [[x + 1, y - 25], [x + 14, y - 21], [x + 1, y - 16]], '#e8573c', '#8a2e1c', 0.9)
      ctx.fillStyle = '#f0c53d'; ctx.fillRect(x + 4, y - 21, 2, 2)
    },
    scarecrow(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 6)
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(x - 1, y - 20, 2, 20)
      ctx.fillStyle = '#8a5a3a'; ctx.fillRect(x - 8, y - 17, 16, 2)
      poly(ctx, [[x - 6, y - 19], [x + 6, y - 19], [x + 5, y - 8], [x - 5, y - 8]], '#e8b84a', INK, 1)
      ctx.fillStyle = '#f2d79b'; ctx.beginPath(); ctx.arc(x, y - 21, 3.4, 0, TAU); ctx.fill()
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 0.8; ctx.stroke()
      poly(ctx, [[x - 5, y - 22], [x + 5, y - 22], [x + 3, y - 26], [x - 3, y - 26]], '#c9a15a', INK, 0.8)
      ctx.fillStyle = '#3a2a26'; ctx.fillRect(x - 2, y - 21, 1, 1); ctx.fillRect(x + 1, y - 21, 1, 1)
    },
    boat(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 12)
      poly(ctx, [[x - 12, y - 6], [x + 12, y - 6], [x + 8, y], [x - 8, y]], '#3f8a9e', INK, 1.3)
      poly(ctx, [[x - 10, y - 5], [x + 10, y - 5], [x + 7, y - 2], [x - 7, y - 2]], '#6fc4cf', false)
      line(ctx, x, y - 6, x, y - 20, '#6b4a2b', 1.6)
      poly(ctx, [[x, y - 19], [x + 8, y - 13], [x, y - 9]], '#f4e8cf', '#b49b72', 0.9)
      line(ctx, x - 3, y - 3, x - 8, y - 10, '#8a5f33', 1)
    },
    stump(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 5)
      ctx.fillStyle = '#8a5a33'; ctx.fillRect(x - 5, y - 6, 10, 6)
      ctx.fillStyle = '#b98652'; ctx.beginPath(); ctx.ellipse(x, y - 6, 5, 2.4, 0, 0, TAU); ctx.fill()
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.ellipse(x, y - 6, 3, 1.4, 0, 0, TAU); ctx.stroke()
    },
    sign(ctx, p) {
      const { x, y } = basePos(p)
      propShadow(ctx, x, y, 4)
      ctx.fillStyle = '#6b4a2b'; ctx.fillRect(x - 1, y - 10, 2, 10)
      ctx.fillStyle = '#c99a5a'; ctx.fillRect(x - 8, y - 17, 16, 8)
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 1; ctx.strokeRect(x - 8, y - 17, 16, 8)
      ctx.fillStyle = '#5a3a22'; ctx.fillRect(x - 5, y - 14, 10, 1); ctx.fillRect(x - 5, y - 12, 7, 1)
      ctx.fillStyle = '#e8573c'; ctx.fillRect(x - 6, y - 15, 1, 1)
    }
  }

  function drawProp(ctx, p, world, t) {
    const fn = PROPS[p.type]
    if (!fn) return
    fn(ctx, p, t || 0)
  }

  // ---------------------------------------------------------------- buildings
  function bshadow(ctx, px, py, w, h) {
    ctx.save(); ctx.globalAlpha = 0.2; ctx.fillStyle = '#12251a'
    ctx.beginPath(); ctx.ellipse(px + w / 2, py + h - 2, w / 2 + 3, 5, 0, 0, TAU); ctx.fill(); ctx.restore()
  }

  const BUILDINGS = {
    house(ctx, b) {
      const px = b.x * T, py = b.y * T, w = b.w * T, h = b.h * T
      bshadow(ctx, px, py, w, h)
      // walls
      ctx.fillStyle = '#f2dcaa'; ctx.fillRect(px + 3, py + 17, w - 6, h - 17)
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 1.5; ctx.strokeRect(px + 3, py + 17, w - 6, h - 17)
      // planks
      ctx.strokeStyle = '#ddc491'; ctx.lineWidth = 1
      for (let y = py + 24; y < py + h; y += 7) { ctx.beginPath(); ctx.moveTo(px + 3, y); ctx.lineTo(px + w - 3, y); ctx.stroke() }
      // roof
      poly(ctx, [[px, py + 18], [px + 4, py + 4], [px + w - 4, py + 4], [px + w, py + 18]], '#c95a3e', '#7a2e1e', 1.3)
      poly(ctx, [[px + 4, py + 4], [px + w - 4, py + 4], [px + w - 8, py + 10], [px + 8, py + 10]], '#e07450', false)
      for (let x = px + 8; x < px + w - 6; x += 7) { ctx.fillStyle = '#a83f2c'; ctx.fillRect(x, py + 11, 1, 6) }
      // door
      const dx = b.door.x * T - px, dy = (b.door.y * T - py)
      ctx.fillStyle = '#7a4d2b'; ctx.fillRect(px + dx + 3, py + dy + 3, 10, 13)
      ctx.strokeStyle = '#4f3018'; ctx.lineWidth = 1; ctx.strokeRect(px + dx + 3, py + dy + 3, 10, 13)
      ctx.fillStyle = '#f0c53d'; ctx.fillRect(px + dx + 10, py + dy + 9, 1, 1)
      // windows
      for (const wx of [px + 8, px + w - 22]) {
        ctx.fillStyle = '#6fc4cf'; ctx.fillRect(wx, py + 24, 14, 11)
        ctx.strokeStyle = '#4f3018'; ctx.lineWidth = 1; ctx.strokeRect(wx, py + 24, 14, 11)
        ctx.beginPath(); ctx.moveTo(wx + 7, py + 24); ctx.lineTo(wx + 7, py + 35); ctx.stroke()
        ctx.fillStyle = '#fdf5d8'; ctx.fillRect(wx + 1, py + 25, 3, 2)
      }
      // step + plant
      ctx.fillStyle = '#c9b18f'; ctx.fillRect(px + dx, py + h, 16, 3)
      ctx.fillStyle = '#4f9c3d'; ctx.beginPath(); ctx.arc(px + w - 8, py + h - 5, 3.2, 0, TAU); ctx.fill()
      ctx.fillStyle = '#c96b3e'; ctx.fillRect(px + w - 10, py + h - 4, 5, 4)
    },
    lab(ctx, b) {
      const px = b.x * T, py = b.y * T, w = b.w * T, h = b.h * T
      bshadow(ctx, px, py, w, h)
      ctx.fillStyle = '#f6efdb'; ctx.fillRect(px + 3, py + 19, w - 6, h - 19)
      ctx.strokeStyle = '#5a4a32'; ctx.lineWidth = 1.5; ctx.strokeRect(px + 3, py + 19, w - 6, h - 19)
      // teal roof
      poly(ctx, [[px - 2, py + 20], [px + 6, py + 3], [px + w - 6, py + 3], [px + w + 2, py + 20]], '#1f7a80', '#0d474c', 1.4)
      poly(ctx, [[px + 6, py + 3], [px + w - 6, py + 3], [px + w - 10, py + 9], [px + 10, py + 9]], '#36a0a3', false)
      // roof stripes
      for (let x = px + 10; x < px + w - 8; x += 8) { ctx.fillStyle = '#176568'; ctx.fillRect(x, py + 10, 2, 8) }
      // solar panel
      poly(ctx, [[px + w - 26, py + 4], [px + w - 10, py + 1], [px + w - 8, py + 7], [px + w - 24, py + 9]], '#3b4f63', '#22303e', 1)
      // windows
      for (let i = 0; i < 2; i++) {
        const wx = px + 8 + i * 22
        ctx.fillStyle = '#8be0dd'; ctx.fillRect(wx, py + 26, 16, 13)
        ctx.strokeStyle = '#3c5a4f'; ctx.lineWidth = 1.2; ctx.strokeRect(wx, py + 26, 16, 13)
        ctx.fillStyle = '#d8fff9'; ctx.fillRect(wx + 1, py + 27, 4, 3)
        ctx.strokeStyle = '#3c5a4f'; ctx.beginPath(); ctx.moveTo(wx + 8, py + 26); ctx.lineTo(wx + 8, py + 39); ctx.stroke()
      }
      // door
      const dx = b.door.x * T - px
      ctx.fillStyle = '#2f7a80'; ctx.fillRect(px + dx + 3, py + h - 14, 11, 14)
      ctx.strokeStyle = '#123f43'; ctx.lineWidth = 1; ctx.strokeRect(px + dx + 3, py + h - 14, 11, 14)
      ctx.fillStyle = '#ffd45e'; ctx.fillRect(px + dx + 11, py + h - 7, 1, 1)
      // flask sign
      ctx.fillStyle = '#f6efdb'; ctx.fillRect(px + w - 17, py + 27, 11, 11)
      ctx.strokeStyle = '#5a4a32'; ctx.strokeRect(px + w - 17, py + 27, 11, 11)
      ctx.fillStyle = '#63b94a'; ctx.beginPath(); ctx.moveTo(px + w - 12, py + 29); ctx.lineTo(px + w - 10, py + 32); ctx.lineTo(px + w - 14, py + 32); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#35b6d6'; ctx.fillRect(px + w - 14, py + 32, 5, 3)
      // antenna
      line(ctx, px + w - 12, py + 3, px + w - 12, py - 5, '#5a4a32', 1.2)
      ctx.fillStyle = '#e8573c'; ctx.beginPath(); ctx.arc(px + w - 12, py - 6, 2, 0, TAU); ctx.fill()
    },
    market(ctx, b) {
      const px = b.x * T, py = b.y * T, w = b.w * T, h = b.h * T
      bshadow(ctx, px, py, w, h)
      ctx.fillStyle = '#f6e6c4'; ctx.fillRect(px + 4, py + 22, w - 8, h - 22)
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 1.4; ctx.strokeRect(px + 4, py + 22, w - 8, h - 22)
      // awning
      poly(ctx, [[px - 2, py + 23], [px + 4, py + 6], [px + w - 4, py + 6], [px + w + 2, py + 23]], '#e8573c', '#8a2e1c', 1.3)
      for (let x = px + 4; x < px + w - 2; x += 9) {
        poly(ctx, [[x, py + 7], [x + 4, py + 7], [x + 6, py + 22], [x + 2, py + 22]], '#f6e6c4', false)
      }
      // counter
      ctx.fillStyle = '#b98652'; ctx.fillRect(px + 5, py + h - 17, w - 10, 7)
      ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 1; ctx.strokeRect(px + 5, py + h - 17, w - 10, 7)
      // crates and fruit
      ctx.fillStyle = '#8a5f33'; ctx.fillRect(px + 8, py + h - 15, 9, 5)
      ctx.fillStyle = '#f2b23c'; for (let i = 0; i < 3; i++) ctx.fillRect(px + 9 + i * 3, py + h - 18, 2, 3)
      ctx.fillStyle = '#d94a4a'; ctx.beginPath(); ctx.arc(px + w - 14, py + h - 18, 2.6, 0, TAU); ctx.fill()
      ctx.fillStyle = '#f2b23c'; ctx.beginPath(); ctx.arc(px + w - 19, py + h - 17, 2.2, 0, TAU); ctx.fill()
      // door / opening
      const dx = b.door.x * T - px
      ctx.fillStyle = '#5a3a22'; ctx.fillRect(px + dx + 4, py + h - 16, 10, 16)
      // hanging sign
      ctx.fillStyle = '#f0c53d'; ctx.fillRect(px + w - 18, py + 27, 9, 6)
      ctx.strokeStyle = '#8a6410'; ctx.strokeRect(px + w - 18, py + 27, 9, 6)
      line(ctx, px + w - 14, py + 27, px + w - 14, py + 23, '#6b4a2b', 1)
      // lantern
      ctx.fillStyle = '#ffd45e'; ctx.beginPath(); ctx.arc(px + 7, py + 26, 2.2, 0, TAU); ctx.fill()
    },
    clinic(ctx, b) {
      const px = b.x * T, py = b.y * T, w = b.w * T, h = b.h * T
      bshadow(ctx, px, py, w, h)
      ctx.fillStyle = '#fbf7ec'; ctx.fillRect(px + 3, py + 18, w - 6, h - 18)
      ctx.strokeStyle = '#5a5040'; ctx.lineWidth = 1.5; ctx.strokeRect(px + 3, py + 18, w - 6, h - 18)
      // roof
      poly(ctx, [[px, py + 19], [px + 7, py + 5], [px + w - 7, py + 5], [px + w, py + 19]], '#3d9a8a', '#1d5c52', 1.3)
      for (let x = px + 9; x < px + w - 7; x += 8) { ctx.fillStyle = '#2a7d70'; ctx.fillRect(x, py + 10, 2, 8) }
      // cross sign
      ctx.fillStyle = '#fff8e8'; ctx.fillRect(px + w / 2 - 8, py + 23, 16, 16)
      ctx.strokeStyle = '#3d9a8a'; ctx.strokeRect(px + w / 2 - 8, py + 23, 16, 16)
      ctx.fillStyle = '#e8573c'; ctx.fillRect(px + w / 2 - 2, py + 25, 4, 12); ctx.fillRect(px + w / 2 - 6, py + 29, 12, 4)
      // windows + door
      ctx.fillStyle = '#8be0dd'; ctx.fillRect(px + 7, py + 28, 12, 9)
      ctx.strokeStyle = '#3c5a4f'; ctx.strokeRect(px + 7, py + 28, 12, 9)
      ctx.fillStyle = '#3d9a8a'; ctx.fillRect(px + w - 19, py + 28, 12, 9)
      const dx = b.door.x * T - px
      ctx.fillStyle = '#2f7a80'; ctx.fillRect(px + dx + 3, py + h - 13, 11, 13)
      ctx.strokeStyle = '#1d5c52'; ctx.strokeRect(px + dx + 3, py + h - 13, 11, 13)
      ctx.fillStyle = '#f0c53d'; ctx.fillRect(px + dx + 11, py + h - 6, 1, 1)
      // plants
      ctx.fillStyle = '#4f9c3d'; ctx.beginPath(); ctx.arc(px + 8, py + h - 4, 3, 0, TAU); ctx.fill()
      ctx.fillStyle = '#c96b3e'; ctx.fillRect(px + 6, py + h - 3, 5, 3)
    },
    hut(ctx, b) {
      const px = b.x * T, py = b.y * T, w = b.w * T, h = b.h * T
      bshadow(ctx, px, py, w, h)
      ctx.fillStyle = '#8a5f3a'; ctx.fillRect(px + 4, py + 20, w - 8, h - 20)
      ctx.strokeStyle = '#5a3a22'; ctx.lineWidth = 1.4; ctx.strokeRect(px + 4, py + 20, w - 8, h - 20)
      for (let y = py + 26; y < py + h; y += 6) { ctx.strokeStyle = '#754b2c'; ctx.beginPath(); ctx.moveTo(px + 4, y); ctx.lineTo(px + w - 4, y); ctx.stroke() }
      // thatch roof
      poly(ctx, [[px - 3, py + 22], [px + 8, py + 2], [px + w - 8, py + 2], [px + w + 3, py + 22]], '#c9a04a', '#7a5a1e', 1.5)
      for (let i = 0; i < 5; i++) {
        const ry = py + 6 + i * 3.4
        ctx.strokeStyle = i % 2 ? '#b08a38' : '#dbb85f'; ctx.lineWidth = 1.4
        ctx.beginPath(); ctx.moveTo(px + 3 + i, ry); ctx.lineTo(px + w - 3 - i, ry); ctx.stroke()
      }
      // door
      const dx = b.door.x * T - px
      ctx.fillStyle = '#4f3018'; ctx.fillRect(px + dx + 3, py + h - 15, 10, 15)
      ctx.strokeStyle = '#2e1c0e'; ctx.strokeRect(px + dx + 3, py + h - 15, 10, 15)
      // window + lantern
      ctx.fillStyle = '#ffd45e'; ctx.fillRect(px + 8, py + 27, 7, 7)
      ctx.strokeStyle = '#7a5a1e'; ctx.strokeRect(px + 8, py + 27, 7, 7)
      ctx.fillStyle = '#ffb13d'; ctx.beginPath(); ctx.arc(px + w - 9, py + 29, 2.4, 0, TAU); ctx.fill()
      ctx.strokeStyle = '#5a3a22'; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.arc(px + w - 9, py + 29, 3.4, 0, TAU); ctx.stroke()
    },
    shrine(ctx, b) {
      const px = b.x * T, py = b.y * T, w = b.w * T, h = b.h * T
      ctx.fillStyle = '#9a9a8e'; ctx.fillRect(px + 2, py + 16, w - 4, h - 16)
      ctx.strokeStyle = '#5f635a'; ctx.strokeRect(px + 2, py + 16, w - 4, h - 16)
      for (let i = 0; i < 2; i++) ctx.fillRect(px + 8 + i * 16, py + 8, 7, 24)
      poly(ctx, [[px, py + 9], [px + w / 2, py - 2], [px + w, py + 9]], '#8a8f85', '#4a4f46', 1.3)
    }
  }

  function drawBuilding(ctx, b) {
    const fn = BUILDINGS[b.type]
    if (fn) fn(ctx, b)
  }

  // ---------------------------------------------------------------- people
  const STYLES = {
    hero: { skin: '#7c4a2b', hair: '#1b1410', shirt: '#79d457', shirt2: '#5cb43c', pants: '#d9b26a', shoe: '#4f3018', hairStyle: 'short', pack: '#e8573c' },
    professor: { skin: '#6b3f27', hair: '#e8e2d4', shirt: '#f7f0dd', shirt2: '#e6dcc5', pants: '#3c4a55', shoe: '#2a2a2a', hairStyle: 'afro', coat: true, glasses: true },
    marcia: { skin: '#8a5233', hair: '#2a1b14', shirt: '#f7e1b0', shirt2: '#f0d194', pants: '#a8523a', shoe: '#5a3a22', hairStyle: 'wrap', wrap: '#ff8a3d', apron: '#e8573c' },
    nurse: { skin: '#59341f', hair: '#1b1410', shirt: '#fff6e8', shirt2: '#f0e6d2', pants: '#fff6e8', shoe: '#e0d8c4', hairStyle: 'bun', cap: '#f25c5c' },
    elder: { skin: '#6d452c', hair: '#e8e2d4', shirt: '#7abf6a', shirt2: '#5f9c52', pants: '#8a7350', shoe: '#4f3018', hairStyle: 'bald', beard: '#efeadc', hat: 'straw' },
    kid: { skin: '#7b4a2e', hair: '#1b1410', shirt: '#f2c53d', shirt2: '#d9a92a', pants: '#3d7ac4', shoe: '#e8573c', hairStyle: 'short', cap: '#3d7ac4' },
    rasta: { skin: '#5a3421', hair: '#2a1b14', shirt: '#3a8a52', shirt2: '#2e6e42', pants: '#6b5a3a', shoe: '#3a2a1a', hairStyle: 'dreads', beanie: '#2f7a3e' },
    fisher: { skin: '#6f4229', hair: '#2a1b14', shirt: '#3d7ac4', shirt2: '#2f5f9c', pants: '#e8dcc0', shoe: '#4f3018', hairStyle: 'short', bucket: '#2f7a80' },
    carla: { skin: '#8a5a3b', hair: '#2a1b14', shirt: '#8a5ac4', shirt2: '#6d45a0', pants: '#3a2a50', shoe: '#2a1b30', hairStyle: 'bun', bandana: '#9a6fdc' },
    fern: { skin: '#6b4026', hair: '#2a1b14', shirt: '#3f8a3d', shirt2: '#2f6e30', pants: '#6b5a3a', shoe: '#3a2a1a', hairStyle: 'dreads', leafCrown: true, cloak: '#2f6e30' },
    finn: { skin: '#5e3a24', hair: '#2f7a80', shirt: '#2f7a80', shirt2: '#22606a', pants: '#2f7a80', shoe: '#1d4f54', hairStyle: 'short', scales: true },
    zeph: { skin: '#5a3520', hair: '#e8e2d4', shirt: '#33415f', shirt2: '#26334d', pants: '#26334d', shoe: '#1a2235', hairStyle: 'bald', beard: '#efeadc', cloak: '#33415f', storm: true },
    tourist: { skin: '#c98b63', hair: '#5a3a22', shirt: '#ff8a6b', shirt2: '#f26b4a', pants: '#f2e6c8', shoe: '#8a5f33', hairStyle: 'short', hat: 'sun' }
  }

  function rect(ctx, x, y, w, h, color) { ctx.fillStyle = color; ctx.fillRect(x, y, w, h) }
  function outlineRect(ctx, x, y, w, h, color, fill) {
    rect(ctx, x, y, w, h, color)
    rect(ctx, x + 1, y + 1, w - 2, h - 2, fill)
  }

  function person(ctx, style, dir, frame, px, py, scale) {
    const s = STYLES[style] || STYLES.hero
    if (style === 'goat') return drawGoat(ctx, dir, frame, px, py, scale)
    ctx.save()
    ctx.translate(px, py)
    ctx.scale(scale || 1, scale || 1)
    if (dir === 'left') ctx.scale(-1, 1)
    const side = dir === 'left' || dir === 'right'
    const step = frame % 2 === 0 ? 0 : 1
    const bob = frame % 2 === 0 ? 0 : -1
    const ink = '#24150f'
    // legs
    rect(ctx, -4, -7, 3, 5 + step, s.pants)
    rect(ctx, 1, -7, 3, 5 - step, s.pants)
    rect(ctx, -4, -3 + step, 3, 3, s.shoe)
    rect(ctx, 1, -3 - step, 3, 3, s.shoe)
    if (s.skin) { rect(ctx, -3, -2 + step, 2, 1, s.skin); rect(ctx, 1, -2 - step, 2, 1, s.skin) }
    // torso
    outlineRect(ctx, -6, -16 + bob, 12, 10, ink, s.shirt)
    rect(ctx, -5, -15 + bob, 10, 3, s.shirt2)
    if (s.apron) rect(ctx, -4, -12 + bob, 8, 6, s.apron)
    if (s.coat) { rect(ctx, -7, -15 + bob, 3, 9, s.shirt); rect(ctx, 4, -15 + bob, 3, 9, s.shirt) }
    if (s.cloak) { rect(ctx, -8, -16 + bob, 2, 12, s.cloak); rect(ctx, 6, -16 + bob, 2, 12, s.cloak) }
    if (s.pack) { rect(ctx, -9, -15 + bob, 3, 7, s.pack); rect(ctx, -10, -13 + bob, 1, 4, '#b83a28') }
    if (s.scales) { rect(ctx, -5, -14 + bob, 10, 1, '#4fbfc0'); rect(ctx, -5, -11 + bob, 10, 1, '#4fbfc0') }
    if (s.storm) { rect(ctx, -7, -11 + bob, 14, 1, '#ffe066') }
    // arms
    const swing = frame % 2 === 0 ? 1 : -1
    if (!side) {
      rect(ctx, -8, -15 + bob + (swing > 0 ? 1 : 0), 2, 6, s.shirt)
      rect(ctx, 6, -15 + bob + (swing < 0 ? 1 : 0), 2, 6, s.shirt)
      rect(ctx, -8, -9 + bob + (swing > 0 ? 1 : 0), 2, 2, s.skin)
      rect(ctx, 6, -9 + bob + (swing < 0 ? 1 : 0), 2, 2, s.skin)
    } else {
      rect(ctx, 4, -15 + bob + (swing > 0 ? 1 : 0), 2, 6, s.shirt)
      rect(ctx, 4, -9 + bob + (swing > 0 ? 1 : 0), 2, 2, s.skin)
      rect(ctx, -6, -15 + bob, 2, 5, s.shirt2)
    }
    // head
    const hy = -23 + bob
    outlineRect(ctx, -5, hy, 10, 8, ink, s.skin)
    if (dir === 'down') rect(ctx, -4, hy + 6, 8, 1, s.skin)
    // ears
    rect(ctx, -6, hy + 3, 1, 2, s.skin); rect(ctx, 5, hy + 3, 1, 2, s.skin)
    // hair / hats
    const hs = s.hairStyle
    if (hs === 'afro') {
      ctx.fillStyle = s.hair; ctx.beginPath(); ctx.arc(0, hy + 1, 6, Math.PI, TAU); ctx.fill()
      rect(ctx, -6, hy + 1, 1, 4, s.hair); rect(ctx, 5, hy + 1, 1, 4, s.hair)
    } else if (hs === 'short') {
      rect(ctx, -5, hy - 1, 10, 3, s.hair)
      rect(ctx, -5, hy + 1, 1, 2, s.hair); rect(ctx, 4, hy + 1, 1, 2, s.hair)
    } else if (hs === 'dreads') {
      rect(ctx, -5, hy - 1, 10, 3, s.hair)
      for (let i = 0; i < 5; i++) rect(ctx, -6 + i * 2.5, hy + 1, 1, 4 + (i % 2) * 2, s.hair)
    } else if (hs === 'bun') {
      rect(ctx, -5, hy - 1, 10, 3, s.hair)
      ctx.fillStyle = s.hair; ctx.beginPath(); ctx.arc(0, hy - 2, 2.6, 0, TAU); ctx.fill()
    } else if (hs === 'wrap') {
      rect(ctx, -6, hy - 2, 12, 4, s.wrap)
      rect(ctx, -6, hy - 3, 4, 3, s.wrap); rect(ctx, 2, hy - 4, 4, 3, s.wrap)
      rect(ctx, -6, hy + 1, 12, 1, '#d96b2e')
    } else if (hs === 'bald') {
      rect(ctx, -5, hy - 1, 10, 1, s.skin)
    }
    if (s.beanie) {
      rect(ctx, -5, hy - 2, 10, 3, s.beanie)
      rect(ctx, -5, hy - 3, 10, 1, '#f2c53d'); rect(ctx, -5, hy - 1, 2, 2, '#e8573c')
    }
    if (s.cap) {
      rect(ctx, -5, hy - 2, 10, 3, s.cap)
      rect(ctx, 2, hy + 1, 5, 1, s.cap)
    }
    if (s.bucket) {
      rect(ctx, -6, hy - 2, 12, 2, s.bucket); rect(ctx, -5, hy - 4, 10, 2, s.bucket)
    }
    if (s.bandana) {
      rect(ctx, -5, hy - 2, 10, 2, s.bandana)
    }
    if (s.hat === 'straw') {
      rect(ctx, -8, hy, 16, 2, '#d9b26a'); rect(ctx, -4, hy - 3, 8, 3, '#c9a15a')
      rect(ctx, -4, hy - 1, 8, 1, '#8a6410')
    }
    if (s.hat === 'sun') {
      rect(ctx, -9, hy + 1, 18, 2, '#f2e6c8'); rect(ctx, -5, hy - 3, 10, 4, '#f2e6c8')
      rect(ctx, -5, hy, 10, 1, '#e8573c')
    }
    if (s.cap && hs !== 'wrap') { /* cap covers hair */ }
    if (s.leafCrown) {
      for (let i = 0; i < 3; i++) { rect(ctx, -4 + i * 3, hy - 4, 3, 2, i % 2 ? '#5fae4a' : '#3f8a3d') }
    }
    // face
    if (dir !== 'up') {
      const ey = hy + 4
      if (side) {
        rect(ctx, 1, ey, 1, 1, ink)
        rect(ctx, -2, ey, 1, 1, '#c9a075')
      } else {
        rect(ctx, -3, ey, 1, 1, ink); rect(ctx, 2, ey, 1, 1, ink)
        rect(ctx, -4, ey + 2, 1, 1, '#e8a58a')
        rect(ctx, 3, ey + 2, 1, 1, '#e8a58a')
        if (dir === 'down') rect(ctx, -1, ey + 3, 2, 1, '#8a4a3a')
      }
      if (s.glasses) {
        rect(ctx, -4, ey - 1, 3, 2, '#3a4a5a'); rect(ctx, 1, ey - 1, 3, 2, '#3a4a5a')
        rect(ctx, -1, ey, 1, 1, '#3a4a5a')
      }
    }
    if (s.beard && dir !== 'up') {
      rect(ctx, -4, hy + 6, 8, 2, s.beard)
      rect(ctx, -2, hy + 8, 4, 2, s.beard)
    }
    if (s.cap && dir === 'down') rect(ctx, -5, hy - 1, 10, 1, '#2a3a5a')
    if (s.cap && dir === 'down') rect(ctx, 2, hy + 1, 5, 1, '#2a3a5a')
    // badge / necklace
    if (s.storm) { rect(ctx, -1, -14 + bob, 3, 2, '#ffe066') }
    ctx.restore()
  }

  function drawGoat(ctx, dir, frame, px, py, scale) {
    ctx.save(); ctx.translate(px, py); ctx.scale((scale || 1) * (dir === 'left' ? -1 : 1), scale || 1)
    const bob = frame % 2 ? -1 : 0
    // legs
    rect(ctx, -6, -4, 2, 4, '#c9a87e'); rect(ctx, -2, -4, 2, 4, '#c9a87e'); rect(ctx, 4, -4, 2, 4, '#c9a87e')
    rect(ctx, -6, -1, 2, 1, '#4a3a28'); rect(ctx, 4, -1, 2, 1, '#4a3a28')
    // body
    outlineRect(ctx, -8, -10 + bob, 15, 7, '#4a3a28', '#e9dcc0')
    rect(ctx, -7, -6 + bob, 13, 2, '#d2bd9b')
    // head
    outlineRect(ctx, 5, -14 + bob, 7, 6, '#4a3a28', '#f0e5cc')
    rect(ctx, 10, -10 + bob, 4, 2, '#e5d4b8')
    rect(ctx, -1, -13 + bob, 2, 3, '#c9a87e')
    rect(ctx, -4, -14 + bob, 4, 2, '#b99a6b')
    rect(ctx, 8, -15 + bob, 1, 1, '#2a1b14')
    rect(ctx, 12, -11 + bob, 1, 1, '#2a1b14')
    rect(ctx, 8, -9 + bob, 3, 1, '#efe7d6')
    // tail
    rect(ctx, -10, -9 + bob, 2, 2, '#e9dcc0')
    ctx.restore()
  }

  function drawPerson(ctx, style, dir, frame, px, py, scale) {
    person(ctx, style, dir, frame, px, py, scale || 1)
  }

  function drawPortrait(ctx, style, w, h) {
    ctx.clearRect(0, 0, w, h)
    ctx.fillStyle = '#2f6e62'; ctx.fillRect(0, 0, w, h)
    ctx.fillStyle = '#3a8a78'; ctx.beginPath(); ctx.arc(w / 2, h * 0.55, w * 0.45, 0, TAU); ctx.fill()
    ctx.fillStyle = '#7ac266'; ctx.beginPath(); ctx.ellipse(w / 2, h * 0.95, w * 0.5, h * 0.2, 0, 0, TAU); ctx.fill()
    if (style === 'drbird') {
      art.drawCreature(ctx, 'drbird', w / 2, h * 0.52, w * 0.9, 0.5, {})
    } else if (style === 'goat') {
      drawGoat(ctx, 'down', 0, w / 2 + 18, h - 4, 4.4)
    } else {
      person(ctx, STYLES[style] ? style : 'hero', 'down', 0, w / 2, h - 4, 3.4)
    }
  }

  art.drawTile = drawTile
  art.drawProp = drawProp
  art.drawBuilding = drawBuilding
  art.drawPerson = drawPerson
  art.drawPortrait = drawPortrait
  art.personStyles = STYLES
  art.propTypes = Object.keys(PROPS)
})(typeof globalThis !== 'undefined' ? globalThis : this)
