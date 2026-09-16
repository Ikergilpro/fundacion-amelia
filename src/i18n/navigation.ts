import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import type { NavItem } from "@/types/content";

export function getPrimaryNav(locale: Locale): NavItem[] {
  const messages = getMessages(locale);
  const href = (path: string) => localizedPath(locale, path);

  return [
    { href: href("/"), label: messages.nav.home },
    { href: href("/nosotros"), label: messages.nav.about },
    { href: href("/programas"), label: messages.nav.programs },
    { href: href("/subsidios"), label: messages.nav.subsidies },
    { href: href("/familias"), label: messages.nav.families },
    { href: href("/profesionales"), label: messages.nav.professionals },
    { href: href("/donantes"), label: messages.nav.donors },
    { href: href("/transparencia"), label: messages.nav.transparency },
    { href: href("/contacto"), label: messages.nav.contact },
  ];
}

export function getCtas(locale: Locale) {
  const messages = getMessages(locale);
  const href = (path: string) => localizedPath(locale, path);

  return {
    primary: {
      href: href("/contacto?motivo=orientacion"),
      label: messages.cta.orientation,
    },
    secondary: {
      href: href("/donantes"),
      label: messages.cta.support,
    },
  };
}

export function getFooterColumns(locale: Locale) {
  const messages = getMessages(locale);
  const href = (path: string) => localizedPath(locale, path);

  return [
    {
      title: messages.footer.foundation,
      links: [
        { href: href("/nosotros"), label: messages.nav.about },
        { href: href("/nosotros#historia"), label: messages.footer.history },
        { href: href("/nosotros#mision"), label: messages.footer.mission },
        { href: href("/nosotros#vision"), label: messages.footer.vision },
        { href: href("/transparencia"), label: messages.footer.transparency },
      ],
    },
    {
      title: messages.footer.programs,
      links: [
        { href: href("/programas/ruta-amelia"), label: "Ruta AMELIA" },
        { href: href("/programas/amelia-comunica"), label: "AMELIA Comunica" },
        { href: href("/programas/amelia-crece"), label: "AMELIA Crece" },
        { href: href("/programas/amelia-aprende"), label: "AMELIA Aprende" },
        { href: href("/programas/familias-amelia"), label: "Familias AMELIA" },
        { href: href("/programas/amelia-conecta"), label: "AMELIA Conecta" },
        {
          href: href("/programas/observatorio-amelia"),
          label: messages.footer.observatory,
        },
        {
          href: href("/programas/amelia-en-movimiento"),
          label: "AMELIA en Movimiento",
        },
      ],
    },
    {
      title: messages.footer.participate,
      links: [
        { href: href("/familias"), label: messages.footer.families },
        { href: href("/profesionales"), label: messages.footer.professionals },
        { href: href("/donantes"), label: messages.footer.donors },
        { href: href("/donantes#empresas"), label: messages.footer.companies },
        {
          href: href("/contacto?motivo=universidad"),
          label: messages.footer.universities,
        },
      ],
    },
    {
      title: messages.footer.legal,
      links: [
        { href: href("/privacidad"), label: messages.footer.privacy },
        { href: href("/terminos"), label: messages.footer.terms },
        { href: href("/transparencia"), label: messages.footer.transparency },
      ],
    },
  ];
}
