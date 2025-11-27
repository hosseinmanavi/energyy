import { Lightbulb } from "lucide-react"

export function OptimizationSuggestion() {
  const suggestionProgress = 70

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/50 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-6 h-6 text-amber-600" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
            پیشنهاد هوشمند
            <span className="px-2 py-0.5 bg-amber-200 text-amber-800 text-xs font-medium rounded-full">جدید</span>
          </h3>

          <p className="text-slate-700 mb-4 leading-relaxed">
            مصرف پیک شما بین ساعت ۱۴ تا ۱۶ است. پیشنهاد می‌شود استفاده از کولر گازی در این بازه را کاهش دهید.
          </p>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 font-medium">تأثیر در صرفه‌جویی</span>
              <span className="text-amber-700 font-bold">{suggestionProgress}%</span>
            </div>

            <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 right-0 h-full bg-gradient-to-l from-amber-500 to-orange-500 rounded-full transition-all duration-1000 shadow-sm"
                style={{ width: `${suggestionProgress}%` }}
              ></div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md">
                اعمال پیشنهاد
              </button>
              <button className="px-5 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 border border-slate-200">
                بعداً یادآوری کن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
