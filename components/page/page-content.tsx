import { PageBlocksRichContent } from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { components } from "./components"

export function PageContent(props: PageBlocksRichContent) {
  let bgStyle = ""
  if (props.backgroundColor) {
    bgStyle = `bg-${props.backgroundColor}`
  }
  let textAlign = "text-left"
  let boxAlign = "items-start"
  if (props.textAlign) {
    textAlign = `text-${props.textAlign}`
    if (textAlign === "text-center") {
      boxAlign = `items-center`
    }
    if (textAlign === "text-right") {
      boxAlign = `items-end`
    }
  }
  return (
    <section className={`w-full ${bgStyle} ${textAlign}`}>
      <div className="container py-4 px-4">
        <div
          className={`prose max-w-none flex flex-col ${boxAlign}`}
          data-tina-field={tinaField(props, "content")}
        >
          <TinaMarkdown content={props.content} components={components} />
        </div>
      </div>
    </section>
  )
}
