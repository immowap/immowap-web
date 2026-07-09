import { redirect } from "next/navigation";
import { getAppDashboardHref, resolveDashboardLocale } from "@/lib/app/config";

interface DashboardRedirectPageProps {
  searchParams: Promise<{ lang?: string }>;
}

export default async function DashboardRedirectPage({
  searchParams,
}: DashboardRedirectPageProps) {
  const { lang } = await searchParams;
  redirect(getAppDashboardHref(resolveDashboardLocale(lang)));
}
