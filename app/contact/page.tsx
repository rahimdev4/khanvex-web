import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information and enquiry guidance for Khanvex.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Khanvex.">
        <p>
          Use this page for company enquiries, product feedback, or publishing questions.
          Product support has a separate route.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell contact-panel">
          <div>
            <p className="eyebrow">General enquiries</p>
            <h2>{siteConfig.contactEmail}</h2>
            <p>
              Include your name, the reason for contacting Khanvex, and any
              relevant link or deadline. Do not send passwords or payment details.
            </p>
            {!siteConfig.contactEmailVerified ? (
              <p className="channel-status">Email delivery for this planned address has not been verified yet.</p>
            ) : null}
          </div>
          {siteConfig.contactEmailVerified ? (
            <a className="button button-large" href={`mailto:${siteConfig.contactEmail}`}>
              Write an email <ArrowIcon />
            </a>
          ) : (
            <span className="button button-large button-disabled" aria-disabled="true">
              Email setup pending
            </span>
          )}
        </div>
        <div className="shell contact-note">
          <span aria-hidden="true">i</span>
          <p>
            Looking for product help? Visit <Link href="/support">Khanvex Support</Link> for the correct route.
          </p>
        </div>
      </section>
    </>
  );
}
