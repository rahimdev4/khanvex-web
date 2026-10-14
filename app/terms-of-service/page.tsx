import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Status of the Khanvex website terms of service.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero eyebrow="Provisional document" title="Terms of Service">
        <p>
          Formal website and product terms have not yet been approved. This page
          is intentionally excluded from search indexing until legal review is complete.
        </p>
      </PageHero>
      <article className="section legal-document shell reading-width">
        <p className="legal-notice">
          This page is a publication-status notice, not a finalized legal agreement.
        </p>
        <nav className="legal-nav" aria-label="Terms status sections">
          <p>On this page</p>
          <a href="#website-status">Website status</a>
          <a href="#product-terms">Product terms</a>
          <a href="#next-step">Before launch</a>
        </nav>
        <section id="website-status">
          <h2>Website status</h2>
          <p>
            The current Khanvex website provides company and product information.
            It does not provide user accounts, checkout, subscriptions, or paid services.
          </p>
        </section>
        <section id="product-terms">
          <h2>Product terms</h2>
          <p>
            Any terms that apply to a Khanvex application must be reviewed and
            published with that product before its public store links are added.
          </p>
        </section>
        <section id="next-step">
          <h2>Before launch</h2>
          <p>
            Khanvex should obtain an appropriate legal review and replace this
            notice with the approved terms before enabling transactions or user accounts.
          </p>
        </section>
      </article>
    </>
  );
}
