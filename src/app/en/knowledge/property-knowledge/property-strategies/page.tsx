import { ImmobilienstrategienPage } from "@/components/pages/ImmobilienstrategienPage";

const title = "Property Strategies | immowap";
const description =
  "Owner-occupation, buy-to-let, fix & flip, renovation, multi-family homes and commercial property – which strategy fits your goals, with an overview of opportunities and risks.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/en/knowledge/property-knowledge/property-strategies",
  },
  openGraph: {
    title: "Property Strategies – Which strategy fits your goals?",
    description,
    url: "/en/knowledge/property-knowledge/property-strategies",
    type: "article",
  },
};

export default function EnPropertyStrategiesPage() {
  return <ImmobilienstrategienPage locale="en" />;
}
