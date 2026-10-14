import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy overview",
  description: "A provisional privacy overview for the Khanvex website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: false },
};

const sections = [
  { id: "website-behavior", label: "Current website behavior" },
  { id: "email", label: "When you email us" },
  { id: "app-disclosures", label: "App-specific disclosures" },
  { id: "questions", label: "Questions or requests" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Provisional document" title="Privacy overview">
        <p>
          This page describes the current informational website. It remains
          excluded from search indexing until formal legal review is complete.
        </p>
      </PageHero>

      <article className="section legal-document shell reading-width">
        <p className="legal-notice">
          Last updated: October 14, 2026. This is not a finalized company privacy policy.
        </p>
        <nav className="legal-nav" aria-label="Privacy overview sections">
          <p>On this page</p>
          {sections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>{section.label}</a>
          ))}
        </nav>
        <section id="website-behavior">
          <h2>Current website behavior</h2>
          <p>
            This version of khanvex.tech provides company and product information.
            It does not include user accounts, payment collection, advertising
            trackers, analytics scripts, or a website contact form. It does not
            intentionally set first-party cookies.
          </p>
        </section>
        <section id="email">
          <h2>When you email us</h2>
          <p>
            If Khanvex activates an email contact channel and you use it, the
            relevant email providers will process the message and delivery information.
            Do not include passwords, payment credentials, or unnecessary sensitive information.
          </p>
        </section>
        <section id="app-disclosures">
          <h2>App-specific disclosures</h2>
          <p>
            Each published Khanvex app must provide its own verified privacy notice
            before its store link appears on this website. That notice will describe
            the data practices for the relevant product.
          </p>
        </section>
        <section id="questions">
          <h2>Questions or requests</h2>
          <p>
            The planned privacy contact is {siteConfig.supportEmail}. Email delivery
            must be verified before this address is presented as an active contact link.
          </p>
        </section>
      </article>
    </>
  );
}
