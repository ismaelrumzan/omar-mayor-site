import { GlobalConfig } from "payload"

import { anyone } from "../access/anyone"
import { authenticated } from "../access/authenticated"

const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "copyright",
      label: "Copyright text",
      type: "text",
    },
    {
      name: "builtby",
      label: "Show Built by credits",
      type: "checkbox",
    },
    {
      name: "sociallinks",
      label: "Social Media Links",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          options: ["facebook", "x", "instagram"],
        },
        {
          name: "platform_id",
          label: "Platform id (e.g. omarmuhammad)",
          type: "text",
        },
      ],
    },
  ],
}

export default Footer
