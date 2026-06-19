"use client";

import { useState } from "react";
import type { FAQCategory } from "@/data/faq-de";
import { FAQQuestionAccordion } from "./FAQQuestionAccordion";

interface FAQCategoryAccordionProps {
  category: FAQCategory;
  index: number;
}

export function FAQCategoryAccordion({
  category,
  index,
}: FAQCategoryAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(15,61,46,0.10)]">
      {/* ── Category header ─────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-6 bg-[#0F3D2E] px-8 py-7 text-left transition-colors duration-200 hover:bg-[#0d3528] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9965B]/60 focus-visible:ring-inset md:px-10 md:py-8"
      >
        <div className="flex items-center gap-6">
          {/* Category number */}
          <span className="text-label shrink-0 tabular-nums text-[#B9965B]/50">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              {category.title}
            </h2>
            <p className="text-sm leading-[1.7] text-white/60 md:text-base">
              {category.description}
            </p>
          </div>
        </div>

        {/* Chevron icon */}
        <span
          aria-hidden="true"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B9965B]/30 text-[#B9965B] transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M3 6l5 5 5-5" />
          </svg>
        </span>
      </button>

      {/* ── Questions list (animated) ────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.32s ease",
        }}
      >
        <div className="overflow-hidden bg-[#F7F5EF]">
          <div className="px-8 py-4 md:px-10 md:py-6">
            {/* Subtle gold top rule */}
            <div
              className="mb-2 h-px w-16 rounded-full bg-[#B9965B]/40"
              aria-hidden="true"
            />

            <p className="mb-6 text-sm text-[#1D1D1B]/50">
              {category.items.length} Fragen in dieser Kategorie
            </p>

            <div>
              {category.items.map((item, i) => (
                <FAQQuestionAccordion key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
