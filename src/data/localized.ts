import type { Locale } from "@/i18n/config";
import { ameliaLetters, ameliaMeaningTitle } from "@/data/amelia";
import {
  collaborationWays,
  familyPaths,
  governance,
  professionalProfiles,
  professionalRequirements,
  subsidyProgram,
  transparencyCommitments,
} from "@/data/content";
import { faqs } from "@/data/faqs";
import { growthModel } from "@/data/growth";
import { attentionModel } from "@/data/process";
import {
  getProgram as getProgramEs,
  getProgramsByFamily as getProgramsByFamilyEs,
  programFamilies,
  programs,
  programsIntro,
} from "@/data/programs";
import {
  finalCta,
  hero,
  history,
  mission,
  purpose,
  purposeConcepts,
  vision,
  site,
} from "@/data/site";
import { impactNote, impactStats } from "@/data/stats";
import { developmentPlan } from "@/data/timeline";
import { values } from "@/data/values";
import { ameliaLettersEn, ameliaMeaningTitleEn } from "@/data/en/amelia";
import {
  collaborationWaysEn,
  familyPathsEn,
  governanceEn,
  professionalProfilesEn,
  professionalRequirementsEn,
  subsidyProgramEn,
  transparencyCommitmentsEn,
} from "@/data/en/content";
import { faqsEn } from "@/data/en/faqs";
import { growthModelEn } from "@/data/en/growth";
import {
  programFamiliesEn,
  programsEn,
  programsIntroEn,
} from "@/data/en/programs";
import { attentionModelEn } from "@/data/en/process";
import { siteCopyEn } from "@/data/en/site";
import { impactNoteEn, impactStatsEn } from "@/data/en/stats";
import { developmentPlanEn } from "@/data/en/timeline";
import { valuesEn } from "@/data/en/values";
import type { ProgramFamily } from "@/types/content";

export function getSiteCopy(locale: Locale) {
  if (locale === "en") {
    return {
      acronym: siteCopyEn.acronym,
      tagline: siteCopyEn.tagline,
      seo: siteCopyEn.seo,
      hero: siteCopyEn.hero,
      history: siteCopyEn.history,
      mission: siteCopyEn.mission,
      vision: siteCopyEn.vision,
      purpose: siteCopyEn.purpose,
      purposeConcepts: siteCopyEn.purposeConcepts,
      finalCta: siteCopyEn.finalCta,
    };
  }

  return {
    acronym: site.acronym,
    tagline: site.tagline,
    seo: site.seo,
    hero,
    history,
    mission,
    vision,
    purpose,
    purposeConcepts,
    finalCta,
  };
}

export function getAmelia(locale: Locale) {
  return locale === "en"
    ? { title: ameliaMeaningTitleEn, letters: ameliaLettersEn }
    : { title: ameliaMeaningTitle, letters: ameliaLetters };
}

export function getValues(locale: Locale) {
  return locale === "en" ? valuesEn : values;
}

export function getDevelopmentPlan(locale: Locale) {
  return locale === "en" ? developmentPlanEn : developmentPlan;
}

export function getAttentionModel(locale: Locale) {
  return locale === "en" ? attentionModelEn : attentionModel;
}

export function getGrowthModel(locale: Locale) {
  return locale === "en" ? growthModelEn : growthModel;
}

export function getImpact(locale: Locale) {
  return locale === "en"
    ? { note: impactNoteEn, stats: impactStatsEn }
    : { note: impactNote, stats: impactStats };
}

export function getFaqs(locale: Locale) {
  return locale === "en" ? faqsEn : faqs;
}

export function getSubsidyProgram(locale: Locale) {
  return locale === "en" ? subsidyProgramEn : subsidyProgram;
}

export function getFamilyPaths(locale: Locale) {
  return locale === "en" ? familyPathsEn : familyPaths;
}

export function getProfessionalContent(locale: Locale) {
  return locale === "en"
    ? {
        profiles: professionalProfilesEn,
        requirements: professionalRequirementsEn,
      }
    : {
        profiles: professionalProfiles,
        requirements: professionalRequirements,
      };
}

export function getCollaborationWays(locale: Locale) {
  return locale === "en" ? collaborationWaysEn : collaborationWays;
}

export function getGovernance(locale: Locale) {
  return locale === "en" ? governanceEn : governance;
}

export function getTransparencyCommitments(locale: Locale) {
  return locale === "en" ? transparencyCommitmentsEn : transparencyCommitments;
}

export function getProgramFamilies(locale: Locale) {
  return locale === "en" ? programFamiliesEn : programFamilies;
}

export function getProgramsIntro(locale: Locale) {
  return locale === "en" ? programsIntroEn : programsIntro;
}

export function getPrograms(locale: Locale) {
  return locale === "en" ? programsEn : programs;
}

export function getProgram(locale: Locale, slug: string) {
  if (locale === "en") {
    return programsEn.find((program) => program.slug === slug);
  }
  return getProgramEs(slug);
}

export function getProgramsByFamily(
  locale: Locale,
  familyId: ProgramFamily["id"],
) {
  if (locale === "en") {
    return programsEn.filter((program) => program.family === familyId);
  }
  return getProgramsByFamilyEs(familyId);
}

export function getProgramSlugs() {
  return programs.map((program) => program.slug);
}
