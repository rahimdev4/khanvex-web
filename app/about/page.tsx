import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { BrandMark } from "@/components/brand-mark";
import { CompanyHero, CompanyIcon, CompanyPage } from "@/components/company-page";
import { Cta } from "@/components/cta";
import { ProductShowcase } from "@/components/product-showcase";
import { publicApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./about.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "About Khanvex",
  description:
    "Learn how Khanvex develops and publishes useful mobile applications for fitness, productivity, and everyday life.",
  path: "/about",
});

const focusAreas = [
  ["01", "target", "Fitness", "Products that help people organize routines, follow guidance, and understand their activity."],
  ["02", "layers", "Productivity", "Focused tools designed to make planning and everyday work easier to manage."],
  ["03", "spark", "Everyday utilities", "Practical applications that reduce friction in common, repeatable tasks."],
] as const;

const approach = [
  ["01", "Clear interfaces", "Straightforward structure and familiar interactions keep each experience easy to follow."],
  ["02", "Useful functionality", "Features are shaped around genuine tasks instead of unnecessary complexity."],
  ["03", "Reliable experiences", "Products are presented honestly, supported clearly, and improved with care."],
] as const;

export default function AboutPage() {
  return (
    <CompanyPage>
      <CompanyHero
        eyebrow="About Khanvex"
        title="Creating apps for everyday life."
        actions={
          <>
            <Link className="button" href="/apps">Explore our apps <ArrowIcon /></Link>
            <a className="text-link" href="#our-approach">Our approach <ArrowIcon /></a>
          </>
        }
        aside={
          <div className={styles.brandPanel}>
            <div className={styles.brandIdentity}>
              <BrandMark className={styles.brandMark} />
              <span>Khanvex</span>
            </div>
            <div className={styles.brandWatermark} aria-hidden="true">
              <BrandMark className={styles.watermarkImage} />
            </div>
            <div className={styles.brandStatement}>
              <p>Our purpose</p>
              <h2>Software for a<br /><span>brighter tomorrow.</span></h2>
            </div>
            <p className={styles.brandSignature}>Thoughtfully made. Built around you.</p>
          </div>
        }
      >
        <p>
          Khanvex develops and publishes mobile applications designed to make
          everyday tasks simpler, more organized, and more enjoyable.
        </p>
      </CompanyHero>

      <section className={styles.section} aria-labelledby="who-heading">
        <div className={`shell ${styles.story}`}>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 id="who-heading">A focused home for useful mobile products.</h2>
          </div>
          <div className={styles.storyCopy}>
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

      <section className={`${styles.section} ${styles.focusSection}`} aria-labelledby="focus-heading">
        <div className="shell">
          <div className={styles.sectionHeading}>
            <div>
              <p className="eyebrow">What we build</p>
              <h2 id="focus-heading">Everyday goals.<br />Thoughtful possibilities.</h2>
            </div>
            <p>Our focus starts with the things people do every day—and how software can make them a little simpler.</p>
          </div>
          <div className={styles.focusGrid}>
            {focusAreas.map(([number, icon, title, copy]) => (
              <article className={styles.focusCard} key={number}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}><CompanyIcon name={icon} /></span>
                  <span className={styles.number}>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="our-approach" aria-labelledby="approach-heading">
        <div className="shell">
          <div className={styles.approachPanel}>
            <div className={styles.approachIntro}>
              <p className={styles.darkEyebrow}>Our approach</p>
              <h2 id="approach-heading">Simple choices.<br /><span>Lasting value.</span></h2>
              <p>Care goes into every part of the experience, from the first screen to the help you need along the way.</p>
              <Link className={styles.approachLink} href="/support">See how we support you <ArrowIcon /></Link>
            </div>
            <ol className={styles.approachList}>
              {approach.map(([number, title, copy]) => (
                <li key={number}>
                  <span className={styles.stepNumber}>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.collectionSection}`} aria-labelledby="about-apps-heading">
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
                <ProductShowcase app={app} key={app.slug} reverse={index % 2 === 1} theme="brand" />
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
      <Cta variant="home" />
    </CompanyPage>
  );
}
