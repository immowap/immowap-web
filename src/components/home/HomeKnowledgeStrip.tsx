import { KnowledgeCard } from "@/components/ui/cards";
import { SecondaryButton } from "@/components/ui/buttons";
import { Section, SectionHeader } from "@/components/ui/Section";
import { type IconName } from "@/components/ui/icons/Icon";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";

interface HomeKnowledgeStripProps {
  locale: Locale;
}

const knowledgeLinks = {
  de: [
    {
      title: "Immobilienwissen",
      href: "/de/wissen/immobilienwissen",
      icon: "reports" as IconName,
      description: "Grundlagen, Begriffe und strukturierte Einordnungen",
    },
    {
      title: "Markt & Trends",
      href: "/de/wissen/markt-trends",
      icon: "chart" as IconName,
      description: "Marktentwicklungen und regionale Perspektiven",
    },
    {
      title: "FAQ & Antworten",
      href: "/de/wissen/faq",
      icon: "search" as IconName,
      description: "Antworten auf häufige Fragen",
    },
  ],
  en: [
    {
      title: "Property knowledge",
      href: "/en/knowledge/property-knowledge",
      icon: "reports" as IconName,
      description: "Fundamentals, terms and structured context",
    },
    {
      title: "Market & trends",
      href: "/en/knowledge/market-trends",
      icon: "chart" as IconName,
      description: "Market developments and regional perspectives",
    },
    {
      title: "FAQ & answers",
      href: "/en/knowledge/faq",
      icon: "search" as IconName,
      description: "Answers to frequently asked questions",
    },
  ],
} as const;

const stripCopy = {
  de: {
    label: "Wissen",
    headline: "Weiter vertiefen",
    description: "Fundiertes Wissen für bessere Entscheidungen — verständlich aufbereitet.",
    cta: "Alle Themen",
    linkLabel: "Mehr erfahren",
  },
  en: {
    label: "Knowledge",
    headline: "Go deeper",
    description: "In-depth knowledge for better decisions — clearly structured.",
    cta: "All topics",
    linkLabel: "Learn more",
  },
} as const;

export function HomeKnowledgeStrip({ locale }: HomeKnowledgeStripProps) {
  const copy = stripCopy[locale];
  const links = knowledgeLinks[locale];

  return (
    <Section variant="muted">
      <SectionHeader
        label={copy.label}
        headline={copy.headline}
        description={copy.description}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {links.map((item) => (
          <KnowledgeCard
            key={item.href}
            title={item.title}
            description={item.description}
            href={item.href}
            icon={item.icon}
            linkLabel={copy.linkLabel}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <SecondaryButton href={getRoute(locale, "knowledge")}>{copy.cta}</SecondaryButton>
      </div>
    </Section>
  );
}
