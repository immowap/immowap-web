import { cn } from "@/lib/utils";

interface EditorialComparisonTableProps {
  caption?: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  className?: string;
}

export function EditorialComparisonTable({
  caption,
  headers,
  rows,
  className,
}: EditorialComparisonTableProps) {
  return (
    <div className={cn("my-10 overflow-x-auto rounded-2xl border border-warm-gray/40", className)}>
      <table className="w-full min-w-[480px] border-collapse text-left text-body-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-warm-gray/40 bg-surface">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-5 py-4 font-semibold text-brand-800"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-warm-gray/25 last:border-0 even:bg-cream/50"
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-5 py-4 text-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface EditorialTimelineProps {
  items: readonly { title: string; description?: string }[];
  className?: string;
}

export function EditorialTimeline({ items, className }: EditorialTimelineProps) {
  return (
    <ol className={cn("my-10 space-y-0", className)}>
      {items.map((item, index) => (
        <li key={item.title} className="relative flex gap-6 pb-10 last:pb-0">
          {index < items.length - 1 ? (
            <div
              className="absolute left-[15px] top-8 h-[calc(100%-1rem)] w-px bg-warm-gray/50"
              aria-hidden="true"
            />
          ) : null}
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-cream text-label text-gold-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="pt-0.5">
            <h3 className="text-h4 text-brand-800">{item.title}</h3>
            {item.description ? (
              <p className="mt-2 text-body-sm text-muted">{item.description}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

interface EditorialChecklistProps {
  items: readonly { label: string; checked?: boolean }[];
  className?: string;
}

export function EditorialChecklist({ items, className }: EditorialChecklistProps) {
  return (
    <ul className={cn("my-8 space-y-3", className)} role="list">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3 text-body-sm text-muted">
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs",
              item.checked
                ? "border-brand-secondary bg-brand-secondary/10 text-brand-secondary"
                : "border-warm-gray/60 bg-surface text-transparent",
            )}
            aria-hidden="true"
          >
            ✓
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

interface EditorialProcessStepsProps {
  steps: readonly { title: string; description: string }[];
  className?: string;
}

export function EditorialProcessSteps({ steps, className }: EditorialProcessStepsProps) {
  return (
    <div className={cn("my-10 grid gap-6 sm:grid-cols-2", className)}>
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="rounded-2xl border border-warm-gray/30 bg-surface p-5"
        >
          <span className="text-label text-gold-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-h4 text-brand-800">{step.title}</h3>
          <p className="mt-2 text-body-sm text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
