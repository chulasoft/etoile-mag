# ARCHITECTURE — how ÉTOILE fits together

> Prereqs: [`../CONTEXT.md`](../CONTEXT.md) → [`SKILL.md`](SKILL.md).
> Related: [FEATURE.md](FEATURE.md) (per-page behavior) · [DATABASE.md](DATABASE.md)
> (data shapes) · [STYLE_GUIDE.md](STYLE_GUIDE.md) (conventions).

## 1. System shape

A **static multi-page site**. There is no server, no API, no build. Each page is
an independent HTML document that carries its own CSS and JS inline. The browser
loads one page, runs its script, and that's the entire runtime. Cross-page state
that must survive navigation lives in `localStorage`. The only shared code asset
is `girls/girls-data.js`.

```
Browser ──loads──▶ index.html (self-contained: <style> + <script> + <canvas>)
   │                     │ goTo(url) fade/blur transition
   ├──navigates──▶ vol0N/<slug>.html (self-contained)
   ├──navigates──▶ our-girls.html ──reads──▶ girls/girls-data.js (window.GIRLS)
   └──navigates──▶ arcana-draw.html ─writes─▶ localStorage['etoile_arcana_discovered']
                   arcana-collection.html ─reads─▶ same key
   (every vol page) ◀─read/write─▶ localStorage['etoile_muted']
```

## 2. Directory layout

```
etoile-mag/
├── CONTEXT.md                 mandatory entry point
├── README.md                  points to CONTEXT.md
├── .nojekyll                  GitHub Pages: serve as-is, no Jekyll
├── docs/                      coordination docs (this set)
│
├── index.html                 V2 landing — starfield + parallax, volume cards
├── our-girls.html             V2 character index — constellation, radar panel
├── arcana-draw.html           Arcana draw — shuffle/reveal spectacle, persists
├── arcana-collection.html     Arcana gallery — reads discovery, viewer, progress
│
├── vol01/  summer-memories.html            + Akane*/Mina*/Duo*.png, ElotileVol1.mp3
├── vol02/  quiet-mornings.html             + ayame_*.png, ElotileVol2.mp3
├── vol03/  little-moment.html              + rina_*.png, nuna_*.png, EtoileVol3.mp3 (†)
├── vol04/  letters-from-a-quiet-friend.html + suzu_*.png, shi_*.png, ElotileVol4.mp3
│
├── girls/  girls-data.js       shared GIRLS array (data layer)
│           <key>_gallery.png, <key>_p1..p4.png   character images
├── arcana/ <char>_<card>.png   10 tarot cards (2:3); suzune_world.png pending
│
└── legacy/ index.html, our-girls.html, arcana-draw.html, vol01..04/<slug>.html
            V1 archive — FROZEN. References root assets via ../.. paths.
```

† `EtoileVol3.mp3` is spelled differently from the other volumes' `Elotile…`
files on purpose — **do not rename it.**

### Root vs legacy
- **Root = V2 production** (canonical URLs). This is what everyone sees.
- **`legacy/` = V1 archive**, fully browsable at `…/legacy/…`. HTML-only; it
  reuses the root's images/audio via relative `../../volNN/…`, `../girls/…`,
  `../arcana/…` paths (our-girls uses a runtime path shim). Each legacy page
  shows a fixed "Legacy Archive · View Current ↗" badge linking to its V2 twin.
- **Rollback path:** if a V2 page misbehaves, copy its `legacy/` twin over the
  root file and revert the twin's `../../volNN/` asset prefixes to same-folder.

## 3. Page anatomy (the repeating template)

Every V2 page is built from the same skeleton, so once you know one you know all:

```
<head>
  Google Fonts (Bodoni Moda, Cormorant Garamond, Noto Serif JP, DM Sans)
  <style>  — :root design tokens (--acc, --acc-rgb, palette, fonts)
             page-specific atmosphere + component CSS
</head>
<body class="mode-…">           ← mode classes toggle .x-only wrappers
  #glow (ambient radial)         ← lerps to mouse, tinted by --acc-rgb
  #cDot / #cRing (custom cursor)
  <canvas> (atmosphere layer)
  #mh masthead (fixed) + #rp/#rp-fill scroll progress bar
  <main> (hidden until a mode is entered on vol pages)
    sections carrying data-acc="r,g,b"  ← accent scroll-spy targets
    .img-hover-wrap blocks              ← tilt + lightbox
    .rv reveal blocks                   ← IntersectionObserver
  <audio> (per-vol bgm)
  <script>  — atmosphere init, setAcc/scroll-spy, cursor, reveals, lightbox,
              modes, audio, goTo() navigation
</body>
```

## 4. Data flow

- **Characters:** `our-girls.html` reads the global `GIRLS` array from
  `girls/girls-data.js` and renders the gallery, detail panels, radar charts and
  the colored constellation entirely from data. Adding a character = push one
  object (template comment is in the file). See [DATABASE.md](DATABASE.md).
- **Arcana discovery:** `arcana-draw.html` writes discovered card numbers to
  `localStorage['etoile_arcana_discovered']` (JSON array of roman numerals) on
  reveal; `arcana-collection.html` reads the same key to unlock cards and drive
  its progress bar; the gallery's reset button clears it.
- **Audio preference:** every vol page reads/writes
  `localStorage['etoile_muted']` so mute survives navigation.
- **Volumes ↔ characters:** each `GIRLS[*].volumes[]` entry links to a
  `vol0N/<slug>.html`; the vol pages themselves are hand-authored (not generated
  from data).

## 5. Module contracts (shared function names — keep them stable)

| Function / hook | Contract |
|---|---|
| `GIRLS` (global) | array of character objects from `girls-data.js`; consumed by `our-girls.html`. |
| `setAcc(rgb)` | set page accent; retints cursor/glow/progress/borders/logo via `--acc`,`--acc-rgb`. |
| accent scroll-spy | reads `data-acc` on sections; rAF-throttled; picks element at ~45% viewport midline. |
| `goTo(url)` | the ONLY navigation; fades opacity + `blur` + slight scale (~420ms), ramps audio to 0, debounced, instant under reduced-motion. |
| `duckBgm(bool)` | lower/raise bgm volume (lightbox/overlay open). |
| mode toggles (`switchMode`/`backToIntro`) | set `body.mode-x`, reveal `.x-only`; vol03/04 return to the intro selector by design. |
| `DISCOVERY_KEY` | `'etoile_arcana_discovered'` — shared by both arcana pages. |

## 6. Deployment

- **GitHub Pages**, served from the repository root (default branch).
- `.nojekyll` disables Jekyll so files are served verbatim.
- **No build/deploy pipeline** — a push to the published branch *is* the deploy.
- All asset references are **relative**, so the site works from any base path
  (Pages project subpath, custom domain, or `file://` for local preview).
- Local preview: open a file directly, or `python3 -m http.server` at the root.

## 7. Cross-cutting concerns

- **Accessibility:** `prefers-reduced-motion` is a global kill-switch (canvas
  loops never start, cursor/glow/reveal-motion disabled); cursor also gated by
  `(pointer:coarse)` / `(hover:none)`. Mobile fixes use `svh` units + safe-area
  insets (see FEATURE "shipped").
- **Performance:** images are `loading="lazy" decoding="async"` (covers stay
  eager for LCP); scroll handlers are rAF-throttled; lightbox preloads
  neighbors.
- **No analytics, no cookies, no third-party runtime** beyond Google Fonts.

---
**Next:** [STYLE_GUIDE.md](STYLE_GUIDE.md) before writing code, or
[FEATURE.md](FEATURE.md) for per-page status.
