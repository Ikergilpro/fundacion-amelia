"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaPrimary, ctaSecondary, primaryNav } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
        <LogoMark />
        <div className="hidden items-center gap-3 xl:flex">
          <p className="text-sm text-muted">{site.location}</p>
          <Button href={ctaPrimary.href} size="sm">
            {ctaPrimary.label}
          </Button>
          <Button href={ctaSecondary.href} variant="secondary" size="sm">
            {ctaSecondary.label}
          </Button>
        </div>
        <button
          type="button"
            className="flex size-12 items-center justify-center rounded-full text-navy hover:bg-navy/5 xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </Container>
      <div className="hidden bg-navy xl:block">
        <Container as="nav" aria-label="Principal" className="flex items-stretch">
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
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
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
