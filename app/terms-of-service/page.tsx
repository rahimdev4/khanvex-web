import type { Metadata } from "next";
import Link from "next/link";
import { CompanyHero, CompanyPage } from "@/components/company-page";
import styles from "@/components/company-legal.module.css";
import { companyPolicyConfig, isApprovedPolicy } from "@/data/company-policies";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const isApproved = isApprovedPolicy(companyPolicyConfig.terms.status);

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Review the draft terms governing use of the Khanvex website and Khanvex mobile applications.",
  path: "/terms-of-service",
  index: isApproved,
});

const sections = [
  { id: "acceptance", label: "Introduction and acceptance" },
  { id: "scope", label: "Scope of services" },
  { id: "eligibility", label: "Eligibility and responsibilities" },
  { id: "accounts", label: "User accounts" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "third-party-services", label: "Third-party services" },
  { id: "availability", label: "Availability and updates" },
  { id: "payments", label: "Payments and subscriptions" },
  { id: "wellness", label: "Wellness and fitness information" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "changes", label: "Changes to these terms" },
  { id: "contact", label: "Contact" },
] as const;

export default function TermsOfServicePage() {
  return (
    <CompanyPage>
      <CompanyHero eyebrow="Using Khanvex services" title="Terms of Service">
        <p>
          Terms for the Khanvex company website and, where stated, Khanvex mobile applications.
        </p>
      </CompanyHero>

      <div className={`shell ${styles.layout}`}>
        <nav className={styles.navigation} aria-label="Terms of service sections">
          <p>On this page</p>
          <div className={styles.navigationLinks}>
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>{section.label}</a>
            ))}
          </div>
        </nav>

        <article className={styles.document}>
          <div className={styles.documentHeader}>
            <p className={styles.notice}>
              Draft status: these terms are prepared for owner and legal review and are not yet the final published agreement.
            </p>
            <p className={styles.updated}><strong>Last revised:</strong> {companyPolicyConfig.terms.lastRevised}</p>
          </div>

        <section id="acceptance">
          <h2>1. Introduction and acceptance</h2>
          <p>
            These Terms of Service govern access to the Khanvex website and any
            Khanvex application that refers to these terms. By accessing or using an
            applicable service after these terms are approved and published, you agree
            to follow them. If you do not agree, do not use the applicable service.
          </p>
        </section>

        <section id="scope">
          <h2>2. Scope of website and application services</h2>
          <p>
            Khanvex develops and publishes mobile applications and provides company,
            product, support, and legal information through khanvex.tech. Features vary
            by application. Product pages and in-app notices describe current features
            and availability; they do not guarantee future functionality or release dates.
          </p>
        </section>

        <section id="eligibility">
          <h2>3. Eligibility and user responsibilities</h2>
          <p>
            You must be able to enter into these terms under the law that applies to you
            and meet any minimum age stated for the relevant application. You are
            responsible for using the services lawfully, providing accurate information
            when requested, following product instructions, and maintaining the security
            of devices and credentials under your control.
          </p>
        </section>

        <section id="accounts">
          <h2>4. User accounts</h2>
          <p>
            The company website does not currently provide user accounts. Some Khanvex
            applications may support accounts. If you create one, you are responsible
            for keeping your credentials confidential, using accurate account information,
            and notifying support if you believe the account has been accessed without authorization.
          </p>
          <p>
            Account availability, security, recovery, and deletion details are provided
            by the applicable app. GemFit users can review its <Link href="/apps/gemfit/privacy-policy#account-deletion">account deletion information</Link>.
          </p>
        </section>

        <section id="acceptable-use">
          <h2>5. Acceptable use</h2>
          <p>You must not:</p>
          <ul>
            <li>use a Khanvex service for unlawful, fraudulent, harmful, or abusive activity;</li>
            <li>interfere with service operation, security, access controls, or another person&apos;s use;</li>
            <li>attempt unauthorized access to accounts, systems, data, or non-public service areas;</li>
            <li>introduce malicious code or use automated methods that place an unreasonable burden on a service;</li>
            <li>misrepresent your identity or impersonate another person or organization; or</li>
            <li>copy, modify, distribute, or exploit service content except as permitted by law or written authorization.</li>
          </ul>
        </section>

        <section id="intellectual-property">
          <h2>6. Intellectual property</h2>
          <p>
            Khanvex services, branding, interfaces, text, graphics, software, and original
            product content are owned by Khanvex or used with permission and are protected
            by applicable intellectual-property laws. These terms allow personal use of
            the services as provided; they do not transfer ownership of Khanvex property.
          </p>
        </section>

        <section id="third-party-services">
          <h2>7. Third-party services</h2>
          <p>
            A Khanvex service may rely on or link to app stores, authentication,
            infrastructure, email, media delivery, or other third-party services. Those
            providers may apply their own terms and privacy policies. Khanvex does not
            control third-party services and is not responsible for their independent content or practices.
          </p>
        </section>

        <section id="availability">
          <h2>8. Application availability and updates</h2>
          <p>
            Khanvex may maintain, update, improve, suspend, or discontinue all or part of
            a service. Availability may be affected by device compatibility, app-store
            review, network conditions, maintenance, security needs, or third-party services.
            No unpublished feature or release date is promised unless Khanvex states otherwise in writing.
          </p>
        </section>

        <section id="payments">
          <h2>9. Payments and subscriptions</h2>
          <p>
            The current Khanvex website does not sell products, process payments, or offer
            website subscriptions. A Khanvex application may offer paid functionality only
            if that option is clearly presented with the applicable price, billing terms,
            cancellation information, and store rules before purchase. These general terms
            do not create a payment or subscription obligation by themselves.
          </p>
        </section>

        <section id="wellness">
          <h2>10. General wellness and fitness information</h2>
          <p>
            Fitness or wellness content in a Khanvex application is provided for general
            informational and educational purposes. It is not medical advice, diagnosis,
            treatment, or a substitute for advice from a qualified healthcare professional.
            Consider your health and ability before beginning activity, use appropriate
            technique and equipment, and stop if you experience pain, dizziness, or other concerning symptoms.
          </p>
        </section>

        <section id="disclaimers">
          <h2>11. Disclaimers</h2>
          <p>
            To the extent permitted by applicable law, Khanvex services are provided on an
            “as available” basis. Khanvex does not promise that every service will always be
            uninterrupted, error-free, compatible with every device, or suitable for every
            individual purpose. Nothing in these terms excludes a guarantee or right that
            cannot lawfully be excluded.
          </p>
        </section>

        <section id="liability">
          <h2>12. Limitation of liability</h2>
          <p>
            To the extent permitted by applicable law, Khanvex will not be responsible for
            indirect, incidental, special, consequential, or similar losses arising from use
            of or inability to use a service. Any limitation must be interpreted consistently
            with non-excludable rights and protections under the law that applies to the user.
          </p>
        </section>

        <section id="changes">
          <h2>13. Changes to these terms</h2>
          <p>
            Khanvex may update these terms when services, business practices, or legal
            obligations change. The revision date will be updated, and additional notice
            will be provided when required. Continued use after updated terms take effect
            means the updated terms apply to that continued use where permitted by law.
          </p>
        </section>

        <section id="contact">
          <h2>14. Contact information</h2>
          <p>
            Questions about these terms can be sent to <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
            General company contact information is available on the <Link href="/contact">Contact page</Link>.
          </p>
        </section>
        </article>
      </div>
    </CompanyPage>
  );
}
