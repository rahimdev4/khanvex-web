import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell reading-width">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="page-hero-copy">{children}</div>
      </div>
    </section>
  );
}
