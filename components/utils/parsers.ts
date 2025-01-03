export function isAbsoluteLink(url: string): boolean {
  try {
    if (url.startsWith("mailto:")) {
      return true
    }
    const parsedUrl = new URL(url)
    return !!parsedUrl.protocol && !!parsedUrl.host
  } catch {
    // If the URL constructor throws an error, it's not a valid absolute URL.
    return false
  }
}
