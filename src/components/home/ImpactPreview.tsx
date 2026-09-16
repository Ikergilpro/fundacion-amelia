import { getImpact } from "@/data/localized";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export function ImpactPreview({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const { note, stats } = getImpact(locale);

  return (
    <section className="bg-surface py-20 lg:py-28" aria-labelledby="impacto">
      <Container>
        <SectionHeader
          eyebrow={messages.home.impactEyebrow}
          title={messages.home.impactTitle}
          description={note}
          id="impacto"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
