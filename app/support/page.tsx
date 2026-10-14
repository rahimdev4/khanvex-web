import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Khanvex products and find the right support contact.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Khanvex support" title="Tell us what is getting in the way.">
        <p>
          For product questions, access issues, or privacy requests, contact us
          with enough context to help us understand the problem.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell support-grid">
          <article className="support-card support-card-primary">
            <div className="support-icon" aria-hidden="true">?</div>
            <p className="eyebrow">Product help</p>
            <h2>Email the support team</h2>
            <p>
              Include the app name, device platform, and a short description of
              what happened. Please do not send passwords or payment details.
            </p>
            <a className="button" href={`mailto:${siteConfig.supportEmail}`}>
              {siteConfig.supportEmail}
              <ArrowIcon />
            </a>
          </article>
          <article className="support-card">
            <div className="support-icon" aria-hidden="true">⌁</div>
            <p className="eyebrow">Privacy and account requests</p>
            <h2>Use the product-specific path</h2>
            <p>
              Published apps will provide their own privacy and account-deletion
              instructions. Until then, support can route a verified request.
            </p>
            <Link className="text-link" href="/privacy-policy">
              Read the privacy overview <ArrowIcon />
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
