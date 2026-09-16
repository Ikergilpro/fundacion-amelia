import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import type { FaqItem } from "@/types/content";

export function FAQ({
  items = faqs,
}: {
  items?: FaqItem[];
}) {
  return (
    <Accordion
      items={items.map((item) => ({
        title: item.question,
        content: item.answer,
      }))}
    />
  );
}
