import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SolutionHeroSection } from "@/components/ui/SolutionHeroSection";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import type { ToolPageContent } from "@/lib/tools/content";

interface ToolSolutionPageProps {
  locale: Locale;
  content: ToolPageContent;
}

const cardTitleClass =
  "text-xl md:text-[22px] lg:text-[26px] font-semibold leading-[1.3] text-brand-800 break-words [overflow-wrap:anywhere] hyphens-auto";
const cardTextClass =
  "text-[15px] md:text-base leading-[1.4] text-muted break-words [overflow-wrap:anywhere] hyphens-auto";
const cardShellClass =
  "card-premium flex min-h-0 flex-col gap-4 overflow-visible p-6 md:p-8 lg:p-10";

export function ToolSolutionPage({ locale, content }: ToolSolutionPageProps) {
  const c = content[locale];
  const contactHref = getRoute(locale, "contact");
  const dashboardHref = getRoute(locale, "dashboard");
  const solutionsHref = getRoute(locale, "solutions");

  return (
    <>
      <nav
        aria-label={locale === "de" ? "Brotkrumen-Navigation" : "Breadcrumb"}
        className="border-b border-warm-gray/30 bg-[#F7F5EF]"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li>
              <Link href={solutionsHref} className="transition-colors hover:text-brand-600">
                {c.breadcrumbSolutions}
              </Link>
            </li>
            <li aria-hidden="true" className="text-warm-gray">
              /
            </li>
            <li className="text-muted">{c.breadcrumbTools}</li>
            <li aria-hidden="true" className="text-warm-gray">
              /
            </li>
            <li className="font-medium text-brand-800" aria-current="page">
              {c.breadcrumbCurrent}
            </li>
          </ol>
        </div>
      </nav>

      <SolutionHeroSection
        backgroundClassName="bg-[#F7F5EF]"
        label={c.heroLabel}
        headline={c.heroHeadline}
        primaryHref={dashboardHref}
        primaryLabel={c.heroBtnPrimary}
        secondaryHref={contactHref}
        secondaryLabel={c.heroBtnSecondary}
        imageSrc={content.images.hero}
        imageAlt={c.heroImageAlt}
      >
        <p className="mt-8 text-xl font-medium leading-[1.6] text-brand-800">{c.heroSubheadline}</p>
        <p className="mt-6 text-lg leading-[1.8] text-muted">{c.heroText}</p>
      </SolutionHeroSection>

      <Section variant="muted" className="py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader label={c.introLabel} headline={c.introHeadline} className="mb-0" />
            <p className="mt-6 text-lg leading-[1.8] text-muted">{c.introText}</p>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
            <Image
              src={content.images.intro}
              alt={c.introImageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader label={c.featureLabel} headline={c.featureHeadline} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.featureCards.map((card) => (
            <article key={card.title} className={`${cardShellClass} h-full`}>
              <h3 className={cardTitleClass}>{card.title}</h3>
              <p className={cardTextClass}>{card.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted" className="py-24 md:py-32">
        <SectionHeader label={c.processLabel} headline={c.processHeadline} />
        <div
          className={`grid gap-8 ${
            c.processSteps.length === 3
              ? "md:grid-cols-3"
              : c.processSteps.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-2 lg:grid-cols-5"
          }`}
        >
          {c.processSteps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col">
              <span className="text-label mb-4 block text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={`${cardTitleClass} mb-3`}>{step.title}</h3>
              <p className={cardTextClass}>{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#F7F5EF] py-24 md:py-32">
        <SectionHeader label={c.trustLabel} headline={c.trustHeadline} />
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-[1.8] text-muted">
          {c.trustText}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.trustPoints.map((point) => (
            <article key={point.title} className={`${cardShellClass} h-full`}>
              <h3 className={cardTitleClass}>{point.title}</h3>
              <p className={cardTextClass}>{point.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-brand-800 px-6 pt-[140px] pb-[140px] text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-white">{c.ctaHeadline}</h2>
          <div className="gold-rule mx-auto mt-8" aria-hidden="true" />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.8] text-white/85">{c.ctaText}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Button href={dashboardHref} className="w-full sm:w-auto">
              {c.ctaBtnPrimary}
            </Button>
            <Button
              href={contactHref}
              variant="secondary"
              className="w-full border-white/30 text-white hover:border-gold-500/60 hover:bg-white/10 sm:w-auto"
            >
              {c.ctaBtnSecondary}
            </Button>
          </div>
        </div>
      </section>
      <div className="min-h-[100px] bg-cream" aria-hidden="true" />
    </>
  );
}
