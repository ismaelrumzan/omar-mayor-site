import React from "react"
import Link from "next/link"
import { PageAndNavQuery } from "@/tina/__generated__/types"
import {
  Brain,
  Building2,
  Car,
  Coins,
  Facebook,
  Heart,
  Instagram,
  Users,
  X,
} from "lucide-react"
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { tinaField } from "tinacms/dist/react"

import { buttonVariants } from "@/components/ui/button"
import { SiteCredit } from "@/components/ui/site-credit"

function objectEntriesFilter(
  obj: { [s: string]: unknown } | ArrayLike<unknown>
) {
  return Object.entries(obj)
    .filter(
      ([key, value]) =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        Object.keys(platformLinks).includes(key)
    )
    .map(([key, value]) => ({ platform: key, handle: value }))
}

type PlatformLinks = {
  [key: string]: string
}

const platformLinks = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
}

type PlatformKey = keyof typeof platformLinks

const getLink = (platform: PlatformKey): string => {
  return platformLinks[platform]
}

type SocialIconProps = {
  platform: string
  size?: number
}

function SocialIcon({ platform, size = 24 }: SocialIconProps) {
  const iconProps = {
    size: size,
    className: "text-gray-600 hover:text-gray-800 transition-colors",
  }

  switch (platform.toLowerCase()) {
    case "twitter":
      return <FaXTwitter {...iconProps} />
    case "facebook":
      return <FaFacebook {...iconProps} />
    case "instagram":
      return <FaInstagram {...iconProps} />
    default:
      return <FaFacebook {...iconProps} />
  }
}

export function Footer({ footer }: { footer: PageAndNavQuery["footer"] }) {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  const social = footer.social ? objectEntriesFilter(footer.social) : null
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2025 Omar Mohammad Campaign. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            href="https://facebook.com"
            className="text-[#4B0082] hover:text-[#4B0082]/80"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://twitter.com"
            className="text-[#4B0082] hover:text-[#4B0082]/80"
          >
            <FaXTwitter className="h-5 w-5" />
            <span className="sr-only">X (Twitter)</span>
          </Link>
          <Link
            href="https://instagram.com"
            className="text-[#4B0082] hover:text-[#4B0082]/80"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
