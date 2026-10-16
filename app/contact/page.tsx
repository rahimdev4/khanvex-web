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
          Choose the right channel for company questions, product feedback, or
          help with a Khanvex application.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell contact-channel-grid">
          <article className="contact-channel-card">
            <div className="contact-channel-number" aria-hidden="true">01</div>
            <p className="eyebrow">General enquiries</p>
            <h2>{siteConfig.contactEmail}</h2>
            <p>
              For company information, business enquiries, and general feedback.
              This mailbox is listed for launch but has not yet been verified.
            </p>
            {siteConfig.contactEmailVerified ? (
              <a className="button" href={`mailto:${siteConfig.contactEmail}`}>
                Email Khanvex <ArrowIcon />
              </a>
            ) : (
              <span className="channel-status">Email activation is still being verified.</span>
            )}
          </article>

          <article className="contact-channel-card contact-channel-card-support">
            <div className="contact-channel-number" aria-hidden="true">02</div>
            <p className="eyebrow">Product support</p>
            <h2>{siteConfig.supportEmail}</h2>
            <p>
              For help with a Khanvex application, privacy questions, account
              requests, or product feedback.
            </p>
            {siteConfig.supportEmailVerified ? (
              <a className="button" href={`mailto:${siteConfig.supportEmail}`}>
                Contact support <ArrowIcon />
              </a>
            ) : (
              <span className="channel-status">Support email activation is still being verified.</span>
            )}
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
