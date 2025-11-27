"use client"

import { LayoutDashboard, Zap, BarChart3, Settings, Bell } from "lucide-react"
import { useState } from "react"

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard")

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "داشبورد" },
    { id: "devices", icon: Zap, label: "دستگاه‌ها" },
    { id: "analytics", icon: BarChart3, label: "گزارشات" },
    { id: "notifications", icon: Bell, label: "اعلان‌ها" },
    { id: "settings", icon: Settings, label: "تنظیمات" },
  ]

  return (
    <aside className="fixed right-0 top-[73px] h-[calc(100vh-73px)] w-20 bg-white border-l border-slate-200 shadow-sm">
      <nav className="flex flex-col items-center gap-2 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`
                w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "text-slate-600 hover:bg-slate-100 hover:scale-105"
                }
              `}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
