import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { subsidyProgram } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Subsidios AMELIA",
  description: subsidyProgram.intro,
  path: "/subsidios",
});

export default function SubsidiosPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            tone="dark"
            items={[
              { href: "/", label: "Inicio" },
              { label: "Subsidios AMELIA" },
            ]}
          />
          <SectionHeader
            eyebrow="Subsidios AMELIA"
            title={subsidyProgram.title}
            description={subsidyProgram.intro}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy">
              {subsidyProgram.initial.title}
            </h2>
            <ul className="mt-5 space-y-2 text-muted">
              {subsidyProgram.initial.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">
              {subsidyProgram.priorities.title}
            </h2>
            <ul className="mt-5 space-y-2 text-muted">
              {subsidyProgram.priorities.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-wine" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container>
          <h2 className="font-serif text-3xl text-navy">Proceso</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {subsidyProgram.process.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-navy/8 bg-white p-5 text-center"
              >
                <p className="font-serif text-2xl text-gold">{index + 1}</p>
                <p className="mt-2 font-medium text-navy">{step}</p>
                {index < subsidyProgram.process.length - 1 ? (
                  <p className="mt-3 text-gold lg:hidden" aria-hidden="true">
                    ↓
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            title="Solicitar información"
            description="Este formulario no constituye todavía una solicitud formal. Está preparado para conectarse cuando exista el canal institucional."
          />
          <ContactForm variant="subsidy" />
        </Container>
      </section>
    </>
  );
}
