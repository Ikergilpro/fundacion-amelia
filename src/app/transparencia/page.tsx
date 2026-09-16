import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { FAQ } from "@/components/ui/FAQ";
import { transparencyCommitments } from "@/data/content";
import { impactNote, impactStats } from "@/data/stats";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Transparencia",
  description:
    "Compromiso de Fundación AMELIA A.C. con el uso responsable de recursos, resultados y rendición de cuentas.",
  path: "/transparencia",
});

export default function TransparenciaPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            tone="dark"
            items={[
              { href: "/", label: "Inicio" },
              { label: "Transparencia" },
            ]}
          />
          <SectionHeader
            eyebrow="Transparencia y resultados"
            title="Medir para mejorar, rendir cuentas con claridad"
            description="AMELIA se compromete a informar con evidencia. Los indicadores numéricos se publicarán a partir del inicio de operaciones."
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="font-serif text-2xl text-navy">Nuestro compromiso</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {transparencyCommitments.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-navy/8 bg-white px-5 py-4 text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container>
          <SectionHeader title="Indicadores" description={impactNote} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="mb-6 font-serif text-2xl text-navy">Preguntas frecuentes</h2>
          <FAQ />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
