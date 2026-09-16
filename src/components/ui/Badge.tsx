import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "navy" | "gold" | "wine" | "ivory";
  className?: string;
};

export function Badge({ children, tone = "navy", className }: BadgeProps) {
  const tones = {
    navy: "bg-navy/8 text-navy",
    gold: "bg-gold/15 text-navy",
    wine: "bg-wine/10 text-wine",
    ivory: "bg-white/15 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
