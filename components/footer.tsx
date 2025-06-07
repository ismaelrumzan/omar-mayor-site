import React from "react"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { buttonVariants } from "@/components/ui/button"
import { SiteCredit } from "@/components/ui/site-credit"
import { Footer as FooterType } from "@/payload-types"

const platformLinks = {
  github: "https://github.com",
  x: "https://twitter.com",
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
    case "x":
      return <FaXTwitter {...iconProps} />
    case "facebook":
      return <FaFacebook {...iconProps} />
    case "instagram":
      return <FaInstagram {...iconProps} />
    default:
      return <FaFacebook {...iconProps} />
  }
}

export function Footer({ footer }: { footer: FooterType }) {
  const year = React.useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="w-full border-t py-3">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:py-0">
        <p
          className="text-center text-sm leading-loose text-gray-500 md:text-left"
        >
          &copy; {year} {footer.copyright}
        </p>
        <div className="flex items-center space-x-4">
          {footer.sociallinks &&
            footer.sociallinks.map((item) => {
              const platformLink = getLink(item.platform as PlatformKey)
              return (
                <Link
                  className="text-[#4B0082] hover:text-[#4B0082]/80"
                  href={`${platformLink}/${item?.platform_id}`}
                  key={platformLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    <SocialIcon platform={item.platform as string} />
                    <span className="sr-only">{item?.platform_id}</span>
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
      {footer.builtby && <SiteCredit
        text="Built by Cordoba Digital Media"
        link="https://cordobadigitalmedia.com"
        showLogo={false}
        footerbg={"secondary"}
      />}
    </footer>
  )
}
