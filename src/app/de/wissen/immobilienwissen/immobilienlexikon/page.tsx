import { ImmobilienlexikonPage } from "@/components/pages/ImmobilienlexikonPage";

export const metadata = {
  title: "Immobilienlexikon – Die wichtigsten Begriffe einfach erklärt | immowap",
  description:
    "Verstehen Sie die wichtigsten Immobilienbegriffe wie AfA, Verkehrswert, Ertragswert, Grundschuld oder Mietrendite einfach und verständlich erklärt.",
  alternates: {
    canonical: "/de/wissen/immobilienwissen/immobilienlexikon",
  },
  openGraph: {
    title: "Immobilienlexikon – Die wichtigsten Begriffe einfach erklärt",
    description:
      "Verstehen Sie die wichtigsten Immobilienbegriffe wie AfA, Verkehrswert, Ertragswert, Grundschuld oder Mietrendite einfach und verständlich erklärt.",
    url: "/de/wissen/immobilienwissen/immobilienlexikon",
    type: "article",
  },
};

export default function DeImmobilienlexikonPage() {
  return <ImmobilienlexikonPage locale="de" />;
}
