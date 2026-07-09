import type { Metadata } from "next";
import { DashboardLandingPage } from "@/components/pages/DashboardLandingPage";
import { resolveDashboardLocale } from "@/lib/app/config";
import { dashboardCopy } from "@/lib/app/dashboard-copy";

interface DashboardPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({
  searchParams,
}: DashboardPageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = resolveDashboardLocale(lang);
  const copy = dashboardCopy[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
  };
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const { lang } = await searchParams;
  const locale = resolveDashboardLocale(lang);

  return <DashboardLandingPage locale={locale} />;
}
