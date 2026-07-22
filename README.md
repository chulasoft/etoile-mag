# ÉTOILE — Interactive Anime Editorial Photobook

A dark-luxury digital magazine: six characters, four volumes, and a tarot-style
"Arcana" card game. **Pure static HTML/CSS/JS — no framework, no build step —**
deployed on GitHub Pages.

<br>

> ## 📖 Start here → **[`CONTEXT.md`](CONTEXT.md)**
>
> **Every agent and contributor reads [`CONTEXT.md`](CONTEXT.md) first**, before
> touching anything else — no matter how small the task. It gives you the
> project summary, the hard rules, how to verify your work, and the reading
> order into the rest of the docs.

<br>

## Documentation map

Read in order:

1. **[`CONTEXT.md`](CONTEXT.md)** — mandatory entry point.
2. **[`docs/SKILL.md`](docs/SKILL.md)** — full map + hard rules (portable skill format).
3. **[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)** — how the system fits together.
4. **[`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md)** — coding & house-style conventions.
5. **[`docs/FEATURE.md`](docs/FEATURE.md)** — what's shipped / pending, with code map.
6. **[`docs/DATABASE.md`](docs/DATABASE.md)** — data shapes (girls-data, arcana, localStorage).
7. **[`docs/TODO.md`](docs/TODO.md)** — remaining work by priority.

## Run it locally

No install. Open any page in a browser, or serve the root:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Structure at a glance

```
index.html · our-girls.html · arcana-draw.html · arcana-collection.html
vol01..vol04/   one page + its image/audio assets each
girls/          girls-data.js (shared data) + character images
arcana/         tarot card PNGs
legacy/         V1 archive — frozen
docs/           coordination docs (start at CONTEXT.md)
```

Owner: **Soft** — Apecoft Studio.
