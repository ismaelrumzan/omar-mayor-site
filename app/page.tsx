import React, { Suspense } from "react"
import type { Metadata } from "next"
import client from "@/tina/__generated__/client"

import { PageComponent } from "@/components/app/page"

export async function generateMetadata(): Promise<Metadata> {
  const headerQuery = await client.queries.headerConnection()
  const headerData = headerQuery.data.headerConnection.edges
    ? headerQuery.data.headerConnection.edges[0]?.node
    : undefined
  const title = headerData?.siteTitle || ""
  const description = headerData?.siteDescription || ""
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
    },
  }
}

export default async function Page() {
  const result = await client.queries.pageAndNav({
    relativePath: `home.mdx`,
  })
  return (
    <Suspense>
      <PageComponent {...result} showhomeCTA showBlocks />
    </Suspense>
  )
}
