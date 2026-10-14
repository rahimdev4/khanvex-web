import type { Metadata } from "next";
import Link from "next/link";
import { AppGrid } from "@/components/app-grid";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { ProductStage } from "@/components/product-stage";
import { publicApps, publishedApps } from "@/data/apps";

const hasPublicApps = publicApps.length > 0;
const hasReleasedApps = publishedApps.length > 0;

export const metadata: Metadata = {
  title: "Apps",
  description: "Explore mobile apps published by Khanvex.",
  alternates: { canonical: "/apps" },
  robots: hasReleasedApps ? { index: true, follow: true } : { index: false, follow: true },
};

export default function AppsPage() {
  return (
    <>
      <PageHero eyebrow="Khanvex apps" title="Focused apps, presented clearly.">
        <p>
          Explore approved Khanvex product previews and released applications.
          Availability is shown clearly on each product page.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell">
          {hasPublicApps ? (
            <AppGrid apps={publicApps} />
          ) : (
            <div className="empty-state refined-empty-state">
              <ProductStage />
              <div className="empty-state-copy">
                <p className="eyebrow">Portfolio in preparation</p>
                <h2>No public applications yet.</h2>
                <p>
                  Product pages will appear here after their names, screenshots,
                  store listings, support paths, and privacy information are approved.
                </p>
                <Link className="button" href="/about">
                  About Khanvex <ArrowIcon />
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
