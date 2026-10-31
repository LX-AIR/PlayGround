/* GIGAMON: Island Spirits — game data */
(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  else root.YD = Object.assign(root.YD || {}, { data: api })
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict'

  const TYPES = {
    Flame:  { name: 'Flame',  color: '#ff7043', dark: '#a83316', soft: '#ffe0d4' },
    Tide:   { name: 'Tide',   color: '#35b6d6', dark: '#10627c', soft: '#d6f4fb' },
    Leaf:   { name: 'Leaf',   color: '#63b94a', dark: '#2c6a27', soft: '#e0f5d8' },
    Stone:  { name: 'Stone',  color: '#c19a5b', dark: '#6d4e26', soft: '#f3e6cd' },
    Storm:  { name: 'Storm',  color: '#f2c53d', dark: '#8a6410', soft: '#fdf1c6' },
    Spirit: { name: 'Spirit', color: '#9a6fdc', dark: '#533587', soft: '#eadffa' },
    Island: { name: 'Island', color: '#f4d9a6', dark: '#7a6744', soft: '#fff8e7' }
  }

  // attacker type -> defender type -> multiplier
  const TYPE_CHART = {
    Flame:  { Leaf: 2, Tide: 0.5, Stone: 0.5, Spirit: 0.5 },
    Tide:   { Flame: 2, Stone: 2, Leaf: 0.5, Storm: 0.5 },
    Leaf:   { Tide: 2, Stone: 2, Flame: 0.5, Storm: 0.5 },
    Stone:  { Flame: 2, Storm: 2, Tide: 0.5, Leaf: 0.5 },
    Storm:  { Tide: 2, Spirit: 2, Stone: 0.5, Leaf: 0.5 },
    Spirit: { Stone: 2, Storm: 2, Spirit: 0.5, Leaf: 0.5 },
    Island: {}
  }

  const MOVES = {
    tackle:      { name: 'Tackle',       type: 'Stone',  power: 40, acc: 100, pp: 35, desc: 'A no-nonsense island shoulder bump.' },
    scratch:     { name: 'Scratch',      type: 'Stone',  power: 40, acc: 100, pp: 35, desc: 'A quick swipe with claw or thorn.' },
    peck:        { name: 'Peck',         type: 'Storm',  power: 35, acc: 100, pp: 35, desc: 'A sharp beak jab.' },
    ember:       { name: 'Ember',        type: 'Flame',  power: 40, acc: 100, pp: 25, desc: 'A little pepper-flake flick that may burn.', effect: { status: 'burn', chance: 15 } },
    flamepepper: { name: 'Flame Pepper', type: 'Flame',  power: 50, acc: 95,  pp: 20, desc: 'A fiery scotch-bonnet burst that may burn.', effect: { status: 'burn', chance: 20 } },
    heatwave:    { name: 'Heat Wave',    type: 'Flame',  power: 70, acc: 90,  pp: 10, desc: 'A shimmering wall of hot air.' },
    inferno:     { name: 'Inferno',      type: 'Flame',  power: 85, acc: 85,  pp: 5,  desc: 'A roaring blaze that may leave a burn.', effect: { status: 'burn', chance: 30 } },
    bubble:      { name: 'Bubble',       type: 'Tide',   power: 40, acc: 100, pp: 30, desc: 'A spray of fizzy spring water.' },
    aquajet:     { name: 'Aqua Jet',     type: 'Tide',   power: 45, acc: 100, pp: 20, priority: 1, desc: 'Rides a fast current to strike first.' },
    ripcurrent:  { name: 'Rip Current',  type: 'Tide',   power: 65, acc: 95,  pp: 10, desc: 'A pulling wave that drags the foe off balance.' },
    wavecrash:   { name: 'Wave Crash',   type: 'Tide',   power: 75, acc: 90,  pp: 10, desc: 'A full-bodied crash of surf.' },
    vinesnap:    { name: 'Vine Snap',    type: 'Leaf',   power: 40, acc: 100, pp: 30, desc: 'A springy vine whip.' },
    leafblade:   { name: 'Leaf Blade',   type: 'Leaf',   power: 60, acc: 95,  pp: 15, desc: 'A razor edge of green.' },
    seedbomb:    { name: 'Seed Bomb',    type: 'Leaf',   power: 70, acc: 90,  pp: 10, desc: 'A heavy ackee seed launched like a cannonball.' },
    rootgrab:    { name: 'Root Grab',    type: 'Leaf',   power: 45, acc: 95,  pp: 15, desc: 'Roots sip a little life and pass it on.', effect: { drain: 0.5 } },
    pebbletoss:  { name: 'Pebble Toss',  type: 'Stone',  power: 40, acc: 100, pp: 30, desc: 'A fistful of gravel from the yard.' },
    rockslam:    { name: 'Rock Slam',    type: 'Stone',  power: 65, acc: 90,  pp: 15, desc: 'A boulder-heavy body slam.' },
    bouldersmash:{ name: 'Boulder Smash', type: 'Stone', power: 80, acc: 85,  pp: 5,  desc: 'A mountain-sized wallop.' },
    staticfeather:{ name: 'Static Feather', type: 'Storm', power: 40, acc: 100, pp: 25, desc: 'A charged feather flick that may paralyze.', effect: { status: 'paralyze', chance: 20 } },
    thunderclap: { name: 'Thunder Clap', type: 'Storm',  power: 70, acc: 90,  pp: 10, desc: 'A sudden crack of sky-drum thunder.', effect: { status: 'paralyze', chance: 10 } },
    stormcall:   { name: 'Storm Call',   type: 'Storm',  power: 80, acc: 85,  pp: 5,  desc: 'Calls the cloud drums down from the peak.' },
    shadowpoke:  { name: 'Shadow Poke',  type: 'Spirit', power: 40, acc: 100, pp: 30, desc: 'A tickle from a cool night shadow.' },
    hex:         { name: 'Hex',          type: 'Spirit', power: 60, acc: 95,  pp: 15, desc: 'An old-story curse that weakens the foe.', effect: { stat: 'def', stages: -1, target: 'foe', chance: 40 } },
    haunt:       { name: 'Haunt',        type: 'Spirit', power: 75, acc: 90,  pp: 10, desc: 'A chorus of midnight voices.' },
    lullaby:     { name: 'Lullaby',      type: 'Spirit', power: 0,  acc: 75,  pp: 10, desc: 'A soft song that may put the foe to sleep.', effect: { status: 'sleep', chance: 100 } },
    growl:       { name: 'Growl',        type: 'Island', power: 0,  acc: 100, pp: 25, desc: 'A stern island warning. Lowers the foe\'s attack.', effect: { stat: 'atk', stages: -1, target: 'foe' } },
    focus:       { name: 'Focus',        type: 'Island', power: 0,  acc: 100, pp: 20, desc: 'Takes a breath and raises attack.', effect: { stat: 'atk', stages: 1, target: 'self' } },
    guardup:     { name: 'Guard Up',     type: 'Island', power: 0,  acc: 100, pp: 20, desc: 'Plants the feet and raises defense.', effect: { stat: 'def', stages: 1, target: 'self' } },
    quickstep:   { name: 'Quick Step',   type: 'Island', power: 0,  acc: 100, pp: 20, desc: 'A dance step that raises speed.', effect: { stat: 'spd', stages: 1, target: 'self' } },
    coconutwater:{ name: 'Coconut Water', type: 'Island', power: 0, acc: 100, pp: 10, desc: 'A cool sip that restores half of max HP.', effect: { heal: 0.5 } },
    struggle:    { name: 'Struggle',     type: 'Island', power: 35, acc: 100, pp: 1, desc: 'A desperate last shove.' }
  }

  const SPECIES = {
    pimenta: {
      no: 1, name: 'Pimenta', type: 'Flame', catchRate: 45, xpYield: 12,
      base: { hp: 44, atk: 55, def: 43, spd: 58 },
      evolve: { level: 16, to: 'scorchbonnet' },
      learn: [[1, 'scratch'], [1, 'growl'], [4, 'ember'], [8, 'flamepepper'], [11, 'focus'], [14, 'heatwave'], [19, 'inferno']],
      lore: 'A fiery little pepper spirit with a leaf crown. Its capsaicin core glows brighter when it feels brave. One sneeze can season an entire pot of rice.',
      cry: 320
    },
    scorchbonnet: {
      no: 2, name: 'Scorchbonnet', type: 'Flame', catchRate: 20, xpYield: 28,
      base: { hp: 62, atk: 78, def: 62, spd: 74 },
      learn: [[1, 'scratch'], [1, 'growl'], [1, 'ember'], [1, 'flamepepper'], [11, 'focus'], [14, 'heatwave'], [19, 'inferno']],
      lore: 'The ripe form of Pimenta. Its crown of flame burns without smoke, and its footsteps leave little rings of warm air on the road.',
      cry: 260
    },
    turtide: {
      no: 3, name: 'Turtide', type: 'Tide', catchRate: 45, xpYield: 12,
      base: { hp: 50, atk: 48, def: 58, spd: 42 },
      evolve: { level: 16, to: 'turtempest' },
      learn: [[1, 'tackle'], [1, 'bubble'], [4, 'guardup'], [8, 'aquajet'], [12, 'coconutwater'], [14, 'wavecrash'], [18, 'ripcurrent']],
      lore: 'A patient tide turtle that rides the warm currents around Coral Shore. It stores seawater in its shell and sprays a cooling mist when it is happy.',
      cry: 210
    },
    turtempest: {
      no: 4, name: 'Turtempest', type: 'Tide', catchRate: 20, xpYield: 28,
      base: { hp: 70, atk: 66, def: 80, spd: 56 },
      learn: [[1, 'tackle'], [1, 'bubble'], [1, 'guardup'], [1, 'aquajet'], [12, 'coconutwater'], [14, 'wavecrash'], [18, 'ripcurrent']],
      lore: 'An old turtle whose shell carries a tiny storm. Fisherfolk say a Turtempest circling the bay means fair weather for three days.',
      cry: 170
    },
    ackee: {
      no: 5, name: 'Ackee', type: 'Leaf', catchRate: 45, xpYield: 12,
      base: { hp: 48, atk: 50, def: 50, spd: 50 },
      evolve: { level: 16, to: 'ackeen' },
      learn: [[1, 'tackle'], [1, 'vinesnap'], [4, 'growl'], [8, 'seedbomb'], [12, 'rootgrab'], [15, 'leafblade'], [18, 'coconutwater']],
      lore: 'A cheerful fruit spirit that drops from the branch at first light. It is extremely careful never to land on anybody\'s head.',
      cry: 300
    },
    ackeen: {
      no: 6, name: 'Ackeen', type: 'Leaf', catchRate: 20, xpYield: 28,
      base: { hp: 66, atk: 72, def: 66, spd: 62 },
      learn: [[1, 'tackle'], [1, 'vinesnap'], [1, 'growl'], [1, 'seedbomb'], [12, 'rootgrab'], [15, 'leafblade'], [18, 'coconutwater']],
      lore: 'The orchard guardian. Ackeen grows small ackee lanterns along its arms and shakes them to warn the village when a storm is close.',
      cry: 240
    },
    yardgoat: {
      no: 7, name: 'Yardgoat', type: 'Stone', catchRate: 170, xpYield: 9,
      base: { hp: 46, atk: 54, def: 50, spd: 40 },
      learn: [[1, 'tackle'], [1, 'growl'], [5, 'pebbletoss'], [8, 'guardup'], [12, 'rockslam'], [17, 'bouldersmash']],
      lore: 'Stubborn, sure-footed, and absolutely convinced that your laundry is a snack. A Yardgoat can balance on a zinc roof through a whole hurricane.',
      cry: 190
    },
    mongoose: {
      no: 8, name: 'Mongoose', type: 'Stone', catchRate: 175, xpYield: 9,
      base: { hp: 38, atk: 52, def: 38, spd: 66 },
      learn: [[1, 'scratch'], [1, 'quickstep'], [5, 'pebbletoss'], [9, 'tackle'], [13, 'rockslam'], [17, 'focus']],
      lore: 'Fast, nosy, and always where the action is. A Mongoose flicks its striped tail once before vanishing into the brush.',
      cry: 420
    },
    seacow: {
      no: 9, name: 'Seacow', type: 'Tide', catchRate: 140, xpYield: 12,
      base: { hp: 66, atk: 44, def: 56, spd: 30 },
      learn: [[1, 'tackle'], [1, 'bubble'], [5, 'guardup'], [9, 'coconutwater'], [13, 'wavecrash'], [17, 'ripcurrent']],
      lore: 'A gentle river-mouth grazer. Seacow hums to the seagrass, naps in sunbeams, and has never once been in a hurry.',
      cry: 140
    },
    cockpit: {
      no: 10, name: 'Cockpit', type: 'Storm', catchRate: 100, xpYield: 16,
      base: { hp: 44, atk: 62, def: 42, spd: 70 },
      learn: [[1, 'peck'], [1, 'quickstep'], [5, 'staticfeather'], [10, 'thunderclap'], [14, 'focus'], [18, 'stormcall']],
      lore: 'A bold parrot from the high limestone country. Cockpit mimics thunder so well that rain clouds sometimes answer.',
      cry: 500
    },
    anancy: {
      no: 11, name: 'Anancy', type: 'Spirit', catchRate: 80, xpYield: 16,
      base: { hp: 42, atk: 58, def: 44, spd: 64 },
      learn: [[1, 'shadowpoke'], [1, 'growl'], [6, 'hex'], [10, 'lullaby'], [14, 'haunt'], [18, 'quickstep']],
      lore: 'The clever spider of island stories. Anancy never loses a battle; it simply finds a more interesting way to win.',
      cry: 380
    },
    rollingcalf: {
      no: 12, name: 'Rolling Calf', type: 'Spirit', catchRate: 55, xpYield: 22,
      base: { hp: 54, atk: 72, def: 50, spd: 62 },
      learn: [[1, 'ember'], [1, 'shadowpoke'], [6, 'flamepepper'], [11, 'hex'], [15, 'haunt'], [19, 'inferno']],
      lore: 'A midnight calf wreathed in embers. Folks say you hear its hooves rattling on the road long before you see the glow.',
      cry: 150
    },
    rivermumma: {
      no: 13, name: 'River Mumma', type: 'Tide', catchRate: 70, xpYield: 22,
      base: { hp: 60, atk: 58, def: 64, spd: 58 },
      learn: [[1, 'bubble'], [1, 'lullaby'], [7, 'aquajet'], [11, 'hex'], [15, 'wavecrash'], [19, 'haunt']],
      lore: 'Keeper of cool water and lost combs. River Mumma grants safe passage to respectful travelers and a soaking to everybody else.',
      cry: 330
    },
    peeniewallie: {
      no: 14, name: 'Peenie Wallie', type: 'Storm', catchRate: 160, xpYield: 10,
      base: { hp: 36, atk: 44, def: 36, spd: 72 },
      learn: [[1, 'peck'], [1, 'staticfeather'], [5, 'quickstep'], [10, 'thunderclap'], [14, 'lullaby'], [18, 'stormcall']],
      lore: 'A tiny firefly spirit that blinks in rhythm with the drums. Its light is said to guide wanderers home through the darkest bush.',
      cry: 620
    },
    mokojumbie: {
      no: 15, name: 'Moko Jumbie', type: 'Spirit', catchRate: 50, xpYield: 26,
      base: { hp: 56, atk: 60, def: 58, spd: 68 },
      learn: [[1, 'shadowpoke'], [1, 'growl'], [7, 'hex'], [11, 'guardup'], [15, 'haunt'], [19, 'quickstep']],
      lore: 'A stilt-walking guardian spirit. Moko Jumbie sees every path from above and dances around danger without ever touching the ground.',
      cry: 280
    },
    drbird: {
      no: 16, name: 'Dr. Bird', type: 'Storm', catchRate: 25, xpYield: 60, legendary: true,
      base: { hp: 78, atk: 88, def: 64, spd: 96 },
      learn: [[1, 'peck'], [1, 'staticfeather'], [10, 'aquajet'], [15, 'thunderclap'], [20, 'heatwave'], [24, 'stormcall']],
      lore: 'The legendary streamer-tailed hummingbird. It appears only when the island needs a true guardian, and its wingbeat sounds like distant rain.',
      cry: 700
    }
  }

  const ITEMS = {
    coconut_ball: { name: 'Coconut Ball', kind: 'ball', price: 80, mult: 1, icon: 'ball', desc: 'A hollow coconut shell with a friendly hum. Catches wild Gigamon.' },
    golden_ball:  { name: 'Golden Ball', kind: 'ball', price: 650, mult: 4, icon: 'gold', desc: 'A gilded ball for legendary spirits. Much stronger than a Coconut Ball.' },
    potion:       { name: 'Potion', kind: 'heal', price: 120, heal: 30, icon: 'potion', desc: 'Cool coconut water and herbs. Restores 30 HP.' },
    super_potion: { name: 'Super Potion', kind: 'heal', price: 320, heal: 70, icon: 'super', desc: 'A strong island tonic. Restores 70 HP.' },
    mango:        { name: 'Sweet Mango', kind: 'heal', price: 200, heal: 45, icon: 'mango', desc: 'A ripe Julie mango. Restores 45 HP and a little courage.' }
  }

  const TRAINERS = {
    ray: {
      name: 'Rasta Ray', title: 'Roots Trainer', badge: null, reward: 160,
      intro: ['Yeah mon! You got the look of a guardian.', 'My roots team been waiting for a proper rumble. Earth and leaf, bredda — let us reason!'],
      win: ['Respect, respect. You reason with your team, not at it.', 'Take this and walk good. Plenty more grow in the bush.'],
      lose: ['Irie! Come back when your roots run deeper.'],
      after: ['The bamboo grove west of here? Warden Fern keeps it. She does not play.'],
      team: [['ackee', 7], ['mongoose', 7], ['yardgoat', 8]]
    },
    jomo: {
      name: 'Fisher Jomo', title: 'Reef Trainer', badge: null, reward: 200,
      intro: ['You see that water? Sweetest blue in the whole Caribbean.', 'My tide team and me, we go where the current goes. Try keep up!'],
      win: ['Big up yourself! The sea taught you well.', 'Warden Finn is out on the pier. Tell her Jomo sent you — and mind the waves.'],
      lose: ['The tide always comes back. So should you.'],
      after: ['Golden Ball? Only the Professor has those, and only for guardians with badges.'],
      team: [['turtide', 9], ['seacow', 9], ['cockpit', 10]]
    },
    carla: {
      name: 'Cockpit Carla', title: 'Cloud Trainer', badge: null, reward: 260,
      intro: ['Up here the air bites and the parrots talk back.', 'My storm team can hear a cloud before it forms. Let us see if you can!'],
      win: ['Ha! Lightning sharp. The peak is yours to climb, guardian.', 'Mind Elder Zeph at the gate. He tests more than your team.'],
      lose: ['The mountain is patient. Are you?'],
      after: ['Elder Zeph only opens the pass for two badges. Earn them proper.'],
      team: [['cockpit', 12], ['peeniewallie', 12], ['mokojumbie', 13]]
    },
    fern: {
      name: 'Warden Fern', title: 'Warden of the Grove', badge: 'fern', reward: 450,
      intro: ['So you found the grove. Good. The bamboo does not hide itself from those who listen.', 'I am Fern, Warden of the Grove. My team speaks for every root and wing here.', 'Show me you can protect this island. Begin!'],
      win: ['The grove accepts you. Take the Leaf Badge.', 'Two more wardens remain. The reef and the peak will test different parts of you.'],
      lose: ['The grove is still standing. Grow, then return.'],
      after: ['Every root remembers a kind footstep. Walk gently, guardian.'],
      team: [['ackeen', 11], ['yardgoat', 12], ['anancy', 12]]
    },
    finn: {
      name: 'Warden Finn', title: 'Warden of the Reef', badge: 'finn', reward: 550,
      intro: ['Easy now. The boards get slick when the tide turns.', 'I am Finn, Warden of the Reef. Everything in this bay is family to me.', 'If you want the Tide Badge, show me you can move with the water instead of against it.'],
      win: ['Smooth as a turtle through a current. The Tide Badge is yours.', 'You have two now. Elder Zeph at the mountain gate will want to meet you.'],
      lose: ['The reef keeps its secrets a little longer.'],
      after: ['When three badges sit in your hand, climb the peak. Dr. Bird will decide the rest.'],
      team: [['seacow', 14], ['turtide', 14], ['rivermumma', 15]]
    },
    zeph: {
      name: 'Elder Zeph', title: 'Warden of the Peak', badge: 'zeph', reward: 700,
      intro: ['Two badges. You climbed all this way carrying them, and still you stand straight.', 'I am Zeph. The mountain does not bow, and neither do I.', 'One last test, guardian. Show me the storm in your heart — and the calm around it.'],
      win: ['The peak is yours. Take the Storm Badge.', 'Listen. Do you hear that? Humming wings. Dr. Bird has been watching you the whole time.', 'The summit path is open. Go and meet the legend.'],
      lose: ['The mountain stands. Come back when your spirit is louder than the wind.'],
      after: ['Three badges. The island has chosen its guardian. Climb, and be worthy of the view.'],
      team: [['cockpit', 17], ['mokojumbie', 18], ['rollingcalf', 19]]
    }
  }

  // Wild encounter tables by zone. Weighted picks; level range scales with zone.
  const ENCOUNTERS = {
    meadow: {
      levels: [3, 6],
      table: [['mongoose', 30], ['peeniewallie', 28], ['yardgoat', 22], ['ackee', 12], ['pimenta', 4], ['turtide', 4]]
    },
    forest: {
      levels: [4, 8],
      table: [['ackee', 24], ['yardgoat', 24], ['mongoose', 20], ['anancy', 12], ['peeniewallie', 14], ['ackeen', 6]]
    },
    beach: {
      levels: [5, 10],
      table: [['seacow', 28], ['turtide', 18], ['peeniewallie', 16], ['mongoose', 18], ['rivermumma', 8], ['cockpit', 8], ['turtempest', 4]]
    },
    mountain: {
      levels: [10, 15],
      table: [['cockpit', 26], ['yardgoat', 18], ['rollingcalf', 14], ['mokojumbie', 14], ['rivermumma', 10], ['anancy', 10], ['peeniewallie', 8]]
    },
    peak: {
      levels: [14, 18],
      table: [['cockpit', 24], ['rollingcalf', 20], ['mokojumbie', 20], ['rivermumma', 16], ['yardgoat', 20]]
    }
  }

  const ZONE_NAMES = {
    town: 'Sweetwater Bay',
    meadow: 'Likkle Meadow',
    forest: 'Bamboo Grove',
    beach: 'Coral Shore',
    mountain: 'Blue Mountain Trail',
    peak: 'Blue Mountain Peak'
  }

  const STORY = {
    title: 'GIGAMON',
    subtitle: 'Island Spirits',
    tagline: 'A tropical creature-collecting adventure',
    intro: 'Welcome to Sweetwater Bay, Jamaica. The island is full of Gigamon — living spirits of pepper, reef, bamboo, and storm. Earn three Warden Badges, climb Blue Mountain Peak, and meet the legendary Dr. Bird.',
    starterPrompt: 'Choose your first partner',
    badges: {
      fern: { name: 'Leaf Badge', color: '#63b94a', icon: 'leaf' },
      finn: { name: 'Tide Badge', color: '#35b6d6', icon: 'wave' },
      zeph: { name: 'Storm Badge', color: '#f2c53d', icon: 'bolt' }
    }
  }

  return { TYPES, TYPE_CHART, MOVES, SPECIES, ITEMS, TRAINERS, ENCOUNTERS, ZONE_NAMES, STORY }
})
