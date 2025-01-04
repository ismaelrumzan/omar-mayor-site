import Image from "next/image"
import Link from "next/link"
import {
  Brain,
  Building2,
  Car,
  Coins,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MobileMenu } from "@/components/mobile-menu"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#4B0082]/10 to-[#00A86B]/10 bg-white">
        <div className="container flex flex-col px-4">
          <div className="flex justify-between h-24">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex flex-col justify-center">
                <span className="text-3xl md:text-4xl font-bold leading-none">
                  Omar
                </span>
                <span className="text-3xl md:text-4xl font-bold leading-none text-[#4B0082]">
                  Mohammad
                </span>
              </div>
            </Link>
            <div className="hidden md:block items-center space-x-4">
              <div>
                <Button className="rounded-t-none round-b-lg bg-[#00A86B] hover:bg-[#00A86B]/90 text-white font-bold">
                  BECOME A SUPPORTER
                </Button>
                <Button className="rounded-t-none round-b-lg bg-black hover:bg-black/90 text-white font-bold">
                  VOLUNTEER
                </Button>
                <Button className="rounded-t-none round-b-lg bg-[#90EE90] hover:bg-[#90EE90]/90 text-black font-bold">
                  DONATE
                </Button>
              </div>
              <nav className="flex justify-end py-2">
                <div className="space-x-6 text-lg font-bold">
                  <Link
                    href="#about"
                    className="transition-colors hover:text-foreground/80"
                  >
                    About Omar
                  </Link>
                  <Link
                    href="#contact"
                    className="transition-colors hover:text-foreground/80"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full bg-gradient-to-r from-[#4B0082]/10 to-[#00A86B]/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col md:pt-[20px] lg:pt-[100px] xl:pt-[150px] space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    It&apos;s Time to Shine Brighter Together
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Building a safer, stronger, and more inclusive Edmonton.
                    Let&apos;s champion a brighter future for all.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#4B0082] hover:bg-[#4B0082]/90">
                    Join the Campaign
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <Image
                src="/images/omar-hero-back.png"
                alt="Omar Muhammad"
                width={1083}
                height={2541}
                className="mx-auto overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="vision" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Vision for Edmonton
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Together, we can build a city that is safe, thriving, and
                  inclusive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Heart className="h-12 w-12 text-[#4B0082]" />
                  <h3 className="text-xl font-bold">Tackling Homelessness</h3>
                  <p className="text-gray-500">
                    Prioritizing housing, addiction services, and mental health
                    resources for our most vulnerable.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Building2 className="h-12 w-12 text-[#00A86B]" />
                  <h3 className="text-xl font-bold">Supporting Schools</h3>
                  <p className="text-gray-500">
                    Ensuring smaller class sizes and better resources for our
                    children&apos;s future.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-[#4B0082]" />
                  <h3 className="text-xl font-bold">Protecting Seniors</h3>
                  <p className="text-gray-500">
                    Making sure our seniors can stay in their homes without the
                    burden of rising taxes.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Car className="h-12 w-12 text-[#00A86B]" />
                  <h3 className="text-xl font-bold">Easing Traffic</h3>
                  <p className="text-gray-500">
                    Implementing smarter urban planning and improved traffic
                    flow systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Brain className="h-12 w-12 text-[#4B0082]" />
                  <h3 className="text-xl font-bold">Breaking Barriers</h3>
                  <p className="text-gray-500">
                    Reducing restrictions and streamlining processes for
                    business growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Coins className="h-12 w-12 text-[#00A86B]" />
                  <h3 className="text-xl font-bold">Responsible Spending</h3>
                  <p className="text-gray-500">
                    Ensuring every tax dollar is spent carefully with real
                    benefits for Edmontonians.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="donate"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#4B0082]"
        >
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Make a Difference in Edmonton&apos;s Future
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
            <Button className="mt-8 bg-[#00A86B] hover:bg-[#00A86B]/90">
              Donate Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Omar Mohammad Campaign. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
