import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { familyPaths } from "@/data/content";
import { Icon } from "@/lib/icons";

export function FamiliesTeaser() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="familias-inicio">
      <Container>
        <SectionHeader
          eyebrow="Familias"
          title="No tienen que recorrer este camino solos."
          description="Elige el punto de partida que más se parece a lo que están viviendo ahora."
          id="familias-inicio"
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {familyPaths.map((path) => (
            <li key={path.title}>
              <Card className="flex h-full flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <Icon name={path.icon} />
                  </div>
                  <h3 className="font-serif text-xl text-navy">{path.title}</h3>
                </div>
                <div className="mt-5">
                  <Button href={path.href} variant="outline" size="sm">
                    {path.cta}
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
