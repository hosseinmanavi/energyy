
import { MobileMenu } from "@/components/mobile-menu"
import { Heart, Trophy, Users, BookOpen, Star, Award } from "lucide-react"

export default function CulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50" dir="rtl">
  
      <MobileMenu />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">فرهنگ‌سازی مصرف مسئولانه</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            با تغییر عادات روزمره، آینده‌ای پایدار برای نسل‌های بعد بسازیم
          </p>
        </div>

        {/* داستان‌های موفقیت */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-7 h-7 text-green-500" />
            <h2 className="text-2xl font-bold text-slate-800">داستان‌های موفقیت</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">خانواده احمدی - تهران</h3>
                  <p className="text-sm text-slate-500">خانواده 4 نفره</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "با تغییر لامپ‌ها به LED، نصب شیرهای کم‌مصرف و مدیریت مصرف کولر، توانستیم 55٪ در قبوض برق و آب صرفه‌جویی
                کنیم. در 6 ماه اول حدود 4 میلیون تومان پس‌انداز کردیم."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-semibold">55٪ کاهش قبض</span>
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-semibold">4 میلیون صرفه‌جویی</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">خانواده رضایی - اصفهان</h3>
                  <p className="text-sm text-slate-500">خانواده 5 نفره</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "با نصب پنل خورشیدی 5 کیلووات و عایق‌کاری خانه، قبض برق ما از 3 میلیون به 600 هزار تومان رسید و از گاز هم
                40٪ کم‌تر مصرف می‌کنیم."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-semibold">80٪ کاهش برق</span>
                </div>
                <div className="bg-orange-100 px-3 py-1 rounded-full">
                  <span className="text-orange-700 font-semibold">40٪ کاهش گاز</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">آپارتمان کریمی - شیراز</h3>
                  <p className="text-sm text-slate-500">تک‌نفره</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "با استفاده از ترموستات هوشمند، تایمر لوازم برقی و روش‌های ساده مثل دوش 5 دقیقه‌ای، ماهی 1.2 میلیون تومان
                صرفه‌جویی می‌کنم."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-semibold">50٪ کاهش مصرف</span>
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-semibold">1.2 میلیون/ماه</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">مجتمع مسکونی پردیس - مشهد</h3>
                  <p className="text-sm text-slate-500">120 واحد</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "با نصب سیستم مدیریت هوشمند روشنایی پارکینگ و راهرو، تعویض آسانسور با مدل کم‌مصرف و عایق‌کاری، مصرف
                مشترکات 65٪ کاهش یافت."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-700 font-semibold">65٪ کاهش مشترکات</span>
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-700 font-semibold">80 میلیون/سال</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* مسابقات فرهنگی */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-yellow-500" />
            <h2 className="text-2xl font-bold text-slate-800">مسابقات و چالش‌ها</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* مسابقه عکس */}
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">مسابقه عکس "انرژی سبز من"</h3>
              <p className="text-slate-600 mb-4">
                عکس‌های خود از اقدامات صرفه‌جویی در انرژی را با هشتگ #انرژی_سبز_من به اشتراک بگذارید.
              </p>
              <div className="bg-pink-100 p-3 rounded-lg mb-4">
                <div className="text-sm text-pink-700 mb-1">جوایز:</div>
                <div className="font-bold text-slate-800">نفر اول: پنل خورشیدی 2 کیلووات</div>
                <div className="text-sm text-slate-600">نفرات 2-5: بن خرید 5 میلیون تومانی</div>
              </div>
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                شرکت در مسابقه
              </button>
            </div>

            {/* مسابقه مقاله */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">مسابقه مقاله‌نویسی</h3>
              <p className="text-slate-600 mb-4">
                مقاله‌ای درباره تجربیات، راهکارها یا ایده‌های خلاقانه خود در زمینه صرفه‌جویی انرژی بنویسید.
              </p>
              <div className="bg-blue-100 p-3 rounded-lg mb-4">
                <div className="text-sm text-blue-700 mb-1">جوایز:</div>
                <div className="font-bold text-slate-800">نفر اول: 10 میلیون تومان</div>
                <div className="text-sm text-slate-600">نفرات 2-10: انتشار در بلاگ رسمی</div>
              </div>
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                ارسال مقاله
              </button>
            </div>

            {/* چالش 30 روزه */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">چالش 30 روزه</h3>
              <p className="text-slate-600 mb-4">
                در چالش 30 روزه شرکت کنید و هر روز یک عادت جدید برای صرفه‌جویی در انرژی یاد بگیرید.
              </p>
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <div className="text-sm text-green-700 mb-1">پاداش تکمیل:</div>
                <div className="font-bold text-slate-800">گواهی دیجیتال + تخفیف 20٪</div>
                <div className="text-sm text-slate-600">برای خرید محصولات کم‌مصرف</div>
              </div>
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                شروع چالش
              </button>
            </div>
          </div>
        </div>

        {/* محتوای آموزشی کودکان */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-7 h-7 text-blue-500" />
            <h2 className="text-2xl font-bold text-slate-800">محتوای آموزشی کودکان و نوجوانان</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-5 rounded-xl border border-yellow-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🎮</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">بازی قهرمان انرژی</h3>
              <p className="text-sm text-slate-600 mb-3">بازی تعاملی برای یادگیری صرفه‌جویی به کودکان</p>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-colors">
                شروع بازی
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📺</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">انیمیشن‌های آموزشی</h3>
              <p className="text-sm text-slate-600 mb-3">ویدیوهای کوتاه و جذاب درباره مصرف مسئولانه</p>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors">
                تماشای ویدیوها
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">کتاب‌های داستانی</h3>
              <p className="text-sm text-slate-600 mb-3">داستان‌های هیجان‌انگیز با موضوع محیط زیست</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                دانلود کتاب‌ها
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-200 text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-2">کاردستی و پروژه</h3>
              <p className="text-sm text-slate-600 mb-3">پروژه‌های خلاقانه با مواد بازیافتی</p>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-semibold hover:bg-purple-600 transition-colors">
                مشاهده پروژه‌ها
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl shadow-xl p-6 sm:p-8 text-white text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">شما هم می‌توانید تغییر بسازید!</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            داستان موفقیت خود را با ما به اشتراک بگذارید و الهام‌بخش هزاران خانواده دیگر شوید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50 transition-all hover:scale-105">
              به اشتراک‌گذاری داستان
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all">
              عضویت در انجمن
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
