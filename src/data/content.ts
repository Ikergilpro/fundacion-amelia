export const subsidyProgram = {
  title: "Programa de Subsidio para la Autonomía en Familia",
  intro:
    "Fundación AMELIA busca facilitar el acceso de familias con recursos económicos limitados a evaluaciones e intervenciones profesionales que produzcan resultados funcionales.",
  initial: {
    title: "Programa inicial",
    items: [
      "10 niños",
      "Edades de 6 a 9 años",
      "Municipio de Chihuahua",
      "Diagnóstico de autismo o evaluación profesional en proceso",
      "Necesidad económica",
      "Necesidad funcional",
      "Participación comprometida de una persona cuidadora",
    ],
  },
  priorities: {
    title: "Áreas prioritarias",
    items: [
      "Pedir",
      "Elegir",
      "Rechazar",
      "Solicitar ayuda",
      "Alimentación",
      "Autonomía",
      "Rutinas del hogar",
    ],
  },
  process: [
    "Solicitud",
    "Estudio socioeconómico",
    "Valoración inicial",
    "Plan individual",
    "Asignación del apoyo",
    "Intervención",
    "Seguimiento",
    "Evaluación",
  ],
};

export const familyPaths = [
  {
    title: "Tengo preguntas sobre el desarrollo de mi hijo",
    href: "/contacto?motivo=orientacion",
    cta: "Solicitar orientación",
    icon: "phone" as const,
  },
  {
    title: "Recibimos recientemente un diagnóstico",
    href: "/programas/ruta-amelia",
    cta: "Conocer Ruta AMELIA",
    icon: "compass" as const,
  },
  {
    title: "Mi hijo tiene dificultades para comunicarse",
    href: "/programas/amelia-comunica",
    cta: "Conocer AMELIA Comunica",
    icon: "message-circle" as const,
  },
  {
    title: "Necesitamos apoyo escolar",
    href: "/programas/amelia-aprende",
    cta: "Conocer AMELIA Aprende",
    icon: "school" as const,
  },
  {
    title: "Busco apoyo económico",
    href: "/subsidios",
    cta: "Conocer Subsidios AMELIA",
    icon: "coins" as const,
  },
  {
    title: "Quiero aprender estrategias para casa",
    href: "/programas/familias-amelia",
    cta: "Escuela para Familias",
    icon: "book-open" as const,
  },
];

export const professionalProfiles = [
  "Psicología",
  "Comunicación y lenguaje",
  "Terapia ocupacional",
  "Educación",
  "Medicina",
  "Nutrición",
  "Deporte",
  "Tecnología asistiva",
  "Investigación",
];

export const professionalRequirements = [
  "Título cuando corresponda",
  "Cédula profesional cuando aplique",
  "Experiencia comprobable",
  "Respeto a los derechos de las personas autistas",
  "Aceptación del modelo de coordinación",
  "Disposición para trabajar con metas",
  "Disposición para reportar resultados",
];

export const collaborationWays = [
  {
    title: "Patrocina una familia",
    description:
      "Facilita el acceso a evaluaciones e intervenciones con resultados funcionales.",
  },
  {
    title: "Patrocina un programa",
    description:
      "Impulsa una línea de trabajo como comunicación, familias, escuela o deporte.",
  },
  {
    title: "Dona tecnología",
    description:
      "Acerca tablets, comunicadores y herramientas de accesibilidad.",
  },
  {
    title: "Apoya investigación",
    description:
      "Fortalece el Observatorio AMELIA y la generación de evidencia local.",
  },
  {
    title: "Apoya deporte inclusivo",
    description:
      "Ayuda a que espacios existentes abran oportunidades de movimiento.",
  },
  {
    title: "Capacita profesionales",
    description:
      "Comparte conocimiento con la red de colaboración y las escuelas.",
  },
  {
    title: "Ofrece espacios",
    description:
      "Cede o comparte instalaciones para talleres, deporte o formación.",
  },
  {
    title: "Realiza voluntariado profesional",
    description:
      "Aporta tu oficio con un marco de respeto, coordinación y resultados.",
  },
  {
    title: "Realiza un donativo",
    description:
      "El canal de donación en línea se habilitará cuando la operación lo permita.",
  },
];

export const governance = [
  {
    title: "Asamblea",
    description: "Máxima autoridad institucional.",
  },
  {
    title: "Consejo Directivo",
    description: "Estrategia, recursos, vigilancia y resolución de asuntos relevantes.",
  },
  {
    title: "Presidencia",
    description: "Consejo, alianzas institucionales y dirección estratégica.",
  },
  {
    title: "Comité Técnico",
    description: "Calidad, metodología y criterios para prestadores.",
  },
  {
    title: "Coordinación Ejecutiva",
    description: "Administración y operación.",
  },
  {
    title: "Coordinación de Casos",
    description: "Planes individuales, comunicación y seguimiento.",
  },
  {
    title: "Familias",
    description: "Participación en metas, práctica y evaluación.",
  },
];

export const transparencyCommitments = [
  "Uso responsable de recursos",
  "Resultados",
  "Protección de datos",
  "Mejora continua",
  "Información a donantes",
  "Rendición de cuentas",
];

export const contactAudiences = [
  { value: "familia", label: "Soy una familia" },
  { value: "profesional", label: "Soy profesional" },
  { value: "empresa", label: "Represento una empresa" },
  { value: "fundacion", label: "Represento una fundación" },
  { value: "escuela", label: "Represento una escuela" },
  { value: "universidad", label: "Represento una universidad" },
  { value: "voluntariado", label: "Quiero ser voluntario" },
];
