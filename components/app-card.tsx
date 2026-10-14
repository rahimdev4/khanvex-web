import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
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

  return (
    <article className="app-card" style={style}>
      <div className="app-card-preview">
        <Image
          alt={app.screenshots[0].alt}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
          src={app.screenshots[0].src}
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
        <p>{app.summary}</p>
        <div className="app-card-meta">
          <span>{app.platforms.join(" · ")}</span>
          <span>{app.storeLinks.map((link) => link.store).join(" · ")}</span>
        </div>
        <Link className="text-link" href={`/apps/${app.slug}`}>
          View details <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
