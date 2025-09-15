import type { Metadata } from "next"
import type React from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kredi - Build Your Credit, Secure Your Future",
  description:
    "Decentralized, transparent, and community-driven loans. Start small, grow your reputation, and access better rates through peer-to-peer lending.",
  generator: "Kredi",
  keywords: "defi, loans, credit, blockchain, peer-to-peer, lending",
  openGraph: {
    title: "Kredi - Build Your Credit, Secure Your Future",
    description: "Decentralized, transparent, and community-driven loans.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kredi - Build Your Credit, Secure Your Future",
    description: "Decentralized, transparent, and community-driven loans.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
