import { useState } from "react"
import { Plus } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { VideoPlayer } from "../ui/iframe-video"

function CollapsibleItem({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <Collapsible
      open={openSections["section"]}
      onOpenChange={() => toggleSection("section")}
    >
      <CollapsibleTrigger
        className={`flex items-center justify-between w-full p-4 text-left transition-colors rounded-none border-t-2 border-theme-purple ${
          openSections["section"]
            ? "bg-theme-purple text-white"
            : "bg-white text-black hover:bg-theme-purple hover:text-white"
        }`}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* Using Plus icon for both states - rotates 135 degrees when open to look like X */}
        <div
          className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300 ${
            openSections["section"]
              ? "bg-primary"
              : "bg-white border-2 border-theme-purple"
          }`}
        >
          <Plus
            className={`h-5 w-5 transform transition-transform duration-300 ease-in-out ${
              openSections["section"]
                ? "rotate-45 text-theme-purple"
                : "text-theme-purple"
            }`}
            strokeWidth={2.5}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-8 py-10">{children}</CollapsibleContent>
    </Collapsible>
  )
}

export function PlatformContent() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <main className="bg-primary px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-150 text-center mb-12 mx-auto">
          {/* fixed React DOM attribute (class ➜ className) */}
          {/* Creating inline decorative lines around "The Platform" */}
          <div className="w-4/5 min-w-30 flex items-center justify-center mx-auto">
            <div className="flex-1 h-px bg-black"></div>
            <p className="mx-4 text-sm sm:text-lg text-theme-purple">
              THE PLATFORM
            </p>
            <div className="flex-1 h-px bg-black "></div>
          </div>
          <h1 className="mb-4 font-bold text-2xl sm:text-4xl text-theme-purple">
            Edmonton&apos;s Future First – A Comprehensive plan for
            affordability, fiscal responsibility, and social programs
          </h1>
        </div>

        <div className="space-y-8">
          <Card className="border-2 border-theme-purple rounded-none">
            <CardHeader className="bg-theme-purple text-white rounded-none">
              <CardTitle className="text-2xl">
                AFFORDABILITY AND FISCAL RESPONSIBILITY
              </CardTitle>
              <p className="text-purple-100">
                It’s about respecting tax dollars, and spending what we have. No
                more than that.
              </p>
            </CardHeader>
            <CardContent className="p-0 space-y-0 rounded-none [&_p]:pb-2">
              <CollapsibleItem title="Freezing Property Taxes, Balance the Budgets, and Stop Borrowing">
                <p className="font-medium text-lg text-muted-foreground">
                  Edmontonians aren’t the City’s ATM
                </p>
                <p>
                  Edmontonians have suffered over 20 consecutive annual tax
                  increases (with exception of Covid) to pay for our career
                  politicians’ lack of fiscal responsibility. Edmonton’s
                  operating budget was $3.48 billion in 2024, with a $10.8
                  billion capital budget approved for 2023-2026. To cover these
                  costs, property taxes have risen by a total of 22% in the last
                  4 years alone, which becomes 40% when property assessment
                  increases are taken into account. These hikes are outpacing
                  wages, inflation, and the lived reality of most Edmontonians.
                  Meanwhile, concerns are mounting as an overwhelming 74% of
                  local businesses surveyed by the Edmonton Chamber of Commerce
                  said that they are concerned about the city’s financial
                  stability. Edmontonians feel the weight of financial burden
                  and the City treats them like ATMs.
                </p>
                <p>
                  As Mayor, I will commit to achieving the following goals at
                  least 2 out of the 4 year term:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <p>
                      Freeze property taxes. Edmontonians need relief from
                      consecutive property tax increases and shrinking family
                      budgets.
                    </p>
                  </li>
                  <li>
                    <p>
                      Balancing both the Operational AND Capital Budgets. The
                      Operational Budget must be balanced by law, but there's a
                      massive Capital Budget shortfall of $1.5 billion in this
                      cycle, and $1.8 billion in the next cycle. This isn't
                      acceptable, nor is it sustainable.
                    </p>
                  </li>
                  <li>
                    <p>
                      Stop Borrowing. Edmonton is one of the most in debt cities
                      in the country. Next year, we will owe over $5 billion,
                      and it will cost about $430 million to just service this
                      massive debt, which is the 3rd largest annual expense
                      (behind only the cost of ETS and EPS).
                    </p>
                  </li>
                </ul>
                <p>
                  Edmonton families live within their means – it’s time for our
                  politicians to do the same!
                </p>
                <VideoPlayer
                  url={`https://www.youtube.com/embed/65LHrELbt2Q`}
                />
              </CollapsibleItem>

              <CollapsibleItem title="My Fiscal Responsibility Plan">
                <p className="font-medium text-lg text-muted-foreground">
                  Edmonton: Let&apos;s get out of the hole! This is how we will
                  do it
                </p>
                <p>
                  Edmonton’s debt is spiraling out of control. By 2026, we’re
                  projected to owe over $5 Billion, with $430 Million a year
                  just to service that debt. This means that servicing the debt
                  is one of the largest expenses in the city’s operating budget,
                  just behind Edmonton’s Police and Transit Services. Meanwhile,
                  our capital budget has shot up to $11.7 billion ($2.8 Billion
                  is borrowed). To make things worse, there is a total $3.3
                  Billion shortfall between this capital budget cycle and the
                  next one. Where will we find this money? I’ll tell you: More
                  debt and more taxes. This isn’t just unsustainable spending,
                  it’s irresponsible. Edmonton ranks third-highest in
                  debt-per-capita among Canadian cities and is 50% higher than
                  that of Calgary’s.
                </p>
                <p>
                  As Mayor, I will take action to restore responsibility in our
                  finances by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <p>
                      Undergo a zero-based budget review for both the
                      Operational AND Capital budgets to eliminate waste and/or
                      redundancies, prioritize essential services, and existing
                      infrastructure maintenance instead of shiny new projects
                      we don’t need, nor can we afford. <em>Every</em> dollar
                      must be justified.
                    </p>
                  </li>
                  <li>
                    <p>
                      Pausing all newly proposed non-essential major capital
                      projects.
                    </p>
                  </li>
                  <li>
                    <p>
                      Reviewing and proposing appropriate cost reductions on
                      existing on-going capital projects.
                    </p>
                  </li>
                  <li>
                    <p>
                      Increase the city revenue by accelerating home building,
                      which increases the tax base.
                    </p>
                  </li>
                </ul>
                <p>
                  Let’s stop wasteful spending and needless borrowing from the
                  future to cover for poor decisions today.
                </p>
              </CollapsibleItem>
            </CardContent>
          </Card>

          <Card className="border-2 border-theme-purple rounded-none">
            <CardHeader className="bg-theme-purple text-white rounded-none">
              <CardTitle className="text-2xl">ACCOUNTABILITY</CardTitle>
              <p className="text-purple-100">
                Edmontonians work hard for their money. Politicians should as
                well.
              </p>
            </CardHeader>
            <CardContent className="p-0 space-y-0 rounded-none [&_p]:pb-2">
              <CollapsibleItem title="Salary Freeze For Politicians">
                <p className="font-medium text-lg text-muted-foreground">
                  You don’t get rewarded for failure in the real world, so why
                  do our officials?
                </p>
                <p>
                  In 2025, Edmonton’s mayor earns $223,234 and councilors make
                  $126,119 annually, plus car allowances and other perks. While
                  City Hall gave themselves raises ($17,000 for the mayor and
                  over $10,000 for councilors), Edmontonians were hit with tax
                  hikes, and the city is now staring down a $3.3 billion capital
                  funding shortfall. Something here isn’t adding up and it’s
                  insulting that City Hall gives themselves raises, for their
                  poor performance. I don’t believe in raises <em>without</em>{" "}
                  results.
                </p>
                <p>Which is why I plan to:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Freeze salaries for all elected municipal officials until 3
                    goals are accomplished 1) Edmonton’s operational and capital
                    budgets are finally balanced 2) Borrowing stops 3) Property
                    taxes are frozen.
                  </li>
                  <li>
                    If and when these 3 goals are accomplished, I will expand
                    the independent committee overlooking politicians’ wages to
                    help determine whether or not salary increases are
                    justified.
                  </li>
                </ol>
                <p>
                  City Hall needs to remember that they work for Edmontonians
                  and not themselves. If they can’t deliver on commitments that
                  benefit our city, then there will be no raises.
                </p>
              </CollapsibleItem>

              <CollapsibleItem title="Re-Election Ineligibility">
                <p className="font-medium text-lg text-muted-foreground">
                  If you’re not doing your job, you don’t get to keep it.
                </p>
                <p>
                  In any other job, failure to meet expectations means you don’t
                  get to keep the position, so why is Edmonton politics
                  different? Our municipal officials can raise taxes, rack up
                  record debt, and blow through budgets without any
                  consequences. In fact, four existing and previous councilors
                  responsible for Edmonton’s financial mess are now running for
                  Mayor.
                </p>
                <p>
                  As Mayor, I will hold elected city officials, including
                  myself, to account by advocating for a change in the
                  province’s Local Authorities Election Act (LAEA) that will
                  make any councilor or mayor ineligible for re-election if they
                  fail to meet three basic benchmarks for at least 2 out of 4
                  years:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <p>Balance both operating and capital budgets</p>
                  </li>
                  <li>
                    <p>Freeze property taxes</p>
                  </li>
                  <li>
                    <p>Stop adding to the city’s debt</p>
                  </li>
                </ol>
                <p className="pt-2">
                  Public office needs public trust. You shouldn&apos;t be
                  rewarded with another term if you fail to deliver. However,
                  you should make room for someone who will.
                </p>
              </CollapsibleItem>
            </CardContent>
          </Card>

          <Card className="border-2 border-theme-purple rounded-none">
            <CardHeader className="bg-theme-purple text-white rounded-none">
              <CardTitle className="text-2xl">
                AFFORDABLE HOUSING CRISIS
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-0 rounded-none [&_p]:pb-2">
              <CollapsibleItem title="Fast Track Permits">
                <p className="font-medium text-lg text-muted-foreground">
                  Reward those building for people, not just for profit.
                </p>
                <p>
                  Edmonton has already made major strides in fast-tracking
                  affordable housing. Through the federal Housing Accelerator
                  Fund (HAF), the city secured–as of March 22, 2025–$192 million
                  to help permit over 36,000 homes by 2026. They’ve also
                  prioritized processing for non-profit housing, created digital
                  permitting systems, and even same-day “auto-review” approvals
                  for standardized builds. BUT, it’s not enough. Up to 65,000
                  people are moving to Edmonton every year, and we need to build
                  more homes safely and efficiently.
                </p>
                <p>My plan will include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implementing a more strategic “Fast Track” permitting
                    system. Projects with an affordable housing component will
                    be expedited.
                  </li>
                  <li>
                    Expand the auto-review approvals to expedite permitting for
                    homes that have identical, mechanical, structural, and space
                    designs to ones that have successfully been approved within
                    the last 24 months.
                  </li>
                  <li>
                    Hire more inspectors, and work with more qualified
                    third-party inspectors to provide on-site inspections within
                    2-3 working days (not 2-3 weeks).
                  </li>
                  <li>
                    Expanding temporary tax incentives to those that show a true
                    commitment to building affordable housing.
                  </li>
                  <li>
                    Launching a public-facing dashboard that tracks permit
                    approval timelines by project type.
                  </li>
                </ul>
              </CollapsibleItem>

              <CollapsibleItem title="Infills">
                <p className="font-medium text-lg text-muted-foreground">
                  We need more housing, but we also need common sense.
                </p>
                <p>
                  Edmonton is experiencing unprecedented growth - 65,000 new
                  residents expected each year. Alberta leads Canada in
                  interprovincial migration. It’s clear that our city must
                  evolve to solve our housing crisis. But the solution isn’t
                  unchecked urban sprawl. It’s smart infill in our existing
                  neighbourhoods without damaging the integrity of those
                  neighbourhoods. On Tuesday, July 8, City Council recently
                  failed to pass a motion to cap mid-block infill development at
                  8 units, with public consultation coming and final decisions
                  expected in 2027. However, many Edmontonians feel left out of
                  the process and unheard. Community concerns include congestion
                  from zero parking requirements, oversized and poorly designed
                  builds, unsafe construction, declining property values, and a
                  disconnect between policy promises and reality.
                </p>
                <p>My balanced plan that supports infill will include:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Capping infill developments at 6 units per mid-block
                    residential lot and require 1 on-site parking space per
                    unit.
                  </li>
                  <li>
                    Have some basic architectural controls to preserve the look
                    and feel of neighbourhoods.
                  </li>
                  <li>
                    Allow all medium-scale residential (RM) zones to have
                    maximum heights of 6 to 8 stories (instead of 4 - 8
                    stories), however re-instate parking requirements of at
                    least 0.33 parking stalls per housing unit.
                  </li>
                </ol>
                <VideoPlayer
                  url={`https://www.youtube.com/embed/sHVS_5kvWkE`}
                />
              </CollapsibleItem>
            </CardContent>
          </Card>

          <Card className="border-2 border-theme-purple rounded-none">
            <CardHeader className="bg-theme-purple text-white rounded-none">
              <CardTitle className="text-2xl">
                HOMELESSNESS AND FOOD INSECURITY
              </CardTitle>
              <p className="text-purple-100 italic">
                If someone is cold, give them a blanket. But the goal is to
                change the temperature so that no one needs a blanket to begin
                with. – Omar Mohammad
              </p>
            </CardHeader>
            <CardContent className="p-0 space-y-0 rounded-none [&_p]:pb-2">
              <CollapsibleItem title="Housing First Initiative">
                <p className="font-medium text-lg text-muted-foreground">
                  We need to treat people with dignity along with access to
                  basic needs…including shelter.
                </p>
                <p>
                  Over 5000 people are homeless in Edmonton. Many of them are
                  caught in revolving doors, moved from encampments to emergency
                  shelters, from hospital beds to jail cells, and then back onto
                  the streets. Not only is this cycle inhumane, it’s expensive,
                  unsustainable, and it doesn’t work. Homelessness has more than
                  doubled in less than 2 years, while the police, paramedics,
                  and emergency rooms are overburdened. Housing First is a
                  concept that provides permanent housing and supportive
                  services to anyone who is homeless, regardless of their
                  history or background. It has already been proven successful
                  in several cities around the world, including in Medicine Hat,
                  Alberta, which eliminated homelessness in 2021.
                </p>
                <p>My Housing First Plan:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Expanding our existing network of shelters and social
                    housing, and then creating more to serve the existing need.
                  </li>
                  <li>
                    I will work with the Social Impact Collaborative model to
                    bring nonprofits, Indigenous leaders, and public services to
                    the same table so we stop duplicating efforts and start
                    multiplying impact.
                  </li>
                  <li>
                    I will partner with community-proven agencies–similar to the
                    successes of NiGiNan Housing Ventures– to create supportive
                    housing that offer safety and real paths to recovery.
                  </li>
                  <li>
                    I’ll embed mental health, addiction care, and vocational
                    support services directly into social housing because no one
                    can heal and break poverty thresholds while sleeping on the
                    street.
                  </li>
                  <li>
                    Police + Outreach + Health = Results. I’ll expand response
                    teams like CARE and PACT to connect people to care not to
                    jail.
                  </li>
                </ul>
              </CollapsibleItem>
              <CollapsibleItem title="City-Supported Grocery Stores">
                <p className="font-medium text-lg text-muted-foreground">
                  People shouldn’t have to choose between groceries and rent.
                </p>
                <p>
                  In 2019, Edmonton’s Food Bank served an average of 21,385
                  people per month. By 2024, that number nearly doubled to over
                  41,607. The cost of food has risen sharply, and what once cost
                  $10,000 annually for a family of four in 2013 now costs more
                  than $15,000. For low-income households, food takes up 41% of
                  the monthly budget, while rent uses another 54%. Edmontonians
                  are forced to make impossible choices between basic needs
                  like: rent, groceries, utilities, clothes, and transit.
                </p>
                <p>
                  A medium sized grocery store would have an annual cost of food
                  inventory of $9M, and an operational budget of $2M. These
                  numbers essentially represent a rounding error in the City of
                  Edmonton’s current $10.8 Billion dollar capital budget, and
                  annual operational budget of $3.48 Billion dollars. However,
                  my proposed subsidized non-profit grocery store will help feed
                  up to 10,000 people for an entire year.
                </p>
                <p>My City-Supported Grocery Store Initiative:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    I will pilot a city subsidized, non-profit grocery store
                    which will sell groceries at a deep discount to those
                    families and individuals who need it the most.
                  </li>
                  <li>
                    Low income households that fall below a minimum threshold,
                    and individuals referred by established non-profit groups
                    (like Food Bank, Mustard Seed, etc…) will all have access to
                    the grocery store.
                  </li>
                  <li>
                    Donations, grants, discounts and volunteers will help keep
                    the total cost much lower than $11M.
                  </li>
                  <li>
                    Partner with local farms, co-ops, private grocery stores,
                    and wholesalers to source food.
                  </li>
                  <li>
                    Donate unsold and past-prime foods to the Food Bank to
                    eliminate food waste.
                  </li>
                </ul>
                <VideoPlayer
                  url={`https://www.youtube.com/embed/0DwpE3I4soM`}
                />
              </CollapsibleItem>
            </CardContent>
          </Card>

          <Card className="border-2 border-theme-purple rounded-none">
            <CardHeader className="bg-theme-purple text-white rounded-none">
              <CardTitle className="text-2xl">SAFETY AND SECURITY</CardTitle>
              <p className="text-purple-100">
                Security isn’t just a statistic. It’s a perception that
                significantly impacts behavior and quality of life.
              </p>
            </CardHeader>
            <CardContent className="p-0 space-y-0 rounded-none [&_p]:pb-2">
              <CollapsibleItem title="Security on Public Transit">
                <p className="font-medium text-lg text-muted-foreground">
                  Ridership on ETS is down from where it should be because
                  people feel unsafe.
                </p>
                <p>
                  75% of Edmontonians are afraid of becoming a victim of
                  violence on ETS buses and the LRT.
                </p>
                <p>
                  My plan tackles both the perception and the reality of safety:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implement turnstile systems at LRT stations which will
                    ensure only fare-playing riders enter platforms. This
                    reduces security breaches and allows for crowd flow
                    monitoring.
                  </li>
                  <li>
                    Having more uniformed peace officers, security staff and
                    outreach teams trained in both enforcement and
                    de-escalation, patrolling ETS stations as well as
                    circulating on actual LRTs and buses, which offers visible
                    support and connects vulnerable people to services without
                    criminalizing poverty.
                  </li>
                  <li>
                    Zero-tolerance for chronic fare evaders and violent
                    passengers, with authority to issue transit bans.
                  </li>
                  <li>
                    Improve visibility with better lighting, eliminate hidden
                    corners
                  </li>
                  <li>
                    CCTV in all vehicles and stations, and ensure footage is
                    monitored by AI-assisted surveillance technology to help
                    identify disturbances as they happen which will reduce
                    security response times.
                  </li>
                </ul>
                <p>
                  We are investing Billions of dollars on our public transit
                  system. It should be designed to move people safely and
                  efficiently in an environmentally conscious way. It should not
                  be a refuge for crime, nor should it be a battleground between
                  police and poverty.
                </p>
                <p>
                  Problems: Assaults, intimidation, open drug use, vandalism,
                  fare evasion, unsafe stations.
                </p>
              </CollapsibleItem>
              <CollapsibleItem title="Theft & Vandalism to Small Businesses">
                <p className="font-medium text-lg text-muted-foreground">
                  Small businesses are the backbone of Edmonton&apos;s economy.
                  They must be protected.
                </p>
                <p>
                  Problems: Smash-and-grab thefts, shoplifting, graffiti,
                  property damage, repeat offenders cycling through the system.
                </p>
                <p>
                  As Mayor, I will commit to improving security for small
                  businesses by doing the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Downtown & Business District Patrol Grants: Increased peace
                    officer and police presence in core retail areas, with
                    business association input on patrol priorities.
                  </li>
                  <li>
                    Rapid Graffiti Removal Program: City contractors remove
                    graffiti within 24–48 hours.
                  </li>
                  <li>
                    Targeted Repeat Offender Unit: Partner with EPS to
                    prioritize arrest and prosecution of high-volume shoplifters
                    and vandals who hit small businesses repeatedly.
                  </li>
                  <li>
                    Security Upgrade Incentives: Provide small matching grants
                    or property tax credits for storefronts adding
                    shatter-resistant glass, high-definition cameras, or alarm
                    systems.
                  </li>
                </ul>
              </CollapsibleItem>

              <CollapsibleItem title="Community Crime & Safety Measures">
                <p className="font-medium text-lg text-muted-foreground">
                  Edmontonians deserve to feel and actually BE safe in their own
                  neighbourhoods. We can make this happen.
                </p>
                <p>
                  Edmonton has a serious problem with: repeat violent offenders,
                  gang activity, weapons offenses, and slow response times. As
                  Mayor, I will implement and advocate for the following
                  solutions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Prolific Offender Task Force: Multi-agency unit (EPS, Crown,
                    probation) to monitor and swiftly act on breaches by known
                    high-risk offenders.
                  </li>
                  <li>
                    Court Liaison Program: City-funded liaison to ensure
                    evidence and victim impact statements are ready so charges
                    aren’t dropped for procedural reasons.
                  </li>
                  <li>
                    Neighbourhood Watch 2.0: City-supported community safety
                    networks with a modern mobile app for reporting suspicious
                    activity, integrated directly with EPS non-emergency
                    dispatch.
                  </li>
                  <li>
                    School Resource & Prevention Officers: Bring back targeted
                    school policing in partnership with educators, focusing on
                    gang prevention, bullying intervention, and early diversion
                    programs.
                  </li>
                </ul>
              </CollapsibleItem>

              <CollapsibleItem title="Public Disorder & Street Safety">
                <p className="font-medium text-lg text-muted-foreground">
                  The perception of public safety is undermined by loitering,
                  aggressive panhandling, open drug use, and intimidation of
                  passersby. Let&apos;s do better.
                </p>
                <p>As Mayor, I will implement the following initiatives:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Community Safety Teams: Deploy high-visibility, unarmed
                    municipal peace officers, paired with social outreach
                    workers, to patrol high-traffic pedestrian areas and respond
                    quickly to low-level disturbances.
                  </li>
                  <li>
                    Bylaw & Court Enforcement Blitz: Consistently enforce public
                    nuisance, obstruction, and open-air drug use bylaws —
                    coupled with streamlined court processing for repeat
                    offenders.
                  </li>
                  <li>
                    Lighting & CPTED (Crime Prevention Through Environmental
                    Design): Accelerate retrofits for brighter street lighting,
                    remove visual obstructions, and redesign “problem corners”
                    where disorder concentrates.
                  </li>
                </ul>
              </CollapsibleItem>

              <CollapsibleItem title="Accountability & Transparency ">
                <p className="font-medium text-lg text-muted-foreground">
                  Let&apos;s continue to invest in what&apos;s working, and
                  improve, modify, or cancel what&apos;s not.
                </p>
                <p>
                  As Mayor, I will keep our new initiatives accountable and
                  transparent by doing the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Publish data on crime trends, response times, clearance
                    rates, and enforcement actions — making it clear where
                    strategies are working or need adjustment.
                  </li>
                  <li>
                    Performance-Linked Funding: Tie municipal safety program
                    budgets to measurable results (crime reduction, perception
                    of safety improvements).
                  </li>
                </ul>
              </CollapsibleItem>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
