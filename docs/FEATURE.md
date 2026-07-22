# FEATURE — status of everything, with code map

> Prereqs: [`../CONTEXT.md`](../CONTEXT.md) → [`SKILL.md`](SKILL.md).
> See also [ARCHITECTURE.md](ARCHITECTURE.md) (how) · [TODO.md](TODO.md) (what's next).
> Legend: ✅ shipped · 🟡 partial / pending asset · 🧊 frozen archive · ⏸️ reserved.

## Pages (production, root) — all ✅

| Page | File | Atmosphere | Signature systems |
|---|---|---|---|
| Landing | `index.html` | Starfield + mouse parallax | marquee ticker, volume cards with rAF spring 3D tilt, accent takeover on hover, arcana teaser |
| Character index | `our-girls.html` | Colored constellation (30% of stars in girls' colors, from `GIRLS`) | data-driven gallery, detail panel with radar chart + stat cards, polaroid flip lightbox + holographic foil, particle burst on open, names ticker |
| Arcana draw | `arcana-draw.html` | Starfield + nebula tint | shuffle (fan ±28° → pair-swap → stack), reveal spectacle (rays, flash, shockwave ring, aura pulse, burst, sparkles), foil+tilt, 11-slot collection strip, no-repeat deck, **persists discovery** |
| Arcana collection | `arcana-collection.html` | Starfield + glow | all 11 cards grouped by character, discovered = full art + foil/tilt + click viewer (prev/next/kbd/swipe), undiscovered = locked card-back w/ roman numeral, progress bar, reset button |
| Vol.01 | `vol01/summer-memories.html` | Summer bokeh motes (pink/blue/gold) | 2 modes: "Your Story" (blended) / "Her Story"; accent scroll-spy |
| Vol.02 | `vol02/quiet-mornings.html` | Falling snow (sine sway) | 2 modes: Before / After; private-reveal overlays; Post-12 memory slideshow (5 slides, quotes, dots, swipe, 5s auto) |
| Vol.03 | `vol03/little-moment.html` | Sakura petals (rotating, 2 hues) | 2 modes: Rina / Nuna; 🐾 paw cursor in Nuna mode; slideshows ss07/ss09 (Rina only); Nuna Exclusive reveals A1–A5 |
| Vol.04 | `vol04/letters-from-a-quiet-friend.html` | Fireflies (wandering, blinking) | 2 modes: Suzune / Shiori letters (dual timeline); shared-moment markers; solo badges |

## Shared V2 design system — ✅ (present on every page)

| Feature | Where | Notes |
|---|---|---|
| Accent engine `setAcc()` + `--acc`/`--acc-rgb` | all pages | retints cursor, glow, progress, borders, logo; ~1s transitions |
| Accent scroll-spy (`data-acc`) | all pages | rAF-throttled; ~45% viewport midline; vol04 skips hidden-mode wrappers |
| Canvas atmosphere layer | all pages | reduced-motion guarded (loop never starts) |
| Custom cursor `#cDot`/`#cRing` | all pages | gated off for coarse pointer / no-hover / reduced-motion |
| Ambient glow `#glow` | all pages | radial, lerps to mouse, `--acc-rgb` tinted |
| Intro letter-stagger (É-T-O-I-L-E) | all pages | É plain, rest italic gold |
| Reveals `.rv` + IntersectionObserver | all pages | `.d1/.d2/.d3` delay helpers |
| Masthead `#mh` + progress `#rp/#rp-fill` | all pages | fixed; blurs at `scrollY>60` |
| `.img-hover-wrap` tilt + lightbox | all pages w/ imagery | 3D tilt ±2.4° + shine; click opens lightbox |
| `goTo(url)` transition | all navigating pages | fade + blur + slight scale ~420ms; audio ramp; reduced-motion instant |

## Data layer — ✅

- `girls/girls-data.js` — global `GIRLS`, **6 characters** complete, each with
  `colorName`. Adding a character = push one object (template comment in file).
  Full shape in [DATABASE.md](DATABASE.md).

## Characters — ✅ (6)

| Character | color | colorName | Volume |
|---|---|---|---|
| Akane | `#e2adc0` | Rose Dusk | Vol.01 |
| Mina | `#9abfd6` | Sky Haze | Vol.01 |
| Ayame | `#c4956a` | Amber Glow | Vol.02 |
| Rina | `#c4956a` | Honey Amber | Vol.03 |
| Suzune | `#dfa898` | Peach Blush | Vol.04 |
| Shiori | `#8aaec6` | Slate Blue | Vol.04 |

## Arcana cards — 🟡 (10 of 11 art delivered)

Two cards per character; images are 1024×1536 (2:3), art includes frame+title,
rendered full-bleed 300×450 with no text overlay. Data lives in
`arcana-draw.html`; images in `arcana/`.

| Character | Cards | Art status |
|---|---|---|
| Mina | The Star (XVII), The Sun (XIX) | ✅ `mina_star.png`, `mina_sun.png` |
| Akane | Strength (VIII), The Chariot (VII) | ✅ `akane_strength.png`, `akane_the_chariot.png` |
| Ayame | Justice (XI), The High Priestess (II) | ✅ `ayame_justice.png`, `ayame_the_high_priestess.png` |
| Rina | The Lovers (VI), The Empress (III) | ✅ `rina_the_lovers.png`, `rina_the_empress.png` |
| Shiori | Temperance (XIV), The Hermit (IX) | ✅ `shiori_temperance.png`, `shiori_hermit.png` |
| Suzune | **The World (XXI)** | 🟡 `arcana/suzune_world.png` **pending** — styled placeholder shows until it lands |

## Accessibility & performance — ✅

- `prefers-reduced-motion` global kill-switch (animations, canvas, cursor, glow).
- Pointer-coarse / no-hover cursor gating.
- Lazy-load on non-cover images; covers eager for LCP.
- rAF-throttled scroll handlers; lightbox preloads neighbors.
- Mobile: `svh` units + safe-area insets on detail panels, polaroid lightbox,
  and the arcana collection strip (iOS URL-bar fixes).
- Mute persisted (`etoile_muted`); page-nav audio fade.
- Lightbox pinch-zoom/pan (1×–4×), double-tap toggle, swipe only at 1×.
- Magnetic buttons on desktop (disabled on touch + reduced-motion).

## Legacy V1 — 🧊 frozen

`legacy/index.html`, `legacy/our-girls.html`, `legacy/arcana-draw.html`,
`legacy/vol01..04/<slug>.html`. Browsable at `…/legacy/…`, reuse root assets,
carry a "Legacy Archive · View Current ↗" badge. **Do not modify.**

## Reserved / not built — ⏸️

- **Vol.05** — concept space reserved; nothing to build until content exists.
- **Arcana daily-draw** — optional gimmick; deferred until requested.
- **Curated reduced-motion experience** — deliberately deferred (current global
  kill-switch is the safe, correct choice). See [TODO.md](TODO.md) for rationale.

---
**Next:** [DATABASE.md](DATABASE.md) for exact data shapes, or [TODO.md](TODO.md)
for the prioritized backlog.
