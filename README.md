# Khanvex website

The official company website for [Khanvex](https://khanvex.tech), built with Next.js, TypeScript, and the App Router.

## Local development

Requirements: Node.js 20.19 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Content model

Published products belong in `data/apps.ts`. The registry is intentionally empty until Khanvex has verified app names, screenshots, store URLs, support details, and app-specific privacy disclosures. The apps route and provisional company privacy page remain excluded from indexing until that content is complete.

## Environment

The current static site requires no environment variables. If integrations are added, document variable names in `.env.example` and keep all `.env*` files except that example out of Git.

## Brand reference

The supplied design system is retained at `docs/Khanvex_Design_System.pdf`.
