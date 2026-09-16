import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";

const placeholderSlots = Array.from({ length: 6 }, (_, index) => index);

export function AlliesTeaser() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="aliados-inicio">
      <Container>
        <SectionHeader
          eyebrow="Donantes y aliados"
          title="Tu apoyo puede abrir caminos."
          description="Empresas, fundaciones, universidades y profesionales pueden sumarse cuando la operación y las alianzas estén listas."
          id="aliados-inicio"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderSlots.map((slot) => (
            <PartnerLogo key={slot} />
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/donantes">Quiero ser aliado</Button>
          <Button href="/contacto?motivo=fundacion" variant="outline">
            Solicitar dossier institucional
          </Button>
        </div>
      </Container>
    </section>
  );
}
