import React from "react"
import { DonationBlock } from "@/blocks/renderers/donation"

import {
  queryDonation,
  queryFooter,
  queryHeader,
  queryHomePage,
} from "@/lib/queries/payload"
import { Footer } from "@/components/footer"
import { PageRenderer } from "@/components/page-renderer"
import { SiteHeader } from "@/components/site-header"

export default async function Page() {
  const headerContent = await queryHeader()
  const footerContent = await queryFooter()
  const donationContent = await queryDonation()
  const pageContent = await queryHomePage()
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
