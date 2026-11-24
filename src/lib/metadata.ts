import type { Metadata } from "next";

import { site } from "@/data/site";

interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: OpenGraphImage[];
}

const defaultImage: OpenGraphImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.title}`,
};

/**
 * Builds route-level metadata while preserving the generated social image.
 * A route-level `openGraph` object replaces the root one, so images have to be
 * declared explicitly or they disappear from project pages.
 */
export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  images = [defaultImage],
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} — ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      url: path,
      siteName: `${site.name} — ${site.title}`,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((image) => image.url),
    },
  };
}
