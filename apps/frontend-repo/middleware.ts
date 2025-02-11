import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(
    process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME || ""
  )?.value; // Example: Get auth token from cookies

  // Redirect to login if user is not authenticated
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Continue to the requested page
  return NextResponse.next();
}

// Match specific routes where the middleware should run
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Apply middleware to dashboard and profile pages
};
