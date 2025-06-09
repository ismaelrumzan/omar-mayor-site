import { HeroBlock } from "@/blocks/hero"
import { RichTextBlock } from "@/blocks/rich-text"
import { VideoBlock } from "@/blocks/video"
import { PageTitleBlock } from "@/blocks/page-title"
import { slugField } from "@/fields/slug"
import type { CollectionConfig } from "payload"

import { anyone } from "../access/anyone"
import { authenticated } from "../access/authenticated"
import { revalidateDelete, revalidatePage } from "./hooks/revalidatePage"
import { generatePreviewPath } from "@/lib/generate-preview-path"

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "pages",
        req,
      }),
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "pages",
          req,
        });
        return path;
      },
    },    
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    { name: "title", type: "text" },
    {
      name: "sitehome",
      type: "checkbox",
      label: "Use as home (Only one page can be the site home)",
      admin: {
        position: 'sidebar',
      }
    },
        {
      name: "showDonation",
      type: "checkbox",
      label: "Show donation box (Appears above footer)",
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: "meta",
      type: "group",
      fields: [
        { name: "description", type: "text" },
        { name: "keywords", type: "text" },
      ],
    },
    {
      name: "contentSections",
      type: "blocks",
      blocks: [HeroBlock, RichTextBlock, VideoBlock, PageTitleBlock],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 50, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 20,
  },  
}
