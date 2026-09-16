export type ProgramStatus = "active" | "development" | "planned";

export type ProgramFamilyId =
  | "desarrollo"
  | "inclusion"
  | "familias"
  | "conocimiento";

export type IconName =
  | "compass"
  | "message-circle"
  | "sprout"
  | "graduation-cap"
  | "users"
  | "tablet"
  | "binoculars"
  | "activity"
  | "heart-handshake"
  | "messages-square"
  | "person-standing"
  | "handshake"
  | "shield-check"
  | "scale"
  | "book-open"
  | "sparkles"
  | "map"
  | "phone"
  | "building-2"
  | "cpu"
  | "dumbbell"
  | "microscope"
  | "home"
  | "school"
  | "hand-helping"
  | "coins"
  | "clipboard-list"
  | "eye"
  | "route";

export interface ProgramFamily {
  id: ProgramFamilyId;
  name: string;
  description: string;
}

export interface ProgramSection {
  title: string;
  description?: string;
  items?: string[];
  note?: string;
  highlight?: string;
}

export interface Program {
  slug: string;
  name: string;
  subtitle: string;
  objective: string;
  summary: string;
  audience: string[];
  activities: string[];
  icon: IconName;
  family: ProgramFamilyId;
  status?: ProgramStatus;
  highlight?: string;
  extraSections?: ProgramSection[];
  seoDescription: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface AmeliaLetter {
  letter: string;
  word: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface TimelineYear {
  year: string;
  title: string;
  items: string[];
}

export interface ProcessStepItem {
  step: number;
  title: string;
  description: string;
}

export interface GrowthModality {
  title: string;
  description: string;
  examples: string[];
  icon: IconName;
}

export interface StatPlaceholder {
  label: string;
  /** Visible placeholder until operations begin. Never invent figures. */
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FamilyPath {
  title: string;
  href: string;
  cta: string;
  icon: IconName;
}

export interface ContactAudienceOption {
  value: string;
  label: string;
}
