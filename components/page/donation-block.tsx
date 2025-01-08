import Image from "next/image"
import Link from "next/link"
import {
  PageBlocksDonationSection,
  PageBlocksWelcomeHero,
} from "@/tina/__generated__/types"
import { tinaField } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { Button } from "@/components/ui/button"

export function DonationBlock(props: PageBlocksDonationSection) {
  return (
    <>
      {props.showTopImage ? (
        <section id="vision" className="w-full relative">
          <div className="container relative">
            <Image
              src="/images/edmonton-skyline.png"
              alt="Edmonton"
              width={2400}
              height={518}
              className="mx-auto overflow-hidden object-cover"
            />
          </div>
        </section>
      ) : null}
      <section
        id="donate"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#13A14B]"
      >
        <div className="container px-4 md:px-6 text-center">
          <h2
            className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl"
            data-tina-field={tinaField(props, "title")}
          >
            {props.title}
          </h2>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-4">
            {[25, 50, 100, 250, 1000, 2500].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                className="bg-white text-[#4B0082] hover:bg-white/90"
              >
                ${amount}
              </Button>
            ))}
          </div>
          <Button
            className="mt-8 bg-[#4B0082] hover:bg-[#4B0082]/90"
            data-tina-field={tinaField(props, "donationButton")}
          >
            {props.donationButton}
          </Button>
        </div>
      </section>
    </>
  )
}
