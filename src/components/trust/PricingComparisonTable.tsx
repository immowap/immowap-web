import { cn } from "@/lib/utils";

interface PricingComparisonRow {
  feature: string;
  basic: string;
  premium: string;
  professional: string;
}

interface PricingComparisonTableProps {
  caption: string;
  headers: readonly [string, string, string, string];
  rows: readonly PricingComparisonRow[];
  className?: string;
}

export function PricingComparisonTable({
  caption,
  headers,
  rows,
  className,
}: PricingComparisonTableProps) {
  const [featureHeader, basicHeader, premiumHeader, proHeader] = headers;

  return (
    <div
      className={cn(
        "overflow-x-auto rounded-[28px] border border-warm-gray/30 bg-surface shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <table className="w-full min-w-[640px] border-collapse text-left text-body-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-warm-gray/40 bg-cream">
            <th scope="col" className="px-6 py-5 font-semibold text-brand-800">
              {featureHeader}
            </th>
            <th scope="col" className="px-6 py-5 font-semibold text-brand-800">
              {basicHeader}
            </th>
            <th scope="col" className="px-6 py-5 font-semibold text-brand-800">
              {premiumHeader}
            </th>
            <th scope="col" className="px-6 py-5 font-semibold text-brand-800">
              {proHeader}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.feature}
              className="border-b border-warm-gray/25 last:border-0 even:bg-cream/40"
            >
              <th scope="row" className="px-6 py-4 font-medium text-brand-800">
                {row.feature}
              </th>
              <td className="px-6 py-4 text-muted">{row.basic}</td>
              <td className="px-6 py-4 text-muted">{row.premium}</td>
              <td className="px-6 py-4 text-muted">{row.professional}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
