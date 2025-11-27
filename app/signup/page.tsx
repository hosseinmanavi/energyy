

export default function Signup() {


    return(
        <div>
            <br /><br /><br />
            <div className="p-7 rounded-2xl bg-white border-2 shadow-2xl w-2xs m-auto">
                <div className="flex-wrap text-center">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" placeholder="نام خود را وارد کنید" className="border-2 p-1 border-white focus:border-blue-600 focus:bg-white/10 focus:text-blue-600 rounded transition bg-blue-600 text-white focus:-translate-y-1"/>
                    <br /><br /><br />
                    <label htmlFor="number"></label>
                    <input type="number" id="number" placeholder="شماره خود را وارد کنید" className="border-2 p-1 border-white focus:border-blue-600 focus:bg-white/10 focus:text-blue-600 rounded transition bg-blue-600 text-white focus:-translate-y-1"/>
                        <br /><br />
                        <button className="bg-green-500 p-1 text-white transition hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-500 rounded hover:cursor-pointer">
                            ثبت نام
                        </button>
                </div>
            </div>
        </div>
    );
} 