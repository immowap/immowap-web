import {
  getSteuernRundUmImmobilienMetadata,
  SteuernRundUmImmobilienPage,
} from "@/components/pages/SteuernRundUmImmobilienPage";

export const metadata = getSteuernRundUmImmobilienMetadata("en");

export default function EnPropertyTaxesPage() {
  return <SteuernRundUmImmobilienPage locale="en" />;
}
