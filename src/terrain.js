import { clamp, fbm, lerp, smoothstep, noise2 } from './utils.js'

export const ISLAND_RADIUS = 128
export const SEA_LEVEL = 0

export const PATH_MAIN = [
  [8, 92], [12, 78], [18, 62], [25, 48], [28, 36], [21, 24], [8, 14], [-8, 6], [-22, -2], [-31, -9], [-40, -17], [-47, -25],
]
export const PATH_GROVE = [
  [28, 36], [24, 22], [20, 8], [14, -8], [9, -24], [5, -38], [1, -52], [-1, -61],
]
export const PATH_REEF = [
  [25, 48], [38, 45], [50, 40], [58, 31], [64, 20], [66, 10],
]

export const VILLAGE = { x: 28, z: 36, r: 25, y: 5.2 }
export const WATERFALL = { x: -31, z: -9, y: 10.2 }
export const SHRINE_NIAN = { x: -47, z: -25, r: 13, y: 17.2 }
export const SHRINE_BAKUNAWA = { x: 66, z: 10, r: 12, y: 4.2 }
export const SHRINE_QUETZAL = { x: 6, z: -36, r: 12, y: 7.4 }
export const SILK_TREE = { x: -2, z: -64, r: 18, y: 6.8 }

function gauss(x, z, cx, cz, radius) {
  const d2 = (x - cx) ** 2 + (z - cz) ** 2
  return Math.exp(-d2 / (2 * radius * radius))
}

function flatten(h, x, z, spec) {
  const d = Math.hypot(x - spec.x, z - spec.z)
  const t = 1 - smoothstep(spec.r * 0.35, spec.r, d)
  return lerp(h, spec.y, t * 0.94)
}

/** Analytic island height. The terrain mesh and all gameplay share this. */
export function terrainHeight(x, z) {
  const r = Math.hypot(x * 0.97, z * 1.03)
  let profile
  if (r < 78) profile = 6.2
  else if (r < 98) profile = lerp(6.2, 2.8, smoothstep(78, 98, r))
  else if (r < 116) profile = lerp(2.8, 0.35, smoothstep(98, 116, r))
  else profile = lerp(0.35, -8, smoothstep(116, 138, r))

  const inland = 1 - smoothstep(74, 114, r)
  const rolls = (fbm(x * 0.021 + 13.1, z * 0.021 - 8.7, 4) - 0.48) * 6.4
  const detail = (noise2(x * 0.075 - 4, z * 0.075 + 2) - 0.5) * 1.1
  const mountain = gauss(x, z, -46, -24, 27) * 19 + gauss(x, z, -25, -9, 12) * 5.5
  const ridge = gauss(x, z, 17, -55, 24) * 6.5 + gauss(x, z, 55, 38, 15) * 2.4
  let h = profile + (rolls + detail + mountain + ridge) * inland

  // Broad sandy shelf around the island.
  const shore = smoothstep(91, 108, r) * (1 - smoothstep(112, 126, r))
  h = lerp(h, 1.15, shore * 0.32)

  h = flatten(h, x, z, VILLAGE)
  h = flatten(h, x, z, { ...WATERFALL, r: 9 })
  h = flatten(h, x, z, SHRINE_NIAN)
  h = flatten(h, x, z, SHRINE_BAKUNAWA)
  h = flatten(h, x, z, SHRINE_QUETZAL)
  h = flatten(h, x, z, SILK_TREE)
  return h
}

export function getNormal(x, z) {
  const e = 0.8
  const hL = terrainHeight(x - e, z)
  const hR = terrainHeight(x + e, z)
  const hD = terrainHeight(x, z - e)
  const hU = terrainHeight(x, z + e)
  const nx = hL - hR
  const nz = hD - hU
  const ny = 2 * e
  const len = Math.hypot(nx, ny, nz) || 1
  return [nx / len, ny / len, nz / len]
}

export function slopeAt(x, z) {
  const [nx, ny, nz] = getNormal(x, z)
  return 1 - ny
}

export function isWater(x, z) {
  return terrainHeight(x, z) < 0.42
}

export function islandEdgeDistance(x, z) {
  return ISLAND_RADIUS - Math.hypot(x, z)
}

/** Sample a Catmull-Rom route and return evenly-ish spaced world points. */
export function samplePath(points, n = 180) {
  const out = []
  const p = (i) => points[clamp(i, 0, points.length - 1)]
  for (let i = 0; i < n; i++) {
    const t = (i / (n - 1)) * (points.length - 1)
    const seg = Math.floor(t)
    const u = t - seg
    const p0 = p(seg - 1), p1 = p(seg), p2 = p(seg + 1), p3 = p(seg + 2)
    const u2 = u * u, u3 = u2 * u
    const q = (a, b, c, d) => 0.5 * ((2 * b) + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u2 + (-a + 3 * b - 3 * c + d) * u3)
    const x = q(p0[0], p1[0], p2[0], p3[0])
    const z = q(p0[1], p1[1], p2[1], p3[1])
    out.push([x, terrainHeight(x, z) + 0.06, z])
  }
  return out
}

export const ZONES = [
  { id: 'beach', name: 'PIMENTO BEACH', x: 8, z: 86, r: 30, color: '#e8c98f' },
  { id: 'village', name: 'NINE MILE VILLAGE', x: 28, z: 36, r: 27, color: '#f2a65a' },
  { id: 'mountain', name: 'BLUE MOUNTAIN RISE', x: -35, z: -12, r: 40, color: '#6a9a4f' },
  { id: 'grove', name: 'SILK COTTON GROVE', x: 2, z: -46, r: 32, color: '#2f6e50' },
  { id: 'reef', name: 'LUMINOUS REEF', x: 62, z: 20, r: 30, color: '#79dcff' },
]

export function zoneAt(x, z) {
  let best = ZONES[0], bd = Infinity
  for (const zone of ZONES) {
    const d = Math.hypot(x - zone.x, z - zone.z)
    if (d < zone.r && d < bd) { bd = d; best = zone }
  }
  return best
}
