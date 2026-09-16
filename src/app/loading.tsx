import { Logo } from "@/components/brand/Logo";

export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="motion-safe:animate-pulse">
        <Logo />
        <span className="sr-only">Cargando</span>
      </div>
    </div>
  );
}
