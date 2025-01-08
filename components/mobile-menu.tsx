"use client"

import { useState } from "react"
import Link from "next/link"
import { PageAndNavQuery } from "@/tina/__generated__/types"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

export function MobileMenu({
  topNav,
  generalNav,
}: {
  topNav: PageAndNavQuery["nav"]["links"]
  generalNav: PageAndNavQuery["nav"]["links"]
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
                <Link
                  href={navLink}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item?.label}
                </Link>
              )
            })}
          </>
        </div>
      )}
    </div>
  )
}
