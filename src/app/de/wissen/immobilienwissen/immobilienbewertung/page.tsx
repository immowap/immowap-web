import {
  ImmobilienbewertungPage,
  immobilienbewertungCopy,
} from "@/components/pages/ImmobilienbewertungPage";

export const metadata = {
  title: immobilienbewertungCopy.de.metaTitle,
  description: immobilienbewertungCopy.de.metaDescription,
};

export default function DeImmobilienbewertungPage() {
  return <ImmobilienbewertungPage locale="de" />;
}
