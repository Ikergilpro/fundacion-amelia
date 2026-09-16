import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  professionalProfiles,
  professionalRequirements,
} from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Profesionales",
  description:
    "Red Profesional AMELIA: colaboración coordinada para acompañar a personas autistas y sus familias en Chihuahua.",
  path: "/profesionales",
});

export default function ProfesionalesPage() {
  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            tone="dark"
            items={[
              { href: "/", label: "Inicio" },
              { label: "Profesionales" },
            ]}
          />
          <SectionHeader
            eyebrow="Red Profesional AMELIA"
            title="Colaborar con coordinación, metas y respeto"
            description="La organización busca profesionales y organizaciones interesados en integrarse a una red de colaboración. Esta página no publica todavía un directorio de prestadores."
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy">Perfiles</h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {professionalProfiles.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-navy/8 bg-white px-4 py-3 text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">Requisitos iniciales</h2>
            <ul className="mt-5 space-y-2 text-muted">
              {professionalRequirements.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-wine" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            title="Quiero integrarme a la red"
            description="Comparte tu perfil. La vinculación formal se habilitará cuando existan criterios operativos y un canal institucional."
          />
          <ContactForm variant="professional" />
        </Container>
      </section>
    </>
  );
}
