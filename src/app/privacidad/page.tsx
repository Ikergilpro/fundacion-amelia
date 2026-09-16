import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = pageMetadata({
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad de Fundación AMELIA A.C. Texto marco hasta que exista la versión jurídica definitiva.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { href: "/", label: "Inicio" },
            { label: "Aviso de privacidad" },
          ]}
        />
        <h1 className="font-serif text-4xl text-navy">Aviso de privacidad</h1>
        <p className="mt-6 leading-relaxed text-muted">
          Este texto es un marco informativo. No sustituye el aviso de privacidad
          definitivo de {site.name}. Cuando la organización designe datos de
          contacto y responsables, este contenido deberá actualizarse.
        </p>
        <div className="mt-8 space-y-4 leading-relaxed text-muted">
          <p>
            Los formularios del sitio solicitan datos de identificación y contacto
            con la finalidad de responder solicitudes de orientación, colaboración
            profesional o interés de alianzas.
          </p>
          <p>
            En esta etapa el sitio no envía ni almacena esos datos en un servidor.
            No se recaban expedientes clínicos ni documentos de identificación a
            través de esta página.
          </p>
          <p>
            {site.name} se compromete a tratar datos personales conforme a la
            legislación mexicana aplicable cuando los canales institucionales
            estén operando.
          </p>
        </div>
      </Container>
    </section>
  );
}
