/* eslint-disable tailwindcss/classnames-order */

import Image from "next/image"
import Link from "next/link"
import { PageBlocksCardgrid3Col } from "@/tina/__generated__/types"
import {
  Brain,
  Building2,
  Car,
  Coins,
  Facebook,
  Heart,
  Instagram,
  Users,
  X,
} from "lucide-react"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function CardGridBlock(props: PageBlocksCardgrid3Col): JSX.Element {
  const { cardblock } = props
  return (
    <section
      id={props.id || "card-grid-block"}
      className="w-full pt-6 pb-2 md:py-12 lg:py-16 relative"
    >
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-5xl"
              data-tina-field={tinaField(props, "gridTitle")}
            >
              {props.gridTitle}
            </h2>
            <p
              className="max-w-[900px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              data-tina-field={tinaField(props, "gridDescription")}
            >
              <TinaMarkdown content={props.gridDescription} />
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {cardblock?.map((item) => {
            return (
              <Card className="relative overflow-hidden bg-white opacity-90">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Image
                    src={item?.iconimage || ""}
                    className="h-12 w-12"
                    width={24}
                    height={24}
                    alt={item?.headline || ""}
                    style={{
                      filter:
                        "invert(20%) sepia(100%) saturate(500%) hue-rotate(255deg) brightness(85%) contrast(110%)",
                    }}
                    data-tina-field={tinaField(item, "iconimage")}
                  />
                  <h3
                    className="text-xl font-bold"
                    data-tina-field={tinaField(item, "headline")}
                  >
                    {item?.headline}
                  </h3>
                  <p
                    className="text-gray-500"
                    data-tina-field={tinaField(item, "content")}
                  >
                    <TinaMarkdown content={item?.content} />
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Link
            href={props.cta_link || ""}
            data-tina-field={tinaField(props, "cta_label")}
          >
            <Button className="bg-[#4B0082] hover:bg-[#4B0082]/90">
              {props.cta_label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
