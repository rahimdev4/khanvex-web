import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Khanvex",
  description:
    "Contact Khanvex for general company enquiries, product feedback, and support for Khanvex mobile applications.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s start a conversation.">
        <p>
          One direct channel for company questions, product feedback, privacy
          requests, and help with a Khanvex application.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell contact-channel-grid contact-channel-grid-single">
          <article className="contact-channel-card contact-channel-card-support contact-channel-card-wide">
            <div className="contact-channel-number" aria-hidden="true">01</div>
            <div className="contact-channel-layout">
              <div className="contact-channel-primary">
                <p className="eyebrow">Contact and support</p>
                <h2>{siteConfig.supportEmail}</h2>
                <p>
                  This monitored mailbox is the official contact point for every
                  Khanvex enquiry.
                </p>
                {siteConfig.supportEmailVerified ? (
                  <a className="button" href={`mailto:${siteConfig.supportEmail}`}>
                    Email Khanvex <ArrowIcon />
                  </a>
                ) : null}
              </div>
              <div className="contact-purpose-grid" aria-label="Reasons to contact Khanvex">
                <div>
                  <span>Company</span>
                  <p>General questions, business enquiries, and feedback.</p>
                </div>
                <div>
                  <span>Applications</span>
                  <p>Product help, technical issues, and feature feedback.</p>
                </div>
                <div>
                  <span>Privacy</span>
                  <p>Privacy questions, account requests, and data help.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="shell contact-note">
          <span aria-hidden="true">i</span>
          <p>
            Never send passwords, one-time codes, payment credentials, or other
            sensitive authentication details. Visit <Link href="/support">Khanvex Support</Link> for product-specific help.
          </p>
        </div>
      </section>
    </>
  );
}
