import { NextRequest, NextResponse } from "next/server"
import client from "@/tina/__generated__/client"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params
    const pageData = await client.queries.pageAndNav({
      relativePath: `${filename}.mdx`,
    })

    const llmsContent = pageData.data.page.llmsContent || "My amazing content"

    return new NextResponse(llmsContent, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
      },
    })
  } catch (error) {
    console.error("Error generating llms.md content:", error)
    return new NextResponse("Error generating content", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  }
}
