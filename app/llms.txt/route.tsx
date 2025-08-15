import { NextRequest, NextResponse } from "next/server"
import client from "@/tina/__generated__/client"

export async function GET(request: NextRequest) {
  try {
    // Fetch all pages
    const pagesQuery = await client.queries.pageConnection()
    const pages = pagesQuery.data?.pageConnection.edges || []

    // Get header data for site title and description
    const headerQuery = await client.queries.headerConnection()
    const headerData = headerQuery.data.headerConnection.edges
      ? headerQuery.data.headerConnection.edges[0]?.node
      : undefined

    const siteTitle = headerData?.siteTitle || "Omar for Mayor"
    const siteDescription =
      headerData?.siteDescription || "Omar's campaign for Mayor of Edmonton"

    let output = `# ${siteTitle}\n\n`
    output += `> ${siteDescription}\n\n`

    // Collect all published pages
    const primaryPages = []

    for (const edge of pages) {
      const page = edge?.node
      if (!page) continue

      // Only include pages where published is true (matching sitemap logic)
      if (page.published !== true) continue

      const filename = page._sys.filename
      const title = page.title || "Untitled"
      const description = page.description || ""

      const pageEntry = `- [${title}](/${filename}): ${description}`

      primaryPages.push(pageEntry)
    }

    // Build output with all pages under Primary Resources
    if (primaryPages.length > 0) {
      output += "## Primary Resources\n"
      primaryPages.forEach((page) => {
        output += page + "\n"
      })
      output += "\n"
    }

    return new NextResponse(output, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  } catch (error) {
    console.error("Error generating llms.txt content:", error)
    return new NextResponse("Error generating content", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  }
}
