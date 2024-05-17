import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
const roleRoutes = ["/admin"];
const protectedRoutes = [...roleRoutes, "/profile", "/carts"];
const authRoutes = ["/auth"];

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const cookiesManager = cookies();
  const accessToken = cookiesManager.get("accessToken")?.value;
  const authUser = accessToken ? jwtDecode(accessToken) : null;
  //   console.log(decoded);

  const isAuthPath = authRoutes.find((route) => pathname.startsWith(route));
  const isProtectedPath = protectedRoutes.find((route) =>
    pathname.startsWith(route)
  );
  const isRolePath = roleRoutes.find((route) => pathname.startsWith(route));

  if (authUser?.userId && authUser.role) {
    const authRolePath = "ADMIN";
    if (isRolePath && !pathname.startsWith(authRolePath)) {
      const currentPath = pathname.replace(
        RegExp(roleRoutes.join("|")),
        authRolePath
      );
      return NextResponse.redirect(new URL(currentPath, request.url));
    }
    if (isAuthPath) {
      if (roleRoutes.includes(roleRoutes.includes(authRolePath))) {
        NextResponse.redirect(new URL(authRolePath, request.url));
      }
      NextResponse.redirect(new URL("/", request.url));
    }
  } else if (isProtectedPath) {
    NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
