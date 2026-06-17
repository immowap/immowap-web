import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardTitle } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";
import { images } from "@/lib/images";

interface ContactPageProps {
  locale: Locale;
}

function ContactOptionIcon({ icon }: { icon: "phone" | "mail" | "chart" }) {
  const className = "h-4 w-4 text-[#B9965B]";

  if (icon === "phone") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    );
  }

  if (icon === "mail") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    );
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

export function ContactPage({ locale }: ContactPageProps) {
  const t = getTranslations(locale);
  const emailHref = `mailto:${t.footer.contact.email}`;
  const phoneHref = `tel:${t.footer.contact.phone.replace(/\s/g, "")}`;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.contactHero}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-[#0F3D2E]/60" aria-hidden="true" />
        <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <h1 className="text-h1 text-white">{t.contact.hero.headline}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-[1.8] text-white/90">
              {t.contact.hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={getRoute(locale, "dashboard")} className="w-full sm:w-auto">
                {t.contact.hero.ctaPrimary}
              </Button>
              <Button
                href="#anfrage"
                variant="secondary"
                className="w-full border-white/30 text-white hover:border-gold-500/60 hover:bg-white/10 sm:w-auto"
              >
                {t.contact.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form — main focus */}
      <Section id="anfrage" variant="muted" className="py-24 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:pt-2">
            <SectionHeader
              headline={t.contact.form.headline}
              description={t.contact.form.subheadline}
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-8">
            <ContactForm copy={t.contact.form} />
          </div>
        </div>
      </Section>

      {/* Why form first */}
      <Section>
        <SectionHeader headline={t.contact.why.headline} />
        <div className="grid gap-8 md:grid-cols-3">
          {t.contact.why.cards.map((card) => (
            <Card key={card.title}>
              <CardTitle className="text-xl">{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact options — secondary */}
      <Section variant="muted">
        <SectionHeader headline={t.contact.options.headline} className="mb-10 md:mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {t.contact.options.cards.map((card) => {
            const isPhone = card.icon === "phone";
            const isMail = card.icon === "mail";

            const content = (
              <div className="rounded-[20px] border border-black/[0.05] bg-white px-6 py-7 shadow-[0_4px_24px_rgba(29,29,27,0.04)] transition-shadow hover:shadow-[0_12px_32px_rgba(15,61,46,0.06)]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#B9965B]/30 bg-[#B9965B]/10">
                  <ContactOptionIcon icon={card.icon} />
                </div>
                <h3 className="text-base font-semibold text-[#0F3D2E]">{card.title}</h3>
                <p
                  className={
                    isPhone
                      ? "mt-2 text-sm leading-relaxed text-[#1D1D1B]/70"
                      : "mt-2 text-base font-medium leading-relaxed text-[#0F3D2E]"
                  }
                >
                  {card.value}
                </p>
                {card.note && (
                  <p className="mt-2 text-sm leading-relaxed text-[#1D1D1B]/55">{card.note}</p>
                )}
              </div>
            );

            if (isMail) {
              return (
                <a key={card.title} href={emailHref} className="block transition-opacity hover:opacity-90">
                  {content}
                </a>
              );
            }

            if (isPhone) {
              return (
                <a key={card.title} href={phoneHref} className="block transition-opacity hover:opacity-90">
                  {content}
                </a>
              );
            }

            return (
              <Link key={card.title} href={getRoute(locale, "dashboard")} className="block transition-opacity hover:opacity-90">
                {content}
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader headline={t.contact.process.headline} />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {t.contact.process.steps.map((step, index) => (
            <div key={step} className="flex flex-col items-start">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#B9965B]/40 bg-[#B9965B]/12 text-sm font-semibold text-brand-800">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-brand-800">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-brand-800 px-6 pt-[140px] pb-[140px] text-white md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-h2 text-white">{t.contact.cta.headline}</h2>
          <p className="mt-6 text-lg leading-[1.8] text-white/85">{t.contact.cta.text}</p>
          <div className="mt-10 flex justify-center">
            <Button href="#anfrage" className="w-full sm:w-auto">
              {t.contact.cta.ctaPrimary}
            </Button>
          </div>
        </div>
      </section>
      <div className="min-h-[100px] bg-cream" aria-hidden="true" />
    </>
  );
}
