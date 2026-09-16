import type { Program, ProgramFamily } from "@/types/content";

export const programFamilies: ProgramFamily[] = [
  {
    id: "desarrollo",
    name: "Desarrollo",
    description:
      "Comunicación, intervención temprana y bienestar a través del movimiento.",
  },
  {
    id: "inclusion",
    name: "Inclusión",
    description:
      "Participación en la escuela y acceso a herramientas que facilitan la vida cotidiana.",
  },
  {
    id: "familias",
    name: "Familias",
    description:
      "Orientación desde el primer momento y formación para el acompañamiento en casa.",
  },
  {
    id: "conocimiento",
    name: "Conocimiento",
    description:
      "Información, medición y alianzas para mejorar los programas con evidencia.",
  },
];

export const programsIntro =
  "No todas las personas autistas necesitan los mismos apoyos. Nuestros programas buscan acompañar diferentes etapas y necesidades de la persona, su familia, su escuela y su comunidad.";

export const programs: Program[] = [
  {
    slug: "amelia-comunica",
    name: "AMELIA Comunica",
    subtitle: "Comunicación funcional",
    objective:
      "Desarrollar comunicación funcional de acuerdo con las necesidades de cada persona.",
    summary:
      "Fortalecemos las formas de comunicar que cada persona ya tiene y las que puede desarrollar, en casa y en la escuela.",
    audience: ["Personas autistas", "Familias", "Escuelas"],
    activities: [
      "Comunicación espontánea",
      "Pedir",
      "Rechazar",
      "Elegir",
      "Solicitar ayuda",
      "Turnos",
      "Conversación",
      "CAA/AAC",
      "Pictogramas",
      "Comunicación en casa",
      "Comunicación en escuela",
    ],
    icon: "message-circle",
    family: "desarrollo",
    status: "active",
    highlight: "Comunicar no significa únicamente hablar.",
    extraSections: [
      {
        title: "Todas las formas de comunicar cuentan",
        description:
          "AMELIA reconoce el habla y también otras formas de comunicación.",
        items: [
          "Habla",
          "Gestos",
          "Imágenes",
          "Pictogramas",
          "Dispositivos",
          "Comunicación aumentativa y alternativa",
        ],
      },
    ],
    seoDescription:
      "AMELIA Comunica desarrolla comunicación funcional reconociendo el habla, los gestos, los pictogramas y la comunicación aumentativa y alternativa.",
  },
  {
    slug: "amelia-crece",
    name: "AMELIA Crece",
    subtitle: "Intervención temprana",
    objective:
      "Fortalecer habilidades desde edades tempranas mediante intervención individualizada y participación familiar.",
    summary:
      "Acompañamos la primera infancia con juego, rutinas y participación activa de la familia.",
    audience: ["Primera infancia", "Familias"],
    activities: [
      "Juego compartido",
      "Imitación",
      "Atención conjunta",
      "Comunicación",
      "Rutinas",
      "Habilidades adaptativas",
      "Preparación preescolar",
      "Capacitación a padres",
    ],
    icon: "sprout",
    family: "desarrollo",
    status: "active",
    seoDescription:
      "AMELIA Crece es el programa de intervención temprana para la primera infancia y sus familias.",
  },
  {
    slug: "amelia-en-movimiento",
    name: "AMELIA en Movimiento",
    subtitle: "Deporte y bienestar",
    objective:
      "Utilizar actividad física y deporte como una herramienta para favorecer salud, participación, autonomía, disfrute y convivencia.",
    summary:
      "El movimiento es una vía para la salud, el disfrute y la participación. No buscamos crear todos los espacios: queremos que los existentes sean más inclusivos.",
    audience: ["Niñas, niños y jóvenes", "Familias", "Escuelas y clubes"],
    activities: [
      "Psicomotricidad",
      "Equilibrio",
      "Coordinación",
      "Circuitos",
      "Actividades familiares",
      "Natación",
      "Atletismo",
      "Bicicleta",
      "Caminata",
      "Senderismo",
      "Fútbol adaptado",
      "Basquetbol",
      "Danza",
      "Gimnasia",
    ],
    icon: "activity",
    family: "desarrollo",
    status: "planned",
    highlight:
      "No queremos crear todos los espacios deportivos. Queremos ayudar a que los espacios existentes sean más inclusivos.",
    extraSections: [
      {
        title: "Movimiento temprano",
        items: [
          "Psicomotricidad",
          "Equilibrio",
          "Coordinación",
          "Circuitos",
          "Actividades familiares",
        ],
      },
      {
        title: "Deporte recreativo",
        items: [
          "Natación",
          "Atletismo",
          "Bicicleta",
          "Caminata",
          "Senderismo",
          "Fútbol adaptado",
          "Basquetbol",
          "Danza",
          "Gimnasia",
        ],
      },
      {
        title: "Deporte inclusivo",
        description:
          "Alianzas con gimnasios, clubes, universidades, escuelas y entrenadores para abrir espacios existentes.",
      },
    ],
    seoDescription:
      "AMELIA en Movimiento impulsa actividad física y deporte inclusivo como vía de salud, autonomía y convivencia.",
  },
  {
    slug: "amelia-aprende",
    name: "AMELIA Aprende",
    subtitle: "Inclusión educativa",
    objective:
      "Facilitar la participación, aprendizaje y permanencia dentro de la escuela.",
    summary:
      "Coordinamos familia y escuela para identificar apoyos, adaptaciones y transiciones con mayor claridad.",
    audience: ["Estudiantes", "Familias", "Docentes", "Escuelas"],
    activities: [
      "Identificación de apoyos",
      "Coordinación escuela-familia",
      "Capacitación docente",
      "Adaptaciones",
      "Apoyos visuales",
      "Acompañamiento en transiciones",
      "Orientación a escuelas",
    ],
    icon: "graduation-cap",
    family: "inclusion",
    status: "active",
    seoDescription:
      "AMELIA Aprende facilita la inclusión educativa de estudiantes autistas mediante coordinación, adaptaciones y apoyo a escuelas.",
  },
  {
    slug: "amelia-conecta",
    name: "AMELIA Conecta",
    subtitle: "Tecnología y accesibilidad",
    objective:
      "Facilitar comunicación, aprendizaje y autonomía mediante herramientas accesibles.",
    summary:
      "Acercamos pictogramas, comunicadores y recursos digitales con un desarrollo progresivo apoyado en alianzas.",
    audience: ["Personas autistas", "Familias", "Profesionales"],
    activities: [
      "Banco de pictogramas",
      "Comunicadores",
      "Tablets",
      "Préstamo de dispositivos",
      "Capacitación CAA",
      "Recursos digitales",
      "Biblioteca de materiales",
    ],
    icon: "tablet",
    family: "inclusion",
    status: "development",
    extraSections: [
      {
        title: "Biblioteca AMELIA",
        description: "Un acervo en construcción para apoyar la vida cotidiana.",
        items: [
          "Materiales didácticos",
          "Juguetes adaptados",
          "Recursos visuales",
          "Libros",
          "Comunicadores",
          "Herramientas de autonomía",
        ],
        note: "Este programa se desarrollará progresivamente mediante alianzas, donaciones y patrocinadores.",
      },
    ],
    seoDescription:
      "AMELIA Conecta facilita comunicación y autonomía con tecnología accesible, pictogramas y una biblioteca de materiales.",
  },
  {
    slug: "ruta-amelia",
    name: "Ruta AMELIA",
    subtitle: "Orientación y navegación",
    objective:
      "Ayudar a las familias desde la primera sospecha, diagnóstico o necesidad de apoyo.",
    summary:
      "Un primer punto de encuentro para ordenar preguntas, necesidades y siguientes pasos.",
    audience: ["Familias", "Cuidadores", "Personas autistas"],
    activities: [
      "Entrevista inicial",
      "Orientación",
      "Mapa de necesidades",
      "Directorio de especialistas",
      "Canalización",
      "Acompañamiento",
      "Seguimiento",
    ],
    icon: "compass",
    family: "familias",
    status: "active",
    seoDescription:
      "Ruta AMELIA orienta a familias desde la primera sospecha, el diagnóstico o la necesidad de apoyo.",
  },
  {
    slug: "familias-amelia",
    name: "Familias AMELIA",
    subtitle: "Acompañamiento familiar",
    objective: "Convertir a la familia en parte activa del proceso de desarrollo.",
    summary:
      "Talleres, grupos de apoyo y una Escuela para Familias para llevar estrategias al hogar.",
    audience: ["Madres, padres y cuidadores", "Hermanas y hermanos"],
    activities: [
      "Escuela para Familias",
      "Talleres",
      "Grupos de apoyo",
      "Entrenamiento en casa",
      "Convivencia",
      "Orientación a hermanos",
      "Bienestar de cuidadores",
    ],
    icon: "users",
    family: "familias",
    status: "active",
    extraSections: [
      {
        title: "Escuela para Familias AMELIA",
        description: "Temas posibles de formación, según las necesidades de cada grupo.",
        items: [
          "Comprendiendo el autismo",
          "Qué hacer después del diagnóstico",
          "Comunicación funcional",
          "Cómo enseñar a pedir",
          "Cómo enseñar sí y no",
          "Cómo enseñar a elegir",
          "Rutinas visuales",
          "Autonomía",
          "Escuela",
          "Transiciones",
          "Adolescencia",
          "Seguridad",
          "Tecnología",
          "Comunicación aumentativa y alternativa",
          "Bienestar de cuidadores",
        ],
      },
    ],
    seoDescription:
      "Familias AMELIA forma y acompaña a cuidadores mediante talleres, grupos de apoyo y la Escuela para Familias.",
  },
  {
    slug: "observatorio-amelia",
    name: "Observatorio AMELIA",
    subtitle: "Investigación e innovación",
    objective:
      "Generar información que permita mejorar los programas y conocer las necesidades reales de las personas autistas y sus familias.",
    summary:
      "Medimos para mejorar, no únicamente para reportar. Un espacio para universidades, prácticas y proyectos piloto.",
    audience: ["Universidades", "Investigadores", "Familias", "Aliados"],
    activities: [
      "Encuestas",
      "Medición de resultados",
      "Indicadores",
      "Alianzas con universidades",
      "Estudios",
      "Investigación aplicada",
      "Prácticas profesionales",
      "Servicio social",
      "Tesis",
      "Proyectos piloto",
    ],
    icon: "binoculars",
    family: "conocimiento",
    status: "development",
    highlight: "Medir para mejorar. No medir únicamente para reportar.",
    extraSections: [
      {
        title: "Informe AMELIA sobre Autismo en Chihuahua",
        description:
          "Un espacio futuro para reunir información local que oriente programas, políticas y alianzas.",
        note: "Proyecto en desarrollo.",
      },
    ],
    seoDescription:
      "El Observatorio AMELIA genera información aplicada sobre autismo en Chihuahua para mejorar programas y alianzas.",
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function getProgramsByFamily(familyId: ProgramFamily["id"]) {
  return programs.filter((program) => program.family === familyId);
}
