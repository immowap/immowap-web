import {
  getImmobilienfinanzierungMetadata,
  ImmobilienfinanzierungPage,
} from "@/components/pages/ImmobilienfinanzierungPage";

export const metadata = getImmobilienfinanzierungMetadata("en");

export default function EnPropertyFinancingPage() {
  return <ImmobilienfinanzierungPage locale="en" />;
}
