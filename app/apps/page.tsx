import type { Metadata } from "next";
import Link from "next/link";
import { AppGrid } from "@/components/app-grid";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { ProductStage } from "@/components/product-stage";
import { publishedApps } from "@/data/apps";

const hasPublishedApps = publishedApps.length > 0;

export const metadata: Metadata = {
  title: "Apps",
  description: "Explore mobile apps published by Khanvex.",
  alternates: { canonical: "/apps" },
  robots: hasPublishedApps ? { index: true, follow: true } : { index: false, follow: true },
};

export default function AppsPage() {
  return (
    <>
      <PageHero eyebrow="Khanvex apps" title="Focused apps, presented clearly.">
        <p>
          This collection will include only released Khanvex products with
          approved screenshots, official store links, and complete support details.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell">
          {hasPublishedApps ? (
            <AppGrid apps={publishedApps} />
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
