
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, Activity, AlertCircle, Calendar } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      icon: Shield,
      question: 'هل شيتو أراكس آمن؟',
      answer: 'نعم، المنتج مصنوع من مكونات طبيعية مدروسة علمياً وهو آمن عند الالتزام بالتعليمات الموصى بها. جميع المكونات طبيعية 100% ومصنوع في إيطاليا وفقاً لأعلى معايير الجودة العالمية.'
    },
    {
      icon: AlertCircle,
      question: 'هل هناك آثار جانبية؟',
      answer: 'لا توجد آثار جانبية شائعة عند استخدام شيتو أراكس وفقاً للتعليمات. ومع ذلك، إذا شعرت بأي تغيرات غير مريحة، توقف عن استخدام المنتج واستشر طبيبك فوراً.'
    },
    {
      icon: Clock,
      question: 'كم من الوقت يستغرق لرؤية النتائج؟',
      answer: 'مع الاستخدام المنتظم والنظام الغذائي الصحي، يمكن ملاحظة النتائج الأولى خلال 4-6 أسابيع. للحصول على أفضل النتائج، يُنصح بالاستمرار لمدة 3 أشهر على الأقل مع نمط حياة نشط.'
    },
    {
      icon: Activity,
      question: 'هل أحتاج إلى ممارسة التمارين مع استخدام شيتو أراكس؟',
      answer: 'لا يُشترط ممارسة التمارين الشاقة، لكن دمج المنتج مع نشاط بدني بسيط مثل المشي لمدة 30 دقيقة يومياً سيُحسن النتائج بشكل كبير ويسرع عملية فقدان الوزن.'
    },
    {
      icon: Calendar,
      question: 'ماذا يحدث إذا نسيت جرعة؟',
      answer: 'إذا نسيت جرعة، يمكنك تناول الجرعة التالية في وقتها المعتاد. لا تضاعف الجرعات أبداً. الانتظام في تناول المنتج مهم للحصول على أفضل النتائج.'
    },
    {
      icon: HelpCircle,
      question: 'كيف أستخدم شيتو أراكس بشكل صحيح؟',
      answer: 'تناول كبسولتين يومياً مع كوب من الماء، يُفضل قبل الوجبات الرئيسية بـ 30 دقيقة. للحصول على أفضل النتائج، استخدم المنتج مع نظام غذائي متوازن ونمط حياة نشط.'
    }
  ];

  const usageInfo = {
    dosage: 'كبسولتين يومياً مع كوب ماء',
    timing: 'للحصول على أفضل النتائج، يُستخدم مع نظام غذائي متوازن ونمط حياة نشط',
    package: 'العبوة تحتوي على 60 كبسولة ما يكفي لشهر كامل من الاستخدام',
    storage: 'يُحفظ في مكان جاف وبارد بدرجة حرارة لا تزيد عن 25 درجة مئوية',
    safety: 'يُحفظ بعيداً عن متناول الأطفال'
  };

  const warnings = [
    'شيتو أراكس مكمل غذائي لا يُستخدم كبديل لنظام غذائي صحي ومتوازن',
    'يُنصح باستشارة الطبيب إذا كنت تعاني من أي حالات طبية أو تتناول أدوية',
    'لا يُنصح باستخدام شيتو أراكس في حالة الحمل والرضاعة إلا بعد استشارة طبية',
    'هذا المنتج مخصص للبالغين فوق 18 عاماً فقط'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Usage Instructions */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-cairo font-black text-gray-800 mb-6">
              طريقة الاستخدام والتخزين
            </h2>
            <p className="text-xl text-gray-600 font-cairo">
              اتبع هذه التعليمات للحصول على أفضل النتائج من شيتو أراكس
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 mb-16 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(usageInfo).map(([key, value], index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-cairo text-gray-700 leading-relaxed">
                      <span className="font-bold text-blue-600">
                        {key === 'dosage' && 'الجرعة: '}
                        {key === 'timing' && 'التوقيت: '}
                        {key === 'package' && 'المحتوى: '}
                        {key === 'storage' && 'التخزين: '}
                        {key === 'safety' && 'السلامة: '}
                      </span>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-cairo font-black text-gray-800 mb-6">
              الأسئلة الشائعة
            </h3>
            <p className="text-lg text-gray-600 font-cairo">
              إليك أهم الأسئلة التي يطرحها عملاؤنا حول شيتو أراكس
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-cairo font-bold text-gray-800">
                        {faq.question}
                      </h4>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <div className="bg-gray-50 rounded-lg p-6 mr-16">
                        <p className="font-cairo text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Warnings Section */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12 border border-orange-200">
            <div className="text-center mb-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-cairo font-bold text-gray-800 mb-4">
                التحذيرات والاحتياطات المهمة
              </h3>
              <p className="text-gray-600 font-cairo">
                يرجى قراءة هذه التحذيرات بعناية قبل استخدام المنتج
              </p>
            </div>

            <div className="space-y-4">
              {warnings.map((warning, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-orange-100">
                  <div className="bg-orange-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">!</span>
                  </div>
                  <p className="font-cairo text-gray-700 leading-relaxed">
                    {warning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
