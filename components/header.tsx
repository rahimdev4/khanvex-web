import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { BrandMark } from "@/components/brand-mark";
import { DesktopNavigation, MobileNavigation } from "@/components/navigation";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href="/" aria-label="Khanvex home">
          <BrandMark className="brand-mark" />
          <span>Khanvex</span>
        </Link>

        <DesktopNavigation />

        <Link className="button button-small desktop-contact" href="/contact">
          Let&apos;s talk
          <ArrowIcon />
        </Link>

        <MobileNavigation />
      </div>
    </header>
  );
}
