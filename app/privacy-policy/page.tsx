import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy overview",
  description: "A provisional privacy overview for the Khanvex website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Provisional document" title="Privacy overview">
        <p>
          This page describes the current informational website. It is excluded
          from search indexing until formal legal review is complete.
        </p>
      </PageHero>

      <article className="section page-section legal-copy shell reading-width">
        <p className="legal-notice">
          Last updated: October 14, 2026. This is not yet a final company privacy policy.
        </p>
        <h2>Current website behavior</h2>
        <p>
          This version of khanvex.tech is a static informational website. It does
          not include user accounts, payment collection, advertising trackers,
          analytics scripts, or a website contact form. It does not intentionally
          set first-party cookies.
        </p>
        <h2>When you email us</h2>
        <p>
          If you contact Khanvex by email, your email provider and ours process
          the message and associated delivery information. Please do not include
          passwords, payment credentials, or unnecessary sensitive information.
        </p>
        <h2>App-specific disclosures</h2>
        <p>
          Each published Khanvex app will provide its own verified privacy notice
          before its store link appears on this website. Those notices will
          explain the data practices that apply to that product.
        </p>
        <h2>Questions or requests</h2>
        <p>
          For privacy questions, email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          Khanvex may need to verify a request before acting on it.
        </p>
      </article>
    </>
  );
}
