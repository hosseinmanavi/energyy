"use client"

import { useState } from "react"
import {
  Menu,
  X,
  Zap,
  Home,
  Droplet,
  Lightbulb,
  Flame,
  Sun,
  Heart,
  BookOpen,
  Calculator,
  MessageSquare,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import tavan from "@/public/tavan nama.png"
import Image from "next/image"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: "/", label: "صفحه اصلی", icon: Home },
    { href: "/water-saving", label: "صرفه‌جویی در آب", icon: Droplet },
    { href: "/electricity", label: "بهینه‌سازی برق", icon: Lightbulb },
    { href: "/gas", label: "مدیریت مصرف گاز", icon: Flame },
    { href: "/renewable", label: "انرژی‌های تجدیدپذیر", icon: Sun },
    { href: "/culture", label: "فرهنگ‌سازی مصرف", icon: Heart },
    { href: "/blog", label: "بلاگ", icon: BookOpen },
    { href: "/carbon", label: "محاسبه‌گر کربن", icon: Calculator },
   
  ]

  const callus = () => {
    location.href = "/callus"
  }
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" fixed top-auto mt-1.5 left-4 z-[60] w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all"
        aria-label="منوی اصلی"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-[55] " onClick={() => setIsOpen(false)} />}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[58]  transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Logo */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Image src={tavan} width={40} height={20} alt="icon"/>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">توان نما</h2>
                <p className="text-xs text-slate-500">مدیریت هوشمند انرژی</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive ? "bg-blue-50 text-blue-600 font-semibold" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 bg-slate-50">
            <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all" onClick={callus}>
             تماس با ما
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
