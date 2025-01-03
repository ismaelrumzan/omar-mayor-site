import React from "react"
import Link from "next/link"
import { PageAndNavQuery } from "@/tina/__generated__/types"
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"
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
      return <TwitterIcon {...iconProps} />
    case "facebook":
      return <FacebookIcon {...iconProps} />
    case "instagram":
      return <InstagramIcon {...iconProps} />
    case "github":
      return <GithubIcon {...iconProps} />
    case "youtube":
      return <YoutubeIcon {...iconProps} />
    default:
      return <FacebookIcon {...iconProps} />
  }
}

export function Footer({ footer }: { footer: PageAndNavQuery["footer"] }) {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  const social = footer.social ? objectEntriesFilter(footer.social) : null
  let bgStyle = ""
  let textStyle = `text-primary`
  if (footer.backgroundColor) {
    bgStyle = `bg-${footer.backgroundColor}`
  }
  if (footer.backgroundColor === "primary") {
    textStyle = `text-secondary`
  }
  return (
    <footer className={bgStyle}>
      <div className="mx-auto max-w-7xl px-2 py-4 md:flex md:items-center md:justify-between lg:px-4">
        <div className="flex min-w-[215px] justify-center md:justify-start">
          <nav className={`items-center space-x-1`}>
            {social &&
              social.map((item) => {
                const platformLink = getLink(item.platform as PlatformKey)
                return (
                  <Link
                    href={`${platformLink}/${item?.handle}`}
                    key={platformLink}
                    target="_blank"
                    rel="noreferrer"
                    data-tina-field={tinaField(footer, "social")}
                  >
                    <div
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                    >
                      <SocialIcon platform={item.platform} />
                      <span className="sr-only">{item?.platform}</span>
                    </div>
                  </Link>
                )
              })}
          </nav>
        </div>
        <div className="pb-2 md:pb-0">
          <p
            className={`${textStyle} text-center text-sm leading-5 md:text-left`}
            data-tina-field={tinaField(footer, "copyright")}
          >
            &copy; {year} {footer.copyright}
          </p>
        </div>
        <SiteCredit
          text="Built by Cordoba Digital Media"
          link="https://cordobadigitalmedia.com"
          footerbg={footer.backgroundColor || "secondary"}
        />
      </div>
    </footer>
  )
}
