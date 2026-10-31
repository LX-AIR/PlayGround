import * as THREE from 'three'

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
export const lerp = (a, b, t) => a + (b - a) * t
export const invLerp = (a, b, v) => clamp((v - a) / (b - a), 0, 1)
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt))
export const mod = (n, m) => ((n % m) + m) % m
export const TAU = Math.PI * 2

export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1)
  return t * t * (3 - 2 * t)
}

export function angleLerp(a, b, t) {
  let d = mod(b - a + Math.PI, TAU) - Math.PI
  return a + d * t
}

export function angleDelta(a, b) {
  return mod(b - a + Math.PI, TAU) - Math.PI
}

export function hash2(x, y) {
  let h = x * 374761393 + y * 668265263
  h = (h ^ (h >> 13)) * 1274126177
  h = h ^ (h >> 16)
  return (h >>> 0) / 4294967295
}

function smoothNoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y)
  const fx = x - ix, fy = y - iy
  const ux = fx * fx * (3 - 2 * fx)
  const uy = fy * fy * (3 - 2 * fy)
  const a = hash2(ix, iy), b = hash2(ix + 1, iy)
  const c = hash2(ix, iy + 1), d = hash2(ix + 1, iy + 1)
  return lerp(lerp(a, b, ux), lerp(c, d, ux), uy)
}

export function noise2(x, y) {
  let value = 0, amp = 0.5, freq = 1
  for (let i = 0; i < 4; i++) {
    value += smoothNoise(x * freq, y * freq) * amp
    amp *= 0.5
    freq *= 2.02
  }
  return value
}

export function fbm(x, y, octaves = 4) {
  let value = 0, amp = 0.5, freq = 1, norm = 0
  for (let i = 0; i < octaves; i++) {
    value += smoothNoise(x * freq, y * freq) * amp
    norm += amp
    amp *= 0.5
    freq *= 2.03
  }
  return value / norm
}

export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function range(rng, a, b) { return a + (b - a) * rng() }

export function pick(rng, arr) { return arr[Math.floor(rng() * arr.length)] }

export function dist2D(ax, az, bx, bz) {
  return Math.hypot(ax - bx, az - bz)
}

export function radialTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 128, stops = null) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  if (stops) stops.forEach(([p, c]) => g.addColorStop(p, c))
  else { g.addColorStop(0, inner); g.addColorStop(0.45, inner); g.addColorStop(1, outer) }
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function grainTexture(size = 256, repeat = 50, strength = 26) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const img = ctx.createImageData(size, size)
  for (let i = 0; i < size * size; i++) {
    const n = 128 + (Math.random() - 0.5) * strength * 2
    img.data[i * 4] = n
    img.data[i * 4 + 1] = n
    img.data[i * 4 + 2] = n
    img.data[i * 4 + 3] = 255
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeat, repeat)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function cloudTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size; canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, size, size)
  for (let i = 0; i < 26; i++) {
    const x = size * 0.5 + (Math.random() - 0.5) * size * 0.72
    const y = size * 0.55 + (Math.random() - 0.5) * size * 0.3
    const r = size * (0.08 + Math.random() * 0.18)
    const g = ctx.createRadialGradient(x, y, 0, x, y, r)
    g.addColorStop(0, 'rgba(255,244,224,0.42)')
    g.addColorStop(0.6, 'rgba(255,238,214,0.18)')
    g.addColorStop(1, 'rgba(255,238,214,0)')
    ctx.fillStyle = g
    ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function leafTexture() {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size; canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, size, size)
  ctx.fillStyle = '#fff'
  for (let i = 0; i < 12; i++) {
    const x = 24 + Math.random() * 80
    const y = 10 + Math.random() * 34
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate((Math.random() - 0.5) * 0.9)
    ctx.beginPath()
    ctx.ellipse(0, 0, 3.5, 17 + Math.random() * 10, 0, 0, TAU)
    ctx.fill()
    ctx.restore()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export function makeMat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.02, flatShading: true, ...opts })
}

export function mesh(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat)
  m.position.set(x, y, z)
  return m
}

export function capsule(r, len, seg = 5) {
  return new THREE.CapsuleGeometry(r, len, seg, seg * 2)
}

export function sphere(r, seg = 10, detail = 0) {
  return new THREE.SphereGeometry(r, seg, Math.max(4, Math.floor(seg * 0.7)))
}

export function circleSprite(color, size = 1, opacity = 1) {
  const tex = radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)', 128, [
    [0, 'rgba(255,255,255,1)'], [0.25, 'rgba(255,255,255,.9)'], [0.55, 'rgba(255,255,255,.25)'], [1, 'rgba(255,255,255,0)'],
  ])
  const mat = new THREE.SpriteMaterial({ map: tex, color, blending: THREE.AdditiveBlending, transparent: true, opacity, depthWrite: false })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.setScalar(size)
  return sprite
}

export function glowSprite(color, size = 2, opacity = 0.8) {
  return circleSprite(color, size, opacity)
}

export function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function canvasPortrait(renderer, sceneFactory, size = 192) {
  const renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })
  renderer2.setSize(size, size)
  renderer2.setPixelRatio(1)
  renderer2.outputColorSpace = THREE.SRGBColorSpace
  renderer2.toneMapping = THREE.ACESFilmicToneMapping
  renderer2.toneMappingExposure = 1.15
  renderer2.setClearColor(0x000000, 0)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  scene.add(new THREE.HemisphereLight(0xcfe9ff, 0x203a2c, 2.2))
  const key = new THREE.DirectionalLight(0xffdca8, 3.2)
  key.position.set(3, 5, 4)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0x5fffd0, 2)
  rim.position.set(-4, 2, -4)
  scene.add(rim)
  const obj = sceneFactory()
  scene.add(obj)
  // Frame the actual body meshes. Sprites (auras, glows) inflate the bounds
  // far beyond the silhouette and leave the portrait lost in empty space.
  const box = new THREE.Box3()
  obj.updateWorldMatrix(true, true)
  obj.traverse(o => {
    if (!o.isMesh || o.isSprite || !o.geometry) return
    if (!o.geometry.boundingBox) o.geometry.computeBoundingBox()
    if (o.geometry.boundingBox) box.union(o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld))
  })
  if (box.isEmpty()) box.setFromObject(obj)
  const center = box.getCenter(new THREE.Vector3())
  const sphereBox = box.getBoundingSphere(new THREE.Sphere())
  const radius = Math.max(0.4, sphereBox.radius)
  camera.position.set(center.x + radius * 1.55, center.y + radius * 0.7, center.z + radius * 2.3)
  camera.lookAt(center)
  camera.position.multiplyScalar(1)
  const dist = (radius / Math.sin(THREE.MathUtils.degToRad(15))) * 0.86
  const dir = new THREE.Vector3(0.42, 0.28, 1).normalize()
  camera.position.copy(center).addScaledVector(dir, dist)
  camera.lookAt(center)
  renderer2.render(scene, camera)
  const data = renderer2.domElement.toDataURL('image/png')
  renderer2.dispose()
  // Procedural models share their geometry with the rest of the game, so
  // only the renderer and the temporary scene reference are released here.
  return data
}
