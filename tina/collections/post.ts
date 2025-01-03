import { Collection } from "tinacms"

export const PostCollection: Collection = {
  name: "post",
  label: "Posts",
  path: "content/posts",
  format: "md",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "author",
      label: "Author",
      type: "reference",
      collections: ["author"],
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
    {
      name: "description",
      label: "Description",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "body",
      label: "Body",
      type: "rich-text",
      isBody: true,
    },
  ],
}

export const AuthorCollection: Collection = {
  name: "author",
  label: "Post Authors",
  path: "content/authors",
  format: "md",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
    },
    {
      name: "image",
      label: "Image",
      type: "image",
    },
  ],
}
