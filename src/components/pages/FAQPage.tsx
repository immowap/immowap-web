import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { FAQCategoryAccordion } from "@/components/faq/FAQCategoryAccordion";
import type { Locale } from "@/lib/i18n/config";
import { getFaqCategories } from "@/data/faq";
import { faqPageCopy } from "@/data/faq-ui";

interface FAQPageProps {
  locale: Locale;
}

export function FAQPage({ locale }: FAQPageProps) {
  const copy = faqPageCopy[locale];
  const faqCategories = getFaqCategories(locale);
  const totalQuestions = faqCategories.reduce(
    (acc, cat) => acc + cat.items.length,
    0,
  );

  return (
    <>
      <PageHeader
        layout="text"
        label={copy.heroLabel}
        headline={copy.heroTitle}
        subheadline={copy.heroSubtitle}
      />

      <Section variant="default" className="border-b border-warm-gray/30 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light tabular-nums text-brand-800">
                {faqCategories.length}
              </span>
              <span className="text-sm text-muted">{copy.statCategories}</span>
            </div>
            <div className="h-4 w-px bg-warm-gray/60" aria-hidden="true" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light tabular-nums text-brand-800">
                {totalQuestions}
              </span>
              <span className="text-sm text-muted">{copy.statQuestions}</span>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 flex items-center gap-3 text-sm text-muted">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-600"
            >
              <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8 7v4M8 5.5v.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {copy.hintExpand}
          </p>

          <div className="flex flex-col gap-4">
            {faqCategories.map((category, index) => (
              <FAQCategoryAccordion
                key={category.id}
                locale={locale}
                category={category}
                index={index}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted/60">
            {copy.hintMultipleOpen(totalQuestions)}
          </p>
        </div>
      </Section>

      <PageBottomSpacer />
    </>
  );
}

export function getFaqPageMetadata(locale: Locale) {
  const copy = faqPageCopy[locale];
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
  };
}
