"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { switchLocalePath } from "@/i18n/path";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const messages = getMessages(locale);

  return (
    <nav aria-label={messages.language} className="flex items-center gap-1 text-sm">
      {locales.map((item) => {
        const active = item === locale;
        const href = switchLocalePath(pathname, item);
        return (
          <Link
            key={item}
            href={href}
            hrefLang={item === "es" ? "es-MX" : "en"}
            lang={item === "es" ? "es-MX" : "en"}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "rounded-full bg-navy px-2.5 py-1 font-semibold text-ivory"
                : "rounded-full px-2.5 py-1 text-muted hover:bg-navy/5 hover:text-navy"
            }
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}

export function LanguageSwitcherOnDark({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const messages = getMessages(locale);

  return (
    <nav aria-label={messages.language} className="flex items-center gap-1 text-sm">
      {locales.map((item) => {
        const active = item === locale;
        const href = switchLocalePath(pathname, item);
        return (
          <Link
            key={item}
            href={href}
            hrefLang={item === "es" ? "es-MX" : "en"}
            lang={item === "es" ? "es-MX" : "en"}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "rounded-full bg-ivory px-2.5 py-1 font-semibold text-navy"
                : "rounded-full px-2.5 py-1 text-ivory/70 hover:bg-white/10 hover:text-white"
            }
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
