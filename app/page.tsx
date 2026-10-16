import Link from "next/link";
import type { Metadata } from "next";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";
import { ProductShowcase } from "@/components/product-showcase";
import { ProductStage } from "@/components/product-stage";
import { featuredApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Khanvex — Apps for better everyday experiences",
  description:
    "Discover Khanvex, a mobile application publisher creating clear and useful apps for fitness, productivity, and everyday life.",
  path: "/",
});

const principles = [
  {
    number: "01",
    title: "Useful by design",
    copy: "Every product begins with a practical need and a focused reason to exist.",
  },
  {
    number: "02",
    title: "Easy to understand",
    copy: "Clear interfaces and familiar patterns help people move forward with confidence.",
  },
  {
    number: "03",
    title: "Thoughtfully presented",
    copy: "Product information is direct, useful, and grounded in what each app actually offers.",
  },
  {
    number: "04",
    title: "Supported with care",
    copy: "Straightforward support and privacy information stay easy to find as products grow.",
  },
] as const;

const productRequirements = [
  ["Identity", "Approved name, icon, category, and product message."],
  ["Product view", "Real screenshots with clear feature explanations."],
  ["Release details", "Official store links, support, and verified policies."],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Mobile application publisher</p>
            <h1>Apps for better everyday experiences.</h1>
            <p className="hero-lede">
              Khanvex publishes focused mobile applications with clear product
              information, thoughtful design, and dependable support.
            </p>
            <div className="button-row">
              <Link className="button" href="/apps">
                Explore our apps <ArrowIcon />
              </Link>
              <Link className="text-link" href="/about">
                About Khanvex <ArrowIcon />
              </Link>
            </div>
          </div>
          <ProductStage preload />
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell split-heading">
          <div>
            <p className="eyebrow">About Khanvex</p>
            <h2>Practical digital products, thoughtfully made.</h2>
          </div>
          <p className="section-lede">
            Khanvex develops mobile apps for fitness, productivity, and everyday
            needs, with an emphasis on clear experiences and lasting usefulness.
          </p>
        </div>
      </section>

      <section className="section product-collection-section" aria-labelledby="products-heading">
        <div className="shell">
          <div className="section-heading collection-heading">
            <div>
              <p className="eyebrow">Featured application</p>
              <h2 id="products-heading">Meet GemFit.</h2>
            </div>
            <p>
              Explore the real interface of Khanvex&apos;s first fitness application,
              currently being prepared for Android.
            </p>
          </div>

          {featuredApps.length > 0 ? (
            <div className="showcase-list">
              {featuredApps.map((app, index) => (
                <ProductShowcase app={app} key={app.slug} reverse={index % 2 === 1} />
              ))}
            </div>
          ) : (
            <div className="portfolio-readiness">
              {productRequirements.map(([title, copy], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          )}

          <div className="collection-action">
            <p>
              {featuredApps.length > 0
                ? "GemFit is coming soon to Google Play."
                : "The Khanvex app collection is taking shape."}
            </p>
            <Link className="text-link" href="/apps">
              View all apps <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft-section" aria-labelledby="principles-heading">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Why Khanvex</p>
            <h2 id="principles-heading">Built for better everyday experiences.</h2>
          </div>
          <div className="principle-grid principle-grid-four">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
