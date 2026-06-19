import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES
   Defined once here so future articles / categories can be added by simply
   extending the `articles` array without touching layout code.
───────────────────────────────────────────────────────────────────────────── */

type IconName =
  | "scale"
  | "banknote"
  | "key"
  | "document"
  | "building"
  | "home"
  | "tool"
  | "receipt"
  | "chart"
  | "book";

export interface Article {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  /** Set to a real path once the article page is published. */
  href: string | null;
}

/* ─────────────────────────────────────────────────────────────────────────────
   ICON PATHS
   Stroke-style paths (Heroicons v2, 24×24 viewBox).
   Multiple M-commands within a single <path d="…"> are valid SVG.
───────────────────────────────────────────────────────────────────────────── */

const ICON_PATHS: Record<IconName, string> = {
  scale:
    "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z",
  banknote:
    "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
  key: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z",
  document:
    "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  building:
    "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  tool: "M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z",
  receipt:
    "M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  chart:
    "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  book: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
};

function ArticleIcon({ name }: { name: IconName }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-800/[0.06]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-brand-700"
        aria-hidden="true"
      >
        <path d={ICON_PATHS[name]} />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ARTICLE DATA
   Add new articles by appending to this array. The grid layout adapts
   automatically. Set href once the article page is published.
───────────────────────────────────────────────────────────────────────────── */

export const articles: Article[] = [
  {
    id: "immobilienbewertung",
    title: "Immobilienbewertung",
    description:
      "Den Wert einer Immobilie richtig verstehen – von Marktwert und Verkehrswert bis zu den wichtigsten Bewertungsverfahren.",
    icon: "scale",
    href: null,
  },
  {
    id: "finanzierung",
    title: "Finanzierung",
    description:
      "Grundlagen der Immobilienfinanzierung, Eigenkapital, Zinsbindung und wichtige Aspekte der Kreditvergabe.",
    icon: "banknote",
    href: null,
  },
  {
    id: "kaufprozess",
    title: "Kaufprozess",
    description:
      "Der Immobilienkauf Schritt für Schritt – von der Suche bis zur Übergabe.",
    icon: "key",
    href: null,
  },
  {
    id: "dokumente",
    title: "Dokumente verstehen",
    description:
      "Wichtige Unterlagen vor dem Kauf richtig einordnen und bewerten.",
    icon: "document",
    href: null,
  },
  {
    id: "weg",
    title: "Eigentumswohnung & WEG",
    description:
      "Hausgeld, Rücklagen, Sonderumlagen und die wichtigsten Grundlagen der Wohnungseigentümergemeinschaft.",
    icon: "building",
    href: null,
  },
  {
    id: "vermietung",
    title: "Vermietung",
    description:
      "Grundlagen für Eigentümer und Investoren rund um Mietvertrag, Nebenkosten und Vermietung.",
    icon: "home",
    href: null,
  },
  {
    id: "sanierung",
    title: "Sanierung & Modernisierung",
    description:
      "Renovieren, modernisieren oder sanieren – welche Maßnahmen sinnvoll sein können.",
    icon: "tool",
    href: null,
  },
  {
    id: "steuern",
    title: "Steuern rund um Immobilien",
    description:
      "Wichtige steuerliche Aspekte beim Kauf, Besitz und Verkauf von Immobilien.",
    icon: "receipt",
    href: null,
  },
  {
    id: "strategien",
    title: "Immobilienstrategien",
    description:
      "Eigennutzung, Kapitalanlage, Fix & Flip, Mehrfamilienhäuser und unterschiedliche Investitionsansätze.",
    icon: "chart",
    href: null,
  },
  {
    id: "lexikon",
    title: "Immobilienlexikon",
    description:
      "Die wichtigsten Begriffe rund um Immobilien einfach erklärt.",
    icon: "book",
    href: null,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   ARTICLE CARD
   Renders as a <Link> when href is set, otherwise as a static <article>.
───────────────────────────────────────────────────────────────────────────── */

function ArticleCard({ article }: { article: Article }) {
  const inner = (
    <div
      className={cn(
        "card-premium flex h-full flex-col gap-4",
        "border-[#D7D2C8] shadow-[0_4px_20px_rgba(15,61,46,0.06)]",
        article.href &&
          "border-[#B9965B]/25 shadow-[0_8px_32px_rgba(185,150,91,0.09)] ring-1 ring-[#B9965B]/12",
      )}
    >
      {/* Top row: icon + category badge */}
      <div className="flex items-start justify-between gap-3">
        <ArticleIcon name={article.icon} />
        <span
          className={cn(
            "text-label shrink-0",
            article.href ? "text-gold-500" : "text-[#D7D2C8]",
          )}
        >
          {article.href ? "Immobilienwissen" : "Demnächst"}
        </span>
      </div>

      {/* Title */}
      <h3
        className={cn(
          "text-h3 text-brand-800",
          article.href &&
            "transition-colors duration-300 group-hover:text-brand-600",
        )}
      >
        {article.title}
      </h3>

      {/* Description */}
      <p className="flex-1 text-base leading-[1.8] text-muted">
        {article.description}
      </p>

      {/* Footer action */}
      {article.href ? (
        <span className="text-label mt-auto inline-flex items-center gap-2 text-gold-600 transition-all duration-300 group-hover:gap-3">
          Mehr erfahren
          <span aria-hidden="true">→</span>
        </span>
      ) : (
        <span className="text-label mt-auto text-[#D7D2C8]">
          Bald verfügbar
        </span>
      )}
    </div>
  );

  if (article.href) {
    return (
      <Link href={article.href} className="group block no-underline">
        {inner}
      </Link>
    );
  }

  return <article>{inner}</article>;
}

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────────────────── */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85";

export function ImmobilienwissenPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="overflow-hidden bg-cream" id="top">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-12 py-20 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-2 lg:gap-16 lg:py-0">
            {/* Left – text */}
            <div className="lg:py-28">
              <p className="text-label mb-6 block text-gold-600">Wissen</p>
              <h1 className="text-h1 text-brand-800">Immobilienwissen</h1>
              <div className="gold-rule mt-8" aria-hidden="true" />
              <p className="mt-8 max-w-lg text-lg leading-[1.8] text-muted">
                Fundiertes Wissen rund um Immobilien, Bewertung, Finanzierung
                und Strategien. Verständlich aufbereitet und langfristig
                erweiterbar.
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <Button href="#artikel">Artikel entdecken</Button>
                <Button href="/de/wissen/faq" variant="secondary">
                  FAQ &amp; Antworten
                </Button>
              </div>
            </div>

            {/* Right – image */}
            <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[540px] lg:h-[calc(100svh-8rem)] lg:rounded-[2rem]">
              <Image
                src={HERO_IMAGE}
                alt="Elegantes europäisches Wohngebäude – Immobilienwissen"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#B9965B]/8 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ────────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-h2 text-brand-800">
            Wissen als Grundlage guter Entscheidungen
          </h2>
          <div className="gold-rule mt-8" aria-hidden="true" />
          <p className="mt-8 text-lg leading-[1.8] text-muted">
            Immobilienentscheidungen betreffen häufig langfristige finanzielle
            und persönliche Ziele. Deshalb stellt immowap ausgewählte Themen
            verständlich und strukturiert dar. Die Inhalte werden kontinuierlich
            erweitert und orientieren sich an den Bedürfnissen von Eigentümern,
            Käufern und Investoren.
          </p>
        </div>
      </Section>

      {/* ── ARTICLE GRID ─────────────────────────────────────────────────── */}
      <Section id="artikel" className="py-24 md:py-32">
        <SectionHeader
          label="Themenübersicht"
          headline="Immobilienwissen im Überblick"
          description="Grundlagen, Begriffe und strukturierte Einordnungen zu den wichtigsten Themen rund um Immobilien. Die Sammlung wird kontinuierlich erweitert."
        />

        {/* Dynamic grid: 3 / 2 / 1 columns — scales to any number of articles */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Section>

      {/* ── BOTTOM SECTION ──────────────────────────────────────────────── */}
      <Section variant="muted" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-label mb-6 block text-gold-600">Ausblick</p>
          <h2 className="text-h2 text-brand-800">Weitere Inhalte folgen</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-xl text-lg leading-[1.8] text-muted">
            Das Immobilienwissen von immowap wird kontinuierlich erweitert. Neben
            Grundlagenartikeln entstehen zusätzliche Beiträge zu Markttrends,
            Strategien und häufig gestellten Fragen.
          </p>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href="/de/wissen/markt-trends" variant="secondary">
              Markt &amp; Trends
            </Button>
            <Button href="/de/wissen/faq" variant="secondary">
              FAQ &amp; Antworten
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
