import React from "react"
import type { Metadata } from "next"
import client from "@/tina/__generated__/client"

import { jsonLd } from "@/lib/constants"
import { getRobotsValue } from "@/lib/seo-config"
import { PageComponent } from "@/components/app/page"

export default async function Page({
  params,
}: {
  params: Promise<{ filename: string[] }>
}) {
  const result = await client.queries.pageAndNav({
    relativePath: `${(await params).filename}.mdx`,
  })
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageComponent {...result} />
    </>
  )
}

interface PageProps {
  params: Promise<{ filename: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { filename } = await params
  const pathname = `/${filename}`
  const headerQuery = await client.queries.headerConnection()
  const headerData = headerQuery.data.headerConnection.edges
    ? headerQuery.data.headerConnection.edges[0]?.node
    : undefined
  const title = headerData?.siteTitle || ""
  const description = headerData?.siteDescription || ""
  return {
    title: title,
    description: description,
    robots: getRobotsValue(pathname),
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

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection()
  const paths = pages.data?.pageConnection.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }))
  return paths || []
}
