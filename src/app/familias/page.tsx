import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { familyPaths } from "@/data/content";
import { Icon } from "@/lib/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Familias",
  description:
    "Orientación para familias de personas autistas en Chihuahua: comunicación, escuela, subsidios y Escuela para Familias.",
  path: "/familias",
});

export default function FamiliasPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            tone="dark"
            items={[
              { href: "/", label: "Inicio" },
              { label: "Familias" },
            ]}
          />
          <SectionHeader
            eyebrow="Para familias"
            title="No tienen que recorrer este camino solos."
            description="Elige la situación que más se parece a la de tu familia. Cada puerta lleva a un programa o a una conversación de orientación."
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>
      <section className="py-16 lg:py-24">
        <Container>
          <ul className="grid gap-5 lg:grid-cols-2">
            {familyPaths.map((path) => (
              <li key={path.title}>
                <Card className="flex h-full flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-navy">
                      <Icon name={path.icon} />
                    </div>
                    <h2 className="font-serif text-2xl text-navy">{path.title}</h2>
                  </div>
                  <div className="mt-6">
                    <Button href={path.href}>{path.cta}</Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
