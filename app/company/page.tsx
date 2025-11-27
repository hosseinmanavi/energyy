import Link from "next/link"
import { Zap, Target, Users, Award, Globe, Heart, Briefcase, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import tavan from "@/public/tavan nama.png"
export default function CompanyPage() {
  const values = [
    {
      icon: Target,
      title: "تعهد به نوآوری",
      description: "ما همواره در تلاشیم تا جدیدترین فناوری‌های مدیریت انرژی را به کسب‌وکارها ارائه دهیم",
    },
    {
      icon: Heart,
      title: "مسئولیت زیست‌محیطی",
      description: "کاهش ردپای کربن و حفاظت از محیط زیست در هسته ماموریت ماست",
    },
    {
      icon: Users,
      title: "مشتری‌محوری",
      description: "رضایت مشتریان ما اولویت اول است و همیشه به دنبال بهترین خدمات هستیم",
    },
    {
      icon: Award,
      title: "کیفیت و اعتماد",
      description: "ما به کیفیت محصولات و خدمات خود متعهدیم و اعتماد شما را ارزشمند می‌دانیم",
    },
  ]

  const team = [
    {
      name: "دکتر امیر محمدی",
      role: "مدیرعامل و بنیانگذار",
      description: "دکترای مهندسی انرژی با ۱۵ سال تجربه در صنعت",
      image: "/professional-man-ceo.jpg",
    },
    {
      name: "مهندس سارا احمدی",
      role: "مدیر فنی",
      description: "متخصص هوش مصنوعی و یادگیری ماشین",
      image: "/professional-woman-cto.jpg",
    },
    {
      name: "مهندس رضا کریمی",
      role: "مدیر توسعه محصول",
      description: "متخصص IoT و سیستم‌های هوشمند",
      image: "/professional-man-product.jpg",
    },
    {
      name: "دکتر مریم حسینی",
      role: "مدیر تحقیق و توسعه",
      description: "دکترای انرژی‌های تجدیدپذیر",
      image: "/professional-woman-research.jpg",
    },
  ]

  const stats = [
    { value: "۵۰۰+", label: "مشتری فعال" },
    { value: "۲ میلیون+", label: "دستگاه متصل" },
    { value: "۳۰٪", label: "کاهش متوسط مصرف" },
    { value: "۲۴/۷", label: "پشتیبانی" },
  ]

  const milestones = [
    { year: "۱۳۹۸", title: "تاسیس شرکت", description: "شروع سفر با یک تیم ۵ نفره" },
    { year: "۱۳۹۹", title: "اولین محصول", description: "عرضه داشبورد هوشمند مدیریت انرژی" },
    { year: "۱۴۰۰", title: "رشد ۱۰۰٪", description: "دو برابر شدن تعداد مشتریان" },
    { year: "۱۴۰۱", title: "توسعه بین‌المللی", description: "ورود به بازارهای منطقه‌ای" },
    { year: "۱۴۰۲", title: "دریافت جوایز", description: "برنده جایزه بهترین استارتاپ سبز" },
    { year: "۱۴۰۳", title: "نسل جدید", description: "معرفی پلتفرم AI-powered" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                 <Image src={tavan} width={40} height={20} alt="icon"/>
            
              </div>
              <span className="text-xl font-bold">توان نما</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                محصولات
              </Link>
              <Link href="/company" className="text-blue-600 font-medium">
                شرکت
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900 transition-colors">
                پشتیبانی
              </Link>
              <Button size="sm">ورود به سیستم</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-bl from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4" variant="secondary">
            درباره توان نما
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            ما در تلاش برای آینده‌ای پایدارتر هستیم
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-pretty">
            توان نما با هدف کاهش مصرف انرژی و حفاظت از محیط زیست، راهکارهای هوشمند مدیریت انرژی را برای کسب‌وکارها
            و سازمان‌ها فراهم می‌کند
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-2 transition hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">ماموریت ما</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  ماموریت ما ارائه راهکارهای هوشمند و نوآورانه برای بهینه‌سازی مصرف انرژی است. ما معتقدیم که با استفاده
                  از فناوری‌های پیشرفته و هوش مصنوعی، می‌توانیم به کسب‌وکارها کمک کنیم تا هم هزینه‌های خود را کاهش دهند و هم
                  به محیط زیست کمک کنند.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  ما به این باوریم که هر کسب‌وکاری، صرف‌نظر از اندازه‌اش، حق دارد به ابزارهای حرفه‌ای مدیریت انرژی دسترسی
                  داشته باشد.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">چشم‌انداز ما</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  چشم‌انداز ما تبدیل شدن به پیشرو منطقه‌ای در زمینه راهکارهای هوشمند مدیریت انرژی است. ما می‌خواهیم تا سال
                  ۱۴۱۰، به بیش از ۱۰۰۰ سازمان در کاهش ۵۰٪ مصرف انرژی و ردپای کربن کمک کنیم.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  ما آینده‌ای را می‌بینیم که در آن هر ساختمان، کارخانه و کسب‌وکار به صورت هوشمند و بهینه از انرژی استفاده
                  می‌کند.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">ارزش‌های ما</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">اصولی که ما را در مسیر موفقیت راهنمایی می‌کنند</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={idx} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">سفر ما</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">نگاهی به مسیر رشد و پیشرفت توان نما  </p>
          </div>

          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden lg:block absolute top-0 bottom-0 right-1/2 w-0.5 bg-blue-200" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 lg:text-left">
                    <Card className={`${idx % 2 === 0 ? "lg:mr-8" : "lg:ml-8"} hover:shadow-lg transition-all`}>
                      <CardHeader>
                        <Badge className="w-fit mb-2">{milestone.year}</Badge>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">تیم مدیریت</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              متخصصان با تجربه‌ای که توان نما را هدایت می‌کنند
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">تماس با ما</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">ما مشتاقانه منتظر شنیدن صدای شما هستیم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle>تلفن</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600" dir="ltr">
                  021-12345678
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle>ایمیل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600" dir="ltr">
                  info@tavan-nama.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle>آدرس</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">تهران، خیابان ولیعصر، برج آزادی</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Briefcase className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">به تیم ما بپیوندید</h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            اگر به دنبال فرصتی هیجان‌انگیز برای کار در حوزه انرژی پایدار هستید، ما منتظر شما هستیم
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            مشاهده موقعیت‌های شغلی
          </Button>
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
