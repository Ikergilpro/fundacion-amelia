import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { site } from "@/data/site";

const staticRoutes = [
  "",
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

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified,
    })),
    ...programs.map((program) => ({
      url: `${site.url}/programas/${program.slug}`,
      lastModified,
    })),
  ];
}
