import { KaufprozessPage, kaufprozessCopy } from "@/components/pages/KaufprozessPage";

export const metadata = {
  title: kaufprozessCopy.en.metaTitle,
  description: kaufprozessCopy.en.metaDescription,
};

export default function EnBuyingProcessPage() {
  return <KaufprozessPage locale="en" />;
}
