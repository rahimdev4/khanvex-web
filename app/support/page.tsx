import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { publicApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Khanvex Support",
  description:
    "Find support, privacy information, account help, and product-specific resources for Khanvex mobile applications.",
  path: "/support",
});

const supportFaqs = [
  {
    question: "Where can I download a Khanvex app?",
    answer:
      "Each app page shows its current availability. An official store link appears only when that listing is available; GemFit is currently marked Coming Soon for Android.",
  },
  {
    question: "How do I ask for help with an app?",
    answer:
      `Email ${siteConfig.supportEmail} and include the app name, a concise description of the issue, and your device or app version when known. Do not send passwords or one-time codes.`,
  },
  {
    question: "Where can I find privacy and account information?",
    answer:
      "Use the privacy and account links on the relevant product page. Apps with accounts provide a specific deletion path when that feature applies.",
  },
] as const;

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Khanvex support" title="Help when you need it.">
        <p>
          Find product guidance, privacy information, account help, and a direct
          way to reach Khanvex support.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell support-grid">
          <article className="support-card support-card-primary">
            <div className="support-icon" aria-hidden="true">01</div>
            <p className="eyebrow">Application help</p>
            <h2>Start with the product.</h2>
            <p>
              Product pages bring together current availability, feature details,
              common questions, support, and privacy information.
            </p>
            <Link className="button" href="/apps">
              View apps <ArrowIcon />
            </Link>
          </article>
          <article className="support-card">
            <div className="support-icon" aria-hidden="true">02</div>
            <p className="eyebrow">Privacy and accounts</p>
            <h2>Use the app-specific path.</h2>
            <p>
              Privacy practices and account controls can differ by application,
              so each applicable product provides its own information.
            </p>
            <Link className="text-link" href="/privacy-policy">
              Company privacy policy <ArrowIcon />
            </Link>
          </article>
        </div>

        {publicApps.length > 0 ? (
          <div className="shell support-products" aria-labelledby="product-support-heading">
            <div className="section-heading compact-heading">
              <p className="eyebrow">Product-specific support</p>
              <h2 id="product-support-heading">Choose your application.</h2>
            </div>
            <div className="support-product-list">
              {publicApps.map((app) => (
                <article className="support-product-card" key={app.slug}>
                  <div>
                    <p className="app-category">{app.category}</p>
                    <h3>{app.name}</h3>
                    <p>{app.status === "published" ? "Available now" : "Coming soon for Android"}</p>
                  </div>
                  <nav aria-label={`${app.name} support links`}>
                    <Link href={`/apps/${app.slug}`}>Product page <ArrowIcon /></Link>
                    {app.privacyPolicy ? (
                      <Link href={`/apps/${app.slug}/privacy-policy`}>Privacy policy <ArrowIcon /></Link>
                    ) : null}
                    {app.accountDeletion ? (
                      <Link href={`/apps/${app.slug}/privacy-policy#account-deletion`}>Account deletion <ArrowIcon /></Link>
                    ) : null}
                  </nav>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        <div className="shell support-faq-panel">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2>Support essentials.</h2>
          </div>
          <div className="faq-list">
            {supportFaqs.map((faq, index) => (
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

        <div className="shell support-channel">
          <div>
            <p className="eyebrow">Contact support</p>
            <h2>{siteConfig.supportEmail}</h2>
          </div>
          <div className="support-channel-action">
            <p>Use this monitored address for product help, privacy questions, or account requests.</p>
            {siteConfig.supportEmailVerified ? (
              <a className="button" href={`mailto:${siteConfig.supportEmail}`}>
                Email support <ArrowIcon />
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
