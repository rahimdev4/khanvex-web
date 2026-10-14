import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { AppMedia } from "@/components/app-media";
import { ArrowIcon } from "@/components/arrow-icon";
import { CapabilityIcon } from "@/components/capability-icon";
import { ProductPhone, ProductPhonePair } from "@/components/product-phone";
import { StoreLinks } from "@/components/store-links";
import { getPublicApp, publicApps, publishedApps } from "@/data/apps";
import { siteConfig } from "@/lib/site";

type AppPageProps = {
  params: Promise<{ slug: string }>;
};

type AccentProperties = CSSProperties & {
  "--app-accent": string;
  "--app-accent-tint": string;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publicApps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getPublicApp(slug);

  if (!app) {
    return { title: "App not found", robots: { index: false, follow: false } };
  }

  const isReleased = publishedApps.some((publishedApp) => publishedApp.slug === app.slug);

  return {
    title: app.seoTitle,
    description: app.seoDescription,
    alternates: { canonical: `/apps/${app.slug}` },
    icons: {
      other: [{ url: app.icon.src, type: "image/webp" }],
    },
    robots: isReleased
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: `${app.seoTitle} | Khanvex`,
      description: app.seoDescription,
      url: `/apps/${app.slug}`,
      images: [
        {
          url: app.icon.src,
          width: app.icon.width,
          height: app.icon.height,
          alt: app.icon.alt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${app.seoTitle} | Khanvex`,
      description: app.seoDescription,
      images: [app.icon.src],
    },
  };
}

export default async function AppDetailPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getPublicApp(slug);

  if (!app) notFound();

  const style: AccentProperties = {
    "--app-accent": app.accentColor,
    "--app-accent-tint": app.accentTint,
  };
  const isReleased = publishedApps.some((publishedApp) => publishedApp.slug === app.slug);
  const productUrl = `${siteConfig.url}/apps/${app.slug}`;
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.seoDescription,
    applicationCategory: "HealthApplication",
    operatingSystem: app.platforms.join(", "),
    identifier: app.packageName,
    url: productUrl,
    image: `${siteConfig.url}${app.icon.src}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <div className="app-detail" style={style}>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />

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
            <p className="product-status product-status-large">
              <span aria-hidden="true" />
              {isReleased ? "Available on Google Play" : "Android · Pre-release"}
            </p>
            <h1>{app.headline}</h1>
            <p className="product-hero-lede">{app.description}</p>
            <div className="product-hero-actions">
              <a className="button" href="#features">
                Explore features <ArrowIcon />
              </a>
              {!isReleased ? (
                <p>GemFit is preparing for Google Play. No verified store link is available yet.</p>
              ) : null}
            </div>
            {app.storeLinks.length > 0 ? <StoreLinks links={app.storeLinks} /> : null}
          </div>
          <ProductPhonePair
            primary={app.screenshots[0]}
            priority
            secondary={app.screenshots[1] ?? app.screenshots[0]}
          />
        </div>
      </section>

      <section className="section product-overview" id="features" aria-labelledby="overview-heading">
        <div className="shell">
          <div className="product-overview-panel">
            <div className="product-overview-intro">
              <div className="section-heading compact-heading">
                <p className="eyebrow">The {app.name} experience</p>
                <h2 id="overview-heading">Your workout flow, kept in one place.</h2>
              </div>
              <p className="product-overview-note">
                From discovery to completed activity, each step stays connected and easy to follow.
              </p>
            </div>
            <div className="product-overview-body">
              <div className="overview-workout-visual">
                <div className="overview-visual-heading">
                  <span>Workout mode</span>
                  <strong>Guidance while you train</strong>
                </div>
                <ProductPhone
                  className="overview-workout-phone"
                  screenshot={app.screenshots[5] ?? app.screenshots[0]}
                  sizes="(max-width: 720px) 48vw, 230px"
                />
                <span className="overview-chip overview-chip-progress">Session progress</span>
                <span className="overview-chip overview-chip-rest">Rest timing</span>
              </div>
              <ol className="capability-grid">
                {app.benefits.map((benefit, index) => (
                  <li className="capability-card" key={benefit.title}>
                    <span className="capability-icon"><CapabilityIcon index={index} /></span>
                    <div className="capability-copy">
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                    <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section product-features" aria-labelledby="features-heading">
        <div className="shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Inside the app</p>
            <h2 id="features-heading">Explore {app.name} in detail.</h2>
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
                  <div className="feature-copy">
                    <div className="feature-label">
                      <span className="feature-number">{String(index + 1).padStart(2, "0")}</span>
                      <span>{app.name} capability</span>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section screenshot-section" aria-labelledby="screenshots-heading">
        <div className="shell">
          <div className="section-heading compact-heading screenshot-heading">
            <div>
              <p className="eyebrow">Product screens</p>
              <h2 id="screenshots-heading">A closer look at {app.name}.</h2>
            </div>
            <p>Eight approved interface screens, presented in their original artwork.</p>
          </div>
          <div className="screenshot-showcase">
            <div
              className="screenshot-gallery"
              aria-label={`${app.name} screenshots`}
              role="list"
              tabIndex={0}
            >
              {app.screenshots.map((screenshot, index) => (
                <figure className="gallery-item" key={screenshot.src} role="listitem">
                  <div className="gallery-frame">
                    <Image
                      alt={screenshot.alt}
                      height={screenshot.height}
                      sizes="(max-width: 720px) 76vw, (max-width: 980px) 300px, 280px"
                      src={screenshot.src}
                      width={screenshot.width}
                    />
                  </div>
                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {screenshot.label ?? `App screen ${index + 1}`}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section product-information-section">
        <div className="shell">
          <div className="product-faq-panel product-information-grid">
            <div className="product-faq-heading">
              <p className="eyebrow">Questions</p>
              <h2>{app.name} FAQs.</h2>
              <p>Clear answers based on GemFit’s current pre-release status and verified product details.</p>
            </div>
            <div className="faq-list">
              {app.faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span className="faq-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <div className="shell product-links-panel">
          <div className="product-links-copy">
            <p className="eyebrow">Support and policies</p>
            <h2>Clear paths as {app.name} prepares to launch.</h2>
            <p>Review the current support, privacy, and account-management status in one place.</p>
          </div>
          <nav aria-label={`${app.name} support and policy links`}>
            {app.supportEmailVerified ? (
              <a href={`mailto:${app.supportEmail}`}>
                <span><strong>Product support</strong><small>Email the GemFit team</small></span>
                <ArrowIcon />
              </a>
            ) : (
              <Link href="/support">
                <span><strong>Support status</strong><small>Current support availability</small></span>
                <ArrowIcon />
              </Link>
            )}
            <Link href={`/apps/${app.slug}/privacy-policy`}>
              <span>
                <strong>Privacy policy</strong>
                <small>{app.privacyPolicy?.status === "final" ? "Published product policy" : "Provisional product disclosure"}</small>
              </span>
              <ArrowIcon />
            </Link>
            {app.accountDeletion ? (
              <Link href={`/apps/${app.slug}/privacy-policy#account-deletion`}>
                <span>
                  <strong>Account deletion</strong>
                  <small>{app.accountDeletion.status === "operational" ? "In-app and support instructions" : "Current availability status"}</small>
                </span>
                <ArrowIcon />
              </Link>
            ) : null}
          </nav>
        </div>
      </section>

      <section className="section product-download-section">
        <div className="shell product-download-card">
          <div className="product-download-identity">
            <Image alt={app.icon.alt} height={72} src={app.icon.src} width={72} />
            <div>
              <p className="eyebrow">Android availability</p>
              <h2>
                {isReleased ? `Get ${app.name}.` : `${app.name} is preparing for Google Play.`}
              </h2>
              {!isReleased ? (
                <p>The official download link will appear here after the Play listing is verified.</p>
              ) : null}
            </div>
          </div>
          {app.storeLinks.length > 0 ? (
            <StoreLinks links={app.storeLinks} />
          ) : (
            <Link className="button button-light" href="/apps">
              View Khanvex apps <ArrowIcon />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
