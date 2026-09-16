import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/data/site";
import { rootMetadata } from "@/lib/seo";
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

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${playfair.variable} ${sourceSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <SkipLink />
        <Navbar />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: site.name,
              slogan: site.tagline,
              description: site.seo.description,
              areaServed: site.location,
            }),
          }}
        />
      </body>
    </html>
  );
}
