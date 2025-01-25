import { AnyField, Collection, Field, Template } from "tinacms"
import { ToolbarOverrideType } from "tinacms/dist/toolkit/fields/plugins/mdx-field-plugin/plate/toolbar/toolbar-overrides"

import { cardBlockItem } from "../templates/card-grid"
import { RichTextTemplates } from "../templates/rich-text-templates"
import { backgroundColorOptions } from "./common"

type toolbarItemName = Exclude<ToolbarOverrideType, "table">

const richTextToolbar: toolbarItemName[] = [
  "heading",
  "bold",
  "italic",
  "embed",
  "ol",
  "ul",
]

export const PageCollection: Collection = {
  name: "page",
  label: "Pages",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: (props) => {
      return `/${props.document._sys.filename}`
    },
  },
  fields: [
    {
      name: "title",
      label: "Page title",
      description: "For SEO purposes",
      type: "string",
    },
    {
      name: "blocks",
      label: "Content Blocks",
      description:
        "You can re-order them as needed and have different blocks on each page",
      type: "object",
      list: true,
      templates: [
        {
          name: "richContent",
          label: "Rich Text Content",
          fields: [
            {
              name: "content",
              type: "rich-text",
              label: "Content",
              description: "Rich content for page",
              toolbarOverride: richTextToolbar,
              templates: RichTextTemplates,
            },
            {
              name: "id",
              label: "Rich content Anchor",
              type: "string",
              description: "To be able to link to this section",
            },
            {
              type: "string",
              name: "backgroundColor",
              label: "Background color type",
              options: backgroundColorOptions,
            },
            {
              type: "string",
              name: "textAlign",
              label: "Text Alignment",
              options: ["left", "center", "right"],
            },
          ],
        },
        {
          name: "welcomeHero",
          label: "Hero Section",
          fields: [
            {
              name: "hero_title",
              type: "rich-text",
              label: "Hero Title",
            },
            {
              name: "id",
              label: "Hero Section Anchor",
              type: "string",
              description: "To be able to link to this section",
            },
            {
              name: "message",
              type: "rich-text",
              label: "Hero Message",
            },
            {
              name: "links",
              label: "Hero links",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  // Field values are accessed by item?.<Field name>
                  return { label: item?.label }
                },
              },
              fields: [
                {
                  type: "string",
                  name: "link",
                  label: "Relative or absolute link",
                },
                {
                  type: "string",
                  name: "label",
                  label: "Link/Button Text",
                },
                {
                  type: "string",
                  name: "button_type",
                  label: "Button color",
                  options: ["primary", "secondary"],
                },
              ],
            },
            {
              name: "backgroundImage",
              label: "Hero Background Image",
              type: "image",
            },
          ],
        },
        {
          name: "cardgrid3Col",
          label: "Card Grid with 3 Columns",
          ui: {
            itemProps: (item) => {
              return { label: item.gridTitle }
            },
          },
          fields: cardBlockItem,
        },
        {
          name: "donationSection",
          label: "Donation Section",
          fields: [
            {
              name: "title",
              label: "Donation Section Title",
              type: "string",
            },
            {
              name: "id",
              label: "Donation Section Anchor",
              type: "string",
              description: "To be able to link to this section",
            },
            {
              name: "donationValues",
              label: "Donation Values",
              type: "object",
              ui: {
                itemProps: (item) => {
                  return { label: item.amount }
                },
              },
              list: true,
              fields: [
                {
                  name: "amount",
                  label: "Amount",
                  type: "number",
                },
              ],
            },
            {
              name: "donationButton",
              label: "Donation Button Text",
              type: "string",
            },
            {
              name: "showTopImage",
              label: "Show Top Image",
              type: "boolean",
            },
          ],
        },
        {
          name: "gallery",
          label: "Image Gallery",
          ui: {
            itemProps: (item) => {
              return { label: item.galleryTitle }
            },
          },
          fields: [
            {
              name: "galleryImages",
              label: "Gallery Images",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.caption }
                },
              },
              fields: [
                {
                  name: "caption",
                  label: "Caption",
                  type: "string",
                },
                {
                  name: "galleryImage",
                  label: "Gallery Image",
                  type: "image",
                },
              ],
            },
            {
              name: "galleryTitle",
              label: "Image Gallery Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
}
