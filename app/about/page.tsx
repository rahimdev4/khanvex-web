import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Khanvex approaches useful, clear, and responsible app design.",
  alternates: { canonical: "/about" },
};

const values = [
  ["01", "Useful over noisy", "A product should solve its chosen problem without competing for more attention than it needs."],
  ["02", "Clarity over cleverness", "Good interfaces explain themselves. We use familiar patterns, direct language, and visible choices."],
  ["03", "Care over shortcuts", "Accessibility, privacy, reliability, and support belong in the product—not on a someday list."],
  ["04", "Progress over novelty", "We improve what matters through observation and iteration, not features added for their own sake."],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Khanvex" title="We make digital tools feel human-sized.">
        <p>
          Khanvex is an independent app studio focused on calm, capable mobile
          experiences for everyday life.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell editorial-grid">
          <div className="sticky-label">
            <p className="eyebrow">Our point of view</p>
          </div>
          <div className="editorial-copy">
            <h2>Useful software does not need to feel complicated.</h2>
            <p>
              We believe care is visible: in the label that removes doubt, the
              flow that takes one fewer step, and the setting that puts a person
              in control. Khanvex exists to build products with that standard
              from the beginning.
            </p>
            <p>
              Our portfolio is deliberately focused. Each app should have a
              clear purpose, an understandable business model, and a support
              path that remains available after download.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">What guides us</p>
            <h2>Four practical principles.</h2>
          </div>
          <div className="value-grid">
            {values.map(([number, title, copy]) => (
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
