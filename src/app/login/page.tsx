import { redirect } from "next/navigation";
import { getAppLoginHref } from "@/lib/app/config";

export default function LoginRedirectPage() {
  redirect(getAppLoginHref("de"));
}
