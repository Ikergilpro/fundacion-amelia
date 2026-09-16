import type { ProcessStepItem } from "@/types/content";

export function ProcessStep({
  step,
  title,
  description,
  isLast = false,
}: ProcessStepItem & { isLast?: boolean }) {
  return (
    <li className="relative flex flex-col items-center text-center">
      <div className="flex size-14 items-center justify-center rounded-full border border-gold bg-white font-serif text-xl text-navy">
        {step}
      </div>
      <h3 className="mt-4 font-serif text-lg text-navy">{title}</h3>
      <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-muted">
        {description}
      </p>
      {!isLast ? (
        <span className="mt-5 text-gold lg:hidden" aria-hidden="true">
          ↓
        </span>
      ) : null}
    </li>
  );
}
