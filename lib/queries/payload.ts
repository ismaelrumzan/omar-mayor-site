import { unstable_cache } from "next/cache";
import { draftMode } from "next/headers";
import configPromise from "@payload-config";
import { getPayload } from "payload";

export const queryHeader = unstable_cache(async () => {
  try {
    const { isEnabled: draft } = await draftMode();
    const payload = await getPayload({ config: configPromise });
    const result = await payload.findGlobal({
      draft,
      overrideAccess: draft,
      slug: "header",
    });
    return result || null;
  } catch (error) {
    console.error("Error fetching header:", error);
    return null;
  }
});

export const queryFooter = unstable_cache(async () => {
  try {
    const { isEnabled: draft } = await draftMode();
    const payload = await getPayload({ config: configPromise });
    const result = await payload.findGlobal({
      draft,
      overrideAccess: draft,
      slug: "footer",
    });
    return result || null;
  } catch (error) {
    console.error("Error fetching header:", error);
    return null;
  }
});