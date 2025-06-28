import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Heart, Play, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

import { VideoPlayer } from "../ui/iframe-video"

export function HomeCTA() {
  return (
    <section className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 px-6 py-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Meet Dr. Omar
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-3xl mx-auto leading-relaxed">
            A dedicated healthcare professional committed to serving Edmonton.
            <br />
            <span className="font-semibold text-white">
              Discover why your community is choosing Dr. Omar Mohammad.
            </span>
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-6 border border-white border-opacity-20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Campaign Launch Highlights
                </h3>
                <p className="text-green-100">
                  Watch Omar&apos;s official campaign launch - a huge success!
                </p>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <VideoPlayer
                  url={`https://www.youtube.com/embed/den1DqVLoYg`}
                  autoplay
                />
              </div>
              <div className="text-center mt-4">
                <div className="inline-flex items-center text-white text-sm bg-white bg-opacity-20 rounded-full px-4 py-2">
                  <Play className="w-4 h-4 mr-2" />
                  <span>27K views • Campaign launch success</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Support CTA */}
        <div className="text-center mb-8">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl border border-white border-opacity-20">
            <div className="flex items-center justify-center mb-4">
              <Heart
                className="w-8 h-8 text-red-500 mr-3"
                fill="currentColor"
              />
              <h3 className="text-2xl font-bold text-gray-900">
                Support Dr. Omar&apos;s Vision
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Join the movement for positive change in Edmonton. Every voice
              matters.
            </p>
            <Link href="/support-omar">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
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
