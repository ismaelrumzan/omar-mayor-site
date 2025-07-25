// Whitelist of path patterns that should be set to no-index
export const NO_INDEX_WHITELIST: string[] = ["/_platform"]

// Function to check if a path should be no-indexed
export function shouldNoIndex(pathname: string): boolean {
  return NO_INDEX_WHITELIST.some((pattern) => {
    // Support for exact matches and wildcard patterns
    if (pattern.endsWith("*")) {
      const basePattern = pattern.slice(0, -1)
      return pathname.startsWith(basePattern)
    }
    return pathname === pattern || pathname.startsWith(pattern + "/")
  })
}

// Function to generate robots meta tag value
export function getRobotsValue(pathname: string): string {
  return shouldNoIndex(pathname) ? "noindex, nofollow" : "index, follow"
}
