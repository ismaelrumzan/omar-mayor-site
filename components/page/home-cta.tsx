import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Heart, Play, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

import { VideoPlayer } from "../ui/iframe-video"

export function HomeCTA() {
  return (
    <section className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 p-2 sm:px-6 sm:y-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* YouTube Video Embed */}
        <div className="mb-4 sm:mb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl sm:rounded-3xl p-2 sm:p-6 border border-white border-opacity-20">
              <div className="text-center sm:mb-6 text-[#4b0082]">
                <h3 className="text-2xl sm:text-4xl font-bold sm:mb-2">
                  Meet Dr. Omar
                </h3>
                <p className="text-lg sm:text-xl">
                  And why you should vote for him
                </p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <VideoPlayer
                  url={`https://www.youtube.com/embed/den1DqVLoYg`}
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>

        {/* Primary Support CTA */}
        <div className="text-center mb-2 sm:mb-8">
          <div>
            <Link href="/support-omar">
              <Button
                size="lg"
                className="bg-[#4b0082] text-white py-4 text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Users className="w-6 h-6 mr-3 hidden sm:block" />
                <span>Support Omar Now</span>
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
