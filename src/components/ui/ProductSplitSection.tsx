import type { ReactNode } from "react";
import {
  ProductVisual,
  type ProductVisualVariant,
} from "@/components/illustrations/ProductVisual";
import { cn } from "@/lib/utils";

interface ProductSplitSectionProps {
  headline: string;
  text?: ReactNode;
  visual?: ProductVisualVariant;
  visualPosition?: "left" | "right";
  children?: ReactNode;
  className?: string;
}

export function ProductSplitSection({
  headline,
  text,
  visual = "dashboard",
  visualPosition = "right",
  children,
  className,
}: ProductSplitSectionProps) {
  const visualEl = (
    <div className="flex justify-center lg:justify-end">
      <ProductVisual variant={visual} className="max-w-full" />
    </div>
  );

  const textEl = (
    <div>
      <h2 className="text-h2 text-brand-800">{headline}</h2>
      <div className="gold-rule mt-8" aria-hidden="true" />
      {text != null && text !== "" ? (
        typeof text === "string" ? (
          <p className="mt-8 text-lg leading-[1.8] text-muted">{text}</p>
        ) : (
          <div className="mt-8 text-lg leading-[1.8] text-muted">{text}</div>
        )
      ) : null}
      {children}
    </div>
  );

  return (
    <div
      className={cn(
        "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
        className,
      )}
    >
      {visualPosition === "left" ? (
        <>
          {visualEl}
          {textEl}
        </>
      ) : (
        <>
          {textEl}
          {visualEl}
        </>
      )}
    </div>
  );
}
