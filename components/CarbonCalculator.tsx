
'use client';
import { useState } from 'react';

const CarbonCalculator = () => {
   
   
  const [formData, setFormData] = useState({
    electricity:  "",
    gas: "",
    carMileage: "",
    carType: "petrol",
    flights: "",
    diet: String || "average",
  });

  const [result, setResult] = useState(null);

  // ضرایب استاندارد ردپای کربن (kg CO2e)
  const emissionFactors = {
    electricity: 0.5, // kg CO2 per kWh (میانگین جهانی)
    gas: 2.3, // kg CO2 per m³
    car: {
      petrol: 2.3, // kg CO2 per liter
      diesel: 2.7,
      hybrid: 1.8,
      electric: 0.4, // بستگی به منبع تولید برق دارد
    },
    flights: 0.25, // kg CO2 per km per passenger
    diet: {
      vegan: 2.9, // kg CO2 per day
      vegetarian: 3.8,
      average: 5.6,
      meatHeavy: 7.2,
    } as Record<string,number>
  };

  const calculateFootprint = () => {
    let total = 0;

    // محاسبه برق
    if (formData.electricity) {
      total += parseFloat(formData.electricity) * emissionFactors.electricity;
    }

    // محاسبه گاز
    if (formData.gas) {
      total += parseFloat(formData.gas) * emissionFactors.gas;
    }

    // محاسبه خودرو
    if (formData.carMileage) {
      total += parseFloat(formData.carMileage) * emissionFactors.car[formData.carType as any];
    }

    // محاسبه پرواز
    if (formData.flights) {
      total += parseFloat(formData.flights) * emissionFactors.flights;
    }

    // محاسبه رژیم غذایی (روزانه به سالانه)
    total += emissionFactors.diet[formData.diet] * 365;

    setResult({
      total: total.toFixed(2),
      monthly: (total / 12).toFixed(2),
      comparison: getComparison(total),
    });
  };

  const getComparison = (total) => {
    const treesNeeded = (total / 21.77).toFixed(1); // هر درخت سالانه 21.77 kg CO2 جذب می‌کند
    const equivalentCars = (total / 4600).toFixed(1); // میانگین تولید سالانه یک خودرو
    
    return {
      treesNeeded,
      equivalentCars,
    };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        ماشین حساب ردپای کربن
      </h1>

      <div className="space-y-6">
        {/* مصرف برق */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            مصرف برق ماهانه (kWh)
          </label>
          <input
            type="number"
            name="electricity"
            value={formData.electricity}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="مثلاً 250"
          />
        </div>

        {/* مصرف گاز */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            مصرف گاز ماهانه (m³)
          </label>
          <input
            type="number"
            name="gas"
            value={formData.gas}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="مثلاً 100"
          />
        </div>

        {/* خودرو */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              مسافت ماهانه خودرو (km)
            </label>
            <input
              type="number"
              name="carMileage"
              value={formData.carMileage}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder=" مثلا 800"
              />


          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              نوع خودرو
            </label>
            <select
              name="carType"
              value={formData.carType}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="petrol">بنزینی</option>
              <option value="diesel">دیزل</option>
              <option value="hybrid">هیبرید</option>
              <option value="electric">الکتریکی</option>
            </select>
          </div>
        </div>

        {/* پرواز */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            مجموع مسافت پروازهای سالانه (km)
          </label>
          <input
            type="number"
            name="flights"
            value={formData.flights}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="مثلاً 5000"
          />
        </div>

        {/* رژیم غذایی */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            رژیم غذایی
          </label>
          <select
            name="diet"
            value={formData.diet}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="vegan">وگان</option>
            <option value="vegetarian">گیاهخواری</option>
            <option value="average">متوسط</option>
            <option value="meatHeavy">پرمصرف گوشت</option>
          </select>
        </div>

        <button
          onClick={calculateFootprint}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
        >
          محاسبه ردپای کربن
        </button>

        {/* نمایش نتایج */}
        {result && (
          <div className="mt-8 p-6 bg-blue-600rounded-lg border border-blue-600">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
              نتایج محاسبه
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <p className="text-sm text-gray-600">مجموع سالانه</p>
                <p className="text-2xl font-bold text-blue-600">
                  {result.total} kg CO2
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <p className="text-sm text-gray-600">میانگین ماهانه</p>
                <p className="text-2xl font-bold text-blue-600">
                  {result.monthly} kg CO2
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-blue-600 mb-3">مقایسه‌ها:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• برای جبران این مقدار CO2 نیاز به کاشت {result.comparison.treesNeeded} درخت دارید</li>
                <li>• معادل {result.comparison.equivalentCars} خودروی معمولی در سال</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-700 mb-2">راه‌های کاهش ردپا:</h4>
              <ul className="text-sm text-yellow-600 space-y-1">


<li>• استفاده از لامپ‌های LED</li>
                <li>• کاهش مصرف گوشت قرمز</li>
                <li>• استفاده از حمل‌ونقل عمومی</li>
                <li>• کاشت درخت و گیاه</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;
