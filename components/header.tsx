import { User } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700">کاربر مهمان</p>
            <p className="text-xs text-slate-500">مدیر سیستم</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
          
          
          </div>
        </div>
      </div>
    </header>
  )
}
