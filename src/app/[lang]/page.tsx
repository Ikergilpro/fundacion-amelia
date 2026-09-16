import { AlliesTeaser } from "@/components/home/AlliesTeaser";
import { AmeliaMeaning } from "@/components/home/AmeliaMeaning";
import { AttentionModel } from "@/components/home/AttentionModel";
import { FamiliesTeaser } from "@/components/home/FamiliesTeaser";
import { GrowthModel } from "@/components/home/GrowthModel";
import { HistoryTeaser } from "@/components/home/HistoryTeaser";
import { HomeHero } from "@/components/home/HomeHero";
import { ImpactPreview } from "@/components/home/ImpactPreview";
import { MovementTeaser } from "@/components/home/MovementTeaser";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { PurposeSection } from "@/components/home/PurposeSection";
import { SubsidiesTeaser } from "@/components/home/SubsidiesTeaser";
import { CTASection } from "@/components/ui/CTASection";
import { requireLocale } from "@/i18n/params";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const locale = await requireLocale(params);

  return (
    <>
      <HomeHero locale={locale} />
      <AmeliaMeaning locale={locale} />
      <PurposeSection locale={locale} />
      <HistoryTeaser locale={locale} />
      <ProgramsPreview locale={locale} />
      <AttentionModel locale={locale} />
      <SubsidiesTeaser locale={locale} />
      <FamiliesTeaser locale={locale} />
      <MovementTeaser locale={locale} />
      <GrowthModel locale={locale} />
      <ImpactPreview locale={locale} />
      <AlliesTeaser locale={locale} />
      <CTASection locale={locale} />
    </>
  );
}
