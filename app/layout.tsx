"use client"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingShapes from "@/components/floating-shapes"
import CursorGlow from "@/components/cursor-glow"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Algonix Technologies | Tech Outsourcing Company",
//   description:
//     "Algonix Technologies helps startups and growing businesses build innovative digital solutions.",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/algo_techn/_next/static/media/image.6883cbde.png" sizes="any" />
        {/* You can add more favicon types if needed */}
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
      </head>
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-x-hidden`}
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 pointer-events-none"></div>
        <FloatingShapes />
        <CursorGlow />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
