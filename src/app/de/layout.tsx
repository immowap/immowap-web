import { LocaleLayoutShell } from "@/components/layout/LocaleLayoutShell";

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayoutShell locale="de">{children}</LocaleLayoutShell>;
}
