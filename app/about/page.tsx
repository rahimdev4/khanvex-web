import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { ProductShowcase } from "@/components/product-showcase";
import { publicApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Khanvex",
  description:
    "Learn how Khanvex develops and publishes useful mobile applications for fitness, productivity, and everyday life.",
  path: "/about",
});

const focusAreas = [
  ["01", "Fitness", "Products that help people organize routines, follow guidance, and understand their activity."],
  ["02", "Productivity", "Focused tools designed to make planning and everyday work easier to manage."],
  ["03", "Everyday utilities", "Practical applications that reduce friction in common, repeatable tasks."],
] as const;

const approach = [
  ["01", "Clear interfaces", "Straightforward structure and familiar interactions keep each experience easy to follow."],
  ["02", "Useful functionality", "Features are shaped around genuine tasks instead of unnecessary complexity."],
  ["03", "Reliable experiences", "Products are presented honestly, supported clearly, and improved with care."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Khanvex" title="Creating apps for everyday life.">
        <p>
          Khanvex develops and publishes mobile applications designed to make
          everyday tasks simpler, more organized, and more enjoyable.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell editorial-grid about-editorial">
          <div className="sticky-label">
            <p className="eyebrow">Who we are</p>
          </div>
          <div className="editorial-copy">
            <h2>A focused home for useful mobile products.</h2>
            <p>
              Khanvex is a mobile application brand focused on developing and
              publishing digital products that support real everyday needs.
            </p>
            <p>
              Our work brings product design, practical functionality, clear
              information, and dependable support together under one consistent company identity.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">What we build</p>
            <h2>Applications shaped around practical goals.</h2>
          </div>
          <div className="company-focus-grid">
            {focusAreas.map(([number, title, copy]) => (
              <article className="value-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Our approach</p>
            <h2>Simple choices, useful features, lasting value.</h2>
          </div>
          <div className="principle-grid">
            {approach.map(([number, title, copy]) => (
              <article className="principle-card" key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section" aria-labelledby="about-apps-heading">
        <div className="shell">
          <div className="section-heading collection-heading">
            <div>
              <p className="eyebrow">Our applications</p>
              <h2 id="about-apps-heading">Meet the Khanvex collection.</h2>
            </div>
            <p>Explore current products, real interface previews, and clearly marked availability.</p>
          </div>
          {publicApps.length > 0 ? (
            <div className="showcase-list">
              {publicApps.map((app, index) => (
                <ProductShowcase app={app} key={app.slug} reverse={index % 2 === 1} />
              ))}
            </div>
          ) : (
            <div className="about-apps-empty">
              <p>The Khanvex application collection is in preparation.</p>
            </div>
          )}
          <div className="collection-action">
            <p>See product details, availability, support, and privacy information.</p>
            <Link className="text-link" href="/apps">
              Explore all apps <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
