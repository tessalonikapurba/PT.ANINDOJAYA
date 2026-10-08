import { strengths } from '@/data/homeContent';
import { useHome } from './useHome';

const WhyAnindojaya = () => {
  const { isId, pick } = useHome();
  return (
    <section id="why" className="bg-[#2a1259] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <p className="eyebrow on-dark">{isId ? 'Mengapa Anindojaya' : 'Why Anindojaya'}</p>
        <h2 className="mt-4 max-w-[760px] text-3xl font-bold uppercase leading-[1.08] tracking-[-0.015em] sm:text-4xl lg:text-5xl">
          {isId ? 'Dibangun di atas kepercayaan' : 'Built on trust'}
        </h2>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.key} className="border-t border-white/25 pt-6">
              <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-[#f4bd0a]">{pick(s.title)}</h3>
              <p className="mt-4 text-base leading-7 text-white/80">{pick(s.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAnindojaya;
