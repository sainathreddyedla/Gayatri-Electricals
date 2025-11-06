import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SidebarNavigation } from "@/components/sidebar-navigation"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gayatri Electricals and Electronics - Turnkey Project Management",
  description:
    "Transforming bare structures into fully operational spaces. 25+ years of experience in electrical, plumbing, HVAC, and specialized installations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <SidebarNavigation />
        <main className="lg:ml-[296px]">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
