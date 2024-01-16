import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function middleware(request) {
  const headers = cookies().get('token');
  const tokenString = headers?.value
  const token = tokenString?.replace(/"/g, '')

  const signInURL = new URL("/", request.url)
  console.log(signInURL.href)
  if(!token){
    return NextResponse.redirect(signInURL.href);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Home", "/M/:path*"]
}