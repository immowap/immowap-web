import { KnowledgeCard } from "@/components/ui/cards";
import { CTASection } from "@/components/ui/CTASection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeader } from "@/components/ui/Section";
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
      "100 strukturierte Fragen und Antworten zu Eigennutzung, Kapitalanlage, Fix & Flip, Projektentwicklung, Individueller Strategie und Gewerbeimmobilien.",
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
      "120 structured questions and answers on owner occupation, investment property, fix & flip, project development, individual strategy and commercial real estate.",
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
    ctaHeadline: "Wissen in Entscheidungen übersetzen.",
    ctaText:
      "Hintergrundwissen hilft bei der Einordnung — strukturierte Analysen liefern die Grundlage für den nächsten Schritt.",
    ctaPrimary: "Analyse starten",
    ctaSecondary: "Kontakt aufnehmen",
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
    ctaHeadline: "Turn knowledge into decisions.",
    ctaText:
      "Background knowledge helps with context — structured analyses provide the foundation for your next step.",
    ctaPrimary: "Start analysis",
    ctaSecondary: "Get in touch",
  },
};

const areaIcons = ["reports", "chart", "search"] as const;

export function WissenPage({ locale }: WissenPageProps) {
  const c = copy[locale];
  const areas = locale === "de" ? areasDE : areasEN;

  return (
    <>
      <PageHeader
        layout="text"
        label={c.heroLabel}
        headline={c.heroHeadline}
        subheadline={c.heroText}
      />

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader
          label={c.gridLabel}
          headline={c.gridHeadline}
          description={c.gridDescription}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area, index) => (
            <KnowledgeCard
              key={area.title}
              title={area.title}
              description={area.description}
              href={area.href}
              icon={areaIcons[index]}
              linkLabel={c.cardLink}
            />
          ))}
        </div>
      </Section>

      <CTASection
        headline={c.ctaHeadline}
        text={c.ctaText}
        primaryLabel={c.ctaPrimary}
        primaryHref={getRoute(locale, "dashboard")}
        secondaryLabel={c.ctaSecondary}
        secondaryHref={getRoute(locale, "contact")}
      />
    </>
  );
}
