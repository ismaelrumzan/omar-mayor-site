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
              let buttonColor = "bg-[#00A86B] hover:bg-[#00A86B]/90"
              if (item?.linkStyle === "button-secondary") {
                buttonColor = "bg-[#90EE90] hover:bg-[#90EE90]/90"
              }
              return (
                <Button
                  className={`block w-full text-left px-4 py-2 text-sm ${buttonColor} text-white font-bold mb-1`}
                >
                  {item?.label}
                </Button>
              )
            })}
            {generalNav?.map((item) => (
              <Link
                href={item?.link || ""}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item?.label}
              </Link>
            ))}
          </>
        </div>
      )}
    </div>
  )
}
