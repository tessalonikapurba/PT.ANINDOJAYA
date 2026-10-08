import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CorporateHome from '@/components/CorporateHome';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-[#2b2a33]">
      <Navigation />
      <div className="pt-[68px]">
        <CorporateHome />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
