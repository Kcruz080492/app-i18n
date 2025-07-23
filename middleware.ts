import { NextRequest, NextResponse } from 'next/server';

const locales = ['en-US', 'es-ES'];
const defaultLocale = 'en-US';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const language = request.headers.get('Accept-Language')?.split(',')[0] || defaultLocale;
    const matchedLocale = locales.find(locale => language.startsWith(locale.split('-')[0])) || defaultLocale;

    return NextResponse.redirect(new URL(`/${matchedLocale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
