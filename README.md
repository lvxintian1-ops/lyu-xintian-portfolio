# Lyu Xintian — Interactive Portfolio

An interactive portfolio website built from the PDF portfolio, featuring:

- **Preloader** with progress counter and curtain reveal
- **Custom cursor** (dot + trailing ring, "VIEW" state on gallery items)
- **Smooth scrolling** (Lenis) synced with GSAP ScrollTrigger
- **Hero** with parallax cover image and marquee ticker
- **Scroll-driven word-by-word manifesto reveal**
- **Pinned horizontal gallery** of the *Dimensions of Energy* exhibition proposal (desktop) / native swipe carousel (mobile) — click any spread to open the **lightbox** (arrow keys, swipe, dots)
- **Interactive worklist** — 17 artworks with chapter filters
- **Chapter accordion** with curatorial logic and public programs
- **Parallax quote panels** (Eliasson's yellow room, Yuan Long's kinetic installation)
- **Research section** with animated stat counter and expandable key passages
- **Essay section** with page viewer lightbox

## Stack

React 19 · TypeScript · Vite 7 · Tailwind CSS 3 · GSAP + ScrollTrigger · Lenis · shadcn/ui base

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # output in dist/
npm run preview    # serve the production build
```

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended)

1. Create a repository on GitHub named e.g. `lyu-xintian-portfolio` (public).
2. Push this project to the `main` branch:

   ```bash
   git remote add origin git@github.com:<your-username>/lyu-xintian-portfolio.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Source → GitHub Actions**. The included
   workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.
4. The site goes live at `https://<your-username>.github.io/lyu-xintian-portfolio/`
   (the Vite `base` is set to `./`, so any project path works).

### Option B — Manual `gh-pages` branch

```bash
./deploy.sh <your-username> <repo-name>
```

This builds the site and force-pushes `dist/` to the `gh-pages` branch.
Then enable **Settings → Pages → Source → Deploy from a branch → gh-pages / (root)**.
