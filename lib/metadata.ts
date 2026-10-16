import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
}: PageMetadataOptions): Metadata {
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
