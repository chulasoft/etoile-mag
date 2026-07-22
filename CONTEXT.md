# CONTEXT — read me first, always

> **This file is the mandatory entry point.** Every agent or contributor reads
> `CONTEXT.md` **before touching anything else**, no matter how small the task.
> When you finish here, go to **[`docs/SKILL.md`](docs/SKILL.md)** next.

---

## What this project is

**ÉTOILE** is an interactive anime *editorial photobook* website — a dark-luxury
digital magazine. Six characters, four published volumes, plus a tarot-style
"Arcana" card mini-game. Owner: **Soft** (Apecoft Studio).

- **Pure static site.** HTML + CSS + JS, **one self-contained file per page**.
- **No framework, no build step, no bundler, no npm install.** What you edit is
  what ships. Open a file in a browser and it runs.
- **Deployed on GitHub Pages** from the repo root.
- Aesthetic: dark editorial, serif display type, per-character color identity,
  heavy tasteful animation (canvas atmospheres, custom cursor, reveals).

## Rough structure (see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for detail)

```
/                         ← V2 production pages (canonical)
  index.html              landing (starfield)
  our-girls.html          character index (constellation)
  arcana-draw.html        Arcana card draw + reveal spectacle
  arcana-collection.html  Arcana gallery (reads discovery)
  vol01..vol04/           each: one <slug>.html page + its .png/.mp3 assets
  girls/                  girls-data.js (shared data) + character images
  arcana/                 tarot card PNGs (1024×1536)
  legacy/                 V1 archive — FROZEN, do not modify
  docs/                   coordination docs (start at SKILL.md)
```

## Hard rules (do not break these — they are decisions, not accidents)

1. **No build tooling.** Never introduce a framework, bundler, package.json, or
   a step between "edit file" and "it works in the browser."
2. **Every page stays single-file and self-contained** (its own `<style>` +
   `<script>`). The only shared JS is `girls/girls-data.js`.
3. **`legacy/` is frozen.** Never edit it. Its asset paths point back to root
   assets; moving root assets breaks it.
4. **Never move or rename image/audio assets.** Pages reference them by relative
   path. Same for the `EtoileVol3.mp3` spelling anomaly (vol03 differs from the
   `Elotile…` spelling of the others) — **do not "fix" it.**
5. **Screenshot is ground truth.** Soft communicates in casual Thai and drives
   feedback with screenshots. When a visual bug is reported, trust the
   screenshot over your assumptions.
6. **House style is deliberate:** em-dash `—` is the brand separator in
   titles/labels; serif display (Bodoni/Cormorant) is an editorial choice; the
   language-flip (JP↔ENG) between modes carries meaning. Don't "normalize" them.
   Full list in [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md).

## How to verify your work (there is no test suite)

1. **JS syntax check every page you touched** — this catches brace/paren
   breakage without a browser:
   ```bash
   node -e "const fs=require('fs');const h=fs.readFileSync(process.argv[1],'utf8');
   const m=[...h.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]).join('\n;\n');
   new Function(m);console.log('OK');" path/to/page.html
   ```
2. **Open the page in a browser** and interact (modes, lightbox, audio, arcana
   draw). Check the console for errors.
3. **Check both light triggers of the accent system** and **`prefers-reduced-motion`**
   (animations must fully stop under it).
4. **Verify relative asset paths resolve** (no broken images/audio).

## Where to go next — reading order

```
CONTEXT.md (you are here)
   └─▶ docs/SKILL.md          full map + hard rules (start here next)
          ├─▶ docs/ARCHITECTURE.md   how the system fits together
          ├─▶ docs/STYLE_GUIDE.md    coding & house-style conventions
          ├─▶ docs/FEATURE.md        what's shipped / pending, with file map
          ├─▶ docs/DATABASE.md       data shapes (girls-data, arcana, localStorage)
          └─▶ docs/TODO.md           remaining work by priority
```

**Next file: [`docs/SKILL.md`](docs/SKILL.md).**
