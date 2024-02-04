import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const headers = cookies().get('token');
  const tokenString = headers?.value
  const token = tokenString?.replace(/"/g, '')

  const signInURL = new URL("/", request.url)
  if(!token){
    return NextResponse.redirect(signInURL.href);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/M/:path*"]
}