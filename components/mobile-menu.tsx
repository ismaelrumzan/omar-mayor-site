"use client"
import { useState } from "react"
import Link from "next/link"
import { Header } from "@/payload-types"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu({
  navLinks
}: {
  navLinks: Header["navLinks"]
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
            {navLinks?.filter(item => item.location === "top").map((item) => {
              let buttonColor = "bg-[#4B0082] hover:bg-[#4B0082]/90"
              if (item?.style === "secondary") {
                buttonColor = "bg-[#00A86B] hover:bg-[#00A86B]/90"
              }
              return (
                <Link
                  href={item.url as string}
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
            {navLinks?.filter(item => item.location === "bottom").map((item) => {
              return (
                <Link
                  href={item.url as string}
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
