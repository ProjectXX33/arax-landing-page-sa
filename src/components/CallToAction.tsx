
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, ShoppingCart, Clock, Gift } from 'lucide-react';

const CallToAction = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+966550147889';
    const message = encodeURIComponent('مرحبا، أريد الاستفسار عن شيتو أراكس');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-chito-red via-red-600 to-orange-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full opacity-5 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Headline */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-cairo font-black text-white leading-tight">
              احصل على شيتو أراكس
              <span className="block text-yellow-300">الآن!</span>
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 font-cairo">
              عرض خاص لفترة محدودة - لا تفوت هذه الفرصة الذهبية
            </p>
          </div>

          {/* Offer Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Gift className="w-8 h-8 text-yellow-300" />
                  <span className="text-2xl font-cairo font-bold text-yellow-300">عرض خاص</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-yellow-400 text-black px-6 py-4 rounded-2xl">
                    <p className="text-2xl lg:text-3xl font-cairo font-black">
                      خصم ٥٠٪
                    </p>
                    <p className="text-lg font-cairo">
                      بدلاً من ٢٤٠ ريال
                    </p>
                  </div>
                  <div className="bg-green-500 text-white px-6 py-4 rounded-2xl">
                    <p className="text-3xl lg:text-4xl font-cairo font-black">
                      ١٢٠ ريال فقط
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-6 h-6 text-yellow-300" />
                  <span className="font-cairo text-lg">العرض لفترة محدودة</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <ShoppingCart className="w-6 h-6 text-yellow-300" />
                  <span className="font-cairo text-lg">توصيل مجاني</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Phone className="w-6 h-6 text-yellow-300" />
                  <span className="font-cairo text-lg">دعم عملاء ٢٤/٧</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToOrder}
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-cairo font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <ShoppingCart className="w-6 h-6 ml-2" />
                اطلب الآن - خصم ٥٠٪
              </Button>
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                variant="outline"
                className="border-2 border-white text-black bg-white hover:bg-white hover:text-chito-red font-cairo font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300"
              >
                <Phone className="w-6 h-6 ml-2" />
                اتصل بنا الآن
              </Button>
            </div>
            
            <div className="bg-yellow-400/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30">
              <p className="text-yellow-200 font-cairo text-lg">
                ⚡ سارع بالطلب - العرض محدود لأول ١٠٠ عميل فقط!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
