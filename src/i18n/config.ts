export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeHtmlLang: Record<Locale, string> = {
  es: "es-MX",
  en: "en",
};

export const localeOpenGraph: Record<Locale, string> = {
  es: "es_MX",
  en: "en_US",
};

export const localeLabels: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
