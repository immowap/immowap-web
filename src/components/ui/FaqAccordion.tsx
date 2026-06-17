"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-warm-gray/40 rounded-[28px] border border-black/[0.05] bg-white shadow-[0_4px_24px_rgba(29,29,27,0.04)]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="px-8 py-2 first:pt-4 last:pb-4">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold leading-snug text-brand-800">
                {item.question}
              </span>
              <svg
                className={cn(
                  "mt-1 h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <p className="pb-5 text-base leading-[1.8] text-muted">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
