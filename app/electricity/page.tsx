import { Lightbulb, Zap, Thermometer, Smartphone, TrendingDown } from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"


export default function ElectricityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50" dir="rtl">
      <MobileMenu />
     

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl mb-4">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">بهینه‌سازی مصرف برق</h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            با مدیریت هوشمند مصرف برق، تا ۴۰٪ هزینه‌های خود را کاهش دهید و به محیط زیست کمک کنید.
          </p>
        </div>
      </section>

      {/* LED vs Traditional Comparison */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">مقایسه لامپ‌های LED و معمولی</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">لامپ رشته‌ای (۶۰ وات)</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <span className="text-slate-700">مصرف برق</span>
                <span className="font-bold text-red-600">۶۰ وات</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <span className="text-slate-700">عمر مفید</span>
                <span className="font-bold text-red-600">۱,۰۰۰ ساعت</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <span className="text-slate-700">هزینه سالانه</span>
                <span className="font-bold text-red-600">۴۸۰,۰۰۰ تومان</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <span className="text-slate-700">انتشار CO₂</span>
                <span className="font-bold text-red-600">۱۲۰ کیلوگرم</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">لامپ LED (۱۰ وات)</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="text-slate-700">مصرف برق</span>
                <span className="font-bold text-green-600">۱۰ وات</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="text-slate-700">عمر مفید</span>
                <span className="font-bold text-green-600">۲۵,۰۰۰ ساعت</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="text-slate-700">هزینه سالانه</span>
                <span className="font-bold text-green-600">۸۰,۰۰۰ تومان</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <span className="text-slate-700">انتشار CO₂</span>
                <span className="font-bold text-green-600">۲۰ کیلوگرم</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-l from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">با تعویض یک لامپ به LED:</h3>
          <p className="text-lg">سالانه ۴۰۰,۰۰۰ تومان صرفه‌جویی + کاهش ۱۰۰ کیلوگرم انتشار کربن!</p>
        </div>
      </section>

      {/* High Consumption Devices Management */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center flex items-center justify-center gap-3">
          <TrendingDown className="w-8 h-8 text-orange-600" />
          مدیریت وسایل پرمصرف
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-4">کولر گازی</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>✅ دمای ایده‌آل: ۲۴ درجه (نه ۱۸!)</p>
              <p>✅ تنظیم تایمر خاموش شدن شبانه</p>
              <p>✅ تمیز کردن فیلترها هر ماه</p>
              <p>✅ بستن درها و پنجره‌ها</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: تا ۳۰٪ مصرف</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-4">یخچال و فریزر</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>✅ دمای یخچال: ۳-۵ درجه</p>
              <p>✅ دمای فریزر: -۱۸ درجه</p>
              <p>✅ دور از منابع حرارتی قرار دهید</p>
              <p>✅ درب را زود ببندید</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: تا ۲۰٪ مصرف</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-4">ماشین لباسشویی</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>✅ شستشو با آب سرد</p>
              <p>✅ استفاده در ظرفیت کامل</p>
              <p>✅ انتخاب برنامه اکو</p>
              <p>✅ خشک کردن طبیعی لباس‌ها</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: تا ۴۰٪ مصرف</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-4">آبگرمکن برقی</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>✅ دمای ۵۵-۶۰ درجه کافی است</p>
              <p>✅ تایمر برای ساعات پیک</p>
              <p>✅ عایق‌کاری لوله‌های آب</p>
              <p>✅ خاموش در زمان سفر</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: تا ۲۵٪ مصرف</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-4">مایکروویو</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>✅ گرم کردن غذا با مایکروویو به جای گاز</p>
              <p>✅ پخت سریع‌تر = مصرف کمتر</p>
              <p>✅ تمیز نگه داشتن</p>
              <p>✅ استفاده از درب مناسب</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: ۷۰٪ نسبت به اجاق</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold text-slate-800 mb-4">تلویزیون و لپتاپ</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>✅ کاهش روشنایی صفحه</p>
              <p>✅ خاموش کامل (نه حالت آماده به کار)</p>
              <p>✅ تنظیم حالت صرفه‌جویی</p>
              <p>✅ قطع برق در زمان سفر</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: تا ۱۵٪ مصرف</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Systems */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center flex items-center justify-center gap-3">
          <Smartphone className="w-8 h-8 text-blue-600" />
          سیستم‌های هوشمند برق
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Thermometer className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-800">ترموستات هوشمند</h3>
            </div>
            <p className="text-slate-600 mb-6">
              ترموستات‌های هوشمند یاد می‌گیرند چه زمانی در خانه هستید و دما را خودکار تنظیم می‌کنند.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>کنترل از راه دور با گوشی</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>یادگیری الگوی زندگی شما</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>گزارش مصرف لحظه‌ای</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>صرفه‌جویی تا ۳۰٪</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>قیمت:</strong> از ۱,۵۰۰,۰۰۰ تومان
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-slate-800">پریز هوشمند</h3>
            </div>
            <p className="text-slate-600 mb-6">
              پریزهای هوشمند به شما امکان می‌دهند دستگاه‌ها را از راه دور کنترل و زمان‌بندی کنید.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>روشن/خاموش خودکار</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>تایمر و زمان‌بندی</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>نظارت بر مصرف برق</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>یکپارچگی با دستیار صوتی</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-slate-700">
                <strong>قیمت:</strong> از ۲۵۰,۰۰۰ تومان
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-l from-yellow-600 to-orange-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">شروع به صرفه‌جویی کنید!</h3>
          <p className="text-lg text-yellow-50 mb-8">محاسبه کنید چقدر می‌توانید در هزینه‌ها صرفه‌جویی کنید</p>
          <Link
            href="/calculator"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:bg-yellow-50 transition-all hover:scale-105"
          >
            محاسبه‌گر کربن
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center text-slate-600 text-sm">
          <p>© ۱۴۰۳ توان نما. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  )
}
