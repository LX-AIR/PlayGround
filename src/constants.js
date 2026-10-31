export const TYPES = {
  fire: { name: 'Fire', glyph: '△', color: '#ff6b4a', glow: '#ffb36b' },
  water: { name: 'Water', glyph: '≋', color: '#79dcff', glow: '#bdf2ff' },
  earth: { name: 'Earth', glyph: '⬢', color: '#e3b94f', glow: '#ffe7a1' },
  air: { name: 'Air', glyph: '⌁', color: '#8ff0ce', glow: '#d3fff1' },
  spirit: { name: 'Spirit', glyph: '✦', color: '#c7a4ff', glow: '#eadcff' },
  shadow: { name: 'Shadow', glyph: '☾', color: '#9f7bff', glow: '#cdb8ff' },
}

const BEATS = { fire: 'air', air: 'earth', earth: 'water', water: 'fire' }

export function typeMultiplier(attacker, defender) {
  if (!attacker || attacker === 'aether') return 1
  if (attacker === 'spirit' && defender === 'shadow') return 1.35
  if (attacker === 'shadow' && defender === 'spirit') return 1.35
  if (BEATS[attacker] === defender) return 1.35
  if (BEATS[defender] === attacker) return 0.76
  if (attacker === defender) return 0.9
  return 1
}

export function typeLabel(type) {
  return TYPES[type]?.name?.toUpperCase() ?? 'AETHER'
}

export const CREATURES = [
  {
    id: 'anansi', no: 1, name: 'ANANSI', epithet: 'The Silver Weaver', type: 'spirit',
    origin: 'AKAN · JAMAICAN FOLKLORE', zone: 'Silk Cotton Grove',
    lore: 'The spider who spun stories out of nothing and sold them to the sky. He still keeps every promise — especially the crooked ones.',
    passive: { name: "Weaver's Luck", desc: '+25% capture chance' },
    ability: { name: 'WEB SNARE', desc: 'Tethers nearby spirits and slows them', radius: 14, damage: 12, cooldown: 11 },
    stats: { hp: 46, speed: 3.15, damage: 7, scale: 1.05, build: 'spider', behavior: 'ranged', fly: false },
    colors: { primary: 0x151515, secondary: 0x2a5d4c, accent: 0xf4c95d, glow: 0x7dffd2, eye: 0x9dff5f },
    spawn: { x: 2, z: -47, radius: 18, count: 3, levels: [5, 8] },
  },
  {
    id: 'calf', no: 2, name: 'ROLLING CALF', epithet: 'Ember Hoof', type: 'fire',
    origin: 'JAMAICAN FOLKLORE', zone: 'Blue Mountain Rise',
    lore: 'A calf of living flame that patrols the mountain roads after dark. Its hoofbeats sound like distant thunder, and its eyes burn like coals.',
    passive: { name: 'Kindled Shots', desc: 'Shots set spirits burning' },
    ability: { name: 'EMBER CHARGE', desc: 'Blazing charge that scatters foes', radius: 10, damage: 26, cooldown: 10 },
    stats: { hp: 66, speed: 3.65, damage: 10, scale: 1.12, build: 'calf', behavior: 'melee', fly: false },
    colors: { primary: 0x2b1712, secondary: 0x7d2c17, accent: 0xff6b35, glow: 0xffa54a, eye: 0xffd166 },
    spawn: { x: -27, z: -5, radius: 20, count: 3, levels: [4, 7] },
  },
  {
    id: 'mami', no: 3, name: 'MAMI WATA', epithet: 'Tide Mother', type: 'water',
    origin: 'WEST AFRICAN · CARIBBEAN', zone: 'Waterfall Pools',
    lore: 'A water spirit of sweet rivers and deep memory. Sailors leave her bright cloth and honey; she leaves them the tide.',
    passive: { name: 'Tidal Mend', desc: 'Slowly restores your health' },
    ability: { name: 'HEALING SPRING', desc: 'A restorative ring of water', radius: 11, damage: 0, heal: 34, cooldown: 14 },
    stats: { hp: 60, speed: 2.85, damage: 7, scale: 1.18, build: 'serpent', behavior: 'ranged', fly: true },
    colors: { primary: 0x0b6d77, secondary: 0x32c9c1, accent: 0xbdf2ff, glow: 0x62e9ff, eye: 0xffffff },
    spawn: { x: -31, z: -9, radius: 17, count: 3, levels: [4, 7] },
  },
  {
    id: 'quetzal', no: 4, name: 'QUETZALCOATL', epithet: 'Feather Wind', type: 'air',
    origin: 'AZTEC MYTHOLOGY', zone: 'Silk Cotton Canopy',
    lore: 'The plumed serpent who taught the sky to sing and the wind to carry seeds. Every emerald feather is a sentence in a forgotten language.',
    passive: { name: 'Featherstep', desc: '+12% movement speed' },
    ability: { name: 'GALE BURST', desc: 'A spiral gust that knocks spirits back', radius: 13, damage: 20, cooldown: 11 },
    stats: { hp: 55, speed: 3.55, damage: 8, scale: 1.36, build: 'feathered', behavior: 'ranged', fly: true },
    colors: { primary: 0x0f6b4b, secondary: 0x21c68d, accent: 0xffd166, glow: 0x8ff0ce, eye: 0xfff3c4 },
    spawn: { x: 11, z: -33, radius: 17, count: 3, levels: [5, 8] },
  },
  {
    id: 'nian', no: 5, name: 'NIAN', epithet: 'Mountain Maw', type: 'earth',
    origin: 'CHINESE MYTHOLOGY', zone: 'Blue Mountain Rise',
    lore: 'A lion-beast that sleeps beneath the hills and wakes when the old year ends. The mountain trembles when it turns over in its sleep.',
    passive: { name: 'Stone Hide', desc: '+25 starting shield' },
    ability: { name: 'QUAKE', desc: 'Splits the ground in a wide ring', radius: 15, damage: 30, cooldown: 13 },
    stats: { hp: 86, speed: 2.95, damage: 12, scale: 1.3, build: 'lion', behavior: 'melee', fly: false },
    colors: { primary: 0x8f241d, secondary: 0xd9a227, accent: 0xffe09a, glow: 0xffb347, eye: 0xfff1b8 },
    spawn: { x: -44, z: -19, radius: 16, count: 2, levels: [6, 9] },
  },
  {
    id: 'bakunawa', no: 6, name: 'BAKUNAWA', epithet: 'Moon Eater', type: 'shadow',
    origin: 'FILIPINO MYTHOLOGY', zone: 'Luminous Reef',
    lore: 'A sea serpent who swallows moons and hungers still. The drums of the reef are played to make her spit the light back out.',
    passive: { name: 'Eclipse Eye', desc: '+20% critical damage' },
    ability: { name: 'MOONBEAM', desc: 'A piercing lance of borrowed moonlight', radius: 9, damage: 34, cooldown: 12 },
    stats: { hp: 62, speed: 3.15, damage: 10, scale: 1.44, build: 'moon', behavior: 'ranged', fly: true },
    colors: { primary: 0x241a4e, secondary: 0x5b3ea6, accent: 0xbdf2ff, glow: 0x9f7bff, eye: 0xfff1b8 },
    spawn: { x: 62, z: 18, radius: 18, count: 3, levels: [6, 9] },
  },
  {
    id: 'kitsune', no: 7, name: 'KITSUNE', epithet: 'The Nine Lanterns', type: 'spirit',
    origin: 'JAPANESE MYTHOLOGY', zone: 'Silk Cotton Grove',
    lore: 'A fox whose tails carry the souls of old lanterns. Each flame remembers a traveler who never came home.',
    passive: { name: 'Lantern Soul', desc: '+35% aether regeneration' },
    ability: { name: 'FOXFIRE', desc: 'A fan of seeking spirit flames', radius: 12, damage: 22, cooldown: 9 },
    stats: { hp: 52, speed: 3.85, damage: 8, scale: 1.02, build: 'fox', behavior: 'ranged', fly: false },
    colors: { primary: 0xf3e9d6, secondary: 0xd9a227, accent: 0xfff1b8, glow: 0xffc857, eye: 0xffb347 },
    spawn: { x: 6, z: -44, radius: 15, count: 2, levels: [5, 8] },
  },
  {
    id: 'raven', no: 8, name: 'RAVEN', epithet: 'Masked Trickster', type: 'shadow',
    origin: 'PACIFIC NORTHWEST', zone: 'Pimento Beach',
    lore: 'The raven who stole the sun and left us starlight. He wears a white mask so the dark will not recognize him.',
    passive: { name: 'Starlight Thief', desc: '+30% soul orb drops' },
    ability: { name: 'NIGHT DIVE', desc: 'A diving strike from the dark', radius: 10, damage: 25, cooldown: 10 },
    stats: { hp: 46, speed: 4.35, damage: 7, scale: 0.95, build: 'raven', behavior: 'ranged', fly: true },
    colors: { primary: 0x0c0d13, secondary: 0x262a3c, accent: 0xe8e2d4, glow: 0x9f7bff, eye: 0xcdb8ff },
    spawn: { x: 14, z: 61, radius: 18, count: 2, levels: [2, 5] },
  },
]

export const CREATURE_BY_ID = Object.fromEntries(CREATURES.map(c => [c.id, c]))

export const BOSSES = [
  {
    id: 'nian-prime', species: 'nian', name: 'NIAN PRIME', warden: 'WARDEN OF THE MOUNTAIN', shrine: 'mountain',
    level: 12, hp: 430, scale: 2.55, color: '#f4c95d', final: false,
    intro: 'The hill itself has learned to hunger.',
    lore: 'Stone hides a hunger older than the parish. Break it before the mountain breaks the village.',
  },
  {
    id: 'bakunawa-prime', species: 'bakunawa', name: 'BAKUNAWA PRIME', warden: 'WARDEN OF THE REEF', shrine: 'reef',
    level: 13, hp: 390, scale: 2.5, color: '#9f7bff', final: false,
    intro: 'The moon is missing a bite, and the tide is rising.',
    lore: 'She has eaten every moon in the reef song. Give her back the light.',
  },
  {
    id: 'quetzal-prime', species: 'quetzal', name: 'QUETZAL PRIME', warden: 'WARDEN OF THE CANOPY', shrine: 'canopy',
    level: 14, hp: 410, scale: 2.6, color: '#8ff0ce', final: false,
    intro: 'The canopy is screaming in a language of feathers.',
    lore: 'The wind has forgotten how to carry seeds. Remind it.',
  },
  {
    id: 'anansi-unbound', species: 'anansi', name: 'ANANSI UNBOUND', warden: 'THE UNBOUND TRICKSTER', shrine: 'tree',
    level: 18, hp: 760, scale: 3.1, color: '#c7a4ff', final: true,
    intro: 'Every story he ever told has come home to roost.',
    lore: 'The weaver has tangled every ward into one. Cut the story loose.',
  },
]

export const BOSS_BY_SHRINE = Object.fromEntries(BOSSES.filter(b => !b.final).map(b => [b.shrine, b]))
export const FINAL_BOSS = BOSSES.find(b => b.final)

export const SHRINES = {
  mountain: { id: 'mountain', name: 'MOUNTAIN SHRINE', short: 'Mountain', x: -47, z: -25, y: 17.2, color: '#f4c95d', zone: 'Blue Mountain Rise' },
  reef: { id: 'reef', name: 'MOON REEF SHRINE', short: 'Reef', x: 66, z: 10, y: 4.2, color: '#9f7bff', zone: 'Luminous Reef' },
  canopy: { id: 'canopy', name: 'CANOPY SHRINE', short: 'Canopy', x: 6, z: -36, y: 7.4, color: '#8ff0ce', zone: 'Silk Cotton Grove' },
  tree: { id: 'tree', name: 'GREAT SILK COTTON', short: 'Silk Cotton', x: -2, z: -64, y: 6.8, color: '#f4c95d', zone: 'Silk Cotton Grove' },
}

export const NPCS = [
  {
    id: 'nya', name: 'ELDER NYA', role: 'VILLAGE ELDER', glyph: '✺', x: 24.5, z: 40.5,
    lines: [
      'You feel it too, don\'t you? The island is holding its breath.',
      'Three Wardens keep Pimento Isle in balance — one in the mountain, one in the reef, one in the canopy. Something has tangled them all.',
      'Take this little one. A kitsune, born under a lantern moon. She will lend you her fire, and her nose for mischief.',
      'Shoot a spirit until its soul shows, then throw a soul orb. We do not kill what we can bond. Now go — the Great Silk Cotton is already dropping leaves in the dry season.',
    ],
    after: 'The Wardens are restless. Follow the path, child. And come back to me when your soul is tired — I will mend what I can.',
  },
  {
    id: 'fitz', name: 'FITZ', role: 'BOATMAN OF PIMENTO BEACH', glyph: '⚓', x: 13, z: 76,
    lines: [
      'Easy with that aether, Warden. The reef spirits get jumpy when the tide turns.',
      'Air beats earth, earth beats water, water beats fire, fire beats air. Spirit and shadow? They just plain hate each other.',
      'Throw a soul orb with your off hand. A weakened spirit goes in peaceful — a strong one just laughs at you.',
      'Me? I stay with the boat. Somebody has to keep the rum warm.',
    ],
    after: 'Tide\'s still wrong. If you see a moon with a bite out of it, run.',
  },
]

export const PARTY_MAX = 4
export const CAPTURE_THRESHOLD = 0.35
export const PLAYER_BASE = {
  hp: 100, aether: 100, speed: 6.4, jump: 8.2, damage: 11, fireRate: 6.2,
  aetherCost: 4.2, aetherRegen: 22, dashSpeed: 15, dashCooldown: 1.5,
}

export const COLORS = {
  gold: 0xf4c95d, jade: 0x37d6a5, coral: 0xff6b4a, sky: 0x79dcff,
  cream: 0xf7eed8, ink: 0x06120e, violet: 0xc7a4ff, red: 0xff5d54,
}

export const SPAWN_POINT = { x: 9, z: 84 }
export const RESPAWN_POINT = { x: 26, z: 40 }
