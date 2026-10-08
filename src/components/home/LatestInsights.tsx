import { ArrowRight } from 'lucide-react';
import { images, insights } from '@/data/homeContent';
import { useHome } from './useHome';

const LatestInsights = () => {
  const { isId, pick, goTo } = useHome();
  return (
    <section id="insights" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <p className="eyebrow">{isId ? 'Wawasan Terbaru' : 'Latest insights'}</p>
        <h2 className="h-section mt-4">{isId ? 'Berita & wawasan' : 'News & insights'}</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {insights.map((item) => (
            <article key={item.key} className="group">
              <button onClick={() => goTo(item.to)} className="img-zoom block w-full overflow-hidden bg-[#f3f2f5]" tabIndex={-1} aria-hidden>
                <img src={images[item.image]} alt="" className="aspect-[16/10] w-full object-cover" />
              </button>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#3b1a72]">
                {pick(item.category)}
                {item.date ? <span className="font-medium text-[#5f5c6b]"> &nbsp;|&nbsp; {pick(item.date)}</span> : null}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-[#2a1259]">{pick(item.title)}</h3>
              <button onClick={() => goTo(item.to)} className="arrow-link mt-5">
                {isId ? 'Selengkapnya' : 'Read more'} <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
