import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Find product support, privacy information, and account help for Khanvex apps.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Khanvex support" title="Find the right support path.">
        <p>
          Published apps provide product-specific help, privacy information,
          and account deletion instructions where those features apply.
        </p>
      </PageHero>

      <section className="section page-section">
        <div className="shell support-grid">
          <article className="support-card support-card-primary">
            <div className="support-icon" aria-hidden="true">01</div>
            <p className="eyebrow">Product help</p>
            <h2>Start from the app page</h2>
            <p>
              Choose the relevant product to find its verified support address,
              store links, and common questions.
            </p>
            <Link className="button" href="/apps">
              View apps <ArrowIcon />
            </Link>
          </article>
          <article className="support-card">
            <div className="support-icon" aria-hidden="true">02</div>
            <p className="eyebrow">Privacy and accounts</p>
            <h2>Use product-specific instructions</h2>
            <p>
              Account deletion routes appear only for apps that support accounts.
              Privacy notices are published separately for each released product.
            </p>
            <Link className="text-link" href="/privacy-policy">
              Website privacy overview <ArrowIcon />
            </Link>
          </article>
        </div>

        <div className="shell support-channel">
          <div>
            <p className="eyebrow">Planned support channel</p>
            <h2>{siteConfig.supportEmail}</h2>
          </div>
          <p>
            {siteConfig.supportEmailVerified
              ? "This address is available for support enquiries."
              : "Email delivery has not been verified. The site does not present this address as an active support link yet."}
          </p>
        </div>
      </section>
    </>
  );
}
