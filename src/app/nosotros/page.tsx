import { Logo } from "@/components/brand/Logo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { ValueCard } from "@/components/ui/ValueCard";
import { governance } from "@/data/content";
import { history, mission, vision } from "@/data/site";
import { developmentPlan } from "@/data/timeline";
import { values } from "@/data/values";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Historia, misión, visión, valores y gobernanza de Fundación AMELIA A.C. en Chihuahua.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            tone="dark"
            items={[
              { href: "/", label: "Inicio" },
              { label: "Nosotros" },
            ]}
          />
          <SectionHeader
            eyebrow="Nosotros"
            title="Una causa colectiva construida con rigor y cercanía"
            description="AMELIA combina el origen familiar de su historia con una organización pensada para acompañar, coordinar y mejorar."
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>

      <section id="historia" className="scroll-mt-28 py-16 lg:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
          <Logo size="page" className="justify-self-start" />
          <div className="max-w-3xl">
          <SectionHeader title={history.title} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {history.body.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </div>
          </div>
        </Container>
      </section>

      <section id="mision" className="scroll-mt-28 bg-surface py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Misión" title={mission} />
          </div>
          <div id="vision" className="scroll-mt-28">
            <SectionHeader eyebrow="Visión" title={vision} />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Valores"
            title="Cuatro compromisos que orientan el trabajo"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </Container>
      </section>

      <section id="gobernanza" className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Cómo nos organizamos"
            title="Una estructura pensada para cuidar calidad y coordinación"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {governance.map((item, index) => (
              <li
                key={item.title}
                className="rounded-2xl border border-navy/8 bg-white p-6"
              >
                <p className="text-sm text-wine">{index + 1}</p>
                <h3 className="mt-2 font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Plan de desarrollo"
            title="Tres años para pasar de un programa demostrativo a un centro integral"
            description="El plan describe una secuencia de crecimiento. No afirma resultados ya alcanzados."
          />
          <div className="mt-10">
            <Timeline years={developmentPlan} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
