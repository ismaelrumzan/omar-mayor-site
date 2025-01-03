/* eslint-disable tailwindcss/classnames-order */

import Image from "next/image"
import Link from "next/link"
import {
  PageBlocksCardgrid2Col,
  PageBlocksCardgrid3Col,
  PageBlocksCardgrid4Col,
} from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"
import { isAbsoluteLink } from "@/components/utils/parsers"

export function CardGrid(
  props:
    | PageBlocksCardgrid2Col
    | PageBlocksCardgrid3Col
    | PageBlocksCardgrid4Col
): JSX.Element {
  const { cardblock } = props
  return (
    <>
      {cardblock &&
        cardblock?.length > 0 &&
        cardblock.map((item, i) => (
          <div
            className="overflow-hidden rounded-lg bg-white shadow-md"
            key={item?.headline}
          >
            {item?.coverimage && (
              <Image
                alt={item?.headline as string}
                className="h-[150px] w-full object-cover sm:h-[200px]"
                height={300}
                src={item?.coverimage}
                data-tina-field={tinaField(item, "coverimage")}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
            )}

            <div className="p-4">
              <h3
                className="mb-2 text-xl font-bold"
                data-tina-field={tinaField(item, "headline")}
              >
                {item?.headline as string}
              </h3>
              <div
                className="prose mb-4 text-gray-600"
                data-tina-field={tinaField(item, "content")}
              >
                <TinaMarkdown content={item?.content} />
              </div>
              {item?.links && item?.links.length > 0 && (
                <div className="flex items-center justify-end gap-2">
                  {item?.links.map((linkItem) => (
                    <Link
                      href={linkItem?.link || ""}
                      data-tina-field={tinaField(linkItem, "link")}
                      key={linkItem?.link}
                      target={
                        isAbsoluteLink(linkItem?.link as string)
                          ? "_blank"
                          : "_self"
                      }
                    >
                      {linkItem?.style === "button" ? (
                        <Button
                          variant="secondary"
                          data-tina-field={tinaField(linkItem, "label")}
                        >
                          {linkItem?.label}
                        </Button>
                      ) : (
                        <div data-tina-field={tinaField(linkItem, "label")}>
                          {linkItem?.label}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
    </>
  )
}
