import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const data = require('../js/data.js')
const engine = require('../js/engine.js')
const map = require('../js/map.js')

const seeded = seed => {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

test('makeMonster produces a complete, typed combatant', () => {
  const mon = engine.makeMonster('pimenta', 7)
  assert.equal(mon.id, 'pimenta')
  assert.equal(mon.type, 'Flame')
  assert.equal(mon.level, 7)
  assert.equal(mon.hp, mon.maxHp)
  assert.equal(mon.fainted, false)
  assert.ok(mon.moves.length > 0)
  assert.ok(mon.moves.every(m => data.MOVES[m.id] && m.pp === data.MOVES[m.id].pp))
  assert.deepEqual(mon.stages, { atk: 0, def: 0, spd: 0 })
})

test('every species can be built at several levels', () => {
  for (const id of Object.keys(data.SPECIES)) {
    for (const level of [1, 5, 20, 60]) {
      const mon = engine.makeMonster(id, level)
      assert.equal(mon.type, data.SPECIES[id].type)
      assert.ok(mon.maxHp > 0)
      assert.ok(mon.moves.length >= 1)
    }
  }
})

test('type chart behaves sensibly', () => {
  assert.equal(engine.typeEffect('Flame', 'Leaf'), 2)
  assert.equal(engine.typeEffect('Flame', 'Tide'), 0.5)
  assert.equal(engine.typeEffect('Storm', 'Spirit'), 2)
  assert.equal(engine.typeEffect('Island', 'Flame'), 1)
})

test('damage is deterministic for a fixed rng and rewards super effective hits', () => {
  const a = engine.makeMonster('pimenta', 10)
  const b = engine.makeMonster('ackee', 10)
  const c = engine.makeMonster('turtide', 10)
  const ember = data.MOVES.ember
  const r1 = engine.calcDamage(a, b, ember, () => 0.5)
  const r2 = engine.calcDamage(a, b, ember, () => 0.5)
  assert.deepEqual(r1, r2)
  assert.equal(r1.effectiveness, 2)
  const r3 = engine.calcDamage(a, c, ember, () => 0.5)
  assert.equal(r3.effectiveness, 0.5)
  assert.ok(r1.damage > r3.damage)
})

test('a wild battle can be fought to an end and yields xp', () => {
  const rng = seeded(42)
  const party = [engine.makeMonster('scorchbonnet', 20)]
  const enemy = engine.makeMonster('yardgoat', 4)
  const battle = engine.createBattle({ party, activeIndex: 0, enemyTeam: [enemy], isWild: true })
  const xpBefore = party[0].xp
  let events = []
  for (let i = 0; i < 20 && !battle.over; i++) {
    events = engine.resolveTurn(battle, { type: 'move', index: 0 }, rng)
    assert.ok(Array.isArray(events))
  }
  assert.equal(battle.over, true)
  assert.ok(['win', 'lose'].includes(battle.result))
  if (battle.result === 'win') assert.ok(party[0].xp > xpBefore)
})

test('catching a weakened wild monster is possible and ends the battle', () => {
  const party = [engine.makeMonster('turtide', 12)]
  const enemy = engine.makeMonster('yardgoat', 5)
  enemy.hp = 1
  const battle = engine.createBattle({ party, activeIndex: 0, enemyTeam: [enemy], isWild: true })
  const events = engine.resolveTurn(battle, { type: 'item', itemId: 'coconut_ball' }, () => 0)
  assert.equal(battle.over, true)
  assert.equal(battle.result, 'caught')
  assert.ok(events.some(e => e.kind === 'throwBall' && e.success))
  assert.equal(enemy.caught, true)
})

test('catchChance is bounded and better at low hp', () => {
  const mon = engine.makeMonster('yardgoat', 5)
  const full = engine.catchChance(mon, 'coconut_ball', true)
  mon.hp = 1
  const low = engine.catchChance(mon, 'coconut_ball', true)
  assert.ok(full >= 0.02 && full <= 0.95)
  assert.ok(low > full)
  assert.equal(engine.catchChance(mon, 'golden_ball', false), 0)
  const gold = engine.catchChance(mon, 'golden_ball', true)
  assert.ok(gold >= low)
})

test('leveling grows stats, learns moves, and evolves', () => {
  const mon = engine.makeMonster('pimenta', 15)
  const events = []
  engine.grantXp(mon, 5000, events)
  assert.ok(mon.level >= 16)
  assert.equal(mon.id, 'scorchbonnet')
  assert.equal(mon.type, 'Flame')
  assert.ok(events.some(e => e.kind === 'evolve'))
  assert.ok(mon.maxHp >= 1 && mon.hp <= mon.maxHp)
})

test('forced switches are requested when a partner faints', () => {
  const rng = seeded(7)
  const party = [engine.makeMonster('peeniewallie', 3), engine.makeMonster('turtide', 30)]
  const enemy = engine.makeMonster('drbird', 40)
  const battle = engine.createBattle({ party, activeIndex: 0, enemyTeam: [enemy], isWild: true })
  engine.resolveTurn(battle, { type: 'move', index: 0 }, rng)
  if (party[0].fainted) {
    assert.equal(battle.awaitingSwitch, true)
    const events = engine.resolveForcedSwitch(battle, 1, rng)
    assert.equal(battle.awaitingSwitch, false)
    assert.equal(battle.player.active, 1)
    assert.ok(events.some(e => e.kind === 'send'))
  }
})

test('healing restores hp, pp and status', () => {
  const team = [engine.makeMonster('ackee', 9)]
  team[0].hp = 1
  team[0].status = 'burn'
  team[0].moves[0].pp = 0
  engine.healParty(team)
  assert.equal(team[0].hp, team[0].maxHp)
  assert.equal(team[0].status, null)
  assert.ok(team[0].moves.every(m => m.pp === m.maxPp))
})

test('AI always picks a legal move slot', () => {
  const rng = seeded(11)
  const battle = engine.createBattle({
    party: [engine.makeMonster('turtide', 10)],
    enemyTeam: [engine.makeMonster('cockpit', 10)],
    isWild: true
  })
  for (let i = 0; i < 30; i++) {
    const idx = engine.chooseEnemyMove(battle, rng)
    assert.ok(idx >= 0 && idx < battle.enemy.team[0].moves.length)
  }
})

test('500 randomized turns never throw', () => {
  const rng = seeded(99)
  const party = [
    engine.makeMonster('pimenta', 18),
    engine.makeMonster('turtide', 17),
    engine.makeMonster('ackee', 16)
  ]
  const enemyTeam = [
    engine.makeMonster('yardgoat', 15),
    engine.makeMonster('anancy', 16)
  ]
  const battle = engine.createBattle({ party, activeIndex: 0, enemyTeam, isWild: false, trainerName: 'Test' })
  for (let i = 0; i < 500 && !battle.over; i++) {
    if (battle.awaitingSwitch) {
      const idx = engine.firstAlive(party)
      if (idx < 0) break
      engine.resolveForcedSwitch(battle, idx, rng)
      continue
    }
    const mon = engine.activeMon(battle, 'player')
    const idx = mon.moves.findIndex(m => m.pp > 0)
    engine.resolveTurn(battle, { type: 'move', index: Math.max(0, idx) }, rng)
  }
  assert.ok(battle.over || battle.turn > 0)
})
