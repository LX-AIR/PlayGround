import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const data = require('../js/data.js')

test('species data is internally consistent', () => {
  const ids = Object.keys(data.SPECIES)
  assert.ok(ids.length >= 12)
  for (const id of ids) {
    const sp = data.SPECIES[id]
    assert.ok(sp.name, id)
    assert.ok(data.TYPES[sp.type], id + ' has a valid type')
    assert.ok(sp.catchRate > 0 && sp.catchRate <= 255, id + ' catch rate')
    assert.ok(sp.xpYield > 0, id + ' xp yield')
    assert.equal(sp.learn.length > 0, true, id + ' learns moves')
    for (const [level, move] of sp.learn) {
      assert.ok(level >= 1 && level <= 60, id + ' learn level')
      assert.ok(data.MOVES[move], id + ' move ' + move)
    }
    if (sp.evolve) {
      assert.ok(data.SPECIES[sp.evolve.to], id + ' evolves into a real species')
      assert.ok(sp.evolve.level > 1, id + ' evolve level')
    }
    assert.ok(sp.lore.length > 20)
  }
})

test('move data is valid', () => {
  for (const [id, move] of Object.entries(data.MOVES)) {
    assert.ok(move.name, id)
    assert.ok(data.TYPES[move.type], id + ' type')
    assert.ok(move.power >= 0, id + ' power')
    assert.ok(move.acc > 0 && move.acc <= 100, id + ' accuracy')
    assert.ok(move.pp > 0, id + ' pp')
    assert.ok(move.desc.length > 5, id + ' desc')
  }
})

test('trainers have reachable, valid teams', () => {
  for (const [id, tr] of Object.entries(data.TRAINERS)) {
    assert.ok(tr.name && tr.title, id)
    assert.ok(tr.intro.length > 0 && tr.win.length > 0 && tr.lose.length > 0, id)
    assert.ok(tr.team.length >= 1 && tr.team.length <= 6, id)
    for (const [species, level] of tr.team) {
      assert.ok(data.SPECIES[species], id + ' species ' + species)
      assert.ok(level >= 1 && level <= 60, id + ' level')
    }
    if (tr.badge) assert.ok(data.STORY.badges[tr.badge], id + ' badge')
  }
})

test('the three starters and the legendary exist and are distinct', () => {
  const starters = ['pimenta', 'turtide', 'ackee']
  assert.equal(new Set(starters).size, 3)
  const types = starters.map(id => data.SPECIES[id].type)
  assert.equal(new Set(types).size, 3)
  assert.equal(data.SPECIES.drbird.legendary, true)
})

test('every encounter table references real species and ordered levels', () => {
  for (const [zone, table] of Object.entries(data.ENCOUNTERS)) {
    assert.ok(data.ZONE_NAMES[zone], zone + ' zone name')
    assert.ok(table.levels[0] <= table.levels[1], zone + ' levels')
    assert.ok(table.table.length > 0)
    for (const [species, weight] of table.table) {
      assert.ok(data.SPECIES[species], zone + ' species ' + species)
      assert.ok(weight > 0, zone + ' weight')
    }
  }
  for (const zone of ['meadow', 'forest', 'beach', 'mountain', 'peak']) {
    assert.ok(data.ENCOUNTERS[zone], 'encounter table for ' + zone)
  }
})

test('items are priced and described', () => {
  for (const [id, item] of Object.entries(data.ITEMS)) {
    assert.ok(item.name && item.desc, id)
    assert.ok(item.kind === 'ball' || item.kind === 'heal', id)
    assert.ok(item.price > 0, id)
    if (item.kind === 'heal') assert.ok(item.heal > 0, id)
    if (item.kind === 'ball') assert.ok(item.mult >= 1, id)
  }
})
