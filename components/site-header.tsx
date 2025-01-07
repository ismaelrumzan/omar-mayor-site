"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PageAndNavQuery } from "@/tina/__generated__/types"
import { Menu } from "lucide-react"
import { tinaField } from "tinacms/dist/react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "@/components/theme-toggle"

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
                let buttonColor = "bg-[#00A86B] hover:bg-[#00A86B]/90"
                if (item?.linkStyle === "button-secondary") {
                  buttonColor = "bg-[#90EE90] hover:bg-[#90EE90]/90"
                }
                return (
                  <Link
                    href={item?.link || ""}
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
            </div>
            <nav className="flex justify-end items-center py-2 grow">
              <div className="space-x-6 text-lg font-bold">
                {generalNav?.map((item) => (
                  <Link
                    key={item?.label}
                    data-tina-field={tinaField(item, "label")}
                    href={item?.link || ""}
                    className="transition-colors hover:text-foreground/80"
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <MobileMenu topNav={topNav} generalNav={generalNav} />
        </div>
      </div>
    </header>
  )
}
