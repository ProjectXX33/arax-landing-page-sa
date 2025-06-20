
import React from 'react';
import { Target, Zap, Heart, TrendingDown, Smile, Activity } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'فقدان الوزن الطبيعي',
      description: 'يدعم التخلص من الدهون بطريقة آمنة بفضل مكوناته الطبيعية',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      icon: Target,
      title: 'تقليل الشهية',
      description: 'يساعد على التحكم في الرغبة بتناول الطعام وتقليل استهلاك السعرات الحرارية',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'تعزيز الطاقة اليومية',
      description: 'يرفع مستويات الطاقة والمزاج لتبقى نشيطاً طوال اليوم',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Activity,
      title: 'تحسين استجابة الأنسولين',
      description: 'يساعد على تنظيم مستوى الجلوكوز في الدم وتقليل مقاومة الإنسولين',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  const reasons = [
    'طبيعي وآمن: مكونات فعّالة تدعم التخلص من الوزن الزائد دون أي أضرار',
    'تحسين التمثيل الغذائي: يعزز حرق الدهون الطبيعية ويقلل تراكمها في الجسم',
    'تحكم في الشهية: يساعد في تقليل الرغبة في تناول السكريات والكربوهيدرات',
    'تحسين المزاج: يحتوي على سبيرولينا بودر التي تدعم الطاقة اليومية وتحسن الحالة المزاجية',
    'جودة عالمية: منتج مصنوع في إيطاليا بأعلى معايير الجودة لضمان السلامة والفعالية',
    'مناسب للجميع: مصمم للرجال والنساء البالغين (فوق 18 عاماً) ليكون جزءاً من أسلوب حياة صحي'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cairo font-black text-gray-800 mb-6">
            فوائد شيتو أراكس للتخسيس وفقدان الدهون
          </h2>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
            اكتشف كيف يمكن لشيتو أراكس أن يغير حياتك ويساعدك في تحقيق أهدافك الصحية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center space-y-6">
                  <div className={`bg-gradient-to-r ${benefit.gradient} w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-cairo font-bold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-cairo leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border border-green-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-cairo font-black text-gray-800 mb-6">
              لماذا تختار شيتو أراكس؟
            </h3>
            <p className="text-lg text-gray-600 font-cairo">
              إليك الأسباب التي تجعل شيتو أراكس خيارك المثالي لفقدان الوزن
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">●</span>
                </div>
                <p className="font-cairo text-gray-700 leading-relaxed">
                  {reason}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-500" />
                <Smile className="w-8 h-8 text-yellow-500" />
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-2xl font-cairo font-bold text-gray-800 mb-4">
                ابدأ رحلتك مع شيتو أراكس الآن!
              </h4>
              <p className="text-gray-600 font-cairo leading-relaxed">
                لا تدع الوزن الزائد يمنعك من تحقيق أهدافك الصحية. مع شيتو أراكس، ستتمكن من فقدان الوزن بشكل طبيعي وآمن، 
                مع تعزيز طاقتك ومزاجك طوال اليوم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
