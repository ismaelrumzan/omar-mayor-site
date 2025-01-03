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
      {
        name: "links",
        label: "Links",
        type: "object",
        list: true,
        ui: {
          itemProps: (item: { label: any }) => {
            return { label: item.label }
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
            label: "Button/Link Text",
          },
          {
            type: "string",
            name: "style",
            label: "Link Type",
            options: [
              { label: "Simple link", value: "simple" },
              { label: "Clickable Button", value: "button" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "gridTitle",
    label: "Card Grid Title",
    type: "string",
  },
]
