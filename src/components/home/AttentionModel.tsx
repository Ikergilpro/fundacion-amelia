import { attentionModel } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProcessStep } from "@/components/ui/ProcessStep";

export function AttentionModel() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="como-acompanamos">
      <Container>
        <SectionHeader
          eyebrow="Cómo acompañamos"
          title="Un modelo que empieza escuchando"
          description="La ruta se construye con la familia. No todas las personas necesitan los mismos apoyos ni el mismo orden."
          id="como-acompanamos"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attentionModel.map((step, index) => (
            <ProcessStep
              key={step.step}
              {...step}
              isLast={index === attentionModel.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
