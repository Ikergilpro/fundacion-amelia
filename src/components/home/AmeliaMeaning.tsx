import { ameliaLetters, ameliaMeaningTitle } from "@/data/amelia";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function AmeliaMeaning() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="que-es-amelia">
      <Container>
        <SectionHeader
          eyebrow="¿Qué es AMELIA?"
          title={ameliaMeaningTitle}
          id="que-es-amelia"
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ameliaLetters.map((item) => (
            <li key={`${item.letter}-${item.word}`}>
              <Card className="h-full">
                <p className="font-serif text-5xl text-gold" aria-hidden="true">
                  {item.letter}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-navy">
                  {item.word}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
