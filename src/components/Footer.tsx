import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/ad8a3ade-7d08-4bcc-817c-868d66cde4f0.png" 
              alt="نور القمر التجارية" 
              className="h-16 w-auto"
            />
            <p className="text-gray-300 font-cairo leading-relaxed">
              شركة نور القمر التجارية - رائدة في مجال المنتجات الطبيعية والصحية منذ عام ٢٠٠٩
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-cairo font-bold">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-chito-gold" />
                <span className="font-cairo" dir="ltr">+966501234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-chito-gold" />
                <span className="font-cairo">info@nooralqamar.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-chito-gold" />
                <span className="font-cairo">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-cairo font-bold">ساعات العمل</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-chito-gold" />
                <div className="font-cairo">
                  <p>السبت - الخميس</p>
                  <p className="text-gray-300">٩:٠٠ ص - ٦:٠٠ م</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-cairo font-bold">شيتو أراكس</h3>
            <div className="space-y-3 text-gray-300 font-cairo">
              <p>✓ منتج طبيعي ١٠٠٪</p>
              <p>✓ نتائج مضمونة</p>
              <p>✓ آمن وفعال</p>
              <p>✓ توصيل سريع</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-cairo">
            © ٢٠٢٤ شركة نور القمر التجارية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
