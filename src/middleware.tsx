import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export const authRoutes = ['/login', '/register'];
const protectedRoutes = ['/account', '/research', '/plants'];

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (e) {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const currentUser = token ? await verifyToken(token) : null;

  // If the route is protected and the user is not authenticated
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!currentUser) {
      const url = new URL('/login', request.url);
      const response = NextResponse.redirect(url);
      response.cookies.delete('token');
      return response;
    }
  }

  // If the route is an auth route and the user is authenticated
  if (authRoutes.includes(request.nextUrl.pathname) && currentUser) {
    return NextResponse.redirect(new URL('/account', request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/register', '/account', '/research', '/plants'],
};
