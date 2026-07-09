import { ContactForm } from "@/components/contact/ContactForm";
import { ProductVisual } from "@/components/illustrations/ProductVisual";
import { InformationCard, ContactOptionCard } from "@/components/ui/cards";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/icons/Icon";
import { PageBottomSpacer } from "@/components/ui/PageBottomSpacer";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TrustStepGrid } from "@/components/trust";
import type { Locale } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface ContactPageProps {
  locale: Locale;
}

function ContactOptionIcon({ icon }: { icon: "phone" | "mail" | "chart" }) {
  const iconMap = {
    phone: "phone" as const,
    mail: "mail" as const,
    chart: "chart" as const,
  };

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600">
      <Icon name={iconMap[icon]} size={18} />
    </span>
  );
}

export function ContactPage({ locale }: ContactPageProps) {
  const t = getTranslations(locale);
  const emailHref = `mailto:${t.footer.contact.email}`;
  const phoneHref = `tel:${t.footer.contact.phone.replace(/\s/g, "")}`;

  return (
    <>
      <PageHeader
        layout="split"
        label={t.pages.contact}
        headline={t.contact.hero.headline}
        subheadline={t.contact.hero.subheadline}
        visual={<ProductVisual variant="documents" locale={locale} className="max-w-full" />}
        secondaryHref="#anfrage"
        secondaryLabel={t.contact.hero.ctaSecondary}
      />

      <Section id="anfrage" variant="muted">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 lg:pt-2">
            <SectionHeader
              headline={t.contact.form.headline}
              description={t.contact.form.subheadline}
              className="mb-0"
            />
          </div>
          <div className="lg:col-span-8">
            <ContactForm
              copy={t.contact.form}
              privacyHref={locale === "de" ? "/de/datenschutz" : "/en/privacy"}
              privacyLabel={t.contact.form.privacyLink}
              locale={locale}
              contactEmail={t.footer.contact.email}
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader headline={t.contact.why.headline} />
        <div className="grid gap-6 md:grid-cols-3">
          {t.contact.why.cards.map((card) => (
            <InformationCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader headline={t.contact.options.headline} />
        <div className="grid gap-6 md:grid-cols-3">
          {t.contact.options.cards.map((card) => {
            const icon = <ContactOptionIcon icon={card.icon} />;
            if (card.icon === "mail") {
              return (
                <ContactOptionCard
                  key={card.title}
                  title={card.title}
                  value={card.value}
                  note={card.note}
                  icon={icon}
                  href={emailHref}
                />
              );
            }
            if (card.icon === "phone") {
              return (
                <ContactOptionCard
                  key={card.title}
                  title={card.title}
                  value={card.value}
                  note={card.note}
                  icon={icon}
                  href={phoneHref}
                />
              );
            }
            return (
              <ContactOptionCard
                key={card.title}
                title={card.title}
                value={card.value}
                note={card.note || undefined}
                icon={icon}
                href="#anfrage"
              />
            );
          })}
        </div>
        <div className="mt-12 border-t border-warm-gray/40 pt-10">
          <SocialLinks locale={locale} showLabel />
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeader
          headline={t.contact.handling.headline}
          description={t.contact.handling.description}
        />
        <ul className="mt-8 space-y-4">
          {t.contact.handling.items.map((item) => (
            <li key={item} className="flex gap-3 text-body text-muted">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-600"
                aria-hidden="true"
              >
                <Icon name="check" size={14} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader headline={t.contact.process.headline} />
        <TrustStepGrid steps={t.contact.process.steps} />
      </Section>

      <PageBottomSpacer />
    </>
  );
}
