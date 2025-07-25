import { useState } from "react"
import { Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"


function CollapsibleItem({ title, children }: { title: string, children: React.ReactNode }) {
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
        className={`flex items-center justify-between w-full p-4 text-left transition-colors rounded-none border-t-2 border-theme-purple ${openSections["section"]
          ? "bg-theme-purple text-white"
          : "bg-white text-black hover:bg-theme-purple hover:text-white"
          }`}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* Using Plus icon for both states - rotates 135 degrees when open to look like X */}
        <div
          className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300 ${openSections["section"]
            ? "bg-primary"
            : "bg-white border-2 border-theme-purple"
            }`}
        >
          <Plus
            className={`h-5 w-5 transform transition-transform duration-300 ease-in-out ${openSections["section"] ? "rotate-45 text-theme-purple" : "text-theme-purple"
              }`}
            strokeWidth={2.5}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-8 py-10">
        {children}
      </CollapsibleContent>
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
    <main className="bg-primary container px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-150 text-center mb-12 mx-auto">
          {/* fixed React DOM attribute (class ➜ className) */}
          {/* Creating inline decorative lines around "The Platform" */}
          <div className="w-4/5 min-w-30 flex items-center justify-center mx-auto">
            <div className="flex-1 h-px bg-black"></div>
            <p className="mx-4 text-sm sm:text-lg text-theme-purple">THE PLATFORM</p>
            <div className="flex-1 h-px bg-black "></div>
          </div>
          <h1 className="mb-4 font-bold text-2xl sm:text-4xl text-theme-purple">
            Edmonton&apos;s Future First - A comprehensive plan for affordability, fiscal responsibility, and social
            progress
          </h1>
        </div>

        <div className="space-y-8">
          {/* AFFORDABILITY AND FISCAL RESPONSIBILITY Section */}
          <Card className="border-2 border-theme-purple rounded-none">
            <CardHeader className="bg-theme-purple text-white rounded-none">
              <CardTitle className="text-2xl">AFFORDABILITY AND FISCAL RESPONSIBILITY</CardTitle>
              <p className="text-purple-100">
                Edmontonians deserve a city government that spends within its means and puts people before projects.
              </p>
            </CardHeader>
            <CardContent className="p-0 space-y-0 rounded-none">
              {/* City Hall Spends...We Suffer! */}
              <CollapsibleItem title='City Hall Spends…We Suffer!'>
                <p className="font-medium text-muted-foreground">A history of fiscal mismanagement.</p>
                <p>
                  It should be simple: City Hall is supposed to spend your tax dollars wisely on services and
                  infrastructure that benefit us all. Instead, they&#39;ve put Edmontonians like you and I deeper into
                  debt by blowing hundreds of millions on failed programs and pet projects&#8212;like $80M on useless
                  electric buses, $530M on a mega rec centre in Lewis Farms and another in Coronation with a
                  velodrome, $250M on the Ice District &#39;Fan Park&#39;, and more.
                </p>
                <p>
                  By 2026, our debt will top $5 billion! Servicing this debt costs $450M a year, which is more than
                  any other annual expense except Police and ETS. To help pay for it all, they&#39;ve hiked property
                  taxes by over 23% in the last 4 years (*over 40% when considering property value increases), while
                  inflation squeezes families, homelessness doubles, and over 42,000 rely on the Food Bank.
                </p>
                <p>
                  We need to prioritize accountability, stop the bleeding, truly balance the budget, and put the
                  focus back where it belongs: the people who make this city work.
                </p>
              </CollapsibleItem>

              {/* Accountability - Salary freeze */}
              <CollapsibleItem title='Accountability - Salary freeze for politicians'>
                <p>
                  In 2025, Edmonton&#39;s mayor will be paid $223,234, and councilors will be paid $126,119, which
                  represents a $16,723, and a $10,108 raise respectively since the beginning of the term. Regular
                  Edmontonians in the meantime were hit with relentless tax hikes, the city is now staring down a
                  $3.3 billion capital funding shortfall, and our city debt will reach $5 Billion dollars next year
                  (2026).
                </p>
                <p>
                  Something here isn&#39;t adding up and it&#39;s insulting that City Hall gets raises while working
                  families are struggling to afford rent and groceries. I don&#39;t believe in raises without results.
                  That&#39;s why, as Mayor, I will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Freeze the salaries of all elected municipal officials (including the Mayor) until a) Edmonton&#39;s
                    budgets (operational AND capital) are finally balanced, b) the borrowing stops (no increase in
                    our debt), and c) property taxes are frozen.
                  </li>
                  <li>
                    If and when these 3 goals are accomplished, a NEW committee consisting of private citizens
                    across different age, ethnic, and socioeconomic backgrounds will review and recommend whether
                    salary increases are justified.
                  </li>
                </ul>
                <p>
                  City Hall needs to remember: they work for the people, not themselves. No results, no
                  raise&#8212;accountability starts at the top.
                </p>
              </CollapsibleItem>

              {/* Re-Election ineligibility */}
              <CollapsibleItem title='Accountability - Re-Election ineligibility'>
                <p>
                  In the real world, people that don&#39;t do their job, or if they perform poorly, they lose their
                  jobs. In municipal politics, somehow this isn&#39;t the case! Career politicians who have lead the way
                  to unprecedented levels of debt and taxes, and repeated deficit capital budgets are up for
                  re-election, and some are asking for a promotion (4 former or current city councillors are running
                  for Mayor)!
                </p>
                <p>
                  As Mayor, I will hold elected city officials, including myself, to account. I will advocate for a
                  change in the Local Authorities Election Act (LAEA) to stipulate that any member of a municipal
                  government (councilor or mayor) cannot be eligible for re-election if they fail to do ANY of the
                  following for more than 2 out of the 4 year term: balance the budgets (operational AND capital),
                  freeze property taxes, not increase existing city debt load.
                </p>
              </CollapsibleItem>

              {/* Freeze Property Taxes */}
              <CollapsibleItem title='Freeze Property Taxes'>
                <p>
                  City Hall has raised your property taxes by over 23% in the last 4 years alone, which is actually
                  between 40-45% when you take into consideration property assessment increases. This is making
                  affordability a real problem for working families in Edmonton.
                </p>
                <p>
                  Elected municipal officials should not treat tax payers like an ATM machine, and TRUE fiscal
                  responsibility should not require continuous property tax hikes. As mayor, I will commit to
                  freezing property taxes for at least 2 years out of the 4 year term.
                </p>
              </CollapsibleItem>

              {/* Debt Control */}
              <CollapsibleItem title='Debt Control and Balancing the Budgets (Capital AND Operational)'>
                <p>
                  Our debt in Edmonton is spiraling out of control. In 2026, it is projected to exceed $5 Billion
                  dollars. Servicing this debt costs us $450 Million dollars annually, and represents the 3rd
                  largest expense in the operational budget. This massive burden hinders our ability to pay for
                  essential services and that Edmontonians demand.
                </p>
                <p>
                  The City is using debt as a key financing tool for major capital projects to fund projects like
                  LRT expansion, mega recreation facilities, bike lanes, and a &#39;Fan Park&#39; in the Ice District. As a
                  result of irresponsible spending, Edmonton has among the highest debt per capita compared to other
                  major Canadian cities. For example, Edmonton&#39;s per capita debt is 50% higher than that of Calgary.
                </p>
                <p>
                  The Operational Budget is currently $3.75 Billion Dollars, and must be balanced by law. The
                  Capital Budget, however, is currently set at $11.73 Billion Dollars, 24% of this ($2.76 Billion
                  Dollars) will be borrowed, and add to our debt burden. To make things worse, the City has
                  identified a $1.5 Billion Dollar shortfall for the current budget cycle and an expected $1.8
                  Billion Dollar shortfall in the next cycle. This will no doubt result in an unwanted increase in
                  taxes, AND debt. This MUST STOP!
                </p>
                <p>
                  As mayor, I will put an end to increasing the debt by shelving all newly proposed major capital
                  projects, and reviewing and proposing appropriate cost reductions on existing on-going projects.
                  Balancing our budgets (Capital AND Operational), means spending what we have, and not any
                  more&#8230;because Edmontonians can&#39;t afford wasteful spending!
                </p>
              </CollapsibleItem>

              {/* Affordable Housing */}
              <CollapsibleItem title='Affordable Housing'>
                <p>
                  Housing in Edmonton is becoming increasingly out of reach for the people who keep our city
                  running. Families, seniors, students, and workers deserve dignity and stability, not just
                  survival. Affordable housing is defined as a &quot;shelter that costs less than 30% of a household&#39;s
                  gross income.&quot; For a household earning under $63,000 a year, that kind of housing is almost
                  impossible to find.
                </p>
                <p>
                  Today, the median home price in Edmonton reached a record high of $465,000 in 2025. Too many are
                  living in housing they can&#39;t afford. By 2026, nearly 60,000 households will have their core
                  housing needs unmet, meaning they will be living in a home that they cannot afford, is
                  overcrowded, in disrepair or otherwise unsafe. Meanwhile, the City has fewer than 17,000 units
                  affordable to its poorest residents. Women-led households, Indigenous and racialized communities,
                  seniors, and people living with disabilities are hit the hardest.
                </p>
                <p>
                  Families shouldn&#39;t have to choose between rent and groceries. Seniors who built our city shouldn&#39;t
                  have to fear eviction. And young people who are the future of our city shouldn&#39;t be priced out. We
                  need to take real, long-term action to address Edmonton&#39;s housing shortage. That means building
                  more affordable units, faster. It means turning empty spaces into livable homes. And it means
                  treating housing not as a commodity, but as a basic need and a human right.
                </p>
              </CollapsibleItem>

              {/* Green Lane Permits */}
              <CollapsibleItem title='Green Lane Permits'>
                <p className="font-medium italic">
                  &quot;We need to reward those building for people, not just profit.&quot;
                </p>
                <p>
                  Edmonton has already made major strides in fast-tracking affordable housing. Through the federal
                  Housing Accelerator Fund (HAF), the city secured&#8211;as of March 22, 2025&#8211;$192 million to help permit
                  over 36,000 homes by 2026, including more than 5,700 new affordable units. We&#39;ve also introduced
                  prioritized processing for non-profit housing, digital permitting systems, and even same-day
                  &quot;auto-review&quot; approvals for standardized builds.
                </p>
                <p>But, I believe we can, and MUST go further. My plan of action to go beyond includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implementing a deeper and more strategic &quot;Green Lane&quot; permitting system. Projects with higher
                    affordability will move faster through the queue. Developers who commit to deeply affordable
                    homes (especially for those below 60% of median income) will be eligible for faster permits,
                    clearer standards, and customized design pathways developed in collaboration with communities.
                  </li>
                  <li>
                    Expanding temporary tax breaks beyond non-profits. Private developers who include affordable or
                    mixed-income housing would qualify for relief if they meet strict affordability terms, ensuring
                    units stay affordable for the long haul and not just on paper.
                  </li>
                  <li>
                    Launching a public-facing dashboard that tracks permit approval timelines by project type. If
                    affordable housing is truly a priority, Edmontonians deserve to see it in action.
                  </li>
                </ul>
                <p>
                  Not every builder is out to maximize profit and many want to be a part of the solution, and if
                  you&#39;re building for the people, the City should be helping. Let&#39;s build homes and not hurdles.
                </p>
              </CollapsibleItem>

              {/* Infills */}
              <CollapsibleItem title='Infills'>
                <p className="font-medium italic">
                  &quot;We need more housing, but we also need common sense.&quot; - Omar Mohammad
                </p>
                <p>
                  Edmonton is growing. With 50 &#8211; 65 000 new residents expected each year, and Alberta leading Canada
                  in interprovincial migration, our city must evolve to meet rising housing demand. But the solution
                  isn&#39;t unchecked urban sprawl, it&#39;s smart infill in our existing neighbourhoods without damaging
                  the integrity of those neighbourhoods.
                </p>
                <p>
                  What is infill? Infill is the development of vacant or under-used land in established urban areas.
                  The City Plan sets a target for 50% of new housing to come from infill. On Tuesday, July 8, City
                  Council recently failed to pass a motion to cap mid-block infill development at 6 units, with
                  public consultation coming and final decisions expected in 2027. However, many Edmontonians feel
                  left out of the process and unheard.
                </p>
                <p>Concerns raised by the communities are:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Zero parking requirements leading to congestion</li>
                  <li>Oversized &quot;McMansions&quot; and poorly designed multiplexes</li>
                  <li>Unsafe or disruptive construction sites</li>
                  <li>Impact on property values and community cohesion</li>
                  <li>Mismatch between policy rhetoric and built reality</li>
                </ul>
                <p>
                  I will listen to the concerns of Edmontonians while balancing the need for more housing. I support
                  infill, but believe it must be done right and with communities, not against them. If we ignore
                  traffic, design, and livability, we risk losing the very character and charm that makes Edmonton&#39;s
                  neighbourhoods worth living in.
                </p>
                <p>For a balanced plan is that we must:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cap infill developments at 6 units per residential lot</li>
                  <li>Require 1 on-site parking space per unit</li>
                  <li>Have architectural controls to preserve the look and feel of neighbourhoods</li>
                  <li>
                    Work with communities and have clear consultation processes that ensure that residents have a
                    real say and feel heard
                  </li>
                </ul>
                <p>
                  My promise is that I will work with community leagues, builders, and housing advocates to ensure
                  we grow in a way that is sustainable, inclusive, and intentional. We can build a city that is more
                  affordable and more livable, without sacrificing the other.
                </p>
              </CollapsibleItem>

            </CardContent>
          </Card>

          {/* SOCIAL ISSUES Section */}
          <Card className="border-2 border-theme-purple rounded-none">
            <CardHeader className="bg-theme-purple text-white rounded-none">
              <CardTitle className="text-2xl">SOCIAL ISSUES</CardTitle>
              <p className="text-green-100">
                &quot;If someone is cold you should give them a blanket. Better yet teach them to make a blanket. But what
                we need to do in Edmonton is change the temperature so that no one needs a blanket to begin with.&quot; -
                Omar Mohammad
              </p>
            </CardHeader>
            <CardContent className="p-0 space-y-0 rounded-none">
              <p className="text-muted-foreground mx-6 my-6">
                Too often, bandaid solutions are used to temporarily fix ongoing long-term problems. Eventually, the
                long-term will always catch up with the short-term, leaving Edmontonians scrambling for the next quick
                fix. The prevalence of homelessness and substance abuse, the growing divide between the wealthy and
                the poor, and the safety and security of our people cannot be fixed by simply masking the deeper
                systemic problems with short-term solutions. We need to focus on long-term, sustainable changes that
                address the root, underlying causes and focus on offering real hope and real dignity to Edmonton.
              </p>

              {/* Dignity/Housing First Initiative */}
              <CollapsibleItem title='Dignity/Housing First Initiative'>
                <p className="font-medium italic">
                  &quot;We cannot just throw people into a warehouse, we need to treat people like people. With dignity
                  first- along with access to basic needs&#8230;. including shelter.&quot;
                </p>
                <p>
                  Nearly half of Edmonton&#39;s homeless population are chronically homeless, which means that emergency
                  shelters, though important, are only temporary fixes that don&#39;t address long-term needs like
                  housing stability, trauma, and community reintegration. Too many people experiencing homelessness
                  are caught in revolving doors, moved from encampments to emergency shelters, from hospital beds to
                  jail cells, and then back onto the streets. Not only is this cycle inhumane, it&#39;s expensive,
                  ineffective, and unsustainable.
                </p>
                <p>
                  Chronic homelessness is rising, disproportionately affecting Indigenous Edmontonians, and police,
                  paramedics, and emergency rooms are overburdened. A long-term solution is needed, this will be
                  achieved with the Dignity/Housing First Initiative. When people are housed with dignity first and
                  then supported through wraparound care, they more often stay housed, their health improves, and
                  public system costs go down.
                </p>
                <h4 className="font-semibold text-lg mt-6 mb-4">My Dignity/Housing First Plan</h4>
                <ul className="space-y-3">
                  <li>
                    <strong>Dignity First:</strong> You MUST meet them first wherever they are at. Real solutions
                    start with real connection. I will lead with compassion, not judgment.
                  </li>
                  <li>
                    <strong>Collaborative Impact:</strong> I will use the Social Impact Collaborative model to align
                    efforts across nonprofits, Indigenous leaders, government, health care, and the business
                    community. This will ensure funding is streamlined, duplication is avoided, and results are
                    measurable. We&#39;re not reinventing the wheel, we&#39;re getting it turning in the same direction.
                  </li>
                  <li>
                    <strong>Homes that heal:</strong> I will partner with community-proven agencies to develop new
                    supportive housing projects, similar to those of the successes of NiGiNan Housing Ventures.
                    These units will be safe, trauma-informed, and permanent. This is not temporary housing, or a
                    shelter, but a home in which recovery and reintegration is possible. We could permanently house
                    our fellow Edmontonians.
                  </li>
                  <li>
                    <strong>Care comes Home:</strong> Those experiencing homelessness cannot be expected to deal
                    with their addictions and mental health if, first and foremost, they are struggling to live in a
                    tent. Addiction recovery, mental health care, employment support, healing and healthcare will be
                    embedded into housing, and no one will be navigating fragmented systems just to survive.
                  </li>
                  <li>
                    <strong>Police + Outreach + Health = Results:</strong> I will expand collaborative programs
                    between Edmonton Police Service, outreach workers, and health teams, like CARE and PACT, to
                    connect people to care, not cells. This reduces strains on our police, paramedics, and the
                    courts, while saving lives.
                  </li>
                </ul>
                <p>
                  By redirecting our money to housing individuals rather than arrest, release, and displacement, we
                  will see cost reductions through fewer emergency service impacts. The goal is to break the cycle,
                  not just to manage it. Help us end chronic homelessness in Edmonton!
                </p>
              </CollapsibleItem>

              {/* Security On Public Transit */}
              <CollapsibleItem title='Security On Public Transit'>
                <p className="font-medium italic">
                  &quot;Ridership is down from where it actually should be. Not because of numbers, but because of
                  security issues&quot;
                </p>
                <p>
                  In 2024, Edmontonians took over 6.1 million transit trips, about 15% more than the year before.
                  But, despite claiming &quot;record ridership&quot;, 75% of respondents feel fear of becoming a victim of
                  violence on our city&#39;s transit system. Why? Because safety isn&#39;t just about ridership statistics,
                  it&#39;s about what people actually see. Broken windows, overflowing garbage bins, drug use and
                  disorder on platforms fuel fear, especially among women, youth, and seniors. Riders feel unsafe
                  not only due to violence, but due to visible signs of abandonment.
                </p>
                <p>My plan tackles both the perception and the reality of safety:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Implementing turnstile systems at LRT stations will ensure only fare-paying riders enter
                    platforms, reducing security breaches. These smart gates can deter fare evasion, monitor crowd
                    flow, reduce overcrowding, and improve emergency response. They&#39;re also ADA-compliant and unlock
                    automatically in emergencies.
                  </li>
                  <li>
                    Having more uniformed safety staff and outreach teams like PACT, HELP, and COTT offer visible
                    support, build trust, and connect vulnerable people to services without criminalizing poverty.
                  </li>
                  <li>
                    Creating a real-time Transit Safety Dashboard will track safety metrics such as incidents,
                    response times, and rider feedback, giving Edmontonians the power to hold the system
                    accountable. We&#39;ll explore expanding the Transit app to let riders rate their sense of safety
                    and satisfaction after every trip.
                  </li>
                  <li>
                    Having AI-assisted surveillance can help identify disturbances as they happen, directing the
                    right response team, whether that&#39;s security or crisis outreach. But technology must never come
                    at the expense of equity, and this is why we&#39;ll implement strong privacy protocols and evaluate
                    any risks of bias or discrimination.
                  </li>
                </ul>
                <p>
                  Transit should not be a refuge for crime, nor should it be a battleground between police and
                  poverty. It should be a public good and it should be safe, reliable, and welcoming. Our plan meets
                  rising ridership with rising responsibility because a city that moves together must feel safe
                  together.
                </p>
              </CollapsibleItem>

              {/* City-Run Grocery Stores */}
              <CollapsibleItem title='City-Run Grocery Stores'>
                <p className="font-medium italic">
                  &quot;People shouldn&#39;t have to choose between groceries and a bus pass.&quot;
                </p>
                <p>
                  In 2019, Edmonton&#39;s Food Bank served an average of 21,385 people per month. By 2024, that number
                  nearly doubled to over 41,607. This is just in the last five years. The cost of a healthy diet has
                  risen sharply and what once cost $10,920 annually for a family of four in 2013 now costs more than
                  $15,000. For low-income households, food takes up 41% of the monthly budget, while rent eats up
                  another 54%. This math doesn&#39;t leave much room for survival.
                </p>
                <p>
                  Too many Edmontonians, especially students, newcomers, and working-class families, are forced to
                  make impossible choices between rent, groceries, utilities, and transit. For university students,
                  food banks are being used at record levels as tuition and housing costs soar. And for newcomers,
                  food insecurity goes beyond access; it&#39;s about a lack of access to maintaining cultural identity,
                  for while many food banks offer food, it may be culturally unfamiliar.
                </p>
                <p>
                  We believe that people shouldn&#39;t just have access to food they need, but also, food they want, for
                  the inability to afford meaningful food not only takes a toll on physical health, but also
                  dignity, happiness, and self.
                </p>
                <h4 className="font-semibold text-lg mt-6 mb-4">Our City-Run Grocery Store Initiative</h4>
                <p>
                  We will pilot 1-2 city-run grocery stores in the highest need areas like McCauley and Central
                  McDougall, using city-owned or vacant municipal buildings to minimize costs. These stores will
                  sell groceries at cost or with minimal markup, with additional subsidies provided through
                  municipal support and grant funding to ensure affordability.
                </p>
                <p>
                  Each store will offer a range of culturally relevant food options, sourced through partnerships
                  with local farms, co-ops, and nonprofit suppliers. We plan to accept multiple forms of payment
                  including debit, cash, and (potentially EBT**), to ensure access is dignified, inclusive, and
                  rooted in community need.
                </p>
                <p>
                  Food is not a privilege, it&#39;s a right. Let&#39;s build a city where no one has to pick between eating
                  and existing.
                </p>
              </CollapsibleItem>

            </CardContent>
          </Card>
        </div>
      </div>
    </main>

  )


}