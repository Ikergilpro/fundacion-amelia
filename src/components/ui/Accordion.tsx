"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  id?: string;
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("divide-y divide-navy/10 border-y border-navy/10", className)}>
      {items.map((item, index) => {
        const id = item.id ?? `${baseId}-${index}`;
        const panelId = `${id}-panel`;
        const isOpen = openId === id;

        return (
          <div key={id}>
            <h3>
              <button
                type="button"
                id={id}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-navy transition-colors hover:text-wine"
                onClick={() => setOpenId(isOpen ? null : id)}
              >
                <span className="font-medium">{item.title}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-gold transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={id}
              hidden={!isOpen}
              className="pb-4 text-muted leading-relaxed"
            >
              {isOpen ? item.content : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
