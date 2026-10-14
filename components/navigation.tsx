"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation } from "@/lib/site";

function isCurrentRoute(pathname: string, href: string) {
  return pathname === href || (href === "/apps" && pathname.startsWith("/apps/"));
}

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="desktop-nav" aria-label="Primary navigation">
      {primaryNavigation.map((item) => {
        const isCurrent = isCurrentRoute(pathname, item.href);
        return (
          <Link
            aria-current={isCurrent ? "page" : undefined}
            className={isCurrent ? "nav-link-active" : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <details
      className="mobile-menu"
      onToggle={(event) => setOpen(event.currentTarget.open)}
      open={open}
    >
      <summary aria-label={open ? "Close navigation" : "Open navigation"}>
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        {primaryNavigation.map((item) => {
          const isCurrent = isCurrentRoute(pathname, item.href);
          return (
            <Link
              aria-current={isCurrent ? "page" : undefined}
              className={isCurrent ? "nav-link-active" : undefined}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </details>
  );
}
