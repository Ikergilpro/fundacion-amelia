import type { Metadata } from "next";
import { site } from "@/data/site";
import { defaultLocale, localeOpenGraph, type Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/path";

const titleTemplate = `%s | ${site.shortName}`;

export function pageMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
}): Metadata {
  const localized = localizedPath(locale, path);
  const url = `${site.url}${localized === "/" ? "/" : localized}`;
  const esUrl = `${site.url}${path === "/" ? "/" : path}`;
  const enUrl = `${site.url}${path === "/" ? "/en" : `/en${path}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "es-MX": esUrl,
        en: enUrl,
        "x-default": esUrl,
      },
    },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url,
      locale: localeOpenGraph[locale],
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

export function rootMetadata(locale: Locale = defaultLocale): Metadata {
  const seoTitle =
    locale === "en"
      ? "Fundación AMELIA | Autism, communication, autonomy and inclusion in Chihuahua"
      : site.seo.title;
  const seoDescription =
    locale === "en"
      ? "Fundación AMELIA accompanies autistic people and their families through guidance, functional communication, educational inclusion, technology, sport, family support and research."
      : site.seo.description;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: seoTitle,
      template: titleTemplate,
    },
    description: seoDescription,
    applicationName: site.name,
    icons: {
      icon: "/favicon.svg",
    },
    keywords:
      locale === "en"
        ? [
            "autism",
            "Chihuahua",
            "functional communication",
            "inclusion",
            "families",
            "Fundación AMELIA",
            "AAC",
            "autonomy",
          ]
        : [
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
      title: seoTitle,
      description: seoDescription,
      locale: localeOpenGraph[locale],
      type: "website",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
