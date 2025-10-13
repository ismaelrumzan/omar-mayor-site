import { Download, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Donor data from CSV
const donorData = [
  { name: "Matthew Arun", amount: 25 },
  { name: "Gill Raj", amount: 25 },
  { name: "Beg Aliya", amount: 25 },
  { name: "Abas Nadia", amount: 25 },
  { name: "Grewal Harvir", amount: 50 },
  { name: "FugerJason", amount: 500 },
  { name: "James Green", amount: 500 },
  { name: "hamza mitha", amount: 1000 },
  { name: "Riad Assaf", amount: 2500 },
  { name: "Ayesha Jaffer", amount: 2500 },
  { name: "Aiman Zeineddine", amount: 500 },
  { name: "Vivian Le", amount: 500 },
  { name: "Douglas Snider", amount: 500 },
  { name: "Prestige performance", amount: 1000 },
  { name: "Nur Koyuncu", amount: 100 },
  { name: "Richard Graham", amount: 1000 },
  { name: "Saleh Aldaghreer", amount: 2500 },
  { name: "Peter Shipka", amount: 100 },
  { name: "Janmohamed Jaffer", amount: 2500 },
  { name: "Saudin Kasmo", amount: 1000 },
  { name: "Nabeil Moussa", amount: 1000 },
  { name: "Ray Hajar", amount: 500 },
  { name: "Fardad Vaziri", amount: 1000 },
  { name: "Yaasin Abdulrehman", amount: 1000 },
  { name: "Greg Zawaski", amount: 20 },
  { name: "Hani elzein", amount: 2500 },
  { name: "Abdul Farhat", amount: 250 },
  { name: "Marisa Haraphongse", amount: 150 },
  { name: "Clayton Davis", amount: 500 },
  { name: "Rashim Sharma", amount: 100 },
  { name: "Hasan Razak", amount: 25 },
  { name: "Amer Hussain", amount: 5000 },
  { name: "Nikkita Muwanguzi", amount: 150 },
  { name: "Jason Kalirai", amount: 50 },
  { name: "Abdullah Saleh", amount: 3500 },
  { name: "Mustafa Super", amount: 100 },
  { name: "Janveer Mohammad", amount: 750 },
  { name: "Ameen Iftilhar", amount: 100 },
  { name: "Shahid Khan", amount: 100 },
  { name: "Ryan Button", amount: 100 },
  { name: "Nathan Wong", amount: 1000 },
  { name: "Bhupinder Minhas", amount: 500 },
  { name: "Faraz Butt", amount: 500 },
  { name: "Stephen Lau", amount: 1000 },
  { name: "Teen Cole", amount: 500 },
  { name: "TahaDeeb", amount: 1000 },
  { name: "Aaron Reichenbach", amount: 500 },
  { name: "Robby Halabi", amount: 1000 },
  { name: "Sagan's Fumed", amount: 2500 },
  { name: "Viet Tran", amount: 5000 },
  { name: "Tarek Hatoum", amount: 5000 },
  { name: "Ali Al kassab", amount: 100 },
  { name: "Omar taliani", amount: 250 },
  { name: "Zaki Taher", amount: 3000 },
  { name: "Michelle Henderson", amount: 50 },
  { name: "Shyam Saunder", amount: 200 },
  { name: "Sadique Pathan", amount: 500 },
  { name: "Tarrik Jomha", amount: 1000 },
  { name: "Thomas", amount: 500 },
  { name: "Bayan Hussein", amount: 2000 },
  { name: "NECEIB MOUSSA", amount: 500 },
  { name: "Rae Varughese", amount: 650 },
  { name: "Kelley Dunfield", amount: 500 },
  { name: "Vera Prodorutti", amount: 100 },
  { name: "Khalid Hoseh", amount: 1000 },
  { name: "Ian Thomson", amount: 50 },
  { name: "Marnie Watts", amount: 25 },
  { name: "Muba Taher", amount: 1000 },
  { name: "Naseem Hoque", amount: 5000 },
  { name: "Mahmoud Tarrabain", amount: 500 },
  { name: "Tarek Tarchichi", amount: 1000 },
  { name: "Marcel Laramee", amount: 500 },
  { name: "Gordon Lopatka", amount: 25 },
  { name: "Yehia Assaf", amount: 1000 },
  { name: "Shoaib Rasheed", amount: 500 },
  { name: "Grant Forrest Strand", amount: 1000 },
  { name: "Mike Ettinger", amount: 100 },
  { name: "Ali Mohammad", amount: 2500 },
  { name: "Maryam Javed", amount: 2500 },
  { name: "Ramadan Hochaimi", amount: 500 },
  { name: "Dr. Linda Uniat", amount: 500 },
  { name: "Omar Quraishi", amount: 25 },
  { name: "Elizabeth Cruickshank", amount: 25 },
  { name: "Thomas McHugh", amount: 25 },
  { name: "Daphne Madigin", amount: 100 },
  { name: "Brayden Yundt", amount: 50 },
  { name: "Daniel JamesYoung", amount: 50 },
  { name: "Abdul Assamad Farhat", amount: 250 },
  { name: "Riad Tarrabain", amount: 500 },
  { name: "Marie-Josee Langlois", amount: 25 },
  { name: "Celia Paz", amount: 50 },
  { name: "Amer Hajar", amount: 500 },
  { name: "James Crowe", amount: 50 },
  { name: "Shadi rahall", amount: 1000 },
  { name: "Issam Saleh", amount: 1000 },
  { name: "Ziad Moussa", amount: 1000 },
  { name: "Ehab Shawar", amount: 2500 },
  { name: "Radical Street wear", amount: 1000 },
  { name: "Ahmed Damra", amount: 1000 },
  { name: "Mohammed Damra", amount: 1000 },
  { name: "Chaddy Moustarah", amount: 1500 },
  { name: "Edmonotn Islamic Centre", amount: 500 },
  { name: "Pleasantview Dental Art", amount: 600 },
]

export function FullDisclosureContent() {
  return (
    <main className="bg-primary px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="max-w-4xl text-center mb-16 mx-auto">
          <div className="w-4/5 min-w-30 flex items-center justify-center mx-auto mb-8">
            <div className="flex-1 h-px bg-black"></div>
            <p className="mx-4 text-sm sm:text-lg text-theme-purple font-semibold">
              FULL DISCLOSURE
            </p>
            <div className="flex-1 h-px bg-black"></div>
          </div>

          <h1 className="mb-6 font-bold text-4xl sm:text-6xl text-theme-purple leading-tight">
            INDEPENDENT &<br />
            TRANSPARENT
          </h1>

          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            City Council shouldn&apos;t answer to political parties or special
            interest groups with deep pockets.
          </p>

          <p className="text-2xl font-bold text-theme-purple mb-8">
            It should answer to you.
          </p>

          <Button
            size="lg"
            className="bg-theme-purple text-white hover:bg-purple-700 text-lg px-8 py-4 h-auto font-semibold"
            onClick={() => {
              document
                .getElementById("donor-list")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Users className="mr-2 h-6 w-6" />
            JUMP TO DONOR LIST
          </Button>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Transparency Section */}
          <div className="bg-white border-2 border-theme-purple p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-theme-purple mb-6">
              TRANSPARENCY IN CAMPAIGN FINANCING
            </h2>

            <div className="space-y-6 text-lg">
              <p>
                Election law says that before the election candidates only have
                to disclose donations collected before July 31st. The rest
                don&apos;t need to be reported until after the election.
              </p>

              <p className="font-bold text-xl text-theme-purple">
                That means you won&apos;t find out who your candidates might be
                beholden to until it&apos;s too late.
              </p>

              <p>
                Edmontonians deserve better. Edmontonians deserve transparency.
              </p>

              <p className="font-bold text-xl text-theme-purple">
                That&apos;s why I am disclosing all of my campaign donations
                before Election Day. This is an active list that gets updated
                regularly with every donation.
              </p>

              <p className="font-bold text-xl text-theme-purple">
                I challenge all candidates to do the same.
              </p>

              <p>
                City Hall must stay independent, accountable, and focused on
                delivering the services families count on — not serving special
                interests.
              </p>
            </div>
          </div>

          {/* Donor List Popover Section */}
          <div
            id="donor-list"
            className="bg-theme-purple text-white p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              See the full, up-to-date list of my campaign donations
            </h3>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white text-theme-purple hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
                >
                  <Users className="mr-2 h-6 w-6" />
                  VIEW DONOR LIST
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-theme-purple">
                    Campaign Donors
                  </h4>
                  <div className="space-y-2">
                    {donorData
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((donor, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-200"
                        >
                          <span className="text-sm font-medium capitalize">
                            {donor.name}
                          </span>
                          <span className="text-sm text-theme-purple font-semibold">
                            ${donor.amount.toLocaleString()}
                          </span>
                        </div>
                      ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Total Donors:</strong> {donorData.length}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Total Amount:</strong> $
                      {donorData
                        .reduce((sum, donor) => sum + donor.amount, 0)
                        .toLocaleString()}
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Why This Matters Section */}
          <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-theme-purple mb-6">
              Why This Matters
            </h3>

            <div className="space-y-4 text-lg">
              <p>
                When candidates receive large donations from corporations,
                unions, or special interest groups, it creates potential
                conflicts of interest that can influence policy decisions. By
                disclosing all donations before the election, voters can:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Understand who might have influence over their elected
                  officials
                </li>
                <li>
                  Make informed decisions about which candidate truly represents
                  their interests
                </li>
                <li>
                  Hold elected officials accountable for their campaign promises
                </li>
                <li>
                  Ensure that city policy serves residents, not special
                  interests
                </li>
              </ul>

              <p className="font-semibold text-theme-purple mt-6">
                I challenge all mayoral candidates to follow this same standard
                of transparency. Edmontonians deserve to know who is funding
                their candidates before they vote.
              </p>
            </div>
          </div>

          {/* Independence Section */}
          <div className="bg-white border-2 border-theme-purple p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-theme-purple mb-6">
              Independence from Special Interests
            </h3>

            <div className="space-y-4 text-lg">
              <p>
                Too often, municipal politics becomes influenced by political
                parties and special interest groups with deep pockets. This
                undermines the independence that local government should have to
                serve the best interests of residents.
              </p>

              <p>
                As Mayor, I will ensure that City Hall remains independent and
                focused on delivering the services that Edmontonians need, not
                serving the interests of political parties or corporate donors.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-bold text-lg text-theme-purple mb-3">
                    No Political Party Influence
                  </h4>
                  <p>
                    Municipal politics should be about local issues and serving
                    the community, not advancing political party agendas.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-theme-purple mb-3">
                    Corporate Transparency
                  </h4>
                  <p>
                    Large corporate donations can create conflicts of interest
                    in municipal decision-making. Full disclosure ensures
                    accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
