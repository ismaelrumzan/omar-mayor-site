import React from "react"
import client from "@/tina/__generated__/client"

import { FormComponent } from "@/components/app/form"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const result = await client.queries.formAndNav({
    relativePath: `${(await params).slug}.mdx`,
  })
  return <FormComponent {...result} />
}

export async function generateStaticParams() {
  const forms = await client.queries.formConnection()
  const paths = forms.data?.formConnection.edges?.map((edge) => ({
    slug: edge?.node?._sys.breadcrumbs.join(""),
  }))
  return paths || []
}
