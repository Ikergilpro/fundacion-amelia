import type { Metadata } from "next";
import { site } from "@/data/site";

const titleTemplate = `%s | ${site.shortName}`;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url,
      locale: "es_MX",
      type: "website",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.shortName}`,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: titleTemplate,
  },
  description: site.seo.description,
  applicationName: site.name,
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "autismo",
    "Chihuahua",
    "comunicación funcional",
    "inclusión",
    "familias",
    "Fundación AMELIA",
    "CAA",
    "autonomía",
  ],
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    locale: "es_MX",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};
