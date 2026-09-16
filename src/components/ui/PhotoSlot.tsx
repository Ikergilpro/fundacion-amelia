import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoSlotProps = {
  alt: string;
  label?: string;
  src?: string;
  className?: string;
  priority?: boolean;
  tone?: "warm" | "navy" | "movement";
};

/**
 * Arquitectura para fotografía real.
 * Si existe `src`, se muestra la imagen. Si no, un recuadro preparado para incorporarla.
 */
export function PhotoSlot({
  alt,
  label,
  src,
  className,
  priority = false,
  tone = "warm",
}: PhotoSlotProps) {
  const tones = {
    warm: "from-[#d9c7a8] via-[#c5b39a] to-[#9aa7b5]",
    navy: "from-navy via-[#1c406c] to-[#3d5a7a]",
    movement: "from-[#b7c4b0] via-[#d4c4a8] to-[#8fa3b8]",
  };

  return (
    <figure className={cn("relative overflow-hidden rounded-3xl", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[center_70%]"
        />
      ) : (
        <>
          <div
            className={cn("absolute inset-0 bg-linear-to-br", tones[tone])}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgb(255 255 255 / 0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgb(16 42 76 / 0.25), transparent 45%)",
            }}
            aria-hidden="true"
          />
          {label ? (
            <div className="relative flex h-full min-h-[280px] items-end p-6 sm:p-8">
              <figcaption className="max-w-xs rounded-xl bg-ivory/80 px-3 py-2 text-xs leading-relaxed text-navy/80 backdrop-blur-sm">
                <span className="sr-only">{alt}. </span>
                {label}
              </figcaption>
            </div>
          ) : null}
        </>
      )}
    </figure>
  );
}
