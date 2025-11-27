'use client'
import { MobileMenu } from "@/components/mobile-menu"
import { Sun, Wind, Battery, TrendingUp, CheckCircle, Building } from "lucide-react"

export default function RenewablePage() {
  
  const callus = () => {
    location.href = "/callus"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50" dir="rtl">
     
      <MobileMenu />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl mb-6">
            <Sun className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">توسعه انرژی‌های تجدیدپذیر</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            سرمایه‌گذاری در انرژی‌های پاک، سرمایه‌گذاری برای آینده است
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">300 روز</div>
            <div className="text-slate-600">آفتابی در سال در ایران</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">80٪</div>
            <div className="text-slate-600">کاهش قبض برق با پنل خورشیدی</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">5-7 سال</div>
            <div className="text-slate-600">بازگشت سرمایه پنل خورشیدی</div>
          </div>
        </div>

        {/* انرژی خورشیدی */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Sun className="w-7 h-7 text-yellow-500" />
            <h2 className="text-2xl font-bold text-slate-800">انرژی خورشیدی</h2>
          </div>

          <p className="text-slate-600 mb-6">
            ایران با دریافت بیش از 300 روز آفتابی در سال، یکی از بهترین کشورها برای استفاده از انرژی خورشیدی است.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">مزایای پنل خورشیدی:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">کاهش 70-80٪ قبض برق</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">عمر مفید 25-30 سال</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">نیاز به نگهداری کم</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">افزایش ارزش ملک</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">کاهش 4-5 تن انتشار CO2 سالانه</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4">محاسبه هزینه و بازدهی:</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">سیستم 5 کیلووات (خانگی)</span>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600 mb-1">150-200 میلیون تومان</div>
                  <div className="text-sm text-slate-500">تولید 20-25 کیلووات‌ساعت در روز</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-600">صرفه‌جویی ماهانه</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">2-3 میلیون تومان</div>
                  <div className="text-sm text-slate-500">بسته به میزان مصرف</div>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-5 h-5 text-yellow-700" />
                    <span className="font-bold text-yellow-800">بازگشت سرمایه: 5-7 سال</span>
                  </div>
                  <div className="text-sm text-yellow-700">سود خالص 18-23 سال</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-white">
            <h4 className="text-xl font-bold mb-3">مراحل نصب پنل خورشیدی:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-sm">بازرسی پشت‌بام و محاسبه</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm">اخذ مجوز از شرکت برق</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm">نصب و راه‌اندازی سیستم</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm">نصب کنتور دو طرفه</div>
              </div>
            </div>
          </div>
        </div>

        {/* انرژی بادی */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Wind className="w-7 h-7 text-blue-500" />
            <h2 className="text-2xl font-bold text-slate-800">انرژی بادی</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-600 mb-4">
                انرژی بادی برای مناطق با سرعت باد بالا (بیش از 5 متر بر ثانیه) مناسب است و می‌تواند مکمل خوبی برای
                سیستم‌های خورشیدی باشد.
              </p>

              <h3 className="font-bold text-slate-800 mb-3">مناطق مستعد در ایران:</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  سواحل دریای خزر
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  مناطق شرقی (سیستان و بلوچستان)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  ارتفاعات البرز
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  سواحل خلیج فارس
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-bold text-slate-800 mb-4">توربین بادی کوچک (خانگی):</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">توان تولید:</span>
                  <span className="font-bold text-slate-800">1-10 کیلووات</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">هزینه نصب:</span>
                  <span className="font-bold text-slate-800">80-300 میلیون تومان</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-600">عمر مفید:</span>
                  <span className="font-bold text-slate-800">20-25 سال</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">بازگشت سرمایه:</span>
                  <span className="font-bold text-green-600">8-12 سال</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* باتری‌های ذخیره‌ساز */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Battery className="w-7 h-7 text-green-500" />
            <h2 className="text-2xl font-bold text-slate-800">سیستم‌های ذخیره‌سازی انرژی</h2>
          </div>

          <p className="text-slate-600 mb-6">
            باتری‌های ذخیره‌ساز به شما اجازه می‌دهند انرژی تولیدی را در زمان‌های کم‌مصرف ذخیره و در زمان نیاز استفاده کنید.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-800 mb-3">باتری لیتیوم یون</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• عمر: 10-15 سال</li>
                <li>• راندمان: 90-95٪</li>
                <li>• هزینه: 50-150 میلیون</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-800 mb-3">باتری سرب-اسید</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• عمر: 5-7 سال</li>
                <li>• راندمان: 70-80٪</li>
                <li>• هزینه: 20-60 میلیون</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-slate-800 mb-3">باتری جریان ردوکس</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• عمر: 15-20 سال</li>
                <li>• راندمان: 75-85٪</li>
                <li>• هزینه: 100-200 میلیون</li>
              </ul>
            </div>
          </div>
        </div>

        {/* شرکت‌های فعال */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Building className="w-7 h-7 text-slate-600" />
            <h2 className="text-2xl font-bold text-slate-800">شرکت‌های معتبر در ایران</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-2">صنایع انرژی خورشیدی پارس</h3>
              <p className="text-sm text-slate-600 mb-3">
                تولیدکننده پنل‌های خورشیدی و ارائه‌دهنده خدمات نصب و راه‌اندازی
              </p>
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <span>تهران، کرج، شیراز</span>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-2">شرکت انرژی‌های نو ایران</h3>
              <p className="text-sm text-slate-600 mb-3">مشاوره، طراحی و اجرای سیستم‌های خورشیدی و بادی</p>
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <span>اصفهان، یزد، کرمان</span>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-2">گروه صنعتی رایان</h3>
              <p className="text-sm text-slate-600 mb-3">تولید و فروش تجهیزات انرژی خورشیدی</p>
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <span>سراسر کشور</span>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-2">مهندسین مشاور انرژی سبز</h3>
              <p className="text-sm text-slate-600 mb-3">مشاوره تخصصی و محاسبات فنی-اقتصادی</p>
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <span>تهران، مشهد، تبریز</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">آماده برای شروع سفر انرژی پاک؟</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            همین امروز با مشاورین ما تماس بگیرید و اولین قدم را برای استقلال انرژی بردارید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-white/10 hover:text-white hover:border-2 hover:border-white  transition-all hover:scale-105" onClick={callus}>
            تماس با ما
            </button>
            {/* <button className="px-8 py-3 bg-transparent border-2 hover:text-orange-600 hover:bg-white border-white text-white rounded-xl font-bold  transition-all">
              محاسبه هزینه پروژه
            </button> */}
          </div>
        </div>
      </main>
    </div>
  )
}
