import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle, Zap, ShoppingCart } from 'lucide-react';

const Hero = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white rounded-full opacity-15 animate-bounce-slow delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-cairo font-black text-white leading-[1.3] lg:leading-[1.5] pt-[22px]">
                رفيقك اليومي لنمط حياة أكثر نشاطاً وتوازناً
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-cairo font-medium">
                تركيبة طبيعية متكاملة تجمع بين الجارسينيا، القهوة الخضراء، والـ L-Carnitine لدعم أهدافك الصحية
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-300 fill-current" />
                  <Star className="w-6 h-6 text-yellow-300 fill-current" />
                  <Star className="w-6 h-6 text-yellow-300 fill-current" />
                  <Star className="w-6 h-6 text-yellow-300 fill-current" />
                  <Star className="w-6 h-6 text-yellow-300 fill-current" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-white/80 text-lg font-cairo line-through">
                    السعر العادي: ٢٤٠ ريال
                  </p>
                  <div className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-cairo font-black text-3xl">
                    عرض خاص: ١٢٠ ريال فقط!
                  </div>
                  <p className="text-yellow-200 font-cairo font-semibold">
                    وفر ١٢٠ ريال - خصم ٥٠٪
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-6 h-6 text-yellow-300" />
                <span className="font-cairo">طبيعي ١٠٠٪</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-6 h-6 text-yellow-300" />
                <span className="font-cairo">جودة عالية</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="w-6 h-6 text-yellow-300" />
                <span className="font-cairo">آمن تماماً</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToOrder}
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-cairo font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart className="w-6 h-6 ml-2" />
                  اطلب العرض الآن
                </Button>
                <Button 
                  onClick={scrollToOrder}
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-green-600 font-cairo font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="w-6 h-6 ml-2" />
                  أضف للسلة
                </Button>
              </div>
              <p className="text-white/80 text-sm font-cairo">
                ⏳ العرض لفترة محدودة - لا تفوت الفرصة!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
