import { defineConfig } from "tinacms"

import { FormCollection } from "./collections/form"
import { PageCollection } from "./collections/page"
import { AuthorCollection, PostCollection } from "./collections/post"
import {
  FooterCollection,
  HeaderCollection,
  NavCollection,
} from "./collections/wrapper"

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF,
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "media",
    },
    accept: ["image"],
  },
  schema: {
    collections: [
      PageCollection,
      PostCollection,
      FormCollection,
      AuthorCollection,
      NavCollection,
      HeaderCollection,
      FooterCollection,
    ],
  },
})
