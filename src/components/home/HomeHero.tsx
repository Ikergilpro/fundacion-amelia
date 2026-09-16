import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { getSiteCopy } from "@/data/localized";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getCtas } from "@/i18n/navigation";
import { localizedPath } from "@/i18n/path";

export function HomeHero({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const { hero } = getSiteCopy(locale);
  const ctas = getCtas(locale);

  return (
    <section className="relative overflow-hidden bg-deep-navy text-ivory">
      <div className="grid lg:grid-cols-2">
        <Container className="flex flex-col justify-center py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-light-gold">
            {messages.home.kicker}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={ctas.primary.href} variant="gold" size="lg">
              {ctas.primary.label}
            </Button>
            <Button href={localizedPath(locale, "/programas")} variant="light" size="lg">
              {messages.cta.programs}
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ivory/75">
            {hero.pillars.map((pillar, index) => (
              <li key={pillar} className="flex items-center gap-4">
                {index > 0 ? (
                  <span className="hidden text-gold sm:inline" aria-hidden="true">
                    ·
                  </span>
                ) : null}
                {pillar}
              </li>
            ))}
          </ul>
        </Container>
        <div className="min-h-[320px] lg:min-h-full">
          <PhotoSlot
            src="/images/photos/hero-familia.jpg"
            priority
            className="h-full min-h-[320px] rounded-none lg:min-h-[560px]"
            alt={messages.home.heroPhotoAlt}
          />
        </div>
      </div>
    </section>
  );
}
