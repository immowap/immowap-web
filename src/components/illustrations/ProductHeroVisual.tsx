import { Icon } from "@/components/ui/icons/Icon";
import { getProductHeroCopy } from "@/lib/i18n/home-copy";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { heroImageClassName } from "@/components/ui/HeroImage";

interface ProductHeroVisualProps {
  locale: Locale;
  className?: string;
}

function MiniBar({ height, className }: { height: string; className?: string }) {
  return (
    <div
      className={cn("w-full rounded-sm bg-brand-secondary/70", className)}
      style={{ height }}
      aria-hidden="true"
    />
  );
}

function StatCard({
  label,
  value,
  trend,
  icon,
}: {
  label: string;
  value: string;
  trend?: string;
  icon: "market-value" | "risk" | "location" | "cashflow";
}) {
  return (
    <div className="rounded-2xl border border-warm-gray/40 bg-surface/95 p-3 shadow-[var(--shadow-sm)] backdrop-blur-sm sm:p-4">
      <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted sm:text-[11px]">
          {label}
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-800/8 text-brand-800 sm:h-8 sm:w-8">
          <Icon name={icon} size={14} />
        </span>
      </div>
      <p className="text-lg font-semibold tracking-tight text-brand-800 sm:text-xl">{value}</p>
      {trend ? (
        <p className="mt-0.5 text-[10px] font-medium text-brand-secondary sm:text-xs">{trend}</p>
      ) : null}
    </div>
  );
}

export function ProductHeroVisual({ locale, className }: ProductHeroVisualProps) {
  const c = getProductHeroCopy(locale);

  return (
    <div
      className={cn(
        heroImageClassName,
        "aspect-[4/3] max-w-[560px] border border-warm-gray/30 bg-surface lg:max-w-[560px]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-cream to-white" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 560 420"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="hero-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="var(--brand-primary)"
              strokeWidth="0.5"
              opacity="0.12"
            />
          </pattern>
        </defs>
        <rect width="560" height="420" fill="url(#hero-grid)" />
        <path
          d="M80 320 Q180 280 260 300 T440 260"
          fill="none"
          stroke="var(--brand-secondary)"
          strokeWidth="2"
          opacity="0.4"
        />
        <circle cx="260" cy="300" r="6" fill="var(--gold-500)" opacity="0.8" />
      </svg>

      <div className="relative flex h-full flex-col p-4 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2 w-2 rounded-full bg-gold-500/80 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-brand-secondary/50 sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-warm-gray sm:h-2.5 sm:w-2.5" />
          </div>
          <span className="rounded-full bg-brand-800/8 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-800 sm:px-3 sm:py-1 sm:text-[10px]">
            {c.stats.aiBadge}
          </span>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-2 sm:gap-4">
          <StatCard
            label={c.stats.marketValue}
            value={c.values.marketValue}
            trend={c.trends.marketValue}
            icon="market-value"
          />
          <StatCard
            label={c.stats.risk}
            value={c.values.risk}
            trend={c.trends.risk}
            icon="risk"
          />
          <StatCard
            label={c.stats.location}
            value={c.values.location}
            trend={c.trends.location}
            icon="location"
          />
          <StatCard
            label={c.stats.cashflow}
            value={c.values.cashflow}
            trend={c.trends.cashflow}
            icon="cashflow"
          />
        </div>

        <div className="mt-3 rounded-2xl border border-warm-gray/30 bg-brand-800/[0.03] p-3 sm:mt-4 sm:p-4">
          <div className="mb-2 flex items-center justify-between sm:mb-3">
            <span className="text-[10px] font-medium text-brand-800 sm:text-xs">{c.stats.chartTitle}</span>
            <span className="text-[9px] text-muted sm:text-[10px]">{c.stats.chartPeriod}</span>
          </div>
          <div className="flex h-12 items-end gap-1 sm:h-16 sm:gap-1.5">
            {[40, 55, 48, 62, 58, 72, 68, 78, 85, 80, 92, 100].map((h, i) => (
              <MiniBar
                key={i}
                height={`${h}%`}
                className={i === 11 ? "bg-gold-500" : "bg-brand-secondary/50"}
              />
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2 rounded-xl border border-warm-gray/25 bg-surface/80 px-2.5 py-2 sm:mt-3 sm:gap-3 sm:px-3 sm:py-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-800/8 text-brand-800 sm:h-8 sm:w-8">
            <Icon name="documents" size={14} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-medium text-brand-800 sm:text-xs">{c.stats.docTitle}</p>
            <p className="truncate text-[9px] text-muted sm:text-[10px]">{c.stats.docMeta}</p>
          </div>
          <span className="shrink-0 rounded-full bg-brand-secondary/15 px-1.5 py-0.5 text-[9px] font-semibold text-brand-secondary sm:px-2 sm:text-[10px]">
            ✓
          </span>
        </div>
      </div>
    </div>
  );
}
