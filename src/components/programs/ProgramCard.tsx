import Link from "next/link";
import type { Program } from "@/types/content";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/lib/icons";

const statusLabel: Record<NonNullable<Program["status"]>, string> = {
  active: "Programa",
  development: "En desarrollo",
  planned: "En diseño",
};

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Card as="article" className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-12 items-center justify-center rounded-full bg-gold/15 text-navy">
          <Icon name={program.icon} />
        </div>
        {program.status && program.status !== "active" ? (
          <Badge tone="gold">{statusLabel[program.status]}</Badge>
        ) : null}
      </div>
      <h3 className="mt-5 font-serif text-2xl text-navy">
        <Link href={`/programas/${program.slug}`} className="hover:text-wine">
          {program.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm font-medium tracking-wide text-wine">
        {program.subtitle}
      </p>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{program.summary}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
        Dirigido a
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {program.audience.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
        Actividades principales
      </p>
      <ul className="mt-2 space-y-1 text-sm text-muted">
        {program.activities.slice(0, 5).map((activity) => (
          <li key={activity} className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-wine" />
            {activity}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href={`/programas/${program.slug}`} variant="outline" size="sm">
          Conocer programa
        </Button>
      </div>
    </Card>
  );
}
