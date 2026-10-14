import type { MetadataRoute } from "next";
import { publicApps, publishedApps } from "@/data/apps";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const companyRoutes = ["", "/about", "/support", "/contact"];
  const productRoutes = publishedApps.map((app) => `/apps/${app.slug}`);
  const policyRoutes = publicApps
    .filter((app) => app.privacyPolicy?.status === "final")
    .map((app) => `/apps/${app.slug}/privacy-policy`);
  const routes = [...companyRoutes, ...productRoutes, ...policyRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-10-14"),
    changeFrequency: route === "" || route.startsWith("/apps") ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/apps/") ? 0.8 : 0.7,
  }));
}
