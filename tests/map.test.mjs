import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const map = require('../js/map.js')

function bfs(world, start) {
  const seen = new Set([start.x + ',' + start.y])
  const queue = [start]
  while (queue.length) {
    const cur = queue.shift()
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = cur.x + dx, ny = cur.y + dy
      const key = nx + ',' + ny
      if (seen.has(key) || !world.walkable(nx, ny)) continue
      seen.add(key)
      queue.push({ x: nx, y: ny })
    }
  }
  return seen
}

function adjacentReachable(world, reachable, x, y, w = 1, h = 1) {
  for (let yy = y; yy < y + h; yy++) {
    for (let xx = x; xx < x + w; xx++) {
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        if (reachable.has((xx + dx) + ',' + (yy + dy))) return true
      }
    }
  }
  return false
}

test('world has the expected island dimensions and spawn', () => {
  const world = map.createWorld()
  assert.equal(world.W, 60)
  assert.equal(world.H, 44)
  assert.equal(world.tiles.length, 44)
  assert.equal(world.tiles[0].length, 60)
  assert.equal(world.walkable(world.spawn.x, world.spawn.y), true)
})

test('all NPCs stand on walkable tiles', () => {
  const world = map.createWorld()
  for (const npc of world.npcs) {
    assert.equal(world.walkable(npc.x, npc.y), true, npc.name + ' at ' + npc.x + ',' + npc.y)
    assert.ok(world.walkable(npc.x, npc.y + 1) || world.walkable(npc.x + 1, npc.y) || world.walkable(npc.x - 1, npc.y), npc.name + ' approach')
  }
})

test('the whole island is connected from spawn', () => {
  const world = map.createWorld()
  const reachable = bfs(world, world.spawn)
  assert.ok(reachable.size > 1200, 'walkable island is large: ' + reachable.size)
  for (const npc of world.npcs) {
    assert.ok(reachable.has(npc.x + ',' + npc.y), npc.name + ' is reachable')
  }
  for (const npc of world.npcs) {
    const p = npc.afterPos
    if (p) assert.ok(reachable.has(p.x + ',' + p.y), npc.name + ' after-position is reachable')
  }
})

test('every sign, door, building and landmark can be approached', () => {
  const world = map.createWorld()
  const reachable = bfs(world, world.spawn)
  for (const obj of world.interactables) {
    const w = obj.w || 1, h = obj.h || 1
    assert.ok(adjacentReachable(world, reachable, obj.x, obj.y, w, h), obj.id + ' interactable is not approachable')
  }
})

test('buildings are solid except their approach tiles', () => {
  const world = map.createWorld()
  for (const b of world.buildings) {
    for (let y = b.y; y < b.y + b.h; y++) {
      for (let x = b.x; x < b.x + b.w; x++) {
        assert.equal(world.isSolid(x, y), true, b.id + ' footprint should be solid')
      }
    }
    assert.equal(world.walkable(b.door.x, b.door.y + 1), true, b.id + ' door has an approach')
  }
})

test('the mountain gate and summit are reachable', () => {
  const world = map.createWorld()
  const reachable = bfs(world, world.spawn)
  assert.ok(reachable.has('33,15'), 'gate tile reachable')
  assert.ok(reachable.has('37,6'), 'summit trail reachable')
  assert.equal(world.tileAt(37, 5), 'peak')
  assert.equal(world.zoneAt(38, 4), 'peak')
})

test('there is tall grass in every encounter zone', () => {
  const world = map.createWorld()
  const byZone = {}
  for (let y = 0; y < world.H; y++) {
    for (let x = 0; x < world.W; x++) {
      if (!world.tallGrassAt(x, y)) continue
      const zone = world.zoneAt(x, y)
      byZone[zone] = (byZone[zone] || 0) + 1
    }
  }
  for (const zone of ['meadow', 'forest', 'beach', 'mountain', 'peak']) {
    assert.ok(byZone[zone] > 0, 'tall grass exists in ' + zone + ': ' + JSON.stringify(byZone))
  }
})

test('the bridge and pier are walkable', () => {
  const world = map.createWorld()
  assert.equal(world.walkable(19, 31), true)
  assert.ok(world.tiles[31].slice(16, 23).includes('bridge'))
  assert.equal(world.walkable(53, 38), true)
  assert.equal(world.tileAt(53, 38), 'dock')
})

test('tall grass is reachable from spawn', () => {
  const world = map.createWorld()
  const reachable = bfs(world, world.spawn)
  let count = 0
  for (let y = 0; y < world.H; y++) {
    for (let x = 0; x < world.W; x++) {
      if (world.tallGrassAt(x, y) && reachable.has(x + ',' + y)) count++
    }
  }
  assert.ok(count > 20, 'reachable tall grass: ' + count)
})
