import type { TimelineYear } from "@/types/content";
import { cn } from "@/lib/utils";

export function Timeline({ years }: { years: TimelineYear[] }) {
  return (
    <ol className="grid gap-6 lg:grid-cols-3">
      {years.map((year, index) => (
        <li key={year.year} className="relative">
          <article className="h-full rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_8px_30px_rgb(16_42_76_/_0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine">
              {year.year}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-navy">{year.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {year.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-wine" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          {index < years.length - 1 ? (
            <div
              className={cn(
                "absolute top-1/2 -right-3 hidden h-px w-6 bg-gold lg:block",
              )}
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
