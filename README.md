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

Products belong in `data/apps.ts`. Separate helpers control whether a product can be previewed publicly, indexed in search, or represented as released. This allows an approved pre-release product to be shown as “Coming Soon” without a store link or release claim.

GemFit is the current approved public preview. Its registry entry powers:

- its collection card and optional homepage showcase;
- `/apps/[slug]`;
- `/apps/[slug]/privacy-policy`;
- `/apps/[slug]/delete-account` when deletion instructions exist;
- product routes in the sitemap.

Company-wide legal publication state is centralized in `data/company-policies.ts`. The company Privacy Policy and Terms of Service are complete drafts but remain `noindex` until owner and legal approval changes their status to `approved`.

## Environment

The current static site requires no environment variables. If integrations are added, document variable names in `.env.example` and keep all `.env*` files except that example out of Git.

Contact and support email addresses are configured in `lib/site.ts`. `support@khanvex.tech` is confirmed as the monitored support channel. `hello@khanvex.tech` remains unverified and is not exposed as an active `mailto:` action.

## Project handoff

- SEO and Search Console preparation: `docs/seo-readiness.md`
- Product and company content workflow: `docs/content-management.md`
- Legal approval requirements: `docs/legal-review-checklist.md`
- Production readiness and launch blockers: `docs/production-launch-checklist.md`

## Brand reference

The supplied design system is retained at `docs/Khanvex_Design_System.pdf`.
