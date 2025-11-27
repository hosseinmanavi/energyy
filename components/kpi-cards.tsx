import { Zap, Target, Banknote, Leaf, TrendingUp, TrendingDown } from "lucide-react"

const kpiData = [
  {
    title: "مصرف کنونی",
    value: "۱۲۰",
    unit: "کیلووات",
    icon: Zap,
    trend: { value: "۸%", isPositive: false },
    color: "blue",
  },
  {
    title: "هدف ماهانه",
    value: "۸۵",
    unit: "%",
    icon: Target,
    trend: { value: "۵%", isPositive: true },
    color: "green",
  },
  {
    title: "صرفه‌جویی هزینه",
    value: "۴۵۰",
    unit: "هزار تومان",
    icon: Banknote,
    trend: { value: "۱۲%", isPositive: true },
    color: "emerald",
  },
  {
    title: "کربن صرفه‌جویی شده",
    value: "۲۵۰",
    unit: "کیلوگرم",
    icon: Leaf,
    trend: { value: "۱۵%", isPositive: true },
    color: "teal",
  },
]

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, index) => {
        const Icon = kpi.icon
        const TrendIcon = kpi.trend.isPositive ? TrendingUp : TrendingDown

        return (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${kpi.color}-100 flex items-center justify-center`}>
                <Icon className={`w-6 h-6 text-${kpi.color}-600`} />
              </div>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${kpi.trend.isPositive ? "text-green-600" : "text-red-600"}`}
              >
                <TrendIcon className="w-4 h-4" />
                <span>{kpi.trend.value}</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-600 mb-1">{kpi.title}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-slate-800">{kpi.value}</span>
                <span className="text-sm text-slate-500">{kpi.unit}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
