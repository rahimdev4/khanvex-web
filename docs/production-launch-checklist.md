# Khanvex production launch checklist

## Completed locally

- Company positioning and copy are product-focused.
- About, Contact, Support, Apps, and homepage content are polished.
- GemFit is presented as an approved Android pre-release without a download claim.
- Production canonical origin is `https://khanvex.tech`.
- Metadata, Open Graph, Twitter/X, robots, sitemap, semantic headings, crawlable navigation, and image alt text are implemented.
- `support@khanvex.tech` is configured as the monitored support address.
- Company Privacy Policy and Terms drafts are complete and remain `noindex`.

## Owner verification required

- Test delivery to and replies from `hello@khanvex.tech`; then update `contactEmailVerified` only if successful.
- Complete the legal review checklist and approve the company Privacy Policy and Terms before changing their indexing state.
- Verify the final production hosting, security, email, logging, backup, and retention configuration.
- Confirm the release build and Play Data safety answers still match the GemFit policy.
- Verify the official Google Play listing before adding a store URL or changing GemFit to `published`.

## Deployment and domain

These actions are intentionally outside Step 5:

- merge the reviewed branch;
- deploy the approved commit to Vercel;
- connect `khanvex.tech` and any `www` redirect;
- change Cloudflare DNS;
- remove preview or deployment protection from the public production host;
- confirm HTTPS and canonical redirects; and
- verify every production route, sitemap, robots file, metadata record, and social preview.

## Search launch

After production is public and verified:

- add and verify the `khanvex.tech` Search Console Domain property using the exact Google TXT token;
- submit `https://khanvex.tech/sitemap.xml`;
- inspect the homepage and important app URLs;
- request indexing only for approved, indexable pages; and
- monitor coverage and Core Web Vitals.

Do not modify DNS, Search Console, production environment variables, or deployment settings without explicit authorization.
