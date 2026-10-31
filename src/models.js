import * as THREE from 'three'
import { TAU, clamp, glowSprite, lerp, mesh } from './utils.js'

const GEO = {
  sphere: new THREE.SphereGeometry(1, 12, 9),
  sphereHi: new THREE.SphereGeometry(1, 16, 12),
  ico: new THREE.IcosahedronGeometry(1, 0),
  ico1: new THREE.IcosahedronGeometry(1, 1),
  cone: new THREE.ConeGeometry(1, 1, 6),
  cylinder: new THREE.CylinderGeometry(1, 1, 1, 7),
  box: new THREE.BoxGeometry(1, 1, 1),
  torus: new THREE.TorusGeometry(1, 0.16, 5, 16),
  ring: new THREE.RingGeometry(0.9, 1, 24),
}

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color, roughness: 0.78, metalness: 0.04, flatShading: true,
    emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.emissiveIntensity ?? 0,
    transparent: opts.transparent ?? false, opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide, depthWrite: opts.depthWrite ?? true,
  })
}

function basic(color) { return new THREE.MeshBasicMaterial({ color, toneMapped: false }) }

function add(parent, geo, material, pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1]) {
  const m = new THREE.Mesh(geo, material)
  m.position.set(...pos)
  m.rotation.set(...rot)
  m.scale.set(...scale)
  m.castShadow = true
  m.receiveShadow = true
  parent.add(m)
  return m
}

function eye(parent, x, y, z, color, r = 0.055) {
  const m = add(parent, GEO.sphere, basic(color), [x, y, z], [0, 0, 0], [r, r * 1.15, r])
  m.castShadow = false
  return m
}

function glow(parent, color, size, opacity = 0.85, pos = [0, 0, 0]) {
  const s = glowSprite(color, size, opacity)
  s.position.set(...pos)
  s.userData.baseScale = size
  parent.add(s)
  return s
}

function leg(parent, x, y, z, len, material, hoofColor, thick = 0.08, phase = 0) {
  const pivot = new THREE.Group()
  pivot.position.set(x, y, z)
  parent.add(pivot)
  const upper = add(pivot, GEO.cylinder, material, [0, -len * 0.33, 0], [0, 0, 0], [thick, len * 0.52, thick])
  const knee = new THREE.Group()
  knee.position.set(0, -len * 0.55, 0)
  pivot.add(knee)
  add(knee, GEO.cylinder, material, [0, -len * 0.25, 0], [0, 0, 0], [thick * 0.8, len * 0.45, thick * 0.8])
  add(knee, GEO.box, mat(hoofColor, { emissive: hoofColor, emissiveIntensity: 0.5 }), [0, -len * 0.48, -0.02], [0, 0, 0], [thick * 1.5, 0.07, thick * 2.1])
  return { pivot, knee, phase, upper }
}

function wing(parent, side, material, accent, pos, span = 1) {
  const pivot = new THREE.Group()
  pivot.position.set(...pos)
  pivot.scale.x = side
  parent.add(pivot)
  const shape = new THREE.BufferGeometry()
  const s = span
  const verts = new Float32Array([
    0, 0, 0, s * 0.55, 0.06, -0.3, s * 1.05, -0.08, 0.12,
    0, 0, 0, s * 1.05, -0.08, 0.12, s * 0.6, -0.1, 0.7,
    0, 0, 0, s * 0.6, -0.1, 0.7, s * 0.12, -0.04, 0.55,
  ])
  shape.setAttribute('position', new THREE.BufferAttribute(verts, 3))
  shape.computeVertexNormals()
  const m = new THREE.Mesh(shape, material)
  m.castShadow = true
  pivot.add(m)
  const tip = add(pivot, GEO.cone, accent, [s * 0.8, 0, 0.22], [0, 0, -Math.PI / 2], [0.06, s * 0.5, 0.06])
  return { pivot, tip, side, phase: side > 0 ? 0 : Math.PI }
}

function tail(parent, color, glowColor, base = [0, 0, 0], len = 1, up = 0.5) {
  const pivot = new THREE.Group()
  pivot.position.set(...base)
  parent.add(pivot)
  const segments = []
  let p = pivot
  for (let i = 0; i < 4; i++) {
    const g = new THREE.Group()
    g.position.z = i === 0 ? 0 : len * 0.26
    g.rotation.x = -0.12
    p.add(g)
    const r = 0.11 * (1 - i * 0.16)
    add(g, GEO.sphere, mat(color), [0, up * 0.02 * i, len * 0.13], [0, 0, 0], [r, r, len * 0.17])
    segments.push(g)
    p = g
  }
  const tipGlow = glow(p, glowColor, 0.55, 0.7, [0, 0, len * 0.25])
  return { pivot, segments, tipGlow }
}

function statusBar() {
  const group = new THREE.Group()
  const bg = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.055), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55, depthTest: false }))
  bg.renderOrder = 20
  const fill = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.04), new THREE.MeshBasicMaterial({ color: 0xff6b4a, toneMapped: false, depthTest: false }))
  fill.position.z = 0.001
  fill.renderOrder = 21
  group.add(bg, fill)
  group.visible = false
  group.userData.fill = fill
  return group
}

// ------------------------------------------------------------------ PLAYER

export function buildPlayer() {
  const root = new THREE.Group()
  root.name = 'warden-kai'
  const body = new THREE.Group()
  root.add(body)

  const skin = mat(0x8a5a3c)
  const jacket = mat(0x167a67)
  const jacketLight = mat(0x21a184)
  const pants = mat(0x263c39)
  const cream = mat(0xe9ddc2)
  const leather = mat(0x4a3023)
  const gold = mat(0xf4c95d, { emissive: 0x6b4a0d, emissiveIntensity: 0.25, metalness: 0.35, roughness: 0.45 })
  const aether = mat(0x2cf2c0, { emissive: 0x2cf2c0, emissiveIntensity: 2.4, roughness: 0.2 })

  const hips = new THREE.Group()
  hips.position.y = 0.94
  body.add(hips)
  add(hips, GEO.sphere, pants, [0, 0, 0], [0, 0, 0], [0.27, 0.2, 0.19])

  const legL = leg(hips, -0.14, -0.02, 0, 0.92, pants, 0x2a2019, 0.095, 0)
  const legR = leg(hips, 0.14, -0.02, 0, 0.92, pants, 0x2a2019, 0.095, Math.PI)

  const torso = new THREE.Group()
  torso.position.y = 0.2
  hips.add(torso)
  add(torso, GEO.sphere, jacket, [0, 0.28, 0], [0, 0, 0], [0.31, 0.38, 0.21])
  add(torso, GEO.sphere, cream, [0, 0.3, -0.12], [0, 0, 0], [0.16, 0.27, 0.11])
  add(torso, GEO.box, leather, [0, 0.08, 0.02], [0, 0, 0], [0.48, 0.09, 0.32])
  add(torso, GEO.box, gold, [0, 0.1, 0.02], [0, 0, 0], [0.5, 0.025, 0.33])
  add(torso, GEO.sphere, jacketLight, [-0.26, 0.34, -0.02], [0, 0, 0], [0.1, 0.2, 0.16])
  add(torso, GEO.sphere, jacketLight, [0.26, 0.34, -0.02], [0, 0, 0], [0.1, 0.2, 0.16])

  // Satchel and little spirit charms.
  add(torso, GEO.box, leather, [-0.32, 0.05, 0.15], [0, 0.2, 0], [0.16, 0.2, 0.11])
  add(torso, GEO.sphere, gold, [0.3, 0.08, 0.14], [0, 0, 0], [0.055, 0.075, 0.055])

  const neck = new THREE.Group()
  neck.position.y = 0.66
  torso.add(neck)
  add(neck, GEO.cylinder, skin, [0, 0.05, 0], [0, 0, 0], [0.08, 0.13, 0.08])

  const head = new THREE.Group()
  head.position.y = 0.19
  neck.add(head)
  add(head, GEO.sphere, skin, [0, 0.08, 0], [0, 0, 0], [0.16, 0.19, 0.17])
  add(head, GEO.sphere, mat(0x1a1712), [0, 0.16, 0.035], [0, 0, 0], [0.17, 0.13, 0.17])
  // short curls
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * TAU
    add(head, GEO.ico, mat(0x201a13), [Math.cos(a) * 0.12, 0.19 + (i % 3) * 0.035, Math.sin(a) * 0.11 + 0.02], [0, 0, 0], [0.055, 0.06, 0.05])
  }
  eye(head, -0.06, 0.08, -0.155, 0x0b0b09, 0.024)
  eye(head, 0.06, 0.08, -0.155, 0x0b0b09, 0.024)
  add(head, GEO.sphere, mat(0x54321e), [0, 0.03, -0.16], [0, 0, 0], [0.045, 0.05, 0.04])
  add(head, GEO.box, cream, [0, 0.04, -0.185], [0, 0, 0], [0.11, 0.026, 0.012])
  add(head, GEO.torus, gold, [0.14, 0.05, -0.02], [0, 0, Math.PI / 2], [0.035, 0.035, 0.035])

  // Scarf — two cloth tails that move in the wind.
  const scarf = new THREE.Group()
  scarf.position.set(0, 0.55, 0.08)
  torso.add(scarf)
  add(scarf, GEO.torus, mat(0xd9583f), [0, 0, 0], [Math.PI / 2, 0, 0], [0.14, 0.14, 0.08])
  const scarfTail1 = add(scarf, GEO.box, mat(0xd9583f), [0.1, -0.03, 0.18], [0.18, 0.2, 0.1], [0.1, 0.03, 0.42])
  const scarfTail2 = add(scarf, GEO.box, mat(0xb8412f), [-0.08, -0.06, 0.15], [-0.12, -0.1, -0.18], [0.08, 0.025, 0.34])

  // Arms.
  function arm(side) {
    const shoulder = new THREE.Group()
    shoulder.position.set(0.3 * side, 0.48, 0)
    torso.add(shoulder)
    add(shoulder, GEO.sphere, jacketLight, [0, 0, 0], [0, 0, 0], [0.12, 0.13, 0.12])
    add(shoulder, GEO.cylinder, jacket, [0, -0.19, 0], [0, 0, 0], [0.075, 0.34, 0.075])
    const elbow = new THREE.Group()
    elbow.position.y = -0.35
    shoulder.add(elbow)
    add(elbow, GEO.cylinder, skin, [0, -0.13, 0], [0, 0, 0], [0.06, 0.24, 0.06])
    const hand = new THREE.Group()
    hand.position.y = -0.28
    elbow.add(hand)
    add(hand, GEO.sphere, skin, [0, 0, 0], [0, 0, 0], [0.075, 0.085, 0.06])
    return { shoulder, elbow, hand }
  }
  const armL = arm(-1)
  const armR = arm(1)

  // Warden gauntlet: a brass cradle with a glowing soul lens.
  const gauntlet = new THREE.Group()
  gauntlet.position.set(0, -0.015, -0.02)
  armR.hand.add(gauntlet)
  add(gauntlet, GEO.torus, gold, [0, 0, 0], [Math.PI / 2, 0, 0], [0.09, 0.09, 0.05])
  add(gauntlet, GEO.cylinder, leather, [0, -0.03, 0], [0, 0, 0], [0.085, 0.12, 0.085])
  const lens = add(gauntlet, GEO.sphere, aether, [0, 0, -0.09], [0, 0, 0], [0.065, 0.065, 0.05])
  lens.castShadow = false
  const muzzleGlow = glow(gauntlet, 0x62ffd8, 0.5, 0.9, [0, 0, -0.14])
  const muzzle = new THREE.Object3D()
  muzzle.position.set(0, 0, -0.24)
  gauntlet.add(muzzle)
  const eyeLight = new THREE.PointLight(0x6fffd9, 0.85, 4.5, 2)
  eyeLight.position.copy(muzzle.position)
  gauntlet.add(eyeLight)

  // Backpack / field kit.
  add(torso, GEO.box, leather, [0, 0.26, 0.24], [0.05, 0, 0], [0.26, 0.3, 0.13])
  add(torso, GEO.cylinder, cream, [-0.18, 0.52, 0.24], [0, 0, 0.3], [0.04, 0.4, 0.04])
  const lantern = add(torso, GEO.sphere, mat(0xffd166, { emissive: 0xffa733, emissiveIntensity: 1.6 }), [0.19, 0.5, 0.24], [0, 0, 0], [0.06, 0.08, 0.06])
  lantern.castShadow = false

  root.userData.animate = (t, o = {}) => {
    const moving = o.moving ?? 0
    const speed = o.speed ?? 0
    const airborne = o.airborne ?? false
    const stride = t * (6 + speed * 1.3)
    const amp = airborne ? 0.28 : clamp(speed / 6.4, 0, 1) * 0.75
    legL.pivot.rotation.x = Math.sin(stride) * amp
    legR.pivot.rotation.x = Math.sin(stride + Math.PI) * amp
    legL.knee.rotation.x = Math.max(0, -Math.sin(stride)) * amp * 0.7
    legR.knee.rotation.x = Math.max(0, -Math.sin(stride + Math.PI)) * amp * 0.7
    hips.position.y = 0.94 + (airborne ? 0.02 : Math.abs(Math.sin(stride * 2)) * 0.025 * amp)
    torso.rotation.x = airborne ? -0.08 : 0.02 + Math.sin(t * 2.1) * 0.012
    head.rotation.x = -0.03 + Math.sin(t * 1.7) * 0.03
    head.rotation.y = Math.sin(t * 0.52) * 0.08
    const aim = o.aiming ? 1 : 0
    armR.shoulder.rotation.x = lerp(Math.sin(stride + Math.PI) * amp * 0.8, -0.86, aim)
    armR.shoulder.rotation.z = lerp(0.08, -0.22, aim)
    armR.elbow.rotation.x = lerp(0.12, 0.12, aim)
    armL.shoulder.rotation.x = Math.sin(stride) * amp * 0.7
    armL.shoulder.rotation.z = -0.08
    scarfTail1.rotation.x = 0.12 + Math.sin(t * 2.4) * 0.08 + speed * 0.02
    scarfTail1.rotation.y = Math.sin(t * 1.8) * 0.09
    scarfTail2.rotation.x = -0.16 + Math.sin(t * 2.1 + 1) * 0.09
    muzzleGlow.material.opacity = 0.7 + Math.sin(t * 9) * 0.12
    eyeLight.intensity = 0.7 + Math.sin(t * 9) * 0.15
    if (airborne) {
      legL.knee.rotation.x = 0.5
      legR.knee.rotation.x = 0.45
    }
  }

  root.userData.muzzle = muzzle
  root.userData.eyeLight = eyeLight
  return root
}

// ------------------------------------------------------------------ SPIDER

function buildSpider(def, opts) {
  const g = new THREE.Group()
  const body = new THREE.Group()
  g.add(body)
  const c = def.colors
  const dark = mat(c.primary, { roughness: 0.55 })
  const mid = mat(c.secondary, { roughness: 0.6 })
  const gold = mat(c.accent, { emissive: c.accent, emissiveIntensity: 0.3, metalness: 0.5, roughness: 0.4 })

  add(body, GEO.sphere, mid, [0, 0.66, -0.42], [0, 0, 0], [0.55, 0.4, 0.62])
  add(body, GEO.sphere, dark, [0, 0.7, 0.52], [0, 0, 0], [0.72, 0.55, 0.8])
  add(body, GEO.sphere, gold, [0, 0.72, 0.7], [0.3, 0.4, 0], [0.25, 0.2, 0.35])
  add(body, GEO.sphere, gold, [0, 0.96, 0.46], [0, 0, 0], [0.2, 0.06, 0.12])
  add(body, GEO.ico, dark, [0, 0.58, -1.06], [0, 0, 0], [0.36, 0.31, 0.4])
  add(body, GEO.sphere, mid, [0, 0.44, -1.22], [0, 0, 0], [0.2, 0.14, 0.18])

  const eyes = []
  for (let i = 0; i < 3; i++) {
    eye(body, -0.14 - i * 0.055, 0.68 + i * 0.035, -1.3, c.eye, 0.048 - i * 0.006)
    eye(body, 0.14 + i * 0.055, 0.68 + i * 0.035, -1.3, c.eye, 0.048 - i * 0.006)
    eyes.push(eye)
  }
  eye(body, 0, 0.76, -1.33, c.eye, 0.06)
  add(body, GEO.cone, mat(c.accent), [0, 0.79, -1.26], [0.5, 0, 0], [0.025, 0.15, 0.025])

  const legs = []
  for (let side = -1; side <= 1; side += 2) {
    for (let i = 0; i < 4; i++) {
      const pivot = new THREE.Group()
      pivot.position.set(0.38 * side, 0.62, -0.62 + i * 0.38)
      body.add(pivot)
      const out = (0.66 + (i === 1 || i === 2 ? 0.12 : 0)) * side
      const upper = add(pivot, GEO.cylinder, dark, [out * 0.5, 0.17, 0], [0, 0, side * (1.05 + i * 0.04)], [0.055, 0.78, 0.055])
      const knee = new THREE.Group()
      knee.position.set(out, 0.22, 0)
      pivot.add(knee)
      add(knee, GEO.cylinder, mid, [out * 0.3, -0.26, 0], [0, 0, -side * 0.55], [0.045, 0.7, 0.045])
      add(knee, GEO.cone, gold, [out * 0.48, -0.53, 0], [0, 0, -side * 0.55], [0.04, 0.16, 0.04])
      legs.push({ pivot, phase: (i / 3) * Math.PI + (side > 0 ? Math.PI : 0), side, base: pivot.rotation.z })
    }
  }
  const aura = glow(body, c.glow, 2.5, 0.2, [0, 0.7, 0.2])
  const topGlow = glow(body, c.glow, 0.9, 0.35, [0, 1.05, 0.35])

  g.userData.animate = (t, o = {}) => {
    const speed = o.speed ?? 0
    const amp = 0.13 + speed * 0.03
    for (const l of legs) l.pivot.rotation.y = Math.sin(t * (7 + speed) + l.phase) * amp
    body.position.y = Math.sin(t * 2.2) * 0.035
    body.rotation.x = Math.sin(t * 1.5) * 0.015
    aura.material.opacity = 0.16 + Math.sin(t * 2.5) * 0.05
    if (o.attacking) body.position.z = Math.sin(t * 28) * 0.04
  }
  g.userData.height = 1.7
  g.userData.radius = 1.0
  return g
}

// ------------------------------------------------------------------ QUADRUPED BASE

function quadrupedBase(def, opts, config) {
  const g = new THREE.Group()
  const body = new THREE.Group()
  g.add(body)
  const c = def.colors
  const primary = mat(c.primary, { roughness: 0.8 })
  const secondary = mat(c.secondary, { roughness: 0.72 })
  const accent = mat(c.accent, { emissive: c.accent, emissiveIntensity: 0.45, roughness: 0.42 })
  const glowMat = mat(c.glow, { emissive: c.glow, emissiveIntensity: 2.2, roughness: 0.25 })

  const len = config.length ?? 1.35
  const hipY = config.hipY ?? 1.02
  add(body, GEO.sphere, primary, [0, hipY, 0.15], [0, 0, 0], [0.43, 0.42, len * 0.62])
  add(body, GEO.sphere, primary, [0, hipY + 0.16, -len * 0.45], [0, 0, 0], [0.36, 0.35, 0.45])
  add(body, GEO.sphere, secondary, [0, hipY - 0.02, 0.52], [0, 0, 0], [0.38, 0.34, 0.38])

  const head = new THREE.Group()
  head.position.set(0, hipY + 0.42, -len * 0.92)
  body.add(head)
  add(head, GEO.sphere, primary, [0, 0, 0], [0, 0, 0], [0.32, 0.31, 0.36])
  add(head, GEO.sphere, secondary, [0, -0.06, -0.29], [0, 0, 0], [0.2, 0.16, 0.24])
  eye(head, -0.14, 0.08, -0.3, c.eye, 0.055)
  eye(head, 0.14, 0.08, -0.3, c.eye, 0.055)
  add(head, GEO.sphere, basic(0x0a0806), [0, -0.06, -0.53], [0, 0, 0], [0.09, 0.055, 0.05])
  add(head, GEO.cone, accent, [0, -0.03, -0.52], [-Math.PI / 2, 0, 0], [0.035, 0.18, 0.035])

  const legs = []
  for (const side of [-1, 1]) {
    for (const front of [-1, 1]) {
      const l = leg(body, 0.28 * side, hipY - 0.25, front * len * 0.42, hipY + 0.02, primary, c.glow, config.legThick ?? 0.09, front > 0 ? Math.PI : 0)
      legs.push(l)
    }
  }
  const tailData = config.tail ? tail(body, primary, c.glow, [0, hipY + 0.18, len * 0.62], config.tailLen ?? 1.15, 0.6) : null

  return { g, body, head, primary, secondary, accent, glowMat, legs, tail: tailData }
}

// ------------------------------------------------------------------ ROLLING CALF

function buildCalf(def) {
  const b = quadrupedBase(def, {}, { length: 1.5, hipY: 1.0, tail: true, tailLen: 1.2 })
  const { g, body, head, accent, glowMat } = b
  const c = def.colors
  // Ember mane and dorsal flames.
  const flameMat = mat(c.glow, { emissive: c.glow, emissiveIntensity: 3.4, transparent: true, opacity: 0.85, roughness: 0.2 })
  const flames = []
  for (let i = 0; i < 13; i++) {
    const a = (i / 13) * TAU
    const f = add(head, GEO.cone, flameMat, [Math.cos(a) * 0.33, 0.16 + Math.sin(a) * 0.1, 0.05 + Math.sin(a) * 0.18], [0.2 * Math.cos(a), 0, -0.35 * Math.cos(a)], [0.07, 0.24 + (i % 3) * 0.09, 0.07])
    flames.push(f)
  }
  for (let i = 0; i < 7; i++) {
    const f = add(body, GEO.cone, flameMat, [(i % 2 ? -1 : 1) * 0.12, 1.15 + (i % 3) * 0.06, -0.6 + i * 0.22], [0, 0, (i % 2 ? -0.18 : 0.18)], [0.07, 0.28 + (i % 2) * 0.12, 0.07])
    flames.push(f)
  }
  // Horns.
  add(head, GEO.cone, mat(0x4a2f22), [-0.2, 0.27, -0.1], [0, 0, 0.65], [0.06, 0.35, 0.06])
  add(head, GEO.cone, mat(0x4a2f22), [0.2, 0.27, -0.1], [0, 0, -0.65], [0.06, 0.35, 0.06])
  // Ears.
  add(head, GEO.cone, mat(c.secondary), [-0.32, 0.14, 0.02], [0, 0, 0.9], [0.07, 0.24, 0.07])
  add(head, GEO.cone, mat(c.secondary), [0.32, 0.14, 0.02], [0, 0, -0.9], [0.07, 0.24, 0.07])
  // Lava cracks.
  for (let i = 0; i < 5; i++) {
    add(body, GEO.box, glowMat, [0.0, 0.86 + i * 0.07, -0.5 + i * 0.3], [0, 0.3 * i, 0], [0.02, 0.3, 0.02])
  }
  const aura = glow(body, c.glow, 2.6, 0.22, [0, 0.75, 0])
  g.userData.animate = (t, o = {}) => {
    const speed = o.speed ?? 0
    const stride = t * (6.5 + speed)
    b.legs.forEach((l, i) => { l.pivot.rotation.x = Math.sin(stride + (i % 2 ? Math.PI : 0)) * (0.22 + speed * 0.03) })
    body.position.y = Math.abs(Math.sin(stride)) * 0.035
    body.rotation.z = Math.sin(stride * 0.5) * 0.02
    flames.forEach((f, i) => {
      const k = 0.72 + Math.sin(t * 11 + i * 1.7) * 0.28
      f.scale.y = (0.24 + (i % 3) * 0.09) * k
      f.material.opacity = 0.72 + Math.sin(t * 9 + i) * 0.12
    })
    aura.material.opacity = 0.16 + Math.sin(t * 4) * 0.04
    if (o.attacking) { head.rotation.x = -0.4; body.position.z = Math.sin(t * 24) * 0.03 }
  }
  g.userData.height = 2.0
  g.userData.radius = 1.0
  return g
}

// ------------------------------------------------------------------ NIAN

function buildLion(def) {
  const b = quadrupedBase(def, {}, { length: 1.55, hipY: 1.15, tail: true, tailLen: 1.05, legThick: 0.11 })
  const { g, body, head, accent, glowMat } = b
  const c = def.colors
  // Mane ring.
  const maneMat = mat(c.secondary, { roughness: 0.7 })
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * TAU
    const len = 0.26 + (i % 3) * 0.05
    add(head, GEO.cone, maneMat, [Math.cos(a) * 0.38, Math.sin(a) * 0.28, 0.12 + Math.cos(a * 2) * 0.03], [0, 0, -a + Math.PI / 2], [0.11, len, 0.09])
  }
  add(head, GEO.torus, mat(c.accent, { emissive: c.accent, emissiveIntensity: 0.25 }), [0, 0, -0.08], [0, 0, 0], [0.35, 0.35, 0.2])
  // Horns.
  const horn = mat(0x3d2b1b)
  add(head, GEO.cone, horn, [-0.24, 0.31, -0.04], [0, 0, 0.55], [0.065, 0.45, 0.065])
  add(head, GEO.cone, horn, [0.24, 0.31, -0.04], [0, 0, -0.55], [0.065, 0.45, 0.065])
  // Tusks.
  add(head, GEO.cone, accent, [-0.14, -0.17, -0.4], [-0.4, 0, 0.1], [0.04, 0.2, 0.04])
  add(head, GEO.cone, accent, [0.14, -0.17, -0.4], [-0.4, 0, -0.1], [0.04, 0.2, 0.04])
  // Armored plates.
  for (let i = 0; i < 3; i++) {
    add(body, GEO.ico, mat(c.accent, { emissive: c.accent, emissiveIntensity: 0.18 }), [-0.36 + i * 0.36, 1.28, -0.2], [0, 0, 0], [0.15, 0.07, 0.2])
  }
  const aura = glow(body, c.glow, 2.7, 0.2, [0, 0.9, 0])
  g.userData.animate = (t, o = {}) => {
    const speed = o.speed ?? 0
    const stride = t * (5.6 + speed)
    b.legs.forEach((l, i) => { l.pivot.rotation.x = Math.sin(stride + (i % 2 ? Math.PI : 0)) * 0.25 })
    body.position.y = Math.abs(Math.sin(stride)) * 0.03
    head.rotation.z = Math.sin(t * 1.2) * 0.04
    head.rotation.y = Math.sin(t * 0.8) * 0.06
    if (o.attacking) { head.rotation.x = -0.35; body.rotation.x = -0.08 }
    aura.material.opacity = 0.14 + Math.sin(t * 3) * 0.04
  }
  g.userData.height = 2.1
  g.userData.radius = 1.05
  return g
}

// ------------------------------------------------------------------ KITSUNE

function buildFox(def) {
  const b = quadrupedBase(def, {}, { length: 1.05, hipY: 0.78, tail: false, legThick: 0.065 })
  const { g, body, head, accent, glowMat } = b
  const c = def.colors
  // Ears.
  add(head, GEO.cone, b.primary, [-0.2, 0.24, 0.02], [0, 0, 0.16], [0.1, 0.32, 0.08])
  add(head, GEO.cone, b.primary, [0.2, 0.24, 0.02], [0, 0, -0.16], [0.1, 0.32, 0.08])
  add(head, GEO.cone, accent, [-0.2, 0.22, -0.01], [0, 0, 0.16], [0.055, 0.22, 0.045])
  add(head, GEO.cone, accent, [0.2, 0.22, -0.01], [0, 0, -0.16], [0.055, 0.22, 0.045])
  // Cheek tufts.
  add(head, GEO.cone, b.primary, [-0.27, -0.01, -0.12], [0, 0, 1.1], [0.06, 0.22, 0.05])
  add(head, GEO.cone, b.primary, [0.27, -0.01, -0.12], [0, 0, -1.1], [0.06, 0.22, 0.05])
  // Multiple tails.
  const tails = []
  for (let i = 0; i < 6; i++) {
    const side = (i - 2.5) / 2.5
    const t = tail(b.body, i % 2 ? b.primary : mat(c.accent, { roughness: 0.65 }), c.glow, [side * 0.24, 0.9, 0.72], 1.1 + (i % 3) * 0.12, 0.5)
    t.pivot.rotation.y = side * 0.42
    t.pivot.rotation.x = -0.18 - (i % 2) * 0.1
    tails.push(t)
  }
  // Orbiting foxfire.
  const orbs = []
  const orbMat = mat(c.glow, { emissive: c.glow, emissiveIntensity: 3.5, transparent: true, opacity: 0.9 })
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), orbMat)
    s.castShadow = false
    g.add(s)
    orbs.push({ mesh: s, a: (i / 3) * TAU })
  }
  const aura = glow(g, c.glow, 2.1, 0.16, [0, 0.9, 0])
  g.userData.animate = (t, o = {}) => {
    const speed = o.speed ?? 0
    const stride = t * (7.3 + speed)
    b.legs.forEach((l, i) => { l.pivot.rotation.x = Math.sin(stride + (i % 2 ? Math.PI : 0)) * (0.3 + speed * 0.03) })
    body.position.y = Math.abs(Math.sin(stride)) * 0.03
    tails.forEach((tl, i) => {
      tl.pivot.rotation.z = Math.sin(t * 1.8 + i * 0.9) * 0.13 + (i - 2.5) * 0.035
      tl.segments.forEach((s, j) => { s.rotation.x = -0.12 + Math.sin(t * 2.1 + i * 0.8 + j * 0.4) * 0.08 })
    })
    orbs.forEach((orb, i) => {
      const a = t * 1.1 + orb.a
      orb.mesh.position.set(Math.cos(a) * 0.75, 1.0 + Math.sin(t * 2.4 + i) * 0.18, -0.1 + Math.sin(a) * 0.75)
    })
    aura.material.opacity = 0.13 + Math.sin(t * 3.1) * 0.03
    head.rotation.y = Math.sin(t * 1.4) * 0.08
    if (o.attacking) head.rotation.x = -0.3
  }
  g.userData.height = 1.55
  g.userData.radius = 0.85
  return g
}

// ------------------------------------------------------------------ SERPENTS

function serpentBody(def, opts, config) {
  const g = new THREE.Group()
  const body = new THREE.Group()
  g.add(body)
  const c = def.colors
  const primary = mat(c.primary, { roughness: 0.52 })
  const secondary = mat(c.secondary, { roughness: 0.55, metalness: 0.08 })
  const accent = mat(c.accent, { emissive: c.accent, emissiveIntensity: 0.65, roughness: 0.4 })
  const glowMat = mat(c.glow, { emissive: c.glow, emissiveIntensity: 2.6, roughness: 0.25 })

  const segments = []
  const count = config.segments ?? 9
  for (let i = count - 1; i >= 0; i--) {
    const k = i / (count - 1)
    const r = lerp(0.23, 0.58, Math.sin(k * Math.PI) * 0.9 + 0.1)
    const z = 0.4 + k * (config.length ?? 2.8)
    const m = add(body, GEO.sphere, i % 3 === 0 ? secondary : primary, [0, 0.75 + Math.sin(k * 2) * 0.05, z], [0, 0, 0], [r, r * 0.88, r * 1.12])
    segments.push({ mesh: m, base: m.position.clone(), phase: k * 4.2, k })
  }
  const head = new THREE.Group()
  head.position.set(0, 0.82, -0.45)
  body.add(head)
  add(head, GEO.sphere, primary, [0, 0, 0], [0, 0, 0], [0.46, 0.38, 0.55])
  add(head, GEO.sphere, secondary, [0, -0.05, -0.38], [0, 0, 0], [0.28, 0.23, 0.38])
  add(head, GEO.sphere, basic(0x100e14), [0, -0.05, -0.66], [0, 0, 0], [0.11, 0.07, 0.06])
  eye(head, -0.2, 0.12, -0.34, c.eye, 0.06)
  eye(head, 0.2, 0.12, -0.34, c.eye, 0.06)
  // Frill fins.
  for (let i = 0; i < 5; i++) {
    const a = (i / 4 - 0.5) * 2.4
    add(head, GEO.cone, accent, [Math.sin(a) * 0.4, 0.24, 0.18 + Math.cos(a) * 0.08], [0, 0, -a * 0.5], [0.06, 0.28 + Math.cos(a) * 0.1, 0.05])
  }
  // Dorsal spines along body.
  for (let i = 1; i < count - 1; i++) {
    const k = i / (count - 1)
    const r = lerp(0.23, 0.58, Math.sin(k * Math.PI) * 0.9 + 0.1)
    add(body, GEO.cone, accent, [0, 0.82 + r * 0.65, 0.4 + k * (config.length ?? 2.8)], [0, 0, (i % 2 ? 0.2 : -0.2)], [0.055, 0.22 + r * 0.25, 0.05])
  }
  const aura = glow(body, c.glow, 3.1, 0.18, [0, 0.9, 1.2])
  return { g, body, head, primary, secondary, accent, glowMat, segments, aura, headBase: head.position.clone() }
}

function buildMami(def) {
  const s = serpentBody(def, {}, { length: 2.5, segments: 9 })
  const { g, body, head, aura } = s
  const c = def.colors
  // Pearl strands.
  for (let i = 0; i < 3; i++) {
    add(head, GEO.torus, mat(0xf7eed8, { emissive: 0xbdf2ff, emissiveIntensity: 0.3, roughness: 0.3 }), [0, -0.2 - i * 0.07, -0.28], [0.2, 0, 0], [0.32 - i * 0.04, 0.32 - i * 0.04, 0.25])
  }
  // Fin ears.
  add(head, GEO.cone, mat(c.accent, { emissive: c.accent, emissiveIntensity: 0.4 }), [-0.5, 0.18, -0.02], [0, 0, 1.0], [0.12, 0.44, 0.05])
  add(head, GEO.cone, mat(c.accent, { emissive: c.accent, emissiveIntensity: 0.4 }), [0.5, 0.18, -0.02], [0, 0, -1.0], [0.12, 0.44, 0.05])
  // Water droplets orbiting.
  const drops = []
  const dropMat = mat(c.glow, { emissive: c.glow, emissiveIntensity: 2.2, transparent: true, opacity: 0.8 })
  for (let i = 0; i < 6; i++) {
    const d = add(g, GEO.sphere, dropMat, [0, 1.2, 1], [0, 0, 0], [0.05, 0.08, 0.05])
    drops.push({ mesh: d, a: (i / 6) * TAU, r: 0.8 + (i % 2) * 0.3 })
  }
  g.userData.animate = (t, o = {}) => {
    const speed = o.speed ?? 0
    s.segments.forEach((seg, i) => {
      seg.mesh.position.x = Math.sin(t * 1.6 + seg.phase) * (0.09 + speed * 0.012)
      seg.mesh.position.y = seg.base.y + Math.sin(t * 1.3 + seg.phase) * 0.06
    })
    head.position.y = s.headBase.y + Math.sin(t * 1.6) * 0.08
    head.rotation.z = Math.sin(t * 1.1) * 0.06
    head.rotation.y = Math.sin(t * 0.8) * 0.08
    drops.forEach((d, i) => {
      const a = t * 0.9 + d.a
      d.mesh.position.set(Math.cos(a) * d.r, 0.9 + Math.sin(t * 2 + i) * 0.35, 1.2 + Math.sin(a) * d.r)
    })
    aura.material.opacity = 0.14 + Math.sin(t * 2.2) * 0.04
    if (o.attacking) head.rotation.x = -0.25
  }
  g.userData.height = 2.0
  g.userData.radius = 1.05
  return g
}

function buildBakunawa(def) {
  const s = serpentBody(def, {}, { length: 3.0, segments: 11 })
  const { g, body, head, aura } = s
  const c = def.colors
  // Crescent horns.
  const hornMat = mat(0xbdf2ff, { emissive: 0x79dcff, emissiveIntensity: 0.6, metalness: 0.3, roughness: 0.35 })
  const hornShape = new THREE.TorusGeometry(0.28, 0.055, 5, 12, Math.PI * 1.05)
  add(head, hornShape, hornMat, [-0.25, 0.34, 0.02], [0.2, 0, 0.5], [1, 1, 1])
  add(head, hornShape, hornMat, [0.25, 0.34, 0.02], [0.2, 0, -0.5], [1, 1, 1])
  // Star scales.
  for (let i = 0; i < 18; i++) {
    const a = (i / 18) * TAU
    const k = 0.15 + (i % 5) * 0.12
    add(body, GEO.sphere, mat(c.glow, { emissive: c.glow, emissiveIntensity: 3, transparent: true, opacity: 0.9 }), [Math.cos(a) * 0.4, 0.9 + Math.sin(a) * 0.3, 0.6 + k * 2.4], [0, 0, 0], [0.025, 0.025, 0.025])
  }
  // Large fins.
  add(head, GEO.cone, mat(c.secondary, { emissive: 0x5b3ea6, emissiveIntensity: 0.25 }), [-0.5, 0.1, 0.1], [0, 0, 1.2], [0.15, 0.55, 0.06])
  add(head, GEO.cone, mat(c.secondary, { emissive: 0x5b3ea6, emissiveIntensity: 0.25 }), [0.5, 0.1, 0.1], [0, 0, -1.2], [0.15, 0.55, 0.06])
  const moon = glow(g, 0xbdf2ff, 1.5, 0.7, [0, 2.3, 0.9])
  g.userData.animate = (t, o = {}) => {
    const speed = o.speed ?? 0
    s.segments.forEach((seg, i) => {
      seg.mesh.position.x = Math.sin(t * 1.25 + seg.phase) * (0.12 + speed * 0.015)
      seg.mesh.position.y = seg.base.y + Math.sin(t * 1.05 + seg.phase) * 0.09
    })
    head.position.y = s.headBase.y + Math.sin(t * 1.3) * 0.1
    head.rotation.y = Math.sin(t * 0.7) * 0.1
    moon.position.set(Math.sin(t * 0.6) * 0.7, 2.35 + Math.sin(t * 1.4) * 0.12, 0.5)
    moon.material.opacity = 0.45 + Math.sin(t * 1.6) * 0.18
    aura.material.opacity = 0.13 + Math.sin(t * 2) * 0.05
    if (o.attacking) head.rotation.x = -0.3
  }
  g.userData.height = 2.4
  g.userData.radius = 1.15
  return g
}

function buildFeathered(def) {
  const s = serpentBody(def, {}, { length: 2.6, segments: 10 })
  const { g, body, head, aura } = s
  const c = def.colors
  const featherMat = mat(c.secondary, { roughness: 0.65, side: THREE.DoubleSide })
  const featherAccent = mat(c.accent, { roughness: 0.55, side: THREE.DoubleSide, emissive: c.accent, emissiveIntensity: 0.15 })
  // Crest feathers.
  for (let i = 0; i < 5; i++) {
    const a = (i - 2) * 0.28
    add(head, GEO.cone, i % 2 ? featherAccent : featherMat, [Math.sin(a) * 0.18, 0.3, 0.12 + Math.cos(a) * 0.12], [0.5, 0, -a], [0.08, 0.55 - Math.abs(a) * 0.2, 0.03])
  }
  // Wings.
  const wings = []
  for (const side of [-1, 1]) {
    const w = wing(body, side, featherMat, featherAccent, [0.35 * side, 1.06, 0.55], 2.2)
    wings.push(w)
    for (let i = 0; i < 4; i++) {
      add(w.pivot, GEO.cone, featherAccent, [1.2 + i * 0.22, -0.02 - i * 0.05, 0.2 + i * 0.12], [0, 0, -Math.PI / 2 + 0.15], [0.05, 0.55 - i * 0.07, 0.03])
    }
  }
  // Tail feathers.
  for (let i = 0; i < 4; i++) {
    add(body, GEO.cone, featherAccent, [(i - 1.5) * 0.15, 0.9, 3.15], [1.1 + (i - 1.5) * 0.1, (i - 1.5) * 0.16, 0], [0.09, 1.0, 0.035])
  }
  g.userData.animate = (t, o = {}) => {
    const speed = o.speed ?? 0
    s.segments.forEach((seg, i) => {
      seg.mesh.position.x = Math.sin(t * 1.8 + seg.phase) * (0.1 + speed * 0.012)
      seg.mesh.position.y = seg.base.y + Math.sin(t * 1.4 + seg.phase) * 0.05
    })
    head.position.y = s.headBase.y + Math.sin(t * 1.8) * 0.07
    head.rotation.y = Math.sin(t * 0.9) * 0.1
    const flap = Math.sin(t * 4.2 + 0.4) * 0.35
    wings.forEach((w, i) => {
      w.pivot.rotation.z = flap * (i ? -1 : 1)
      w.pivot.rotation.y = Math.sin(t * 4.2) * 0.1
    })
    aura.material.opacity = 0.14 + Math.sin(t * 2.8) * 0.04
    if (o.attacking) head.rotation.x = -0.2
  }
  g.userData.height = 2.2
  g.userData.radius = 1.15
  return g
}

// ------------------------------------------------------------------ RAVEN

function buildRaven(def) {
  const g = new THREE.Group()
  const body = new THREE.Group()
  g.add(body)
  const c = def.colors
  const dark = mat(c.primary, { roughness: 0.45, metalness: 0.15 })
  const mid = mat(c.secondary, { roughness: 0.5 })
  const mask = mat(c.accent, { roughness: 0.55 })
  const glowMat = mat(c.glow, { emissive: c.glow, emissiveIntensity: 2.4 })

  add(body, GEO.sphere, dark, [0, 1.2, 0], [0, 0, 0], [0.32, 0.36, 0.48])
  add(body, GEO.sphere, mid, [0, 1.18, 0.25], [0, 0, 0], [0.24, 0.25, 0.3])
  const head = new THREE.Group()
  head.position.set(0, 1.52, -0.2)
  body.add(head)
  add(head, GEO.sphere, dark, [0, 0, 0], [0, 0, 0], [0.23, 0.23, 0.25])
  add(head, GEO.sphere, mask, [0, 0.01, -0.13], [0, 0, 0], [0.18, 0.17, 0.13])
  add(head, GEO.cone, mat(0x2b2b33), [0, -0.02, -0.34], [-Math.PI / 2, 0, 0], [0.075, 0.3, 0.075])
  eye(head, -0.1, 0.04, -0.23, 0xffffff, 0.034)
  eye(head, 0.1, 0.04, -0.23, 0xffffff, 0.034)
  const pupilsL = eye(head, -0.1, 0.04, -0.245, c.eye, 0.018)
  const pupilsR = eye(head, 0.1, 0.04, -0.245, c.eye, 0.018)
  // White mask markings.
  add(head, GEO.box, mask, [0, 0.15, -0.12], [0.3, 0, 0], [0.09, 0.03, 0.08])

  const wings = []
  for (const side of [-1, 1]) {
    const w = wing(body, side, dark, mid, [0.28 * side, 1.3, 0], 1.6)
    wings.push(w)
    for (let i = 0; i < 3; i++) {
      add(w.pivot, GEO.cone, mid, [0.85 + i * 0.18, -0.04, 0.15 + i * 0.13], [0, 0, -Math.PI / 2], [0.05, 0.55 - i * 0.1, 0.03])
    }
  }
  // Tail feathers.
  for (let i = 0; i < 3; i++) add(body, GEO.cone, dark, [(i - 1) * 0.1, 1.03, 0.52], [1.25, (i - 1) * 0.18, 0], [0.08, 0.65, 0.03])
  // Claws.
  for (const side of [-1, 1]) add(body, GEO.cylinder, mid, [side * 0.1, 0.95, -0.02], [0, 0, 0], [0.03, 0.2, 0.03])
  const aura = glow(g, c.glow, 1.8, 0.15, [0, 1.2, 0])
  const wisp = glow(head, c.glow, 0.55, 0.5, [0, 0.28, 0])
  g.userData.animate = (t, o = {}) => {
    body.position.y = 1.1 + Math.sin(t * 2.4) * 0.08
    const flap = Math.sin(t * 9 + 0.3) * 0.55
    wings.forEach((w, i) => {
      w.pivot.rotation.z = flap * (i ? -1 : 1)
      w.pivot.rotation.x = Math.sin(t * 4.5) * 0.08
    })
    head.rotation.y = Math.sin(t * 1.7) * 0.15
    head.rotation.z = Math.sin(t * 1.2) * 0.06
    wisp.material.opacity = 0.3 + Math.sin(t * 5) * 0.15
    aura.material.opacity = 0.12 + Math.sin(t * 3) * 0.03
    if (o.attacking) { body.rotation.x = -0.25; head.rotation.x = 0.2 }
  }
  g.userData.height = 2.1
  g.userData.radius = 0.9
  return g
}

// ------------------------------------------------------------------ PUBLIC

const BUILDERS = {
  spider: buildSpider, calf: buildCalf, lion: buildLion, fox: buildFox,
  serpent: buildMami, moon: buildBakunawa, feathered: buildFeathered, raven: buildRaven,
}

export function buildCreature(def, opts = {}) {
  const builder = BUILDERS[def.stats.build]
  const g = builder(def, opts)
  g.name = def.id
  const scale = (opts.scale ?? def.stats.scale ?? 1) * (opts.boss ? 1 : 1)
  g.scale.setScalar(scale)
  g.userData.scale = scale
  const bar = statusBar()
  bar.position.y = (g.userData.height ?? 2) + 0.5
  bar.scale.set(1.3, 1.3, 1)
  g.add(bar)
  g.userData.bar = bar
  if (opts.boss) {
    const aura = glow(g, def.colors.glow, 5.5, 0.16, [0, 1.4, 0.4])
    g.userData.bossAura = aura
    const light = new THREE.PointLight(def.colors.glow, 2.2, 14, 2)
    light.position.y = 1.5
    g.add(light)
    g.userData.bossLight = light
  }
  return g
}

export function buildSoulOrb(size = 0.35) {
  const g = new THREE.Group()
  const core = new THREE.Mesh(new THREE.SphereGeometry(size, 16, 12), new THREE.MeshStandardMaterial({ color: 0x8ff0ce, emissive: 0x37d6a5, emissiveIntensity: 2.6, roughness: 0.2, metalness: 0.3 }))
  g.add(core)
  const shell = new THREE.Mesh(new THREE.TorusGeometry(size * 1.15, size * 0.08, 6, 20), new THREE.MeshBasicMaterial({ color: 0xddfff5, toneMapped: false }))
  shell.rotation.x = Math.PI / 2
  g.add(shell)
  const shell2 = shell.clone()
  shell2.rotation.set(0.5, 0.5, 0)
  g.add(shell2)
  const halo = glowSprite(0x62ffd8, size * 5, 0.55)
  g.add(halo)
  g.userData.spin = (t) => { shell.rotation.z = t * 3; shell2.rotation.y = t * 2.2; shell2.rotation.z = t * 1.7 }
  return g
}

export function buildWaypoint(color = 0xf4c95d) {
  const g = new THREE.Group()
  const beamMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.95, 20, 12, 1, true), beamMat)
  beam.position.y = 10
  g.add(beam)
  const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 0), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, toneMapped: false }))
  diamond.position.y = 3.4
  g.add(diamond)
  const halo = glowSprite(color, 3, 0.5)
  halo.position.y = 3.4
  g.add(halo)
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.45, 32), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false }))
  ring.rotation.x = -Math.PI / 2
  ring.position.y = 0.06
  g.add(ring)
  g.userData.animate = (t) => {
    diamond.rotation.y = t * 1.2
    diamond.position.y = 3.4 + Math.sin(t * 1.5) * 0.18
    halo.position.y = diamond.position.y
    halo.material.opacity = 0.35 + Math.sin(t * 2) * 0.1
    ring.scale.setScalar(1 + Math.sin(t * 1.6) * 0.06)
  }
  return g
}
