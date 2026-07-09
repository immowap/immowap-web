import { redirect } from "next/navigation";
import { getAppAnalysisHref } from "@/lib/app/config";

export default function AnalyseRedirectPage() {
  redirect(getAppAnalysisHref("de"));
}
