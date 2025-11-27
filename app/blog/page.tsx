import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

export default function blog() {

    const faqs = [
        {
            question: " روش ساده برای کاهش مصرف برق در خانه +",
            answer: 'با تغییر عادت‌های کوچک، می‌توان تا ۳۰٪ قبض برق را کاهش داد.  مثال : خاموش کردن دستگاه‌های بدون استفاده، استفاده از لامپ‌های کم‌مصرف، تنظیم بهینه دما، مدیریت ساعت استفاده از وسایل پرمصرف، نکات هوشمندانه برای یخچال و تلویزیون.'
        },
        {
            question: "چگونه مصرف آب خانگی را ۵۰٪ کاهش دهیم +",
            answer: 'راهنمای عملی برای کاهش مصرف آب بدون کاهش کیفیت زندگی. مثال: کاهش زمان دوش گرفتن، شستشوی ظروف با روش بهینه، استفاده از سردوش کم‌مصرف، توالت دو دکمه، آبیاری قطره‌ای باغچه.'
        },
        {
            question: "تاثیر عادت‌های کوچک بر قبض برق و آب +",
            answer: 'عادت‌های روزمره می‌توانند مصرف انرژی و هزینه‌ها را به شکل چشمگیری تغییر دهند. مثال: خاموش کردن لامپ‌ها، استفاده از تایمرها، مدیریت شستشوها و دوش گرفتن، جلوگیری از نشت آب و برق.'
        },
        {
            question: "راهنمای انتخاب وسایل کم‌مصرف +",
            answer: 'انتخاب صحیح یخچال، لباسشویی و سردوش می‌تواند تا ۴۰٪ صرفه‌جویی ایجاد کند. مثال: بررسی برچسب انرژی، مقایسه مصرف برق و آب، معرفی بهترین برندها و مدل‌ها، نکات خرید هوشمندانه.'
        },
        {
            question: "محاسبه مصرف آب خانگی +",
            answer: 'ابزارها و روش‌های ساده برای فهمیدن میزان مصرف واقعی آب. مثال: محاسبه آب مصرفی دوش، شستشوی لباسشویی، شستشوی ظروف و هزینه تقریبی، معرفی ابزارهای آنلاین.'
        },
        {
            question: "چگونه در شستشوی لباس و ظروف آب کمتری مصرف کنیم +",
            answer: 'تکنیک‌های عملی برای کاهش مصرف آب در کارهای روزانه خانه. مثال: پر کردن کامل ماشین لباسشویی، استفاده از برنامه‌های اقتصادی، جمع‌آوری آب شستشو برای استفاده مجدد، شستشوی ظروف به روش گروهی.'
        },
        {
            question: "تاثیر مصرف انرژی بر محیط زیست +",
            answer: 'هر خانه می‌تواند با کاهش مصرف انرژی، اثر مثبتی روی محیط زیست بگذارد. مثال:کاهش انتشار کربن، مقایسه مصرف معمول با مصرف بهینه، آمار و ارقام جهانی و محلی.'
        },
    ]



    return (
        <div>

            <div className="text-center bg-gray-100 rounded-2xl shadow-2xl w-auto m-auto">
                <h1 className="text-2xl text-blue-600 mb-9">
                    بلاگ
                </h1>
                <p className="text-gray-600">
                    با مقالات تخصصی و داده‌محور، به شما کمک می‌کنیم مصرف انرژی و آب را مدیریت کنید و هزینه‌های خانه را کاهش دهید.
                </p>

                <br /><br />
                <div className="blogs">
                    {/* <figure className="rounded-2xl bg-gray-300 w-2xs">
                        <figcaption>
                            <h1 className=" text-blue-500 transition hover:shadow-2xl">
                                روش ساده برای کاهش مصرف برق در خانه
                            </h1>
                            <p>
                                چکیده: با تغییر عادت‌های کوچک، می‌توان تا ۳۰٪ قبض برق را کاهش داد.
                                ایده محتوا: خاموش کردن دستگاه‌های بدون استفاده، استفاده از لامپ‌های کم‌مصرف، تنظیم بهینه دما، مدیریت ساعت استفاده از وسایل پرمصرف، نکات هوشمندانه برای یخچال و تلویزیون.
                            </p>
                        </figcaption>
                    </figure> */}

                    <Accordion type="single" collapsible className="w-full space-y-4 transition-all ">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="bg-gray-50 rounded-lg px-6 border-0">
                                <AccordionTrigger className="text-right hover:no-underline py-6">
                                    <span className="font-semibold text-gray-900 cursor-pointer">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                            </AccordionItem>

                        ))}
                    </Accordion>
                </div>
            </div>
            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center text-slate-600 text-sm">
                    <p>© ۱۴۰۳ توان نما. تمامی حقوق محفوظ است.</p>
                </div>
            </footer>
        </div>
       
    );
}