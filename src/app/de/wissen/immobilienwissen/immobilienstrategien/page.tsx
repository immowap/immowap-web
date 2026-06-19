import { ImmobilienstrategienPage } from "@/components/pages/ImmobilienstrategienPage";

const title = "Immobilienstrategien | immowap";
const description =
  "Eigennutzung, Kapitalanlage, Fix & Flip, Sanierung, Mehrfamilienhäuser und Gewerbeimmobilien – welche Immobilienstrategie zu Ihren Zielen passt, Chancen und Risiken im Überblick.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/de/wissen/immobilienwissen/immobilienstrategien",
  },
  openGraph: {
    title: "Immobilienstrategien – Welche Strategie passt zu Ihren Zielen?",
    description,
    url: "/de/wissen/immobilienwissen/immobilienstrategien",
    type: "article",
  },
};

export default function DeImmobilienstrategienPage() {
  return <ImmobilienstrategienPage locale="de" />;
}
