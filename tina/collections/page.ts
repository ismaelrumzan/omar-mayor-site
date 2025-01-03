import { AnyField, Collection, Field, Template } from "tinacms"

import { cardBlockItem } from "../templates/card-grid"
import { RichTextTemplates } from "../templates/rich-text-templates"
import { backgroundColorOptions } from "./common"

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
          name: "pageContent",
          label: "Main Content",
          fields: [
            {
              name: "content",
              type: "rich-text",
              label: "Content",
              description: "Rich content for page",
              templates: RichTextTemplates,
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
              name: "title",
              type: "string",
              label: "Hero Title",
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
                  name: "style",
                  label: "Link type",
                  options: ["simple", "button"],
                },
              ],
            },
            {
              type: "string",
              name: "backgroundType",
              label: "Background Type",
              description: "Only the type specified will be used",
              options: [
                { label: "Image", value: "image" },
                { label: "Color", value: "color" },
              ],
            },
            {
              name: "backgroundImage",
              label: "Hero Background Image",
              type: "image",
            },
            {
              name: "backgroundColor",
              label: "Hero Background Color",
              type: "string",
              ui: {
                component: "color",
              },
            },
          ],
        },
        {
          name: "coverSection",
          label: "Cover Section",
          fields: [
            {
              name: "headline",
              type: "string",
              label: "Cover Headline",
            },
            {
              name: "content",
              label: "Cover Content",
              type: "rich-text",
            },
            {
              name: "backgroundImage",
              label: "Cover Background Image",
              type: "image",
            },
            {
              name: "backgroundColor",
              label: "Background Color",
              type: "string",
              ui: {
                component: "color",
              },
            },
          ],
        },
        {
          name: "featuredPosts",
          label: "Featured Posts",
          fields: [
            {
              name: "Posts",
              label: "Featured Posts",
              list: true,
              type: "object",
              ui: {
                itemProps: (item) => {
                  return { label: item.label }
                },
              },
              fields: [
                {
                  name: "label",
                  label: "Label",
                  type: "string",
                },
                {
                  name: "featuredPost",
                  label: "Featured Post",
                  type: "reference",
                  collections: ["post"],
                },
              ],
            },
          ],
        },
        {
          name: "cardgrid2Col",
          label: "Card Grid with 2 Columns",
          ui: {
            itemProps: (item) => {
              return { label: item.gridTitle }
            },
          },
          fields: cardBlockItem,
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
          name: "cardgrid4Col",
          label: "Card Grid with 4 Columns",
          ui: {
            itemProps: (item) => {
              return { label: item.gridTitle }
            },
          },
          fields: cardBlockItem,
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
        {
          name: "collapsibleSection",
          label: "Collapsible Blocks",
          ui: {
            itemProps: (item) => {
              return { label: item.collapsibleTitle }
            },
          },
          fields: [
            {
              name: "accordionBlock",
              label: "Collapsible Block",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.headline }
                },
              },
              fields: [
                {
                  name: "headline",
                  label: "Headline",
                  type: "string",
                },
                {
                  name: "content",
                  label: "Content",
                  type: "rich-text",
                  description: "content for the collapsible block",
                  templates: RichTextTemplates,
                },
              ],
            },
            {
              name: "collapsibleTitle",
              label: "Collapsible Elements Title",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
}
