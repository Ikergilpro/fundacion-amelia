import { growthModel } from "@/data/growth";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/lib/icons";

export function GrowthModel() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="modelo-trabajo">
      <Container>
        <SectionHeader
          eyebrow="Modelo de trabajo"
          title="Tres maneras de crecer sin perder coordinación"
          description="AMELIA combina servicios propios, programas en alianza y una red de referencia."
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
