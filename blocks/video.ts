import { Block } from "payload"

export const VideoBlock: Block = {
  slug: "video", // required
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "url",
      label: "video embed URL (Example: https://www.youtube.com/embed/den1DqVLoYg)",
      type: "text",
    },
    {
      name: "anchor",
      type: "text",
      label: "Anchor for links",
    },
  ],
}
