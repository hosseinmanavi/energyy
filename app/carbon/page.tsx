import CarbonCalculator from '@/components/CarbonCalculator';

export default function Carbon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <CarbonCalculator />
        
        {/* اطلاعات تکمیلی */}
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            درباره محاسبات
          </h2>
          <p className="text-gray-600 mb-4">
            این ماشین‌حساب بر اساس داده‌های استاندارد سازمان‌های بین‌المللی مانند 
            IPCC و EPA طراحی شده است. ضرایب انتشار به‌طور منظم به‌روزرسانی می‌شوند.
          </p>
          <div className="text-sm text-gray-500">
            <p>منابع مورد استفاده:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>آژانس حفاظت محیط زیست آمریکا (EPA)</li>
              <li>پنل بین‌المللی تغییرات آب‌وهوایی (IPCC)</li>
              <li>داده‌های صنعت انرژی جهانی</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}