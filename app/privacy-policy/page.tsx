import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { companyPolicyConfig, isApprovedPolicy } from "@/data/company-policies";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const isApproved = isApprovedPolicy(companyPolicyConfig.privacy.status);

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Learn how Khanvex handles information across its company website, communications, and app-specific privacy resources.",
  path: "/privacy-policy",
  index: isApproved,
});

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "scope", label: "Scope" },
  { id: "information-collected", label: "Information collected" },
  { id: "how-information-is-used", label: "How information is used" },
  { id: "app-specific-information", label: "App-specific information" },
  { id: "service-providers", label: "Service providers" },
  { id: "data-sharing", label: "Data sharing" },
  { id: "data-security", label: "Data security" },
  { id: "data-retention", label: "Data retention" },
  { id: "rights-and-choices", label: "Rights and choices" },
  { id: "account-and-data-deletion", label: "Account and data deletion" },
  { id: "childrens-privacy", label: "Children’s privacy" },
  { id: "international-data-handling", label: "International data handling" },
  { id: "policy-updates", label: "Policy updates" },
  { id: "contact", label: "Contact" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy at Khanvex" title="Privacy Policy">
        <p>
          A clear overview of information handling on the Khanvex website,
          company communications, and separate application privacy notices.
        </p>
      </PageHero>

      <article className="section legal-document company-legal-document shell reading-width">
        <p className="legal-notice">
          Draft status: this policy is prepared for owner and legal review and is not yet the final published company policy.
        </p>
        <p className="legal-updated"><strong>Last revised:</strong> {companyPolicyConfig.privacy.lastRevised}</p>

        <nav className="legal-nav" aria-label="Privacy policy sections">
          <p>On this page</p>
          <div className="legal-nav-links">
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>{section.label}</a>
            ))}
          </div>
        </nav>

        <section id="introduction">
          <h2>1. Introduction</h2>
          <p>
            Khanvex develops and publishes mobile applications. This Privacy Policy
            explains how Khanvex handles information in connection with the company
            website at khanvex.tech and direct communications with Khanvex.
          </p>
        </section>

        <section id="scope">
          <h2>2. Scope</h2>
          <p>
            This policy applies to the Khanvex company website and company-level
            enquiries. A Khanvex application may collect or use different information
            to provide its features. When that happens, the application&apos;s own privacy
            policy describes those practices and takes priority for that product.
          </p>
          <p>
            This company policy does not replace the separate <Link href="/apps/gemfit/privacy-policy">GemFit Privacy Policy</Link>.
          </p>
        </section>

        <section id="information-collected">
          <h2>3. Information collected</h2>
          <p>
            The current Khanvex website is informational. It does not provide website
            user accounts, checkout, payments, or a contact form. Khanvex does not
            intentionally add website analytics, advertising technology, or marketing cookies.
          </p>
          <p>
            When the website is accessed, hosting, network, and security systems may
            process technical request information such as an IP address, browser or
            device details, requested URLs, timestamps, and security events as needed
            to deliver and protect the service. The production provider list and
            provider-controlled log details must be confirmed before this draft is approved.
          </p>
          <p>
            If you email Khanvex, the message may include your name, email address,
            message content, attachments, and delivery information. Please do not send
            passwords, one-time codes, payment credentials, or unnecessary sensitive information.
          </p>
        </section>

        <section id="how-information-is-used">
          <h2>4. How information is used</h2>
          <p>Information may be used to:</p>
          <ul>
            <li>deliver, maintain, troubleshoot, and protect the website;</li>
            <li>respond to general enquiries, feedback, support, privacy, and account requests;</li>
            <li>understand and resolve technical or security issues;</li>
            <li>meet applicable legal obligations and protect the rights and safety of Khanvex, users, and others; and</li>
            <li>operate a Khanvex application as described in that application&apos;s separate privacy policy.</li>
          </ul>
        </section>

        <section id="app-specific-information">
          <h2>5. App-specific information</h2>
          <p>
            Product data practices vary according to the features a user chooses to
            use. Review the privacy information linked from the relevant product page
            before using a Khanvex application. GemFit&apos;s account, fitness preference,
            workout activity, provider, retention, security, and deletion information
            is described in its <Link href="/apps/gemfit/privacy-policy">app-specific policy</Link>.
          </p>
        </section>

        <section id="service-providers">
          <h2>6. Service providers</h2>
          <p>
            Khanvex may rely on providers for website hosting, content delivery,
            security, email, and application infrastructure. Providers process
            information only in connection with the services they supply and under
            their applicable terms. Provider names, locations, and retention schedules
            are not stated here until the production configuration has been verified.
          </p>
        </section>

        <section id="data-sharing">
          <h2>7. Data sharing</h2>
          <p>
            Khanvex may disclose information to service providers that help operate
            the website or an application, when a user asks Khanvex to do so, when
            required by applicable law or a valid legal process, or when reasonably
            necessary to protect rights, safety, and service integrity. App-specific
            sharing is described in the relevant application privacy policy.
          </p>
        </section>

        <section id="data-security">
          <h2>8. Data security</h2>
          <p>
            Security measures depend on the systems and providers used for the website,
            email, and each application. The production controls must be verified before
            this draft is approved. No method of storage or transmission is completely
            secure, so absolute security cannot be guaranteed.
          </p>
        </section>

        <section id="data-retention">
          <h2>9. Data retention</h2>
          <p>
            Khanvex intends to keep information only for as long as reasonably needed
            for the purpose for which it was received, to maintain security and service
            continuity, to resolve requests or disputes, and to meet applicable legal
            obligations. Exact website, email, provider-log, and backup periods require
            owner verification before this draft becomes final. Product-specific periods
            are stated in the applicable application policy when known.
          </p>
        </section>

        <section id="rights-and-choices">
          <h2>10. User rights and choices</h2>
          <p>
            Depending on where you live and the law that applies, you may have rights
            to ask about, access, correct, or delete certain personal information, or
            to object to or restrict certain processing. Khanvex may need to verify your
            identity before completing a request. These rights are not absolute and may
            be subject to lawful exceptions.
          </p>
        </section>

        <section id="account-and-data-deletion">
          <h2>11. Account and data deletion</h2>
          <p>
            The Khanvex company website does not currently provide user accounts.
            Applications that support accounts provide their own deletion instructions.
            GemFit users can review the <Link href="/apps/gemfit/privacy-policy#account-deletion">GemFit account deletion process</Link>.
            For other privacy or deletion questions, contact Khanvex using the address below.
          </p>
        </section>

        <section id="childrens-privacy">
          <h2>12. Children&apos;s privacy</h2>
          <p>
            The company website is intended to provide general company and product
            information and is not designed to collect personal information from
            children through accounts or forms. Individual applications may have a
            specific minimum age or intended audience, which is stated in the relevant
            app privacy policy. GemFit is intended for users aged 15 and older.
          </p>
        </section>

        <section id="international-data-handling">
          <h2>13. International data handling</h2>
          <p>
            Website, email, and application providers may process information in
            countries other than the country where a user lives. The locations and
            safeguards that apply depend on the verified provider configuration and
            applicable law. Those details must be confirmed before this draft is approved.
          </p>
        </section>

        <section id="policy-updates">
          <h2>14. Policy updates</h2>
          <p>
            Khanvex may update this policy when the website, applications, providers,
            or legal obligations change. The revision date at the top of the policy will
            be updated, and additional notice will be provided when required.
          </p>
        </section>

        <section id="contact">
          <h2>15. Contact</h2>
          <p>
            For privacy questions or requests, email <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
            General company enquiries can be directed through the <Link href="/contact">contact page</Link>.
          </p>
        </section>
      </article>
    </>
  );
}
