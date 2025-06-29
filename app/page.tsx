import React, { Suspense } from "react"
import type { Metadata } from "next"
import client from "@/tina/__generated__/client"

import { jsonLd } from "@/lib/constants"
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
      description: headerData?.siteDescription || "",
      url: "https://www.omar4mayor.ca",
      siteName: headerData?.siteTitle || "",
      images: [
        {
          url: "https://www.omar4mayor.ca/images/omar.jpeg", // Must be an absolute URL
          width: 2738,
          height: 1825,
        },
      ],
      locale: "en_CA",
      type: "website",
    },
  }
}

export default async function Page() {
  const result = await client.queries.pageAndNav({
    relativePath: `home.mdx`,
  })
  return (
    <Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageComponent {...result} />
    </Suspense>
  )
}
