import Image from "next/image"
import Link from "next/link"
import { PageBlocksWelcomeHero } from "@/tina/__generated__/types"
import { ArrowRight } from "lucide-react"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"

export function WelcomeHero(props: PageBlocksWelcomeHero) {
  const backgroundColor = props.backgroundColor || "#ffffff"
  const backgroundImage = props.backgroundImage
    ? `${props.backgroundImage}`
    : "none"
  return (
    <>
      <section
        className="relative flex h-[80vh] w-full items-center justify-center"
        style={{ backgroundColor }}
        data-tina-field={tinaField(props, "backgroundColor")}
      >
        {backgroundImage !== "none" && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              alt={props.title || ""}
              className="size-full object-cover opacity-50"
              height={1080}
              src={backgroundImage}
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
              data-tina-field={tinaField(props, "backgroundImage")}
            />
          </div>
        )}
        <div className="z-5 relative max-w-3xl px-4 text-center">
          <h1
            className="text-primary-foreground mb-4 text-5xl font-bold "
            data-tina-field={tinaField(props, "title")}
          >
            {props.title}
          </h1>
          <div
            className="prose text-primary-foreground [&_h3]:text-primary-foreground max-w-none"
            data-tina-field={tinaField(props, "message")}
          >
            <TinaMarkdown content={props.message} />
          </div>
          <div className="flex items-center justify-center gap-5 py-12">
            {props.links?.map((link) => {
              switch (link?.style) {
                case "button": {
                  return (
                    <Link
                      data-tina-field={tinaField(link, "label")}
                      key={link.label}
                      href={link.link || ""}
                    >
                      <Button size="lg">{link.label}</Button>
                    </Link>
                  )
                }
                case "simple": {
                  return (
                    <Link
                      data-tina-field={tinaField(link, "label")}
                      key={link.label}
                      href={link?.link || ""}
                    >
                      <Button size="lg" variant={"ghost"}>
                        Learn More
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </Link>
                  )
                }
              }
            })}
          </div>
        </div>
      </section>
    </>
  )
}
