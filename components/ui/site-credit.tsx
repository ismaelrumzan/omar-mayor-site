import Image from "next/image"
import Link from "next/link"

interface SiteCreditProps {
  text: string
  link: string
  footerbg: string
}

export function SiteCredit({ text, link, footerbg }: SiteCreditProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`flex items-center justify-center text-xs transition-opacity hover:opacity-100`}
    >
      <span
        className={`${
          footerbg === "primary" ? `text-secondary` : `text-primary`
        }  mr-2 px-1 opacity-50 hover:underline hover:opacity-100`}
      >
        {text}
      </span>
      <Image
        className="flex items-center rounded-full bg-white p-1 hover:bg-slate-400"
        src="/lawh-icon.png"
        width={28}
        height={28}
        alt="Built by CordobaDM"
      />
    </Link>
  )
}
