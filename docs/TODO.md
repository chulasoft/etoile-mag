# TODO — remaining work by priority

> Prereqs: [`../CONTEXT.md`](../CONTEXT.md) → [`SKILL.md`](SKILL.md).
> Cross-refs: [FEATURE.md](FEATURE.md) (status) · [ARCHITECTURE.md](ARCHITECTURE.md) (structure).
>
> **The site is feature-complete for the current pass — nothing below is
> blocking.** Real next work should come from Soft's on-device screenshots or a
> new content drop.

## P1 — content-blocked (do when the asset arrives)

- [ ] **Suzune Arcana artwork.** Drop `arcana/suzune_world.png` (The World, XXI),
      then confirm Suzune's identity color. Until then the draw/collection pages
      show a styled placeholder — no code change needed to unblock, just the file.
      → [FEATURE](FEATURE.md#arcana-cards--10-of-11-art-delivered) ·
      [DATABASE](DATABASE.md#2-arcana-card-data--inline-in-arcana-drawhtml)

## P2 — verify on device (screenshot-driven)

- [ ] **Vol.01 lightbox close-bar z-index.** `#lb-close-bar` (z 2100) sits above
      the lightbox (z 2000) — confirm on a short viewport that the close bar
      isn't blocking content or getting blocked. Needs a screenshot check.
- [ ] Re-walk the mobile fixes (our-girls detail panel, polaroid lightbox,
      arcana collection strip) on a real iOS device after any related edit.

## P3 — optional polish (deferred with rationale — not laziness)

- [ ] **DPR-aware atmosphere canvas.** Canvases render at CSS-pixel size
      (`innerWidth × innerHeight`), so points are slightly soft on retina.
      Scaling by `devicePixelRatio` would sharpen the starfields (index /
      our-girls / arcana). *Deferred:* doubles per-frame pixel work; the soft look
      suits the bokeh/snow/petal layers, and particle counts are already capped by
      width. Purely visual — do only if crisper stars are wanted.
- [ ] **Accent scroll-spy → IntersectionObserver.** Replace the per-frame
      `getBoundingClientRect` sweep with rootMargin-banded observers. *Deferred:*
      the handler is already rAF-throttled; the marginal win doesn't justify the
      regression risk in vol04's hidden-mode-wrapper skipping. Only do this if
      profiling shows a real problem. → [ARCHITECTURE](ARCHITECTURE.md#5-module-contracts-shared-function-names--keep-them-stable)
- [ ] **Curated reduced-motion experience** (fade-only reveals, static hero, no
      canvas) instead of the global kill-switch. *Deferred:* the current
      kill-switch is the safe, correct default; a hand-curated variant risks
      reintroducing motion for the exact users who opted out.
- [ ] **Lightbox blur-up placeholders.** *Deferred:* the lightbox opens the same
      `src` already rendered/cached on the page, so it appears instantly; the
      opacity fade already covers cold loads. Not worth generating thumbnails.

## P4 — future features (no demand yet)

- [ ] **Arcana daily-draw** gimmick — deck data already supports it; build only
      if Soft asks.
- [ ] **Vol.05** — concept space reserved (arcana narrative volume possible);
      nothing to build until content exists. → [FEATURE](FEATURE.md)

## Done (recent, for context)

- ✅ V2 promoted to canonical filenames; V1 archived under `legacy/` with a badge.
- ✅ `girls-data.js` `colorName` for all 6 characters.
- ✅ Accessibility pass (reduced-motion kill-switch, pointer-coarse cursor gating).
- ✅ Perf/UX: image lazy-load, rAF-throttled scroll, mute persistence, lightbox
      neighbor preload.
- ✅ Interaction polish: upgraded `goTo()` page transition, lightbox
      pinch-zoom/pan, magnetic buttons, volume-card tilt inertia, audio fade on nav.
- ✅ Mobile bug fixes from device screenshots (detail panel, polaroid lightbox,
      arcana strip — `svh` + safe-area).
- ✅ Arcana Collection gallery with persisted discovery.
- ✅ Repo hygiene: removed a broken orphaned `vol03/letters-…html` (a misplaced
      Vol.04 page with broken asset paths), added `.nojekyll` + `.gitignore`, and
      this docs set.
- ✅ Animation consistency: added the reduced-motion CSS block to
      `arcana-collection.html` (it was the only page missing it — entrance/hover
      animations now snap off under `prefers-reduced-motion` like its siblings).
- ✅ Debounced canvas `resize` on all 8 pages (150ms) — collapses the mobile
      URL-bar resize thrash so the atmosphere canvas no longer reshuffles/jumps
      repeatedly while scrolling; full resize still runs once after settle.

## Housekeeping conventions

- Add new tasks under the right priority; link back to the relevant doc.
- When you finish something, move it to **Done** with a one-line note.
- Update [FEATURE.md](FEATURE.md) status flags in the same change.

---
Back to the map: [`SKILL.md`](SKILL.md) · [`../CONTEXT.md`](../CONTEXT.md)
