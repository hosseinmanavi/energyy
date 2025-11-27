"use client"

import { Zap, Target, DollarSign, Leaf, TrendingUp, Shield, BarChart3, Cpu } from "lucide-react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import tavan from "@/public/tavan nama.png"
// Import Swiper styles
import 'swiper/css';
import Link from "next/link";
import Image from "next/image";
export default function HomePage() {
  
  const blog = () => {
    location.href = "/blog"
    
  }

  const callus = () => {
    location.href = "/callus"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Image src={tavan} width={40} height={20} alt="icon"/>

            </div>
            <h1 className="text-2xl font-bold text-slate-800">توان نما</h1>
          </div>
          {/* <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-white/10 hover:text-blue-600 hover:border-2 hover:border-blue-600 transition-all  hover:scale-105" onClick={callus}>
           تماس با ما
          </button> */}
        </div>
      </header>

    

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-6xl font-bold text-slate-800 leading-tight">
            مدیریت هوشمند انرژی"توان نما"
            <br />
            <span className="bg-gradient-to-l from-blue-600 to-blue-400 bg-clip-text text-transparent text-4xl">
              برای آینده‌ای پایدار
            </span>
          </h2>
          <br />  <br />
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            در دنیای امروز، انرژی یکی از ارزشمندترین منابع ماست. هدف ما ارائه راهکارهای عملی، آموزش‌های کاربردی و فناوری‌های نوین برای کاهش مصرف و افزایش بهره‌وری انرژی است.
            با ما همراه شوید تا با چند اقدام ساده، هزینه‌ها را کاهش دهید، از محیط‌زیست محافظت کنید و به سمت آینده‌ای پایدار قدم بردارید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-2 hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105 hover:shadow-lg">
              شروع رایگان
            </button>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-800"> 533میلیون کیلووات </div>
            <div className="text-slate-600 text-sm mt-1">سرانه مصرف ماهیانه برق در استان البرز </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all  hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-800">۶۰٪</div>
            <div className="text-slate-600 text-sm mt-1">صرفه‌جویی در هزینه</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all  hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-800">۸۰٪</div>
            <div className="text-slate-600 text-sm mt-1">کاهش انتشار کربن</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all  hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-800">۲۴/۷</div>
            <div className="text-slate-600 text-sm mt-1">نظارت لحظه‌ای</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-slate-800 mb-4">ویژگی‌های برجسته</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ویژگی‌های برجسته
            ابزارها و راهکارهای هوشمند ما تجربه‌ای سریع، دقیق و بهینه از مدیریت مصرف انرژی فراهم می‌کنند.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">تحلیل هوشمند مصرف</h4>
            <p className="text-slate-600 leading-relaxed">
              نمودارهای پیشرفته و تحلیل داده‌های لحظه‌ای برای درک بهتر الگوهای مصرف انرژی شما
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">بهینه‌سازی خودکار</h4>
            <p className="text-slate-600 leading-relaxed">
              پیشنهادات هوشمند برای کاهش مصرف در ساعات پیک و افزایش بهره‌وری انرژی
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">کنترل دستگاه‌ها</h4>
            <p className="text-slate-600 leading-relaxed">
              مدیریت و کنترل تمامی دستگاه‌های هوشمند از یک پنل واحد و یکپارچه
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">گزارش‌های محیط زیستی</h4>
            <p className="text-slate-600 leading-relaxed">
              محاسبه دقیق کربن صرفه‌جویی شده و تاثیر مثبت شما بر محیط زیست
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">امنیت بالا</h4>
            <p className="text-slate-600 leading-relaxed">
              حفاظت از داده‌های شما با استانداردهای امنیتی پیشرفته و رمزنگاری قوی
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">گزارش‌های جامع</h4>
            <p className="text-slate-600 leading-relaxed">
              دریافت گزارش‌های دوره‌ای از عملکرد و میزان صرفه‌جویی انرژی و هزینه
            </p>
          </div>
        </div>
      </section>
{/* 
      Mini topics
      <section className="max-w-2xl p-2 shadow-2xl m-auto">
        <div className="m-auto">
          <div className="">
            <figure>
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide> <Link href="#" >صرفه‌جویی در مصرف آب</Link>  </SwiperSlide>
                <SwiperSlide> <Link href="#" > بهینه‌سازی مصرف گاز   </Link> </SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
              </Swiper>

            </figure>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-gradient-to-l from-blue-600 to-blue-500 rounded-3xl p-12 lg:p-16 text-center shadow-2xl">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">آماده شروع هستید؟</h3>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            همین حالا به هزاران کاربر راضی بپیوندید و انرژی خود را هوشمندانه مدیریت کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold  transition-all hover:scale-105 hover:shadow-xl hover:bg-white/10 hover:text-white hover:cursor-pointer hover:border-white border-2">
              ثبت‌نام رایگان
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg bg-white/10 font-semibold hover:bg-white hover:text-blue-600 transition-all hover:scale-105 hover:shadow-xl hover:cursor-pointer">
              تماس با فروش
            </button> */}
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold  transition-all hover:scale-105 hover:shadow-xl hover:bg-white/10 hover:text-white hover:cursor-pointer hover:border-white border-2" onClick={blog}>
              دیدن بلاگ ها
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Image src={tavan} width={40} height={20} alt="icon"/>
                </div>
                <h4 className="text-xl font-bold text-slate-800">توان نما</h4>
              </div>
              <p className="text-slate-600">  مدیریت هوشمند انرژی برای آینده‌ای پایدار </p>
            </div>  

            

            {/* <div>
              <h5 className="font-bold text-slate-800 mb-4">محصولات</h5>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">داشبورد</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">تحلیل‌ها</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">گزارش‌ها</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">API</li>
              </ul>
            </div> */}

            <div>
              <h5 className="font-bold text-slate-800 mb-4">شرکت</h5>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">درباره ما  </li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link href="/callus" target="_blank">تماس با ما</Link>  </li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link href="/blog" target="_blank">بلاگ </Link></li>
                
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-800 mb-4"> پشتیبانی </h5>
                <ul className="space-y-2 text-slate-600">
                <li className="hover:text-blue-500 cursor-pointer transition-colors"> راهنما </li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors"> <Link href="/support?scroll=mos" target="_blank">مستندات</Link> </li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors"> <Link href="/support?scroll=faq" target="_blank"> سوالات متداول</Link></li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors"> <Link href="/support" target="_blank"> پشتیبانی</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-600">
            <p>© ۱۴۰۳ توان نما. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
