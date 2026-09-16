import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoSize = "header" | "footer" | "page";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  size?: LogoSize;
};

const sizeClass: Record<LogoSize, string> = {
  header: "h-16 w-auto max-h-16 sm:h-[4.5rem] sm:max-h-[4.5rem]",
  footer: "h-24 w-auto max-h-24 sm:h-28 sm:max-h-28",
  page: "h-36 w-auto max-h-36 sm:h-44 sm:max-h-44",
};

/**
 * Logotipo oficial. No se recorta ni se deforma: object-contain conserva la proporción.
 */
export function Logo({ className, inverted = false, size = "header" }: LogoProps) {
  if (site.brand.hasOfficialLogo) {
    const image = (
      // El JPG oficial ya trae margen. object-contain evita distorsión.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={site.brand.logoSrc}
        alt={site.brand.logoAlt}
        className={cn(sizeClass[size], "object-contain object-left")}
      />
    );

    if (inverted) {
      return (
        <span
          className={cn(
            "inline-flex rounded-2xl bg-ivory p-3",
            className,
          )}
        >
          {image}
        </span>
      );
    }

    return (
      <span className={cn("inline-flex items-center", className)}>{image}</span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex flex-col leading-none",
        inverted ? "text-ivory" : "text-navy",
        className,
      )}
    >
      <span
        className={cn(
          "text-[0.65rem] font-semibold uppercase tracking-[0.28em]",
          inverted ? "text-light-gold" : "text-wine",
        )}
      >
        Fundación
      </span>
      <span className="font-serif text-[1.65rem] tracking-tight">AMELIA</span>
      <span
        className={cn(
          "mt-1 text-[0.65rem] font-medium tracking-[0.18em]",
          inverted ? "text-ivory/70" : "text-muted",
        )}
      >
        A.C.
      </span>
    </span>
  );
}

export function LogoMark({
  className,
  href = "/",
  label,
}: {
  className?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-sm focus-visible:outline-gold",
        className,
      )}
      aria-label={label ?? `${site.name}`}
    >
      <Logo size="header" />
    </Link>
  );
}
