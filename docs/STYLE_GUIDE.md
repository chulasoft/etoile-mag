# STYLE_GUIDE — coding & house conventions

> Prereqs: [`../CONTEXT.md`](../CONTEXT.md) → [`SKILL.md`](SKILL.md) →
> [ARCHITECTURE.md](ARCHITECTURE.md). Read this **before writing code**.
> These are project-specific rules; several are brand decisions, not defaults.

## 1. Golden rules

- **No build tooling, no framework, no npm.** Plain HTML/CSS/JS only. Don't add
  a `package.json`, a bundler, TypeScript, JSX, or a CSS preprocessor.
- **One self-contained file per page.** Inline `<style>` and `<script>`. The only
  external code is `girls/girls-data.js`. Don't split a page into partials.
- **Relative asset paths only.** No leading `/`, no hard-coded domain. This keeps
  the site portable across Pages subpaths and `file://`.
- **Deliver whole files**, ready to drop in, with correct relative paths.

## 2. HTML

- `<!DOCTYPE html>`, `<html lang="ja">` (JP-forward editorial voice).
- Fonts loaded once in `<head>` via the shared Google Fonts URL (Bodoni Moda,
  Cormorant Garamond, Noto Serif JP, DM Sans).
- Images: non-cover `<img>` get `loading="lazy" decoding="async"`; **cover
  images stay eager** (`decoding="async"` only) for LCP.
- Interactive image blocks use the `.img-hover-wrap` pattern (enables tilt +
  lightbox). Reveal-on-scroll blocks use `.rv` (+ optional `.d1/.d2/.d3`).
- Sections that should drive the accent carry `data-acc="r,g,b"`.

## 3. CSS

- **Design tokens live in `:root`.** Accent is always `--acc` / `--acc-rgb`;
  never hard-code an accent color inside a component — read the var so `setAcc()`
  can retint it.
- Standard palette vars per page: `--pink/-rgb`, `--blue/-rgb`, `--gold`,
  `--cream/--cream2`, `--ink/--dark/--dark2`, `--muted/--muted2`, `--rule`.
  Keep these names when copying the skeleton to a new page.
- Font-family vars: `--display` (Bodoni Moda), `--serif` (Cormorant Garamond),
  `--jp` (Noto Serif JP). UI text uses DM Sans.
- **Serif display is intentional** — do not swap Bodoni/Cormorant for a sans
  "for readability." It's an editorial/publication choice.
- **Mobile:** use `svh`/`dvh` (not `vh`) for full-height sections and cap
  portrait media by viewport height; honor `safe-area-inset-*` for pinned close
  buttons and bottom strips (iOS URL-bar overlap has bitten this before).
- **Motion must be gated.** Wrap non-essential animation so it is disabled under
  `@media (prefers-reduced-motion: reduce)`; canvas loops must not start.
- Transitions on accent-driven properties run ~1s to match `setAcc()`.

## 4. JavaScript

- **Vanilla ES6+**, no libraries. Runs inline; wrap page logic so globals don't
  leak more than necessary (the deliberate shared globals are `GIRLS`,
  `setAcc`, `goTo`, `duckBgm`, mode toggles, `DISCOVERY_KEY`).
- **Keep the shared function names** (`setAcc`, `goTo`, `duckBgm`, mode toggles)
  identical across pages — cross-page consistency depends on them.
- **Navigate only via `goTo(url)`.** Never bare `location.href` (it skips the
  fade/blur transition and audio ramp).
- **Throttle scroll/rAF work.** Scroll handlers coalesce to one frame via
  `requestAnimationFrame`; don't add per-event layout reads.
- **Guard `localStorage`** in try/catch (private-mode / quota). Use only the two
  sanctioned keys — `etoile_muted`, `etoile_arcana_discovered` — unless adding a
  documented new one (then update [DATABASE.md](DATABASE.md)).
- **Validate with `node --check`** (concatenate `<script>` blocks; snippet in
  CONTEXT.md) before delivering. This is the project's only "test."

## 5. House style — brand decisions (respect, don't "fix")

1. **Em-dash `—` is the brand separator** in titles/labels
   (`ÉTOILE Vol.01 — Summer Memories`, `— Prologue`). Keep it. In body prose,
   prefer commas/ellipses — do **not** add new AI-style em-dash prose.
2. **Language-flip carries meaning.** Public / "before" / distance modes = JP
   pull-quotes + ENG subtitles; private / "after" / intimate modes = ENG quotes
   + JP subtitles. Preserve this pairing when adding content.
3. **Serif display stays** (see CSS above).
4. **The "Scroll" cue on covers stays** unless Soft says otherwise — it's
   functional on a photobook cover.
5. **Cute emoji** (☕ ♡ ✦ 🐾 ✿ ✌️) inside editorial panels are part of the
   voice — keep them where they already appear.
6. **`ÉTOILE`** is written with the accented É and the intro letter-stagger
   (É plain, remaining letters italic gold).
7. **Asset-name anomalies are load-bearing:** `EtoileVol3.mp3` (vs `Elotile…`
   elsewhere) — never normalize file names.

## 6. Communication & delivery (with Soft)

- Reply in **casual Thai**, concise per-file summaries of what changed.
- **Trust screenshots** over assumptions for visual bugs; ask for one if unsure.
- **Never re-extract an old zip over newer fixes.** Work from the current repo.
- Keep **`legacy/` frozen**.
- Commit messages: short, imperative, descriptive (e.g. `Fix vol04 lightbox
  close-bar z-index on short viewports`).

---
**Next:** [FEATURE.md](FEATURE.md) — what exists and where its code lives.
