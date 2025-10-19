import { NextResponse } from "next/server";

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  const cookie = request.cookies.get("token");
  const token = cookie?.value;

  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if ((pathname === "/login" || pathname === "/" || pathname === "/register") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', "/register"],
}