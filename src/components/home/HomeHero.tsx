import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { ctaPrimary } from "@/data/navigation";
import { hero } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-deep-navy text-ivory">
      <div className="grid lg:grid-cols-2">
        <Container className="flex flex-col justify-center py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-light-gold">
            Fundación AMELIA A.C. · Chihuahua
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={ctaPrimary.href} variant="gold" size="lg">
              Solicitar orientación
            </Button>
            <Button href="/programas" variant="light" size="lg">
              Conocer nuestros programas
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
            alt="Una familia camina de la mano al atardecer."
          />
        </div>
      </div>
    </section>
  );
}
