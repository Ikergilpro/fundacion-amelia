export const site = {
  name: "Fundación AMELIA A.C.",
  shortName: "AMELIA",
  legalName: "Fundación AMELIA A.C.",
  acronym:
    "Acompañamiento Multidisciplinario, Empatía, Lenguajes, Inclusión y Autonomía",
  tagline: "Cada forma de comunicar abre un camino.",
  location: "Chihuahua, México",
  /**
   * Sustituir cuando exista dominio institucional.
   * No inventar correo, teléfono ni domicilio.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /**
   * Coloca el logotipo oficial en /public/brand/logo.png (o logo.svg)
   * y cambia este valor a true. No rediseñar el emblema.
   */
  brand: {
    hasOfficialLogo: true,
    logoSrc: "/brand/logo.jpg",
    logoAlt: "Fundación AMELIA A.C.",
  },
  seo: {
    title:
      "Fundación AMELIA | Autismo, comunicación, autonomía e inclusión en Chihuahua",
    description:
      "Fundación AMELIA acompaña a personas autistas y sus familias mediante orientación, comunicación funcional, inclusión educativa, tecnología, deporte, apoyo familiar e investigación.",
  },
} as const;

export const mission =
  "Facilitar a niños autistas y sus familias el acceso a evaluaciones e intervenciones profesionales coordinadas, orientadas al desarrollo de comunicación funcional, autonomía y habilidades para la vida cotidiana.";

export const vision =
  "Ser un centro integral de referencia para niños autistas y sus familias, reconocido por la calidad de sus servicios, su acompañamiento familiar y sus resultados en autonomía e inclusión.";

export const purpose =
  "Mejorar la comunicación, autonomía, participación y calidad de vida de las personas autistas y sus familias.";

export const hero = {
  title: "Cada forma de comunicar abre un camino.",
  subtitle:
    "Acompañamos a personas autistas y sus familias para fortalecer la comunicación, la autonomía, la inclusión y la participación en la vida cotidiana.",
  pillars: [
    "Acompañamiento",
    "Comunicación",
    "Inclusión",
    "Autonomía",
    "Familias",
  ] as const,
};

export const history = {
  title: "Una historia personal que busca convertirse en una causa colectiva.",
  body: [
    "AMELIA nace del amor de una familia que, al recorrer el camino del autismo, comprendió que muchas otras familias enfrentan las mismas preguntas, barreras e incertidumbres.",
    "Lo que comenzó como la búsqueda de mejores oportunidades para una niña se transforma en una causa colectiva: acompañar a otras personas y sus familias para que puedan comunicarse, participar y desarrollar mayor autonomía.",
    "Por eso AMELIA significa Acompañamiento Multidisciplinario, Empatía, Lenguajes, Inclusión y Autonomía.",
  ],
};

export const purposeConcepts = [
  {
    title: "Comunicación funcional",
    description:
      "Reconocer y fortalecer todas las formas de comunicar que resultan útiles en la vida cotidiana.",
    icon: "messages-square",
  },
  {
    title: "Autonomía",
    description:
      "Apoyar habilidades que permitan mayor independencia en casa, la escuela y la comunidad.",
    icon: "person-standing",
  },
  {
    title: "Participación",
    description:
      "Buscar presencia real y significativa en los espacios donde cada persona vive y aprende.",
    icon: "handshake",
  },
  {
    title: "Familia",
    description:
      "Incluir a quienes acompañan día a día como parte activa de las metas y las decisiones.",
    icon: "heart-handshake",
  },
] as const;

export const finalCta = {
  title:
    "Cada persona tiene una forma distinta de aprender, comunicar y participar.",
  text: "Nuestro trabajo comienza escuchando.",
};
