'use client'
import { Droplet, Calculator, Wrench, ShoppingBag, TrendingDown, Clock, Home } from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { useState } from "react";


export default function WaterSavingPage() {
  const [numPeople, setNumPeople] = useState(1);
  const [showerMinutes, setShowerMinutes] = useState(10);
  const [laundryPerWeek, setLaundryPerWeek] = useState(2);

  const [result, setResult] = useState({
    daily: 0,
    monthly: 0,
    monthlyCost: 0,
  });


  const calculate = () => {
    const waterPerMinuteShower = 10; // لیتر در دقیقه
    const waterPerLaundry = 50; // لیتر هر بار
    const costPerLiter = 1; // هزینه تقریبی هر لیتر

    const dailyShower = numPeople * showerMinutes * waterPerMinuteShower;
    const dailyLaundry = (laundryPerWeek * waterPerLaundry) / 7;

    const dailyTotal = dailyShower + dailyLaundry;
    const monthlyTotal = dailyTotal * 30; // تقریبی ماه
    const monthlyCost = monthlyTotal * costPerLiter;

    setResult({
      daily: dailyTotal,
      monthly: monthlyTotal,
      monthlyCost,
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50" dir="rtl">
      <MobileMenu />


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4">
            <Droplet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800">صرفه‌جویی در مصرف آب</h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            آب، گرانبهاترین منبع زندگی است. با روش‌های ساده می‌توانید تا ۵۰٪ از مصرف آب خود کاهش دهید.
          </p>
        </div>
      </section>

      {/* Water Usage Calculator */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-xl">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-slate-800">محاسبه‌گر مصرف آب خانگی</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">تعداد افراد خانواده</label>
                <input
                  type="number"
                  placeholder="مثلاً ۴ نفر"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">میانگین زمان دوش گرفتن (دقیقه)</label>
                <input
                  type="number"
                  placeholder="مثلاً ۱۰ دقیقه"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => setShowerMinutes(Number(e.target.value))}
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700">
                  تعداد دفعات شستشوی ماشین لباسشویی در هفته
                </label>
                <input
                  type="number"
                  placeholder="مثلاً ۳ بار"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => setLaundryPerWeek(Number(e.target.value))}
                />
              </div>

              <button className="w-full px-6 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all hover:scale-105" onClick={calculate}>
                محاسبه مصرف
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">نتایج تخمینی</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-slate-600">مصرف روزانه</span>
                  <span className="text-2xl font-bold text-blue-600"> {result.daily.toFixed(0)} :لیتر</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-slate-600">مصرف ماهانه</span>
                  <span className="text-2xl font-bold text-blue-600"> {result.monthly.toFixed(0)} :لیتر</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="text-slate-600">هزینه ماهانه (تقریبی)</span>
                  <span className="text-2xl font-bold text-green-600"> {result.monthlyCost.toFixed(0)} تومان</span>
                </div>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>توجه:</strong> مصرف شما ۳۵٪ بالاتر از میانگین است. با اعمال توصیه‌های ما می‌توانید تا ۱۰۰ لیتر
                    در روز صرفه‌جویی کنید!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saving Methods */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center flex items-center justify-center gap-3">
          <TrendingDown className="w-8 h-8 text-blue-600" />
          روش‌های کاهش مصرف آب
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">کاهش زمان دوش</h3>
            </div>
            <p className="text-slate-600 mb-3">
              با کاهش زمان دوش از ۱۵ دقیقه به ۵ دقیقه، روزانه تا ۸۰ لیتر آب صرفه‌جویی کنید.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: ۸۰ لیتر/روز</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">تعمیر شیرآلات</h3>
            </div>
            <p className="text-slate-600 mb-3">
              یک شیر چکه‌کن می‌تواند روزانه ۲۰ لیتر آب هدر دهد. فوراً آن را تعمیر کنید!
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: ۲۰ لیتر/روز</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">استفاده از آبیاری قطره‌ای</h3>
            </div>
            <p className="text-slate-600 mb-3">
              برای آبیاری باغچه از سیستم قطره‌ای استفاده کنید تا ۵۰٪ آب کمتری مصرف شود.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: ۵۰٪ آب باغچه</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                <Droplet className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">ظرفشویی هوشمند</h3>
            </div>
            <p className="text-slate-600 mb-3">
              ظرف‌ها را در یک ظرف بشویید نه زیر آب جاری. این کار ۴۰ لیتر آب در هر بار صرفه‌جویی می‌کند.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: ۴۰ لیتر/بار</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">توالت دو دکمه</h3>
            </div>
            <p className="text-slate-600 mb-3">استفاده از توالت‌های دو دکمه می‌تواند ۳۰٪ از مصرف آب توالت را کاهش دهد.</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: ۳۰٪ مصرف</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                <Droplet className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">جمع‌آوری آب باران</h3>
            </div>
            <p className="text-slate-600 mb-3">
              با نصب سیستم جمع‌آوری آب باران، آب رایگانی برای آبیاری و شستشو داشته باشید.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-700 font-semibold">صرفه‌جویی: ۱۰۰+ لیتر/ماه</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center flex items-center justify-center gap-3">
          <ShoppingBag className="w-8 h-8 text-blue-600" />
          محصولات کاهنده مصرف آب
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mb-4 flex items-center justify-center">
              <Droplet className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">سردوش کم‌مصرف</h3>
            <p className="text-slate-600 text-sm mb-3">کاهش ۵۰٪ مصرف آب دوش</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">۲۵۰,۰۰۰ تومان</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center">
              <Wrench className="w-16 h-16 text-cyan-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">هواکش شیر آب</h3>
            <p className="text-slate-600 text-sm mb-3">کاهش ۳۰٪ مصرف آب شیرآلات</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">۵۰,۰۰۰ تومان</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mb-4 flex items-center justify-center">
              <Home className="w-16 h-16 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">فلاش تانک دو دکمه</h3>
            <p className="text-slate-600 text-sm mb-3">صرفه‌جویی ۳۰٪ در مصرف توالت</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">۴۰۰,۰۰۰ تومان</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl mb-4 flex items-center justify-center">
              <Droplet className="w-16 h-16 text-cyan-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">سیستم قطره‌ای</h3>
            <p className="text-slate-600 text-sm mb-3">کاهش ۵۰٪ مصرف آب باغچه</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">۳۵۰,۰۰۰ تومان</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-l from-cyan-600 to-blue-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">آماده صرفه‌جویی هستید؟</h3>
          <p className="text-lg text-blue-50 mb-8">محاسبه‌گر ردپای کربن ما را امتحان کنید</p>
          <Link
            href="/calculator"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105"
          >
            محاسبه ردپای کربن
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center text-slate-600 text-sm">
          <p>© ۱۴۰۳ توان نما. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  )
}
