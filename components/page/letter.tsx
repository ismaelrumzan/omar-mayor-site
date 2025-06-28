import { useState } from "react"
import Image from "next/image"
import { PageBlocksLetterSection } from "@/tina/__generated__/types"

import { Card } from "@/components/ui/card"

import { Button } from "../ui/button"

export function Letter(props: PageBlocksLetterSection) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {props.title}
              </h2>
            </div>
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="text-lg font-medium mb-6">
                Dear Fellow Edmontonians,
              </div>

              <div className="space-y-6 text-lg leading-8">
                {/* Always visible preview */}
                <p>
                  My name is Dr. Omar Mohammad, and I am not a career
                  politician. I am a Pediatric Dental Surgeon , a proud father
                  of four, and someone who has called Edmonton home since the
                  day I was born at the Misericordia Hospital in 1978. I&apos;ve
                  grown up in this city, lived its history, and shared in both
                  its triumphs and challenges. Edmonton isn&apos;t just where I
                  live; <em>it&apos;s where my soul belongs</em>.
                </p>

                <p>
                  I&apos;ve worn many hats throughout my life: newspaper
                  carrier, mechanic, filmmaker, educator, business owner, and
                  now a specialist serving Edmonton&apos;s youngest citizens.
                  Each of these roles taught me that{" "}
                  <em>Edmontonians are strong, resilient, and compassionate</em>
                  . This city is full of talent, heart, and ambition. That
                  spirit is what I believe in and what I want to protect.
                </p>

                {/* Collapsible content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-none opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-6 text-lg leading-8">
                    <p>
                      I&apos;m a proud Canadian of diverse heritage: Pakistani,
                      Bengali, Scottish, Irish, and French Maritimer. My wife,
                      Nadia, a Lebanese farm girl from Northern Manitoba, shares
                      a similar story. Our roots span continents, but our hearts
                      are firmly planted in Edmonton. Our family, like so many
                      here, thrives in this incredible city built on cultural
                      diversity and shared values.
                    </p>

                    <p>
                      For years, I&apos;ve given back through my work and
                      volunteerism. I&apos;ve provided free dental care on 11
                      international missions, raised millions through charity
                      auctions, and contributed to addressing local needs here
                      in Edmonton. These experiences, both local and global,
                      have taught me what works and what doesn&apos;t.
                      They&apos;ve also shown me that Edmonton&apos;s issues,
                      while complex, are not insurmountable.
                    </p>

                    <p>
                      Today, I am selling my established dental practice to
                      fully dedicate myself to running for Mayor of Edmonton .
                      Why? Because I believe this city needs leadership rooted
                      in service, not politics. Leadership that listens, acts,
                      and delivers results with compassion, efficiency, and
                      accountability.
                    </p>

                    <p className="text-xl">
                      Right now, Edmonton is at a crossroads.
                    </p>

                    <p>
                      Encampments under bridges, rising homelessness, and
                      growing crime are clear signs that we&apos;re not doing
                      enough. Our infrastructure is strained, our hospital wait
                      times stretch on, and our classrooms are overcrowded.
                      Seniors are being taxed out of their homes. These
                      aren&apos;t just policy problems; they are human problems.
                      And they require action, not endless debate.
                    </p>

                    <p>
                      We are seeing the consequences of irresponsible
                      overspending: ballooning deficits, mounting debt, and
                      unnecessary tax increases. This lack of fiscal
                      responsibility is hurting families, small businesses, and
                      our local economy. It is creating barriers where there
                      should be solutions.
                    </p>

                    <p className="text-xl">
                      We know better. Now is the time to do better.
                    </p>

                    <p>
                      Together, we can build a city that is safe, thriving, and
                      inclusive while staying fiscally responsible and
                      transparent. We can build a future where every
                      neighborhood is secure, every resident is supported, and
                      every taxpayer knows their dollars are being put to real
                      use.
                    </p>

                    <p className="text-xl">Why I&apos;m Running</p>

                    <p>
                      Throughout my career, I&apos;ve met thousands of families.
                      I&apos;ve listened to your stories, your frustrations, and
                      your hopes. I&apos;ve walked the river valley trails and
                      clinic halls right beside you. I understand what matters
                      to Edmontonians because I&apos;ve lived it.
                    </p>

                    <p>
                      It&apos;s time for leadership that puts Edmonton first.
                      Leadership grounded in common sense, focused on reducing
                      barriers, managing finances responsibly, and prioritizing
                      the needs of people.
                    </p>

                    <p>
                      We are the City of Champions. Let&apos;s build a city
                      where every person has the opportunity to succeed, where
                      no one is left behind, and where our shared values drive
                      smart, inclusive growth.
                    </p>

                    <p className="text-xl font-semibold text-white">
                      Together, we can champion a brighter, stronger future for
                      Edmonton.
                    </p>
                  </div>
                </div>

                {/* Read More/Less Button */}
                <div className="text-center mt-8">
                  <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    variant="outline"
                    className="border-[#4B0082] text-[#4B0082] hover:bg-purple-50 px-8 py-3 text-lg font-semibold bg-transparent"
                  >
                    {isExpanded ? (
                      <>
                        <span>Read Less</span>
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>Read Full Letter</span>
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </>
                    )}
                  </Button>
                </div>

                {/* Signature - Always visible */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-lg">Sincerely,</div>
                      <div className="text-lg">Dr. Omar Mohammad</div>
                      <div className="text-[#4B0082] font-semibold">
                        Candidate for Mayor of Edmonton
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
