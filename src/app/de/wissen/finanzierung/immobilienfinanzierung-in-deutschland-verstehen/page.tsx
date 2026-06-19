import {
  getImmobilienfinanzierungMetadata,
  ImmobilienfinanzierungPage,
} from "@/components/pages/ImmobilienfinanzierungPage";

export const metadata = getImmobilienfinanzierungMetadata("de");

export default function DeImmobilienfinanzierungPage() {
  return <ImmobilienfinanzierungPage locale="de" />;
}
