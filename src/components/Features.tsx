
import React from 'react';
import { Shield, Zap, Heart, Users, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'نتائج سريعة',
      description: 'اشعر بالفرق خلال أسبوعين من الاستخدام المنتظم'
    },
    {
      icon: Shield,
      title: 'آمن وطبيعي',
      description: 'مكونات طبيعية ١٠٠٪ بدون آثار جانبية'
    },
    {
      icon: Heart,
      title: 'صحي ومفيد',
      description: 'يحسن الصحة العامة ويزيد مستويات الطاقة'
    },
    {
      icon: Users,
      title: 'موثوق به',
      description: 'آلاف العملاء الراضين حول العالم'
    },
    {
      icon: Clock,
      title: 'سهل الاستخدام',
      description: 'كبسولة واحدة يومياً لنتائج مذهلة'
    },
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'منتج معتمد ومصنوع وفقاً لأعلى المعايير'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cairo font-black text-gray-800 mb-6">
            لماذا شيتو أراكس؟
          </h2>
          <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto">
            اكتشف المميزات الفريدة التي تجعل شيتو أراكس الخيار الأمثل لفقدان الوزن الصحي والآمن
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="text-center">
                  <div className="bg-chito-red/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-chito-red" />
                  </div>
                  <h3 className="text-2xl font-cairo font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-cairo leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
