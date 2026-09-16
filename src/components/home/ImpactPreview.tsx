import { impactNote, impactStats } from "@/data/stats";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";

export function ImpactPreview() {
  return (
    <section className="bg-surface py-20 lg:py-28" aria-labelledby="impacto">
      <Container>
        <SectionHeader
          eyebrow="Transparencia"
          title="Resultados que se mostrarán con evidencia"
          description={impactNote}
          id="impacto"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
