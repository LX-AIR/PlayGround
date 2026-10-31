/* GIGAMON: Island Spirits — pure battle engine (shared by browser + node tests) */
(function (root, factory) {
  const api = factory(typeof module === 'object' && module.exports ? require('./data.js') : (root.YD || {}).data)
  if (typeof module === 'object' && module.exports) module.exports = api
  else root.YD = Object.assign(root.YD || {}, { engine: api })
})(typeof globalThis !== 'undefined' ? globalThis : this, function (data) {
  'use strict'

  const { SPECIES, MOVES, TYPE_CHART, ITEMS } = data
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

  function typeEffect(moveType, defenderType) {
    const row = TYPE_CHART[moveType]
    if (!row) return 1
    return row[defenderType] == null ? 1 : row[defenderType]
  }

  function stageMult(stage) {
    if (stage >= 0) return 1 + 0.25 * stage
    return 1 / (1 - 0.25 * stage)
  }

  function statsFor(speciesId, level) {
    const base = SPECIES[speciesId].base
    return {
      maxHp: Math.floor(base.hp * 2 * level / 100) + level + 10,
      atk: Math.floor(base.atk * 2 * level / 100) + 5,
      def: Math.floor(base.def * 2 * level / 100) + 5,
      spd: Math.floor(base.spd * 2 * level / 100) + 5
    }
  }

  function xpToNext(level) {
    return Math.floor(14 + level * level * 1.7)
  }

  function learnedMoves(speciesId, level) {
    const sp = SPECIES[speciesId]
    const seen = []
    for (const [lvl, moveId] of sp.learn) {
      if (lvl <= level && MOVES[moveId] && !seen.includes(moveId)) seen.push(moveId)
    }
    return seen.slice(-4)
  }

  function makeMonster(speciesId, level, moveIds) {
    const sp = SPECIES[speciesId]
    if (!sp) throw new Error('Unknown species: ' + speciesId)
    const stats = statsFor(speciesId, level)
    const ids = moveIds && moveIds.length ? moveIds.slice(0, 4) : learnedMoves(speciesId, level)
    return {
      id: speciesId,
      name: sp.name,
      type: sp.type,
      catchRate: sp.catchRate,
      level,
      xp: 0,
      xpNext: xpToNext(level),
      maxHp: stats.maxHp,
      hp: stats.maxHp,
      atk: stats.atk,
      def: stats.def,
      spd: stats.spd,
      moves: ids.map(id => ({ id, pp: MOVES[id].pp, maxPp: MOVES[id].pp })),
      status: null,
      statusTurns: 0,
      stages: { atk: 0, def: 0, spd: 0 },
      fainted: false
    }
  }

  function activeMon(state, side) {
    return state[side].team[state[side].active] || null
  }

  function alive(team) {
    return team.filter(m => m && !m.fainted && m.hp > 0)
  }

  function firstAlive(team) {
    return team.findIndex(m => m && !m.fainted && m.hp > 0)
  }

  function createBattle(opts) {
    const enemyTeam = opts.enemyTeam
    const first = enemyTeam[0]
    return {
      player: { team: opts.party, active: opts.activeIndex || 0 },
      enemy: {
        team: enemyTeam,
        active: 0,
        isWild: Boolean(opts.isWild),
        name: opts.enemyName || first.name,
        trainerName: opts.trainerName || null,
        catchRate: opts.catchRate || SPECIES[first.id].catchRate
      },
      turn: 0,
      over: false,
      result: null,
      awaitingSwitch: false,
      runAttempts: 0,
      fast: Boolean(opts.fast)
    }
  }

  function speedOf(mon) {
    let spd = mon.spd * stageMult(mon.stages.spd)
    if (mon.status === 'paralyze') spd *= 0.5
    return Math.floor(spd)
  }

  function calcDamage(attacker, defender, move, rng) {
    if (!move || !move.power) return { damage: 0, crit: false, effectiveness: 1 }
    const atk = attacker.atk * stageMult(attacker.stages.atk) * (attacker.status === 'burn' ? 0.5 : 1)
    const def = Math.max(1, defender.def * stageMult(defender.stages.def))
    const crit = rng() < 1 / 16
    let dmg = Math.floor((((2 * attacker.level / 5 + 2) * move.power * atk / def) / 50 + 2))
    if (crit) dmg = Math.floor(dmg * 1.5)
    if (attacker.type === move.type) dmg = Math.floor(dmg * 1.5)
    const eff = typeEffect(move.type, defender.type)
    dmg = Math.floor(dmg * eff)
    dmg = Math.max(1, Math.floor(dmg * (0.85 + rng() * 0.15)))
    return { damage: dmg, crit, effectiveness: eff }
  }

  function effectivenessText(eff) {
    if (eff > 1.5) return "It's super effective!"
    if (eff < 0.75) return "It's not very effective..."
    return ''
  }

  function statusBlocked(mon, status) {
    if (mon.status) return 'already'
    if (status === 'burn' && mon.type === 'Flame') return 'immune'
    if (status === 'paralyze' && mon.type === 'Storm') return 'immune'
    return null
  }

  function applyStatus(mon, status, events, side, rng) {
    const blocked = statusBlocked(mon, status)
    if (blocked === 'already') {
      events.push({ kind: 'text', text: `${mon.name} is already affected.` })
      return false
    }
    if (blocked === 'immune') {
      events.push({ kind: 'text', text: `${mon.name} shrugs it off completely!` })
      return false
    }
    mon.status = status
    mon.statusTurns = status === 'sleep' ? 1 + Math.floor(rng() * 3) : 0
    events.push({ kind: 'status', side, status })
    const text = status === 'burn' ? `${mon.name} was burned!` : status === 'sleep' ? `${mon.name} fell fast asleep!` : `${mon.name} is paralyzed!`
    events.push({ kind: 'text', text })
    return true
  }

  function healMon(mon, amount) {
    const before = mon.hp
    mon.hp = Math.min(mon.maxHp, mon.hp + amount)
    mon.fainted = mon.hp <= 0
    return mon.hp - before
  }

  function recalcStats(mon) {
    const stats = statsFor(mon.id, mon.level)
    const diff = stats.maxHp - mon.maxHp
    mon.maxHp = stats.maxHp
    mon.hp = clamp(mon.hp + diff, 0, mon.maxHp)
    mon.atk = stats.atk
    mon.def = stats.def
    mon.spd = stats.spd
  }

  function learnMove(mon, moveId, events) {
    if (mon.moves.some(m => m.id === moveId)) return
    if (mon.moves.length < 4) {
      mon.moves.push({ id: moveId, pp: MOVES[moveId].pp, maxPp: MOVES[moveId].pp })
      events.push({ kind: 'learn', name: mon.name, moveName: MOVES[moveId].name })
      return
    }
    // Upgrade: swap out the weakest damaging move if the new one is stronger.
    let weakest = -1
    for (let i = 0; i < mon.moves.length; i++) {
      const m = MOVES[mon.moves[i].id]
      if (weakest < 0 || m.power < MOVES[mon.moves[weakest].id].power) weakest = i
    }
    if (weakest >= 0 && MOVES[moveId].power > MOVES[mon.moves[weakest].id].power) {
      const oldName = MOVES[mon.moves[weakest].id].name
      mon.moves[weakest] = { id: moveId, pp: MOVES[moveId].pp, maxPp: MOVES[moveId].pp }
      events.push({ kind: 'learn', name: mon.name, moveName: MOVES[moveId].name, replaced: oldName })
    }
  }

  function grantXp(mon, amount, events) {
    mon.xp += amount
    events.push({ kind: 'xp', name: mon.name, amount })
    let guard = 0
    while (mon.xp >= mon.xpNext && mon.level < 60 && guard++ < 20) {
      mon.xp -= mon.xpNext
      mon.level += 1
      mon.xpNext = xpToNext(mon.level)
      recalcStats(mon)
      events.push({ kind: 'levelup', name: mon.name, level: mon.level })
      const sp = SPECIES[mon.id]
      for (const [lvl, moveId] of sp.learn) {
        if (lvl === mon.level) learnMove(mon, moveId, events)
      }
      if (sp.evolve && mon.level >= sp.evolve.level) {
        const from = mon.name
        mon.id = sp.evolve.to
        mon.name = SPECIES[mon.id].name
        mon.type = SPECIES[mon.id].type
        mon.catchRate = SPECIES[mon.id].catchRate
        recalcStats(mon)
        events.push({ kind: 'evolve', from, to: mon.name })
      }
    }
  }

  function finish(state, result, events) {
    state.over = true
    state.result = result
    events.push({ kind: 'end', result })
  }

  function chooseEnemyMove(state, rng) {
    const mon = activeMon(state, 'enemy')
    const usable = mon.moves.filter(m => m.pp > 0)
    if (!usable.length) return -1
    let best = 0
    let bestScore = -Infinity
    for (let i = 0; i < usable.length; i++) {
      const def = MOVES[usable[i].id]
      const eff = def.power ? typeEffect(def.type, activeMon(state, 'player').type) : 1
      let score = (def.power || 12) * eff * (def.acc / 100)
      if (def.type === mon.type && def.power) score *= 1.3
      if (!def.power && def.effect && def.effect.status) score *= 1.5
      score *= 0.75 + rng() * 0.5
      if (score > bestScore) { bestScore = score; best = i }
    }
    return mon.moves.indexOf(usable[best])
  }

  function performMove(state, side, moveIndex, events, rng) {
    const attacker = activeMon(state, side)
    const defenderSide = side === 'player' ? 'enemy' : 'player'
    const defender = activeMon(state, defenderSide)
    if (!attacker || !defender || attacker.fainted || defender.fainted) return
    let moveId
    if (moveIndex < 0) moveId = 'struggle'
    else {
      const slot = attacker.moves[moveIndex]
      if (!slot) return
      moveId = slot.id
      if (slot.pp <= 0) moveId = 'struggle'
      else slot.pp -= 1
    }
    const move = MOVES[moveId]
    const atkLabel = side === 'player' ? 'Your' : 'Foe'
    if (attacker.status === 'sleep') {
      if (attacker.statusTurns > 0) {
        attacker.statusTurns -= 1
        if (attacker.statusTurns <= 0) {
          attacker.status = null
          events.push({ kind: 'text', text: `${attacker.name} woke up!` })
        } else {
          events.push({ kind: 'text', text: `${attacker.name} is fast asleep...` })
        }
        return
      }
      attacker.status = null
    }
    if (attacker.status === 'paralyze' && rng() < 0.25) {
      events.push({ kind: 'text', text: `${attacker.name} is jolted and can't move!` })
      return
    }
    events.push({ kind: 'text', text: `${atkLabel} ${attacker.name} used ${move.name}!` })
    if (rng() * 100 > move.acc) {
      events.push({ kind: 'text', text: 'The move missed!' })
      return
    }
    events.push({ kind: 'attack', side, moveId, moveName: move.name, type: move.type })

    if (move.effect && move.effect.heal) {
      const healed = healMon(attacker, Math.floor(attacker.maxHp * move.effect.heal))
      if (healed > 0) {
        events.push({ kind: 'heal', side, from: attacker.hp - healed, to: attacker.hp })
        events.push({ kind: 'text', text: `${attacker.name} recovered ${healed} HP!` })
      } else {
        events.push({ kind: 'text', text: 'It had no effect...' })
      }
      return
    }

    if (move.effect && move.effect.stat && !move.power) {
      const targetSide = move.effect.target === 'self' ? side : defenderSide
      const target = activeMon(state, targetSide)
      const stat = move.effect.stat
      const before = target.stages[stat]
      target.stages[stat] = clamp(before + move.effect.stages, -2, 2)
      const label = stat === 'atk' ? 'Attack' : stat === 'def' ? 'Defense' : 'Speed'
      if (target.stages[stat] === before) {
        events.push({ kind: 'text', text: `${target.name}'s ${label} can't go any further!` })
      } else {
        events.push({ kind: 'stat', side: targetSide, stat, stages: target.stages[stat] })
        events.push({ kind: 'text', text: `${target.name}'s ${label} ${move.effect.stages > 0 ? 'rose' : 'fell'}!` })
      }
      return
    }

    if (!move.power) {
      if (move.effect && move.effect.status) {
        applyStatus(defender, move.effect.status, events, defenderSide, rng)
      }
      return
    }

    const result = calcDamage(attacker, defender, move, rng)
    const before = defender.hp
    defender.hp = Math.max(0, defender.hp - result.damage)
    events.push({
      kind: 'damage', side: defenderSide, from: before, to: defender.hp,
      max: defender.maxHp, amount: result.damage, effectiveness: result.effectiveness, crit: result.crit
    })
    if (result.crit) events.push({ kind: 'text', text: 'A critical hit!' })
    const effText = effectivenessText(result.effectiveness)
    if (effText) events.push({ kind: 'text', text: effText })

    if (move.effect && move.effect.drain && result.damage > 0) {
      const healed = healMon(attacker, Math.max(1, Math.floor(result.damage * move.effect.drain)))
      if (healed > 0) {
        events.push({ kind: 'heal', side, from: attacker.hp - healed, to: attacker.hp })
        events.push({ kind: 'text', text: `${attacker.name} sipped a little life!` })
      }
    }

    if (defender.hp <= 0) {
      defender.hp = 0
      defender.fainted = true
      defender.status = null
      defender.stages = { atk: 0, def: 0, spd: 0 }
      events.push({ kind: 'faint', side: defenderSide, name: defender.name })
      if (defenderSide === 'enemy') {
        const gained = Math.floor((SPECIES[defender.id].xpYield + defender.level * 6) * (state.enemy.isWild ? 1 : 1.45)) + 10
        grantXp(attacker, gained, events)
      }
      return
    }

    if (move.effect) {
      if (move.effect.status && rng() * 100 < (move.effect.chance || 0)) {
        applyStatus(defender, move.effect.status, events, defenderSide, rng)
      }
      if (move.effect.stat && move.effect.target === 'foe' && rng() * 100 < (move.effect.chance || 0)) {
        const stat = move.effect.stat
        const beforeStage = defender.stages[stat]
        defender.stages[stat] = clamp(beforeStage + move.effect.stages, -2, 2)
        if (defender.stages[stat] !== beforeStage) {
          events.push({ kind: 'stat', side: defenderSide, stat, stages: defender.stages[stat] })
          events.push({ kind: 'text', text: `${defender.name}'s ${stat === 'atk' ? 'Attack' : stat === 'def' ? 'Defense' : 'Speed'} fell!` })
        }
      }
    }
  }

  function burnTick(state, events) {
    for (const side of ['player', 'enemy']) {
      const mon = activeMon(state, side)
      if (!mon || mon.fainted || mon.status !== 'burn') continue
      const dmg = Math.max(1, Math.floor(mon.maxHp / 16))
      const before = mon.hp
      mon.hp = Math.max(0, mon.hp - dmg)
      events.push({ kind: 'damage', side, from: before, to: mon.hp, max: mon.maxHp, amount: dmg, effectiveness: 1, crit: false, status: true })
      events.push({ kind: 'text', text: `${mon.name} is hurt by its burn!` })
      if (mon.hp <= 0) {
        mon.fainted = true
        mon.status = null
        events.push({ kind: 'faint', side, name: mon.name })
      }
    }
  }

  function checkFaints(state, events) {
    const enemy = activeMon(state, 'enemy')
    const player = activeMon(state, 'player')
    if (enemy && enemy.fainted) {
      if (!alive(state.enemy.team).length) {
        finish(state, 'win', events)
        return true
      }
      if (state.enemy.isWild) {
        finish(state, 'win', events)
        return true
      }
      state.enemy.active = firstAlive(state.enemy.team)
      const next = activeMon(state, 'enemy')
      events.push({ kind: 'send', side: 'enemy', name: next.name })
      events.push({ kind: 'text', text: `${state.enemy.trainerName || 'The trainer'} sent out ${next.name}!` })
    }
    if (player && player.fainted) {
      if (!alive(state.player.team).length) {
        finish(state, 'lose', events)
        return true
      }
      state.awaitingSwitch = true
      events.push({ kind: 'requestSwitch' })
      return true
    }
    return false
  }

  function switchMon(state, side, index, events) {
    const team = state[side].team
    const mon = team[index]
    if (!mon || mon.fainted) return false
    state[side].active = index
    mon.stages = { atk: 0, def: 0, spd: 0 }
    events.push({ kind: 'send', side, name: mon.name })
    events.push({ kind: 'text', text: side === 'player' ? `Go, ${mon.name}!` : `Foe sent out ${mon.name}!` })
    return true
  }

  function catchChance(mon, ballId, isWild) {
    if (!isWild) return 0
    const item = ITEMS[ballId] || ITEMS.coconut_ball
    const ratio = (3 * mon.maxHp - 2 * mon.hp) / (3 * mon.maxHp)
    const statusBonus = mon.status === 'sleep' ? 2 : mon.status ? 1.5 : 1
    return clamp(ratio * (mon.catchRate / 255) * (item.mult || 1) * statusBonus, 0.02, 0.95)
  }

  function tryCatch(state, ballId, events, rng) {
    const mon = activeMon(state, 'enemy')
    if (!state.enemy.isWild) {
      events.push({ kind: 'text', text: "You can't catch another guardian's partner!" })
      return false
    }
    const chance = catchChance(mon, ballId, true)
    const success = rng() < chance
    const shakes = success ? 3 : Math.min(2, Math.floor(chance * 4))
    events.push({ kind: 'throwBall', ball: ballId, shakes, success })
    if (success) {
      mon.caught = true
      events.push({ kind: 'text', text: `Gotcha! ${mon.name} was caught!` })
      finish(state, 'caught', events)
      return true
    }
    events.push({ kind: 'text', text: `Oh no! ${mon.name} broke free!` })
    return false
  }

  function resolveTurn(state, action, rng) {
    rng = rng || Math.random
    const events = []
    if (state.over) return events
    if (state.awaitingSwitch) {
      if (action.type === 'switch') {
        if (switchMon(state, 'player', action.index, events)) state.awaitingSwitch = false
        return events
      }
      events.push({ kind: 'text', text: 'Choose your next partner.' })
      return events
    }
    state.turn += 1
    const playerMon = activeMon(state, 'player')
    const enemyMon = activeMon(state, 'enemy')

    if (action.type === 'switch') {
      if (!switchMon(state, 'player', action.index, events)) return events
      const enemyMove = chooseEnemyMove(state, rng)
      performMove(state, 'enemy', enemyMove, events, rng)
      burnTick(state, events)
      checkFaints(state, events)
      return events
    }

    if (action.type === 'item') {
      const item = ITEMS[action.itemId]
      if (!item) return events
      if (item.kind === 'ball') {
        if (tryCatch(state, action.itemId, events, rng)) return events
      } else if (item.kind === 'heal') {
        if (playerMon.hp >= playerMon.maxHp) {
          events.push({ kind: 'text', text: `${playerMon.name} is already full of energy!` })
          return events
        }
        const before = playerMon.hp
        const healed = healMon(playerMon, item.heal)
        events.push({ kind: 'heal', side: 'player', from: before, to: playerMon.hp })
        events.push({ kind: 'text', text: `${playerMon.name} recovered ${healed} HP!` })
      }
      const enemyMove = chooseEnemyMove(state, rng)
      performMove(state, 'enemy', enemyMove, events, rng)
      burnTick(state, events)
      checkFaints(state, events)
      return events
    }

    if (action.type === 'run') {
      if (!state.enemy.isWild) {
        events.push({ kind: 'text', text: "There's no running from a guardian's challenge!" })
        return events
      }
      state.runAttempts += 1
      const chance = clamp(0.42 + (speedOf(playerMon) - speedOf(enemyMon)) * 0.03 + state.runAttempts * 0.08, 0.2, 0.95)
      if (rng() < chance) {
        events.push({ kind: 'text', text: 'You slipped away into the bush!' })
        finish(state, 'run', events)
        return events
      }
      events.push({ kind: 'text', text: "Couldn't escape!" })
      const enemyMove = chooseEnemyMove(state, rng)
      performMove(state, 'enemy', enemyMove, events, rng)
      burnTick(state, events)
      checkFaints(state, events)
      return events
    }

    if (action.type !== 'move') return events

    const enemyMoveIndex = chooseEnemyMove(state, rng)
    const pSlot = playerMon.moves[action.index]
    const pMove = pSlot ? MOVES[pSlot.id] : MOVES.struggle
    const eSlot = enemyMon.moves[enemyMoveIndex]
    const eMove = eSlot ? MOVES[eSlot.id] : MOVES.struggle
    const pPriority = pMove.priority || 0
    const ePriority = eMove.priority || 0
    let playerFirst
    if (pPriority !== ePriority) playerFirst = pPriority > ePriority
    else if (speedOf(playerMon) !== speedOf(enemyMon)) playerFirst = speedOf(playerMon) > speedOf(enemyMon)
    else playerFirst = rng() < 0.5

    const order = playerFirst ? [['player', action.index], ['enemy', enemyMoveIndex]] : [['enemy', enemyMoveIndex], ['player', action.index]]
    for (const [side, idx] of order) {
      if (state.over || state.awaitingSwitch) break
      if (!activeMon(state, side) || activeMon(state, side).fainted) continue
      performMove(state, side, idx, events, rng)
      if (state.over) break
      if (!activeMon(state, 'player') || activeMon(state, 'player').fainted) break
      if (!activeMon(state, 'enemy') || activeMon(state, 'enemy').fainted) break
    }

    if (!state.over && !checkFaints(state, events)) {
      burnTick(state, events)
      checkFaints(state, events)
    }
    return events
  }

  function resolveForcedSwitch(state, index, rng) {
    rng = rng || Math.random
    const events = []
    if (!state.awaitingSwitch) return events
    if (!switchMon(state, 'player', index, events)) return events
    state.awaitingSwitch = false
    return events
  }

  function useHealItemOutOfBattle(mon, itemId) {
    const item = ITEMS[itemId]
    if (!item || item.kind !== 'heal') return 0
    return healMon(mon, item.heal)
  }

  function partyHasAlive(team) {
    return alive(team).length > 0
  }

  function healParty(team) {
    for (const mon of team) {
      mon.hp = mon.maxHp
      mon.fainted = false
      mon.status = null
      mon.statusTurns = 0
      mon.stages = { atk: 0, def: 0, spd: 0 }
      for (const move of mon.moves) move.pp = move.maxPp
    }
  }

  return {
    clamp, typeEffect, stageMult, statsFor, xpToNext, learnedMoves, makeMonster,
    activeMon, alive, firstAlive, createBattle, speedOf, calcDamage, effectivenessText,
    grantXp, chooseEnemyMove, performMove, catchChance, tryCatch, resolveTurn,
    resolveForcedSwitch, switchMon, useHealItemOutOfBattle, partyHasAlive, healParty, healMon
  }
})
