"use client"

import { PageAndNavQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { ImageGallery } from "@/components//page/image-gallery"
import { Footer } from "@/components/footer"
import { CardGrid } from "@/components/page/card-grid"
import { PageContent } from "@/components/page/page-content"
import { WelcomeHero } from "@/components/page/welcome-hero"
import { SiteHeader } from "@/components/site-header"

export function PageComponent(props: {
  data: PageAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  return (
    <>
      <SiteHeader nav={data.nav} header={data.header} />
      <div className="flex min-h-[calc(100vh-65px)] flex-col">
        <div className="grow">
          {data.page.blocks?.map((block, i) => {
            switch (block?.__typename) {
              case "PageBlocksWelcomeHero": {
                return <WelcomeHero key={i} {...block} />
              }
              case "PageBlocksCardgrid3Col": {
                return (
                  <div
                    key={block.gridTitle}
                    className="container mx-auto grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3"
                  >
                    <CardGrid {...block} />
                  </div>
                )
              }
              case "PageBlocksGallery": {
                return <ImageGallery key={i} {...block} />
              }
              case "PageBlocksRichContent": {
                return <PageContent key={i} {...block} />
              }
            }
          })}
        </div>
        <Footer footer={data.footer} />
      </div>
    </>
  )
}
