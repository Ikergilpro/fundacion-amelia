import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "Hablemos. Fundación AMELIA A.C. recibe mensajes de familias, profesionales, empresas, escuelas y universidades en Chihuahua.",
  path: "/contacto",
});

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const motivo = typeof params.motivo === "string" ? params.motivo : undefined;

  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            tone="dark"
            items={[
              { href: "/", label: "Inicio" },
              { label: "Contacto" },
            ]}
          />
          <SectionHeader
            eyebrow="Contacto"
            title="Hablemos"
            description="Cuéntanos si escribes como familia, profesional, empresa, fundación, escuela, universidad o voluntariado. El envío electrónico se habilitará cuando exista el canal institucional."
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <ContactForm initialMotivo={motivo} />
        </Container>
      </section>
    </>
  );
}
