import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { heroImageClassName } from "@/components/ui/HeroImage";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export type ProductVisualVariant =
  | "dashboard"
  | "valuation"
  | "location"
  | "documents"
  | "risk"
  | "cashflow"
  | "investment"
  | "renovation"
  | "chart";

interface ProductVisualProps {
  variant?: ProductVisualVariant;
  locale?: Locale;
  className?: string;
}

type VariantConfig = { icon: IconName; label: string; metric: string; sub: string };

const VARIANT_CONFIG: Record<Locale, Record<ProductVisualVariant, VariantConfig>> = {
  de: {
    dashboard: { icon: "ai-analysis", label: "Dashboard", metric: "12 Analysen", sub: "Aktive Projekte" },
    valuation: { icon: "market-value", label: "Marktwert", metric: "Beispiel", sub: "Vergleichswertverfahren" },
    location: { icon: "location", label: "Standort", metric: "Lageprofil", sub: "Strukturierte Einordnung" },
    documents: { icon: "documents", label: "Dokumente", metric: "3 geprüft", sub: "KI-Analyse" },
    risk: { icon: "risk", label: "Risiko", metric: "Score", sub: "Früherkennung" },
    cashflow: { icon: "cashflow", label: "Cashflow", metric: "Modell", sub: "Szenarioanalyse" },
    investment: { icon: "investment", label: "Rendite", metric: "Perspektive", sub: "Langfristig" },
    renovation: { icon: "renovation", label: "Entwicklung", metric: "Potenzial", sub: "Projektkontext" },
    chart: { icon: "chart", label: "Markt", metric: "Trend", sub: "Preisentwicklung" },
  },
  en: {
    dashboard: { icon: "ai-analysis", label: "Dashboard", metric: "12 analyses", sub: "Active projects" },
    valuation: { icon: "market-value", label: "Market value", metric: "Example", sub: "Sales comparison" },
    location: { icon: "location", label: "Location", metric: "Profile", sub: "Structured assessment" },
    documents: { icon: "documents", label: "Documents", metric: "3 reviewed", sub: "AI analysis" },
    risk: { icon: "risk", label: "Risk", metric: "Score", sub: "Early detection" },
    cashflow: { icon: "cashflow", label: "Cashflow", metric: "Model", sub: "Scenario analysis" },
    investment: { icon: "investment", label: "Return", metric: "Outlook", sub: "Long-term" },
    renovation: { icon: "renovation", label: "Development", metric: "Potential", sub: "Project context" },
    chart: { icon: "chart", label: "Market", metric: "Trend", sub: "Price development" },
  },
};

const FOOTER_COPY: Record<Locale, { chart: string; report: string }> = {
  de: { chart: "Marktvergleich", report: "PDF-Bericht bereit" },
  en: { chart: "Market comparison", report: "PDF report ready" },
};

export function ProductVisual({
  variant = "dashboard",
  locale = "de",
  className,
}: ProductVisualProps) {
  const config = VARIANT_CONFIG[locale][variant];
  const footer = FOOTER_COPY[locale];

  return (
    <div
      className={cn(
        heroImageClassName,
        "border border-warm-gray/30 bg-surface",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-cream to-white" />

      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 430 540"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="80" y="120" width="270" height="320" rx="4" fill="none" stroke="var(--brand-800)" strokeWidth="1.5" />
        <line x1="80" y1="200" x2="350" y2="200" stroke="var(--brand-800)" strokeWidth="1" />
        <line x1="215" y1="200" x2="215" y2="440" stroke="var(--brand-800)" strokeWidth="1" />
        <rect x="100" y="140" width="60" height="40" fill="none" stroke="var(--brand-secondary)" strokeWidth="1" />
        <rect x="270" y="140" width="60" height="40" fill="none" stroke="var(--brand-secondary)" strokeWidth="1" />
      </svg>

      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-brand-secondary/10 blur-2xl" />
      <div className="absolute bottom-16 right-6 h-32 w-32 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-label rounded-full bg-brand-800/8 px-3 py-1 text-brand-800">
            immowap
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-white">
            <Icon name={config.icon} size={20} />
          </span>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-warm-gray/30 bg-surface/90 p-5 shadow-sm backdrop-blur-sm">
            <p className="text-label text-gold-600">{config.label}</p>
            <p className="mt-2 text-h3 text-brand-800">{config.metric}</p>
            <p className="mt-1 text-body-sm text-muted">{config.sub}</p>
          </div>

          <div className="rounded-2xl border border-warm-gray/25 bg-brand-800/[0.04] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Icon name="chart" size={16} className="text-brand-secondary" />
              <span className="text-body-sm font-medium text-brand-800">{footer.chart}</span>
            </div>
            <div className="flex h-12 items-end gap-1">
              {[35, 50, 45, 60, 55, 70, 65, 80, 75, 90].map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 rounded-sm",
                    i >= 8 ? "bg-gold-500" : "bg-brand-secondary/45",
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-warm-gray/25 bg-surface/80 px-3 py-2.5">
          <Icon name="reports" size={18} className="text-brand-800" />
          <span className="text-body-sm text-muted">{footer.report}</span>
        </div>
      </div>
    </div>
  );
}
