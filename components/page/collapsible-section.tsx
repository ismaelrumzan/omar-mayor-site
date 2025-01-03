/* eslint-disable tailwindcss/classnames-order */
import { PageBlocksCollapsibleSection } from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { components } from "./components"

export function CollapsibleSection(
  props: PageBlocksCollapsibleSection
): JSX.Element {
  const { accordionBlock } = props
  return (
    <div className="container mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {accordionBlock &&
          accordionBlock?.length > 0 &&
          accordionBlock.map((item, i) => (
            <AccordionItem value={item?.headline as string}>
              <AccordionTrigger className="text-lg text-primary">
                {item?.headline}
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className={`prose max-w-none`}
                  data-tina-field={tinaField(item, "content")}
                >
                  <TinaMarkdown
                    content={item?.content}
                    components={components}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  )
}
