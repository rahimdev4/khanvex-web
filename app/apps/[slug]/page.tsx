import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { AppMedia } from "@/components/app-media";
import { ArrowIcon } from "@/components/arrow-icon";
import { StoreLinks } from "@/components/store-links";
import { getPublishedApp, publishedApps } from "@/data/apps";

type AppPageProps = {
  params: Promise<{ slug: string }>;
};

type AccentProperties = CSSProperties & {
  "--app-accent": string;
  "--app-accent-tint": string;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getPublishedApp(slug);

  if (!app) {
    return { title: "App not found", robots: { index: false, follow: false } };
  }

  return {
    title: app.name,
    description: app.summary,
    alternates: { canonical: `/apps/${app.slug}` },
    openGraph: {
      title: `${app.name} by Khanvex`,
      description: app.summary,
      images: [{ url: app.screenshots[0].src, alt: app.screenshots[0].alt }],
    },
  };
}

export default async function AppDetailPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getPublishedApp(slug);

  if (!app) notFound();

  const style: AccentProperties = {
    "--app-accent": app.accentColor,
    "--app-accent-tint": app.accentTint,
  };

  return (
    <div className="app-detail" style={style}>
      <section className="product-hero">
        <div className="shell product-hero-grid">
          <div className="product-hero-copy">
            <div className="product-identity product-identity-large">
              <Image alt={app.icon.alt} height={80} priority src={app.icon.src} width={80} />
              <div>
                <p className="app-category">{app.category}</p>
                <p className="product-name">{app.name}</p>
              </div>
            </div>
            <h1>{app.headline}</h1>
            <p className="product-hero-lede">{app.description}</p>
            <StoreLinks links={app.storeLinks} />
          </div>
          <AppMedia
            accentColor={app.accentColor}
            accentTint={app.accentTint}
            priority
            screenshot={app.screenshots[0]}
          />
        </div>
      </section>

      <section className="section product-features" aria-labelledby="features-heading">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Product features</p>
            <h2 id="features-heading">What {app.name} helps you do.</h2>
          </div>
          <div className="feature-list">
            {app.features.map((feature, index) => {
              const screenshot = app.screenshots[feature.screenshotIndex];
              return (
                <article className={`feature-row${index % 2 ? " feature-row-reverse" : ""}`} key={feature.title}>
                  <AppMedia
                    accentColor={app.accentColor}
                    accentTint={app.accentTint}
                    compact
                    screenshot={screenshot}
                  />
                  <div>
                    <span className="feature-number">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section soft-section" aria-labelledby="benefits-heading">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Built for everyday use</p>
            <h2 id="benefits-heading">Practical benefits, clearly explained.</h2>
          </div>
          <div className="benefit-grid">
            {app.benefits.map((benefit, index) => (
              <article className="benefit-card" key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section screenshot-section" aria-labelledby="screenshots-heading">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Product screens</p>
            <h2 id="screenshots-heading">See the app before you download it.</h2>
          </div>
          <div className="screenshot-gallery">
            {app.screenshots.map((screenshot) => (
              <div className="gallery-frame" key={screenshot.src}>
                <Image
                  alt={screenshot.alt}
                  height={screenshot.height}
                  sizes="(max-width: 720px) 82vw, 360px"
                  src={screenshot.src}
                  width={screenshot.width}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-information-section">
        <div className="shell product-information-grid">
          <div>
            <p className="eyebrow">Questions</p>
            <h2>Frequently asked questions.</h2>
          </div>
          <div className="faq-list">
            {app.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="shell product-links-panel">
          <div>
            <p className="eyebrow">Support and policies</p>
            <h2>Help when you need it.</h2>
          </div>
          <nav aria-label={`${app.name} support and policy links`}>
            <a href={`mailto:${app.supportEmail}`}>Product support <ArrowIcon /></a>
            <Link href={`/apps/${app.slug}/privacy-policy`}>Privacy policy <ArrowIcon /></Link>
            {app.accountDeletion ? (
              <Link href={`/apps/${app.slug}/delete-account`}>Delete your account <ArrowIcon /></Link>
            ) : null}
          </nav>
        </div>
      </section>

      <section className="section product-download-section">
        <div className="shell product-download-card">
          <div>
            <p className="eyebrow">Get {app.name}</p>
            <h2>{app.headline}</h2>
          </div>
          <StoreLinks links={app.storeLinks} />
        </div>
      </section>
    </div>
  );
}
