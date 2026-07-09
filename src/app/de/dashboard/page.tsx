import { redirect } from "next/navigation";
import { getAppDashboardHref } from "@/lib/app/config";

export default function DeDashboardPage() {
  redirect(getAppDashboardHref("de"));
}
