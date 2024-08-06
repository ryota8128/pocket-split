import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const idToken = request.cookies.get('idToken' as any);
  console.log('middleware', idToken?.value[1]);
  if (idToken) {
    request.headers.set('authorization', `Bearer ${idToken.value}`);
  }
  return NextResponse.next({
    request: {
      ...request,
      headers: request.headers,
    },
  });
}
