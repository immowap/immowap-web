"use client";

import { useState } from "react";
import { animationClasses } from "@/lib/design-system/tokens/animation";
import { radiusClasses } from "@/lib/design-system/tokens/radius";
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
    <div
      className={cn(
        "divide-y divide-warm-gray/40 border border-black/[0.05] bg-white shadow-[var(--shadow-card)]",
        radiusClasses.xl,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="px-8 py-2 first:pt-4 last:pb-4">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                "flex w-full min-w-0 items-start justify-between gap-6 py-5 text-left",
                animationClasses.focusRing,
                "rounded-lg",
              )}
              aria-expanded={isOpen}
            >
              <span className="min-w-0 flex-1 break-words text-h4 text-brand-800 [overflow-wrap:anywhere]">
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
              <p className="pb-5 break-words text-body text-muted [overflow-wrap:anywhere]">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
