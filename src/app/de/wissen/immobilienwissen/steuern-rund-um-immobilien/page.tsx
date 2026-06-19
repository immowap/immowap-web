import {
  getSteuernRundUmImmobilienMetadata,
  SteuernRundUmImmobilienPage,
} from "@/components/pages/SteuernRundUmImmobilienPage";

export const metadata = getSteuernRundUmImmobilienMetadata("de");

export default function DeSteuernRundUmImmobilienPage() {
  return <SteuernRundUmImmobilienPage locale="de" />;
}
