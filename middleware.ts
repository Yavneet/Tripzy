import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";
import { UserRole } from '@/types/User';

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/contact',
  '/unauthorized',
  '/select-role',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/.well-known(.*)',
  '/_next(.*)',
  '/api(.*)',
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/attractions(.*)',
  '/explore-products(.*)',
  '/product(.*)',
  '/plan-trip(.*)',
  '/reviews(.*)',
  '/vr(.*)',
  '/ar(.*)',
  '/map(.*)',
  '/certificates(.*)',
]);

const isAdminRoute = createRouteMatcher(['/admin(.*)']);
const isVendorRoute = createRouteMatcher(['/vendor(.*)']);
const isTouristRoute = createRouteMatcher(['/tourist(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname === '/favicon.ico' ||
    (pathname.includes('.') && !pathname.includes('/sign-'))
  ) {
    return NextResponse.next();
  }

  if (isPublicRoute(req)) return NextResponse.next();

  if (!userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }

  const userRole = (sessionClaims?.metadata as any)?.role as UserRole;

  // If on select-role and role already selected, don't force select-role
  if (pathname === '/select-role') {
    return NextResponse.next();
  }

  if (!userRole) return NextResponse.next();

  if (isAdminRoute(req) && userRole !== UserRole.ADMIN) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }
  if (isVendorRoute(req) && userRole !== UserRole.VENDOR) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }
  if (isTouristRoute(req) && userRole !== UserRole.TOURIST) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|_next/webpack-hmr|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
