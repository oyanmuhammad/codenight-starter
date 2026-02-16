import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

const protectedRoutes = ["/dashboard"];

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(
    (route) => path === route || path.startsWith(`${route}/`),
  );

  if (isProtectedRoute) {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (!session) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  if (path === "/login") {
    const session = await auth.api.getSession({
      headers: req.headers,
    });

    if (session) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.ico$).*)"],
};
