"use client"

import { usePathname } from "next/navigation"
import { PageAndNavQuery } from "@/tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

import { ImageGallery } from "@/components//page/image-gallery"
import { Footer } from "@/components/footer"
import { CardGridBlock } from "@/components/page/card-grid-block"
import { PageContent } from "@/components/page/page-content"
import { WelcomeHero } from "@/components/page/welcome-hero"
import { SiteHeader } from "@/components/site-header"

import { DonationBlock } from "../page/donation-block"
import { EmbedForm } from "../page/embed-form"
import { HomeCTA } from "../page/home-cta"
import { Letter } from "../page/letter"
import { SupportOmar } from "../page/support-omar"
import { PlatformContent } from "../page/platform"
import { VideoBlock } from "../page/video-block"

export function PageComponent(props: {
  data: PageAndNavQuery
  variables: {
    relativePath: string
  }
  query: string
}) {
  const { data } = useTina(props)
  const pathname = usePathname()
  return (
    <>
      <SiteHeader nav={data.nav} header={data.header} />
      <div className="flex min-h-[calc(100vh-120px)] flex-col">
        <div className="grow">
          {pathname === "/" && <HomeCTA />}
          {pathname === "/support-omar" && <SupportOmar />}
          {pathname === "/_platform" && <PlatformContent />}
          {data.page.blocks?.map((block, i) => {
            switch (block?.__typename) {
              case "PageBlocksWelcomeHero": {
                return <WelcomeHero key={i} {...block} />
              }
              case "PageBlocksLetterSection": {
                return <Letter key={i} {...block} />
              }
              case "PageBlocksCardgrid3Col": {
                return <CardGridBlock key={i} {...block} />
              }
              case "PageBlocksGallery": {
                return <ImageGallery key={i} {...block} />
              }
              case "PageBlocksRichContent": {
                return <PageContent key={i} {...block} />
              }
              case "PageBlocksDonationSection": {
                return <DonationBlock key={i} {...block} />
              }
              case "PageBlocksVideoBlock": {
                return <VideoBlock key={i} {...block} />
              }
              case "PageBlocksEmbedForm": {
                return <EmbedForm key={i} {...block} />
              }
            }
          })}
        </div>
        <Footer footer={data.footer} />
      </div>
    </>
  )
}
