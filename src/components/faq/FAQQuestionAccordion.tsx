"use client";

import { useState } from "react";
import type { FAQItem } from "@/data/faq-de";

interface FAQQuestionAccordionProps {
  item: FAQItem;
  index: number;
}

export function FAQQuestionAccordion({ item, index }: FAQQuestionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#D7D2C8] last:border-b-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9965B]/50 focus-visible:ring-offset-2"
      >
        <span className="flex items-baseline gap-4">
          <span className="text-label shrink-0 tabular-nums text-[#B9965B]/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-medium leading-[1.6] text-[#1D1D1B] group-hover:text-brand-600 transition-colors duration-200">
            {item.question}
          </span>
        </span>

        {/* Plus / Minus icon */}
        <span
          aria-hidden="true"
          className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#B9965B]"
        >
          <span className="absolute h-px w-full bg-current transition-transform duration-300" />
          <span
            className={`absolute h-full w-px bg-current transition-all duration-300 ${
              isOpen ? "scale-y-0 opacity-0" : "scale-y-100 opacity-100"
            }`}
          />
        </span>
      </button>

      {/* Smooth height animation via CSS grid trick */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.28s ease",
        }}
      >
        <div className="overflow-hidden">
          <div className="flex gap-4 pb-6 pt-1 pl-1">
            {/* Gold left accent */}
            <div
              className="mt-1 w-0.5 shrink-0 rounded-full bg-[#B9965B]/40"
              aria-hidden="true"
            />
            {item.answer.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-[1.8] text-[#1D1D1B]/75 [&+p]:mt-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
