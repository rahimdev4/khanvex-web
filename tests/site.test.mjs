import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { test } from "node:test";
import { URL } from "node:url";

const fileUrl = (path) => new URL(`../${path}`, import.meta.url);
const read = (path) => readFileSync(fileUrl(path), "utf8");

test("production domain is configured consistently", () => {
  const site = read("lib/site.ts");
  assert.match(site, /https:\/\/khanvex\.tech/);
  assert.doesNotMatch(site, /localhost|example\.com/);
});

test("GemFit is an approved public preview without being marked as released", () => {
  const registry = read("data/apps.ts");
  assert.match(registry, /slug: "gemfit"/);
  assert.match(registry, /status: "pre-release"/);
  assert.match(registry, /publicContentApproved: true/);
  assert.match(registry, /storeListingStatus: "unavailable"/);
  assert.match(registry, /legalStatus: "provisional"/);
  assert.match(registry, /storeLinks: \[\]/);
  assert.match(registry, /publicApps = appRegistry\.filter/);
  assert.match(registry, /status === "published"/);
  assert.match(registry, /publishedApps = publicApps\.filter/);
  assert.doesNotMatch(registry, /play\.google\.com/);
});

test("company legal drafts remain noindex while approved previews use a separate search gate", () => {
  const policyConfig = read("data/company-policies.ts");
  assert.match(policyConfig, /privacy: \{\s+status: "draft"/s);
  assert.match(policyConfig, /terms: \{\s+status: "draft"/s);
  assert.match(read("app/privacy-policy/page.tsx"), /index: isApproved/);
  assert.match(read("app/terms-of-service/page.tsx"), /index: isApproved/);
  assert.match(read("app/apps/page.tsx"), /index: hasIndexableApps/);
  assert.match(read("data/apps.ts"), /indexableApps = publicApps\.filter/);
});

test("all required top-level routes have pages", () => {
  for (const route of ["apps", "about", "support", "contact", "privacy-policy", "terms-of-service"]) {
    assert.doesNotThrow(() => read(`app/${route}/page.tsx`));
  }
});

test("company routes opt into the shared homepage design", () => {
  for (const route of ["apps", "about", "support", "contact", "privacy-policy", "terms-of-service"]) {
    const page = read(`app/${route}/page.tsx`);
    assert.match(page, /<CompanyPage>/, `${route} should use the shared company theme`);
    assert.match(page, /<CompanyHero\b/, `${route} should use the shared page heading`);
  }
  const companyPage = read("components/company-page.tsx");
  assert.match(companyPage, /homeStyles\.home/);
  assert.match(companyPage, /aria-label="Breadcrumb"/);
  assert.match(companyPage, /aria-labelledby="company-page-heading"/);
});

test("product routes retain independent styling from company routes", () => {
  for (const path of [
    "app/apps/[slug]/page.tsx",
    "app/apps/[slug]/privacy-policy/page.tsx",
    "app/apps/[slug]/delete-account/page.tsx",
    "app/layout.tsx",
  ]) {
    assert.doesNotMatch(read(path), /CompanyPage|CompanyHero|company-legal\.module|homeStyles\.home/, path);
  }
  for (const route of ["about", "apps"]) {
    assert.match(read(`app/${route}/page.tsx`), /theme="brand"/);
  }
});

test("the reusable application route family is present", () => {
  for (const route of [
    "app/apps/[slug]/page.tsx",
    "app/apps/[slug]/privacy-policy/page.tsx",
    "app/apps/[slug]/delete-account/page.tsx",
  ]) {
    assert.doesNotThrow(() => read(route));
  }
});

test("approved pre-release products receive public routes while unknown apps remain excluded", () => {
  const detailPage = read("app/apps/[slug]/page.tsx");
  assert.match(detailPage, /publicApps\.map/);
  assert.match(detailPage, /getPublicApp\(slug\)/);
  assert.match(detailPage, /if \(!app\) notFound\(\)/);
  assert.match(detailPage, /dynamicParams = false/);
});

test("all approved GemFit WebP assets are present", () => {
  const assets = [
    "gemfit-icon.webp",
    "gemfit-home.webp",
    "gemfit-workouts.webp",
    "gemfit-workout-details.webp",
    "gemfit-exercise-video.webp",
    "gemfit-plan.webp",
    "gemfit-active-workout.webp",
    "gemfit-progress.webp",
    "gemfit-profile.webp",
  ];

  for (const asset of assets) {
    assert.ok(statSync(fileUrl(`public/apps/gemfit/${asset}`)).size > 0, `${asset} should not be empty`);
  }
});

test("GemFit homepage, listing, and landing page use approved product content", () => {
  assert.match(read("app/page.tsx"), /Meet GemFit/);
  assert.match(read("app/apps/page.tsx"), /publicApps/);
  const detailPage = read("app/apps/[slug]/page.tsx");
  assert.match(detailPage, /ProductPhonePair/);
  assert.match(detailPage, /app\.screenshots\.map/);
  assert.match(detailPage, /GemFit is preparing for Google Play/);
});

test("GemFit metadata is canonical, preview-safe, index-ready, and structured", () => {
  const detailPage = read("app/apps/[slug]/page.tsx");
  assert.match(detailPage, /alternates: \{ canonical: `\/apps\/\$\{app\.slug\}` \}/);
  assert.match(detailPage, /indexableApps\.some/);
  assert.match(detailPage, /index: true/);
  assert.match(detailPage, /SoftwareApplication/);
  assert.match(detailPage, /HealthApplication/);
  assert.match(detailPage, /replace\(\/<\/g, "\\\\u003c"\)/);
  assert.doesNotMatch(detailPage, /aggregateRating|ratingValue|offers:/);
});

test("GemFit privacy and deletion disclosures are final, public, and anchored", () => {
  const registry = read("data/apps.ts");
  const privacy = read("app/apps/[slug]/privacy-policy/page.tsx");
  const deletion = read("app/apps/[slug]/delete-account/page.tsx");
  assert.match(registry, /privacyPolicy: \{\s+status: "final"/s);
  assert.match(registry, /effectiveDate: "15 October 2026"/);
  assert.match(registry, /publisherName: "khanvex"/);
  assert.match(registry, /jurisdiction: "Pakistan"/);
  assert.match(registry, /minimumUserAge: 15/);
  assert.match(registry, /supportEmailVerified: true/);
  assert.match(registry, /accountDeletion: \{\s+status: "operational"/s);
  assert.match(privacy, /index: app\.privacyPolicy\.status === "final"/);
  assert.match(privacy, /id="account-deletion"/);
  assert.match(privacy, /Delete your GemFit account/);
  assert.match(privacy, /mailto:support@khanvex\.tech\?subject=GemFit%20account%20deletion%20request/);
  assert.doesNotMatch(privacy, /<EFFECTIVE DATE>|<PLAY DEVELOPER|<COUNTRY OR JURISDICTION>|<MINIMUM USER AGE>|<PROVIDER LOG/);
  assert.match(deletion, /index: false/);
  assert.match(deletion, /status === "operational"/);
});

test("sitemap includes indexable previews and final public policies", () => {
  const sitemap = read("app/sitemap.ts");
  assert.match(sitemap, /indexableApps\.map/);
  assert.match(sitemap, /"\/apps"/);
  assert.match(sitemap, /privacyPolicy\?\.status === "final"/);
});

test("the confirmed support mailbox is the only public contact address", () => {
  const site = read("lib/site.ts");
  const contact = read("app/contact/page.tsx");
  assert.match(site, /supportEmailVerified: true/);
  assert.doesNotMatch(site, /contactEmail|hello@/);
  assert.doesNotMatch(contact, /contactEmail|hello@/);
  assert.match(contact, /siteConfig\.supportEmailVerified \?/);
  assert.match(contact, /mailto:\$\{siteConfig\.supportEmail\}/);
});

test("homepage uses the approved mobile product showcase image", () => {
  const stage = read("components/product-stage.tsx");
  assert.ok(statSync(fileUrl("public/images/app-ss.webp")).size > 0);
  assert.match(stage, /src="\/images\/app-ss\.webp"/);
  assert.match(stage, /width=\{1448\}/);
  assert.match(stage, /height=\{1086\}/);
  assert.match(read("app/page.tsx"), /<ProductStage preload \/>/);
});

test("company pages use product-focused public copy", () => {
  const companyPages = [
    read("app/page.tsx"),
    read("app/about/page.tsx"),
    read("app/apps/page.tsx"),
    read("app/contact/page.tsx"),
    read("app/support/page.tsx"),
    read("components/footer.tsx"),
  ].join("\n");
  assert.match(companyPages, /Apps for better everyday experiences/i);
  assert.match(companyPages, /Creating apps for everyday life/i);
  assert.doesNotMatch(companyPages, /Fiverr|Upwork|SparkDevX|freelanc|registered office|employee count/i);
});

test("company legal drafts contain the required structure without invented governing law", () => {
  const privacy = read("app/privacy-policy/page.tsx");
  const terms = read("app/terms-of-service/page.tsx");
  for (const phrase of [
    "Information collected",
    "Service providers",
    "Data retention",
    "Account and data deletion",
    "Children",
    "International data handling",
  ]) {
    assert.match(privacy, new RegExp(phrase, "i"));
  }
  for (const phrase of [
    "Eligibility and user responsibilities",
    "Acceptable use",
    "Intellectual property",
    "Payments and subscriptions",
    "General wellness and fitness information",
    "Limitation of liability",
  ]) {
    assert.match(terms, new RegExp(phrase, "i"));
  }
  assert.doesNotMatch(terms, /governed by the laws of|exclusive jurisdiction|registered office/i);
});

test("SEO and launch handoff documentation is present", () => {
  for (const document of [
    "docs/seo-readiness.md",
    "docs/content-management.md",
    "docs/legal-review-checklist.md",
    "docs/production-launch-checklist.md",
  ]) {
    assert.doesNotThrow(() => read(document));
  }
  const seo = read("docs/seo-readiness.md");
  assert.match(seo, /Domain property `khanvex\.tech`/);
  assert.match(seo, /Do not create or guess a token/);
  assert.match(seo, /https:\/\/khanvex\.tech\/sitemap\.xml/);
});

test("navigation exposes current-page state", () => {
  const navigation = read("components/navigation.tsx");
  assert.match(navigation, /usePathname/);
  assert.match(navigation, /aria-current/);
});
