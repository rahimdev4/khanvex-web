import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import homeStyles from "@/app/home.module.css";
import styles from "./company-page.module.css";

// Company pages reuse the homepage theme. Product routes opt out entirely.
export function CompanyPage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${homeStyles.home} ${styles.page} ${className}`}>{children}</div>;
}

type CompanyHeroProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  actions?: ReactNode;
};

export function CompanyHero({ eyebrow, title, children, aside, actions }: CompanyHeroProps) {
  return (
    <section className={`${styles.hero} ${aside ? styles.heroWithAside : ""}`} aria-labelledby="company-page-heading">
      <div className="shell">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ArrowIcon />
          <span aria-current="page">{eyebrow}</span>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">{eyebrow}</p>
            <h1 id="company-page-heading">{title}</h1>
            {aside ? <div className={styles.description}>{children}</div> : null}
            {actions ? <div className={styles.actions}>{actions}</div> : null}
          </div>
          {aside ? <div className={styles.aside}>{aside}</div> : <div className={styles.description}>{children}</div>}
        </div>
      </div>
    </section>
  );
}

export type CompanyIconName = "spark" | "layers" | "target" | "shield" | "message" | "arrow";

export function CompanyIcon({ name, className }: { name: CompanyIconName; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {name === "spark" ? <><path d="M12 3c.6 5.4 3.6 8.4 9 9-5.4.6-8.4 3.6-9 9-.6-5.4-3.6-8.4-9-9 5.4-.6 8.4-3.6 9-9Z" /><path d="M20 2v4m-2-2h4" /></> : null}
      {name === "layers" ? <><path d="m3 7 9-4 9 4-9 4-9-4Z" /><path d="m3 12 9 4 9-4M3 17l9 4 9-4" /></> : null}
      {name === "target" ? <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" /></> : null}
      {name === "shield" ? <><path d="M12 21s7-3.6 7-10V5.5L12 3 5 5.5V11c0 6.4 7 10 7 10Z" /><path d="m8.8 12 2.1 2.1 4.6-4.7" /></> : null}
      {name === "message" ? <><path d="M5 17.5 3.5 21V6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H5Z" /><path d="M8 8.5h8M8 12.5h5" /></> : null}
      {name === "arrow" ? <><path d="M5 12h14m-6-6 6 6-6 6" /></> : null}
    </svg>
  );
}
