import type { MetadataRoute } from "next"
import client from "@/tina/__generated__/client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch all pages
    const pagesQuery = await client.queries.pageConnection()
    const pages = pagesQuery.data?.pageConnection.edges || []

    const baseUrl = "https://www.omar4mayor.ca"

    // Start with the home page
    const sitemapEntries: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      },
    ]

    // Add regular page URLs (not .md versions)
    for (const edge of pages) {
      const page = edge?.node
      if (!page) continue

      const filename = page._sys.filename

      // Only include pages where published is true
      if (page.published !== true) continue

      sitemapEntries.push({
        url: `${baseUrl}/${filename}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority:
          filename === "home" || filename === "about" || filename === "vision"
            ? 0.9
            : 0.8,
      })
    }

    return sitemapEntries
  } catch (error) {
    console.error("Error generating sitemap:", error)

    // Fallback to basic sitemap if there's an error
    return [
      {
        url: "https://www.omar4mayor.ca",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 1,
      },
    ]
  }
}
