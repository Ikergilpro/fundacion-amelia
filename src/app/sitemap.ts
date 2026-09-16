import type { MetadataRoute } from "next";
import { getProgramSlugs } from "@/data/localized";
import { site } from "@/data/site";
import { locales } from "@/i18n/config";
import { localizedPath } from "@/i18n/path";

const staticRoutes = [
  "/",
  "/nosotros",
  "/programas",
  "/subsidios",
  "/familias",
  "/profesionales",
  "/donantes",
  "/transparencia",
  "/contacto",
  "/privacidad",
  "/terminos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const programPaths = getProgramSlugs().map((slug) => `/programas/${slug}`);
  const paths = [...staticRoutes, ...programPaths];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}${localizedPath(locale, path)}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          locales.map((item) => [
            item === "es" ? "es-MX" : "en",
            `${site.url}${localizedPath(item, path)}`,
          ]),
        ),
      },
    })),
  );
}
