import type { GrowthModality } from "@/types/content";

export const growthModel: GrowthModality[] = [
  {
    title: "Servicios propios",
    description:
      "Acciones que AMELIA coordina y ofrece de manera directa.",
    examples: [
      "Orientación",
      "Talleres",
      "Acompañamiento familiar",
      "Comunicación",
      "Capacitación",
    ],
    icon: "home",
  },
  {
    title: "Programas en alianza",
    description:
      "Iniciativas que crecen junto a instituciones y espacios existentes.",
    examples: [
      "Deporte",
      "Capacitación docente",
      "Investigación",
      "Universidades",
    ],
    icon: "handshake",
  },
  {
    title: "Red de referencia",
    description:
      "Especialidades que se articulan cuando la familia las necesita.",
    examples: [
      "Neurología",
      "Psiquiatría",
      "Psicología",
      "Nutrición",
      "Terapia ocupacional",
      "Especialidades complementarias",
    ],
    icon: "route",
  },
];
