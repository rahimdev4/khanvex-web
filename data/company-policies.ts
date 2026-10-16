export type CompanyPolicyStatus = "draft" | "approved";

export const companyPolicyConfig = {
  privacy: {
    status: "draft" as CompanyPolicyStatus,
    lastRevised: "16 October 2026",
  },
  terms: {
    status: "draft" as CompanyPolicyStatus,
    lastRevised: "16 October 2026",
  },
  websitePractices: {
    userAccounts: false,
    payments: false,
    contactForm: false,
    analytics: false,
    advertising: false,
    intentionalCookies: false,
    infrastructureProvidersVerified: false,
    providerRetentionVerified: false,
  },
} as const;

export function isApprovedPolicy(status: CompanyPolicyStatus) {
  return status === "approved";
}
