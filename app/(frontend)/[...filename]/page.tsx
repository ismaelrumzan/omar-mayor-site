import React from "react"
import type { Metadata } from "next"
import { DonationBlock } from "@/blocks/renderers/donation"

import {
  pageSlugs,
  queryDonation,
  queryFooter,
  queryHeader,
  queryPagebySlug,
} from "@/lib/queries/payload"
import { Footer } from "@/components/footer"
import { PageRenderer } from "@/components/page-renderer"
import { SiteHeader } from "@/components/site-header"

export default async function Page({
  params,
}: {
  params: Promise<{ filename: string[] }>
}) {
  const headerContent = await queryHeader()
  const footerContent = await queryFooter()
  const donationContent = await queryDonation()
  const pageContent = await queryPagebySlug(`${(await params).filename}`)
  if (!headerContent || !footerContent) return null
  return (
    <>
      <SiteHeader headerContent={headerContent} />
      <div className="flex min-h-[calc(100vh-120px)] flex-col">
        <div className="grow">
          {pageContent && <PageRenderer page={pageContent} />}
          {pageContent?.showDonation && donationContent && (
            <DonationBlock content={donationContent} />
          )}
        </div>
        <Footer footer={footerContent} />
      </div>
    </>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filename: string[] }>
}): Promise<Metadata> {
  const pageContent = await queryPagebySlug(`${(await params).filename}`)
  return {
    title: pageContent?.title,
    description: pageContent?.meta?.description,
    openGraph: {
      title: pageContent?.title || '',
    },
  }
}

export async function generateStaticParams() {
  const pageSlugsPromise = await pageSlugs();
  return pageSlugsPromise.map((item) => {
    // Skip items without a slug
    if (!item.slug) return null;

    // Return the params object with optional grade
    return {
      filename: item.slug,
    };
  });
}
