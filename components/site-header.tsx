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
  const headerHeight = header.headerHeight ? header.headerHeight : "64px"
  const logoHeight = header.logoHeight ? header.logoHeight : "50px"
  const logoWidth = header.logoWidth ? header.logoWidth : "50px"
  const backgroundCol = header.backgroundColor
    ? `bg-${header.backgroundColor}`
    : `bg-primary`
  return (
    <header className={`${backgroundCol} sticky top-0 z-40 w-full border-b`}>
      <div className={`container flex ${headerHeight} items-center`}>
        <Link href="/" className="flex items-center gap-1">
          <div
            style={{
              position: "relative",
              width: logoWidth,
              height: logoHeight,
            }}
            data-tina-field={header.logo && tinaField(header, "logo")}
          >
            <Image
              src={header.logo || ""}
              alt={header.siteTitle || ""}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          {header.logoTitle && (
            <div
              className="font-crimson"
              data-tina-field={header.logo && tinaField(header, "logoTitle")}
            >
              {header.logoTitle}
            </div>
          )}
        </Link>
        {header.ctaButton && (
          <div
            data-tina-field={
              header.ctaButton && tinaField(header.ctaButton, "title")
            }
            key={header.ctaButton.link}
            className="flex grow justify-end"
          >
            <Link
              href={header.ctaButton.link as string}
              target={header.ctaButton.type === "relative" ? "_self" : "_blank"}
            >
              <Button variant="default">{header.ctaButton.title}</Button>
            </Link>
          </div>
        )}
        {Array.isArray(nav.links) && nav.links?.length > 0 && (
          <div
            className={`hidden grow ${
              Boolean(header.navAlignment) && `justify-end`
            } md:flex`}
          >
            <ul className="flex items-center gap-3 p-6">
              {nav.links?.map((link) => {
                let navLink = ""
                let isExternal = false
                if (link?.linkType === "page") {
                  navLink =
                    `/${link.linkedPage?._sys.breadcrumbs.join("/")}` || ""
                }
                if (link?.linkType === "relative") {
                  navLink = link.link || ""
                }
                if (link?.linkType === "external") {
                  navLink = link.link || ""
                  isExternal = true
                }
                const buttonStyle = link?.buttonStyle
                  ? (link?.buttonStyle as ButtonVariants)
                  : ("default" as ButtonVariants)
                return (
                  <li
                    data-tina-field={link && tinaField(link, "label")}
                    key={link?.link}
                    className="row-span-3"
                  >
                    <Link
                      href={navLink}
                      target={isExternal ? "_blank" : "_self"}
                    >
                      <Button variant={buttonStyle}>{link?.label}</Button>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {Array.isArray(nav.links) && nav.links?.length > 0 && (
          <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
            <Dialog>
              <DialogTrigger asChild className="block md:hidden">
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="size-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col justify-center py-12 sm:max-w-[425px]">
                {nav.links?.map((link) => {
                  let navLink = ""
                  let isExternal = false
                  if (link?.linkType === "page") {
                    navLink =
                      `/${link.linkedPage?._sys.breadcrumbs.join("/")}` || ""
                  }
                  if (link?.linkType === "relative") {
                    navLink = link.link || ""
                  }
                  if (link?.linkType === "external") {
                    navLink = link.link || ""
                    isExternal = true
                  }
                  const buttonStyle = link?.buttonStyle
                    ? (link?.buttonStyle as ButtonVariants)
                    : ("default" as ButtonVariants)
                  return (
                    <Link
                      key={link?.link}
                      href={navLink}
                      target={isExternal ? "_blank" : "_self"}
                      data-tina-field={link && tinaField(link, "label")}
                    >
                      <Button variant={buttonStyle} className="w-full text-lg">
                        {link?.label}
                      </Button>
                    </Link>
                  )
                })}
                {header.darkmode && (
                  <DialogFooter>
                    <div className="flex w-full justify-center md:hidden">
                      <ThemeToggle />
                    </div>
                  </DialogFooter>
                )}
              </DialogContent>
            </Dialog>
            {header.darkmode && (
              <div className="hidden md:flex">
                <ThemeToggle />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
