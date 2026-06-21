import type { Metadata } from "next";
import { SachwertverfahrenPage } from "@/components/pages/SachwertverfahrenPage";

export const metadata: Metadata = {
  title: "Sachwertverfahren | immowap",
  description:
    "Sachwertverfahren nach ImmoWertV: Bodenwert, Herstellungskosten, Alterswertminderung und Marktanpassung – den Substanzwert einer Immobilie strukturiert analysieren.",
};

export default function DeSachwertverfahrenPage() {
  return <SachwertverfahrenPage locale="de" />;
}
