import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = ["/", "/browse"];

export default async function middleware(request: NextRequest) {
  const cookiesStore = cookies();

  if (
    !cookiesStore.has("user") &&
    protectedRoutes.includes(request.nextUrl.pathname)
  ) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
