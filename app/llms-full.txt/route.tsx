import { NextRequest, NextResponse } from "next/server"
import client from "@/tina/__generated__/client"

export async function GET(request: NextRequest) {
  try {
    // Fetch all pages
    const pagesQuery = await client.queries.pageConnection()
    const pages = pagesQuery.data?.pageConnection.edges || []

    let output = "Edmonton Mayoral Campaign 2025 - Omar Mohammad\n"
    output += "=".repeat(50) + "\n\n"

    for (const edge of pages) {
      const page = edge?.node
      if (!page) continue

      // Only include pages where published is true (matching sitemap logic)
      if (page.published !== true) continue

      const filename = page._sys.filename
      const title = page.title || "Untitled"
      const llmsContent = page.llmsContent || ""

      output += `Page: ${title}\n`
      output += `URL: /${filename}\n`
      output += "-".repeat(40) + "\n"
      output += llmsContent
      output += "\n\n"
      output += "=".repeat(50) + "\n\n"
    }

    return new NextResponse(output, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  } catch (error) {
    console.error("Error generating llms-full.txt content:", error)
    return new NextResponse("Error generating content", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  }
}
