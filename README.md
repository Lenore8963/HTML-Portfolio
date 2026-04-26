# Chen Zhou — Portfolio

A modern personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**.
Highlights computer-science work, hackathon wins, certifications, journalism (Canada & China),
and family. Migrated from a static Bootstrap site; the original HTML is preserved in `legacy/`.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first config via `@theme`)
- Framer Motion — scroll-triggered animations
- next-themes — system-aware dark mode
- lucide-react — icons
- ESLint + Prettier (with Tailwind class sorting)

## Features

- Per-page SEO metadata + Open Graph
- Auto-generated `sitemap.xml` and `robots.txt`
- next/image with remote-pattern allowlist for journalism sources
- Dark/light/system theme toggle
- Sticky animated navbar with mobile drawer
- Reading-progress bar on long-form pages
- Lightbox for certification & family galleries
- Type-safe data layer in `src/data/` — adding a project is one TS object

## Scripts

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run typecheck
npm run lint
```

## Project structure

```
src/
  app/             # routes (App Router)
  components/      # layout, sections, ui primitives
  data/            # typed content (projects, skills, journalism, …)
  lib/             # utilities
  types/           # shared TS types
public/images/     # static assets
legacy/            # original HTML site (reference)
```
