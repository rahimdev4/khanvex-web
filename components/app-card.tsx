import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { ProductPhone } from "@/components/product-phone";
import type { AppEntry } from "@/data/apps";

type AppCardProps = {
  app: AppEntry;
};

type AccentProperties = CSSProperties & {
  "--app-accent": string;
  "--app-accent-tint": string;
};

export function AppCard({ app }: AppCardProps) {
  const style: AccentProperties = {
    "--app-accent": app.accentColor,
    "--app-accent-tint": app.accentTint,
  };
  const primaryScreenshot = app.screenshots[0];
  const secondaryScreenshot = app.screenshots[1] ?? primaryScreenshot;
  const tertiaryScreenshot = app.screenshots[5] ?? app.screenshots[2] ?? primaryScreenshot;

  return (
    <article className="app-card" style={style}>
      <div className="app-card-preview">
        <div className="app-card-preview-glow" aria-hidden="true" />
        <span className="app-card-preview-label">
          {Math.min(3, app.screenshots.length)} product screens
        </span>
        <ProductPhone
          className="app-card-phone app-card-phone-left"
          screenshot={secondaryScreenshot}
          sizes="(max-width: 720px) 125px, (max-width: 980px) 165px, 185px"
        />
        <ProductPhone
          className="app-card-phone app-card-phone-right"
          screenshot={tertiaryScreenshot}
          sizes="(max-width: 720px) 130px, (max-width: 980px) 170px, 190px"
        />
        <ProductPhone
          className="app-card-phone app-card-phone-primary"
          screenshot={primaryScreenshot}
          sizes="(max-width: 720px) 155px, (max-width: 980px) 200px, 220px"
        />
      </div>
      <div className="app-card-body">
        <div className="app-card-heading">
          <Image
            alt={app.icon.alt}
            className="app-card-icon"
            height={64}
            src={app.icon.src}
            width={64}
          />
          <div>
            <p className="app-category">{app.category}</p>
            <h2>{app.name}</h2>
          </div>
        </div>
        <p className="product-status app-card-status">
          <span aria-hidden="true" />
          {app.status === "published" ? "Available now" : `${app.platforms.join(" · ")} · Pre-release`}
        </p>
        <p>{app.summary}</p>
        <ul className="app-card-benefits" aria-label={`${app.name} highlights`}>
          {app.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit.title}>{benefit.title}</li>
          ))}
        </ul>
        <div className="app-card-meta">
          <span>{app.platforms.join(" · ")}</span>
          <span>
            {app.storeLinks.length > 0
              ? app.storeLinks.map((link) => link.store).join(" · ")
              : "Preparing for Google Play"}
          </span>
        </div>
        <Link className="button app-card-cta" href={`/apps/${app.slug}`}>
          Explore {app.name} <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
