import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { subsidyProgram } from "@/data/content";

export function SubsidiesTeaser() {
  return (
    <section className="bg-ivory py-20 lg:py-24" aria-labelledby="subsidios-inicio">
      <Container>
        <div className="rounded-3xl border border-gold/30 bg-white px-6 py-10 sm:px-10 lg:px-14">
          <SectionHeader
            eyebrow="Subsidios AMELIA"
            title={subsidyProgram.title}
            description={subsidyProgram.intro}
            id="subsidios-inicio"
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-xl text-navy">
                {subsidyProgram.initial.title}
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {subsidyProgram.initial.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-navy">
                {subsidyProgram.priorities.title}
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {subsidyProgram.priorities.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-wine" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Button href="/subsidios">Conocer el programa de subsidios</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
