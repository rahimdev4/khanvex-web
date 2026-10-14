import Image from "next/image";
import type { CSSProperties } from "react";
import type { AppAsset } from "@/data/apps";

type AppMediaProps = {
  screenshot: AppAsset;
  accentColor: string;
  accentTint: string;
  priority?: boolean;
  compact?: boolean;
};

type AccentProperties = CSSProperties & {
  "--app-accent": string;
  "--app-accent-tint": string;
};

export function AppMedia({
  screenshot,
  accentColor,
  accentTint,
  priority = false,
  compact = false,
}: AppMediaProps) {
  const style: AccentProperties = {
    "--app-accent": accentColor,
    "--app-accent-tint": accentTint,
  };

  return (
    <div className={`app-media${compact ? " app-media-compact" : ""}`} style={style}>
      <div className="app-media-halo" />
      <div className="app-screenshot-frame">
        <Image
          alt={screenshot.alt}
          height={screenshot.height}
          priority={priority}
          sizes={compact ? "(max-width: 720px) 72vw, 320px" : "(max-width: 980px) 72vw, 460px"}
          src={screenshot.src}
          width={screenshot.width}
        />
      </div>
    </div>
  );
}
