import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { getPublicApp, publicApps } from "@/data/apps";

type PolicyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publicApps
    .filter((app) => app.privacyPolicy)
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: PolicyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getPublicApp(slug);
  if (!app?.privacyPolicy) return { title: "Policy not found", robots: { index: false } };

  return {
    title: `${app.name} Privacy Policy`,
    description: `How ${app.privacyPolicy.publisherName} handles information when you use the ${app.name} Android application and related support services.`,
    alternates: { canonical: `/apps/${app.slug}/privacy-policy` },
    robots:
      app.privacyPolicy.status === "final"
        ? { index: true, follow: true }
        : { index: false, follow: true },
  };
}

export default async function AppPrivacyPolicyPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const app = getPublicApp(slug);
  if (!app?.privacyPolicy) notFound();

  const policy = app.privacyPolicy;

  return (
    <article
      className="section legal-document app-privacy-policy shell reading-width"
      style={{ "--policy-accent": app.accentColor, "--policy-tint": app.accentTint } as CSSProperties}
    >
      <header className="legal-header">
        <p className="eyebrow">{app.name} · Privacy and data</p>
        <h1>{app.name} Privacy Policy</h1>
        <p className="legal-updated"><strong>Effective date:</strong> {policy.effectiveDate}</p>
        {policy.status === "provisional" ? (
          <p className="legal-notice">
            Provisional notice: this page is under review and is not {app.name}&apos;s final privacy policy.
          </p>
        ) : null}
        <p className="legal-introduction">
          This Privacy Policy explains how {policy.publisherName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          handles information when you use the {app.name} Android application and related support services.
          {" "}{app.name} helps users discover workout content, select or schedule workout plans, create
          workouts, record sets and timed activity, and review fitness activity history.
        </p>
      </header>

      <nav className="legal-nav" aria-label="Privacy policy sections">
        <p>On this page</p>
        <div className="legal-nav-links">
          <a href="#information-we-collect">Information we collect</a>
          <a href="#how-we-use-information">How we use information</a>
          <a href="#storage-and-service-providers">Storage and service providers</a>
          <a href="#data-retention">Data retention</a>
          <a className="legal-nav-priority" href="#account-deletion">Delete your GemFit account</a>
          <a href="#security">Security</a>
          <a href="#fitness-and-medical-disclaimer">Fitness and medical disclaimer</a>
          <a href="#children-and-intended-audience">Children and intended audience</a>
          <a href="#international-processing-and-your-rights">International processing and your rights</a>
          <a href="#changes-to-this-policy">Changes to this policy</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="information-we-collect">
        <h2>Information we collect</h2>
        <ul>
          <li><strong>Account and profile information:</strong> your email address, authentication account identifier, display name, and authentication/security records needed to create and protect your account.</li>
          <li><strong>Fitness preferences:</strong> the fitness goal, experience level, preferred workout location such as home or gym, training days, preferred session duration, and equipment choices that you provide. &quot;Workout location&quot; is a preference you select; GemFit does not collect your GPS or precise device location.</li>
          <li><strong>Workout and fitness activity:</strong> selected plans, schedules, workout drafts, exercises, targets, completed or skipped sets, repetitions, optional resistance values, timers, workout status, completion dates, duration, history, and synchronization state.</li>
          <li><strong>Technical and security information:</strong> session and request identifiers, synchronization metadata, deletion-request status, network/service diagnostics, and security or abuse-prevention logs generated when the app communicates with its service providers.</li>
          <li><strong>Support communications:</strong> information you choose to include when you contact support. Do not send passwords, one-time codes, authentication tokens, reset links, or identity documents unless support has explained why specific additional information is necessary.</li>
        </ul>
        <p>GemFit does not request access to your device&apos;s precise or approximate location, contacts, camera, microphone, photos, media library, body sensors, Health Connect records, advertising ID, or payment information. GemFit does not provide a personal photo, video, or document upload feature. Public exercise images and videos are GemFit product content, not user uploads.</p>
      </section>

      <section id="how-we-use-information">
        <h2>How we use information</h2>
        <ul>
          <li>create, authenticate, secure, recover, and delete your GemFit account;</li>
          <li>save your profile and fitness preferences;</li>
          <li>match and display suitable workout content based on the preferences you choose;</li>
          <li>create schedules, retain workout drafts, record actual workout activity, synchronize devices, and display progress and history;</li>
          <li>operate, troubleshoot, secure, and improve the reliability of GemFit; and</li>
          <li>respond to support, privacy, and account-deletion requests.</li>
        </ul>
      </section>

      <section id="storage-and-service-providers">
        <h2>Storage and service providers</h2>
        <p>Supabase provides authentication, database, server-function, and related infrastructure used to store account, profile, preference, schedule, workout, activity, and security information. Account-scoped data is also stored in GemFit&apos;s private app storage on your device so drafts, active workouts, pending synchronization, and recovery state are not silently lost. Cloudflare-backed khanvex.tech infrastructure serves public exercise and workout-plan images and videos. Our hosting and email providers process website requests and support or authentication email as necessary to provide those services.</p>
        <p>We use service providers to operate GemFit. We do not sell personal information, and the current app contains no advertising, behavioral-advertising, or third-party analytics SDK. Service-provider processing and any legally required disclosure are subject to applicable agreements and law.</p>
      </section>

      <section id="data-retention">
        <h2>Data retention</h2>
        <p>Account data is kept while your GemFit account is active and as needed to provide the features you use. Workout drafts and pending synchronization data may remain in private app storage until synchronized, explicitly discarded, or removed after confirmed account deletion. A minimal server-side deletion receipt containing request identifiers, status, and timestamps is retained for retry and recovery; completed receipts are scheduled to expire after seven days.</p>
        <p>{policy.providerRetentionSummary} Limited information may also be retained when reasonably necessary for security, fraud prevention, dispute resolution, enforcement, or legal compliance. We do not promise that provider backups or security logs are erased on the seven-day deletion-receipt schedule.</p>
      </section>

      <section className="account-deletion-section" id="account-deletion">
        <p className="eyebrow">Account controls</p>
        <h2>Delete your GemFit account</h2>
        <p>You can permanently delete your GemFit account in the Android app. Sign in, then open <strong>Profile → Account settings → Delete account</strong>. Review the warning, enter your current password to verify ownership, and confirm deletion.</p>
        <p>If you cannot access the app or your account, email <a href="mailto:support@khanvex.tech?subject=GemFit%20account%20deletion%20request">support@khanvex.tech</a> with the subject <strong>GemFit account deletion request</strong> and the email address associated with your account. Do not send your password, one-time code, authentication token, reset link, workout details, or identity documents unless GemFit support explains why specific additional information is necessary. Sending an email does not automatically delete an account; we must verify account ownership before destructive processing.</p>
        <p>Confirmed deletion removes your GemFit authentication account, profile and display name, fitness preferences, personal plan assignments and scheduled occurrences, workout sessions and recorded sets, progress and activity history, and account-scoped drafts or pending workout changes on a device after that device receives confirmation. Account deactivation or freezing is not used as a substitute for deletion.</p>
        <p>Shared exercise records, starter workout programs, images, and videos are GemFit product content and are not deleted with an account. Minimal deletion receipts and limited provider logs or backups may remain for the periods and reasons described in the Data retention section.</p>
      </section>

      <section id="security">
        <h2>Security</h2>
        <p>GemFit uses encrypted network transport, account-scoped access controls, private application storage, and database security controls intended to protect user information. No storage or transmission method is guaranteed to be completely secure, and GemFit does not claim end-to-end encryption.</p>
      </section>

      <section id="fitness-and-medical-disclaimer">
        <h2>Fitness and medical disclaimer</h2>
        <p>GemFit provides general fitness information and workout logging for educational and wellness purposes. It is not medical advice, a medical device, or a substitute for advice from a qualified healthcare professional. Workout suggestions are based on preferences you choose and are not individually prescribed or clinically validated. Stop exercising and seek appropriate professional guidance if you experience pain, dizziness, or other concerning symptoms.</p>
      </section>

      <section id="children-and-intended-audience">
        <h2>Children and intended audience</h2>
        <p>GemFit is intended for users aged {policy.minimumUserAge} and older. {policy.intendedAudienceStatement}</p>
      </section>

      <section id="international-processing-and-your-rights">
        <h2>International processing and your rights</h2>
        <p>Information may be processed in countries where we or our service providers operate. The privacy rights available to you depend on {policy.jurisdiction} and the laws that apply to you. You may contact us to ask a privacy question or request access, correction, or deletion. We may need to verify your identity before acting on a request.</p>
      </section>

      <section id="changes-to-this-policy">
        <h2>Changes to this policy</h2>
        <p>We may update this policy when GemFit&apos;s features, providers, or legal obligations change. We will update the effective date on this page and provide any additional notice required by applicable law.</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>GemFit is published by {policy.publisherName}. For support, privacy questions, or account-deletion help, email <a href="mailto:support@khanvex.tech">support@khanvex.tech</a>.</p>
      </section>
    </article>
  );
}
