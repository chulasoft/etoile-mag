---
name: etoile-photobook
description: >-
  Work on the ÉTOILE interactive anime editorial photobook website — a pure
  static HTML/CSS/JS site (no framework, no build step) deployed on GitHub
  Pages. Use when editing pages, animations, the shared girls-data.js, the
  Arcana card game, or the per-character accent/mode systems. Enforces the
  single-file-per-page rule, the frozen legacy/ archive, deliberate house style
  (em-dash separator, serif display, JP↔ENG mode language flip), and
  node --check JS validation before delivery.
---

# ÉTOILE Photobook — working skill

> Read **[`../CONTEXT.md`](../CONTEXT.md)** first. This file is the fuller map
> and repeats the hard rules with more detail. After this, branch to
> [ARCHITECTURE](ARCHITECTURE.md) · [STYLE_GUIDE](STYLE_GUIDE.md) ·
> [FEATURE](FEATURE.md) · [DATABASE](DATABASE.md) · [TODO](TODO.md).
>
> Portable: this file has skill frontmatter, so it can be copied into
> `.claude/skills/etoile-photobook/SKILL.md` to auto-load as a skill.

## When this applies

Any change to the ÉTOILE site: page content/layout, animation & interaction
polish, the shared data file, the Arcana mini-game, accessibility, or GitHub
Pages deployment. If you are editing an `.html` at the repo root or under
`vol0N/`, or `girls/girls-data.js`, this skill is in scope.

## The project in one paragraph

Interactive dark-luxury editorial photobook. Six anime characters, four
volumes, an Arcana (tarot) draw + collection game. **Pure HTML/CSS/JS, one
self-contained file per page, zero build tooling**, GitHub Pages. Owner **Soft**
(Apecoft Studio) works in casual Thai and validates via screenshots.

## Hard rules (repeat — these are decisions, not accidents)

1. **No build step, ever.** No framework, bundler, `package.json`, transpiler.
   Edit → refresh browser. That's the whole loop.
2. **One self-contained file per page.** Each page owns its `<style>` and
   `<script>`. Only shared JS is `girls/girls-data.js` (global `GIRLS`).
3. **`legacy/` is frozen.** V1 archive. Never edit. It references root assets via
   `../../volNN/…`, `../girls/…`, `../arcana/…`; moving root assets breaks it.
4. **Never move/rename assets.** Pages use relative paths. Keep the
   **`EtoileVol3.mp3`** spelling anomaly (all others are `ElotileVol…`).
5. **House style is intentional:** em-dash `—` brand separator in titles/labels;
   serif display (Bodoni Moda / Cormorant Garamond); JP↔ENG language flip
   between modes carries emotional meaning (see STYLE_GUIDE). Don't normalize.
6. **Accessibility is non-negotiable:** every animation, canvas loop, custom
   cursor and glow is gated by `prefers-reduced-motion` (global kill-switch) and
   pointer/hover capability. Keep new motion behind the same gates.
7. **Navigation always uses `goTo(url)`** (fade/blur transition + audio ramp),
   never bare `location.href`.

## The shared V2 design system (keep consistent across all pages)

- **Accent engine:** every page runs on `--acc` / `--acc-rgb` CSS vars.
  `setAcc(rgb)` retints cursor, ambient glow, progress bar, borders, logo — with
  ~1s transitions. Sections carry `data-acc="r,g,b"`; a rAF-throttled scroll
  spy transitions the accent to whatever covers the viewport ~45% midline.
- **Canvas atmosphere:** one `<canvas>` per page (starfield / motes / snow /
  sakura / fireflies), mouse-parallax, `requestAnimationFrame`, reduced-motion
  guarded (loop never starts).
- **Custom cursor:** `#cDot` + lerped `#cRing`; `cursor:none` on body, gated off
  for coarse pointer / no-hover / reduced-motion.
- **Modes:** `body.mode-x` classes toggle `.x-only` wrappers; `main` hidden until
  a mode is chosen. Each vol page has two modes (see FEATURE).
- **Reveals:** `.rv` + IntersectionObserver → `.on`; `.d1/.d2/.d3` delay helpers.
- **Lightbox:** click `.img-hover-wrap` → prev/next + counter + Esc/arrows +
  swipe + pinch-zoom/pan; ducks audio while open; builds list per active mode.
- **Audio:** per-vol `<audio>`, fade-in on mode enter, `duckBgm()` while
  lightbox/overlay open, mute persisted to `localStorage('etoile_muted')`.

Full behavioral contract per page: [FEATURE.md](FEATURE.md).
Full data shapes: [DATABASE.md](DATABASE.md).

## Standard workflow

1. **Read** `CONTEXT.md` → this file → the doc for your area.
2. **Locate** the page/system (ARCHITECTURE has the map). Most logic lives inline
   in the page's `<script>`.
3. **Edit in place.** Preserve the shared-system function names (`setAcc`,
   `goTo`, `duckBgm`, mode toggles) so cross-page consistency holds.
4. **Validate** — `node --check` on every page you touched (snippet in
   CONTEXT.md "How to verify"), then open in a browser, exercise modes/lightbox/
   audio, and confirm reduced-motion stops everything.
5. **Deliver whole files** ready to drop in, correct relative paths.

## Working agreements with Soft

- Reply in **casual Thai**; give concise per-file summaries of what changed.
- **Screenshots are ground truth** — trust them over assumptions; ask for one on
  a visual bug rather than guessing.
- **Never re-extract an old zip over newer fixes** (past regressions came from
  this) — always work from the latest files in the repo.
- Keep `legacy/` frozen.

## Do-not-touch checklist

- [ ] `legacy/**` — frozen archive
- [ ] Asset filenames / locations (incl. `EtoileVol3.mp3` spelling)
- [ ] Em-dash separators and serif display type
- [ ] `prefers-reduced-motion` gates
- [ ] The `etoile_arcana_discovered` / `etoile_muted` localStorage keys
- [ ] `goTo()` as the sole navigation path

---
**Next:** [ARCHITECTURE.md](ARCHITECTURE.md) to understand how it all connects.
