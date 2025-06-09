import Image from "next/image"
import Link from "next/link"
import { Media } from "@/payload-types"
import {
  SerializedEditorState,
  SerializedLexicalNode,
} from "@payloadcms/richtext-lexical/lexical"
import { Button } from "@/components/ui/button"
import RichText from "@/components/RichText"
import { HeroBlock } from "@/components/page-renderer"

export function Hero({ content }: { content: HeroBlock }) {
  const imageBack = content.background as Media
  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#2ECC71]/20 to-[#2ECC71]/5 py-3">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px]">
            <div className="flex flex-col md:pt-[20px] lg:pt-[100px] xl:pt-[150px] space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <RichText
                    data={
                      content.title as SerializedEditorState<SerializedLexicalNode>
                    }
                  />
                </h1>
                <div className="max-w-[600px] text-gray-500 md:text-xl">
                  <RichText
                    data={
                      content.subtitle as SerializedEditorState<SerializedLexicalNode>
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {content.cta?.map((item) => {
                  return (
                    <Link href={item?.link || ""} key={item?.label}>
                      <Button
                        className={
                          item?.type === "primary"
                            ? `bg-[#4B0082] hover:bg-[#4B0082]/90`
                            : `bg-[#00A86B] hover:bg-[#00A86B]/90`
                        }
                      >
                        {item?.label}
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </div>
            <Image
              src={imageBack.url || ''}
              alt={imageBack.alt || ''}
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
