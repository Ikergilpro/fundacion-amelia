import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProgramGrid } from "@/components/programs/ProgramGrid";
import { programsIntro } from "@/data/programs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Programas",
  description: programsIntro,
  path: "/programas",
});

export default function ProgramasPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory lg:py-20">
        <Container>
          <SectionHeader
            eyebrow="Programas AMELIA"
            title="Ocho caminos, una misma forma de acompañar"
            description={programsIntro}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>
      <section className="py-16 lg:py-24">
        <Container>
          <ProgramGrid />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
