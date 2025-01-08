import "@/styles/globals.css"
import "@/styles/styles.css"
import type { Viewport } from "next"
import { Merriweather, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import { ThemeProvider } from "@/components/theme-provider"

export const viewport: Viewport = {
  width: "device-width",
}

const noto_sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
})

const noto_serif = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-noto-serif",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={noto_sans.variable + " " + noto_serif.variable}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">{children}</div>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
