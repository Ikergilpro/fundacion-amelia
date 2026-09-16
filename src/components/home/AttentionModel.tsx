import { getAttentionModel } from "@/data/localized";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProcessStep } from "@/components/ui/ProcessStep";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export function AttentionModel({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const steps = getAttentionModel(locale);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="como-acompanamos">
      <Container>
        <SectionHeader
          eyebrow={messages.home.modelEyebrow}
          title={messages.home.modelTitle}
          description={messages.home.modelText}
          id="como-acompanamos"
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.step}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
