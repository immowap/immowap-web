import { redirect } from "next/navigation";
import { getAppDashboardHref } from "@/lib/app/config";

export default function EnDashboardPage() {
  redirect(getAppDashboardHref("en"));
}
