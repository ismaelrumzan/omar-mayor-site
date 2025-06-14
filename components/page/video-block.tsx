import Link from "next/link"
import { PageBlocksVideoBlock } from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"

import { Button } from "../ui/button"
import { VideoPlayer } from "../ui/iframe-video"

export function VideoBlock(props: PageBlocksVideoBlock) {
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
  let textColor = ""
  if (props.backgroundColor === "primary") {
    textColor = "text-white"
  }
  return (
    <section className={`w-full ${bgStyle} ${textAlign}`}>
      <div className="container py-4 px-4">
        <div className={`prose max-w-none ${textColor}`}>
          <div
            data-tina-field={tinaField(props, "title")}
            style={{
              fontFamily: "var(--font-noto-serif)",
            }}
            className="text-2xl sm:text-3xl"
          >
            {props.title}
          </div>
          <p data-tina-field={tinaField(props, "subtitle")}>{props.subtitle}</p>
        </div>

        <VideoPlayer
          url={`https://www.youtube.com/embed/${props.videoid}`}
          autoplay={props.autoplay ? props.autoplay : false}
        />
        {props.cta && (
          <Link href={props.cta.link || ""}>
            <Button variant="secondary">{props.cta.label}</Button>
          </Link>
        )}
      </div>
    </section>
  )
}
