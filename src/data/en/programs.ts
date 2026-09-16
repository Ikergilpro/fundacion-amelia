import type { Program, ProgramFamily } from "@/types/content";

export const programFamiliesEn: ProgramFamily[] = [
  {
    id: "desarrollo",
    name: "Development",
    description:
      "Communication, early intervention and wellbeing through movement.",
  },
  {
    id: "inclusion",
    name: "Inclusion",
    description:
      "Participation at school and access to tools that make everyday life easier.",
  },
  {
    id: "familias",
    name: "Families",
    description:
      "Guidance from the first moment and training for accompaniment at home.",
  },
  {
    id: "conocimiento",
    name: "Knowledge",
    description:
      "Information, measurement and alliances to improve programs with evidence.",
  },
];

export const programsIntroEn =
  "Not every autistic person needs the same supports. Our programs seek to accompany different stages and needs of the person, their family, their school and their community.";

export const programsEn: Program[] = [
  {
    slug: "amelia-comunica",
    name: "AMELIA Comunica",
    subtitle: "Functional communication",
    objective:
      "Develop functional communication according to each person’s needs.",
    summary:
      "We strengthen the ways of communicating that each person already has and those they can develop, at home and at school.",
    audience: ["Autistic people", "Families", "Schools"],
    activities: [
      "Spontaneous communication",
      "Requesting",
      "Refusing",
      "Choosing",
      "Asking for help",
      "Turns",
      "Conversation",
      "AAC",
      "Pictograms",
      "Communication at home",
      "Communication at school",
    ],
    icon: "message-circle",
    family: "desarrollo",
    status: "active",
    highlight: "Communicating does not mean only speaking.",
    extraSections: [
      {
        title: "Every way of communicating counts",
        description:
          "AMELIA recognizes speech and also other forms of communication.",
        items: [
          "Speech",
          "Gestures",
          "Images",
          "Pictograms",
          "Devices",
          "Augmentative and alternative communication",
        ],
      },
    ],
    seoDescription:
      "AMELIA Comunica develops functional communication recognizing speech, gestures, pictograms and augmentative and alternative communication.",
  },
  {
    slug: "amelia-crece",
    name: "AMELIA Crece",
    subtitle: "Early intervention",
    objective:
      "Strengthen skills from early ages through individualized intervention and family participation.",
    summary:
      "We accompany early childhood with play, routines and active family participation.",
    audience: ["Early childhood", "Families"],
    activities: [
      "Shared play",
      "Imitation",
      "Joint attention",
      "Communication",
      "Routines",
      "Adaptive skills",
      "Preschool preparation",
      "Parent training",
    ],
    icon: "sprout",
    family: "desarrollo",
    status: "active",
    seoDescription:
      "AMELIA Crece is the early intervention program for early childhood and their families.",
  },
  {
    slug: "amelia-en-movimiento",
    name: "AMELIA en Movimiento",
    subtitle: "Sport and wellbeing",
    objective:
      "Use physical activity and sport as a tool to foster health, participation, autonomy, enjoyment and coexistence.",
    summary:
      "Movement is a path to health, enjoyment and participation. We do not seek to create every space: we want existing ones to be more inclusive.",
    audience: ["Girls, boys and young people", "Families", "Schools and clubs"],
    activities: [
      "Psychomotor skills",
      "Balance",
      "Coordination",
      "Circuits",
      "Family activities",
      "Swimming",
      "Athletics",
      "Cycling",
      "Walking",
      "Hiking",
      "Adapted soccer",
      "Basketball",
      "Dance",
      "Gymnastics",
    ],
    icon: "activity",
    family: "desarrollo",
    status: "planned",
    highlight:
      "We do not want to create every sports space. We want to help existing spaces become more inclusive.",
    extraSections: [
      {
        title: "Early movement",
        items: [
          "Psychomotor skills",
          "Balance",
          "Coordination",
          "Circuits",
          "Family activities",
        ],
      },
      {
        title: "Recreational sport",
        items: [
          "Swimming",
          "Athletics",
          "Cycling",
          "Walking",
          "Hiking",
          "Adapted soccer",
          "Basketball",
          "Dance",
          "Gymnastics",
        ],
      },
      {
        title: "Inclusive sport",
        description:
          "Alliances with gyms, clubs, universities, schools and coaches to open existing spaces.",
      },
    ],
    seoDescription:
      "AMELIA en Movimiento promotes physical activity and inclusive sport as a path to health, autonomy and coexistence.",
  },
  {
    slug: "amelia-aprende",
    name: "AMELIA Aprende",
    subtitle: "Educational inclusion",
    objective:
      "Facilitate participation, learning and remaining in school.",
    summary:
      "We coordinate family and school to identify supports, adaptations and transitions with greater clarity.",
    audience: ["Students", "Families", "Teachers", "Schools"],
    activities: [
      "Identification of supports",
      "School-family coordination",
      "Teacher training",
      "Adaptations",
      "Visual supports",
      "Support in transitions",
      "Guidance for schools",
    ],
    icon: "graduation-cap",
    family: "inclusion",
    status: "active",
    seoDescription:
      "AMELIA Aprende facilitates educational inclusion of autistic students through coordination, adaptations and support for schools.",
  },
  {
    slug: "amelia-conecta",
    name: "AMELIA Conecta",
    subtitle: "Technology and accessibility",
    objective:
      "Facilitate communication, learning and autonomy through accessible tools.",
    summary:
      "We bring pictograms, communicators and digital resources closer, with progressive development supported by alliances.",
    audience: ["Autistic people", "Families", "Professionals"],
    activities: [
      "Pictogram bank",
      "Communicators",
      "Tablets",
      "Device lending",
      "AAC training",
      "Digital resources",
      "Materials library",
    ],
    icon: "tablet",
    family: "inclusion",
    status: "development",
    extraSections: [
      {
        title: "AMELIA Library",
        description: "A collection in progress to support everyday life.",
        items: [
          "Teaching materials",
          "Adapted toys",
          "Visual resources",
          "Books",
          "Communicators",
          "Autonomy tools",
        ],
        note: "This program will be developed progressively through alliances, donations and sponsors.",
      },
    ],
    seoDescription:
      "AMELIA Conecta facilitates communication and autonomy with accessible technology, pictograms and a materials library.",
  },
  {
    slug: "ruta-amelia",
    name: "Ruta AMELIA",
    subtitle: "Guidance and navigation",
    objective:
      "Help families from the first concern, diagnosis or need for support.",
    summary:
      "A first meeting point to organize questions, needs and next steps.",
    audience: ["Families", "Caregivers", "Autistic people"],
    activities: [
      "Initial interview",
      "Guidance",
      "Needs map",
      "Specialist directory",
      "Referral",
      "Accompaniment",
      "Follow-up",
    ],
    icon: "compass",
    family: "familias",
    status: "active",
    seoDescription:
      "Ruta AMELIA guides families from the first concern, diagnosis or need for support.",
  },
  {
    slug: "familias-amelia",
    name: "Familias AMELIA",
    subtitle: "Family accompaniment",
    objective: "Make the family an active part of the development process.",
    summary:
      "Workshops, support groups and a School for Families to take strategies into the home.",
    audience: ["Mothers, fathers and caregivers", "Sisters and brothers"],
    activities: [
      "School for Families",
      "Workshops",
      "Support groups",
      "Home training",
      "Gatherings",
      "Guidance for siblings",
      "Caregiver wellbeing",
    ],
    icon: "users",
    family: "familias",
    status: "active",
    extraSections: [
      {
        title: "AMELIA School for Families",
        description:
          "Possible training topics, according to the needs of each group.",
        items: [
          "Understanding autism",
          "What to do after the diagnosis",
          "Functional communication",
          "How to teach requesting",
          "How to teach yes and no",
          "How to teach choosing",
          "Visual routines",
          "Autonomy",
          "School",
          "Transitions",
          "Adolescence",
          "Safety",
          "Technology",
          "Augmentative and alternative communication",
          "Caregiver wellbeing",
        ],
      },
    ],
    seoDescription:
      "Familias AMELIA trains and accompanies caregivers through workshops, support groups and the School for Families.",
  },
  {
    slug: "observatorio-amelia",
    name: "Observatorio AMELIA",
    subtitle: "Research and innovation",
    objective:
      "Generate information that makes it possible to improve programs and understand the real needs of autistic people and their families.",
    summary:
      "We measure to improve, not only to report. A space for universities, internships and pilot projects.",
    audience: ["Universities", "Researchers", "Families", "Allies"],
    activities: [
      "Surveys",
      "Results measurement",
      "Indicators",
      "University alliances",
      "Studies",
      "Applied research",
      "Professional internships",
      "Social service",
      "Theses",
      "Pilot projects",
    ],
    icon: "binoculars",
    family: "conocimiento",
    status: "development",
    highlight: "Measure to improve. Do not measure only to report.",
    extraSections: [
      {
        title: "AMELIA Report on Autism in Chihuahua",
        description:
          "A future space to gather local information that guides programs, policies and alliances.",
        note: "Project in development.",
      },
    ],
    seoDescription:
      "The AMELIA Observatory generates applied information on autism in Chihuahua to improve programs and alliances.",
  },
];
