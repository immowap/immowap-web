import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { ArticleLayout } from "@/components/editorial/ArticleLayout";
import type { Locale } from "@/lib/i18n/config";
import { propertyKnowledgeOverview, propertyKnowledgeUi } from "@/lib/i18n/property-knowledge";
import {
  ArticleH2,
  ArticleP,
  EditorialList,
} from "@/components/property-knowledge/ArticleUi";
import { sanierungModernisierungCopy as copy } from "@/components/pages/sanierung-modernisierung-copy";

function WindowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-gold-600"
      aria-hidden="true"
    >
      <path d="M3 7.5V18a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 18V7.5M3 7.5l9-4.5 9 4.5M3 7.5h18M12 3v16.5" />
    </svg>
  );
}

interface SanierungModernisierungPageProps {
  locale: Locale;
}

export function SanierungModernisierungPage({ locale }: SanierungModernisierungPageProps) {
  const t = copy[locale];
  const ui = propertyKnowledgeUi[locale];

  return (
    <ArticleLayout
      locale={locale}
      breadcrumbTitle={t.breadcrumbTitle}
      heroLabel={ui.categoryShort}
      heroHeadline={t.hero.title}
      heroSubheadline={t.hero.intro}
      articleTitle={t.header.title}
      readMinutes={t.readMinutes}
      introduction={
        <>
          <ArticleP>{t.intro.p1}</ArticleP>
          <ArticleP>{t.intro.p2}</ArticleP>
        </>
      }
      backLinkHref={propertyKnowledgeOverview[locale].href}
      relatedExcludeId="sanierung-modernisierung"
    >
      <ArticleH2 id="unterschiede">{t.unterschiede.heading}</ArticleH2>
      <ArticleP>{t.unterschiede.p1}</ArticleP>
      <div className="not-prose my-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.unterschiede.cards.map((card) => (
          <Card key={card.title} className="h-full bg-white">
            <CardTitle className="text-lg">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </div>

      <ArticleH2 id="dach">{t.dach.heading}</ArticleH2>
      <ArticleP>{t.dach.p1}</ArticleP>
      <ArticleP>{t.dach.p2}</ArticleP>
      <ArticleP>{t.dach.p3}</ArticleP>

      <ArticleH2 id="fenster">{t.fenster.heading}</ArticleH2>
      <div className="not-prose my-8 grid items-start gap-8 md:grid-cols-[auto_1fr] md:gap-10">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gold-600/20 bg-gold-600/8">
          <WindowIcon />
        </div>
        <div>
          <ArticleP>{t.fenster.p1}</ArticleP>
          <ArticleP>{t.fenster.listIntro}</ArticleP>
          <EditorialList items={t.fenster.list} />
          <ArticleP>{t.fenster.p2}</ArticleP>
        </div>
      </div>

      <ArticleH2 id="heizung">{t.heizung.heading}</ArticleH2>
      <div className="not-prose my-8 rounded-2xl border border-brand-800/12 bg-white px-7 py-8 shadow-sm md:px-10 md:py-10">
        <ArticleP>{t.heizung.p1}</ArticleP>
        <ArticleP>{t.heizung.p2}</ArticleP>
        <ArticleP>{t.heizung.p3}</ArticleP>
      </div>

      <ArticleH2 id="daemmung">{t.daemmung.heading}</ArticleH2>
      <ArticleP>{t.daemmung.p1}</ArticleP>
      <div className="not-prose my-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {t.daemmung.cards.map((card) => (
          <Card key={card.title} className="h-full bg-white">
            <CardTitle className="text-lg">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </div>
      <ArticleP>{t.daemmung.p2}</ArticleP>

      <ArticleH2 id="elektrik">{t.elektrik.heading}</ArticleH2>
      <ArticleP>{t.elektrik.p1}</ArticleP>
      <ArticleP>{t.elektrik.listIntro}</ArticleP>
      <EditorialList items={t.elektrik.list} />
      <ArticleP>{t.elektrik.p2}</ArticleP>

      <ArticleH2 id="foerderprogramme">{t.foerderprogramme.heading}</ArticleH2>
      <ArticleP>{t.foerderprogramme.p1}</ArticleP>
      <ArticleP>{t.foerderprogramme.listIntro}</ArticleP>
      <div className="not-prose my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.foerderprogramme.cards.map((card) => (
          <Card key={card.title} className="h-full bg-white">
            <CardTitle className="text-lg">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </div>
      <ArticleP>{t.foerderprogramme.p2}</ArticleP>

      <div className="not-prose my-10 rounded-2xl border border-gold-600/25 bg-white px-7 py-8 shadow-sm ring-1 ring-gold-600/10 md:px-10 md:py-12">
        <p className="text-label mb-4 block text-gold-600">{t.kfw.label}</p>
        <ArticleH2 id="kfw">{t.kfw.heading}</ArticleH2>
        <ArticleP>{t.kfw.p1}</ArticleP>
        <ArticleP>{t.kfw.listIntro}</ArticleP>
        <EditorialList items={t.kfw.list} />
        <ArticleP>{t.kfw.p2}</ArticleP>
      </div>

      <ArticleH2 id="wertsteigerung">{t.wertsteigerung.heading}</ArticleH2>
      <ArticleP>{t.wertsteigerung.p1}</ArticleP>
      <ArticleP>{t.wertsteigerung.listIntro}</ArticleP>
      <div className="not-prose my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.wertsteigerung.cards.map((card) => (
          <Card key={card.title} className="h-full bg-white">
            <CardTitle className="text-lg">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </div>
      <ArticleP>{t.wertsteigerung.p2}</ArticleP>

      <ArticleH2 id="fazit">{t.fazit.heading}</ArticleH2>
      <ArticleP>{t.fazit.p1}</ArticleP>
      <ArticleP>{t.fazit.p2}</ArticleP>
    </ArticleLayout>
  );
}
