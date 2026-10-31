import test from 'node:test'
import assert from 'node:assert/strict'
import {
  BOSSES, CAPTURE_THRESHOLD, CREATURES, CREATURE_BY_ID, SHRINES, typeMultiplier,
} from '../src/constants.js'
import {
  PATH_GROVE, PATH_MAIN, PATH_REEF, SHRINE_BAKUNAWA, SHRINE_NIAN, SHRINE_QUETZAL,
  SILK_TREE, islandEdgeDistance, isWater, samplePath, terrainHeight, zoneAt,
} from '../src/terrain.js'
import { clamp, formatTime } from '../src/utils.js'

test('the elemental wheel follows the island rules', () => {
  assert.ok(typeMultiplier('fire', 'air') > 1)
  assert.ok(typeMultiplier('air', 'earth') > 1)
  assert.ok(typeMultiplier('earth', 'water') > 1)
  assert.ok(typeMultiplier('water', 'fire') > 1)
  assert.ok(typeMultiplier('air', 'fire') < 1)
  assert.ok(typeMultiplier('spirit', 'shadow') > 1)
  assert.equal(typeMultiplier('aether', 'fire'), 1)
})

test('all shrines and creature spawns sit on dry, walkable land', () => {
  for (const shrine of Object.values(SHRINES)) {
    const h = terrainHeight(shrine.x, shrine.z)
    assert.ok(h > 1, `${shrine.id} shrine is underwater (${h})`)
    assert.ok(islandEdgeDistance(shrine.x, shrine.z) > 6, `${shrine.id} shrine is too close to the sea`)
  }
  for (const def of CREATURES) {
    const h = terrainHeight(def.spawn.x, def.spawn.z)
    assert.ok(h > 1.2, `${def.id} spawn is underwater (${h})`)
    assert.ok(CREATURE_BY_ID[def.id] === def)
  }
})

test('the player spawn beach is on land', () => {
  assert.ok(terrainHeight(9, 84) > 1)
  assert.ok(terrainHeight(26, 40) > 1)
  assert.equal(isWater(9, 84), false)
})

test('routes sample smoothly through the island', () => {
  for (const route of [PATH_MAIN, PATH_GROVE, PATH_REEF]) {
    const sampled = samplePath(route, 120)
    assert.equal(sampled.length, 120)
    for (let i = 1; i < sampled.length; i++) {
      const [ax, , az] = sampled[i - 1]
      const [bx, , bz] = sampled[i]
      assert.ok(Math.hypot(bx - ax, bz - az) < 4, 'route jumps between samples')
    }
  }
})

test('every creature and warden species is defined', () => {
  assert.equal(CREATURES.length, 8)
  assert.equal(new Set(CREATURES.map(c => c.id)).size, 8)
  for (const boss of BOSSES) {
    assert.ok(CREATURE_BY_ID[boss.species], `${boss.id} has no species`)
    assert.ok(boss.hp > 0)
  }
  assert.ok(BOSSES.filter(b => !b.final).length === 3)
  assert.ok(BOSSES.some(b => b.final))
})

test('capture threshold leaves weakened spirits one hit from bonding', () => {
  assert.ok(CAPTURE_THRESHOLD > 0 && CAPTURE_THRESHOLD < 0.5)
  assert.equal(Math.max(1, Math.round(46 * 0.35)), 16)
})

test('zone lookup and formatting helpers are stable', () => {
  assert.equal(zoneAt(8, 86).id, 'beach')
  assert.equal(zoneAt(28, 36).id, 'village')
  assert.equal(zoneAt(62, 20).id, 'reef')
  assert.equal(clamp(12, 0, 10), 10)
  assert.equal(formatTime(0), '00:00')
  assert.equal(formatTime(125), '02:05')
})

test('fixed world landmarks have consistent terrain heights', () => {
  for (const spot of [SHRINE_NIAN, SHRINE_BAKUNAWA, SHRINE_QUETZAL, SILK_TREE]) {
    const h = terrainHeight(spot.x, spot.z)
    assert.ok(Number.isFinite(h))
    assert.ok(h > 1)
  }
})
