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
        name: "coverimage",
        label: "Cover Image",
        type: "image",
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
