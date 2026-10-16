export const siteConfig = {
  name: "Khanvex",
  title: "Khanvex — Apps for better everyday experiences",
  description:
    "Khanvex develops and publishes mobile applications that make everyday tasks simpler, more organized, and more enjoyable.",
  url: "https://khanvex.tech",
  supportEmail: "support@khanvex.tech",
  supportEmailVerified: true,
} as const;

export const primaryNavigation = [
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
] as const;
