import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  id?: string;
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  id,
  titleAs: Title = "h2",
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 h-0.5 w-12 bg-gold",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
            isDark ? "text-light-gold" : "text-wine",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Title
        id={id}
        className={cn(
          "font-serif text-3xl leading-tight text-balance sm:text-4xl",
          isDark ? "text-ivory" : "text-navy",
        )}
      >
        {title}
      </Title>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            isDark ? "text-ivory/80" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
