import { redirect } from "next/navigation";

export default function EnDashboardPage() {
  redirect("/dashboard?lang=en");
}
