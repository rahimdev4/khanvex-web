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

Products belong in `data/apps.ts`. The public helpers expose an entry only when it is marked `published`, its public content is approved, and it includes an icon, screenshots, features, benefits, FAQs, official store links, a verified support address, and a product privacy policy.

The registry is intentionally empty until real product material is supplied. While empty, `/apps` stays excluded from indexing and unknown product routes return the shared 404. A published entry automatically powers:

- its collection card and optional homepage showcase;
- `/apps/[slug]`;
- `/apps/[slug]/privacy-policy`;
- `/apps/[slug]/delete-account` when deletion instructions exist;
- product routes in the sitemap.

Company privacy and Terms pages are provisional and remain `noindex` until approved.

## Environment

The current static site requires no environment variables. If integrations are added, document variable names in `.env.example` and keep all `.env*` files except that example out of Git.

Contact and support email addresses are configured in `lib/site.ts`. Their verification flags remain `false`, so the UI does not expose unverified `mailto:` actions.

## Brand reference

The supplied design system is retained at `docs/Khanvex_Design_System.pdf`.
