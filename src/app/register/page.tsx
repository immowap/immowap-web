import { redirect } from "next/navigation";
import { getAppRegisterHref } from "@/lib/app/config";

export default function RegisterRedirectPage() {
  redirect(getAppRegisterHref("de"));
}
