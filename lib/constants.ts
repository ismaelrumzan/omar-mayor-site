export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.omar4mayor.ca/about",
  name: "Dr. Omar Mohammad",
  alternateName: "Omar Mohammad",
  jobTitle: "Pediatric Dental Surgeon",
  description:
    "Dr. Omar Mohammad is a lifelong Edmontonian, pediatric dental surgeon, and dedicated community advocate running for Mayor of Edmonton to bring safety, accountability, and inclusive leadership.",
  birthDate: "1978-01-01",
  birthPlace: {
    "@type": "Place",
    name: "Edmonton, Alberta, Canada",
  },
  nationality: "Canadian",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Alberta",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  sameAs: [
    "https://facebook.com/omohammad",
    "https://twitter.com/omar_4_mayor",
    "https://www.linkedin.com/in/dr-omar-mohammad-61b1949a",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Political Candidate",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.omar4mayor.ca",
  },
  image: "https://www.omar4mayor.ca/images/omar.jpg",
}
