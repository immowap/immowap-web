import type { Metadata } from "next";
import { ErtragswertverfahrenPage } from "@/components/pages/ErtragswertverfahrenPage";

export const metadata: Metadata = {
  title: "Ertragswertverfahren | immowap",
  description:
    "Ertragswertverfahren nach ImmoWertV: Wertermittlung von Renditeimmobilien auf Basis nachhaltiger Erträge, Liegenschaftszins und Restnutzungsdauer.",
};

export default function DeErtragswertverfahrenPage() {
  return <ErtragswertverfahrenPage locale="de" />;
}
