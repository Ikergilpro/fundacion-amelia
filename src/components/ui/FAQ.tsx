import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ({
  items = faqs,
}: {
  items?: { question: string; answer: string }[];
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
