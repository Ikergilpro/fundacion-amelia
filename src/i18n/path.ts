import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export function stripLocaleFromPathname(pathname: string): {
  locale: Locale;
  path: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && isLocale(maybeLocale)) {
    const rest = `/${segments.slice(1).join("/")}`;
    return { locale: maybeLocale, path: rest === "/" ? "/" : rest };
  }

  return { locale: defaultLocale, path: pathname || "/" };
}

export function localizedPath(locale: Locale, href: string): string {
  const [rawPath, search] = href.split("?");
  const path = rawPath || "/";
  const { path: withoutLocale } = stripLocaleFromPathname(path);
  const prefixed =
    locale === defaultLocale
      ? withoutLocale
      : withoutLocale === "/"
        ? `/${locale}`
        : `/${locale}${withoutLocale}`;

  return search ? `${prefixed}?${search}` : prefixed;
}

export function switchLocalePath(currentPathname: string, nextLocale: Locale): string {
  const { path } = stripLocaleFromPathname(currentPathname);
  return localizedPath(nextLocale, path);
}
