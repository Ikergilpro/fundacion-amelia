import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { getSiteCopy } from "@/data/localized";
import { site } from "@/data/site";
import { isLocale, localeHtmlLang, locales, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { rootMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return rootMetadata(lang);
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const copy = getSiteCopy(locale);
  const messages = getMessages(locale);

  return (
    <>
      <SkipLink label={messages.skip} />
      <Navbar locale={locale} />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            name: site.name,
            slogan: copy.tagline,
            description: copy.seo.description,
            areaServed: site.location,
            inLanguage: localeHtmlLang[locale],
          }),
        }}
      />
    </>
  );
}
