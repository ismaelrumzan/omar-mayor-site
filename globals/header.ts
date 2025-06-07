import { GlobalConfig } from "payload";
import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";

const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: anyone,
    update: authenticated
  },
  fields: [
    {
      name: "logo",
      label: "Site Logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "navLinks",
      label: "Navigation Links",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
        },
        {
          name: "style",
          type: "select",
          options: ["primary","secondary"]
        },
        {
          name: "url",
          label: "Relative URL (e.g. /programs)",
          type: "text",
        },
        {
          name: "location",
          type: "select",
          label: "Top as buttons or bottom as links in the header",
          options: ["top","bottom"]
        }
      ],
    },
  ],
};

export default Header;
