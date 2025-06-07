import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { Header, Media } from "@/payload-types"

export function SiteHeader({
  headerContent,
}: {
  headerContent: Header
}) {
  const image = headerContent.logo as Media;
  const navLinks = headerContent.navLinks as Header["navLinks"];
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#2ECC71]/20 to-[#2ECC71]/5 bg-white">
      <div className="container flex flex-col px-4">
        <div className="flex justify-between">
          <Link href="/" className="hidden md:flex items-center py-2">
            <div className="flex flex-col justify-center">
              <Image
                src={image.url as string}
                width={259}
                height={100}
                alt={image.alt as string}
              />
            </div>
          </Link>
          <Link href="/" className="flex md:hidden items-center py-2">
            <div className="flex flex-col justify-center">
              <Image
                src={image.url as string}
                width={130}
                height={50}
                alt={image.alt as string}
              />
            </div>
          </Link>
          <div className="hidden md:flex flex-col items-end space-x-4">
            <div>
              {navLinks?.filter(item => item.location === "top").map((item) => {
                let buttonColor = "bg-[#4B0082] hover:bg-[#4B0082]/90"
                if (item.style === "secondary") {
                  buttonColor = "bg-[#00A86B] hover:bg-[#00A86B]/90"
                }
                return (
                  <Link
                    href={item.url as string}
                    key={item?.label}
                  >
                    <Button
                      className={`rounded-t-none round-b-lg ${buttonColor} text-white font-bold`}
                    >
                      {item?.label}
                    </Button>
                  </Link>
                )
              })}
            </div>
            <nav className="flex justify-end items-center py-2 grow">
              <div className="space-x-6 text-lg font-bold">
                {navLinks?.filter(item => item.location === "bottom").map((item) => {
                  return (
                    <Link
                      key={item?.label}
                      href={item.url as string}
                      className="transition-colors hover:text-foreground/80"
                    >
                      {item?.label}
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  )
}
