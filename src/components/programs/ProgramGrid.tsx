import { programFamilies, getProgramsByFamily } from "@/data/programs";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { cn } from "@/lib/utils";

export function ProgramGrid({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-16", className)}>
      {programFamilies.map((family) => {
        const items = getProgramsByFamily(family.id);
        return (
          <section
            key={family.id}
            aria-labelledby={`familia-${family.id}`}
            className="space-y-6"
          >
            <div>
              <h3
                id={`familia-${family.id}`}
                className="font-serif text-2xl text-navy"
              >
                {family.name}
              </h3>
              <p className="mt-2 max-w-2xl text-muted">{family.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
