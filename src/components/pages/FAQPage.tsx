import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQCategoryAccordion } from "@/components/faq/FAQCategoryAccordion";
import { faqCategories } from "@/data/faq-de";

export function FAQPage() {
  const totalQuestions = faqCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <p className="text-label mb-6 block text-gold-600">Wissen & Orientierung</p>
          <h1 className="text-h1 text-brand-800">
            Häufige Fragen rund um Immobilienentscheidungen
          </h1>
          <div className="gold-rule mt-8" aria-hidden="true" />
          <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
            Antworten auf zentrale Fragen zu Eigennutzung, Kapitalanlage, Fix &amp; Flip,
            Sanierung, Mehrfamilienhäusern und Gewerbeimmobilien. Strukturiert,
            nachvollziehbar und auf das Wesentliche konzentriert.
          </p>

          {/* Stats row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light tabular-nums text-brand-800">
                {faqCategories.length}
              </span>
              <span className="text-sm text-muted">Themenbereiche</span>
            </div>
            <div className="h-4 w-px bg-warm-gray/60" aria-hidden="true" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light tabular-nums text-brand-800">
                {totalQuestions}
              </span>
              <span className="text-sm text-muted">Fragen & Antworten</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* How-to hint */}
          <p className="mb-10 flex items-center gap-3 text-sm text-muted">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#B9965B]/40 text-[#B9965B]"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8 7v4M8 5.5v.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Kategorie anklicken, um die Fragen zu öffnen. Antworten erscheinen nach Klick auf die jeweilige Frage.
          </p>

          <div className="flex flex-col gap-4">
            {faqCategories.map((category, index) => (
              <FAQCategoryAccordion
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* Bottom hint */}
          <p className="mt-10 text-center text-sm text-muted/60">
            Alle {totalQuestions} Fragen können gleichzeitig geöffnet werden.
          </p>
        </div>
      </Section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="mb-16 bg-[#0F3D2E] py-24 md:mb-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <p className="text-label mb-6 block text-[#B9965B]">Weitergehende Unterstützung</p>
          <h2 className="text-h2 text-white">
            Ihre Frage war nicht dabei?
          </h2>
          <div
            className="mx-auto mt-8 h-px w-10 rounded-full bg-[#B9965B]/60"
            aria-hidden="true"
          />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.8] text-white/75">
            Immobilienentscheidungen sind individuell. Wenn Ihre Situation eine
            persönliche Einschätzung erfordert, stehen wir Ihnen gerne zur Verfügung.
          </p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href="/de/dashboard" className="sm:w-auto">
              Analyse starten
            </Button>
            <Button href="/de/kontakt" variant="white" className="sm:w-auto">
              Anfrage senden
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
