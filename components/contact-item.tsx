import Link from "next/link"
import { HeartHandshake, Mail, Tv } from "lucide-react"

export type ContactTypes = "media" | "volunteer" | "general"

export function ContactItem({
  type,
  text,
  email,
}: {
  type: ContactTypes
  text: string
  email: string
}) {
  function ShowIcon({ icon }: { icon: ContactTypes }): JSX.Element {
    switch (icon) {
      case "media":
        return <Tv className="size-4 text-[#4B0082]" />
      case "volunteer":
        return <HeartHandshake className="size-4 text-[#4B0082]" />
      case "general":
        return <Mail className="size-4 text-[#4B0082]" />
    }
  }
  return (
    <div>
      <div className="flex gap-2 items-center">
        <ShowIcon icon={type} />
        <span>{text}</span>
      </div>
      <Link
        href={`mailto:${email}`}
        target="_blank"
        className="underline hover:no-underline text-sm"
      >
        {email}
      </Link>
    </div>
  )
}
