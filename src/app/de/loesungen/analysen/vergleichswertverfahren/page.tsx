import type { Metadata } from "next";
import { VergleichswertverfahrenPage } from "@/components/pages/VergleichswertverfahrenPage";

export const metadata: Metadata = {
  title: "Vergleichswertverfahren verständlich erklärt | immowap",
  description:
    "Das Vergleichswertverfahren nach ImmoWertV: Grundlagen, Einsatzgebiete, Ablauf und Grenzen – Immobilienwerte auf Basis vergleichbarer Objekte nachvollziehbar einordnen.",
};

export default function DeVergleichswertverfahrenPage() {
  return <VergleichswertverfahrenPage locale="de" />;
}
