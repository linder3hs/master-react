import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  const user = cookiesStore.has("user");

  const whitlist = ["login", "signup"];
  console.log(request.nextUrl.pathname);
  // request.nextUrl.pathname.startsWith("/about");

  return NextResponse.redirect(new URL("/browse", request.url));
}

export const config = {
  matcher: ["/", "/login", "/signup", "/signup/regform"],
};
