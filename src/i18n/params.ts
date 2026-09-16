import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";

export async function requireLocale(
  params: Promise<{ lang: string }>,
): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}
