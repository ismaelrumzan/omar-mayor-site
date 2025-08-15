import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path ends with .md
  if (pathname.endsWith(".md")) {
    // Remove the .md extension and rewrite to /md sub-route
    const filename = pathname.slice(1, -3) // Remove leading '/' and trailing '.md'

    // Rewrite to the /md sub-route
    const url = request.nextUrl.clone()
    url.pathname = `/${filename}/md`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths that end with .md
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
