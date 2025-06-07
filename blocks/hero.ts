import { Block } from "payload"

export const HeroBlock: Block = {
  slug: "hero", // required
  fields: [
    {
      name: "title",
      type: "richText",
      required: true,
    },
    {
      name: "subtitle",
      type: "richText",
    },
    {
      name: "background",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "cta",
      type: "array",
      label: "call to action buttons of 2 colors (don't use more than 2)",
      fields: [
        { name: "label", type: "text" },
        { name: "type", type: "select", options: ["primary", "secondary"] },
        { name: "link", type: "text", label: "Relative URL (e.g. /programs)" },
      ],
    },
  ],
}
