import { Block } from "payload";

export const PageTitleBlock: Block = {
  slug: "page_title", // required
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "background",
      type: "upload",
      relationTo: "media",
    },
  ],
};
