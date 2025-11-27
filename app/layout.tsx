import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "@/public/fonts/iransans/stylesheet.css"
import { MobileMenu } from "@/components/mobile-menu"
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: " سیستم مدیریت هوشمند انرژی",
  description: "داشبورد حرفه‌ای مدیریت و بهینه‌سازی مصرف انرژی",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`font-sans antialiased`}>
        <MobileMenu />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
