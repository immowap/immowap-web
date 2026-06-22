import Link from "next/link";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getLegalPageContent, type LegalPageId } from "@/lib/i18n/legal-pages";

interface LegalPageProps {
  locale: Locale;
  pageId: LegalPageId;
}

export function LegalPage({ locale, pageId }: LegalPageProps) {
  const content = getLegalPageContent(pageId, locale);
  const homeHref = getRoute(locale, "home");
  const homeLabel = locale === "de" ? "Startseite" : "Home";

  return (
    <>
      <section className="border-b border-warm-gray/30 bg-[#F7F5EF]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <li>
                <Link href={homeHref} className="transition-colors hover:text-brand-600">
                  {homeLabel}
                </Link>
              </li>
              <li aria-hidden="true" className="text-warm-gray">
                /
              </li>
              <li className="font-medium text-brand-800" aria-current="page">
                {content.title}
              </li>
            </ol>
          </nav>
          <h1 className="text-h1 text-brand-800">{content.title}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-[1.8] text-muted">{content.intro}</p>
        </div>
      </section>

      <Section variant="muted" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="rounded-[24px] border border-[#0F3D2E]/10 bg-white px-6 py-5 text-base leading-[1.8] text-muted md:px-8 md:py-6">
            {content.placeholderNote}
          </p>

          {content.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[24px] border border-[#0F3D2E]/10 bg-white p-8 md:p-10"
            >
              <h2 className="text-h3 text-brand-800">{section.title}</h2>
              <div className="gold-rule mt-6" aria-hidden="true" />
              <div className="mt-6 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-[1.8] text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="min-h-[100px] bg-cream" aria-hidden="true" />
    </>
  );
}
