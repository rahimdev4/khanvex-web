import Link from "next/link";
import type { Metadata } from "next";
import { ArrowIcon } from "@/components/arrow-icon";
import { BrandMark } from "@/components/brand-mark";
import { Cta } from "@/components/cta";
import { ProductShowcase } from "@/components/product-showcase";
import { ProductStage } from "@/components/product-stage";
import { featuredApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./home.module.css";

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

function PrincipleIcon({ number }: { number: (typeof principles)[number]["number"] }) {
  if (number === "01") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2v2.5M22 12h-2.5M12 22v-2.5M2 12h2.5" />
      </svg>
    );
  }

  if (number === "02") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m5 7 7-4 7 4-7 4-7-4Z" />
        <path d="m5 12 7 4 7-4M5 17l7 4 7-4" />
      </svg>
    );
  }

  if (number === "03") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2.5c.6 5.4 3.6 8.4 9 9-5.4.6-8.4 3.6-9 9-.6-5.4-3.6-8.4-9-9 5.4-.6 8.4-3.6 9-9Z" />
        <path d="M19 2v4M21 4h-4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s7-3.6 7-10V5.5L12 3 5 5.5V11c0 6.4 7 10 7 10Z" />
      <path d="m8.8 12 2.1 2.1 4.6-4.7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className="hero" aria-labelledby="home-heading">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Mobile application publisher</p>
            <h1 id="home-heading">Apps for better <span className={styles.heroAccent}>everyday experiences.</span></h1>
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
            <div className={styles.heroFootnote}>
              <span className={styles.heroFootnoteLabel}>Made for everyday life</span>
              <ul aria-label="Our app focus">
                <li>Fitness</li>
                <li>Productivity</li>
                <li>Everyday essentials</li>
              </ul>
            </div>
          </div>
          <ProductStage preload />
        </div>
      </section>

      <section className="section intro-section" aria-labelledby="about-heading">
        <div className="shell">
          <div className="about-feature">
            <div className="about-feature-mark" aria-hidden="true">
              <BrandMark className="about-feature-watermark" />
            </div>
            <div className="about-feature-copy">
              <p className="eyebrow">About Khanvex</p>
              <h2 id="about-heading">Practical digital products, thoughtfully made.</h2>
              <Link className="about-feature-link" href="/about">
                Discover our approach <ArrowIcon />
              </Link>
            </div>
            <div className="about-feature-aside">
              <p>
                Khanvex develops mobile apps for fitness, productivity, and everyday
                needs, with an emphasis on clear experiences and lasting usefulness.
              </p>
              <ul className="about-feature-points" aria-label="Our product approach">
                <li>Focused purpose</li>
                <li>Clear by default</li>
                <li>Built for real life</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-collection-section" aria-labelledby="products-heading">
        <div className="shell">
          <div className="section-heading collection-heading">
            <div>
              <p className="eyebrow">Featured application</p>
              <h2 id="products-heading">Meet GemFit<span className={styles.heroPeriod}>.</span></h2>
            </div>
            <p>
              Explore the real interface of Khanvex&apos;s first fitness application,
              currently being prepared for Android.
            </p>
          </div>

          {featuredApps.length > 0 ? (
            <div className="showcase-list">
              {featuredApps.map((app, index) => (
                <ProductShowcase app={app} key={app.slug} reverse={index % 2 === 1} theme="brand" />
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

      <section className="section home-principles-section" aria-labelledby="principles-heading">
        <div className="shell home-principles-shell">
          <div className="home-principles-heading">
            <div>
              <p className="eyebrow">Why Khanvex</p>
              <h2 id="principles-heading">Built for better everyday experiences.</h2>
            </div>
            <p>
              Every Khanvex product follows four simple promises—from the first idea
              to the support that comes after launch.
            </p>
          </div>
          <div className="home-principle-grid">
            {principles.map((principle) => (
              <article className="home-principle-card" key={principle.number}>
                <div className="home-principle-card-top">
                  <span className="home-principle-icon">
                    <PrincipleIcon number={principle.number} />
                  </span>
                  <span className="home-principle-number">{principle.number}</span>
                </div>
                <div className="home-principle-copy">
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta variant="home" />
    </div>
  );
}
