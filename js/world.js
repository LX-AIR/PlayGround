/* GIGAMON: Island Spirits — world renderer */
(function (root) {
  'use strict'
  const YD = root.YD = root.YD || {}
  const T = 16

  class WorldView {
    constructor(canvas, world) {
      this.canvas = canvas
      this.ctx = canvas.getContext('2d')
      this.world = world
      this.static = document.createElement('canvas')
      this.static.width = world.W * T
      this.static.height = world.H * T
      this.prerender()
      this.viewW = canvas.width
      this.viewH = canvas.height
    }

    prerender() {
      const ctx = this.static.getContext('2d')
      const world = this.world
      ctx.imageSmoothingEnabled = false
      ctx.fillStyle = '#2f7a6c'
      ctx.fillRect(0, 0, this.static.width, this.static.height)
      for (let y = 0; y < world.H; y++) {
        for (let x = 0; x < world.W; x++) {
          YD.art.drawTile(ctx, world.tiles[y][x], x, y, world)
        }
      }
      const layers = []
      for (const p of world.props) {
        const h = p.h || 1
        layers.push({ kind: 'prop', item: p, sort: (p.y + h - 1) * T + T })
      }
      for (const b of world.buildings) {
        layers.push({ kind: 'building', item: b, sort: (b.y + b.h) * T })
      }
      layers.sort((a, b) => a.sort - b.sort)
      for (const layer of layers) {
        if (layer.kind === 'prop') YD.art.drawProp(ctx, layer.item, world, 0)
        else YD.art.drawBuilding(ctx, layer.item)
      }
      this.layers = layers
    }

    resize(w, h) {
      this.viewW = w
      this.viewH = h
    }

    render(camera, entities, time) {
      const ctx = this.ctx
      const vw = this.canvas.width, vh = this.canvas.height
      const world = this.world
      const maxX = Math.max(0, world.W * T - vw)
      const maxY = Math.max(0, world.H * T - vh)
      const cx = Math.round(Math.min(maxX, Math.max(0, camera.x - vw / 2)))
      const cy = Math.round(Math.min(maxY, Math.max(0, camera.y - vh / 2)))

      ctx.imageSmoothingEnabled = false
      ctx.clearRect(0, 0, vw, vh)
      ctx.drawImage(this.static, cx, cy, vw, vh, 0, 0, vw, vh)

      this.drawWater(ctx, cx, cy, vw, vh, time)
      this.drawGrass(ctx, cx, cy, vw, vh, time)

      // ambient fireflies near the grove
      if (cx < 400) {
        for (let i = 0; i < 10; i++) {
          const fx = ((i * 97 + Math.sin(time * 0.6 + i) * 22) % 380)
          const fy = 150 + ((i * 61) % 380) + Math.cos(time * 0.9 + i * 1.4) * 9
          if (fx < cx - 10 || fx > cx + vw + 10 || fy < cy - 10 || fy > cy + vh + 10) continue
          const a = 0.3 + Math.sin(time * 3 + i) * 0.3
          if (a <= 0.05) continue
          YD.art._.sparkle(ctx, fx - cx, fy - cy, 1.4, '#fff2a0', a)
        }
      }

      // entities sorted by feet
      const list = entities.slice().sort((a, b) => (a.py || 0) - (b.py || 0))
      for (const e of list) {
        const sx = Math.round(e.px - cx), sy = Math.round(e.py - cy)
        if (sx < -40 || sy < -50 || sx > vw + 40 || sy > vh + 40) continue
        if (e.kind === 'player' || e.kind === 'npc') {
          ctx.save(); ctx.globalAlpha = 0.2; ctx.fillStyle = '#10281a'
          ctx.beginPath(); ctx.ellipse(sx, sy - 1, 8, 2.6, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore()
          if (e.kind === 'player') {
            YD.art.drawPerson(ctx, 'hero', e.dir, e.frame, sx, sy, 1)
          } else if (e.style === 'drbird') {
            const float = Math.sin(time * 2) * 3
            for (let i = 0; i < 3; i++) {
              const a = time * 2 + i * 2
              YD.art._.sparkle(ctx, sx + Math.cos(a) * 18, sy - 18 + Math.sin(a) * 12, 2, '#fff2a0', 0.8)
            }
            YD.art.drawCreature(ctx, 'drbird', sx, sy - 18 + float, 32, time, { flip: false })
          } else if (e.style === 'goat') {
            YD.art.drawPerson(ctx, 'goat', e.dir, 0, sx, sy, 1)
          } else {
            YD.art.drawPerson(ctx, e.style || 'hero', e.dir || 'down', e.frame || 0, sx, sy + (e.kind === 'npc' ? Math.sin(time * 2 + e.px) * 0.5 : 0), 1)
          }
        }
      }

      // gentle top/bottom fade for HUD readability
      const top = ctx.createLinearGradient(0, 0, 0, 42)
      top.addColorStop(0, 'rgba(8,35,30,.28)')
      top.addColorStop(1, 'rgba(8,35,30,0)')
      ctx.fillStyle = top; ctx.fillRect(0, 0, vw, 42)
    }

    drawWater(ctx, cx, cy, vw, vh, time) {
      const world = this.world
      const x0 = Math.max(0, Math.floor(cx / T)), x1 = Math.min(world.W - 1, Math.ceil((cx + vw) / T))
      const y0 = Math.max(0, Math.floor(cy / T)), y1 = Math.min(world.H - 1, Math.ceil((cy + vh) / T))
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          const t = world.tiles[y][x]
          if (t !== 'shallow' && t !== 'deep' && t !== 'waterfall') continue
          const px = x * T - cx, py = y * T - cy
          const phase = time * 1.4 + (x * 1.7 + y * 0.9)
          const a = 0.3 + Math.sin(phase) * 0.22
          ctx.strokeStyle = t === 'deep' ? 'rgba(150,230,235,.5)' : 'rgba(220,255,248,.65)'
          ctx.lineWidth = 1
          ctx.beginPath()
          const ox = Math.round(Math.sin(phase) * 2)
          ctx.moveTo(px + 3 + ox, py + 5 + (y % 3))
          ctx.lineTo(px + 8 + ox, py + 5 + (y % 3))
          ctx.stroke()
          if ((x + y) % 3 === 0) {
            ctx.globalAlpha = a
            ctx.beginPath(); ctx.moveTo(px + 9, py + 12); ctx.lineTo(px + 13, py + 12); ctx.stroke()
            ctx.globalAlpha = 1
          }
          if (t === 'deep' && (x * 7 + y * 3) % 11 === 0) {
            ctx.fillStyle = 'rgba(255,255,255,.35)'
            ctx.fillRect(px + 6, py + 10, 1, 1)
          }
          if (t === 'waterfall') {
            ctx.fillStyle = 'rgba(255,255,255,.45)'
            for (let i = 0; i < 2; i++) {
              const yy = (time * 34 + i * 9 + y * 5) % 16
              ctx.fillRect(px + 4 + i * 6, py + yy, 2, 5)
            }
          }
        }
      }
    }

    drawGrass(ctx, cx, cy, vw, vh, time) {
      const world = this.world
      const x0 = Math.max(0, Math.floor(cx / T)), x1 = Math.min(world.W - 1, Math.ceil((cx + vw) / T))
      const y0 = Math.max(0, Math.floor(cy / T)), y1 = Math.min(world.H - 1, Math.ceil((cy + vh) / T))
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          if (world.tiles[y][x] !== 'tallgrass') continue
          const px = x * T - cx, py = y * T - cy
          const sw = Math.sin(time * 1.8 + x * 1.3 + y * 0.7) * 1.6
          ctx.strokeStyle = '#2f6f34'; ctx.lineWidth = 1.2
          ctx.beginPath(); ctx.moveTo(px + 4, py + 14); ctx.quadraticCurveTo(px + 4 + sw * 0.4, py + 8, px + 4 + sw, py + 3); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(px + 11, py + 15); ctx.quadraticCurveTo(px + 11 + sw * 0.5, py + 9, px + 11 + sw, py + 4); ctx.stroke()
          ctx.fillStyle = '#9ad66f'
          ctx.fillRect(px + 4 + Math.round(sw), py + 2, 1, 2)
          ctx.fillRect(px + 11 + Math.round(sw), py + 3, 1, 2)
        }
      }
    }
  }

  YD.WorldView = WorldView
})(typeof globalThis !== 'undefined' ? globalThis : this)
