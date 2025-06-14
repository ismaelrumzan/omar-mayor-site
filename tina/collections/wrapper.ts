import { Collection } from "tinacms"

export const NavCollection: Collection = {
  name: "nav",
  label: "Nav (Sitewide)",
  path: "content/nav",
  format: "md",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "links",
      label: "Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label }
        },
      },
      fields: [
        { type: "string", name: "label", label: "Label" },
        {
          type: "string",
          name: "link",
          label: "External or Relative Link",
          description:
            "Link with or without http/https - for relative links, you can use anchors; otherwise, prefer using page links",
        },
        {
          name: "linkedPage",
          label: "Linked Page",
          type: "reference",
          collections: ["page"],
        },
        {
          type: "string",
          name: "linkStyle",
          label: "Link Style",
          options: ["button-primary", "button-secondary", "link-only"],
        },
        {
          type: "string",
          name: "location",
          options: ["top-bar", "general-nav"],
        },
      ],
    },
  ],
}
export const HeaderCollection: Collection = {
  name: "header",
  label: "Header (Sitewide)",
  path: "content/header",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  defaultItem: () => {
    return {
      logoWidth: 50,
      logoHeight: 50,
      headerHeight: 64,
    }
  },
  fields: [
    {
      name: "headerHeight",
      label: "Header Height",
      description: "Minimum Header Height",
      type: "number",
    },
    {
      name: "siteTitle",
      label: "Site Title",
      type: "string",
      description: "used for SEO title",
    },
    {
      name: "siteDescription",
      label: "Site Description",
      type: "string",
      description: "used for SEO description",
    },
    {
      name: "contactSection",
      label: "Contact Pop Over Menu",
      type: "object",
      list: true,
      fields: [
        {
          name: "type",
          type: "string",
          options: ["media", "volunteer", "general"],
        },
        { name: "email", type: "string" },
        { name: "label", type: "string" },
      ],
    },
  ],
}
export const FooterCollection: Collection = {
  name: "footer",
  label: "Footer (Sitewide)",
  path: "content/footer",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "object",
      label: "Social Links",
      description:
        "Direct link to your social media account - leave empty if N/A",
      name: "social",
      fields: [
        {
          type: "string",
          label: "Facebook",
          name: "facebook",
        },
        {
          type: "string",
          label: "Twitter X",
          name: "twitter",
        },
        {
          type: "string",
          label: "Instagram",
          name: "instagram",
        },
        {
          type: "string",
          label: "Youtube",
          name: "youtube",
        },
      ],
    },
    {
      name: "copyright",
      label: "Copyright notice",
      type: "string",
    },
  ],
}
