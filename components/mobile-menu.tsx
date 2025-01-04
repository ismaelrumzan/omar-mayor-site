"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden mt-4">
      <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          <Button className="block w-full text-left px-4 py-2 text-sm bg-[#00A86B] hover:bg-[#00A86B]/90 text-white font-bold">
            BECOME A SUPPORTER
          </Button>
          <Button className="block w-full text-left px-4 py-2 text-sm bg-black hover:bg-black/90 text-white font-bold">
            VOLUNTEER
          </Button>
          <Button className="block w-full text-left px-4 py-2 text-sm bg-[#90EE90] hover:bg-[#90EE90]/90 text-black font-bold">
            DONATE
          </Button>
          <Link
            href="#about"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About Omar
          </Link>
          <Link
            href="#contact"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  )
}
