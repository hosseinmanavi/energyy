"use client"

const chartData = [
  { day: "شنبه", value: 85 },
  { day: "یکشنبه", value: 92 },
  { day: "دوشنبه", value: 78 },
  { day: "سه‌شنبه", value: 95 },
  { day: "چهارشنبه", value: 88 },
  { day: "پنج‌شنبه", value: 110 },
  { day: "جمعه", value: 120 },
]

const maxValue = Math.max(...chartData.map((d) => d.value))

export function EnergyChart() {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">مصرف انرژی در ۷ روز گذشته</h2>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span>کیلووات</span>
        </div>
      </div>

      <div className="relative h-64">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-t border-slate-200/50"></div>
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-slate-500">
          {[120, 90, 60, 30, 0].map((val) => (
            <span key={val}>{val}</span>
          ))}
        </div>

        {/* Chart bars and line */}
        <div className="absolute right-0 left-14 top-0 bottom-8 flex items-end justify-between gap-2">
          {chartData.map((item, index) => {
            const height = (item.value / maxValue) * 100

            return (
              <div key={index} className="flex-1 relative group">
                {/* Bar with gradient */}
                <div
                  className="w-full bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded-t-lg transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-blue-500/10"
                  style={{ height: `${height}%` }}
                >
                  {/* Dot on top */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-125"></div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-slate-800 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap shadow-lg">
                      {item.value} کیلووات
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* X-axis labels */}
        <div className="absolute right-0 left-14 bottom-0 flex justify-between text-xs text-slate-600">
          {chartData.map((item, index) => (
            <span key={index} className="flex-1 text-center">
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
