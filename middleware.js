import { NextResponse } from "next/server";
import { allPaths } from "./lib/paths";

export function middleware(req) {
  if (!allPaths.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|fonts|favicon.ico).*)"],
};
