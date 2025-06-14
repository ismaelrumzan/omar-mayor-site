"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PageAndNavQuery } from "@/tina/__generated__/types"
import { HeartHandshake, Mail, Tv } from "lucide-react"
import { tinaField } from "tinacms/dist/react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ContactItem, ContactTypes } from "./contact-item"
import { MobileMenu } from "./mobile-menu"

type ButtonVariants =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined

export function SiteHeader({
  nav,
  header,
}: {
  nav: PageAndNavQuery["nav"]
  header: PageAndNavQuery["header"]
}) {
  const topNav = nav.links?.filter((item) => item?.location === "top-bar")
  const generalNav = nav.links?.filter(
    (item) => item?.location === "general-nav"
  )
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#2ECC71]/20 to-[#2ECC71]/5 bg-white">
      <div className="container flex flex-col px-4">
        <div className="flex justify-between">
          <Link href="/" className="hidden md:flex items-center py-2">
            <div className="flex flex-col justify-center">
              <Image
                src={"/images/logo-omar-shine.png"}
                width={259}
                height={100}
                alt="Omar Muhammad"
              />
            </div>
          </Link>
          <Link href="/" className="flex md:hidden items-center py-2">
            <div className="flex flex-col justify-center">
              <Image
                src={"/images/logo-omar-shine.png"}
                width={130}
                height={50}
                alt="Omar Muhammad"
              />
            </div>
          </Link>
          <div className="hidden md:flex flex-col items-end space-x-4">
            <div>
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
                    data-tina-field={tinaField(item, "label")}
                  >
                    <Button
                      className={`rounded-t-none round-b-lg ${buttonColor} text-white font-bold`}
                    >
                      {item?.label}
                    </Button>
                  </Link>
                )
              })}
              {header.contactSection && header.contactSection.length > 0 && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`rounded-t-none round-b-lg bg-[#00A86B] hover:bg-[#00A86B]/90" text-white font-bold`}
                    >
                      Contact
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="mr-4">
                    <div className="grid gap-4">
                      {header.contactSection.map((item) => (
                        <ContactItem
                          type={item?.type as ContactTypes}
                          text={item?.label as string}
                          email={item?.email as string}
                        />
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            <nav className="flex justify-end items-center py-2 grow">
              <div className="space-x-6 text-lg font-bold">
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
                      key={item?.label}
                      data-tina-field={tinaField(item, "label")}
                      href={navLink}
                      className="transition-colors hover:text-foreground/80"
                    >
                      {item?.label}
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>
          <MobileMenu
            topNav={topNav}
            generalNav={generalNav}
            contact={header.contactSection}
          />
        </div>
      </div>
    </header>
  )
}
