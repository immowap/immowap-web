import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";
import type { Locale } from "@/lib/i18n/config";
import { getRoute } from "@/lib/i18n/config";
import { getTranslations } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

const headingClassName = "text-label mb-6 block min-h-[2rem] text-gold-600";

interface FooterColumnProps {
  title: string;
  items: { label: string; href: string }[];
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className={headingClassName}>{children}</h3>;
}

function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="flex min-w-0 flex-col items-start">
      <FooterHeading>{title}</FooterHeading>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[15px] leading-relaxed text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/10 text-gold-600">
      {children}
    </span>
  );
}

function FooterContactColumn({
  title,
  phone,
  email,
  note,
}: {
  title: string;
  phone: string;
  email: string;
  note: string;
}) {
  return (
    <div className="flex min-w-0 flex-col items-start">
      <FooterHeading>{title}</FooterHeading>
      <ul className="w-full space-y-3.5">
        <li>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-3.5"
          >
            <ContactIcon>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </ContactIcon>
            <span className="text-[15px] leading-relaxed text-white/75 transition-colors group-hover:text-white">
              {phone}
            </span>
          </a>
        </li>
        <li>
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-3.5"
          >
            <ContactIcon>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </ContactIcon>
            <span className="break-all text-[15px] leading-relaxed text-white/75 transition-colors group-hover:text-white sm:break-normal">
              {email}
            </span>
          </a>
        </li>
      </ul>
      <p className="mt-6 text-[13px] leading-relaxed text-white/55">{note}</p>
    </div>
  );
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);

  const navColumns = [
    t.footer.solutions,
    t.footer.knowledge,
    t.footer.company,
    t.footer.legal,
  ];

  return (
    <footer className="mt-auto bg-brand-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1.1fr)_repeat(4,minmax(0,1fr))_minmax(0,1.35fr)] xl:gap-x-14">
          {/* Column 1 — Logo & tagline */}
          <div className="flex min-w-0 flex-col items-start sm:col-span-2 lg:col-span-1 xl:col-span-1">
            <Logo href={getRoute(locale, "home")} variant="white" size="md" />
            <p className="mt-8 max-w-[240px] whitespace-pre-line text-[15px] leading-[1.8] text-white/70">
              {t.meta.tagline}
            </p>
            <SocialLinks locale={locale} variant="onDark" className="mt-8" />
          </div>
          {/* Columns 2–5 — Navigation */}
          {navColumns.map((column) => (
            <FooterColumn key={column.title} title={column.title} items={column.items} />
          ))}

          {/* Column 6 — Contact */}
          <FooterContactColumn
            title={t.footer.contact.title}
            phone={t.footer.contact.phone}
            email={t.footer.contact.email}
            note={t.footer.contact.note}
          />
        </div>

        {/* Bottom — copyright */}
        <div className="mt-20 border-t border-white/10 pt-10 md:mt-24 md:pt-12">
          <p className="text-center text-[13px] leading-relaxed text-white/55">
            {t.footer.copyrightLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
