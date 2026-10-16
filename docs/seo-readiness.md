# Khanvex SEO readiness

## Production identity

- Canonical origin: `https://khanvex.tech`
- Sitemap: `https://khanvex.tech/sitemap.xml`
- Robots file: `https://khanvex.tech/robots.txt`
- The root metadata base is always the production origin. Vercel preview URLs therefore emit production canonical URLs rather than declaring preview hosts canonical.
- Each public page has a unique title, description, canonical, Open Graph record, and Twitter/X record.

## Local indexing state

Indexable after deployment and launch approval:

- `/`
- `/about`
- `/apps`
- `/apps/gemfit`
- `/apps/gemfit/privacy-policy`
- `/contact`
- `/support`

Intentionally `noindex`:

- `/privacy-policy` — complete company draft; owner and legal approval required
- `/terms-of-service` — complete company draft; owner and legal approval required
- `/apps/gemfit/delete-account` — direct support utility; the final, indexable GemFit privacy policy contains the prominent account-deletion anchor

Unknown product slugs return the shared 404. The sitemap contains only canonical URLs that are eligible for indexing.

## Google Search Console owner handoff

Do these steps only after the production domain resolves to the reviewed deployment:

1. Open Google Search Console and add the Domain property `khanvex.tech` without a protocol or path.
2. Copy the exact Google-provided DNS TXT verification value. Do not create or guess a token.
3. Add that TXT record in Cloudflare DNS, wait for propagation, and complete ownership verification in Search Console.
4. Confirm that `https://khanvex.tech/robots.txt` references `https://khanvex.tech/sitemap.xml`.
5. Open the Sitemaps report and submit `https://khanvex.tech/sitemap.xml`.
6. Inspect `https://khanvex.tech/` with URL Inspection, test the live URL, and request indexing after the page is confirmed production-ready.
7. Inspect `/apps`, `/apps/gemfit`, and `/apps/gemfit/privacy-policy` after launch. Confirm their selected canonical is the production URL.
8. Monitor Page indexing, crawl issues, Core Web Vitals, and search performance. A sitemap and indexing request are discovery signals, not guarantees of inclusion.

Official references:

- [Add a Domain property and verify it with DNS](https://support.google.com/webmasters/answer/34592)
- [Verify site ownership](https://support.google.com/webmasters/answer/9008080)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Request recrawling with URL Inspection](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [SEO guidance for developers](https://developers.google.com/search/docs/fundamentals/get-started-developers)

## Verification before submission

- Confirm every indexable route returns `200` on the final production host.
- Confirm no production-wide `noindex` header or environment-level access protection remains.
- Confirm canonical, Open Graph, and sitemap URLs use `https://khanvex.tech`.
- Confirm the current deployment does not expose preview-only, demo, or placeholder content.
- Confirm images load, navigation is crawlable, headings are semantic, and meaningful images retain descriptive alt text.
- Do not submit Search Console verification or the sitemap until DNS and production deployment are explicitly authorized.
