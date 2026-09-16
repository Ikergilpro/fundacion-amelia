import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { getProgram } from "@/data/programs";

export function MovementTeaser() {
  const program = getProgram("amelia-en-movimiento");
  if (!program) return null;

  return (
    <section className="bg-navy text-ivory" aria-labelledby="movimiento-inicio">
      <div className="grid lg:grid-cols-2">
        <PhotoSlot
          tone="movement"
          className="min-h-[320px] rounded-none lg:min-h-full"
          alt="Niñas y niños participan en una actividad física al aire libre."
          label="Fotografía por incorporar: juego, deporte o movimiento en comunidad, con alegría y participación."
        />
        <Container className="flex flex-col justify-center py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-gold">
            {program.name}
          </p>
          <h2 id="movimiento-inicio" className="mt-3 font-serif text-3xl sm:text-4xl">
            Deporte y bienestar como camino de participación
          </h2>
          <p className="mt-4 max-w-xl text-ivory/80">{program.objective}</p>
          {program.highlight ? (
            <blockquote className="mt-6 border-l-2 border-gold pl-4 font-serif text-xl text-light-gold">
              {program.highlight}
            </blockquote>
          ) : null}
          <div className="mt-8">
            <Button href="/programas/amelia-en-movimiento" variant="gold">
              Conocer AMELIA en Movimiento
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
