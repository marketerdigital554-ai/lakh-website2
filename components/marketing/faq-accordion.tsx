"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="flex flex-col">
      {items.map((item, i) => (
        <Accordion.Item
          key={item.question}
          value={`item-${i}`}
          className="border-b border-border"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between py-5 text-left text-base font-bold text-navy",
                "focus-visible:outline-none"
              )}
            >
              {item.question}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-ink-secondary transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden pb-5 text-sm leading-relaxed text-ink-secondary data-[state=open]:animate-fade-up">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
