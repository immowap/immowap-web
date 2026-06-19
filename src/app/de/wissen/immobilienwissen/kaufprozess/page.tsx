import { KaufprozessPage, kaufprozessCopy } from "@/components/pages/KaufprozessPage";

export const metadata = {
  title: kaufprozessCopy.de.metaTitle,
  description: kaufprozessCopy.de.metaDescription,
};

export default function DeKaufprozessPage() {
  return <KaufprozessPage locale="de" />;
}
