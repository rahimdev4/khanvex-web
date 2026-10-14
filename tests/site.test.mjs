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
  assert.match(registry, /publishedApps:[^=]+\[\]/s);
});

test("provisional legal content and apps are excluded from indexing", () => {
  assert.match(read("app/apps/page.tsx"), /index: false/);
  assert.match(read("app/privacy-policy/page.tsx"), /index: false/);
});

test("all required top-level routes have pages", () => {
  for (const route of ["apps", "about", "support", "contact", "privacy-policy"]) {
    assert.doesNotThrow(() => read(`app/${route}/page.tsx`));
  }
});
