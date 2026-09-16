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

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AmeliaMeaning />
      <PurposeSection />
      <HistoryTeaser />
      <ProgramsPreview />
      <AttentionModel />
      <SubsidiesTeaser />
      <FamiliesTeaser />
      <MovementTeaser />
      <GrowthModel />
      <ImpactPreview />
      <AlliesTeaser />
      <CTASection />
    </>
  );
}
