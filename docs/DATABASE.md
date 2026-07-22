# DATABASE — data shapes

> Prereqs: [`../CONTEXT.md`](../CONTEXT.md) → [`SKILL.md`](SKILL.md) →
> [ARCHITECTURE.md](ARCHITECTURE.md). Read this **before touching the data layer**.

There is **no database and no backend.** "Data" here means three things:
1. the shared **`GIRLS`** array (`girls/girls-data.js`),
2. the inline **Arcana card** array (in `arcana-draw.html`),
3. **`localStorage`** keys used for cross-page state.

All of it is client-side. Keep these shapes stable — pages read them by exact
property name.

---

## 1. `GIRLS` — `girls/girls-data.js`

Global `const GIRLS = [ … ]` (attached to `window`). Consumed by
`our-girls.html` to render the gallery, detail panels, radar charts and the
colored constellation. **6 objects today.** Layout direction (left/right)
auto-alternates by index; portraits can be any count.

### Character object

```js
{
  key:       'akane',              // string, unique slug (lowercase)
  name:      'Akane',              // display name (Latin)
  jp:        'アカネ',              // Japanese name
  color:     '#e2adc0',            // hex, character identity color
  colorName: 'Rose Dusk',          // human-readable color name

  gallery: {                       // index/gallery thumbnail
    src: 'girls/akane_gallery.png',
    pos: 'center top',             // CSS object-position
  },

  motto_jp: '朝は、わたしだけのもの。急かさないで。',   // JP quote
  motto_en: '"Mornings are mine. Don\'t rush me." ♡',  // EN quote (keeps emoji)

  tags: ['Tsundere', 'Quietly warm', 'Morning ritual', 'Poolside', 'Coffee first'],

  portraits: [                     // 1..n; { src, pos }
    { src: 'girls/akane_p1.png', pos: 'center top' },
    // … p2, p3, p4
  ],

  stats: [                         // radar chart; 6 axes, v = 0..100
    { n: 'Warmth',  v: 82 },
    { n: 'Charm',   v: 75 },
    { n: 'Bold',    v: 88 },
    { n: 'Calm',    v: 60 },
    { n: 'Playful', v: 55 },
    { n: 'Style',   v: 78 },
  ],

  volumes: [                       // links to the vol page(s) this char appears in
    { label: 'Vol.01 — Summer Memories', url: 'vol01/summer-memories.html' },
  ],
}
```

### Field reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `key` | string | ✅ | unique lowercase slug; also the image filename prefix (`<key>_gallery.png`, `<key>_p1..N.png`). |
| `name` | string | ✅ | Latin display name. |
| `jp` | string | ✅ | Japanese name (katakana). |
| `color` | hex string | ✅ | identity color; drives constellation + accent. |
| `colorName` | string | ✅ | e.g. "Rose Dusk"; shown in UI. |
| `gallery` | `{src,pos}` | ✅ | index thumbnail; `pos` is a CSS `object-position`. |
| `motto_jp` / `motto_en` | string | ✅ | paired quotes; `_en` keeps its trailing emoji (voice). |
| `tags` | string[] | ✅ | short descriptor chips. |
| `portraits` | `{src,pos}[]` | ✅ | 1..n; detail panel gallery. |
| `stats` | `{n,v}[]` | ✅ | **exactly 6** axes (Warmth, Charm, Bold, Calm, Playful, Style), `v` 0–100, for the radar chart. |
| `volumes` | `{label,url}[]` | ✅ | `label` uses the em-dash separator; `url` is relative. |

### Current roster

| key | name | jp | color | colorName | volume |
|---|---|---|---|---|---|
| `akane` | Akane | アカネ | `#e2adc0` | Rose Dusk | vol01 |
| `mina` | Mina | ミナ | `#9abfd6` | Sky Haze | vol01 |
| `ayame` | Ayame | アヤメ | `#c4956a` | Amber Glow | vol02 |
| `rina` | Rina | リナ | `#c4956a` | Honey Amber | vol03 |
| `suzune` | Suzune | スズネ | `#dfa898` | Peach Blush | vol04 |
| `shiori` | Shiori | シオリ | `#8aaec6` | Slate Blue | vol04 |

### Adding a character
Push one object onto `GIRLS` (a commented template is at the bottom of the
file). Provide the matching images in `girls/` named by `key`. Nothing else to
wire — `our-girls.html` renders from the array, and layout side alternates by
index automatically.

---

## 2. Arcana card data — inline in `arcana-draw.html`

An array of card objects (also mirrored by grouping in `arcana-collection.html`).
Two cards per character; 11 total (Suzune has one).

```js
{ num:'XVII', name:'The Star', char:'Mina', img:'arcana/mina_star.png' }
```

| Field | Type | Notes |
|---|---|---|
| `num` | string | Roman numeral; also the discovery identity written to localStorage. |
| `name` | string | Card name (e.g. "The Star"). |
| `char` | string | Owning character's display name. |
| `img` | string | relative path; art is 1024×1536 (2:3), frame+title baked in. |

Full card list in [FEATURE.md](FEATURE.md#arcana-cards--10-of-11-art-delivered).
`arcana/suzune_world.png` (The World, XXI) is **pending**; the page renders a
styled placeholder until the file exists.

---

## 3. `localStorage` keys (client-side persisted state)

| Key | Written by | Read by | Value shape | Purpose |
|---|---|---|---|---|
| `etoile_arcana_discovered` | `arcana-draw.html` (on reveal) | `arcana-collection.html` | JSON array of roman-numeral strings, e.g. `["XVII","VIII"]` | which Arcana cards the user has drawn; drives the collection unlock + progress bar. Cleared by the gallery's reset button. |
| `etoile_muted` | all four vol pages | all four vol pages | `"1"` / `"0"` (or truthy string) | audio mute preference, so mute survives navigation. |

Both are the sanctioned constant `DISCOVERY_KEY = 'etoile_arcana_discovered'`
(defined identically in both arcana pages) and the mute key. **All access is
wrapped in try/catch** (private mode / quota safe). If you add a new key,
document it here and namespace it `etoile_…`.

There are **no cookies, no sessionStorage, no IndexedDB, and no network/API
persistence.**

---
**Next:** [TODO.md](TODO.md) — remaining work by priority.
