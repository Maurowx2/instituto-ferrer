import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instituto Ferrer - Excelência em Ortopedia e Traumatologia em Brasília",
  description:
    "O Instituto Ferrer é uma clínica especializada em ortopedia e traumatologia em Brasília, oferecendo atendimento de excelência com uma equipe de especialistas altamente qualificados.",
  keywords: "ortopedia, traumatologia, brasília, cirurgia ortopédica, joelho, quadril, coluna, medicina esportiva",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
