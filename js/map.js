/* GIGAMON: Island Spirits — island layout (pure data, testable in node) */
(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  else root.YD = Object.assign(root.YD || {}, { map: api })
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict'

  const W = 60
  const H = 44
  const TILE = 16
  const TOWN_SPAWN = { x: 33, y: 34 }

  function mulberry32(seed) {
    let a = seed >>> 0
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0
      let t = Math.imul(a ^ a >>> 15, 1 | a)
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
      return ((t ^ t >>> 14) >>> 0) / 4294967296
    }
  }

  function shoreY(x) {
    return 35 + Math.round(1.2 * Math.sin(x * 0.45) + 0.8 * Math.sin(x * 0.17 + 1.3))
  }

  function riverX(y) {
    return 21 + Math.round(Math.sin((y - 8) * 0.26) * 1.3) - Math.floor((y - 8) / 11)
  }

  const BUILDINGS = [
    { id: 'lab', type: 'lab', x: 27, y: 23, w: 5, h: 3, door: { x: 29, y: 25 }, label: 'PIMENTO LAB' },
    { id: 'market', type: 'market', x: 35, y: 23, w: 4, h: 3, door: { x: 36, y: 25 }, label: 'MARCIA MARKET' },
    { id: 'home', type: 'house', x: 23, y: 27, w: 4, h: 3, door: { x: 24, y: 29 }, label: 'SWEETWATER HOME' },
    { id: 'clinic', type: 'clinic', x: 41, y: 27, w: 4, h: 3, door: { x: 42, y: 29 }, label: 'HEALTH HUT' },
    { id: 'fern_hut', type: 'hut', x: 5, y: 21, w: 4, h: 3, door: { x: 6, y: 23 }, label: 'GROVE HUT' }
  ]

  const NPCS = [
    { id: 'pimento', name: 'Professor Pimento', role: 'professor', x: 29, y: 26, dir: 'down', style: 'professor' },
    { id: 'marcia', name: 'Marcia', role: 'shop', x: 36, y: 26, dir: 'down', style: 'marcia' },
    { id: 'orchid', name: 'Nurse Orchid', role: 'heal', x: 42, y: 30, dir: 'down', style: 'nurse' },
    { id: 'elder', name: 'Elder Bogle', role: 'lore', x: 34, y: 33, dir: 'down', style: 'elder' },
    { id: 'devon', name: 'Likkle Devon', role: 'tip', x: 27, y: 33, dir: 'right', style: 'kid' },
    { id: 'ray', name: 'Rasta Ray', role: 'trainer', trainer: 'ray', x: 15, y: 30, dir: 'down', style: 'rasta' },
    { id: 'jomo', name: 'Fisher Jomo', role: 'trainer', trainer: 'jomo', x: 47, y: 34, dir: 'left', style: 'fisher' },
    { id: 'carla', name: 'Cockpit Carla', role: 'trainer', trainer: 'carla', x: 29, y: 9, dir: 'right', style: 'carla' },
    { id: 'fern', name: 'Warden Fern', role: 'warden', trainer: 'fern', badge: 'fern', x: 9, y: 24, dir: 'down', style: 'fern' },
    { id: 'finn', name: 'Warden Finn', role: 'warden', trainer: 'finn', badge: 'finn', x: 53, y: 39, dir: 'up', style: 'finn' },
    { id: 'zeph', name: 'Elder Zeph', role: 'warden', trainer: 'zeph', badge: 'zeph', x: 33, y: 15, dir: 'down', style: 'zeph', afterPos: { x: 32, y: 16 } },
    { id: 'drbird', name: 'Dr. Bird', role: 'legendary', x: 38, y: 4, dir: 'down', style: 'drbird', hidden: true },
    { id: 'goat', name: 'Yard Goat', role: 'goat', x: 49, y: 29, dir: 'left', style: 'goat' },
    { id: 'tourist', name: 'Auntie Pearl', role: 'lore', x: 38, y: 35, dir: 'down', style: 'tourist' }
  ]

  const SIGNS = [
    { id: 'sign_town', x: 26, y: 30, label: 'Sweetwater Bay', text: 'SWEETWATER BAY — Population: friendly. Mind the goats.' },
    { id: 'sign_bridge', x: 20, y: 30, label: 'Bridge', text: 'Bamboo Grove, west. Coral Shore, east. Blue Mountain, north.' },
    { id: 'sign_mountain', x: 34, y: 17, label: 'Trail', text: 'BLUE MOUNTAIN TRAIL. Warden Zeph guards the pass. Two badges required.' },
    { id: 'sign_beach', x: 45, y: 34, label: 'Shore', text: 'CORAL SHORE. Swim only where the tide says yes.' }
  ]

  function createWorld(seed) {
    seed = seed || 7719
    const rng = mulberry32(seed)
    const tiles = []
    for (let y = 0; y < H; y++) {
      const row = []
      for (let x = 0; x < W; x++) row.push('grass')
      tiles.push(row)
    }

    const set = (x, y, t) => {
      if (x < 0 || y < 0 || x >= W || y >= H) return
      tiles[y][x] = t
    }
    const get = (x, y) => (x < 0 || y < 0 || x >= W || y >= H) ? 'cliff' : tiles[y][x]

    // Forest floor
    for (let y = 8; y < H; y++) {
      for (let x = 0; x < 20; x++) {
        if (y > shoreY(x) - 1) continue
        set(x, y, 'forest')
      }
    }

    // Meadow around town and east
    for (let y = 16; y < 34; y++) {
      for (let x = 20; x < W; x++) {
        if (y > shoreY(x) - 1) continue
        if (y > 22 || x > 31) set(x, y, 'meadow')
      }
    }

    // Mountain plateau
    for (let y = 0; y < 15; y++) {
      for (let x = 0; x < W; x++) {
        set(x, y, y < 3 ? 'cliff' : 'mountain')
      }
    }
    // mountain edge cliffs on the west/east shoulders
    for (let y = 3; y < 15; y++) {
      if (y < 7 || y > 12) {
        set(0, y, 'cliff'); set(1, y, 'cliff')
        set(W - 1, y, 'cliff'); set(W - 2, y, 'cliff')
      }
    }

    // Beach and sea
    for (let x = 0; x < W; x++) {
      const shore = shoreY(x)
      for (let y = shore; y < H; y++) {
        if (y < shore + 2) set(x, y, 'sand')
        else if (y < shore + 3) set(x, y, 'shallow')
        else set(x, y, 'deep')
      }
    }

    // Dock over the water
    const dockTop = shoreY(53) - 1
    for (let y = dockTop; y <= 40; y++) {
      for (let x = 52; x <= 54; x++) set(x, y, 'dock')
    }
    // little platform at pier end
    for (let x = 51; x <= 55; x++) for (let y = 39; y <= 40; y++) set(x, y, 'dock')

    // River + waterfall
    for (let y = 8; y < H; y++) {
      if (y >= shoreY(riverX(y))) break
      const rx = riverX(y)
      set(rx, y, 'shallow')
      set(rx + 1, y, 'shallow')
    }
    for (let y = 6; y <= 9; y++) set(riverX(9) - 1, y, 'waterfall')

    // Peak platform
    for (let y = 4; y <= 6; y++) for (let x = 36; x <= 40; x++) set(x, y, 'peak')
    for (let x = 35; x <= 41; x++) set(x, 3, 'cliff')
    for (let y = 4; y <= 6; y++) { set(35, y, 'cliff'); set(41, y, 'cliff') }

    // Tall grass patches (only on natural ground)
    const patches = [
      [12, 19, 4, 3], [7, 27, 3, 2], [15, 13, 3, 2], [4, 32, 2, 2],
      [43, 21, 4, 3], [25, 20, 3, 2], [39, 18, 3, 2], [23, 24, 2, 2],
      [27, 9, 3, 2], [24, 12, 2, 2], [31, 7, 3, 2], [36, 8, 3, 2],
      [44, 36, 2, 1], [13, 34, 2, 1], [30, 35, 2, 1], [49, 37, 1, 1]
    ]
    for (const [cx, cy, rx, ry] of patches) {
      for (let y = cy - ry; y <= cy + ry; y++) {
        for (let x = cx - rx; x <= cx + rx; x++) {
          if (!get(x, y).match(/^(grass|forest|meadow|mountain|sand)$/)) continue
          const dx = (x - cx) / (rx + 0.4), dy = (y - cy) / (ry + 0.4)
          if (dx * dx + dy * dy <= 1) set(x, y, 'tallgrass')
        }
      }
    }

    // Plaza
    for (let y = 27; y <= 34; y++) {
      for (let x = 28; x <= 40; x++) set(x, y, 'plaza')
    }
    // Farm soil
    for (let y = 21; y <= 25; y++) {
      for (let x = 46; x <= 51; x++) set(x, y, 'soil')
    }

    const carve = (points, width) => {
      for (let i = 0; i < points.length - 1; i++) {
        let [x0, y0] = points[i]
        const [x1, y1] = points[i + 1]
        const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0))
        for (let s = 0; s <= steps; s++) {
          const x = Math.round(x0 + (x1 - x0) * s / steps)
          const y = Math.round(y0 + (y1 - y0) * s / steps)
          for (let ox = 0; ox < width; ox++) {
            if (get(x + ox, y) === 'deep' || get(x + ox, y) === 'shallow') continue
            set(x + ox, y, 'path')
          }
        }
      }
    }

    // Main roads
    carve([[33, 34], [33, 27], [32, 26], [32, 16]], 2)
    carve([[28, 31], [20, 31], [17, 31], [15, 29], [12, 27], [9, 26]], 1)
    carve([[40, 31], [43, 31], [43, 34], [51, 34]], 1)
    carve([[33, 34], [33, 35], [33, 36]], 1)
    carve([[52, 34], [52, 35]], 1)
    // Mountain trail
    carve([[33, 16], [33, 14], [31, 12], [28, 11], [28, 9], [31, 8], [35, 7], [37, 7], [37, 6]], 1)
    // The narrow gate
    set(32, 15, 'cliff')
    set(34, 15, 'cliff')
    set(33, 15, 'path')

    // River bridge at the west road
    for (let y = 30; y <= 32; y++) {
      for (let x = 16; x <= 22; x++) {
        if (get(x, y) === 'shallow') set(x, y, 'bridge')
      }
    }
    // ensure bridge reaches the banks
    for (let x = 16; x <= 22; x++) set(x, 31, 'bridge')

    // Building footprints get their base cleared to plaza/meadow dirt
    for (const b of BUILDINGS) {
      for (let y = b.y; y < b.y + b.h; y++) {
        for (let x = b.x; x < b.x + b.w; x++) {
          if (get(x, y) !== 'path') set(x, y, get(x, y) === 'sand' ? 'sand' : 'meadow')
        }
      }
    }

    // ---------- Props ----------
    const props = []
    const propAt = new Set()
    const reserved = new Set()
    const reserve = (x, y, r = 1) => {
      for (let yy = y - r; yy <= y + r; yy++) for (let xx = x - r; xx <= x + r; xx++) reserved.add(xx + ',' + yy)
    }
    for (const b of BUILDINGS) {
      for (let yy = b.y - 1; yy <= b.y + b.h; yy++) {
        for (let xx = b.x - 1; xx <= b.x + b.w; xx++) reserved.add(xx + ',' + yy)
      }
    }
    for (const n of NPCS) reserve(n.x, n.y, 1)
    for (const s of SIGNS) reserve(s.x, s.y, 1)
    reserve(TOWN_SPAWN.x, TOWN_SPAWN.y, 2)
    // keep the plaza and key wide paths clean
    for (let y = 27; y <= 34; y++) for (let x = 28; x <= 40; x++) reserved.add(x + ',' + y)

    const natural = new Set(['grass', 'forest', 'meadow', 'mountain', 'sand'])
    const occupied = (x, y) => propAt.has(x + ',' + y) || reserved.has(x + ',' + y)
    const canPlace = (x, y, allowSand) => {
      if (x < 1 || y < 1 || x >= W - 1 || y >= H - 1) return false
      const t = get(x, y)
      if (t === 'sand' && !allowSand) return false
      if (!natural.has(t)) return false
      if (occupied(x, y)) return false
      return true
    }
    const addProp = (type, x, y, solid) => {
      props.push({ type, x, y, solid })
      if (solid) propAt.add(x + ',' + y)
    }

    // Palms along the shore
    for (let x = 1; x < W - 1; x++) {
      const sy = shoreY(x)
      for (let y = sy - 4; y <= sy - 1; y++) {
        if (rng() < 0.16 && canPlace(x, y, true)) addProp('palm', x, y, true)
      }
    }
    // Forest: bamboo and broadleaf
    for (let i = 0; i < 900; i++) {
      const x = 1 + Math.floor(rng() * 19)
      const y = 8 + Math.floor(rng() * 28)
      if (!canPlace(x, y, false)) continue
      if (rng() < 0.62) addProp('bamboo', x, y, true)
      else if (rng() < 0.78) addProp('broadleaf', x, y, true)
      else if (rng() < 0.9) addProp('fern', x, y, false)
    }
    // Meadow trees and flowers
    for (let i = 0; i < 420; i++) {
      const x = 20 + Math.floor(rng() * (W - 21))
      const y = 15 + Math.floor(rng() * 22)
      if (!canPlace(x, y, false)) continue
      const roll = rng()
      if (roll < 0.2) addProp('broadleaf', x, y, true)
      else if (roll < 0.33) addProp('palm', x, y, true)
      else if (roll < 0.37) addProp('rock', x, y, true)
      else if (roll < 0.75) addProp('flower', x, y, false)
      else if (roll < 0.85) addProp('bush', x, y, true)
    }
    // Mountain pines and boulders
    for (let i = 0; i < 420; i++) {
      const x = 2 + Math.floor(rng() * (W - 4))
      const y = 3 + Math.floor(rng() * 12)
      if (!canPlace(x, y, false)) continue
      const roll = rng()
      if (roll < 0.4) addProp('pine', x, y, true)
      else if (roll < 0.66) addProp('rock', x, y, true)
      else if (roll < 0.92) addProp('mountainflower', x, y, false)
    }
    // Beach details
    for (let x = 1; x < W - 1; x++) {
      const sy = shoreY(x)
      for (let y = sy; y <= sy + 1; y++) {
        if (rng() < 0.07 && canPlace(x, y, true)) addProp('driftwood', x, y, false)
        else if (rng() < 0.05 && canPlace(x, y, true)) addProp('shell', x, y, false)
      }
    }
    // Farm bananas and scarecrow
    for (const [x, y] of [[47, 22], [50, 22], [47, 24], [50, 24], [48, 25], [51, 25]]) {
      props.push({ type: 'banana', x, y, solid: true })
      propAt.add(x + ',' + y)
    }
    // Hand-placed landmark props
    const landmarks = [
      { type: 'well', x: 36, y: 31, w: 2, h: 2, solid: true, interact: 'well' },
      { type: 'spring', x: 3, y: 29, w: 2, h: 2, solid: true, interact: 'spring' },
      { type: 'mango', x: 44, y: 24, solid: true, interact: 'mango' },
      { type: 'crate', x: 54, y: 37, solid: true, interact: 'crate' },
      { type: 'firepit', x: 10, y: 25, solid: true },
      { type: 'flag', x: 40, y: 5, solid: true },
      { type: 'scarecrow', x: 48, y: 23, solid: true },
      { type: 'boat', x: 48, y: 36, solid: true },
      { type: 'stump', x: 18, y: 25, solid: true }
    ]
    const interactables = []
    for (const lm of landmarks) {
      const w = lm.w || 1, h = lm.h || 1
      props.push({ type: lm.type, x: lm.x, y: lm.y, w, h, solid: lm.solid })
      for (let yy = 0; yy < h; yy++) for (let xx = 0; xx < w; xx++) {
        if (lm.solid) propAt.add((lm.x + xx) + ',' + (lm.y + yy))
      }
      if (lm.interact) {
        interactables.push({ id: lm.interact, type: lm.interact, x: lm.x, y: lm.y, w, h, label: lm.type })
      }
    }
    for (const s of SIGNS) {
      props.push({ type: 'sign', x: s.x, y: s.y, solid: true, label: s.label })
      propAt.add(s.x + ',' + s.y)
      interactables.push({ id: s.id, type: 'sign', x: s.x, y: s.y, w: 1, h: 1, text: s.text, label: s.label })
    }

    // buildings are solid, doors interactable
    const buildingSolid = new Set()
    for (const b of BUILDINGS) {
      for (let y = b.y; y < b.y + b.h; y++) {
        for (let x = b.x; x < b.x + b.w; x++) buildingSolid.add(x + ',' + y)
      }
      interactables.push({ id: 'door_' + b.id, type: 'door', x: b.door.x, y: b.door.y, building: b, label: b.label })
    }

    const solidTiles = new Set(['deep', 'shallow', 'waterfall', 'cliff'])
    const solidCache = new Map()

    function terrainSolid(x, y) {
      if (x < 0 || y < 0 || x >= W || y >= H) return true
      return solidTiles.has(tiles[y][x])
    }
    function isSolid(x, y) {
      if (x < 0 || y < 0 || x >= W || y >= H) return true
      const key = x + ',' + y
      if (solidCache.has(key)) return solidCache.get(key)
      const t = tiles[y][x]
      let solid = solidTiles.has(t) || propAt.has(key) || buildingSolid.has(key)
      solidCache.set(key, solid)
      return solid
    }

    function zoneAt(x, y) {
      if (y <= 7) return 'peak'
      if (y <= 15) return 'mountain'
      if (x <= 19 && y >= 8) return 'forest'
      if (x >= 21 && x <= 42 && y >= 25 && y <= 35) return 'town'
      if (y >= shoreY(x) - 2) return 'beach'
      if (x >= 44 && y >= 17 && y <= 27) return 'meadow'
      return 'meadow'
    }

    function placeFree(x, y, prefer) {
      const dirs = prefer || [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
      for (const [dx, dy] of dirs) {
        const nx = x + dx, ny = y + dy
        if (!terrainSolid(nx, ny) && !propAt.has(nx + ',' + ny) && !buildingSolid.has(nx + ',' + ny)) return { x: nx, y: ny }
      }
      return null
    }

    // Make sure NPCs and spawn are on walkable ground, nudging if needed.
    for (const n of NPCS) {
      if (isSolid(n.x, n.y) || n.x <= 0 || n.y <= 0) {
        const spot = placeFree(n.x, n.y)
        if (spot) { n.x = spot.x; n.y = spot.y }
      }
    }
    if (isSolid(TOWN_SPAWN.x, TOWN_SPAWN.y)) {
      const spot = placeFree(TOWN_SPAWN.x, TOWN_SPAWN.y)
      if (spot) { TOWN_SPAWN.x = spot.x; TOWN_SPAWN.y = spot.y }
    }

    function npcAt(x, y) {
      return NPCS.find(n => n.x === x && n.y === y) || null
    }
    function interactableAt(x, y) {
      return interactables.find(o => {
        if (o.type === 'door') return o.x === x && o.y === y
        const w = o.w || 1, h = o.h || 1
        return x >= o.x && x < o.x + w && y >= o.y && y < o.y + h
      }) || null
    }
    function walkable(x, y) {
      return !isSolid(x, y)
    }
    function tileAt(x, y) {
      if (x < 0 || y < 0 || x >= W || y >= H) return 'cliff'
      return tiles[y][x]
    }
    function tallGrassAt(x, y) {
      return tileAt(x, y) === 'tallgrass'
    }

    return {
      W, H, TILE, tiles, props, buildings: BUILDINGS, npcs: NPCS, signs: SIGNS,
      interactables, spawn: TOWN_SPAWN, shoreY, riverX,
      isSolid, terrainSolid, walkable, zoneAt, tileAt, tallGrassAt,
      npcAt, interactableAt, placeFree,
      buildingAt(x, y) { return BUILDINGS.find(b => x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) || null }
    }
  }

  return { W, H, TILE, createWorld, shoreY, riverX, TOWN_SPAWN }
})
