import type { Metadata } from "next";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Khanvex about products, partnerships, press, or general questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start with a clear note. We will take it from there.">
        <p>
          For partnerships, product feedback, press, or general questions,
          reach Khanvex directly by email.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell contact-panel">
          <div>
            <p className="eyebrow">General enquiries</p>
            <h2>{siteConfig.contactEmail}</h2>
            <p>
              A useful first message includes your name, what you are contacting
              us about, and any relevant deadline or link.
            </p>
          </div>
          <a className="button button-large" href={`mailto:${siteConfig.contactEmail}`}>
            Write an email <ArrowIcon />
          </a>
        </div>
        <div className="shell contact-note">
          <span aria-hidden="true">i</span>
          <p>
            Need help with a Khanvex app? Email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> so your message reaches the right queue.
          </p>
        </div>
      </section>
    </>
  );
}
