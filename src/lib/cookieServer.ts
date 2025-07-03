import { cookies } from "next/headers";

export async function getCookieServer() {
  const token = (await cookies()).get("login")?.value;

  return token || null;
}
