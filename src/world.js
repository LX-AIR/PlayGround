import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import {
  TAU, clamp, cloudTexture, fbm, glowSprite, grainTexture, hash2, leafTexture,
  lerp, mulberry32, noise2, radialTexture, range, smoothstep,
} from './utils.js'
import {
  PATH_GROVE, PATH_MAIN, PATH_REEF, SHRINE_BAKUNAWA, SHRINE_NIAN, SHRINE_QUETZAL,
  SILK_TREE, VILLAGE, WATERFALL, ZONES, getNormal, samplePath, terrainHeight,
} from './terrain.js'
import { NPCS, SHRINES } from './constants.js'
import { buildWaypoint } from './models.js'

const SKY_TOP = 0x2c7f9e
const SKY_HORIZON = 0xffc98e
const FOG_COLOR = 0x9fc9b3
const SUN_DIR = new THREE.Vector3(-0.55, 0.52, 0.42).normalize()

function colorMat(hex, opts = {}) {
  return new THREE.MeshStandardMaterial({ color: hex, roughness: 0.88, metalness: 0.02, ...opts })
}

function addMesh(parent, geo, mat, pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1]) {
  const m = new THREE.Mesh(geo, mat)
  m.position.set(...pos)
  m.rotation.set(...rot)
  m.scale.set(...scale)
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

function mergeParts(parts) {
  const geos = []
  for (const p of parts) {
    const g = p.geo.clone()
    if (p.matrix) g.applyMatrix4(p.matrix)
    if (!g.attributes.uv) {
      g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2))
    }
    const colors = new Float32Array(g.attributes.position.count * 3)
    const c = new THREE.Color(p.color ?? 0xffffff)
    for (let i = 0; i < g.attributes.position.count; i++) {
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geos.push(g)
  }
  const merged = mergeGeometries(geos, false)
  geos.forEach(g => g.dispose())
  return merged
}

function trs(pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1]) {
  return new THREE.Matrix4().compose(
    new THREE.Vector3(...pos),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(...rot)),
    new THREE.Vector3(...scale),
  )
}

function terrainDetailTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const img = ctx.createImageData(size, size)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = 210 + (noise2(x * 0.14, y * 0.14) - 0.5) * 54 + (Math.random() - 0.5) * 16
      const i = (y * size + x) * 4
      img.data[i] = n; img.data[i + 1] = n * 0.99; img.data[i + 2] = n * 0.93; img.data[i + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(110, 110)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

function makeSignTexture(text, sub = '') {
  const canvas = document.createElement('canvas')
  canvas.width = 512; canvas.height = 192
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#c99c5b'; ctx.fillRect(0, 0, 512, 192)
  ctx.strokeStyle = '#6d4a27'; ctx.lineWidth = 12; ctx.strokeRect(6, 6, 500, 180)
  ctx.strokeStyle = 'rgba(90,60,30,.35)'; ctx.lineWidth = 3
  for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.moveTo(0, 30 + i * 22); ctx.bezierCurveTo(160, 24 + i * 22, 320, 38 + i * 22, 512, 28 + i * 22); ctx.stroke() }
  ctx.fillStyle = '#3c2a16'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  ctx.font = '700 62px Georgia, serif'
  ctx.fillText(text, 256, sub ? 78 : 98)
  if (sub) { ctx.font = '600 22px Trebuchet MS, sans-serif'; ctx.fillStyle = 'rgba(60,42,22,.72)'; ctx.fillText(sub, 256, 142) }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

function makeStripeTexture(colors = ['#f5e6c8', '#d95f4f']) {
  const canvas = document.createElement('canvas')
  canvas.width = 256; canvas.height = 64
  const ctx = canvas.getContext('2d')
  const w = 32
  for (let i = 0; i < 8; i++) { ctx.fillStyle = colors[i % colors.length]; ctx.fillRect(i * w, 0, w, 64) }
  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(1, 1)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeCorrugatedTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 128; canvas.height = 128
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#9ba4a8'; ctx.fillRect(0, 0, 128, 128)
  for (let x = 0; x < 128; x += 12) {
    const g = ctx.createLinearGradient(x, 0, x + 12, 0)
    g.addColorStop(0, 'rgba(255,255,255,.18)'); g.addColorStop(0.5, 'rgba(0,0,0,.12)'); g.addColorStop(1, 'rgba(255,255,255,.1)')
    ctx.fillStyle = g; ctx.fillRect(x, 0, 12, 128)
  }
  ctx.fillStyle = 'rgba(90,50,30,.12)'
  for (let i = 0; i < 14; i++) ctx.fillRect(Math.random() * 128, Math.random() * 128, 2 + Math.random() * 12, 1 + Math.random() * 2)
  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 1)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeClothTexture(color) {
  const canvas = document.createElement('canvas')
  canvas.width = 64; canvas.height = 64
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = color; ctx.fillRect(0, 0, 64, 64)
  ctx.fillStyle = 'rgba(255,255,255,.16)'
  for (let i = 0; i < 30; i++) ctx.fillRect(Math.random() * 64, Math.random() * 64, 2, 2)
  ctx.strokeStyle = 'rgba(0,0,0,.12)'
  for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(0, i * 12); ctx.lineTo(64, i * 12 + 3); ctx.stroke() }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

// ==================================================================== WORLD

export class World {
  constructor(scene, renderer, opts = {}) {
    this.scene = scene
    this.renderer = renderer
    this.root = new THREE.Group()
    scene.add(this.root)
    this.time = 0
    this.quality = opts.quality ?? 'high'
    this.rng = mulberry32(0x50a1)
    this.animated = []
    this.colliders = []
    this.shrines = {}
    this.waypoints = {}
    this.pickups = []
    this.npcModels = []
    this.waterfalls = []
    this.staticPaths = [...samplePath(PATH_MAIN, 170), ...samplePath(PATH_GROVE, 150), ...samplePath(PATH_REEF, 140)]
    this.pathSample = this.staticPaths.filter((_, i) => i % 5 === 0)

    scene.fog = new THREE.FogExp2(FOG_COLOR, 0.0031)
    this.buildSky()
    this.buildLights()
    this.buildTerrain()
    this.buildPaths()
    this.buildOcean()
    this.buildClouds()
    this.buildDistantLand()
    this.buildVegetation()
    this.buildRocks()
    this.buildVillage()
    this.buildBeachProps()
    this.buildWaterfall()
    this.buildShrines()
    this.buildSilkTree()
    this.buildNPCs()
    this.buildPickups()
    this.buildParticles()
    this.buildWaypoints()
  }

  // ------------------------------------------------------------------ SKY
  buildSky() {
    const geo = new THREE.SphereGeometry(480, 32, 20)
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        topColor: { value: new THREE.Color(SKY_TOP) },
        horizonColor: { value: new THREE.Color(SKY_HORIZON) },
        sunColor: { value: new THREE.Color(0xfff2c9) },
        sunDir: { value: SUN_DIR.clone() },
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vWorld;
        void main() {
          vWorld = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 sunColor; uniform vec3 sunDir; uniform float time;
        varying vec3 vWorld;
        void main() {
          float h = clamp(vWorld.y, -0.1, 1.0);
          float t = pow(max(h, 0.0), 0.48);
          vec3 col = mix(horizonColor, topColor, smoothstep(0.0, 0.8, t));
          vec3 dir = normalize(vWorld);
          float sun = pow(max(dot(dir, sunDir), 0.0), 220.0);
          float glow = pow(max(dot(dir, sunDir), 0.0), 7.0);
          col += sunColor * sun * 2.6;
          col += vec3(1.0, 0.63, 0.34) * glow * 0.28;
          float band = sin(dir.y * 22.0 + time * 0.02) * 0.5 + 0.5;
          col += vec3(1.0, 0.68, 0.45) * band * 0.018 * smoothstep(0.1, 0.6, dir.y);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
    this.sky = new THREE.Mesh(geo, mat)
    this.sky.frustumCulled = false
    this.scene.add(this.sky)

    // Sun disc and glow.
    this.sun = glowSprite(0xfff0b8, 55, 0.95)
    this.sun.position.copy(SUN_DIR).multiplyScalar(360)
    this.sun.material.depthWrite = false
    this.scene.add(this.sun)
    this.sunGlow = glowSprite(0xffb36b, 190, 0.32)
    this.sunGlow.position.copy(SUN_DIR).multiplyScalar(350)
    this.scene.add(this.sunGlow)
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight(0xa8d9e2, 0x2f5238, 1.25)
    this.scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xffd9a6, 2.8)
    sun.position.copy(SUN_DIR).multiplyScalar(90)
    sun.castShadow = true
    const size = this.quality === 'low' ? 1024 : 2048
    sun.shadow.mapSize.set(size, size)
    sun.shadow.camera.left = -70
    sun.shadow.camera.right = 70
    sun.shadow.camera.top = 70
    sun.shadow.camera.bottom = -70
    sun.shadow.camera.near = 10
    sun.shadow.camera.far = 220
    sun.shadow.bias = -0.0005
    sun.shadow.normalBias = 0.035
    this.scene.add(sun)
    this.scene.add(sun.target)
    this.sunLight = sun
    const amb = new THREE.AmbientLight(0x315547, 0.55)
    this.scene.add(amb)
  }

  // ------------------------------------------------------------------ TERRAIN
  buildTerrain() {
    const size = 300
    const seg = this.quality === 'low' ? 96 : 150
    const geo = new THREE.PlaneGeometry(size, size, seg, seg)
    geo.rotateX(-Math.PI / 2)
    const pos = geo.attributes.position
    const colors = new Float32Array(pos.count * 3)
    const c = new THREE.Color()
    const sandWet = new THREE.Color(0xa48b5c)
    const sand = new THREE.Color(0xe7cd93)
    const sandLight = new THREE.Color(0xf1dcab)
    const grass = new THREE.Color(0x5b8f47)
    const grassDark = new THREE.Color(0x376b3d)
    const grassLight = new THREE.Color(0x7cae57)
    const redEarth = new THREE.Color(0x9c6542)
    const rock = new THREE.Color(0x7d7664)
    const rockDark = new THREE.Color(0x5a5a4e)
    const jungle = new THREE.Color(0x2f6543)
    const mountainTop = new THREE.Color(0x4f7354)

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      const h = terrainHeight(x, z)
      pos.setY(i, h)
      const r = Math.hypot(x, z)
      const n = fbm(x * 0.045 + 9, z * 0.045 - 5, 3)
      const patch = noise2(x * 0.095 - 3, z * 0.095 + 8)
      const [nx, ny, nz] = getNormal(x, z)
      const slope = 1 - ny

      if (h < 0.1) c.copy(sandWet).lerp(sand, smoothstep(-2, 0.1, h))
      else if (h < 1.55) c.copy(sand).lerp(sandLight, patch * 0.45)
      else if (h < 2.65) c.copy(sand).lerp(grass, smoothstep(1.55, 2.65, h) * (0.55 + n * 0.35))
      else {
        c.copy(grass).lerp(grassLight, patch * 0.55)
        c.lerp(grassDark, smoothstep(0.45, 0.75, n) * 0.55)
        if (r > 82) c.lerp(jungle, 0.25)
        if (h > 15) c.lerp(jungle, smoothstep(15, 24, h) * 0.3)
        if (h > 23) c.lerp(mountainTop, smoothstep(23, 29, h) * 0.5)
        if (patch > 0.66 && h < 14 && r < 95) c.lerp(redEarth, (patch - 0.66) * 0.85)
        if (slope > 0.25) c.lerp(rock, smoothstep(0.25, 0.58, slope) * 0.9)
        if (slope > 0.55) c.lerp(rockDark, smoothstep(0.55, 0.86, slope) * 0.7)
      }
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.computeVertexNormals()

    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true, roughness: 1, metalness: 0,
      map: terrainDetailTexture(),
    })
    const terrain = new THREE.Mesh(geo, mat)
    terrain.receiveShadow = true
    terrain.castShadow = false
    this.root.add(terrain)
    this.terrain = terrain

    // Shallow shelf under the water for a soft turquoise ring.
    const shelfGeo = new THREE.RingGeometry(102, 160, 80, 1)
    shelfGeo.rotateX(-Math.PI / 2)
    const shelf = new THREE.Mesh(shelfGeo, new THREE.MeshBasicMaterial({ color: 0x2a9b96, transparent: true, opacity: 0.24, depthWrite: false }))
    shelf.position.y = -0.55
    this.root.add(shelf)
  }

  buildPaths() {
    const makeRibbon = (pts, width, color, yLift) => {
      const positions = []
      const colors = []
      const indices = []
      const c = new THREE.Color(color)
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        const prev = pts[Math.max(0, i - 1)]
        const next = pts[Math.min(pts.length - 1, i + 1)]
        let dx = next[0] - prev[0], dz = next[2] - prev[2]
        const len = Math.hypot(dx, dz) || 1
        dx /= len; dz /= len
        const sx = -dz, sz = dx
        const w = width * (0.82 + Math.sin(i * 0.27) * 0.09 + noise2(i * 0.2, 0) * 0.12)
        const lx = p[0] + sx * w, lz = p[2] + sz * w
        const rx = p[0] - sx * w, rz = p[2] - sz * w
        positions.push(lx, terrainHeight(lx, lz) + yLift, lz, rx, terrainHeight(rx, rz) + yLift, rz)
        const shade = 0.88 + noise2(i * 0.4, 4) * 0.2
        colors.push(c.r * shade, c.g * shade, c.b * shade, c.r * shade, c.g * shade, c.b * shade)
        if (i > 0) {
          const a = (i - 1) * 2
          indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2)
        }
      }
      const g = new THREE.BufferGeometry()
      g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
      g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
      g.setIndex(indices)
      g.computeVertexNormals()
      return g
    }
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })
    const borderMat = new THREE.MeshStandardMaterial({ color: 0xa47b4f, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 })
    for (const [pts, w] of [[PATH_MAIN, 2.15], [PATH_GROVE, 1.75], [PATH_REEF, 1.8]]) {
      const p = samplePath(pts, 190)
      const border = new THREE.Mesh(makeRibbon(p, w + 0.55, 0x9a7448, 0.04), borderMat)
      border.receiveShadow = true
      this.root.add(border)
      const ribbon = new THREE.Mesh(makeRibbon(p, w, 0xd8b57e, 0.07), mat)
      ribbon.receiveShadow = true
      this.root.add(ribbon)
    }
  }

  // ------------------------------------------------------------------ OCEAN
  buildOcean() {
    const geo = new THREE.PlaneGeometry(700, 700, 150, 150)
    geo.rotateX(-Math.PI / 2)
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        deep: { value: new THREE.Color(0x075a72) },
        shallow: { value: new THREE.Color(0x2fc0b0) },
        crest: { value: new THREE.Color(0xc2fff0) },
        sunDir: { value: SUN_DIR.clone() },
        fogColor: { value: new THREE.Color(FOG_COLOR) },
        fogDensity: { value: 0.0031 },
      },
      vertexShader: `
        uniform float time;
        varying vec3 vWorld; varying float vWave;
        void main(){
          vec3 p = position;
          float d = length(p.xz);
          float w1 = sin(p.x * 0.19 + time * 0.9) * 0.16;
          float w2 = sin(p.z * 0.23 - time * 1.1 + p.x * 0.07) * 0.12;
          float w3 = sin((p.x + p.z) * 0.09 + time * 0.6) * 0.18;
          p.y += (w1 + w2 + w3) * smoothstep(120.0, 260.0, d) * 0.5 + (w1 + w2) * 0.35;
          vWave = w1 + w2 + w3;
          vec4 wp = modelMatrix * vec4(p, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform float time; uniform vec3 deep; uniform vec3 shallow; uniform vec3 crest; uniform vec3 sunDir;
        uniform vec3 fogColor; uniform float fogDensity;
        varying vec3 vWorld; varying float vWave;
        void main(){
          float d = length(vWorld.xz);
          vec3 viewDir = normalize(cameraPosition - vWorld);
          float fres = pow(1.0 - max(dot(viewDir, vec3(0.,1.,0.)), 0.0), 2.2);
          float bands = sin(vWorld.x * 0.32 + time * 0.8 + sin(vWorld.z * 0.12) * 2.0) * 0.5 + 0.5;
          float bands2 = sin(vWorld.z * 0.5 - time * 1.2) * 0.5 + 0.5;
          vec3 col = mix(deep, shallow, smoothstep(30.0, 130.0, d) * 0.7 + 0.18);
          col += crest * smoothstep(0.72, 1.0, bands * bands2) * 0.22;
          col = mix(col, vec3(0.07, 0.42, 0.48), fres * 0.55);
          float spec = pow(max(dot(normalize(sunDir + viewDir), vec3(0.,1.,0.)), 0.0), 90.0);
          col += vec3(1.0, 0.86, 0.58) * spec * 0.7;
          col += crest * smoothstep(0.55, 0.9, vWave) * 0.06;
          float fog = 1.0 - exp(-fogDensity * fogDensity * distance(cameraPosition, vWorld) * distance(cameraPosition, vWorld));
          col = mix(col, fogColor, clamp(fog * 1.5, 0.0, 0.82));
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
    const ocean = new THREE.Mesh(geo, mat)
    ocean.position.y = 0.03
    ocean.receiveShadow = false
    ocean.frustumCulled = false
    this.root.add(ocean)
    this.ocean = ocean
    this.animated.push((dt, t) => { mat.uniforms.time.value = t })

    // Surf foam sampled around the island's shoreline.
    const foamPositions = []
    const random = mulberry32(123)
    for (let i = 0; i < 420; i++) {
      const a = random() * TAU
      let found = 0
      for (let r = 86; r < 132; r += 0.55) {
        const x = Math.cos(a) * r, z = Math.sin(a) * r
        if (terrainHeight(x, z) < 0.5 && terrainHeight(x + Math.cos(a) * 1.8, z + Math.sin(a) * 1.8) > 0.42) { found = r; break }
      }
      if (found) {
        const x = Math.cos(a) * (found + 1.6 + random() * 2.2)
        const z = Math.sin(a) * (found + 1.6 + random() * 2.2)
        foamPositions.push(x, 0.14 + random() * 0.05, z)
      }
    }
    const foamGeo = new THREE.BufferGeometry()
    foamGeo.setAttribute('position', new THREE.Float32BufferAttribute(foamPositions, 3))
    const foamMat = new THREE.PointsMaterial({
      color: 0xeafff8, size: 2.8, map: radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)', 64), transparent: true,
      opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    })
    this.foam = new THREE.Points(foamGeo, foamMat)
    this.root.add(this.foam)
    this.animated.push((dt, t) => { foamMat.opacity = 0.24 + Math.sin(t * 0.9) * 0.08 })
  }

  buildClouds() {
    const tex = cloudTexture()
    const random = mulberry32(82)
    for (let i = 0; i < 22; i++) {
      const mat = new THREE.SpriteMaterial({ map: tex, color: new THREE.Color(i % 4 ? 0xffe8cf : 0xffd0a2), transparent: true, opacity: 0.28 + random() * 0.2, depthWrite: false, fog: false })
      const s = new THREE.Sprite(mat)
      const a = random() * TAU
      const r = 190 + random() * 180
      s.position.set(Math.cos(a) * r, 48 + random() * 70, Math.sin(a) * r)
      const scale = 70 + random() * 110
      s.scale.set(scale, scale * 0.42, 1)
      s.userData.drift = 0.4 + random() * 0.6
      this.root.add(s)
      this.animated.push((dt, t) => { s.position.x += dt * s.userData.drift; if (s.position.x > 400) s.position.x = -400 })
    }
  }

  buildDistantLand() {
    const mat = new THREE.MeshStandardMaterial({ color: 0x2b5b4a, roughness: 1, flatShading: true })
    const specs = [
      [-230, -170, 60, 26], [210, 90, 70, 20], [40, -260, 80, 30], [-280, 140, 55, 18],
    ]
    for (const [x, z, r, h] of specs) {
      const g = new THREE.Group()
      for (let i = 0; i < 5; i++) {
        const m = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), mat)
        m.position.set((i - 2) * r * 0.25, -2, (i % 2) * 8)
        m.scale.set(r * 0.35, h * (0.6 + (i % 3) * 0.16), r * 0.3)
        g.add(m)
      }
      g.position.set(x, 0, z)
      g.traverse(o => { if (o.isMesh && o.material) o.material.fog = true })
      this.root.add(g)
    }
  }

  // ------------------------------------------------------------------ VEGETATION
  makePalmAssets() {
    const parts = []
    const trunkColor = 0x8a6a45
    let y = 0, leanX = 0, leanZ = 0
    const segCount = 6
    for (let i = 0; i < segCount; i++) {
      const segH = 1.2
      leanX += 0.09 * (i / segCount)
      leanZ += 0.03
      const geo = new THREE.CylinderGeometry(0.16 - i * 0.011, 0.23 - i * 0.012, segH, 6)
      const m = trs([leanX * i, y + segH / 2, leanZ * i], [0, 0, -0.1 * (i / segCount)], [1, 1, 1])
      parts.push({ geo, matrix: m, color: i % 2 ? trunkColor : 0x97734b })
      y += segH * 0.94
    }
    const trunkGeo = mergeParts(parts)

    const crownParts = []
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + 0.2
      const droop = 0.3 + (i % 3) * 0.16
      const cone = new THREE.ConeGeometry(0.72, 3.2, 4, 1, true)
      const m = trs([Math.cos(a) * 1.3, y + 0.1 - droop * 0.7, Math.sin(a) * 1.3], [Math.PI / 2, 0, a + Math.PI / 2], [1, 1, 0.16])
      crownParts.push({ geo: cone, matrix: m, color: i % 2 ? 0x2e6b3b : 0x3f8248 })
      const cone2 = new THREE.ConeGeometry(0.34, 1.7, 3, 1, true)
      const m2 = trs([Math.cos(a) * 2.1, y + 0.05 - droop, Math.sin(a) * 2.1], [Math.PI / 2, 0, a + Math.PI / 2], [1, 1, 0.13])
      crownParts.push({ geo: cone2, matrix: m2, color: 0x437f43 })
    }
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * TAU
      const s = new THREE.SphereGeometry(0.17, 6, 5)
      crownParts.push({ geo: s, matrix: trs([Math.cos(a) * 0.3, y - 0.35, Math.sin(a) * 0.3]), color: 0x5a3d1f })
    }
    return { trunkGeo, crownGeo: mergeParts(crownParts), height: y }
  }

  buildVegetation() {
    const rng = this.rng
    const palm = this.makePalmAssets()
    const trunkMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true })
    const crownMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.86, side: THREE.DoubleSide, flatShading: true })
    const palmSpots = []
    for (let i = 0; i < 60; i++) {
      const a = rng() * TAU, r = 58 + rng() * 57
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < 1.4 || h > 9) continue
      if (this.nearStructure(x, z, 8)) continue
      if (rng() < 0.3 && Math.hypot(x - 20, z - 50) > 18) continue
      palmSpots.push({ x, z, h, s: 0.75 + rng() * 0.7, rot: rng() * TAU })
    }
    palmSpots.push({ x: 17, z: 62, h: terrainHeight(17, 62), s: 1.1, rot: 0.5 })
    palmSpots.push({ x: -2, z: 73, h: terrainHeight(-2, 73), s: 0.9, rot: 2.1 })
    palmSpots.push({ x: 39, z: 51, h: terrainHeight(39, 51), s: 0.95, rot: 4.2 })
    const trunkInst = new THREE.InstancedMesh(palm.trunkGeo, trunkMat, palmSpots.length)
    const crownInst = new THREE.InstancedMesh(palm.crownGeo, crownMat, palmSpots.length)
    trunkInst.castShadow = crownInst.castShadow = true
    trunkInst.receiveShadow = crownInst.receiveShadow = false
    const m4 = new THREE.Matrix4()
    palmSpots.forEach((p, i) => {
      m4.compose(new THREE.Vector3(p.x, p.h, p.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, p.rot, 0)), new THREE.Vector3(p.s, p.s, p.s))
      trunkInst.setMatrixAt(i, m4); crownInst.setMatrixAt(i, m4)
      if (i % 3 === 0) this.colliders.push({ x: p.x, z: p.z, r: 0.55 * p.s })
    })
    this.root.add(trunkInst, crownInst)

    // Broadleaf / mango trees.
    const trunkParts = [{ geo: new THREE.CylinderGeometry(0.22, 0.4, 3.4, 6), matrix: trs([0, 1.7, 0]), color: 0x6e4e30 }]
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * TAU
      trunkParts.push({ geo: new THREE.CylinderGeometry(0.08, 0.18, 2.1, 5), matrix: trs([Math.cos(a) * 0.35, 3.2, Math.sin(a) * 0.35], [Math.cos(a) * 0.6, 0, Math.sin(a) * -0.6]), color: 0x65472b })
    }
    const broadTrunk = mergeParts(trunkParts)
    const canopyParts = []
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * TAU
      const r = i === 0 ? 0 : 1.55
      const s = new THREE.IcosahedronGeometry(1, 0)
      canopyParts.push({ geo: s, matrix: trs([Math.cos(a) * r, 4.2 + (i % 3) * 0.5, Math.sin(a) * r], [0, a, 0], [1.55, 1.0, 1.4]), color: i % 3 === 0 ? 0x2b6c3c : i % 3 === 1 ? 0x3b8148 : 0x21603b })
    }
    const broadCanopy = mergeParts(canopyParts)
    const broadSpots = []
    for (let i = 0; i < 95; i++) {
      const a = rng() * TAU, r = 12 + rng() * 96
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < 2.4 || h > 25) continue
      if (this.nearStructure(x, z, 7) || this.nearPath(x, z, 3.5)) continue
      if (rng() < 0.4) continue
      broadSpots.push({ x, z, h, s: 0.7 + rng() * 0.85, rot: rng() * TAU })
    }
    const broadTrunkInst = new THREE.InstancedMesh(broadTrunk, trunkMat, broadSpots.length)
    const broadCanInst = new THREE.InstancedMesh(broadCanopy, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true }), broadSpots.length)
    broadTrunkInst.castShadow = broadCanInst.castShadow = true
    broadSpots.forEach((p, i) => {
      m4.compose(new THREE.Vector3(p.x, p.h, p.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, p.rot, 0)), new THREE.Vector3(p.s, p.s, p.s))
      broadTrunkInst.setMatrixAt(i, m4); broadCanInst.setMatrixAt(i, m4)
      if (p.s > 1.1) this.colliders.push({ x: p.x, z: p.z, r: 0.5 })
    })
    this.root.add(broadTrunkInst, broadCanInst)

    // Ferns and shrubs.
    const shrubGeo = mergeParts([
      { geo: new THREE.IcosahedronGeometry(1, 0), matrix: trs([0, 0.55, 0], [0, 0, 0], [1, 0.75, 1]), color: 0x3d7a44 },
      { geo: new THREE.IcosahedronGeometry(0.8, 0), matrix: trs([0.7, 0.4, 0.2], [0, 0.6, 0], [1, 0.7, 1]), color: 0x2f6b3d },
      { geo: new THREE.IcosahedronGeometry(0.7, 0), matrix: trs([-0.6, 0.35, -0.25], [0, -0.4, 0], [1, 0.8, 1]), color: 0x4b8a4b },
    ])
    const shrubMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, flatShading: true })
    const shrubSpots = []
    for (let i = 0; i < 260; i++) {
      const a = rng() * TAU, r = 10 + rng() * 105
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < 2.1 || h > 26) continue
      if (this.nearStructure(x, z, 3.2) || this.nearPath(x, z, 1.8)) continue
      shrubSpots.push({ x, z, h, s: 0.55 + rng() * 0.95, rot: rng() * TAU })
    }
    const shrubInst = new THREE.InstancedMesh(shrubGeo, shrubMat, shrubSpots.length)
    shrubInst.castShadow = true; shrubInst.receiveShadow = true
    shrubSpots.forEach((p, i) => {
      m4.compose(new THREE.Vector3(p.x, p.h, p.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, p.rot, 0)), new THREE.Vector3(p.s, p.s, p.s))
      shrubInst.setMatrixAt(i, m4)
    })
    this.root.add(shrubInst)

    // Grass tufts.
    const leafTex = leafTexture()
    const bladeGeos = []
    for (let k = 0; k < 3; k++) {
      const g = new THREE.PlaneGeometry(0.7, 0.9)
      g.applyMatrix4(trs([0, 0.42, 0], [0, (k / 3) * Math.PI, 0]))
      bladeGeos.push(g)
    }
    const tuftGeo = mergeGeometries(bladeGeos, false)
    const tuftMat = new THREE.MeshStandardMaterial({ color: 0x6fa54e, map: leafTex, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 1, transparent: false })
    const tuftSpots = []
    for (let i = 0; i < 3600; i++) {
      const a = rng() * TAU, r = 8 + rng() * 108
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < 2.2 || h > 27) continue
      if (this.nearStructure(x, z, 2.4) || this.nearPath(x, z, 1.2)) continue
      tuftSpots.push({ x, z, h, s: 0.6 + rng() * 1.0, rot: rng() * TAU })
    }
    const tuftInst = new THREE.InstancedMesh(tuftGeo, tuftMat, tuftSpots.length)
    tuftInst.receiveShadow = true
    const tc = new THREE.Color()
    tuftSpots.forEach((p, i) => {
      m4.compose(new THREE.Vector3(p.x, p.h, p.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, p.rot, 0)), new THREE.Vector3(p.s, p.s, p.s))
      tuftInst.setMatrixAt(i, m4)
      tc.setHSL(0.24 + rng() * 0.06, 0.35 + rng() * 0.25, 0.32 + rng() * 0.16)
      tuftInst.setColorAt(i, tc)
    })
    this.root.add(tuftInst)

    // Flowers.
    const flowerGeo = new THREE.IcosahedronGeometry(0.11, 0)
    const flowerMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7, emissive: 0x442200, emissiveIntensity: 0.1 })
    const flowerSpots = []
    const flowerColors = [0xff6b8a, 0xffb347, 0xf4c95d, 0xe05a9d, 0xff8c69, 0xc7a4ff]
    for (let i = 0; i < 420; i++) {
      const a = rng() * TAU, r = 12 + rng() * 102
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < 2.6 || h > 16) continue
      if (this.nearStructure(x, z, 3) || this.nearPath(x, z, 1.5)) continue
      if (rng() < 0.5) continue
      flowerSpots.push({ x, z, h, s: 0.7 + rng() * 1.4, color: flowerColors[Math.floor(rng() * flowerColors.length)] })
    }
    const flowerInst = new THREE.InstancedMesh(flowerGeo, flowerMat, flowerSpots.length)
    const fc = new THREE.Color()
    flowerSpots.forEach((p, i) => {
      m4.compose(new THREE.Vector3(p.x, p.h + 0.55, p.z), new THREE.Quaternion(), new THREE.Vector3(p.s, p.s, p.s))
      flowerInst.setMatrixAt(i, m4)
      fc.setHex(p.color); flowerInst.setColorAt(i, fc)
    })
    this.root.add(flowerInst)

    // Banana plants around the village.
    for (let i = 0; i < 9; i++) {
      const a = rng() * TAU, r = 8 + rng() * 13
      const x = VILLAGE.x + Math.cos(a) * r, z = VILLAGE.z + Math.sin(a) * r
      if (this.nearStructure(x, z, 3) || this.nearPath(x, z, 1.5)) continue
      this.root.add(this.makeBananaPlant(x, terrainHeight(x, z), z, rng() * TAU))
    }
  }

  makeBananaPlant(x, y, z, rot) {
    const g = new THREE.Group()
    g.position.set(x, y, z); g.rotation.y = rot
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.14, 2.2, 5), colorMat(0x5c8a3e))
    stem.position.y = 1.1; stem.castShadow = true
    g.add(stem)
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * TAU
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.42, 2.2, 4, 1, true), new THREE.MeshStandardMaterial({ color: i % 2 ? 0x4a8f43 : 0x5aa44e, roughness: 0.8, side: THREE.DoubleSide, flatShading: true }))
      leaf.position.set(Math.cos(a) * 0.9, 2.1 + (i % 2) * 0.2, Math.sin(a) * 0.9)
      leaf.rotation.set(Math.PI / 2 - 0.35, 0, a + Math.PI / 2)
      leaf.scale.set(1, 1, 0.15)
      leaf.castShadow = true
      g.add(leaf)
    }
    return g
  }

  buildRocks() {
    const geo = new THREE.DodecahedronGeometry(1, 0)
    const mat = new THREE.MeshStandardMaterial({ color: 0x7a7468, roughness: 0.98, flatShading: true })
    const spots = []
    const rng = this.rng
    for (let i = 0; i < 90; i++) {
      const a = rng() * TAU, r = 8 + rng() * 112
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < 1.2 || h > 28 || this.nearStructure(x, z, 3) || this.nearPath(x, z, 1.5)) continue
      spots.push({ x, z, h, s: 0.35 + rng() * 1.4, rot: rng() * TAU })
    }
    const inst = new THREE.InstancedMesh(geo, mat, spots.length)
    inst.castShadow = true; inst.receiveShadow = true
    const m4 = new THREE.Matrix4()
    spots.forEach((p, i) => {
      m4.compose(new THREE.Vector3(p.x, p.h + p.s * 0.25, p.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(p.rot * 0.2, p.rot, p.rot * 0.12)), new THREE.Vector3(p.s, p.s * 0.75, p.s * 1.1))
      inst.setMatrixAt(i, m4)
      if (p.s > 1.1) this.colliders.push({ x: p.x, z: p.z, r: p.s * 0.6 })
    })
    this.root.add(inst)

    // Shore stones.
    for (let i = 0; i < 18; i++) {
      const a = rng() * TAU, r = 100 + rng() * 18
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const h = terrainHeight(x, z)
      if (h < -0.5) continue
      const rock = new THREE.Mesh(geo, mat)
      rock.position.set(x, h + 0.2, z)
      rock.scale.set(0.5 + rng() * 1.1, 0.4 + rng() * 0.7, 0.5 + rng() * 0.8)
      rock.rotation.set(rng(), rng() * TAU, rng())
      rock.castShadow = true
      this.root.add(rock)
    }
  }

  // ------------------------------------------------------------------ VILLAGE
  buildVillage() {
    const houses = [
      { x: 17, z: 31, rot: 0.5, wall: 0xf0a35c, roof: 0x9ba4a8, trim: 0x2f6b5c },
      { x: 40, z: 30, rot: -0.6, wall: 0x7fd8c4, roof: 0x8f999c, trim: 0xc6533f },
      { x: 46, z: 43, rot: 1.9, wall: 0xffd166, roof: 0xa8b0b4, trim: 0x2f6b5c },
      { x: 16, z: 46, rot: -1.7, wall: 0xd95f4f, roof: 0x8a9497, trim: 0xf4c95d },
      { x: 34, z: 50, rot: 2.9, wall: 0x9ed0a0, roof: 0x9ba4a8, trim: 0x7a4228 },
      { x: 22, z: 22, rot: 0.85, wall: 0xe9c6a0, roof: 0x8a9497, trim: 0x2f6b5c },
    ]
    for (const h of houses) {
      const house = this.makeHouse(h)
      this.root.add(house)
      this.colliders.push({ x: h.x, z: h.z, r: 3.6 })
    }

    // Market stalls.
    const stallDefs = [
      { x: 31, z: 34, rot: -0.35, a: '#f5e6c8', b: '#d95f4f', fruit: 0xffa62b },
      { x: 35, z: 39, rot: 0.25, a: '#f5e6c8', b: '#2f9e79', fruit: 0xe05a9d },
      { x: 27, z: 39, rot: 0.9, a: '#f4c95d', b: '#2f6b5c', fruit: 0xffd166 },
    ]
    for (const s of stallDefs) { this.root.add(this.makeStall(s)); this.colliders.push({ x: s.x, z: s.z, r: 2.3 }) }

    // Colourful zinc fence behind the houses.
    for (let i = 0; i < 14; i++) {
      const a = i < 7 ? -0.2 : 2.4
      const x = 29 + Math.cos(a) * 27 + (i % 7) * 1.6
      const z = 39 + Math.sin(a) * 27
      const h = terrainHeight(x, z)
      if (h < 2) continue
      const panel = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.7, 0.06), colorMat([0x2f9e79, 0xf4c95d, 0xd95f4f, 0x4aa3c7][i % 4], { roughness: 0.8, metalness: 0.2 }))
      panel.position.set(x, h + 0.85, z)
      panel.rotation.y = a
      panel.castShadow = true
      this.root.add(panel)
    }

    // Laundry lines with swaying cloth.
    const clothColors = ['#f5e6c8', '#d95f4f', '#4aa3c7', '#f4c95d', '#2f9e79']
    for (let i = 0; i < 4; i++) {
      const x1 = 12 + i * 4, z1 = 39 + (i % 2) * 0.8
      const y1 = terrainHeight(x1, z1)
      const hanging = new THREE.Group()
      const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(5, 0, 0)])
      const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: 0x6b5a42 }))
      hanging.add(line)
      for (let k = 0; k < 4; k++) {
        const cloth = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.65), new THREE.MeshStandardMaterial({ map: makeClothTexture(clothColors[(i + k) % clothColors.length]), side: THREE.DoubleSide, roughness: 1 }))
        cloth.position.set(0.8 + k * 1.05, -0.36, 0)
        cloth.castShadow = true
        hanging.add(cloth)
        const baseRot = cloth.rotation.x
        this.animated.push((dt, t) => { cloth.rotation.x = baseRot + Math.sin(t * 1.7 + k + i) * 0.16 })
      }
      hanging.position.set(x1, y1 + 2.7, z1)
      this.root.add(hanging)
    }

    // Drums, crates, planters.
    const props = [
      [30, 45, 'drum'], [33, 46, 'drum'], [29, 44.5, 'crate'], [43, 37, 'crate'], [20, 37, 'crate'], [12, 45, 'planter'], [44, 38, 'planter'],
    ]
    for (const [x, z, type] of props) {
      const h = terrainHeight(x, z)
      if (type === 'drum') {
        const g = new THREE.Group()
        g.position.set(x, h, z)
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 0.85, 10), colorMat(0x7a4228))
        body.position.y = 0.43; body.castShadow = true; g.add(body)
        const top = new THREE.Mesh(new THREE.CircleGeometry(0.31, 10), colorMat(0xe9ddc2))
        top.rotation.x = -Math.PI / 2; top.position.y = 0.861; g.add(top)
        for (let i = 0; i < 3; i++) { const band = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.02, 4, 12), colorMat(0xf4c95d)); band.rotation.x = Math.PI / 2; band.position.y = 0.2 + i * 0.25; g.add(band) }
        this.root.add(g)
      } else if (type === 'crate') {
        const c = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.8), colorMat(0x9a6b3c))
        c.position.set(x, h + 0.3, z); c.rotation.y = hash2(x, z) * 3; c.castShadow = true; this.root.add(c)
      } else {
        const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 0.5, 8), colorMat(0xb5653f))
        pot.position.set(x, h + 0.25, z); pot.castShadow = true; this.root.add(pot)
        const bush = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), colorMat(0x4a8f43)); bush.position.set(x, h + 0.7, z); bush.castShadow = true; this.root.add(bush)
      }
    }

    // Signposts at the village junction.
    this.root.add(this.makeSign(25.5, 46.5, 0.4, ['NINE MILE', 'MARKET ↑']))
    this.root.add(this.makeSign(44.5, 41, -0.8, ['LUMINOUS REEF', '↗ 25 MIN']))
    this.root.add(this.makeSign(12, 22, 1.9, ['SILK COTTON', 'GROVE ↖']))
    this.root.add(this.makeSign(-19, -1, 2.3, ['BLUE MOUNTAIN', 'SHRINE ↖']))
  }

  makeHouse({ x, z, rot = 0, wall = 0xf0a35c, roof = 0x9ba4a8, trim = 0x2f6b5c }) {
    const g = new THREE.Group()
    const h = terrainHeight(x, z)
    g.position.set(x, h, z)
    g.rotation.y = rot
    const wallMat = colorMat(wall, { roughness: 0.92 })
    const trimMat = colorMat(trim, { roughness: 0.7, metalness: 0.15 })
    const roofMat = new THREE.MeshStandardMaterial({ map: makeCorrugatedTexture(), color: roof, roughness: 0.52, metalness: 0.42, side: THREE.DoubleSide })
    const wood = colorMat(0x6e4b2c)

    addMesh(g, new THREE.BoxGeometry(5.2, 0.35, 4.4), colorMat(0x8b8071), [0, 0.17, 0])
    addMesh(g, new THREE.BoxGeometry(4.7, 2.75, 3.9), wallMat, [0, 1.72, 0])
    addMesh(g, new THREE.BoxGeometry(4.85, 0.12, 4.05), trimMat, [0, 3.06, 0])
    // Roof panels.
    const panelL = addMesh(g, new THREE.BoxGeometry(5.7, 0.12, 2.55), roofMat, [-1.03, 3.75, 0], [0, 0, -0.5])
    const panelR = addMesh(g, new THREE.BoxGeometry(5.7, 0.12, 2.55), roofMat, [1.03, 3.75, 0], [0, 0, 0.5])
    addMesh(g, new THREE.BoxGeometry(5.75, 0.18, 0.22), trimMat, [0, 4.3, 0])
    // Porch.
    addMesh(g, new THREE.BoxGeometry(5.1, 0.16, 1.5), wood, [0, 0.42, 2.55])
    for (const px of [-2.35, 2.35]) {
      addMesh(g, new THREE.CylinderGeometry(0.08, 0.1, 2.5, 6), wood, [px, 1.65, 3.15])
    }
    addMesh(g, new THREE.BoxGeometry(5.1, 0.08, 0.08), wood, [0, 2.18, 3.16])
    addMesh(g, new THREE.BoxGeometry(4.6, 0.08, 0.08), wood, [0, 0.92, 3.17])
    // Door and windows.
    addMesh(g, new THREE.BoxGeometry(0.92, 1.75, 0.09), colorMat(0x4b2f1d), [0, 1.45, 1.99])
    addMesh(g, new THREE.SphereGeometry(0.05, 6, 5), trimMat, [0.32, 1.4, 2.06])
    for (const wx of [-1.55, 1.55]) {
      const glow = new THREE.MeshBasicMaterial({ color: 0xffc56b, toneMapped: false })
      addMesh(g, new THREE.BoxGeometry(0.82, 0.72, 0.06), glow, [wx, 1.85, 1.985])
      addMesh(g, new THREE.BoxGeometry(0.96, 0.86, 0.04), trimMat, [wx, 1.85, 1.955])
      addMesh(g, new THREE.BoxGeometry(0.82, 0.08, 0.08), colorMat(0x4b2f1d), [wx, 1.85, 2.0])
      addMesh(g, new THREE.BoxGeometry(0.08, 0.72, 0.08), colorMat(0x4b2f1d), [wx, 1.85, 2.0])
      // Shutters.
      addMesh(g, new THREE.BoxGeometry(0.36, 0.8, 0.06), trimMat, [wx - 0.62, 1.85, 2.0], [0, 0.2, 0])
      addMesh(g, new THREE.BoxGeometry(0.36, 0.8, 0.06), trimMat, [wx + 0.62, 1.85, 2.0], [0, -0.2, 0])
    }
    // Steps.
    for (let i = 0; i < 2; i++) addMesh(g, new THREE.BoxGeometry(1.8, 0.18, 0.5), colorMat(0x8b8071), [0, 0.09 + i * 0.16, 3.0 + (1 - i) * 0.3])
    // Roof weather stains and potted plant.
    addMesh(g, new THREE.CylinderGeometry(0.22, 0.17, 0.38, 7), colorMat(0xb5653f), [2.0, 0.6, 2.85])
    addMesh(g, new THREE.IcosahedronGeometry(0.3, 0), colorMat(0x4a8f43), [2.0, 0.9, 2.85])
    return g
  }

  makeStall({ x, z, rot, a, b, fruit }) {
    const g = new THREE.Group()
    const h = terrainHeight(x, z)
    g.position.set(x, h, z); g.rotation.y = rot
    const wood = colorMat(0x7a4e2b)
    for (const sx of [-1.8, 1.8]) for (const sz of [-1.1, 1.1]) addMesh(g, new THREE.CylinderGeometry(0.06, 0.08, 2.8, 6), wood, [sx, 1.4, sz])
    addMesh(g, new THREE.BoxGeometry(4.0, 0.13, 2.5), colorMat(0x8a5a30), [0, 1.0, 0])
    addMesh(g, new THREE.BoxGeometry(3.8, 0.7, 0.16), colorMat(0x9a6b3c), [0, 0.6, -1.15])
    const canopyTex = makeStripeTexture([a, b])
    const canopy = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 3.0, 1, 1), new THREE.MeshStandardMaterial({ map: canopyTex, side: THREE.DoubleSide, roughness: 0.95 }))
    canopy.rotation.x = -Math.PI / 2
    canopy.rotation.z = 0.06
    canopy.position.y = 2.75
    canopy.castShadow = true
    g.add(canopy)
    // Wavy valance.
    const valance = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 0.4), new THREE.MeshStandardMaterial({ map: canopyTex, side: THREE.DoubleSide, roughness: 0.95 }))
    valance.position.set(0, 2.56, 1.5)
    g.add(valance)
    // Fruit pyramids.
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4 - i; j++) {
        const f = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshStandardMaterial({ color: fruit, roughness: 0.55, metalness: 0.05 }))
        f.position.set(-2.4 + i * 0.35 + j * 0.28, 1.2 + i * 0.22, 0.15 + (j % 2) * 0.2)
        f.castShadow = true
        g.add(f)
      }
    }
    addMesh(g, new THREE.BoxGeometry(0.7, 0.5, 0.7), colorMat(0x9a6b3c), [1.1, 0.7, 0.2])
    addMesh(g, new THREE.BoxGeometry(0.5, 0.35, 0.5), colorMat(0x8a5a30), [1.1, 1.12, 0.2])
    // Hanging bulbs.
    for (let i = 0; i < 3; i++) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 5), new THREE.MeshBasicMaterial({ color: 0xffd47a, toneMapped: false }))
      bulb.position.set(-1.4 + i * 1.4, 2.45, 1.35)
      g.add(bulb)
    }
    return g
  }

  makeSign(x, z, rot, text) {
    const g = new THREE.Group()
    const h = terrainHeight(x, z)
    g.position.set(x, h, z); g.rotation.y = rot
    addMesh(g, new THREE.CylinderGeometry(0.07, 0.1, 2.5, 6), colorMat(0x6e4b2c), [0, 1.25, 0])
    const tex = makeSignTexture(text[0], text[1])
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.7, 0.08), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }))
    board.position.set(0, 2.15, 0.08)
    board.castShadow = true
    g.add(board)
    const edge = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.82, 0.04), colorMat(0x5b3b20))
    edge.position.set(0, 2.15, 0.02); g.add(edge)
    return g
  }

  // ------------------------------------------------------------------ BEACH
  buildBeachProps() {
    this.root.add(this.makeBoat(4, 83, 1.1))
    this.root.add(this.makeBoat(-15, 96, 2.3, 0.78))
    // Picnic / fishing spot.
    const h = terrainHeight(13, 76)
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 3.4, 6), colorMat(0x6e4b2c))
    post.position.set(13, h + 1.7, 76); post.castShadow = true; this.root.add(post)
    const flagTex = makeClothTexture('#2f9e79')
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.8), new THREE.MeshStandardMaterial({ map: flagTex, side: THREE.DoubleSide, roughness: 1 }))
    flag.position.set(13.7, h + 3.0, 76); this.root.add(flag)
    this.animated.push((dt, t) => { flag.rotation.y = Math.sin(t * 2.2) * 0.2 })
    // Starfish and shells.
    for (let i = 0; i < 14; i++) {
      const a = this.rng() * TAU, r = 100 + this.rng() * 12
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      const y = terrainHeight(x, z)
      if (y < 0.4 || y > 1.4) continue
      const star = new THREE.Mesh(new THREE.CircleGeometry(0.18, 5), colorMat(0xff8c69))
      star.rotation.x = -Math.PI / 2; star.position.set(x, y + 0.03, z); this.root.add(star)
    }
  }

  makeBoat(x, z, rot, scale = 1) {
    const g = new THREE.Group()
    const h = terrainHeight(x, z)
    g.position.set(x, h + 0.2, z); g.rotation.y = rot; g.scale.setScalar(scale)
    const hull = new THREE.Mesh(new THREE.CapsuleGeometry(0.75, 3.0, 4, 10), new THREE.MeshStandardMaterial({ color: 0x8a5a30, roughness: 0.8, flatShading: true }))
    hull.rotation.x = Math.PI / 2; hull.rotation.z = Math.PI / 2; hull.scale.y = 0.55; hull.position.y = 0.4
    hull.castShadow = true; g.add(hull)
    const inner = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.45, 3.2), colorMat(0x3b2a1b))
    inner.position.y = 0.5; g.add(inner)
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 3.4, 5), colorMat(0x6e4b2c))
    mast.position.set(0, 2.1, -0.2); mast.castShadow = true; g.add(mast)
    const sail = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.4, 3, 3), new THREE.MeshStandardMaterial({ color: 0xf2e6c9, side: THREE.DoubleSide, roughness: 0.9 }))
    sail.position.set(0, 2.4, 0.75); sail.rotation.y = Math.PI / 2; sail.rotation.z = 0.1; sail.castShadow = true; g.add(sail)
    // Oars.
    for (const s of [-1, 1]) {
      const oar = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 2.2, 5), colorMat(0x9a6b3c))
      oar.position.set(s * 0.9, 0.8, 0.8); oar.rotation.z = s * 0.5; g.add(oar)
    }
    const baseY = h + 0.2
    this.animated.push((dt, t) => { g.position.y = baseY + Math.sin(t * 1.1 + x) * 0.08; g.rotation.z = Math.sin(t * 0.9 + z) * 0.02 })
    return g
  }

  // ------------------------------------------------------------------ WATERFALL
  buildWaterfall() {
    const g = new THREE.Group()
    g.position.set(WATERFALL.x, 0, WATERFALL.z)
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x5c5f50, roughness: 0.98, flatShading: true })
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU
      const r = 7 + (i % 3) * 1.2
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 0), rockMat)
      rock.position.set(Math.cos(a) * r, terrainHeight(WATERFALL.x + Math.cos(a) * r, WATERFALL.z + Math.sin(a) * r) + 0.3, Math.sin(a) * r)
      rock.scale.set(1.4 + (i % 3) * 0.6, 1.6 + (i % 4) * 0.7, 1.2 + (i % 2) * 0.5)
      rock.rotation.set(i, i * 2, i * 1.3)
      rock.castShadow = true; rock.receiveShadow = true
      g.add(rock)
      this.colliders.push({ x: WATERFALL.x + Math.cos(a) * r, z: WATERFALL.z + Math.sin(a) * r, r: 1.6 })
    }
    // Upper ledge.
    for (let i = 0; i < 5; i++) {
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1, 0), rockMat)
      rock.position.set(-4 + i * 2.0, 14.4 + (i % 2) * 0.7, -3.2)
      rock.scale.set(1.8, 1.2, 2.0)
      rock.castShadow = true
      g.add(rock)
    }
    // Waterfall sheet.
    const fallMat = new THREE.ShaderMaterial({
      transparent: true, side: THREE.DoubleSide, depthWrite: false,
      uniforms: { time: { value: 0 } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float time; varying vec2 vUv;
        void main(){
          float stripes = sin(vUv.x * 46.0 + sin(vUv.y * 12.0 + time * 3.0) * 2.0) * 0.5 + 0.5;
          float streaks = sin(vUv.y * 30.0 - time * 7.0 + vUv.x * 8.0) * 0.5 + 0.5;
          float a = (0.34 + stripes * 0.24 + streaks * 0.12) * smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.92, vUv.y);
          vec3 col = mix(vec3(0.55, 0.86, 0.9), vec3(1.0), stripes * 0.7);
          gl_FragColor = vec4(col, a);
        }
      `,
    })
    const fall = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 8.2, 1, 1), fallMat)
    fall.position.set(2.1, 10.6, -3.1)
    fall.rotation.x = 0.04
    g.add(fall)
    this.waterfalls.push(fallMat)
    // Pool.
    const pool = new THREE.Mesh(new THREE.CircleGeometry(6.5, 32), new THREE.MeshStandardMaterial({ color: 0x3ec9c0, roughness: 0.1, metalness: 0.2, transparent: true, opacity: 0.72, emissive: 0x0d6b72, emissiveIntensity: 0.4 }))
    pool.rotation.x = -Math.PI / 2
    pool.position.y = terrainHeight(WATERFALL.x, WATERFALL.z) + 0.1
    g.add(pool)
    const ring = new THREE.Mesh(new THREE.RingGeometry(6.2, 6.6, 32), new THREE.MeshBasicMaterial({ color: 0x9ffff1, transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false }))
    ring.rotation.x = -Math.PI / 2; ring.position.y = pool.position.y + 0.02; g.add(ring)
    this.animated.push((dt, t) => { fallMat.uniforms.time.value = t; ring.scale.setScalar(1 + Math.sin(t * 1.4) * 0.02) })
    // Mist points.
    const mistCount = 70
    const arr = new Float32Array(mistCount * 3)
    for (let i = 0; i < mistCount; i++) { arr[i * 3] = 2 + (Math.random() - 0.5) * 5; arr[i * 3 + 1] = 6.7 + Math.random() * 4; arr[i * 3 + 2] = -3 + (Math.random() - 0.5) * 4 }
    const mistGeo = new THREE.BufferGeometry(); mistGeo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
    const mist = new THREE.Points(mistGeo, new THREE.PointsMaterial({ color: 0xd9fff9, size: 1.5, map: radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)', 64), transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending }))
    g.add(mist)
    this.animated.push((dt, t) => { mist.rotation.y = t * 0.06 })
    this.root.add(g)
    this.colliders.push({ x: WATERFALL.x + 2, z: WATERFALL.z - 2, r: 4.5 })
  }

  // ------------------------------------------------------------------ SHRINES
  buildShrines() {
    this.shrines.mountain = this.makeShrine('mountain', SHRINE_NIAN, '#f4c95d')
    this.shrines.reef = this.makeShrine('reef', SHRINE_BAKUNAWA, '#9f7bff')
    this.shrines.canopy = this.makeShrine('canopy', SHRINE_QUETZAL, '#8ff0ce')
  }

  makeShrine(kind, spec, colorHex) {
    const g = new THREE.Group()
    g.position.set(spec.x, spec.y, spec.z)
    const stone = new THREE.MeshStandardMaterial({ color: kind === 'reef' ? 0x6b6f68 : 0x777266, roughness: 0.95, flatShading: true })
    const darkStone = new THREE.MeshStandardMaterial({ color: 0x4a4b43, roughness: 0.98, flatShading: true })
    const color = new THREE.Color(colorHex)
    const runeMat = new THREE.MeshBasicMaterial({ color, toneMapped: false })
    const glowMat = new THREE.MeshStandardMaterial({ color, emissive: colorHex, emissiveIntensity: 2.2, roughness: 0.2 })
    // Dais.
    addMesh(g, new THREE.CylinderGeometry(4.2, 4.8, 0.42, 12), stone, [0, 0.2, 0])
    addMesh(g, new THREE.CylinderGeometry(3.35, 3.5, 0.16, 12), darkStone, [0, 0.48, 0])
    const runeRing = new THREE.Mesh(new THREE.TorusGeometry(3.55, 0.045, 4, 64), runeMat)
    runeRing.rotation.x = -Math.PI / 2; runeRing.position.y = 0.5; g.add(runeRing)
    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.03, 4, 48), new THREE.MeshBasicMaterial({ color, toneMapped: false, transparent: true, opacity: 0.5 }))
    innerRing.rotation.x = -Math.PI / 2; innerRing.position.y = 0.51; g.add(innerRing)
    // Standing stones.
    const stones = []
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * TAU + 0.2
      const r = 7.2
      const hgt = 2.1 + (i % 3) * 0.7
      const monolith = addMesh(g, new THREE.DodecahedronGeometry(1, 0), i % 2 ? stone : darkStone, [Math.cos(a) * r, hgt * 0.58, Math.sin(a) * r], [0, -a, 0], [0.55, hgt * 0.75, 0.5])
      const rune = addMesh(g, new THREE.BoxGeometry(0.12, 0.4, 0.03), runeMat, [Math.cos(a) * (r - 0.4), hgt * 0.7, Math.sin(a) * (r - 0.4)], [0, -a, 0])
      stones.push({ monolith, rune, phase: i })
    }
    // Kind-specific centrepiece.
    const crystals = []
    if (kind === 'mountain') {
      // Arch of stacked stones.
      for (let i = 0; i < 7; i++) {
        const a = -0.8 + i * 0.27
        addMesh(g, new THREE.BoxGeometry(0.7, 1.4, 0.6), i % 2 ? stone : darkStone, [Math.cos(a) * 4.4, 2.2 + Math.sin(a) * 0.6, Math.sin(a) * 4.4], [0, -a, 0.2])
      }
      const crystal = addMesh(g, new THREE.OctahedronGeometry(0.7, 0), glowMat, [0, 2.2, 0])
      crystals.push(crystal)
    } else if (kind === 'reef') {
      // Driftwood arch and coral fan.
      for (const s of [-1, 1]) {
        const arch = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.18, 5, 12, Math.PI), new THREE.MeshStandardMaterial({ color: 0x5b4a3a, roughness: 0.95 }))
        arch.position.set(0, 1.2, 0); arch.rotation.z = s > 0 ? 0 : Math.PI; arch.rotation.y = Math.PI / 2; g.add(arch)
      }
      for (let i = 0; i < 7; i++) {
        const coral = addMesh(g, new THREE.ConeGeometry(0.18, 0.9 + (i % 4) * 0.35, 5), new THREE.MeshStandardMaterial({ color: i % 2 ? 0xff6b8a : 0xc7a4ff, roughness: 0.7, emissive: i % 2 ? 0x6a1e32 : 0x2f1f5e, emissiveIntensity: 0.3 }), [Math.cos(i) * 2.2, 0.8, Math.sin(i) * 2.2], [0.2, i, 0.2])
      }
      const crystal = addMesh(g, new THREE.OctahedronGeometry(0.65, 0), glowMat, [0, 2.1, 0])
      crystals.push(crystal)
    } else {
      // Roots and hanging lanterns.
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * TAU
        addMesh(g, new THREE.CylinderGeometry(0.18, 0.35, 4.2, 6), new THREE.MeshStandardMaterial({ color: 0x4a3524, roughness: 1 }), [Math.cos(a) * 2.8, 2.2, Math.sin(a) * 2.8], [Math.sin(a) * 0.4, 0, -Math.cos(a) * 0.4])
      }
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * TAU
        const lantern = addMesh(g, new THREE.SphereGeometry(0.18, 8, 6), glowMat, [Math.cos(a) * 3.1, 3.0 + (i % 2) * 0.5, Math.sin(a) * 3.1])
        crystals.push(lantern)
      }
    }
    // Floating shards.
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * TAU
      const shard = addMesh(g, new THREE.OctahedronGeometry(0.16, 0), glowMat, [Math.cos(a) * 3.9, 1.2, Math.sin(a) * 3.9])
      crystals.push(shard)
    }
    const aura = glowSprite(colorHex, 14, 0.16)
    aura.position.y = 1.6
    g.add(aura)
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.45, 60, 8, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }))
    beam.position.y = 30
    g.add(beam)
    // Brazier fires.
    const braziers = []
    for (let i = 0; i < 2; i++) {
      const a = i * Math.PI + 0.4
      const brazier = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.24, 0.55, 7), darkStone)
      brazier.position.set(Math.cos(a) * 5.2, 0.7, Math.sin(a) * 5.2); g.add(brazier)
      const flame = glowSprite(0xffa347, 1.4, 0.8)
      flame.position.set(brazier.position.x, 1.3, brazier.position.z); g.add(flame)
      braziers.push(flame)
    }
    this.colliders.push({ x: spec.x, z: spec.z, r: 3.0 })
    this.animated.push((dt, t) => {
      crystals.forEach((c, i) => {
        c.rotation.y = t * (0.5 + i * 0.1)
        c.position.y += Math.sin(t * 1.2 + i) * 0.002
      })
      aura.material.opacity = 0.12 + Math.sin(t * 2) * 0.04
      beam.material.opacity = 0.055 + Math.sin(t * 1.4) * 0.02
      braziers.forEach((f, i) => { f.scale.setScalar(1.15 + Math.sin(t * 9 + i) * 0.2) })
      runeRing.material.opacity = 1
    })
    this.root.add(g)
    return { group: g, crystals, beam, color: colorHex, colorObj: color, aura, runeRing }
  }

  // ------------------------------------------------------------------ GREAT TREE
  buildSilkTree() {
    const g = new THREE.Group()
    g.position.set(SILK_TREE.x, SILK_TREE.y, SILK_TREE.z)
    const bark = new THREE.MeshStandardMaterial({ color: 0x5f4a33, roughness: 1, flatShading: true })
    const barkDark = new THREE.MeshStandardMaterial({ color: 0x453525, roughness: 1, flatShading: true })
    const leaf = new THREE.MeshStandardMaterial({ color: 0x2c7045, roughness: 0.92, flatShading: true })
    const leafDark = new THREE.MeshStandardMaterial({ color: 0x1c5837, roughness: 0.92, flatShading: true })
    const leafLight = new THREE.MeshStandardMaterial({ color: 0x3f8a50, roughness: 0.92, flatShading: true })
    // Buttress roots.
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * TAU
      const root = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.4, 9, 6), i % 2 ? bark : barkDark)
      root.position.set(Math.cos(a) * 4.8, 2.6, Math.sin(a) * 4.8)
      root.rotation.set(Math.sin(a) * 0.65, 0, -Math.cos(a) * 0.65)
      root.castShadow = true; root.receiveShadow = true
      g.add(root)
    }
    // Trunk.
    addMesh(g, new THREE.CylinderGeometry(3.4, 5.3, 22, 12), bark, [0, 11, 0])
    addMesh(g, new THREE.CylinderGeometry(2.1, 3.5, 8, 10), barkDark, [0, 25, 0])
    // Canopy clusters.
    const clusters = []
    for (let i = 0; i < 15; i++) {
      const a = (i / 15) * TAU
      const r = i === 0 ? 0 : 7 + (i % 4) * 2.4
      const y = 29 + (i % 5) * 1.8 + (i === 0 ? 2 : 0)
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 1), i % 3 === 0 ? leafDark : i % 3 === 1 ? leaf : leafLight)
      m.position.set(Math.cos(a) * r, y, Math.sin(a) * r)
      m.scale.set(5.4 + (i % 3) * 1.1, 2.7 + (i % 2) * 0.8, 5.0 + (i % 4) * 1.0)
      m.castShadow = true
      g.add(m)
      clusters.push(m)
    }
    // Vines and lanterns.
    const lanterns = []
    for (let i = 0; i < 11; i++) {
      const a = (i / 11) * TAU
      const r = 5.5 + (i % 4) * 2.2
      const topY = 27 - (i % 3) * 2
      const len = 4 + (i % 5) * 1.8
      const vine = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, len, 4), new THREE.MeshStandardMaterial({ color: 0x3c5c36, roughness: 1 }))
      vine.position.set(Math.cos(a) * r, topY - len / 2, Math.sin(a) * r)
      g.add(vine)
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.25, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffa733, emissiveIntensity: 2.4, roughness: 0.2 }))
      l.position.set(Math.cos(a) * r, topY - len, Math.sin(a) * r)
      g.add(l)
      lanterns.push(l)
    }
    // Ritual circle.
    const runeMat = new THREE.MeshBasicMaterial({ color: 0xf4c95d, toneMapped: false })
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(8 - i * 1.4, 0.04, 4, 64), new THREE.MeshBasicMaterial({ color: i === 1 ? 0x8ff0ce : 0xf4c95d, transparent: true, opacity: 0.55 - i * 0.1, toneMapped: false }))
      ring.rotation.x = -Math.PI / 2; ring.position.y = 0.12 + i * 0.01; g.add(ring)
    }
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU
      const rune = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.14), runeMat)
      rune.position.set(Math.cos(a) * 7.6, 0.14, Math.sin(a) * 7.6); rune.rotation.y = -a; g.add(rune)
    }
    const aura = glowSprite(0xf4c95d, 30, 0.17)
    aura.position.y = 4
    g.add(aura)
    this.colliders.push({ x: SILK_TREE.x, z: SILK_TREE.z, r: 6.4 })
    this.animated.push((dt, t) => {
      clusters.forEach((c, i) => { c.position.y += Math.sin(t * 0.45 + i) * 0.0015 })
      lanterns.forEach((l, i) => { l.scale.setScalar(1 + Math.sin(t * 2.5 + i) * 0.08) })
      aura.material.opacity = 0.13 + Math.sin(t * 1.1) * 0.04
    })
    this.root.add(g)
    this.silkTree = g
  }

  // ------------------------------------------------------------------ NPCS
  buildNPCs() {
    for (const npc of NPCS) {
      const g = new THREE.Group()
      const h = terrainHeight(npc.x, npc.z)
      g.position.set(npc.x, h, npc.z)
      g.rotation.y = npc.id === 'nya' ? 2.7 : -0.5
      const skin = new THREE.MeshStandardMaterial({ color: npc.id === 'nya' ? 0x6e432b : 0x5a3724, roughness: 0.8, flatShading: true })
      const dress = new THREE.MeshStandardMaterial({ color: npc.id === 'nya' ? 0x2f6b5c : 0x4a8aa8, roughness: 0.85, flatShading: true })
      const accent = npc.id === 'nya' ? 0xf4c95d : 0xd95f4f
      addMesh(g, new THREE.CylinderGeometry(0.42, 0.65, 1.5, 7), dress, [0, 1.0, 0])
      addMesh(g, new THREE.SphereGeometry(0.28, 10, 8), dress, [0, 1.8, 0], [0, 0, 0], [1.1, 1.2, 0.9])
      addMesh(g, new THREE.CylinderGeometry(0.13, 0.15, 0.22, 7), skin, [0, 2.03, 0])
      addMesh(g, new THREE.SphereGeometry(0.23, 10, 8), skin, [0, 2.22, 0])
      addMesh(g, new THREE.SphereGeometry(0.23, 8, 6), new THREE.MeshStandardMaterial({ color: npc.id === 'nya' ? 0x2a1b12 : 0x171310, roughness: 1 }), [0, 2.32, 0.03], [0, 0, 0], [1.05, 0.7, 1.05])
      if (npc.id === 'nya') {
        // Headwrap and beads.
        addMesh(g, new THREE.TorusGeometry(0.25, 0.09, 5, 14), new THREE.MeshStandardMaterial({ color: 0xd95f4f, roughness: 0.85 }), [0, 2.38, 0], [Math.PI / 2, 0, 0])
        addMesh(g, new THREE.ConeGeometry(0.2, 0.45, 6), new THREE.MeshStandardMaterial({ color: 0xd95f4f, roughness: 0.85 }), [0.2, 2.45, 0.02], [0, 0, -0.5])
        for (let i = 0; i < 3; i++) addMesh(g, new THREE.TorusGeometry(0.32 + i * 0.03, 0.025, 4, 12), new THREE.MeshStandardMaterial({ color: accent, metalness: 0.4, roughness: 0.4 }), [0, 1.85 - i * 0.12, 0], [Math.PI / 2, 0, 0])
      } else {
        // Cap and shirt.
        addMesh(g, new THREE.CylinderGeometry(0.24, 0.26, 0.12, 8), new THREE.MeshStandardMaterial({ color: 0x2f4b5e, roughness: 0.9 }), [0, 2.42, 0])
        addMesh(g, new THREE.BoxGeometry(0.55, 0.55, 0.12), new THREE.MeshStandardMaterial({ color: 0xe9ddc2, roughness: 0.9 }), [0, 1.9, -0.28])
        addMesh(g, new THREE.BoxGeometry(0.6, 0.4, 0.4), new THREE.MeshStandardMaterial({ color: 0x4a8aa8, roughness: 0.9 }), [0, 1.1, 0.05])
      }
      // Arms.
      for (const s of [-1, 1]) addMesh(g, new THREE.CylinderGeometry(0.07, 0.06, 0.75, 5), skin, [s * 0.43, 1.4, 0], [0, 0, s * 0.14])
      // Floating marker.
      const marker = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), new THREE.MeshBasicMaterial({ color: 0xf4c95d, toneMapped: false }))
      marker.position.y = 3.05; g.add(marker)
      const halo = glowSprite(0xf4c95d, 1.1, 0.45); halo.position.y = 3.05; g.add(halo)
      this.animated.push((dt, t) => {
        marker.rotation.y = t * 1.6
        marker.position.y = 3.05 + Math.sin(t * 1.6) * 0.12
        halo.position.y = marker.position.y
      })
      this.root.add(g)
      const npcData = { ...npc, group: g, marker, halo }
      this.npcModels.push(npcData)
      this.colliders.push({ x: npc.x, z: npc.z, r: 0.9 })
    }
  }

  // ------------------------------------------------------------------ PICKUPS
  buildPickups() {
    const spots = [
      { type: 'mango', x: 20, z: 52 }, { type: 'mango', x: -18, z: 4 }, { type: 'mango', x: 54, z: 33 },
      { type: 'mango', x: 3, z: -30 }, { type: 'mango', x: -38, z: -4 }, { type: 'mango', x: 36, z: 21 },
      { type: 'bloom', x: 7, z: 68 }, { type: 'bloom', x: -24, z: -13 }, { type: 'bloom', x: 58, z: 17 }, { type: 'bloom', x: 12, z: -44 },
      { type: 'orbs', x: 30, z: 42 }, { type: 'orbs', x: -40, z: -22 }, { type: 'orbs', x: 62, z: 12 },
    ]
    for (const s of spots) {
      const h = terrainHeight(s.x, s.z)
      const g = new THREE.Group()
      g.position.set(s.x, h, s.z)
      const coreMat = s.type === 'mango'
        ? new THREE.MeshStandardMaterial({ color: 0xff8c3a, emissive: 0x6d2a05, emissiveIntensity: 0.45, roughness: 0.55 })
        : s.type === 'bloom'
          ? new THREE.MeshStandardMaterial({ color: 0x79dcff, emissive: 0x1e8fb6, emissiveIntensity: 1.4, roughness: 0.2 })
          : new THREE.MeshStandardMaterial({ color: 0x37d6a5, emissive: 0x1e8f70, emissiveIntensity: 1.4, roughness: 0.2 })
      let core
      if (s.type === 'mango') {
        core = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), coreMat)
        core.scale.set(0.85, 1.15, 0.85); core.position.y = 0.55
        const leafM = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.32, 4), colorMat(0x4a8f43)); leafM.position.set(0.12, 0.78, 0); leafM.rotation.z = -0.6; g.add(leafM)
      } else if (s.type === 'bloom') {
        core = new THREE.Mesh(new THREE.OctahedronGeometry(0.25, 0), coreMat); core.position.y = 0.6
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * TAU
          const petal = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 4), new THREE.MeshStandardMaterial({ color: 0xc7a4ff, emissive: 0x4a2b8f, emissiveIntensity: 0.5, roughness: 0.5 }))
          petal.position.set(Math.cos(a) * 0.22, 0.6, Math.sin(a) * 0.22); petal.rotation.set(Math.PI / 2, 0, a); g.add(petal)
        }
      } else {
        core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 9), coreMat); core.position.y = 0.5
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.03, 4, 16), new THREE.MeshBasicMaterial({ color: 0x8ff0ce, toneMapped: false }))
        ring.rotation.x = Math.PI / 2; ring.position.y = 0.5; g.add(ring)
      }
      core.castShadow = true
      g.add(core)
      const halo = glowSprite(s.type === 'mango' ? 0xffa347 : s.type === 'bloom' ? 0x79dcff : 0x37d6a5, 1.7, 0.4)
      halo.position.y = 0.6; g.add(halo)
      g.userData.baseY = h
      this.animated.push((dt, t) => { core.rotation.y = t * 1.2; core.position.y = 0.55 + Math.sin(t * 2 + s.x) * 0.1; halo.position.y = core.position.y })
      this.root.add(g)
      this.pickups.push({ ...s, group: g, active: true, y: h })
    }
  }

  // ------------------------------------------------------------------ PARTICLES
  buildParticles() {
    // Pollen motes all across the island.
    const count = this.quality === 'low' ? 220 : 520
    const pos = new Float32Array(count * 3)
    const phase = new Float32Array(count)
    const rng = this.rng
    for (let i = 0; i < count; i++) {
      const a = rng() * TAU, r = 10 + rng() * 110
      const x = Math.cos(a) * r, z = Math.sin(a) * r
      pos[i * 3] = x; pos[i * 3 + 1] = terrainHeight(x, z) + 0.8 + rng() * 8; pos[i * 3 + 2] = z
      phase[i] = rng() * TAU
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color: 0xfff0bf, size: 0.13, map: radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)', 32), transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })
    const points = new THREE.Points(geo, mat)
    this.root.add(points)
    this.animated.push((dt, t) => {
      const arr = geo.attributes.position.array
      for (let i = 0; i < count; i++) {
        arr[i * 3 + 1] += Math.sin(t * 0.7 + phase[i]) * dt * 0.18
        arr[i * 3] += Math.cos(t * 0.4 + phase[i]) * dt * 0.09
      }
      geo.attributes.position.needsUpdate = true
    })

    // Fireflies near the grove.
    const fireCount = this.quality === 'low' ? 60 : 150
    const fpos = new Float32Array(fireCount * 3)
    const fphase = new Float32Array(fireCount)
    for (let i = 0; i < fireCount; i++) {
      const a = rng() * TAU, r = rng() * 33
      const x = 2 + Math.cos(a) * r, z = -46 + Math.sin(a) * r
      fpos[i * 3] = x; fpos[i * 3 + 1] = terrainHeight(x, z) + 0.8 + rng() * 4.5; fpos[i * 3 + 2] = z; fphase[i] = rng() * TAU
    }
    const fgeo = new THREE.BufferGeometry(); fgeo.setAttribute('position', new THREE.BufferAttribute(fpos, 3))
    const fmat = new THREE.PointsMaterial({ color: 0xbfffa1, size: 0.28, map: radialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)', 32), transparent: true, opacity: 0.85, depthWrite: false, blending: THREE.AdditiveBlending })
    const fireflies = new THREE.Points(fgeo, fmat)
    this.root.add(fireflies)
    this.animated.push((dt, t) => {
      const arr = fgeo.attributes.position.array
      for (let i = 0; i < fireCount; i++) {
        arr[i * 3 + 1] += Math.sin(t * 1.6 + fphase[i]) * dt * 0.28
        arr[i * 3] += Math.cos(t * 1.1 + fphase[i]) * dt * 0.12
      }
      fgeo.attributes.position.needsUpdate = true
      fmat.opacity = 0.6 + Math.sin(t * 2.2) * 0.18
    })
  }

  // ------------------------------------------------------------------ WAYPOINTS
  buildWaypoints() {
    const defs = [
      ['nya', NPCS[0].x, NPCS[0].z, 0xf4c95d],
      ['mountain', SHRINES.mountain.x, SHRINES.mountain.z, 0xf4c95d],
      ['reef', SHRINES.reef.x, SHRINES.reef.z, 0xc7a4ff],
      ['canopy', SHRINES.canopy.x, SHRINES.canopy.z, 0x8ff0ce],
      ['tree', SHRINES.tree.x, SHRINES.tree.z, 0xf4c95d],
      ['fitz', NPCS[1].x, NPCS[1].z, 0x37d6a5],
    ]
    for (const [id, x, z, color] of defs) {
      const y = terrainHeight(x, z)
      const w = buildWaypoint(color)
      w.position.set(x, y, z)
      w.visible = false
      this.root.add(w)
      this.waypoints[id] = w
    }
  }

  showWaypoint(id, visible = true) {
    for (const key in this.waypoints) this.waypoints[key].visible = false
    if (id && this.waypoints[id]) this.waypoints[id].visible = visible
  }

  // ------------------------------------------------------------------ HELPERS
  nearPath(x, z, pad = 0) {
    for (const p of this.pathSample) {
      if (Math.abs(p[0] - x) < 8 + pad && Math.abs(p[2] - z) < 8 + pad) {
        if (Math.hypot(p[0] - x, p[2] - z) < 2.2 + pad) return true
      }
    }
    return false
  }

  nearStructure(x, z, pad = 0) {
    const spots = [
      [VILLAGE.x, VILLAGE.z, 14], [WATERFALL.x, WATERFALL.z, 7], [SILK_TREE.x, SILK_TREE.z, 9],
      [SHRINE_NIAN.x, SHRINE_NIAN.z, 10], [SHRINE_BAKUNAWA.x, SHRINE_BAKUNAWA.z, 9], [SHRINE_QUETZAL.x, SHRINE_QUETZAL.z, 9],
    ]
    for (const [sx, sz, r] of spots) if (Math.hypot(x - sx, z - sz) < r + pad) return true
    return false
  }

  isBlocked(x, z, radius = 0.4) {
    for (const c of this.colliders) {
      if (Math.hypot(x - c.x, z - c.z) < c.r + radius) return true
    }
    return false
  }

  update(dt, t) {
    this.time = t
    if (this.sky) this.sky.material.uniforms.time.value = t
    for (const fn of this.animated) fn(dt, t)
    if (this.sunLight) {
      const target = new THREE.Vector3(0, 0, 0)
      this.sunLight.target.position.copy(target)
    }
  }
}
