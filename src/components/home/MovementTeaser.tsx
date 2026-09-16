import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { getProgram } from "@/data/localized";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";

export function MovementTeaser({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const program = getProgram(locale, "amelia-en-movimiento");
  if (!program) return null;

  return (
    <section className="bg-navy text-ivory" aria-labelledby="movimiento-inicio">
      <div className="grid lg:grid-cols-2">
        <PhotoSlot
          tone="movement"
          className="min-h-[320px] rounded-none lg:min-h-full"
          alt={messages.home.movementPhotoAlt}
          label={messages.home.movementPhotoLabel}
        />
        <Container className="flex flex-col justify-center py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-gold">
            {program.name}
          </p>
          <h2 id="movimiento-inicio" className="mt-3 font-serif text-3xl sm:text-4xl">
            {messages.home.movementTitle}
          </h2>
          <p className="mt-4 max-w-xl text-ivory/80">{program.objective}</p>
          {program.highlight ? (
            <blockquote className="mt-6 border-l-2 border-gold pl-4 font-serif text-xl text-light-gold">
              {program.highlight}
            </blockquote>
          ) : null}
          <div className="mt-8">
            <Button
              href={localizedPath(locale, "/programas/amelia-en-movimiento")}
              variant="gold"
            >
              {messages.home.movementCta}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
