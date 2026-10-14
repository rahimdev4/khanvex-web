export const siteConfig = {
  name: "Khanvex",
  title: "Khanvex — Apps for better everyday experiences",
  description:
    "Khanvex creates thoughtful mobile apps built around real needs, clear experiences, and lasting usefulness.",
  url: "https://khanvex.tech",
  contactEmail: "hello@khanvex.tech",
  supportEmail: "support@khanvex.tech",
  contactEmailVerified: false,
  supportEmailVerified: false,
} as const;

export const primaryNavigation = [
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
] as const;
