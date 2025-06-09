import type { PayloadRequest, CollectionSlug } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  pages: "/",
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
  req: PayloadRequest;
  data?: {
    page?: {
      id?: number;
      slug?: string;
    };
  };
};

export const generatePreviewPath = ({ collection, slug, data }: Props) => {
  const prefix = collectionPrefixMap[collection];
  const path = `${prefix}`;

  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || "",
  });

  const url = `/next/preview?${encodedParams.toString()}`;

  return url;
};
