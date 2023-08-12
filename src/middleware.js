import { NextResponse } from "next/server";
export function middleware(request) {
  // console.log("middleware abc");
  // if (request.nextUrl.pathname!="/login"){
  //     return NextResponse.redirect(new URL("/login",request.url));
  // } //redirects over login page only.

  // if (request.nextUrl.pathname!="/"){
  //     return NextResponse.redirect(new URL ("/",request.url))

  // } //redirects over home page only.

  return NextResponse.redirect(new URL("/", request.url));

//   return NextResponse.redirect(new URL("/aboutteacher", request.url));
}

export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"],
};
