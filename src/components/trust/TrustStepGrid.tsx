interface TrustStepGridProps {
  steps: readonly string[];
}

/** Numbered methodology steps without descriptions — for About & Contact */
export function TrustStepGrid({ steps }: TrustStepGridProps) {
  const colClass =
    steps.length === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : steps.length === 5
        ? "md:grid-cols-2 lg:grid-cols-5"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-8 [&>*]:min-w-0 ${colClass}`}>
      {steps.map((step, index) => (
        <div key={step} className="flex min-w-0 flex-col">
          <span className="text-label mb-4 block text-gold-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="break-words text-h4 text-brand-800 [overflow-wrap:anywhere] hyphens-auto">
            {step}
          </h3>
        </div>
      ))}
    </div>
  );
}
