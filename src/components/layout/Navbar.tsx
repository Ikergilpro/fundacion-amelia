"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getCtas, getPrimaryNav } from "@/i18n/navigation";
import { localizedPath, stripLocaleFromPathname } from "@/i18n/path";
import { cn } from "@/lib/utils";

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const messages = getMessages(locale);
  const primaryNav = getPrimaryNav(locale);
  const ctas = getCtas(locale);
  const { path } = stripLocaleFromPathname(pathname);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
        <LogoMark
          href={localizedPath(locale, "/")}
          label={messages.logoHome}
        />
        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher locale={locale} />
          <p className="text-sm text-muted">{messages.location}</p>
          <Button href={ctas.primary.href} size="sm">
            {ctas.primary.label}
          </Button>
          <Button href={ctas.secondary.href} variant="secondary" size="sm">
            {ctas.secondary.label}
          </Button>
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            className="flex size-12 items-center justify-center rounded-full text-navy hover:bg-navy/5"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={messages.openMenu}
            onClick={() => setOpen(true)}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </Container>
      <div className="hidden bg-navy xl:block">
        <Container as="nav" aria-label="Principal" className="flex items-stretch">
          {primaryNav.map((item) => {
            const itemPath = stripLocaleFromPathname(item.href).path;
            const active =
              itemPath === "/"
                ? path === "/"
                : path === itemPath || path.startsWith(`${itemPath}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-3 py-3 text-sm text-ivory/85 transition-colors hover:text-white",
                  active && "text-white",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 bg-gold" aria-hidden="true" />
                ) : null}
              </Link>
            );
          })}
        </Container>
      </div>
      <MobileMenu locale={locale} open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
