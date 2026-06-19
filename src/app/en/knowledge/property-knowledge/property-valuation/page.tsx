import {
  ImmobilienbewertungPage,
  immobilienbewertungCopy,
} from "@/components/pages/ImmobilienbewertungPage";

export const metadata = {
  title: immobilienbewertungCopy.en.metaTitle,
  description: immobilienbewertungCopy.en.metaDescription,
};

export default function EnPropertyValuationPage() {
  return <ImmobilienbewertungPage locale="en" />;
}
