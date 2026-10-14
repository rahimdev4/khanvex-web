import Link from "next/link";
import { primaryNavigation } from "@/lib/site";
import { ArrowIcon } from "@/components/arrow-icon";
import { BrandMark } from "@/components/brand-mark";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href="/" aria-label="Khanvex home">
          <BrandMark className="brand-mark" />
          <span>Khanvex</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-small desktop-contact" href="/contact">
          Let&apos;s talk
          <ArrowIcon />
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {primaryNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
