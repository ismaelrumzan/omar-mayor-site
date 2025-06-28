import Image from "next/image"
import { PageBlocksLetterSection } from "@/tina/__generated__/types"

import { Card } from "@/components/ui/card"

export function Letter(props: PageBlocksLetterSection) {
  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {props.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-green-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="text-lg font-medium text-purple-600 mb-6">
                Dear Fellow Edmontonians,
              </div>

              <div className="space-y-6 text-lg leading-8">
                <p>
                  My name is{" "}
                  <strong className="text-gray-900">Dr. Omar Mohammad</strong>,
                  and I am not a career politician. I am a{" "}
                  <strong className="text-purple-600">
                    Pediatric Dental Surgeon
                  </strong>
                  , a proud father of four, and someone who has called Edmonton
                  home since the day I was born at the Misericordia Hospital in
                  1978. I've grown up in this city, lived its history, and
                  shared in both its triumphs and challenges. Edmonton isn't
                  just where I live;{" "}
                  <em className="text-green-600">it's where my soul belongs</em>
                  .
                </p>

                <p>
                  I've worn many hats throughout my life: newspaper carrier,
                  mechanic, filmmaker, educator, business owner, and now a
                  specialist serving Edmonton's youngest citizens. Each of these
                  roles taught me that{" "}
                  <em className="text-green-600">
                    Edmontonians are strong, resilient, and compassionate
                  </em>
                  . This city is full of talent, heart, and ambition. That
                  spirit is what I believe in and what I want to protect.
                </p>

                <p>
                  I'm a proud Canadian of diverse heritage: Pakistani, Bengali,
                  Scottish, Irish, and French Maritimer. My wife, Nadia, a
                  Lebanese farm girl from Northern Manitoba, shares a similar
                  story. Our roots span continents, but our hearts are firmly
                  planted in Edmonton. Our family, like so many here, thrives in
                  this incredible city built on{" "}
                  <strong className="text-purple-600">
                    cultural diversity
                  </strong>{" "}
                  and <strong className="text-green-600">shared values</strong>.
                </p>

                <p>
                  For years, I've given back through my work and volunteerism.
                  I've provided free dental care on 11 international missions,
                  raised millions through charity auctions, and contributed to
                  addressing local needs here in Edmonton. These experiences,
                  both local and global, have taught me what works and what
                  doesn't. They've also shown me that Edmonton's issues, while
                  complex, are not insurmountable.
                </p>

                <p>
                  Today, I am{" "}
                  <strong className="text-purple-600">
                    selling my established dental practice
                  </strong>{" "}
                  to fully dedicate myself to running for{" "}
                  <strong className="text-gray-900">Mayor of Edmonton</strong>.
                  Why? Because I believe this city needs leadership rooted in
                  service, not politics. Leadership that listens, acts, and
                  delivers results with compassion, efficiency, and
                  accountability.
                </p>

                <div className="my-8 p-6 bg-gradient-to-r from-purple-50 to-green-50 rounded-lg border-l-4 border-purple-600">
                  <p className="text-xl font-semibold text-gray-900 mb-4">
                    Right now, Edmonton is at a crossroads.
                  </p>
                </div>

                <p>
                  Encampments under bridges, rising homelessness, and growing
                  crime are clear signs that we're not doing enough. Our
                  infrastructure is strained, our hospital wait times stretch
                  on, and our classrooms are overcrowded. Seniors are being
                  taxed out of their homes. These aren't just policy problems;
                  they are{" "}
                  <strong className="text-purple-600">human problems</strong>.
                  And they require action, not endless debate.
                </p>

                <p>
                  We are seeing the consequences of irresponsible overspending:
                  ballooning deficits, mounting debt, and unnecessary tax
                  increases. This lack of fiscal responsibility is hurting
                  families, small businesses, and our local economy. It is
                  creating barriers where there should be solutions.
                </p>

                <div className="my-8 p-6 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg border-l-4 border-green-600">
                  <p className="text-xl font-semibold text-gray-900">
                    We know better. Now is the time to do better.
                  </p>
                </div>

                <p>
                  Together, we can build a city that is{" "}
                  <strong className="text-green-600">
                    safe, thriving, and inclusive
                  </strong>{" "}
                  while staying fiscally responsible and transparent. We can
                  build a future where every neighborhood is secure, every
                  resident is supported, and every taxpayer knows their dollars
                  are being put to real use.
                </p>

                <div className="my-10">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">
                    Why I'm Running
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-green-600 rounded-full mb-6"></div>
                </div>

                <p>
                  Throughout my career, I've met thousands of families. I've
                  listened to your stories, your frustrations, and your hopes.
                  I've walked the river valley trails and clinic halls right
                  beside you. I understand what matters to Edmontonians because
                  I've lived it.
                </p>

                <p>
                  It's time for leadership that puts{" "}
                  <strong className="text-purple-600">Edmonton first</strong>.
                  Leadership grounded in common sense, focused on reducing
                  barriers, managing finances responsibly, and prioritizing the
                  needs of people.
                </p>

                <p>
                  We are the{" "}
                  <strong className="text-green-600">City of Champions</strong>.
                  Let's build a city where every person has the opportunity to
                  succeed, where no one is left behind, and where our shared
                  values drive smart, inclusive growth.
                </p>

                <div className="my-8 p-6 bg-gradient-to-r from-purple-600 to-green-600 rounded-lg text-center">
                  <p className="text-xl font-semibold text-white">
                    Together, we can champion a brighter, stronger future for
                    Edmonton.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">OM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      Sincerely,
                    </div>
                    <div className="font-bold text-gray-900 text-xl">
                      Dr. Omar Mohammad
                    </div>
                    <div className="text-purple-600 font-semibold">
                      Candidate for Mayor of Edmonton
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
