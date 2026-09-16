import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/data/navigation";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-ivory">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo inverted size="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/75">
              {site.acronym}
            </p>
            <p className="mt-4 font-serif text-lg text-light-gold">
              {site.tagline}
            </p>
            <p className="mt-6 text-sm text-ivory/60">{site.location}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-gold">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="text-ivory/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-ivory/55">
          <p>
            Sitio informativo. Los formularios están preparados para una
            conexión posterior; no envían aún expedientes ni donativos.
          </p>
        </div>
      </Container>
    </footer>
  );
}
