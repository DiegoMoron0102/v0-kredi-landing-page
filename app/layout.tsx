import type { Metadata } from "next"
import type React from "react"
import "./globals.css"
import RootLayout from "./page"

export const metadata: Metadata = {
  title: "Kredi - Préstamos claros. Sin letra chica.",
  description:
    "Simula, entiende y acepta con transparencia total antes de desembolsar. Préstamos responsables con Kredi.",
  generator: "Kredi",
  keywords: "préstamos, crédito, transparencia, simulador, fintech",
  openGraph: {
    title: "Kredi - Préstamos claros. Sin letra chica.",
    description: "Simula, entiende y acepta con transparencia total antes de desembolsar.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kredi - Préstamos claros. Sin letra chica.",
    description: "Simula, entiende y acepta con transparencia total antes de desembolsar.",
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayout>{children}</RootLayout>
}
