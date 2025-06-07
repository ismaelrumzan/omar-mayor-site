import { Block } from "payload"

export const RichTextBlock: Block = {
  slug: "richtext", // required
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "anchor",
      type: "text",
      label: "Anchor for links",
    },
  ],
}
