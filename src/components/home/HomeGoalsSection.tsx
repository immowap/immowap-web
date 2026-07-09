import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icons/Icon";
import { Card, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";

interface HomeGoalsSectionProps {
  locale: Locale;
}

const goalRoutes = {
  de: [
    "/de/loesungen/eigennutzung",
    "/de/loesungen/kapitalanlage",
    "/de/loesungen/fix-flip",
    "/de/loesungen/sanierung-modernisierung",
    "/de/loesungen/mehrfamilienhaeuser",
    "/de/loesungen/gewerbeimmobilien",
  ],
  en: [
    "/en/solutions/owner-occupation",
    "/en/solutions/investment-property",
    "/en/solutions/fix-flip",
    "/en/solutions/renovation-modernization",
    "/en/solutions/multi-family-properties",
    "/en/solutions/commercial-real-estate",
  ],
} as const;

const goalIcons: IconName[] = [
  "building",
  "investment",
  "renovation",
  "strategy",
  "cashflow",
  "chart",
];

const goalsCopy = {
  de: { label: "Für Ihre Ziele", headline: "Lösungen für unterschiedliche Ziele" },
  en: { label: "For your goals", headline: "Solutions for different goals" },
} as const;

const goalTitles = {
  de: [
    "Eigennutzung",
    "Kapitalanlage",
    "Fix & Flip",
    "Projektentwicklung",
    "Individuelle Strategie",
    "Gewerbeimmobilien",
  ],
  en: [
    "Owner occupation",
    "Investment property",
    "Fix & Flip",
    "Project development",
    "Individual strategy",
    "Commercial real estate",
  ],
} as const;

export function HomeGoalsSection({ locale }: HomeGoalsSectionProps) {
  const copy = goalsCopy[locale];
  const titles = goalTitles[locale];
  const routes = goalRoutes[locale];

  return (
    <Section>
      <SectionHeader label={copy.label} headline={copy.headline} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {titles.map((title, index) => (
          <Link key={title} href={routes[index]} className="group block no-underline">
            <Card interactive className="h-full flex-row items-center gap-4 !p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-800/8 text-brand-800 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-white">
                <Icon name={goalIcons[index]} size={22} />
              </span>
              <CardTitle className="text-h4">{title}</CardTitle>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
