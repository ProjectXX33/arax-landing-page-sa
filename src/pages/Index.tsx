
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductDetails from '@/components/ProductDetails';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
      <Hero />
      <Features />
      <ProductDetails />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
