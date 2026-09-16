import { purpose, purposeConcepts } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/lib/icons";
import type { IconName } from "@/types/content";

export function PurposeSection() {
  return (
    <section className="bg-navy py-20 text-ivory lg:py-24" aria-labelledby="proposito">
      <Container>
        <SectionHeader
          eyebrow="Nuestro propósito"
          title={purpose}
          tone="dark"
          id="proposito"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {purposeConcepts.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-gold/20 text-light-gold">
                <Icon name={item.icon as IconName} />
              </div>
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/75">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
