import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface LoesungenPageProps {
  locale: Locale;
}

interface Solution {
  title: string;
  description: string;
  href: string | null;
  active: boolean;
}

const solutionsDE: Solution[] = [
  {
    title: "Eigennutzung",
    description:
      "Individuelle Betrachtung für das Wohnen im Eigenbestand. Entscheidungen im Kontext Ihrer persönlichen Ziele, Lebenssituation und langfristigen Pläne.",
    href: "/de/loesungen/eigennutzung",
    active: true,
  },
  {
    title: "Kapitalanlage",
    description:
      "Renditeorientierte Analysen für Investitionsentscheidungen. Bewertung von Cashflow, Rendite und Risikoprofil.",
    href: null,
    active: false,
  },
  {
    title: "Fix & Flip",
    description:
      "Strukturierte Einschätzung von Sanierungspotenzial und Wertsteigerung für kurz- bis mittelfristige Investitionen.",
    href: null,
    active: false,
  },
  {
    title: "Sanierung & Modernisierung",
    description:
      "Analyse von Sanierungsaufwand, Fördermöglichkeiten und langfristigem Mehrwert einer Modernisierung.",
    href: null,
    active: false,
  },
  {
    title: "Mehrfamilienhäuser",
    description:
      "Bewertung von Mehrfamilienhäusern nach Ertrag, Verwaltungsaufwand und langfristigem Risikoprofil.",
    href: null,
    active: false,
  },
  {
    title: "Gewerbeimmobilien",
    description:
      "Einschätzung gewerblicher Objekte nach individuellem Nutzungskonzept, Zielsetzung und Marktlage.",
    href: null,
    active: false,
  },
];

export function LoesungenPage({ locale }: LoesungenPageProps) {
  const solutions = locale === "de" ? solutionsDE : solutionsDE;
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-label mb-6 block text-gold-600">Lösungen</p>
            <h1 className="text-h1 text-brand-800">
              Lösungen für Ihre Immobilienziele
            </h1>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
              immowap bietet strukturierte Analysen und individuelle Beratung –
              abgestimmt auf Ihre Ziele, Ihre Situation und Ihre Erwartungen. Jeder
              Bereich folgt einem eigenen Betrachtungsrahmen.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label="Für Ihre Ziele"
          headline="Sechs Bereiche. Eine Plattform."
          description="Jeder Bereich adressiert unterschiedliche Ziele, Situationen und Anforderungen. Analysen werden individuell und kontextbezogen erstellt."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) =>
            solution.active && solution.href ? (
              /* Active card — fully linked */
              <Link
                key={solution.title}
                href={solution.href}
                className="group block no-underline"
              >
                <div
                  className={cn(
                    "card-premium flex h-full flex-col gap-4",
                    "border-[#B9965B]/30 shadow-[0_12px_40px_rgba(185,150,91,0.10)] ring-1 ring-[#B9965B]/15",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-h3 text-brand-800 transition-colors duration-300 group-hover:text-brand-600">
                      {solution.title}
                    </h2>
                    <span className="text-label shrink-0 text-gold-500">
                      Verfügbar
                    </span>
                  </div>
                  <p className="text-base leading-[1.8] text-muted">
                    {solution.description}
                  </p>
                  <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
                    Mehr erfahren
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ) : (
              /* Inactive card — not yet linked */
              <div key={solution.title} className="card-premium flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-h3 text-brand-800">{solution.title}</h2>
                  <span className="text-label shrink-0 text-warm-gray">
                    Bald verfügbar
                  </span>
                </div>
                <p className="text-base leading-[1.8] text-muted">
                  {solution.description}
                </p>
              </div>
            ),
          )}
        </div>
      </Section>

      {/* ─── DIFFERENTIATOR ────────────────────────────────────────────── */}
      <Section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-brand-800">
            Nicht jede Immobilie wird gleich betrachtet.
          </h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
            Unterschiedliche Ziele erfordern unterschiedliche Betrachtungsweisen. immowap
            strukturiert Analysen nach dem jeweiligen Kontext – ob Eigennutzung,
            Kapitalanlage oder Sanierung.
          </p>
        </div>
      </Section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        headline="Bereit für eine strukturierte Analyse?"
        text="Teilen Sie uns Ihr Vorhaben mit. Wir erstellen eine individuelle Einschätzung abgestimmt auf Ihre Ziele."
        primaryLabel="Analyse starten"
        primaryHref={dashboardHref}
        secondaryLabel="Anfrage senden"
        secondaryHref={contactHref}
      />
    </>
  );
}
