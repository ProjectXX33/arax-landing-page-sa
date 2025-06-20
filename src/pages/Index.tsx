
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BenefitsSection from '@/components/BenefitsSection';
import IngredientsSection from '@/components/IngredientsSection';
import ProductDetails from '@/components/ProductDetails';
import OrderForm from '@/components/OrderForm';
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
      <Hero />
      <Features />
      <BenefitsSection />
      <IngredientsSection />
      <ProductDetails />
      <OrderForm />
      <FAQSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
