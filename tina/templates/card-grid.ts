import { Description } from "@radix-ui/react-dialog"

export const cardBlockItem: any[] = [
  {
    name: "cardblock",
    label: "Card Block",
    type: "object",
    list: true,
    ui: {
      itemProps: (item: { headline: any }) => {
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
        name: "iconimage",
        label: "Icon Image",
        type: "image",
        description:
          "Use the site https://www.svgrepo.com/ to find an appropriate SVG icon",
      },
      {
        name: "content",
        label: "Content",
        type: "rich-text",
      },
    ],
  },
  {
    name: "gridTitle",
    label: "Card Grid Title",
    type: "string",
  },
  {
    name: "id",
    label: "Card Section Anchor",
    type: "string",
    description: "To be able to link to this section",
  },
  {
    name: "gridDescription",
    label: "Card Grid Description",
    type: "rich-text",
  },
  {
    type: "string",
    name: "cta_link",
    label: "Call to action link",
  },
  {
    type: "string",
    name: "cta_label",
    label: "Call to action button text",
  },
]
