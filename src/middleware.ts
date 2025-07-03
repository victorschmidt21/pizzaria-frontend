import { NextRequest, NextResponse } from "next/server";
import { getCookieServer } from "./lib/cookieServer";
import { validadeToken } from "./lib/validateToken";

export default async function middlaware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname === "/" ||
    pathname === "/signup"
  ) {
    return NextResponse.next();
  }

  const token = await getCookieServer();

  if (!token) return NextResponse.redirect(new URL("/", req.url));

  const isValid = await validadeToken(token);

  if (!isValid) return NextResponse.redirect(new URL("/", req.url));

  return NextResponse.next();
}
