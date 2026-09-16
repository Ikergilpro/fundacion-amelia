import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaPrimary, ctaSecondary } from "@/data/navigation";
import { finalCta } from "@/data/site";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTASection({
  title = finalCta.title,
  text = finalCta.text,
  primaryLabel = ctaPrimary.label,
  primaryHref = ctaPrimary.href,
  secondaryLabel = "Quiero apoyar a AMELIA",
  secondaryHref = ctaSecondary.href,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-deep-navy py-20 text-ivory", className)}>
      <Container className="max-w-3xl text-center">
        <div className="mx-auto mb-6 h-0.5 w-12 bg-gold" aria-hidden="true" />
        <h2 className="font-serif text-3xl text-balance sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-ivory/80">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} variant="gold" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="light" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
