import type { Template } from "tinacms"

export const RichTextTemplates: Template[] = [
  {
    name: "Googlemap",
    label: "Google map location",
    fields: [{ name: "src", label: "Google map embed URL", type: "string" }],
  },
  {
    name: "Youtube",
    label: "Youtube Video",
    fields: [{ name: "id", label: "Video ID", type: "string" }],
  },
  {
    name: "Alert",
    label: "Alert",
    fields: [
      { name: "title", label: "Alert Title", type: "string" },
      {
        name: "description",
        label: "Alert Description",
        type: "string",
      },
      {
        name: "type",
        label: "Alert Type",
        type: "string",
        options: ["info", "error", "success", "warning"],
      },
    ],
  },
]
