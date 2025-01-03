"use client"

import { PostAndNavConnectionQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export function BlogIndexPageComponent(props: {
  data: PostAndNavConnectionQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)
  return (
    <>
      <SiteHeader header={data.header} nav={data.nav} />
      <div className="bg-muted h-full">
        <div className="container flex flex-col gap-8 py-8">
          <BlogList {...data} />
        </div>
      </div>
      <Footer footer={data.footer} />
    </>
  )
}
