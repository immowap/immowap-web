import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import {
  propertyKnowledgeOverview,
  propertyKnowledgeUi,
} from "@/lib/i18n/property-knowledge";
import {
  ArticleMetaRow,
  ArticleP,
  CategoryBadge,
  EditorialList,
  PropertyKnowledgeBackLink,
  PropertyKnowledgeBreadcrumb,
  PropertyKnowledgePageButtons,
} from "@/components/property-knowledge/ArticleUi";
import { sanierungModernisierungCopy as copy } from "@/components/pages/sanierung-modernisierung-copy";

const IMAGES = {
  hero: "/images/knowledge/sanierung-modernisierung.jpg",
  dach: "/images/wissen/dachsanierung-modernisierung.jpg",
} as const;

function SectionImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#D7D2C8]/60 bg-white shadow-[0_8px_40px_rgba(15,61,46,0.06)]">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        priority={priority}
        className="h-auto w-full object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}

function WindowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-[#B9965B]"
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
  const overviewHref = propertyKnowledgeOverview[locale].href;

  return (
    <>
      <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={IMAGES.hero}
            alt={t.hero.imageAlt}
            width={2400}
            height={1350}
            priority
            className="h-full w-full object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0F3D2E]/90 from-0% via-[#0F3D2E]/60 via-[50%] to-[#0F3D2E]/40 to-[100%] max-md:via-[#0F3D2E]/70"
          aria-hidden="true"
        />
        <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <p className="text-label mb-6 block text-[#B9965B]">{ui.categoryShort}</p>
            <h1 className="text-h1 text-white">{t.hero.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-white/90">{t.hero.intro}</p>
            <PropertyKnowledgePageButtons locale={locale} onDark className="mt-10" />
          </div>
        </div>
      </section>

      <div className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px] px-6 md:px-8">
          <PropertyKnowledgeBreadcrumb locale={locale} currentTitle={t.breadcrumbTitle} />

          <header className="mb-10">
            <CategoryBadge locale={locale} />
            <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight text-[#0F3D2E] md:text-[2.125rem]">
              {t.header.title}
            </h2>
            <div
              aria-hidden="true"
              className="mt-7 h-px w-16 rounded-full bg-[#B9965B]/55"
            />
            <ArticleMetaRow locale={locale} readMinutes={t.readMinutes} />
          </header>

          <article>
            <ArticleP>{t.intro.p1}</ArticleP>
            <ArticleP>{t.intro.p2}</ArticleP>
          </article>
        </div>
      </div>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="unterschiede"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.unterschiede.heading}
          </h2>
          <ArticleP>{t.unterschiede.p1}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.unterschiede.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionImage src={IMAGES.dach} alt={t.dach.imageAlt} />
            <div>
              <h2
                id="dach"
                className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
                />
                {t.dach.heading}
              </h2>
              <ArticleP>{t.dach.p1}</ArticleP>
              <ArticleP>{t.dach.p2}</ArticleP>
              <ArticleP>{t.dach.p3}</ArticleP>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="fenster"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.fenster.heading}
          </h2>
          <div className="mt-8 grid items-start gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#B9965B]/20 bg-[#B9965B]/8">
              <WindowIcon />
            </div>
            <div>
              <p className="text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
                {t.fenster.p1}
              </p>
              <ArticleP>{t.fenster.listIntro}</ArticleP>
              <EditorialList items={t.fenster.list} />
              <ArticleP>{t.fenster.p2}</ArticleP>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="heizung"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.heizung.heading}
          </h2>
          <div className="mt-8 rounded-2xl border border-[#0F3D2E]/12 bg-white px-7 py-8 shadow-[0_4px_24px_rgba(15,61,46,0.06)] md:px-10 md:py-10">
            <p className="text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
              {t.heizung.p1}
            </p>
            <ArticleP>{t.heizung.p2}</ArticleP>
            <ArticleP>{t.heizung.p3}</ArticleP>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="daemmung"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.daemmung.heading}
          </h2>
          <ArticleP>{t.daemmung.p1}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {t.daemmung.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
          <ArticleP>{t.daemmung.p2}</ArticleP>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="elektrik"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.elektrik.heading}
          </h2>
          <ArticleP>{t.elektrik.p1}</ArticleP>
          <ArticleP>{t.elektrik.listIntro}</ArticleP>
          <EditorialList items={t.elektrik.list} />
          <ArticleP>{t.elektrik.p2}</ArticleP>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="foerderprogramme"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.foerderprogramme.heading}
          </h2>
          <ArticleP>{t.foerderprogramme.p1}</ArticleP>
          <ArticleP>{t.foerderprogramme.listIntro}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.foerderprogramme.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
          <ArticleP>{t.foerderprogramme.p2}</ArticleP>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <div className="rounded-2xl border border-[#B9965B]/25 bg-white px-7 py-8 shadow-[0_8px_32px_rgba(185,150,91,0.08)] ring-1 ring-[#B9965B]/10 md:px-10 md:py-12">
            <p className="text-label mb-4 block text-gold-600">{t.kfw.label}</p>
            <h2
              id="kfw"
              className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
            >
              <span
                aria-hidden="true"
                className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
              />
              {t.kfw.heading}
            </h2>
            <p className="text-base leading-[1.85] text-[#1D1D1B]/72 md:text-[1.0625rem]">
              {t.kfw.p1}
            </p>
            <ArticleP>{t.kfw.listIntro}</ArticleP>
            <EditorialList items={t.kfw.list} />
            <ArticleP>{t.kfw.p2}</ArticleP>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="wertsteigerung"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.wertsteigerung.heading}
          </h2>
          <ArticleP>{t.wertsteigerung.p1}</ArticleP>
          <ArticleP>{t.wertsteigerung.listIntro}</ArticleP>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.wertsteigerung.cards.map((card) => (
              <Card
                key={card.title}
                className="h-full border-[#D7D2C8]/80 bg-white shadow-[0_4px_20px_rgba(15,61,46,0.05)]"
              >
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="text-[#1D1D1B]/72">
                  {card.description}
                </CardDescription>
              </Card>
            ))}
          </div>
          <ArticleP>{t.wertsteigerung.p2}</ArticleP>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-[850px]">
          <h2
            id="fazit"
            className="mb-5 flex scroll-mt-28 items-start gap-3 text-[1.375rem] font-semibold leading-snug text-[#0F3D2E] md:text-2xl"
          >
            <span
              aria-hidden="true"
              className="mt-[0.35em] inline-block h-[0.9em] w-0.5 shrink-0 rounded-full bg-[#B9965B]/55"
            />
            {t.fazit.heading}
          </h2>
          <ArticleP>{t.fazit.p1}</ArticleP>
          <ArticleP>{t.fazit.p2}</ArticleP>

          <PropertyKnowledgeBackLink locale={locale} overviewHref={overviewHref} />
        </div>
      </Section>

      <section className="bg-[#F7F5EF] py-24 md:py-32">
        <div className="mx-auto max-w-[850px] px-6 text-center md:px-8">
          <h2 className="text-h2 text-brand-800">{t.cta.heading}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-muted">{t.cta.text}</p>
          <PropertyKnowledgePageButtons locale={locale} className="mt-12 justify-center" />
        </div>
      </section>

      <div className="h-20 bg-cream md:h-[100px]" aria-hidden="true" />
    </>
  );
}
