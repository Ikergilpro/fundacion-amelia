import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getSiteCopy } from "@/data/localized";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { getCtas } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  locale: Locale;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTASection({
  locale,
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
}: CTASectionProps) {
  const copy = getSiteCopy(locale);
  const messages = getMessages(locale);
  const ctas = getCtas(locale);

  return (
    <section className={cn("bg-deep-navy py-20 text-ivory", className)}>
      <Container className="max-w-3xl text-center">
        <div className="mx-auto mb-6 h-0.5 w-12 bg-gold" aria-hidden="true" />
        <h2 className="font-serif text-3xl text-balance sm:text-4xl">
          {title ?? copy.finalCta.title}
        </h2>
        <p className="mt-4 text-lg text-ivory/80">{text ?? copy.finalCta.text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref ?? ctas.primary.href} variant="gold" size="lg">
            {primaryLabel ?? ctas.primary.label}
          </Button>
          <Button href={secondaryHref ?? ctas.secondary.href} variant="light" size="lg">
            {secondaryLabel ?? messages.cta.supportAmelia}
          </Button>
        </div>
      </Container>
    </section>
  );
}
