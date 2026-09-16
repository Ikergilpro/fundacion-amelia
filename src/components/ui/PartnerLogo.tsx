import { cn } from "@/lib/utils";

type PartnerLogoProps = {
  name?: string;
  src?: string;
  href?: string;
  placeholder?: string;
  alt?: string;
  className?: string;
};

/** Espacio preparado para logotipos reales de empresas aliadas. */
export function PartnerLogo({
  name,
  src,
  href,
  placeholder,
  alt,
  className,
}: PartnerLogoProps) {
  const content = src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? name ?? "Aliado"} className="max-h-12 w-auto object-contain" />
  ) : (
    <span>{name ?? placeholder}</span>
  );

  const classes = cn(
    "flex min-h-24 items-center justify-center rounded-2xl border border-dashed border-navy/15 bg-white px-4 text-center text-sm text-muted",
    href && "border-solid border-navy/20 font-medium text-navy transition-colors hover:border-gold hover:text-wine",
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} rel="noopener noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
