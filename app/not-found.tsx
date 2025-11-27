import Link from "next/link";

export default function NotFound() {
    return(

    <div>
        <div className="text-2xl text-black text-center bg-white rounded-2xl p-20 shadow-2xl">
        <h1 className="text-2xl text-black">
            متاسفیم مشکلی پیش آمد ...
            صفحه پیدا نشد
        </h1>
        <br /><br />
        <Link href="/" className="bg-blue-600 text-white rounded p-2"> بازگشت به صفحه اصلی </Link>
        </div>
    </div>
    );
}