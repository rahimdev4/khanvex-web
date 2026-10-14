import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { AppMedia } from "@/components/app-media";
import { ArrowIcon } from "@/components/arrow-icon";
import { StoreLinks } from "@/components/store-links";
import type { AppEntry } from "@/data/apps";

type ProductShowcaseProps = {
  app: AppEntry;
  reverse?: boolean;
};

type AccentProperties = CSSProperties & {
  "--app-accent": string;
  "--app-accent-tint": string;
};

export function ProductShowcase({ app, reverse = false }: ProductShowcaseProps) {
  const style: AccentProperties = {
    "--app-accent": app.accentColor,
    "--app-accent-tint": app.accentTint,
  };

  return (
    <article className={`product-showcase${reverse ? " product-showcase-reverse" : ""}`} style={style}>
      <AppMedia
        accentColor={app.accentColor}
        accentTint={app.accentTint}
        screenshot={app.screenshots[0]}
      />
      <div className="product-showcase-copy">
        <div className="product-identity">
          <Image alt={app.icon.alt} height={56} src={app.icon.src} width={56} />
          <div>
            <p className="app-category">{app.category}</p>
            <h2>{app.name}</h2>
          </div>
        </div>
        <h3>{app.headline}</h3>
        <p>{app.description}</p>
        <StoreLinks compact links={app.storeLinks} />
        <Link className="text-link" href={`/apps/${app.slug}`}>
          Explore {app.name} <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
