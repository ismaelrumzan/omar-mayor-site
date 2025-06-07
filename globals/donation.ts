import { GlobalConfig } from "payload"

import { anyone } from "../access/anyone"
import { authenticated } from "../access/authenticated"

const Footer: GlobalConfig = {
  slug: "donation",
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "title",
      label: "Donation box title",
      type: "text",
    },
    {
      name: "amounts",
      label: "Set amount options",
      type: "select",
      options: ["25","50","100","250","500","1000","2500","5000"],
      hasMany: true,
    },
    {
      name: "allowCustom",
      type: "checkbox",
      label: "Allow custom amount",
    }
  ],
}

export default Footer
