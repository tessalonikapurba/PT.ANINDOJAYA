import { ArrowRight } from 'lucide-react';
import { images } from '@/data/homeContent';
import { useHome } from './useHome';

const HomeHero = () => {
  const { isId, scrollTo } = useHome();
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#2a1259] text-white">
      <img src={images.hero} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom" />
      {/* single functional scrim for text legibility */}
      <div className="absolute inset-0 -z-10 bg-[#2a1259]/70 lg:bg-gradient-to-r lg:from-[#2a1259]/95 lg:via-[#2a1259]/70 lg:to-[#2a1259]/10" />
      <div className="mx-auto flex min-h-[560px] max-w-[1280px] items-center px-5 pb-16 pt-28 lg:min-h-[680px] lg:px-8">
        <div className="max-w-[760px]">
          <p className="eyebrow on-dark">PT. Anindojaya Swakarsa</p>
          <h1 className="mt-5 text-[2.5rem] font-bold uppercase leading-[1.03] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            {isId ? 'Bahan baku yang menggerakkan industri' : 'Ingredients that power industries'}
          </h1>
          <p className="mt-6 max-w-[560px] text-base leading-7 text-white/85 lg:text-lg">
            {isId
              ? 'Menghubungkan mitra bahan baku terpercaya dengan industri farmasi dan pangan di seluruh Indonesia.'
              : 'Connecting trusted ingredient partners with pharmaceutical and food industries across Indonesia.'}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollTo('#products')} className="btn btn-gold">
              {isId ? 'Jelajahi Produk Kami' : 'Explore our products'} <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn btn-outline-light">
              {isId ? 'Hubungi Kami' : 'Inquire with us'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
