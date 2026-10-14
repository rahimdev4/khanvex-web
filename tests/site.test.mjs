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

test("provisional legal content and apps are excluded from indexing", () => {
  assert.match(read("app/apps/page.tsx"), /index: false/);
  assert.match(read("app/privacy-policy/page.tsx"), /index: false/);
  assert.match(read("app/terms-of-service/page.tsx"), /index: false/);
});

test("all required top-level routes have pages", () => {
  for (const route of ["apps", "about", "support", "contact", "privacy-policy", "terms-of-service"]) {
    assert.doesNotThrow(() => read(`app/${route}/page.tsx`));
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

test("GemFit metadata is canonical, pre-release safe, and structured", () => {
  const detailPage = read("app/apps/[slug]/page.tsx");
  assert.match(detailPage, /alternates: \{ canonical: `\/apps\/\$\{app\.slug\}` \}/);
  assert.match(detailPage, /index: false/);
  assert.match(detailPage, /SoftwareApplication/);
  assert.match(detailPage, /HealthApplication/);
  assert.match(detailPage, /replace\(\/<\/g, "\\\\u003c"\)/);
  assert.doesNotMatch(detailPage, /aggregateRating|ratingValue|offers:/);
});

test("GemFit legal routes remain explicit, provisional, and noindex", () => {
  const registry = read("data/apps.ts");
  const privacy = read("app/apps/[slug]/privacy-policy/page.tsx");
  const deletion = read("app/apps/[slug]/delete-account/page.tsx");
  assert.match(registry, /privacyPolicy: \{\s+status: "provisional"/s);
  assert.match(registry, /accountDeletion: \{\s+status: "provisional"/s);
  assert.match(privacy, /index: false/);
  assert.match(privacy, /Provisional notice/);
  assert.match(deletion, /index: false/);
  assert.match(deletion, /status === "operational"/);
});

test("sitemap derives product routes from approved published apps", () => {
  const sitemap = read("app/sitemap.ts");
  assert.match(sitemap, /publishedApps\.flatMap/);
  assert.match(sitemap, /publishedApps\.length > 0/);
});

test("unverified email channels are not exposed unconditionally", () => {
  const site = read("lib/site.ts");
  const contact = read("app/contact/page.tsx");
  assert.match(site, /contactEmailVerified: false/);
  assert.match(site, /supportEmailVerified: false/);
  assert.match(contact, /siteConfig\.contactEmailVerified \?/);
});

test("navigation exposes current-page state", () => {
  const navigation = read("components/navigation.tsx");
  assert.match(navigation, /usePathname/);
  assert.match(navigation, /aria-current/);
});
