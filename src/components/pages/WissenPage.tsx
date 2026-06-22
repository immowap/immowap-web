import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CTASection } from "@/components/ui/CTASection";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface WissenPageProps {
  locale: Locale;
}

interface KnowledgeArea {
  title: string;
  description: string;
  href: string;
}

const areasDE: KnowledgeArea[] = [
  {
    title: "Immobilienwissen",
    description:
      "Grundlagen, Begriffe und Orientierung rund um Kauf, Bewertung, Finanzierung und Immobilienstrategie.",
    href: "/de/wissen/immobilienwissen",
  },
  {
    title: "Markt & Trends",
    description:
      "Einordnung aktueller Entwicklungen, Marktbewegungen und relevanter Trends im Immobilienbereich.",
    href: "/de/wissen/markt-trends",
  },
  {
    title: "FAQ & Antworten",
    description:
      "120 strukturierte Fragen und Antworten zu Eigennutzung, Kapitalanlage, Fix & Flip, Projektentwicklung, Individueller Strategie und Gewerbeimmobilien.",
    href: "/de/wissen/faq",
  },
];

const areasEN: KnowledgeArea[] = [
  {
    title: "Property Knowledge",
    description:
      "Fundamentals, terminology and orientation on buying, valuation, financing and property strategy.",
    href: "/en/knowledge/property-knowledge",
  },
  {
    title: "Market & Trends",
    description:
      "Assessment of current developments, market movements and relevant trends in the real estate sector.",
    href: "/en/knowledge/market-trends",
  },
  {
    title: "FAQ & Answers",
    description:
      "120 structured questions and answers on owner occupation, investment property, fix & flip, renovation, multi-family houses and commercial real estate.",
    href: "/en/knowledge/faq",
  },
];

const copy = {
  de: {
    heroLabel: "Wissen",
    heroHeadline: "Wissen rund um Immobilienentscheidungen",
    heroText:
      "Fundierte Entscheidungen beginnen mit dem richtigen Wissen. Hier finden Sie Grundlagen, Markteinblicke und strukturierte Antworten auf die wichtigsten Fragen rund um Immobilien.",
    gridLabel: "Themenbereiche",
    gridHeadline: "Drei Bereiche. Ein Ziel.",
    gridDescription:
      "Vom Grundlagenwissen über aktuelle Marktentwicklungen bis hin zu konkreten Fragen und Antworten – strukturiert und auf das Wesentliche konzentriert.",
    cardLink: "Mehr erfahren",
    differentiatorHeadline: "Wissen schafft bessere Entscheidungen.",
    differentiatorText:
      "Immobilienentscheidungen sind komplex. Das richtige Hintergrundwissen hilft dabei, Chancen realistischer einzuschätzen und Risiken früh zu erkennen.",
    ctaHeadline: "Bereit für eine strukturierte Analyse?",
    ctaText:
      "Teilen Sie uns Ihr Vorhaben mit. Wir erstellen eine individuelle Einschätzung abgestimmt auf Ihre Ziele.",
    ctaPrimary: "Analyse starten",
    ctaSecondary: "Anfrage senden",
  },
  en: {
    heroLabel: "Knowledge",
    heroHeadline: "Knowledge for property decisions",
    heroText:
      "Well-founded decisions start with the right knowledge. Here you will find fundamentals, market insights and structured answers to the most important questions around real estate.",
    gridLabel: "Topic areas",
    gridHeadline: "Three areas. One goal.",
    gridDescription:
      "From fundamental knowledge to current market developments and concrete questions and answers — structured and focused on what matters.",
    cardLink: "Learn more",
    differentiatorHeadline: "Knowledge creates better decisions.",
    differentiatorText:
      "Property decisions are complex. The right background knowledge helps to assess opportunities more realistically and identify risks early.",
    ctaHeadline: "Ready for a structured analysis?",
    ctaText:
      "Share your plans with us. We will create an individual assessment aligned with your goals.",
    ctaPrimary: "Start analysis",
    ctaSecondary: "Send enquiry",
  },
};

export function WissenPage({ locale }: WissenPageProps) {
  const c = copy[locale];
  const areas = locale === "de" ? areasDE : areasEN;
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

      {/* ─── KNOWLEDGE AREAS GRID ──────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.gridLabel}
          headline={c.gridHeadline}
          description={c.gridDescription}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <Link key={area.title} href={area.href} className="group block no-underline">
              <div
                className={cn(
                  "card-premium flex h-full flex-col gap-4",
                  "border-[#B9965B]/30 shadow-[0_12px_40px_rgba(185,150,91,0.10)] ring-1 ring-[#B9965B]/15",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-h3 text-brand-800 transition-colors duration-300 group-hover:text-brand-600">
                    {area.title}
                  </h2>
                </div>
                <p className="text-base leading-[1.8] text-muted">{area.description}</p>
                <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
                  {c.cardLink}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
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
