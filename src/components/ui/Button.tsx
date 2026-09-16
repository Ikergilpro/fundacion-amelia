import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy text-white hover:bg-deep-navy focus-visible:outline-gold",
  secondary:
    "bg-wine text-white hover:bg-burgundy",
  outline:
    "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy/5",
  gold:
    "bg-gold text-navy hover:bg-light-gold",
  light:
    "border border-white/35 bg-transparent text-white hover:bg-white/10",
} as const;

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors duration-200",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
