# Khanvex legal review checklist

This checklist separates drafted content from facts and legal decisions that still require verification. It is project documentation, not legal advice.

## Company Privacy Policy

Status: **Draft — noindex**

Owner verification required:

- production hosting, CDN, security, and email providers;
- whether any production analytics, monitoring, advertising, cookies, or similar technologies are enabled;
- categories of server, security, email, and support information actually processed;
- provider processing locations and international transfers;
- website, email, provider-log, security-log, and backup retention schedules;
- the process for access, correction, deletion, objection, and identity verification requests;
- whether a company-wide age statement is needed beyond app-specific requirements; and
- the monitored privacy contact address.

Legal review required:

- applicable privacy regimes and required notices;
- lawful bases, consent wording, and transfer safeguards where applicable;
- rights language and lawful exceptions;
- service-provider and disclosure wording; and
- final effective date and approval record.

## Terms of Service

Status: **Draft — noindex**

Owner verification required:

- exact publisher/legal identity used in contracts;
- minimum contractual age and parent/guardian requirements;
- account suspension, termination, recovery, and appeal practices;
- any paid features, subscriptions, billing, cancellation, and refund behavior;
- third-party services and store terms that apply;
- product warranty or support commitments, if any; and
- the monitored contact channel for terms questions.

Legal review required:

- governing law, jurisdiction, dispute process, and any required consumer notices;
- intellectual-property ownership and licences;
- acceptable-use enforcement language;
- disclaimers, liability limits, and non-excludable consumer rights;
- change-notice and acceptance mechanics; and
- final effective date and approval record.

## GemFit product policy

Status: **Owner-approved final copy in the current product registry**

Before Google Play release, re-confirm that the published policy matches the release build, Play Data safety answers, production Supabase/hosting/email/Cloudflare configuration, retention behavior, minimum age, publisher name, monitored support address, and the operational in-app and web account-deletion paths.

Google Play requires an account-creation app to provide an in-app deletion path and a functional web path; retained-data practices must be stated. See [Google Play account deletion requirements](https://support.google.com/googleplay/android-developer/answer/13327111).

## Approval procedure

1. Resolve every open fact above.
2. Have appropriate legal counsel review the exact rendered copy.
3. Record the approver and approval date outside the public page.
4. Set the approved policy status in `data/company-policies.ts`.
5. Add the final effective date to the page.
6. Re-run metadata, robots, sitemap, route, test, and production-build checks.
7. Review the final rendered page before deployment.
