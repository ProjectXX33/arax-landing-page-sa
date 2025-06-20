
import React from 'react';
import { Leaf, Zap, Shield, Heart, Target, CheckCircle } from 'lucide-react';

const IngredientsSection = () => {
  const ingredients = [
    {
      name: 'إل-كارنيتين',
      icon: Zap,
      description: 'يحفز حرق الدهون وتحويلها إلى طاقة، مع تحسين الأداء الرياضي وتقليل الإجهاد العضلي، مما يعزز الالتزام بالتمارين اليومية.',
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'القهوة الخضراء',
      icon: Leaf,
      description: 'غنية بحمض الكلوروجينيك الذي يعزز التمثيل الغذائي، يقلل امتصاص الكربوهيدرات، ويمنح شعوراً بالشبع، مما يساعد على تقليل الدهون المتراكمة في منطقة البطن.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      name: 'شيتوزان',
      icon: Shield,
      description: 'يعمل كألياف طبيعية تقلل امتصاص الدهون، يدعم صحة القلب من خلال خفض الكوليسترول، ويساعد في استقرار مستويات السكر لتقليل الرغبة في السكريات.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'الكروم',
      icon: Target,
      description: 'ينظم مستويات السكر في الدم، يقلل الجوع المرتبط بانخفاض السكر، ويُعد مثالياً لمن يعانون من مقاومة الإنسولين.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'سبيرولينا بودر',
      icon: Heart,
      description: 'غنية بالبروتين النباتي، تقلل الشهية وتدعم التحكم في الطعام، كما تقلل الدهون الحشوية وتعزز المناعة والطاقة اليومية.',
      color: 'from-teal-400 to-green-500'
    },
    {
      name: 'جارسينيا كامبوجيا',
      icon: CheckCircle,
      description: 'تحتوي على حمض HCA الذي يثبط إنتاج الدهون، يقلل الشهية، ويحسن استجابة الأنسولين، مما يساعد في تقليل تخزين الدهون.',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cairo font-black text-gray-800 mb-6">
            المكونات الفعالة في شيتو أراكس
          </h2>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
            تركيبة علمية متطورة من أفضل المكونات الطبيعية لفقدان الوزن بأمان وفعالية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center space-y-6">
                  <div className={`bg-gradient-to-r ${ingredient.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-cairo font-bold text-gray-800">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-600 font-cairo leading-relaxed text-sm">
                    {ingredient.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl p-8 lg:p-12 border border-green-200">
          <div className="text-center space-y-6">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto shadow-lg">
              <Leaf className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-cairo font-black text-gray-800">
              جودة عالمية مضمونة
            </h3>
            <p className="text-lg font-cairo text-gray-700 max-w-2xl mx-auto leading-relaxed">
              منتج مصنوع في إيطاليا بأعلى معايير الجودة العالمية، مع اختبارات صارمة لضمان السلامة والفعالية. 
              جميع المكونات طبيعية ومدروسة علمياً لتحقيق أفضل النتائج.
            </p>
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="font-cairo font-bold text-green-600">✓ مصنوع في إيطاليا</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="font-cairo font-bold text-green-600">✓ معايير جودة عالمية</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-md">
                <span className="font-cairo font-bold text-green-600">✓ مكونات طبيعية 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
