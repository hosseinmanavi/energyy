import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import tavan from "@/public/tavan nama.png"
import Image from "next/image";

export default function callus() {


    return (
        <div>
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <Image src={tavan} width={40} height={20} alt="icon" />

                            </div>
                            <span className="text-xl font-bold">توان نما</span>
                        </Link>
                       
                    </div>
                </div>
            </header>
            <div className=" text-center m-auto bg-white shadow-2xl rounded-2xl border-2 w-full md:w-52 md:min-w-lg p-9">
                <div className="flex flex-col ">
                    <h2 className="text-blue-600 text-2xl -translate-y-3">
                        تماس با ما
                    </h2>
                    <br />
                    <h1>
                        برای تماس با ما با شماره های ذیل تماس حاصل فرمایید:
                    </h1>
                    <br />
                    <a href="tel:021-554543233" className="text-2xl">021-554543233</a>
                    <br />
                    <a href="tel:0910-554543233" className="text-2xl">0910-554543233</a>
                    <br />
                    <h1>
                        شبکه های اجتماعی:
                    </h1>

                    <a href="#" className="text-2xl flex justify-center gap-1 align-middle items-center">
                        <FaInstagram className="text-pink-400" />
                        https://instagram.com
                    </a>
                    <br />

                    <a href="#" className="text-2xl flex justify-center gap-1 align-middle items-center">
                        <FaTelegramPlane className="text-blue-400" />
                        https://telegram.com
                    </a>


                </div>
                <br /><br /><br /><br /><br /><br />
                <div className="m-auto flex justify-center bg-blue-600 p-2 rounded-2xl shadow-2xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d413459.66029530123!2d50.8179053!3d35.9432124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dac435883aced%3A0xfba3bdb4ee91e341!2z2KfYs9iq2KfZhiDYp9mE2KjYsdiy2Iwg2KfbjNix2KfZhg!5e0!3m2!1sfa!2sfr!4v1764180256563!5m2!1sfa!2sfr" width="600" height="450" className="border-0 rounded-2xl" loading="lazy" ></iframe>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center text-slate-600 text-sm">
                    <p>© ۱۴۰۳ توان نما. تمامی حقوق محفوظ است.</p>
                </div>
            </footer>
        </div>

    )

}