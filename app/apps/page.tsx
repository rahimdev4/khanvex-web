import type { Metadata } from "next";
import Link from "next/link";
import { AppGrid } from "@/components/app-grid";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { ProductStage } from "@/components/product-stage";
import { indexableApps, publicApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";

const hasPublicApps = publicApps.length > 0;
const hasIndexableApps = indexableApps.length > 0;

export const metadata: Metadata = createPageMetadata({
  title: "Khanvex Apps",
  description:
    "Explore Khanvex mobile applications, including current product previews, features, screenshots, availability, and support information.",
  path: "/apps",
  index: hasIndexableApps,
});

export default function AppsPage() {
  return (
    <>
      <PageHero eyebrow="Khanvex apps" title="Apps for everyday goals.">
        <p>
          Discover useful mobile products for fitness, productivity, and
          everyday life, with availability shown clearly on every app page.
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
                <p className="eyebrow">Collection in preparation</p>
                <h2>New applications are on the way.</h2>
                <p>
                  Khanvex is preparing its first products for release. Visit
                  again for official previews and availability information.
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
