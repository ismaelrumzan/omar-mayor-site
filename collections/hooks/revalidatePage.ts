import { revalidatePath } from "next/cache"
import type { Page } from "@/payload-types"
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload"

import { queryHomePage } from "@/lib/queries/payload"

export const revalidatePage: CollectionAfterChangeHook<Page> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === "published") {
      const path = `/${doc.slug}`
      const homepage = await queryHomePage()
      console.log(homepage, doc.slug)
      if (homepage && homepage.slug === doc.slug) {
        revalidatePath("/")
        payload.logger.info(`Revalidating page at path: /`)
      } else {
        revalidatePath(path)
        revalidatePath("/")
        payload.logger.info(`Revalidating page at path: ${path}`)
      }
    }
    if (previousDoc._status === "published" && doc._status !== "published") {
      const oldPath = `/${previousDoc.slug}`
      payload.logger.info(`Revalidating old course at path: ${oldPath}`)
      revalidatePath(oldPath)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/${doc?.slug}`
    revalidatePath(path)
  }
  return doc
}
