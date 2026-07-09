import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { cn } from "@/lib/utils";

interface HomeProductShowcaseProps {
  locale: "de" | "en";
}

const copy = {
  de: {
    label: "Die Plattform",
    headline: "Intelligente Analyse in einem Workflow",
    steps: [
      { icon: "documents" as IconName, title: "Dokumente hochladen", desc: "Exposés, Gutachten, Verträge" },
      { icon: "ai-analysis" as IconName, title: "KI-Analyse", desc: "Strukturierte Auswertung in Minuten" },
      { icon: "market-value" as IconName, title: "Bewertung & Risiko", desc: "Marktwert, Cashflow, Standort" },
      { icon: "reports" as IconName, title: "Bericht erhalten", desc: "PDF mit klaren Empfehlungen" },
    ],
  },
  en: {
    label: "The platform",
    headline: "Intelligent analysis in one workflow",
    steps: [
      { icon: "documents" as IconName, title: "Upload documents", desc: "Listings, appraisals, contracts" },
      { icon: "ai-analysis" as IconName, title: "AI analysis", desc: "Structured evaluation in minutes" },
      { icon: "market-value" as IconName, title: "Valuation & risk", desc: "Market value, cashflow, location" },
      { icon: "reports" as IconName, title: "Receive report", desc: "PDF with clear recommendations" },
    ],
  },
};

export function HomeProductShowcase({ locale }: HomeProductShowcaseProps) {
  const c = copy[locale];

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
      <div>
        <p className="text-label mb-4 text-gold-600">{c.label}</p>
        <h2 className="text-h2 text-brand-800">{c.headline}</h2>
        <div className="gold-rule mt-8" aria-hidden="true" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {c.steps.map((step, index) => (
          <div
            key={step.title}
            className={cn(
              "group rounded-[28px] border border-warm-gray/30 bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-gold-500/25 hover:shadow-[var(--shadow-card-hover)]",
              index === 0 && "sm:col-span-2 sm:flex sm:items-center sm:gap-6",
            )}
          >
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800/8 text-brand-800 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white">
                <Icon name={step.icon} size={22} />
              </span>
              <div>
                <span className="text-label text-gold-600/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-brand-800">{step.title}</h3>
                <p className="mt-1 text-sm text-muted">{step.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
