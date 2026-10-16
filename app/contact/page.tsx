import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { CompanyHero, CompanyIcon, CompanyPage } from "@/components/company-page";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Khanvex",
  description:
    "Contact Khanvex for general company enquiries, product feedback, and support for Khanvex mobile applications.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <CompanyPage>
      <CompanyHero
        eyebrow="Contact"
        title={<>Let’s start a <span className={styles.accent}>conversation.</span></>}
        aside={
          <div className={styles.heroNote}>
            <span className={styles.icon}><CompanyIcon name="message" /></span>
            <h2>A little help, a new idea, or a question.</h2>
            <p>There’s a direct way to reach the people behind Khanvex.</p>
            <Link className="text-link" href="/support">Browse support <ArrowIcon /></Link>
          </div>
        }
      >
        <p>
          One direct channel for company questions, product feedback, privacy
          requests, and help with a Khanvex application.
        </p>
      </CompanyHero>

      <section className={styles.contactSection} aria-labelledby="contact-heading">
        <div className="shell">
          <div className={styles.contactGrid}>
            <article className={styles.mailbox}>
              <div className={styles.mailboxTop}>
                <p className="eyebrow">Contact and support</p>
                <CompanyIcon name="message" className={styles.mailboxIcon} />
              </div>
              <div className={styles.mailboxCopy}>
                <h2 id="contact-heading">{siteConfig.supportEmail}</h2>
                <p>This monitored mailbox is the official contact point for every Khanvex enquiry.</p>
              </div>
              <div className={styles.mailboxBottom}>
                {siteConfig.supportEmailVerified ? (
                  <a className="button button-light" href={`mailto:${siteConfig.supportEmail}`}>
                    Email Khanvex <ArrowIcon />
                  </a>
                ) : null}
                <span>Company · Products · Privacy</span>
              </div>
            </article>

            <aside className={styles.messageGuide} aria-labelledby="message-guide-heading">
              <p className="eyebrow">Before you send</p>
              <h2 id="message-guide-heading">A little context goes a long way.</h2>
              <p>For application help, include these details when you can.</p>
              <ol>
                <li><span>01</span>The name of the app</li>
                <li><span>02</span>A short description of the issue</li>
                <li><span>03</span>Your device and app version</li>
              </ol>
            </aside>
          </div>

          <div className={styles.purposeHeading}>
            <p className="eyebrow">How can we help?</p>
            <h2>Different questions. One place to reach us.</h2>
          </div>
          <div className={styles.purposeGrid}>
            <article className={styles.purposeCard}>
              <span className={styles.icon}><CompanyIcon name="spark" /></span>
              <h3>Company enquiries</h3>
              <p>General questions, business enquiries, and feedback about Khanvex.</p>
            </article>
            <article className={styles.purposeCard}>
              <span className={styles.icon}><CompanyIcon name="layers" /></span>
              <h3>Application support</h3>
              <p>Product help, technical issues, and ideas for improving your experience.</p>
            </article>
            <article className={styles.purposeCard}>
              <span className={styles.icon}><CompanyIcon name="shield" /></span>
              <h3>Privacy and accounts</h3>
              <p>Privacy questions, account requests, and help with your data.</p>
            </article>
          </div>

          <div className={styles.safetyNote}>
            <CompanyIcon name="shield" />
            <p>
              Never send passwords, one-time codes, payment credentials, or other
              sensitive authentication details. Visit <Link href="/support">Khanvex Support</Link> for product-specific help.
            </p>
          </div>
        </div>
      </section>
    </CompanyPage>
  );
}
