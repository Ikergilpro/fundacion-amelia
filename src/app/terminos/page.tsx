import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata = pageMetadata({
  title: "Términos",
  description: `Términos de uso del sitio informativo de ${site.name}.`,
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { href: "/", label: "Inicio" },
            { label: "Términos" },
          ]}
        />
        <h1 className="font-serif text-4xl text-navy">Términos de uso</h1>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          <p>
            Este sitio es de carácter informativo. Su contenido describe el
            propósito, los programas y las vías de colaboración de {site.name}.
          </p>
          <p>
            La información publicada no constituye diagnóstico, tratamiento médico
            ni asesoría jurídica. Tampoco garantiza la admisión a programas o
            subsidios.
          </p>
          <p>
            Los formularios están preparados para una conexión posterior y, por
            ahora, no generan un expediente, una donación ni un convenio.
          </p>
        </div>
      </Container>
    </section>
  );
}
