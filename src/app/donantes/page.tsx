import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { collaborationWays } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Donantes y aliados",
  description:
    "Formas de colaborar con Fundación AMELIA A.C.: patrocinio, tecnología, investigación, deporte inclusivo y donativos.",
  path: "/donantes",
});

const logoSlots = Array.from({ length: 8 }, (_, index) => index);

export default function DonantesPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            tone="dark"
            items={[
              { href: "/", label: "Inicio" },
              { label: "Donantes y Aliados" },
            ]}
          />
          <SectionHeader
            eyebrow="Donantes y aliados"
            title="Tu apoyo puede abrir caminos."
            description="AMELIA busca empresas, fundaciones, universidades y profesionales que quieran colaborar con transparencia y resultados."
            tone="dark"
            titleAs="h1"
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#ser-aliado" variant="gold">
              Quiero ser aliado
            </Button>
            <Button href="/contacto?motivo=fundacion" variant="light">
              Solicitar dossier institucional
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader title="Formas de colaborar" />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {collaborationWays.map((item) => (
              <li key={item.title}>
                <Card className="h-full">
                  <h2 className="font-serif text-xl text-navy">{item.title}</h2>
                  <p className="mt-2 text-muted">{item.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="empresas" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <SectionHeader
            title="Empresas aliadas"
            description="Este espacio está preparado para logotipos institucionales. Aún no se exhiben alianzas."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {logoSlots.map((slot) => (
              <PartnerLogo key={slot} />
            ))}
          </div>
        </Container>
      </section>

      <section id="ser-aliado" className="scroll-mt-28 py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            title="Conversemos"
            description="Cuéntanos cómo podría colaborar tu organización. El donativo en línea y los convenios se habilitarán más adelante."
          />
          <ContactForm variant="ally" />
        </Container>
      </section>
    </>
  );
}
