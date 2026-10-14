export type PublishedApp = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  platforms: readonly ("iOS" | "Android")[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  supportEmail: string;
};

// Add an app only after its name, claims, assets, store links, and legal
// disclosures have been verified. The public UI handles an empty registry.
export const publishedApps: readonly PublishedApp[] = [];
