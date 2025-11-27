
import { MobileMenu } from "@/components/mobile-menu"
import { Flame, Thermometer, Wind, DoorOpen, Calculator, CheckCircle, TrendingDown } from "lucide-react"

export default function GasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50" dir="rtl">
     
      <MobileMenu />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
            <Flame className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">مدیریت مصرف گاز</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            با اجرای روش‌های صحیح می‌توانید تا 40٪ در مصرف گاز خانگی صرفه‌جویی کنید
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">40٪</div>
            <div className="text-slate-600">کاهش مصرف با عایق‌بندی</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3 میلیون تومان</div>
            <div className="text-slate-600">صرفه‌جویی سالانه متوسط</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">18-20°C</div>
            <div className="text-slate-600">دمای بهینه داخل منزل</div>
          </div>
        </div>

        {/* راهکارهای عایق‌بندی */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <DoorOpen className="w-7 h-7 text-orange-500" />
            <h2 className="text-2xl font-bold text-slate-800">راهکارهای عایق‌بندی در و پنجره</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-bold text-slate-800 mb-3">نصب درب‌های دو جداره</h3>
              <p className="text-slate-600 mb-4">درب‌های دو جداره می‌توانند تا 30٪ از هدررفت حرارت را کاهش دهند.</p>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingDown className="w-5 h-5" />
                <span className="font-semibold">صرفه‌جویی: 30٪</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-bold text-slate-800 mb-3">نوار درزگیر پنجره</h3>
              <p className="text-slate-600 mb-4">استفاده از نوارهای درزگیر برای جلوگیری از نفوذ هوای سرد.</p>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingDown className="w-5 h-5" />
                <span className="font-semibold">هزینه: 200-500 هزار تومان</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-bold text-slate-800 mb-3">پرده‌های ضخیم</h3>
              <p className="text-slate-600 mb-4">استفاده از پرده‌های ضخیم در شب برای جلوگیری از خروج گرما.</p>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingDown className="w-5 h-5" />
                <span className="font-semibold">صرفه‌جویی: 10-15٪</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-bold text-slate-800 mb-3">عایق‌کاری دیوارها</h3>
              <p className="text-slate-600 mb-4">عایق‌کاری دیوارهای خارجی و سقف برای حفظ گرما.</p>
              <div className="flex items-center gap-2 text-green-600">
                <TrendingDown className="w-5 h-5" />
                <span className="font-semibold">صرفه‌جویی: 25-35٪</span>
              </div>
            </div>
          </div>
        </div>

        {/* تنظیم بهینه دمای بخاری */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Thermometer className="w-7 h-7 text-orange-500" />
            <h2 className="text-2xl font-bold text-slate-800">تنظیم بهینه دمای سیستم گرمایشی</h2>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200 mb-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">توصیه‌های تنظیم دما:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  دمای بهینه منزل در زمستان: <strong className="text-orange-600">18-20 درجه سانتیگراد</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">
                  کاهش 1 درجه دما = صرفه‌جویی <strong className="text-orange-600">7٪</strong> در مصرف گاز
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">در شب دمای اتاق خواب را به 16-18 درجه کاهش دهید</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">از ترموستات‌های برنامه‌ریز برای مدیریت هوشمند استفاده کنید</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">رادیاتورها را به طور منظم هواگیری کنید</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
              <h4 className="font-bold text-slate-800 mb-2">نکته طلایی:</h4>
              <p className="text-slate-700 text-sm">
                نصب ترموستات هوشمند می‌تواند تا 20٪ در مصرف گاز صرفه‌جویی کند و هزینه آن ظرف 2 سال بازگردانده می‌شود.
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
              <h4 className="font-bold text-slate-800 mb-2">توصیه ویژه:</h4>
              <p className="text-slate-700 text-sm">
                در صورت داشتن شوفاژ، تنظیم دمای آب روی 60-65 درجه برای بهینه‌سازی مصرف انرژی ضروری است.
              </p>
            </div>
          </div>
        </div>

        {/* نکات آشپزخانه */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Wind className="w-7 h-7 text-orange-500" />
            <h2 className="text-2xl font-bold text-slate-800">صرفه‌جویی در گاز آشپزخانه</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">استفاده از درپوش</h3>
              <p className="text-sm text-slate-600">با استفاده از درپوش قابلمه تا 30٪ سریع‌تر غذا می‌پزد.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">تنظیم شعله مناسب</h3>
              <p className="text-sm text-slate-600">شعله نباید از زیر قابلمه خارج شود - اتلاف انرژی است.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">زودپز برقی</h3>
              <p className="text-sm text-slate-600">استفاده از زودپز برقی مقرون‌به‌صرفه‌تر از گازی است.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">آبگرمکن بهینه</h3>
              <p className="text-sm text-slate-600">دمای آبگرمکن را روی 50-55 درجه تنظیم کنید.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">پخت دسته‌جمعی</h3>
              <p className="text-sm text-slate-600">غذاهای هفته را یکجا طبخ کنید و در یخچال نگه دارید.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">سرویس منظم</h3>
              <p className="text-sm text-slate-600">سرویس سالانه وسایل گازسوز اجباری است.</p>
            </div>
          </div>
        </div>

        {/* محاسبه‌گر هزینه */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl p-6 sm:p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8" />
            <h2 className="text-2xl font-bold">محاسبه‌گر صرفه‌جویی گاز</h2>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
            <p className="text-white/90 mb-4">
              با اجرای تمامی نکات گفته شده، یک خانوار 4 نفره می‌تواند سالانه بین 2 تا 4 میلیون تومان در هزینه گاز
              صرفه‌جویی کند.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">قبل از بهینه‌سازی:</div>
                <div className="text-2xl font-bold">6 میلیون تومان/سال</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">بعد از بهینه‌سازی:</div>
                <div className="text-2xl font-bold">2.5 میلیون تومان/سال</div>
              </div>
            </div>
          </div>

          <button className="w-full sm:w-auto px-8 py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-all hover:scale-105">
            شروع برنامه بهینه‌سازی
          </button>
        </div>
      </main>
    </div>
  )
}
