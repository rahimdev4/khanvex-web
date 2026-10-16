import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { ProductPhonePair } from "@/components/product-phone";
import { StoreLinks } from "@/components/store-links";
import type { AppEntry } from "@/data/apps";

type ProductShowcaseProps = {
  app: AppEntry;
  reverse?: boolean;
  theme?: "product" | "brand";
};

type AccentProperties = CSSProperties & {
  "--app-accent": string;
  "--app-accent-tint": string;
};

export function ProductShowcase({ app, reverse = false, theme = "product" }: ProductShowcaseProps) {
  const isBrandTheme = theme === "brand";
  const style: AccentProperties = {
    "--app-accent": isBrandTheme ? "var(--blue-hover)" : app.accentColor,
    "--app-accent-tint": isBrandTheme ? "var(--blue-tint)" : app.accentTint,
  };
  const preview = (
    <ProductPhonePair
      primary={app.screenshots[0]}
      secondary={app.screenshots[1] ?? app.screenshots[0]}
    />
  );

  return (
    <article className={`product-showcase${reverse ? " product-showcase-reverse" : ""}`} style={style}>
      {isBrandTheme ? (
        <div className="product-showcase-visual">
          <div className="product-showcase-preview-label">
            <span>Inside {app.name}</span>
            <span>App preview</span>
          </div>
          {preview}
          <p className="product-showcase-preview-caption">
            {app.screenshots.slice(0, 2).map((screenshot) => screenshot.label).filter(Boolean).join(" & ") || `Explore ${app.name}`}
          </p>
        </div>
      ) : preview}
      <div className="product-showcase-copy">
        <div className="product-identity">
          <Image alt={app.icon.alt} height={56} src={app.icon.src} width={56} />
          <div>
            <p className="app-category">{app.category}</p>
            <h2>{app.name}</h2>
          </div>
        </div>
        <p className="product-status">
          <span aria-hidden="true" />
          {app.status === "published" ? "Available now" : "Android · Preparing for Google Play"}
        </p>
        <h3>{app.headline}</h3>
        <p>{app.description}</p>
        {isBrandTheme ? (
          <ul className="product-showcase-highlights">
            {app.features.slice(0, 2).map((feature) => (
              <li key={feature.title}>
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                  <path d="m5 10 3.2 3.2L15 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {feature.title}
              </li>
            ))}
          </ul>
        ) : null}
        {app.storeLinks.length > 0 ? <StoreLinks compact links={app.storeLinks} /> : null}
        <Link className={isBrandTheme ? "button product-showcase-action" : "text-link"} href={`/apps/${app.slug}`}>
          View {app.name} <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
