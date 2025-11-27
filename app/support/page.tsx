"use client"

import Link from "next/link"
import { Zap, BookOpen, FileText, MessageCircle, HelpCircle, Search, Download, Video, Mail, Phone, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import tavan from "@/public/tavan nama.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { link } from "fs"

export default function SupportPage() {






  const sendMessage = () => {
    if (textarea.trim() === "") {
      alert("باید چیزی بنویسید که ارسال شود")
      return;
    }
    alert("پیام با موفقیت ارسال شد")

    SetTextArea("")

    const email = "tavannama810@gmail.com";
    const subject = "پیام از سایت توان نما";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textarea)}`;

  }


  const [textarea, SetTextArea] = useState("")
  const [query, setQuery] = useState("");

  const params = useSearchParams()

  const searchForMostanad = useSearchParams()

  useEffect(() => {
    if (params.get("scroll") === "faq") {
      const el = document.getElementById("faq")
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [params])

  useEffect(() => {
    if (searchForMostanad.get("scroll") === "mos") {
      const mo = document.getElementById("mos")
      if(mo) {
        mo.scrollIntoView({behavior: "smooth"})
      }
    }


  }, [searchForMostanad])

  const resources = [
    {
      icon: BookOpen,
      title: "مستندات جامع",
      description: "راهنمای کامل استفاده بهینه از انرژی ",
      link: "https://www.iran-academy.org/%D9%85%D8%B7%D8%A7%D9%84%D8%A8-%D8%A2%D9%85%D9%88%D8%B2%D8%B4%DB%8C/762-%D8%AF%D8%B3%D8%AA%D9%88%D8%B1%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D8%B5%D8%B1%D9%81%D9%87-%D8%AC%D9%88%D9%8A%DB%8C-%D8%AF%D8%B1-%D9%85%D8%B5%D8%B1%D9%81-%D8%A7%D9%86%D8%B1%DA%98%DB%8C",
      badge: "محبوب",
    },
    {
      icon: Video,
      title: "ویدیوهای آموزشی",
      description: " ویدیو های آموزشی برای مصرف بهینه انرژی ",
      link: "https://www.aparat.com/playlist/158788/%D9%85%D8%B5%D8%B1%D9%81_%D8%A8%D9%87%D9%8A%D9%86%D9%87_%D8%A7%D9%86%D8%B1%DA%98%D9%8A",
      badge: null,

    },
    {
      icon: FileText,
      title: "مقالات و وبلاگ",
      description: "بهترین روش‌ها و نکات کاربردی",
      link: "/blog",
      badge: null,
    },
    {
      icon: Download,
      title: "فایل‌های دانلودی",
      description: "کاتالوگ، بروشور و نرم‌افزارها",
      link: "https://media.imna.ir/d/2021/05/22/4/1701801.jpg",
      badge: null,
    },
  ]

  const faqs = [
    {
      question: "چگونه می‌توانم حساب کاربری ایجاد کنم؟",
      answer:
        'برای ایجاد حساب کاربری، روی دکمه "ثبت‌نام" در بالای صفحه کلیک کنید. سپس اطلاعات خود شامل نام، ایمیل و رمز عبور را وارد نمایید. یک ایمیل تایید برای شما ارسال خواهد شد که پس از کلیک روی لینک آن، حساب شما فعال می‌شود.',
    },
    {
      question: "آیا می‌توانم محصول را قبل از خرید امتحان کنم؟",
      answer:
        "بله، ما یک دوره آزمایشی رایگان ۳۰ روزه ارائه می‌دهیم که در آن به تمام ویژگی‌های اصلی دسترسی خواهید داشت. نیازی به وارد کردن اطلاعات کارت اعتباری نیست.",
    },
    {
      question: "چطور دستگاه‌های خود را به سیستم متصل کنم؟",
      answer:
        'اتصال دستگاه‌ها بسیار آسان است. در داشبورد، روی "افزودن دستگاه جدید" کلیک کنید و مراحل راهنما را دنبال کنید. ما از پروتکل‌های استاندارد IoT مانند MQTT، Zigbee و Wi-Fi پشتیبانی می‌کنیم. همچنین راهنمای اتصال برای دستگاه‌های مختلف در بخش مستندات موجود است.',
    },
    {
      question: "آیا داده‌های من امن هستند؟",
      answer:
        "امنیت داده‌ها برای ما در اولویت اول است. ما از رمزنگاری AES-256 برای ذخیره‌سازی و SSL/TLS برای انتقال داده استفاده می‌کنیم. تمام سرورها در داخل کشور و مطابق با استانداردهای امنیتی بین‌المللی مدیریت می‌شوند. همچنین از احراز هویت دو مرحله‌ای پشتیبانی می‌کنیم.",
    },
    {
      question: "آیا می‌توانم با سیستم‌های موجود خود یکپارچه‌سازی کنم؟",
      answer:
        "بله، ما API جامعی ارائه می‌دهیم که امکان یکپارچه‌سازی با اکثر سیستم‌های ERP، BMS و CRM را فراهم می‌کند. مستندات کامل API و SDK برای زبان‌های مختلف در دسترس است.",
    },
    {
      question: "پشتیبانی شما چگونه است؟",
      answer:
        "ما پشتیبانی ۲۴/۷ از طریق چت آنلاین، ایمیل و تلفن ارائه می‌دهیم. برای مشتریان سازمانی، یک مدیر حساب اختصاصی تعیین می‌شود. میانگین زمان پاسخگویی ما کمتر از ۲ ساعت است.",
    },
    {
      question: "هزینه‌های اشتراک چگونه است؟",
      answer:
        "ما سه پکیج اشتراک داریم: پایه (۲۵۰ هزار تومان/ماه)، حرفه‌ای (۵۰۰ هزار تومان/ماه) و سازمانی (قیمت‌گذاری سفارشی). همچنین تخفیف ۲۰٪ برای پرداخت سالانه وجود دارد.",
    },
    {
      question: "آیا آموزش هم ارائه می‌دهید؟",
      answer:
        "بله، برای تمام مشتریان جدید، جلسات آموزشی آنلاین رایگان برگزار می‌کنیم. همچنین ویدیوهای آموزشی، وبینارها و مستندات جامع در دسترس است. برای مشتریان سازمانی، آموزش حضوری در محل نیز ارائه می‌شود.",
    },
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(query.toLowerCase())
  );


  const supportChannels = [

    {
      icon: Mail,
      title: "ایمیل",
      description: "tavannama810@gmail.com",
      availability: "پاسخ در کمتر از ۲ ساعت",
      action: "ارسال ایمیل",

    },
    {
      icon: Phone,
      title: "تلفن",
      availability: "۲۴ ساعته، ۷ روز هفته",
      action: "تماس",
      description: "021-554543233",



    },
  ]
  const callus = () => {
    location.href = "/callus"
  }

  const quickLinks = [
    { title: "راهنمای شروع سریع", icon: BookOpen },
    { title: "مستندات API", icon: FileText },
    { title: "آموزش نصب", icon: Video },
    { title: "عیب‌یابی رایج", icon: HelpCircle },
    { title: "به‌روزرسانی‌ها", icon: Download },
    { title: "انجمن کاربران", icon: MessageCircle },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Image src={tavan} width={50} height={20} alt="icon" />
              </div>
              <span className="text-xl font-bold">توان نما</span>
            </Link>
            {/* <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                محصولات
              </Link>
              <Link href="/company" className="text-gray-600 hover:text-gray-900 transition-colors">
                شرکت
              </Link>
              <Link href="/support" className="text-blue-600 font-medium">
                پشتیبانی
              </Link>
              <Button size="sm">ورود به سیستم</Button>
            </nav> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-bl from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4" variant="secondary">
            مرکز پشتیبانی
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            چطور می‌توانیم به شما کمک کنیم؟
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-pretty">
            به مرکز پشتیبانی توان نما خوش آمدید. در اینجا پاسخ تمام سوالات خود را پیدا کنید
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input type="text" value={query} placeholder="سوال خود را جستجو کنید..." className="pr-12 h-14 text-lg" onChange={(e) => setQuery(e.target.value)} />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 lg:py-24" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">راه‌های تماس با ما</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              از طریق هر کدام از کانال‌های زیر می‌توانید با تیم پشتیبانی ما در ارتباط باشید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon
              return (
                <Card key={idx} className="hover:shadow-lg transition-all text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">{channel.title}</CardTitle>
                    <CardDescription className="text-base">{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{channel.availability}</p>
                    <Button className="w-full" onClick={callus}>{channel.action}</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 lg:py-24 bg-white" id="mos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">منابع آموزشی</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              همه چیزی که برای استفاده بهینه از محصولات ما نیاز دارید
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, idx) => {
              const Icon = resource.icon
              return (
                <Card key={idx} className="hover:shadow-lg transition-all hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      {resource.badge && <Badge variant="secondary">{resource.badge}</Badge>}
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" onClick={() => window.open(resource.link, "_blank")}>
                      مشاهده
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">دسترسی سریع</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">پرکاربردترین بخش‌های مرکز پشتیبانی</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <Card key={idx} className="hover:shadow-md transition-all cursor-pointer hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <p className="text-sm font-medium text-gray-700">{link.title}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">سوالات متداول</h2>
            <p className="text-lg text-gray-600">پاسخ سوالات رایج کاربران</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-gray-50 rounded-lg px-6 border-0">
                <AccordionTrigger className="text-right hover:no-underline py-6">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">سوال شما اینجا نبود؟</p>
            <textarea name="test" id="" placeholder=" اینجا سوال خود را برای ما ایمیل کنید " value={textarea} onChange={(txt) => SetTextArea(txt.target.value)} className="textarea w-96 h-40 bg-gray-50 text-black border-[1] p-3  rounded shadow-2xl"></textarea>
            <br />
            <button className="but bg-green-500 p-2 flex justify-center m-auto text-white rounded-[7] shadow-2xl transition hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-500 " onClick={sendMessage}>
              ارسال
            </button>
          </div>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">به دنبال مستندات فنی هستید؟</h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">راهنمای کامل API، SDK و یکپارچه‌سازی را مطالعه کنید</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              مستندات توسعه‌دهندگان
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
            >
              راهنمای کاربری
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; ۱۴۰۳ توان نما. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  )
}
