import type { CSSProperties } from "react";
import { ProductPhone } from "@/components/product-phone";
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
      <ProductPhone
        className="app-screenshot-frame"
        priority={priority}
        screenshot={screenshot}
        sizes={compact ? "(max-width: 720px) 68vw, 310px" : "(max-width: 980px) 66vw, 420px"}
      />
    </div>
  );
}
