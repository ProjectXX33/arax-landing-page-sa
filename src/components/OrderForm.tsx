
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Phone, MapPin, User, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    quantity: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "تم إرسال طلبكم بنجاح! ✅",
        description: "سيتم التواصل معكم خلال 24 ساعة لتأكيد الطلب",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        city: '',
        address: '',
        quantity: 1
      });
    }, 2000);
  };

  const totalPrice = formData.quantity === 1 ? 480 : 240 * Math.ceil(formData.quantity / 2);
  const savings = formData.quantity === 1 ? 0 : (480 * formData.quantity) - totalPrice;

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-cairo font-black text-gray-800 mb-6">
              اطلب شيتو أراكس الآن
            </h2>
            <p className="text-xl text-gray-600 font-cairo">
              احصل على عرض 1+1 مجاناً واستمتع بتوصيل مجاني لجميع أنحاء المملكة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Order Summary */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-cairo text-center">
                  <Package className="w-6 h-6 inline-block ml-2" />
                  ملخص الطلب
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-cairo text-lg">المنتج</span>
                    <span className="font-cairo font-bold">شيتو أراكس</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <span className="font-cairo text-lg">الكمية</span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                        className="w-8 h-8 rounded-full bg-red-500 text-white font-bold hover:bg-red-600"
                      >
                        -
                      </button>
                      <span className="font-cairo font-bold text-xl w-8 text-center">{formData.quantity}</span>
                      <button 
                        onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                        className="w-8 h-8 rounded-full bg-green-500 text-white font-bold hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {formData.quantity > 1 && (
                    <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                      <p className="text-green-800 font-cairo font-bold text-center">
                        🎉 عرض خاص: احصل على خصم {savings} ريال!
                      </p>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-2xl font-cairo font-black">
                      <span>المجموع الكلي</span>
                      <span className="text-green-600">{totalPrice} ريال</span>
                    </div>
                    <p className="text-sm text-gray-600 font-cairo mt-2 text-center">
                      شامل التوصيل المجاني
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-200">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-cairo text-center">
                  <ShoppingCart className="w-6 h-6 inline-block ml-2" />
                  بيانات الطلب
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-cairo text-right block">
                      <User className="w-4 h-4 inline-block ml-2" />
                      الاسم الكامل *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="أدخل اسمك الكامل"
                      className="font-cairo text-right"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-cairo text-right block">
                      <Phone className="w-4 h-4 inline-block ml-2" />
                      رقم الجوال *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="05xxxxxxxx"
                      className="font-cairo text-right"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="font-cairo text-right block">
                      <MapPin className="w-4 h-4 inline-block ml-2" />
                      المدينة *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="أدخل اسم المدينة"
                      className="font-cairo text-right"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="font-cairo text-right block">
                      <MapPin className="w-4 h-4 inline-block ml-2" />
                      العنوان التفصيلي *
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="الحي، الشارع، رقم المبنى"
                      className="font-cairo text-right"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-cairo font-bold text-xl py-6 rounded-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        جاري إرسال الطلب...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <ShoppingCart className="w-6 h-6" />
                        تأكيد الطلب - {totalPrice} ريال
                      </span>
                    )}
                  </Button>

                  <div className="text-center space-y-2 text-sm text-gray-600 font-cairo">
                    <p>✅ توصيل مجاني لجميع أنحاء المملكة</p>
                    <p>✅ الدفع عند الاستلام</p>
                    <p>✅ ضمان استرداد الأموال</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
