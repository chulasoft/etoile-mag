/**
 * ÉTOILE — Girls Data
 * Apecoft Studio
 *
 * เพิ่มตัวละครใหม่ได้โดย push object เข้า array ด้านล่าง
 * layout direction (lft/rgt) จะ auto-alternate ตาม index
 * portrait สามารถเพิ่มได้ไม่จำกัดใบ
 */

const GIRLS = [
  {
    key:       'akane',
    name:      'Akane',
    jp:        'アカネ',
    color:     '#e2adc0',
    colorName: 'Rose Dusk',

    gallery: {
      src: 'girls/akane_gallery.png',
      pos: 'center top',
    },

    motto_jp: '朝は、わたしだけのもの。急かさないで。',
    motto_en: '"Mornings are mine. Don\'t rush me." ♡',

    tags: ['Tsundere', 'Quietly warm', 'Morning ritual', 'Poolside', 'Coffee first'],

    portraits: [
      { src: 'girls/akane_p1.png', pos: 'center top' },
      { src: 'girls/akane_p2.png', pos: 'center top' },
      { src: 'girls/akane_p3.png', pos: 'center top' },
      { src: 'girls/akane_p4.png', pos: 'center top' },
    ],

    stats: [
      { n: 'Warmth',  v: 82 },
      { n: 'Charm',   v: 75 },
      { n: 'Bold',    v: 88 },
      { n: 'Calm',    v: 60 },
      { n: 'Playful', v: 55 },
      { n: 'Style',   v: 78 },
    ],

    volumes: [
      { label: 'Vol.01 — Summer Memories', url: 'vol01/summer-memories.html' },
    ],
  },

  {
    key:       'mina',
    name:      'Mina',
    jp:        'ミナ',
    color:     '#9abfd6',
    colorName: 'Sky Haze',

    gallery: {
      src: 'girls/mina_gallery.png',
      pos: 'center top',
    },

    motto_jp: '先に着いた方の勝ち。当然でしょ。',
    motto_en: '"First one there wins. Obviously." ✌️',

    tags: ['Genki', 'Beach energy', 'Always hungry', 'Blue skies', 'Loud laugh'],

    portraits: [
      { src: 'girls/mina_p1.png', pos: 'center top' },
      { src: 'girls/mina_p2.png', pos: 'center top' },
      { src: 'girls/mina_p3.png', pos: 'center top' },
      { src: 'girls/mina_p4.png', pos: 'center top' },
    ],

    stats: [
      { n: 'Warmth',  v: 90 },
      { n: 'Charm',   v: 92 },
      { n: 'Bold',    v: 70 },
      { n: 'Calm',    v: 45 },
      { n: 'Playful', v: 95 },
      { n: 'Style',   v: 68 },
    ],

    volumes: [
      { label: 'Vol.01 — Summer Memories', url: 'vol01/summer-memories.html' },
    ],
  },

  {
    key:       'ayame',
    name:      'Ayame',
    jp:        'アヤメ',
    color:     '#c4956a',
    colorName: 'Amber Glow',

    gallery: {
      src: 'girls/ayame_gallery.png',
      pos: 'center center',
    },

    motto_jp: 'わたしだけが起きている時間、街は静かだ。',
    motto_en: '"The city is quieter when I\'m the only one awake." ✦',

    tags: ['Cool type', 'City girl', 'Hard to read', 'Private', 'Winter'],

    portraits: [
      { src: 'girls/ayame_p1.png', pos: 'center top' },
      { src: 'girls/ayame_p2.png', pos: 'center top' },
      { src: 'girls/ayame_p3.png', pos: 'center top' },
      { src: 'girls/ayame_p4.png', pos: 'center top' },
    ],

    stats: [
      { n: 'Warmth',  v: 55 },
      { n: 'Charm',   v: 80 },
      { n: 'Bold',    v: 65 },
      { n: 'Calm',    v: 90 },
      { n: 'Playful', v: 38 },
      { n: 'Style',   v: 94 },
    ],

    volumes: [
      { label: 'Vol.02 — Quiet Mornings', url: 'vol02/quiet-mornings.html' },
    ],
  },

  {
    key:       'rina',
    name:      'Rina',
    jp:        'リナ',
    color:     '#c4956a',
    colorName: 'Honey Amber',

    gallery: {
      src: 'girls/rina_gallery.png',
      pos: 'center top',
    },

    motto_jp: 'ヌナ、キーボードから降りて。…あと五分だけね。',
    motto_en: '"Nuna, off the keyboard. Five more minutes." 🐾',

    tags: ['Cat mom', 'Cozy life', 'Slow morning', 'Honey light', 'Spring'],

    portraits: [
      { src: 'girls/rina_p1.png', pos: 'center top' },
      { src: 'girls/rina_p2.png', pos: 'center top' },
      { src: 'girls/rina_p3.png', pos: 'center top' },
      { src: 'girls/rina_p4.png', pos: 'center top' },
    ],

    stats: [
      { n: 'Warmth',  v: 95 },
      { n: 'Charm',   v: 78 },
      { n: 'Bold',    v: 48 },
      { n: 'Calm',    v: 85 },
      { n: 'Playful', v: 72 },
      { n: 'Style',   v: 80 },
    ],

    volumes: [
      { label: 'Vol.03 — Little Moment', url: 'vol03/little-moment.html' },
    ],
  },

  {
    key:       'suzune',
    name:      'Suzune',
    jp:        'スズネ',
    color:     '#dfa898',
    colorName: 'Peach Blush',

    gallery: {
      src: 'girls/suzune_gallery.png',
      pos: 'center top',
    },

    motto_jp: '湯上がりの静かな時間が、少しだけ特別に感じた。',
    motto_en: '"The warm air, the quiet lights — no need to rush anywhere." ✿',

    tags: ['Warm energy', 'Onsen nights', 'Flower pin', 'Loud laughter', 'Milk tea'],

    portraits: [
      { src: 'girls/suzune_p1.png', pos: 'center top' },
      { src: 'girls/suzune_p2.png', pos: 'center top' },
      { src: 'girls/suzune_p3.png', pos: 'center top' },
      { src: 'girls/suzune_p4.png', pos: 'center top' },
    ],

    stats: [
      { n: 'Warmth',  v: 93 },
      { n: 'Charm',   v: 88 },
      { n: 'Bold',    v: 74 },
      { n: 'Calm',    v: 52 },
      { n: 'Playful', v: 90 },
      { n: 'Style',   v: 76 },
    ],

    volumes: [
      { label: 'Vol.04 — Letters From A Quiet Friend', url: 'vol04/letters-from-a-quiet-friend.html' },
    ],
  },

  {
    key:       'shiori',
    name:      'Shiori',
    jp:        'シオリ',
    color:     '#8aaec6',
    colorName: 'Slate Blue',

    gallery: {
      src: 'girls/shiori_gallery.png',
      pos: 'center top',
    },

    motto_jp: 'あなたがいると、静けさが優しくなる気がする。',
    motto_en: '"When you\'re here, the quiet feels gentler somehow." ✦',

    tags: ['Soft-spoken', 'Glasses girl', 'Blue ribbon', 'Library scent', 'Rainy days'],

    portraits: [
      { src: 'girls/shiori_p1.png', pos: 'center top' },
      { src: 'girls/shiori_p2.png', pos: 'center top' },
      { src: 'girls/shiori_p3.png', pos: 'center top' },
      { src: 'girls/shiori_p4.png', pos: 'center top' },
    ],

    stats: [
      { n: 'Warmth',  v: 78 },
      { n: 'Charm',   v: 82 },
      { n: 'Bold',    v: 42 },
      { n: 'Calm',    v: 92 },
      { n: 'Playful', v: 55 },
      { n: 'Style',   v: 88 },
    ],

    volumes: [
      { label: 'Vol.04 — Letters From A Quiet Friend', url: 'vol04/letters-from-a-quiet-friend.html' },
    ],
  },

  // ── เพิ่มตัวละครใหม่ด้านล่างนี้ ──────────────────────────────
  // {
  //   key:      'xxx',
  //   name:     'Name',
  //   jp:       '...',
  //   color:    '#xxxxxx',
  //   gallery:  { src: 'girls/xxx_gallery.png', pos: 'center top' },
  //   motto_jp: '...',
  //   motto_en: '"..." ...',
  //   tags:     ['Tag1', 'Tag2', 'Tag3'],
  //   portraits: [
  //     { src: 'girls/xxx_p1.png', pos: 'center top' },
  //   ],
  //   stats: [
  //     { n: 'Warmth',  v: 0 },
  //     { n: 'Charm',   v: 0 },
  //     { n: 'Bold',    v: 0 },
  //     { n: 'Calm',    v: 0 },
  //     { n: 'Playful', v: 0 },
  //     { n: 'Style',   v: 0 },
  //   ],
  //   volumes: [
  //     { label: 'Vol.XX — Title', url: 'volXX/filename.html' },
  //   ],
  // },
];
