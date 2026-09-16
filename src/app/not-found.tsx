import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine">
          Página no encontrada
        </p>
        <h1 className="mt-4 font-serif text-4xl text-navy">
          Este camino no está en el mapa.
        </h1>
        <p className="mt-4 text-muted">
          La página que buscas no existe o todavía no está publicada.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Ir al inicio</Button>
          <Button href="/contacto" variant="outline">
            Contacto
          </Button>
        </div>
      </Container>
    </section>
  );
}
