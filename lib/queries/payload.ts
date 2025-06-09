import { unstable_cache } from "next/cache"
import { draftMode } from "next/headers"
import configPromise from "@payload-config"
import { getPayload } from "payload"

export const queryHeader = unstable_cache(async () => {
  try {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })
    const result = await payload.findGlobal({
      draft,
      overrideAccess: draft,
      slug: "header",
    })
    return result || null
  } catch (error) {
    console.error("Error fetching header:", error)
    return null
  }
})

export const queryFooter = unstable_cache(async () => {
  try {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })
    const result = await payload.findGlobal({
      draft,
      overrideAccess: draft,
      slug: "footer",
    })
    return result || null
  } catch (error) {
    console.error("Error fetching header:", error)
    return null
  }
})

export const queryDonation = unstable_cache(async () => {
  try {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({ config: configPromise })
    const result = await payload.findGlobal({
      draft,
      overrideAccess: draft,
      slug: "donation",
    })
    return result || null
  } catch (error) {
    console.error("Error fetching header:", error)
    return null
  }
})

export const queryPagebySlug = unstable_cache(async (slug: string) => {
  try {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({
      config: configPromise,
    })

    const result = await payload.find({
      collection: "pages",
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  } catch (error) {
    console.error("Error fetching lesson by slug:", error)
    return null
  }
})

export const queryHomePage = unstable_cache(async () => {
  try {
    const { isEnabled: draft } = await draftMode()
    const payload = await getPayload({
      config: configPromise,
    })

    const result = await payload.find({
      collection: "pages",
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        sitehome: {
          equals: true,
        },
      },
    })

    return result.docs?.[0] || null
  } catch (error) {
    console.error("Error fetching lesson by slug:", error)
    return null
  }
})

export const pageSlugs = async () => {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
    where: {
      sitehome: {
        equals: false,
      },
    },
  })
  const pathSlugs = []
  for (const page of pages.docs) {
    pathSlugs.push({
      slug: page.slug,
    })
  }

  return pathSlugs
}
