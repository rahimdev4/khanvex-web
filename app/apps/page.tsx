import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { CompanyHero, CompanyIcon, CompanyPage } from "@/components/company-page";
import { Cta } from "@/components/cta";
import { ProductShowcase } from "@/components/product-showcase";
import { indexableApps, publicApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./apps.module.css";

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
    <CompanyPage>
      <CompanyHero eyebrow="Khanvex apps" title="Apps for everyday goals.">
        <p>
          Discover useful mobile products for fitness, productivity, and
          everyday life, with availability shown clearly on every app page.
        </p>
      </CompanyHero>

      <section className={styles.collection} aria-labelledby="collection-heading">
        <div className="shell">
          <div className={styles.collectionHeading}>
            <div>
              <p className="eyebrow">The collection</p>
              <h2 id="collection-heading">Explore what we’re building.</h2>
            </div>
            <p className={styles.collectionCount}>
              <span>{String(publicApps.length).padStart(2, "0")}</span>
              {publicApps.length === 1 ? "application" : "applications"}
            </p>
          </div>
          {hasPublicApps ? (
            <div className={styles.products}>
              {publicApps.map((app, index) => (
                <ProductShowcase app={app} key={app.slug} reverse={index % 2 === 1} theme="brand" />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}><CompanyIcon name="layers" /></span>
              <div>
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
          <aside className={styles.availabilityNote}>
            <CompanyIcon name="shield" />
            <div>
              <h3>Know what’s available.</h3>
              <p>Every app page shows its current status. Official download links appear when a product is available in the store.</p>
            </div>
            <Link className="text-link" href="/support">App support <ArrowIcon /></Link>
          </aside>
        </div>
      </section>
      <Cta variant="home" />
    </CompanyPage>
  );
}
