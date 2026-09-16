import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import { site } from "@/data/site";
import { isLocale, localeHtmlLang } from "@/i18n/config";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerLocale = (await headers()).get("x-locale") ?? "es";
  const lang = isLocale(headerLocale) ? localeHtmlLang[headerLocale] : "es-MX";

  return (
    <html
      lang={lang}
      className={`${playfair.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
