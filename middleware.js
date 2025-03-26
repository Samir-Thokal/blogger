import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  // Allow public access to the login page
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const token = req.cookies.get("auth-token");
    // If there’s no valid token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};