import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { Cta } from "@/components/cta";
import { ProductShowcase } from "@/components/product-showcase";
import { ProductStage } from "@/components/product-stage";
import { featuredApps } from "@/data/apps";

const principles = [
  {
    number: "01",
    title: "A clear purpose",
    copy: "Each app should solve a specific problem and explain its value without exaggeration.",
  },
  {
    number: "02",
    title: "Straightforward to use",
    copy: "Familiar patterns, direct language, and accessible choices keep the experience easy to understand.",
  },
  {
    number: "03",
    title: "Honest presentation",
    copy: "Product pages use approved screenshots, official store links, and verified information.",
  },
  {
    number: "04",
    title: "Support after release",
    copy: "Every published app needs a clear support path and product-specific privacy information.",
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
          <ProductStage />
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell split-heading">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>A clear purpose for every app.</h2>
          </div>
          <p className="section-lede">
            Khanvex gives each product a focused publishing home. We present
            what an app does, where to get it, and how to find help—without inflated claims.
          </p>
        </div>
      </section>

      <section className="section product-collection-section" aria-labelledby="products-heading">
        <div className="shell">
          <div className="section-heading collection-heading">
            <div>
              <p className="eyebrow">Product collection</p>
              <h2 id="products-heading">Made ready for real applications.</h2>
            </div>
            <p>
              The showcase supports distinct app identities while keeping the
              Khanvex publishing experience consistent.
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
            <p>No applications are publicly listed yet.</p>
            <Link className="text-link" href="/apps">
              View portfolio status <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section soft-section" aria-labelledby="principles-heading">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Publishing standard</p>
            <h2 id="principles-heading">What every Khanvex product page should provide.</h2>
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
