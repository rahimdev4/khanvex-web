import type { MetadataRoute } from "next";
import { publishedApps } from "@/data/apps";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyRoutes = ["", "/about", "/support", "/contact"];
  const productRoutes = publishedApps.flatMap((app) => [
    `/apps/${app.slug}`,
    `/apps/${app.slug}/privacy-policy`,
  ]);
  const routes = publishedApps.length > 0
    ? [...companyRoutes, "/apps", ...productRoutes]
    : companyRoutes;

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-10-14"),
    changeFrequency: route === "" || route.startsWith("/apps") ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/apps/") ? 0.8 : 0.7,
  }));
}
