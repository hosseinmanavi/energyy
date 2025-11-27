import Link from "next/link"
import { Activity, BarChart3, FileText, Code2, Zap, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductsPage() {
  const products = [
    {
      id: "dashboard",
      title: "داشبورد هوشمند",
      description: "مدیریت و نظارت کامل بر مصرف انرژی در یک نگاه",
      icon: Activity,
      features: [
        "نمایش لحظه‌ای مصرف انرژی تمام دستگاه‌ها",
        "نمودارهای تعاملی و قابل سفارشی‌سازی",
        "هشدارهای هوشمند برای مصرف بیش از حد",
        "مقایسه مصرف با دوره‌های قبلی",
        "پیش‌بینی هزینه‌های آینده",
        "گزارش‌گیری سریع و آسان",
      ],
      badge: "محبوب‌ترین",
      badgeColor: "bg-blue-500",
    },
    {
      id: "analytics",
      title: "تحلیل‌های پیشرفته",
      description: "تحلیل عمیق داده‌های مصرف انرژی با هوش مصنوعی",
      icon: BarChart3,
      features: [
        "تحلیل الگوهای مصرف با یادگیری ماشین",
        "شناسایی ناهنجاری‌ها و مصرف‌های غیرعادی",
        "پیش‌بینی مصرف آینده با دقت بالا",
        "توصیه‌های شخصی‌سازی شده برای بهینه‌سازی",
        "مقایسه با استانداردهای صنعت",
        "تحلیل هزینه-فایده راهکارهای پیشنهادی",
      ],
      badge: "جدید",
      badgeColor: "bg-green-500",
    },
    {
      id: "reports",
      title: "گزارش‌های جامع",
      description: "تولید گزارش‌های حرفه‌ای و قابل ارائه",
      icon: FileText,
      features: [
        "گزارش‌های روزانه، هفتگی و ماهیانه خودکار",
        "قالب‌های آماده و قابل سفارشی‌سازی",
        "خروجی PDF و Excel با یک کلیک",
        "گزارش‌های تصویری با نمودارهای حرفه‌ای",
        "مقایسه عملکرد با اهداف تعیین شده",
        "اشتراک‌گذاری آسان با تیم و مدیریت",
      ],
      badge: null,
      badgeColor: "",
    },
    {
      id: "api",
      title: "API یکپارچه‌سازی",
      description: "اتصال آسان با سیستم‌های موجود و دستگاه‌های هوشمند",
      icon: Code2,
      features: [
        "RESTful API با مستندات کامل",
        "پشتیبانی از پروتکل‌های IoT استاندارد",
        "یکپارچه‌سازی با سیستم‌های ERP و BMS",
        "Webhooks برای اعلان‌های real-time",
        "SDK برای زبان‌های مختلف برنامه‌نویسی",
        "محیط sandbox برای توسعه و تست",
      ],
      badge: "سازمانی",
      badgeColor: "bg-purple-500",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "کاهش ۳۰٪ مصرف انرژی",
      description: "با بهینه‌سازی هوشمند، مصرف انرژی خود را تا ۳۰ درصد کاهش دهید",
    },
    {
      icon: Shield,
      title: "امنیت داده‌ها",
      description: "رمزنگاری سطح بانکی و ذخیره‌سازی امن در سرورهای داخلی",
    },
    {
      icon: TrendingUp,
      title: "بازگشت سرمایه سریع",
      description: "متوسط بازگشت سرمایه در کمتر از ۸ ماه",
    },
    {
      icon: Users,
      title: "پشتیبانی ۲۴/۷",
      description: "تیم پشتیبانی فنی ما همیشه در کنار شما هستند",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EnergyOptiFlow</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/products" className="text-blue-600 font-medium">
                محصولات
              </Link>
              <Link href="/company" className="text-gray-600 hover:text-gray-900 transition-colors">
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
            محصولات و راهکارها
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            راهکارهای جامع مدیریت هوشمند انرژی
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-pretty">
            با محصولات حرفه‌ای EnergyOptiFlow، مصرف انرژی خود را بهینه کنید، هزینه‌ها را کاهش دهید و به اهداف توسعه پایدار
            دست یابید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              درخواست دمو رایگان
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent">
              مشاوره با کارشناسان
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">محصولات ما</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مجموعه کاملی از ابزارهای هوشمند برای مدیریت، تحلیل و بهینه‌سازی مصرف انرژی
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => {
              const Icon = product.icon
              return (
                <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      {product.badge && <Badge className={product.badgeColor + " text-white"}>{product.badge}</Badge>}
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-transparent" variant="outline">
                      اطلاعات بیشتر
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">چرا EnergyOptiFlow؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">مزایای استفاده از راهکارهای ما برای کسب‌وکار شما</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-balance">
            آماده‌اید مصرف انرژی خود را بهینه کنید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">با تیم ما تماس بگیرید و مشاوره رایگان دریافت کنید</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              شروع رایگان ۳۰ روزه
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
            >
              تماس با فروش
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; ۱۴۰۳ EnergyOptiFlow. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  )
}
