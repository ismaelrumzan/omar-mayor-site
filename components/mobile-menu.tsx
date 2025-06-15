"use client"

import { useState } from "react"
import Link from "next/link"
import { HeaderQuery, PageAndNavQuery } from "@/tina/__generated__/types"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

import { ContactItem, ContactTypes } from "./contact-item"

export function MobileMenu({
  topNav,
  generalNav,
  contact,
}: {
  topNav: PageAndNavQuery["nav"]["links"]
  generalNav: PageAndNavQuery["nav"]["links"]
  contact?: HeaderQuery["header"]["contactSection"]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden mt-4">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 px-2 bg-white rounded-md shadow-lg py-1">
          <>
            {topNav?.map((item) => {
              let buttonColor = "bg-[#4B0082] hover:bg-[#4B0082]/90"
              if (item?.linkStyle === "button-secondary") {
                buttonColor = "bg-[#00A86B] hover:bg-[#00A86B]/90"
              }
              let navLink = ""
              if (item?.linkedPage) {
                navLink =
                  "/" + item.linkedPage?._sys.breadcrumbs.join("/") || ""
              } else {
                navLink = item?.link as string
              }
              return (
                <Link
                  href={navLink}
                  key={item?.label}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    className={`block w-full text-left px-4 py-2 text-sm ${buttonColor} text-white font-bold mb-1`}
                  >
                    {item?.label}
                  </Button>
                </Link>
              )
            })}
            {generalNav?.map((item) => {
              let navLink = ""
              if (item?.linkedPage) {
                navLink =
                  "/" + item.linkedPage?._sys.breadcrumbs.join("/") || ""
              } else {
                navLink = item?.link as string
              }
              return (
                <Link href={navLink}>
                  <Button
                    variant="outline"
                    className="w-full block text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    {item?.label}
                  </Button>
                </Link>
              )
            })}
            {contact && contact.length > 0 && (
              <div className="mt-2">
                Contact
                <>
                  {contact.map((item) => (
                    <ContactItem
                      type={item?.type as ContactTypes}
                      text={item?.label as string}
                      email={item?.email as string}
                    />
                  ))}
                </>
              </div>
            )}
          </>
        </div>
      )}
    </div>
  )
}
