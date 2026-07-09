"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  label: string;
  items: readonly TocItem[];
  className?: string;
  /** Sticky sidebar variant for desktop */
  variant?: "inline" | "sidebar";
}

export function TableOfContents({
  label,
  items,
  className,
  variant = "inline",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;

    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting);
        });

        const firstVisible = items.find((item) => visible.get(item.id));
        if (firstVisible) {
          setActiveId(firstVisible.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  const nav = (
    <nav aria-label={label} className={className}>
      <p className="text-label mb-4 text-gold-600">{label}</p>
      <ol className={cn(variant === "sidebar" ? "space-y-1" : "grid grid-cols-1 gap-2 sm:grid-cols-2")}>
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className={cn(
                  "group flex w-full items-baseline gap-3 rounded-lg px-2 py-1.5 text-left text-body-sm transition-colors duration-200",
                  isActive
                    ? "font-medium text-brand-800"
                    : "text-muted hover:text-brand-800",
                )}
              >
                <span
                  className={cn(
                    "text-label shrink-0",
                    isActive ? "text-gold-600" : "text-gold-600/50",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );

  if (variant === "sidebar") {
    return (
      <div className="sticky top-28 rounded-2xl border border-warm-gray/40 bg-surface p-5 shadow-[var(--shadow-sm)]">
        {nav}
      </div>
    );
  }

  return (
    <div className="mb-12 rounded-2xl border border-warm-gray/40 bg-surface px-6 py-7 md:px-8 md:py-8">
      {nav}
    </div>
  );
}
