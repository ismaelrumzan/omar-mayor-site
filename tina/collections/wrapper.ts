import { Collection } from "tinacms"

import { backgroundColorOptions } from "./common"

export const NavCollection: Collection = {
  name: "nav",
  label: "Nav (Sitewide)",
  path: "content/nav",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
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
          label: "Relative or External Link",
        },
        {
          name: "linkedPage",
          label: "Linked Page",
          type: "reference",
          collections: ["page"],
        },
        {
          type: "string",
          name: "linkType",
          label: "Link type",
          options: ["relative", "page", "external"],
        },
        {
          type: "string",
          name: "buttonStyle",
          label: "Button type",
          options: ["ghost", "default", "secondary"],
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
      name: "logo",
      label: "Logo",
      type: "image",
    },
    {
      name: "logoTitle",
      label: "Logo Title",
      description: "Show a title next to the logo",
      type: "string",
    },
    {
      name: "logoWidth",
      label: "Logo Width",
      description: "Minimum Logo Width",
      type: "number",
    },
    {
      name: "logoHeight",
      label: "Logo Height",
      description: "Minimum Logo Height",
      type: "number",
    },
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
      name: "navAlignment",
      label: "Right align navigation",
      description: "Left align when off, Right align when on",
      type: "boolean",
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background color type",
      options: backgroundColorOptions,
    },
    {
      type: "object",
      name: "ctaButton",
      label: "Call to action button",
      fields: [
        { name: "title", type: "string" },
        { name: "link", type: "string" },
        {
          name: "type",
          type: "string",
          options: ["relative", "absolute"],
        },
      ],
    },
    {
      name: "darkmode",
      label: "Show Dark/Light Mode Switcher",
      description: "Placed on the top right. Light/Dark mode switcher",
      type: "boolean",
    },
    {
      name: "userlogin",
      label: "Show Log in/Sign Up/Avatar",
      description:
        "Placed on the top right. Uses Kinde.com to manage the user authentication system",
      type: "boolean",
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
          label: "Twitter",
          name: "twitter",
        },
        {
          type: "string",
          label: "Instagram",
          name: "instagram",
        },
        {
          type: "string",
          label: "Github",
          name: "github",
        },
        {
          type: "string",
          label: "YouTube",
          name: "youtube",
        },
      ],
    },
    {
      name: "copyright",
      label: "Copyright notice",
      type: "string",
    },
    {
      type: "string",
      name: "backgroundColor",
      label: "Background color type",
      options: backgroundColorOptions,
    },
  ],
}
