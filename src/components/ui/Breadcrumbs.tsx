import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = {
  href?: string;
  label: string;
};

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <nav aria-label="Miga de pan" className="mb-8">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1 text-sm",
          isDark ? "text-ivory/70" : "text-muted",
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 ? (
                <ChevronRight className="size-3.5 text-gold" aria-hidden="true" />
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={isDark ? "hover:text-white" : "hover:text-navy"}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isDark ? "text-ivory" : "text-navy"}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
