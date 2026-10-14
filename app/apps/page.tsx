import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { publishedApps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "Explore mobile apps published by Khanvex.",
  alternates: { canonical: "/apps" },
  robots: { index: false, follow: true },
};

export default function AppsPage() {
  return (
    <>
      <PageHero eyebrow="Our products" title="Small, focused apps with a reason to exist.">
        <p>
          Every Khanvex product starts with a specific need and earns its place
          through clarity, care, and day-to-day usefulness.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell">
          {publishedApps.length > 0 ? (
            <div className="app-grid">
              {publishedApps.map((app) => (
                <article className="app-card" key={app.slug}>
                  <div className="app-card-icon">{app.name.slice(0, 1)}</div>
                  <div>
                    <p className="eyebrow">{app.platforms.join(" · ")}</p>
                    <h2>{app.name}</h2>
                    <p>{app.summary}</p>
                    <Link className="text-link" href={`/apps/${app.slug}`}>
                      Learn more <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-art" aria-hidden="true">
                <div className="empty-phone empty-phone-one" />
                <div className="empty-phone empty-phone-two" />
                <span>✦</span>
              </div>
              <div>
                <p className="eyebrow">In development</p>
                <h2>Our first releases are taking shape.</h2>
                <p>
                  We will publish products here only when their store listings,
                  support paths, screenshots, and privacy information are ready
                  to verify.
                </p>
                <Link className="button" href="/contact">
                  Get in touch <ArrowIcon />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <Cta />
    </>
  );
}
