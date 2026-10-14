import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site";

const footerGroups = [
  {
    label: "Apps",
    links: [{ href: "/apps", label: "All apps" }],
  },
  {
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Help and legal",
    links: [
      { href: "/support", label: "Support" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms of Service" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Khanvex home">
            <BrandMark className="brand-mark" />
            <span>Khanvex</span>
          </Link>
          <p>A publishing home for focused mobile applications.</p>
          <p className="footer-domain">khanvex.tech</p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.label}>
            <p className="footer-label">{group.label}</p>
            <nav className="footer-links" aria-label={`${group.label} links`}>
              {group.links.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}</Link>
              ))}
            </nav>
          </div>
        ))}
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Khanvex. All rights reserved.</p>
        <p>
          Contact channels are published after verification. Current planned address: {siteConfig.contactEmail}
        </p>
      </div>
    </footer>
  );
}
