import Image from "next/image"
import Link from "next/link"
import { PageBlocksWelcomeHero } from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"

export function WelcomeHero(props: PageBlocksWelcomeHero) {
  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#2ECC71]/20 to-[#2ECC71]/5 py-3">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px]">
            <div className="flex flex-col md:pt-[20px] lg:pt-[100px] xl:pt-[150px] space-y-4">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  data-tina-field={tinaField(props, "hero_title")}
                >
                  <TinaMarkdown content={props.hero_title} />
                </h1>
                <p
                  className="max-w-[600px] text-gray-500 md:text-xl"
                  data-tina-field={tinaField(props, "message")}
                >
                  <TinaMarkdown content={props.message} />
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {props.links?.map((item) => (
                  <Link
                    href={item?.link || ""}
                    key={item?.label}
                    data-tina-field={tinaField(item, "label")}
                  >
                    <Button
                      className={
                        item?.button_type === "primary"
                          ? `bg-[#4B0082] hover:bg-[#4B0082]/90`
                          : `bg-[#00A86B] hover:bg-[#00A86B]/90`
                      }
                    >
                      {item?.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
            <Image
              src={props.backgroundImage || ""}
              data-tina-field={tinaField(props, "backgroundImage")}
              alt={props.hero_title || ""}
              width={1083}
              height={2541}
              className="mx-auto overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
