import { NextResponse } from 'next/server';

export function middleware(request: NextResponse) {
  console.log('middleware', request);
  return NextResponse.next();
}
