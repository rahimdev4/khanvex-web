import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { URL } from "node:url";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("production domain is configured consistently", () => {
  const site = read("lib/site.ts");
  assert.match(site, /https:\/\/khanvex\.tech/);
  assert.doesNotMatch(site, /localhost|example\.com/);
});

test("unverified products are not presented as published apps", () => {
  const registry = read("data/apps.ts");
  assert.match(registry, /appRegistry:[^=]+\[\]/s);
  assert.match(registry, /status === "published"/);
  assert.match(registry, /publicContentApproved/);
  assert.match(registry, /screenshots\.length > 0/);
  assert.match(registry, /storeLinks\.length > 0/);
  assert.match(registry, /supportEmailVerified/);
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

test("product pages are generated only from the published registry", () => {
  const detailPage = read("app/apps/[slug]/page.tsx");
  assert.match(detailPage, /publishedApps\.map/);
  assert.match(detailPage, /getPublishedApp\(slug\)/);
  assert.match(detailPage, /if \(!app\) notFound\(\)/);
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
