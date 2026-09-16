import type { ValueItem } from "@/types/content";
import { Icon } from "@/lib/icons";
import { Card } from "@/components/ui/Card";

export function ValueCard({ title, description, icon }: ValueItem) {
  return (
    <Card as="article" className="h-full">
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-gold/15 text-navy">
        <Icon name={icon} />
      </div>
      <h3 className="font-serif text-xl text-navy">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{description}</p>
    </Card>
  );
}
