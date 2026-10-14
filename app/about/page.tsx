import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "Khanvex is a publishing brand for focused mobile applications.",
  alternates: { canonical: "/about" },
};

const publishingStandards = [
  ["01", "Purpose", "A product should address a clear use case and explain it in plain language."],
  ["02", "Presentation", "Public pages should use real product screens, accurate descriptions, and official links."],
  ["03", "Accessibility", "Navigation, content, and controls should work across devices and input methods."],
  ["04", "Accountability", "Support and privacy information should be easy to find for every released app."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Khanvex" title="A publishing home for focused mobile apps.">
        <p>
          Khanvex brings mobile applications together under one clear company
          identity, with consistent product information and support.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell editorial-grid about-editorial">
          <div className="sticky-label">
            <p className="eyebrow">What we do</p>
          </div>
          <div className="editorial-copy">
            <h2>We publish and present mobile applications.</h2>
            <p>
              The Khanvex website is the central place to understand each app,
              view approved screenshots, find official download links, and reach support.
            </p>
            <p>
              The portfolio is intentionally selective. An application is listed
              only when its public content, store availability, and required disclosures are ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Publishing standard</p>
            <h2>Clear information at every stage.</h2>
          </div>
          <div className="value-grid">
            {publishingStandards.map(([number, title, copy]) => (
              <article className="value-card" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
