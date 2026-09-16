import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

export function Card({ children, className, as: Comp = "div" }: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-2xl border border-navy/8 bg-white p-6 shadow-[0_8px_30px_rgb(16_42_76_/_0.06)]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
