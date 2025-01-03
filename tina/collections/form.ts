import { Collection } from "tinacms"

export const FormCollection: Collection = {
  name: "form",
  label: "Forms",
  path: "content/forms",
  format: "mdx",
  ui: {
    router: (props) => {
      return `/forms/${props.document._sys.filename}`
    },
  },
  fields: [
    {
      name: "title",
      label: "Form Title",
      description: "Headline at the top of the form",
      type: "string",
    },
    {
      name: "description",
      type: "rich-text",
      label: "Form Description",
      description: "Rich Description for form",
    },
    {
      name: "buttonText",
      label: "Submit button text",
      type: "string",
    },
    {
      name: "fieldblocks",
      label: "Field Blocks",
      description:
        "You can re-order them as needed and have different types of fields on each page",
      type: "object",
      list: true,
      templates: [
        {
          name: "textField",
          label: "Text Field",
          ui: {
            itemProps: (item) => {
              return { label: item.label }
            },
          },
          fields: [
            {
              name: "label",
              type: "string",
              label: "Field Label",
            },
            {
              type: "boolean",
              name: "required",
              label: "Is field required?",
            },
          ],
        },
        {
          name: "largeTextField",
          label: "Large Text Field",
          ui: {
            itemProps: (item) => {
              return { label: item.label }
            },
          },
          fields: [
            {
              name: "label",
              type: "string",
              label: "Field Label",
            },
            {
              type: "boolean",
              name: "required",
              label: "Is field required?",
            },
          ],
        },
        {
          name: "selectField",
          label: "Select Field",
          ui: {
            itemProps: (item) => {
              return { label: item.label }
            },
          },
          fields: [
            {
              name: "label",
              type: "string",
              label: "Field Label",
            },
            {
              type: "boolean",
              name: "required",
              label: "Is field required?",
            },
            {
              name: "selectText",
              type: "string",
              label: "Initial Select Text",
            },
            {
              name: "options",
              type: "object",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item.optionText }
                },
              },
              fields: [
                { name: "optionText", label: "Option Text", type: "string" },
              ],
            },
          ],
        },
      ],
    },
  ],
}
