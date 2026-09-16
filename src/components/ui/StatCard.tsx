import { Card } from "@/components/ui/Card";

export function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Card className="text-center">
      <p className="font-serif text-3xl text-navy" aria-hidden={value === "—"}>
        {value}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </Card>
  );
}
