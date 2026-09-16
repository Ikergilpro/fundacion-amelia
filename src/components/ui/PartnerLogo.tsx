import { cn } from "@/lib/utils";

type PartnerLogoProps = {
  name?: string;
  src?: string;
  className?: string;
};

/** Espacio preparado para logotipos reales de empresas aliadas. */
export function PartnerLogo({ name, src, className }: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "flex min-h-24 items-center justify-center rounded-2xl border border-dashed border-navy/15 bg-white px-4 text-center text-sm text-muted",
        className,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name ?? "Aliado"} className="max-h-12 w-auto object-contain" />
      ) : (
        <span>{name ?? "Espacio para logotipo"}</span>
      )}
    </div>
  );
}
