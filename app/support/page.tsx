import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { CompanyHero, CompanyIcon, CompanyPage } from "@/components/company-page";
import { publicApps } from "@/data/apps";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import styles from "./support.module.css";

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
    <CompanyPage>
      <CompanyHero
        eyebrow="Khanvex support"
        title={<>Help when <span className={styles.accent}>you need it.</span></>}
        actions={
          <>
            <a className="button" href="#product-support">Find your app <ArrowIcon /></a>
            <a className="text-link" href="#common-questions">Common questions <ArrowIcon /></a>
          </>
        }
      >
        <p>
          Find product guidance, privacy information, account help, and a direct
          way to reach Khanvex support.
        </p>
      </CompanyHero>

      <section className={styles.supportSection} aria-label="Support resources">
        <div className="shell">
          <div className={styles.resourceGrid}>
            <Link className={styles.resourceCard} href="/apps">
              <div className={styles.cardTop}>
                <span className={styles.icon}><CompanyIcon name="layers" /></span>
                <span className={styles.cardNumber} aria-hidden="true">01</span>
              </div>
              <p className="eyebrow">Application help</p>
              <h2>Start with the product.</h2>
              <p className={styles.resourceCopy}>
                Product pages bring together current availability, feature details,
                common questions, support, and privacy information.
              </p>
              <span className={styles.resourceLink}>View our apps <ArrowIcon /></span>
            </Link>
            <Link className={styles.resourceCard} href="/privacy-policy">
              <div className={styles.cardTop}>
                <span className={styles.icon}><CompanyIcon name="shield" /></span>
                <span className={styles.cardNumber} aria-hidden="true">02</span>
              </div>
              <p className="eyebrow">Privacy and accounts</p>
              <h2>Find the right information.</h2>
              <p className={styles.resourceCopy}>
                Privacy practices and account controls can differ by application,
                so each applicable product provides its own information.
              </p>
              <span className={styles.resourceLink}>Company privacy policy <ArrowIcon /></span>
            </Link>
          </div>

          <section className={styles.products} id="product-support" aria-labelledby="product-support-heading">
            <div className={styles.sectionHeading}>
              <div>
                <p className="eyebrow">Product-specific support</p>
                <h2 id="product-support-heading">Choose your application.</h2>
              </div>
              <p>Everything you need to know about your app, together in one place.</p>
            </div>
            {publicApps.length > 0 ? (
              <div className={styles.productList}>
                {publicApps.map((app) => (
                  <article className={styles.productCard} key={app.slug}>
                    <div className={styles.productIdentity}>
                      <Image src={app.icon.src} alt={app.icon.alt} width={64} height={64} sizes="64px" />
                      <div>
                        <p className={styles.productCategory}>{app.category}</p>
                        <h3>{app.name}</h3>
                        <p className={styles.productStatus}>
                          <span aria-hidden="true" />
                          {app.status === "published" ? "Available now" : "Coming soon for Android"}
                        </p>
                      </div>
                    </div>
                    <nav className={styles.productLinks} aria-label={`${app.name} support links`}>
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
            ) : (
              <p className={styles.emptyProducts}>Product-specific resources will appear here as applications become available. You can contact Khanvex below for help.</p>
            )}
          </section>

          <section className={styles.faqPanel} id="common-questions" aria-labelledby="faq-heading">
            <div className={styles.faqIntro}>
              <span className={styles.icon}><CompanyIcon name="message" /></span>
              <p className="eyebrow">Common questions</p>
              <h2 id="faq-heading">Support essentials.</h2>
              <p>A few useful answers to help you find your next step.</p>
            </div>
            <div className={styles.faqList}>
              {supportFaqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>
                    <span className={styles.faqIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <span>{faq.question}</span>
                    <span className={styles.faqToggle} aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={styles.supportChannel} aria-labelledby="support-contact-heading">
            <div className={styles.channelCopy}>
              <p className="eyebrow">Contact support</p>
              <h2 id="support-contact-heading">Let’s work through it together.</h2>
              <p>Use this monitored address for product help, privacy questions, or account requests.</p>
            </div>
            <div className={styles.channelAction}>
              <CompanyIcon name="message" />
              <p>{siteConfig.supportEmail}</p>
              {siteConfig.supportEmailVerified ? (
                <a className="button button-light" href={`mailto:${siteConfig.supportEmail}`}>
                  Email support <ArrowIcon />
                </a>
              ) : null}
            </div>
          </section>
        </div>
      </section>
    </CompanyPage>
  );
}
