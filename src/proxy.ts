import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (maybeLocale && isLocale(maybeLocale)) {
    if (maybeLocale === defaultLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/${segments.slice(1).join("/")}` || "/";
      return NextResponse.redirect(url);
    }

    const headers = new Headers(request.headers);
    headers.set("x-locale", maybeLocale);
    return NextResponse.next({ request: { headers } });
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  const headers = new Headers(request.headers);
  headers.set("x-locale", defaultLocale);
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
