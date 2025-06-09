import { Hero } from "@/blocks/renderers/hero"
import { RichTextSection } from "@/blocks/renderers/rich-text"
import { Video } from "@/blocks/renderers/video"
import { Page } from "@/payload-types"

export type HeroBlock = Extract<
  NonNullable<Page["contentSections"]>[0],
  { blockType: "hero" }
>
export type RichTextBlock = Extract<
  NonNullable<Page["contentSections"]>[0],
  { blockType: "richtext" }
>
export type VideoBlock = Extract<
  NonNullable<Page["contentSections"]>[0],
  { blockType: "video" }
>
export type PageTitleBlock = Extract<
  NonNullable<Page["contentSections"]>[0],
  { blockType: "page_title" }
>

export function PageRenderer({ page }: { page: Page }) {
  const blocks = page.contentSections
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block.blockType) {
          case "hero": {
            return <Hero key={i} content={block} />
          }
          case "video": {
            return <Video key={i} content={block}></Video>
          }
          case "richtext": {
            return <RichTextSection key={i} content={block}></RichTextSection>
          }
        }
      })}
    </>
  )
}
