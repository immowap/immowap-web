import { WissenPage } from "@/components/pages/WissenPage";

export const metadata = {
  title: "Wissen | immowap",
  description:
    "Grundlagenwissen, Markttrends und strukturierte FAQ rund um Immobilienentscheidungen.",
};

export default function DeWissenPage() {
  return <WissenPage locale="de" />;
}
