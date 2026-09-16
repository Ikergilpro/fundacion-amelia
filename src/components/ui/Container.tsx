import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "nav";
  id?: string;
};

export function Container({
  children,
  className,
  as: Comp = "div",
  id,
}: ContainerProps) {
  return (
    <Comp
      id={id}
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Comp>
  );
}
