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
    href: "/de/loesungen/kapitalanlage",
    active: true,
  },
  {
    title: "Fix & Flip",
    description:
      "Strukturierte Einschätzung von Sanierungspotenzial und Wertsteigerung für kurz- bis mittelfristige Investitionen.",
    href: "/de/loesungen/fix-flip",
    active: true,
  },
  {
    title: "Sanierung & Modernisierung",
    description:
      "Analyse von Sanierungsaufwand, Fördermöglichkeiten und langfristigem Mehrwert einer Modernisierung.",
    href: "/de/loesungen/sanierung-modernisierung",
    active: true,
  },
  {
    title: "Mehrfamilienhäuser",
    description:
      "Bewertung von Mehrfamilienhäusern nach Ertrag, Verwaltungsaufwand und langfristigem Risikoprofil.",
    href: "/de/loesungen/mehrfamilienhaeuser",
    active: true,
  },
  {
    title: "Gewerbeimmobilien",
    description:
      "Einschätzung gewerblicher Objekte nach individuellem Nutzungskonzept, Zielsetzung und Marktlage.",
    href: "/de/loesungen/gewerbeimmobilien",
    active: true,
  },
];

const solutionsEN: Solution[] = [
  {
    title: "Owner Occupation",
    description:
      "Individual assessment for owner-occupied properties. Decisions in the context of your personal goals, life situation and long-term plans.",
    href: "/en/solutions/owner-occupation",
    active: true,
  },
  {
    title: "Investment Property",
    description:
      "Return-focused analyses for investment decisions. Assessment of cashflow, yield and risk profile.",
    href: "/en/solutions/investment-property",
    active: true,
  },
  {
    title: "Fix & Flip",
    description:
      "Structured assessment of renovation potential and value creation for short- to medium-term investments.",
    href: "/en/solutions/fix-flip",
    active: true,
  },
  {
    title: "Renovation & Modernisation",
    description:
      "Analysis of renovation scope, funding opportunities and the long-term value added by modernisation.",
    href: "/en/solutions/renovation-modernization",
    active: true,
  },
  {
    title: "Multi-Family Properties",
    description:
      "Evaluation of multi-family properties by yield, management requirements and long-term risk profile.",
    href: "/en/solutions/multi-family-properties",
    active: true,
  },
  {
    title: "Commercial Real Estate",
    description:
      "Assessment of commercial properties by individual usage concept, objectives and market conditions.",
    href: "/en/solutions/commercial-real-estate",
    active: true,
  },
];

const copy = {
  de: {
    heroLabel: "Lösungen",
    heroHeadline: "Lösungen für Ihre Immobilienziele",
    heroText:
      "immowap bietet strukturierte Analysen und individuelle Beratung – abgestimmt auf Ihre Ziele, Ihre Situation und Ihre Erwartungen. Jeder Bereich folgt einem eigenen Betrachtungsrahmen.",
    gridLabel: "Für Ihre Ziele",
    gridHeadline: "Sechs Bereiche. Eine Plattform.",
    gridDescription:
      "Jeder Bereich adressiert unterschiedliche Ziele, Situationen und Anforderungen. Analysen werden individuell und kontextbezogen erstellt.",
    badgeActive: "Verfügbar",
    badgeInactive: "Bald verfügbar",
    cardLink: "Mehr erfahren",
    differentiatorHeadline: "Nicht jede Immobilie wird gleich betrachtet.",
    differentiatorText:
      "Unterschiedliche Ziele erfordern unterschiedliche Betrachtungsweisen. immowap strukturiert Analysen nach dem jeweiligen Kontext – ob Eigennutzung, Kapitalanlage oder Sanierung.",
    ctaHeadline: "Bereit für eine strukturierte Analyse?",
    ctaText:
      "Teilen Sie uns Ihr Vorhaben mit. Wir erstellen eine individuelle Einschätzung abgestimmt auf Ihre Ziele.",
    ctaPrimary: "Analyse starten",
    ctaSecondary: "Anfrage senden",
  },
  en: {
    heroLabel: "Solutions",
    heroHeadline: "Solutions for your property goals",
    heroText:
      "immowap offers structured analyses and individual advisory — tailored to your goals, your situation and your expectations. Each area follows its own analytical framework.",
    gridLabel: "For your goals",
    gridHeadline: "Six areas. One platform.",
    gridDescription:
      "Each area addresses different goals, situations and requirements. Analyses are created individually and in context.",
    badgeActive: "Available",
    badgeInactive: "Coming soon",
    cardLink: "Learn more",
    differentiatorHeadline: "Not every property is evaluated in the same way.",
    differentiatorText:
      "Different goals require different perspectives. immowap structures analyses according to the respective context — whether owner-occupation, investment or renovation.",
    ctaHeadline: "Ready for a structured analysis?",
    ctaText:
      "Share your plans with us. We will create an individual assessment aligned with your goals.",
    ctaPrimary: "Start analysis",
    ctaSecondary: "Send enquiry",
  },
};

export function LoesungenPage({ locale }: LoesungenPageProps) {
  const c = copy[locale];
  const solutions = locale === "de" ? solutionsDE : solutionsEN;
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-label mb-6 block text-gold-600">{c.heroLabel}</p>
            <h1 className="text-h1 text-brand-800">{c.heroHeadline}</h1>
            <div className="gold-rule mt-8" aria-hidden="true" />
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-muted">{c.heroText}</p>
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.gridLabel}
          headline={c.gridHeadline}
          description={c.gridDescription}
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
                      {c.badgeActive}
                    </span>
                  </div>
                  <p className="text-base leading-[1.8] text-muted">
                    {solution.description}
                  </p>
                  <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
                    {c.cardLink}
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
                    {c.badgeInactive}
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
          <h2 className="text-h2 text-brand-800">{c.differentiatorHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">
            {c.differentiatorText}
          </p>
        </div>
      </Section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        headline={c.ctaHeadline}
        text={c.ctaText}
        primaryLabel={c.ctaPrimary}
        primaryHref={dashboardHref}
        secondaryLabel={c.ctaSecondary}
        secondaryHref={contactHref}
      />
    </>
  );
}
