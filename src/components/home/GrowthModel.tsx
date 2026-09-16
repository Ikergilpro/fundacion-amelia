import { getGrowthModel } from "@/data/localized";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/lib/icons";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export function GrowthModel({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const growthModel = getGrowthModel(locale);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="modelo-trabajo">
      <Container>
        <SectionHeader
          eyebrow={messages.home.growthEyebrow}
          title={messages.home.growthTitle}
          description={messages.home.growthText}
          id="modelo-trabajo"
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {growthModel.map((item) => (
            <li key={item.title}>
              <Card className="h-full">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-gold/15 text-navy">
                  <Icon name={item.icon} />
                </div>
                <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-2 text-muted">{item.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {item.examples.map((example) => (
                    <li key={example} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-wine" />
                      {example}
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
