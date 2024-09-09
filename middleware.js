import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('middleware =====> ', request.method);
  return NextResponse.next();
}

export const config = {
  matcher: '/news'
};