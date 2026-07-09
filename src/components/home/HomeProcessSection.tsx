import { HomeProductShowcase } from "@/components/illustrations/HomeProductShowcase";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface HomeProcessSectionProps {
  locale: Locale;
}

/** Workflow (how we work) + methodology process steps */
export function HomeProcessSection({ locale }: HomeProcessSectionProps) {
  const t = getTranslations(locale);

  return (
    <>
      <Section variant="muted">
        <HomeProductShowcase locale={locale} />
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label mb-4 text-gold-600">{t.home.process.label}</p>
          <h2 className="text-h2 text-brand-800">
            {locale === "de" ? "Transparent. Strukturiert. Nachvollziehbar." : "Transparent. Structured. Traceable."}
          </h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {t.home.process.steps.map((step, index) => (
            <div key={step} className="relative rounded-[28px] border border-warm-gray/30 bg-surface p-8 shadow-[var(--shadow-card)]">
              <span className="text-label mb-4 block text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h4 text-brand-800">{step}</h3>
              {index < t.home.process.steps.length - 1 ? (
                <div
                  className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-warm-gray lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-body-lg text-muted">
          {locale === "de"
            ? "Erfahrung und Technologie greifen ineinander — für Entscheidungen mit langfristiger Perspektive."
            : "Experience and technology work together — for decisions with a long-term perspective."}
        </p>
      </Section>
    </>
  );
}
