import React from "react"
import client from "@/tina/__generated__/client"

import { PageComponent } from "@/components/app/page"

export default async function Page({
  params,
}: {
  params: Promise<{ filename: string[] }>
}) {
  const result = await client.queries.pageAndNav({
    relativePath: `${(await params).filename}.mdx`,
  })
  return <PageComponent {...result} />
}

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection()
  const paths = pages.data?.pageConnection.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }))

  return paths || []
}
