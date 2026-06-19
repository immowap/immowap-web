import { ImmobilienlexikonPage } from "@/components/pages/ImmobilienlexikonPage";

export const metadata = {
  title: "Real Estate Glossary – Key terms explained simply | immowap",
  description:
    "Understand the most important property terms such as depreciation, fair market value, income value, land charge or rental yield – explained simply and clearly.",
  alternates: {
    canonical: "/en/knowledge/property-knowledge/real-estate-glossary",
  },
  openGraph: {
    title: "Real Estate Glossary – Key terms explained simply",
    description:
      "Understand the most important property terms such as depreciation, fair market value, income value, land charge or rental yield – explained simply and clearly.",
    url: "/en/knowledge/property-knowledge/real-estate-glossary",
    type: "article",
  },
};

export default function EnRealEstateGlossaryPage() {
  return <ImmobilienlexikonPage locale="en" />;
}
