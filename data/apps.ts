export type AppPlatform = "iOS" | "Android";
export type StoreName = "App Store" | "Google Play";

export type AppAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type StoreLink = {
  store: StoreName;
  href: string;
};

export type AppFeature = {
  title: string;
  description: string;
  screenshotIndex: number;
};

export type AppFaq = {
  question: string;
  answer: string;
};

export type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type AppPrivacyPolicy = {
  lastUpdated: string;
  introduction: string;
  sections: readonly LegalSection[];
};

export type AccountDeletionGuide = {
  introduction: string;
  steps: readonly string[];
  contactEmail?: string;
};

export type AppEntry = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  headline: string;
  platforms: readonly AppPlatform[];
  status: "draft" | "published";
  publicContentApproved: boolean;
  featured: boolean;
  accentColor: string;
  accentTint: string;
  icon: AppAsset;
  screenshots: readonly AppAsset[];
  storeLinks: readonly StoreLink[];
  features: readonly AppFeature[];
  benefits: readonly string[];
  faqs: readonly AppFaq[];
  supportEmail: string;
  supportEmailVerified: boolean;
  privacyPolicy?: AppPrivacyPolicy;
  accountDeletion?: AccountDeletionGuide;
};

// Add products here only after every public claim, asset, store URL, support
// path, and disclosure has been approved. Draft entries are never returned by
// the public helpers below.
export const appRegistry: readonly AppEntry[] = [];

function hasApprovedPublicContent(app: AppEntry) {
  return (
    app.status === "published" &&
    app.publicContentApproved &&
    app.icon.src.length > 0 &&
    app.screenshots.length > 0 &&
    app.storeLinks.length > 0 &&
    app.features.length > 0 &&
    app.benefits.length > 0 &&
    app.faqs.length > 0 &&
    app.supportEmailVerified &&
    Boolean(app.privacyPolicy)
  );
}

export const publishedApps = appRegistry.filter(hasApprovedPublicContent);
export const featuredApps = publishedApps.filter((app) => app.featured);

export function getPublishedApp(slug: string) {
  return publishedApps.find((app) => app.slug === slug);
}
