import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { primaryNavigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Khanvex home">
            <BrandMark className="brand-mark" />
            <span>Khanvex</span>
          </Link>
          <p>Thoughtful mobile apps for everyday life.</p>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <nav className="footer-links" aria-label="Footer navigation">
            {primaryNavigation.slice(0, 3).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="footer-label">Company</p>
          <nav className="footer-links" aria-label="Company links">
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <a href={`mailto:${siteConfig.contactEmail}`}>Email us</a>
          </nav>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Khanvex. All rights reserved.</p>
        <p>Designed with clarity. Built with care.</p>
      </div>
    </footer>
  );
}
