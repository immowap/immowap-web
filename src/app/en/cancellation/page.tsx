import { LegalPage } from "@/components/pages/LegalPage";

export const metadata = {
  title: "Right of Withdrawal | immowap",
  description: "Cancellation policy and right of withdrawal for immowap.",
};

export default function EnCancellationPage() {
  return <LegalPage locale="en" pageId="widerruf" />;
}
