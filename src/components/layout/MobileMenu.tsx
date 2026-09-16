"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getCtas, getPrimaryNav } from "@/i18n/navigation";
import { stripLocaleFromPathname } from "@/i18n/path";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  locale: Locale;
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ locale, open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const messages = getMessages(locale);
  const primaryNav = getPrimaryNav(locale);
  const ctas = getCtas(locale);
  const { path } = stripLocaleFromPathname(pathname);

  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      lastFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] xl:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-movil-titulo"
    >
      <button
        type="button"
        className="absolute inset-0 bg-deep-navy/50"
        aria-label={messages.closeMenu}
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ivory shadow-2xl">
        <div className="flex items-center justify-between border-b border-navy/10 px-5 py-4">
          <p id="menu-movil-titulo" className="sr-only">
            {messages.navTitle}
          </p>
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex size-11 items-center justify-center rounded-full text-navy hover:bg-navy/5"
            aria-label={messages.closeMenu}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {primaryNav.map((item) => {
              const itemPath = stripLocaleFromPathname(item.href).path;
              const active =
                itemPath === "/"
                  ? path === "/"
                  : path === itemPath || path.startsWith(`${itemPath}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-lg text-navy",
                      active && "bg-navy/5 font-medium",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="space-y-3 border-t border-navy/10 px-5 py-5">
          <div className="flex justify-center pb-2">
            <LanguageSwitcher locale={locale} />
          </div>
          <Button href={ctas.primary.href} className="w-full" onClick={onClose}>
            {ctas.primary.label}
          </Button>
          <Button
            href={ctas.secondary.href}
            variant="secondary"
            className="w-full"
            onClick={onClose}
          >
            {ctas.secondary.label}
          </Button>
          <p className="text-center text-sm text-muted">{messages.location}</p>
        </div>
      </div>
    </div>
  );
}
