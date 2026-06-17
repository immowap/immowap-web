import { LocaleLayoutShell } from "@/components/layout/LocaleLayoutShell";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayoutShell locale="en">{children}</LocaleLayoutShell>;
}
