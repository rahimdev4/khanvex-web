import type { MetadataRoute } from "next";
import { indexableApps, publicApps } from "@/data/apps";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyRoutes = ["", "/about", "/apps", "/support", "/contact"];
  const productRoutes = indexableApps.map((app) => `/apps/${app.slug}`);
  const policyRoutes = publicApps
    .filter((app) => app.privacyPolicy?.status === "final")
    .map((app) => `/apps/${app.slug}/privacy-policy`);
  const routes = [...companyRoutes, ...productRoutes, ...policyRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-10-16"),
    changeFrequency: route === "" || route.startsWith("/apps") ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/apps/") ? 0.8 : 0.7,
  }));
}
