import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  url.pathname = '/maintenance'; // Redirects all pages to maintenance page
  return NextResponse.rewrite(url);
}
