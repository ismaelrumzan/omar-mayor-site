"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, DollarSign, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SignupModal } from "@/components/signup-modal"
import { VolunteerModal } from "@/components/volunteer-modal"

export function SupportOmar() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-green-100 py-8 lg:py-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                This campaign is about all of us.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-800 leading-relaxed">
                Omar believes Edmonton&apos;s best days are still ahead, but
                that will only happen if we change course. He&apos;s bringing
                together Edmontonians who&apos;ve had enough of the status quo
                and want real change at City Hall. Let&apos;s get to work.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden p-4">
                <Image
                  src="/images/omar-support.jpeg"
                  alt="Omar - Candidate Portrait"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 border border-gray-200 shadow-lg">
            <ChevronDown
              className="w-6 h-6 text-gray-700 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("make-difference")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </section>

      {/* Make a Difference Section */}
      <section
        id="make-difference"
        className="py-16 bg-[#4B0082] relative -mt-8"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold  mb-6">
              {"It's time to fix what's broken."}
            </h2>
            <p className="text-xl  mb-12 leading-relaxed">
              Join our movement for positive change. Every action counts, and
              together we can build the future all Edmontonians deserve
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Join the Movement */}
              <Card className="bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {"Stand With Dr. Omar"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Sign up to show your support, stay in the loop on
                    Omar&apos;s campaign, and get updates on what he&apos;s
                    doing to bring change to Edmonton.
                  </p>
                  <Button
                    className="w-full bg-primary hover:opacity-70 text-white font-semibold py-3"
                    onClick={() => setIsSignupModalOpen(true)}
                  >
                    Get Updates
                  </Button>
                </CardContent>
              </Card>

              {/* Volunteer */}
              <Card className="bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-[#4B0082] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Volunteer
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We are bringing together Edmontonians who believe the city
                    can do better. Join us to knock doors, connect with voters,
                    and help drive change.
                  </p>
                  <Button
                    className="w-full bg-[#4B0082] hover:opacity-70 text-white font-semibold py-3"
                    onClick={() => setIsVolunteerModalOpen(true)}
                  >
                    Sign Up to Help
                  </Button>
                </CardContent>
              </Card>

              {/* Donate */}
              <Card className="bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Donate
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your contribution helps us reach more voters, challenge
                    broken systems, and bring common sense back to City Hall.
                  </p>
                  <Link href="/support">
                    <Button className="w-full bg-primary hover:opacity-70 text-white font-semibold py-3">
                      Contribute Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </div>
  )
}
