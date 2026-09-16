import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { history } from "@/data/site";

export function HistoryTeaser() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="historia-inicio">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader title={history.title} id="historia-inicio" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            {history.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/nosotros#historia" variant="outline">
              Conoce nuestra historia
            </Button>
          </div>
        </div>
        <PhotoSlot
          alt="Una persona adulta y un niño comparten una actividad cotidiana en casa."
          label="Fotografía por incorporar: vida cotidiana en familia, sin estereotipos ni estética clínica."
        />
      </Container>
    </section>
  );
}
