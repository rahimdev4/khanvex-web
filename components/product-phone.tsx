import Image from "next/image";
import type { AppAsset } from "@/data/apps";

type ProductPhoneProps = {
  screenshot: AppAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProductPhone({
  screenshot,
  className = "",
  priority = false,
  sizes = "(max-width: 720px) 70vw, 360px",
}: ProductPhoneProps) {
  return (
    <div className={`product-phone${className ? ` ${className}` : ""}`}>
      <Image
        alt={screenshot.alt}
        height={screenshot.height}
        priority={priority}
        sizes={sizes}
        src={screenshot.src}
        width={screenshot.width}
      />
    </div>
  );
}

type ProductPhonePairProps = {
  primary: AppAsset;
  secondary: AppAsset;
  priority?: boolean;
};

export function ProductPhonePair({
  primary,
  secondary,
  priority = false,
}: ProductPhonePairProps) {
  return (
    <div className="product-phone-pair">
      <div className="product-phone-glow" aria-hidden="true" />
      <ProductPhone
        className="product-phone-secondary"
        priority={priority}
        screenshot={secondary}
        sizes="(max-width: 720px) 42vw, (max-width: 980px) 34vw, 260px"
      />
      <ProductPhone
        className="product-phone-primary"
        priority={priority}
        screenshot={primary}
        sizes="(max-width: 720px) 48vw, (max-width: 980px) 38vw, 300px"
      />
    </div>
  );
}
