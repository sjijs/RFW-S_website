# RFW-S Project Page

Static project page for **RFW-S: Everyday Deformable Objects with Independent Simulation Verification**
(RobotFlyWheel-Soft).

Published with GitHub Pages: <https://sjijs.github.io/RFW-S_website/>

## Contents

- `index.html`, `styles.css`, `app.js` — the page
- `config/site.js`, `config/media.js` — authors, links, BibTeX, and media manifest
- `assets/` — images, videos and the manuscript PDF (about 70 MB)
- `.nojekyll` — serve files as-is, without Jekyll processing

## Local preview

```bash
python serve.py          # built-in server, http://127.0.0.1:8765/
```

Or point any static server at this directory. Serving over HTTP is recommended so video
seeking/range requests behave consistently.

## Deployment

Everything in this repository root is served by GitHub Pages from the `main` branch.
Push to `main` and the site updates automatically. Media must keep `video/mp4` content
type and HTTP Range support for the video player.