
import React from 'react';
import { CheckCircle, Package, Leaf, Award } from 'lucide-react';

const ProductDetails = () => {
  const ingredients = [
    'الكارنيتين',
    'الكالسيوم',
    'الصوديوم',
    'القهوة الخضراء',
    'الغارسينيا كامبوجيا',
    'الكروميوم'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-cairo font-black text-gray-800 mb-6">
                مكونات طبيعية
                <span className="block text-chito-green">١٠٠٪</span>
              </h2>
              <p className="text-xl text-gray-600 font-cairo leading-relaxed">
                شيتو أراكس يحتوي على أفضل المكونات الطبيعية المدروسة علمياً لفقدان الوزن الصحي والآمن
              </p>
            </div>

            {/* Ingredients */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
              <h3 className="text-2xl font-cairo font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-green-600" />
                المكونات الفعالة
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-cairo text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Specs */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <Package className="w-12 h-12 text-chito-red mx-auto mb-4" />
                <h4 className="font-cairo font-bold text-gray-800 mb-2">المحتوى</h4>
                <p className="font-cairo text-gray-600">٦٠ كبسولة</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-chito-red mx-auto mb-4" />
                <h4 className="font-cairo font-bold text-gray-800 mb-2">الجودة</h4>
                <p className="font-cairo text-gray-600">معتمد دولياً</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-12">
              <div className="text-center space-y-8">
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center mx-auto shadow-lg">
                  <Leaf className="w-16 h-16 text-green-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-cairo font-black text-gray-800 mb-4">
                    مكونات طبيعية
                  </h3>
                  <p className="text-lg font-cairo text-gray-600 leading-relaxed">
                    جميع المكونات مستخرجة من النباتات الطبيعية ومدروسة علمياً لضمان الفعالية والأمان
                  </p>
                </div>
                <div className="flex justify-center space-x-4 space-x-reverse">
                  <div className="bg-green-200 w-4 h-4 rounded-full animate-pulse"></div>
                  <div className="bg-green-300 w-4 h-4 rounded-full animate-pulse delay-200"></div>
                  <div className="bg-green-400 w-4 h-4 rounded-full animate-pulse delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
