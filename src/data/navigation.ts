import type { NavItem } from "@/types/content";

export const primaryNav: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/programas", label: "Programas" },
  { href: "/subsidios", label: "Subsidios AMELIA" },
  { href: "/familias", label: "Familias" },
  { href: "/profesionales", label: "Profesionales" },
  { href: "/donantes", label: "Donantes y Aliados" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/contacto", label: "Contacto" },
];

export const ctaPrimary: NavItem = {
  href: "/contacto?motivo=orientacion",
  label: "Solicitar orientación",
};

export const ctaSecondary: NavItem = {
  href: "/donantes",
  label: "Quiero apoyar",
};

export const footerColumns = [
  {
    title: "Fundación",
    links: [
      { href: "/nosotros", label: "Nosotros" },
      { href: "/nosotros#historia", label: "Historia" },
      { href: "/nosotros#mision", label: "Misión" },
      { href: "/nosotros#vision", label: "Visión" },
      { href: "/transparencia", label: "Transparencia" },
    ],
  },
  {
    title: "Programas",
    links: [
      { href: "/programas/ruta-amelia", label: "Ruta AMELIA" },
      { href: "/programas/amelia-comunica", label: "AMELIA Comunica" },
      { href: "/programas/amelia-crece", label: "AMELIA Crece" },
      { href: "/programas/amelia-aprende", label: "AMELIA Aprende" },
      { href: "/programas/familias-amelia", label: "Familias AMELIA" },
      { href: "/programas/amelia-conecta", label: "AMELIA Conecta" },
      { href: "/programas/observatorio-amelia", label: "Observatorio" },
      {
        href: "/programas/amelia-en-movimiento",
        label: "AMELIA en Movimiento",
      },
    ],
  },
  {
    title: "Participa",
    links: [
      { href: "/familias", label: "Familias" },
      { href: "/profesionales", label: "Profesionales" },
      { href: "/donantes", label: "Donantes" },
      { href: "/donantes#empresas", label: "Empresas" },
      { href: "/contacto?motivo=universidad", label: "Universidades" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacidad", label: "Aviso de privacidad" },
      { href: "/terminos", label: "Términos" },
      { href: "/transparencia", label: "Transparencia" },
    ],
  },
] as const;
