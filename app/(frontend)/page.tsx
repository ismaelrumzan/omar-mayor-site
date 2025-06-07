import React from "react"
import { queryHeader } from "@/lib/queries/payload"
import { queryFooter } from "@/lib/queries/payload"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export default async function Page() {
  const headerContent = await queryHeader()
  const footerContent = await queryFooter()
  if (!headerContent || !footerContent) return null
  return (
    <>
      <SiteHeader headerContent={headerContent} />
      <div className="flex min-h-[calc(100vh-120px)] flex-col">
        <div className="grow">content area</div>
        <Footer footer={footerContent} />
      </div>
    </>
  )
}
