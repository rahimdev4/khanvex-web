# Khanvex content management

## Company information

Edit company identity, canonical origin, and the support email in `lib/site.ts`.

- Khanvex uses `support@khanvex.tech` as its sole public contact and support channel.
- Set the email verification flag to `true` only after the owner confirms the mailbox is monitored and delivery has been tested.
- Public pages must not expose a disabled mailbox as an active `mailto:` link.
- Do not add personal biographies, freelance services, unverified company-registration claims, addresses, employee counts, awards, partnerships, ratings, reviews, or download totals.

## Company-page visual consistency

Use the shared cobalt blue, navy, pale blue, and white palette for homepage updates. The color tokens and dark panel background (`--brand-action`, `--blue-tint`, `--brand-navy`, and `--brand-panel`) live in `app/globals.css`; homepage layout and component overrides live in `app/home.module.css`. The homepage maps `--blue-hover` to the deeper `--brand-action` blue for readable small text and button labels.

- Keep new sections consistent with the existing typography, spacing, 32px desktop panels, and 14px action buttons.
- Use `ProductShowcase` with `theme="brand"` and `Cta` with `variant="home"` on the homepage.
- Company routes (`/about`, `/apps`, `/contact`, `/support`, `/privacy-policy`, and `/terms-of-service`) use `CompanyPage` and `CompanyHero` from `components/company-page.tsx`. This wrapper reuses the homepage theme, with consistent breadcrumbs, headings, buttons, and responsive spacing. Keep page-specific additions in CSS Modules.
- Use the same brand showcase and CTA variants on company routes. Never apply `CompanyPage`, the homepage theme wrapper, or company legal styles to `/apps/[slug]` and its privacy/deletion routes: those keep their independent product design and colors.
- Preserve original app icons and screenshots. App-specific colors belong within those assets and product pages; homepage labels, cards, and controls use Khanvex blue.
- Keep responsive layouts, visible keyboard focus, and reduced-motion behavior when changing presentation.

## Application registry

All product content belongs in `data/apps.ts`.

The registry separates three states:

1. `publicApps`: approved product previews with real assets and complete public content.
2. `indexableApps`: public previews with verified support, a final app privacy policy, and an operational deletion path when accounts apply.
3. `publishedApps`: released products with an official store listing, store link, verified support, and completed legal readiness.

Changing one state must not imply another. A pre-release product can be publicly indexed while remaining clearly labelled “Coming Soon,” but it must not show an availability date or store download action until verified.

For every product update:

- use the official name, icon, screenshots, category, and package identifier;
- keep screenshots unaltered unless the owner supplies replacements;
- use accurate alt text and dimensions;
- record only features visible in the verified app behavior;
- add official store links only after the live listing is checked;
- publish product-specific privacy and deletion details when accounts or data processing apply; and
- run all validation before changing release or indexing state.

## Company legal content

Publication state for the company Privacy Policy and Terms of Service is held in `data/company-policies.ts`.

- `draft`: complete enough for owner/legal review, but remains `noindex` and excluded from the sitemap.
- `approved`: may become indexable only after the checklist in `docs/legal-review-checklist.md` is completed and the owner explicitly approves the final copy.

App-specific policies remain independent. Do not claim the company policy describes an app unless its actual behavior and providers have been reconciled with that policy.

## Metadata and internal links

Use `createPageMetadata` from `lib/metadata.ts` for company routes so titles, descriptions, canonicals, Open Graph, Twitter/X, and robots rules remain consistent. Link products to their product-specific support, privacy, and account controls with ordinary crawlable links.
