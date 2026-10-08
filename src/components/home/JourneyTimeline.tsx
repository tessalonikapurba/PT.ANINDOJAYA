import { useState } from 'react';
import { timeline } from '@/data/homeContent';
import { useHome } from './useHome';

const JourneyTimeline = () => {
  const { isId, pick } = useHome();
  // milestone currently lit; it stays lit after the mouse leaves
  const [active, setActive] = useState(-1);

  return (
    <section id="journey" className="bg-[#faf9f7] py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <p className="eyebrow">{isId ? 'Perjalanan Kami' : 'Our journey'}</p>
        <h2 className="h-section mt-4 max-w-[720px]">
          {isId ? 'Sejak 1981 hingga hari ini' : 'From 1981 to today'}
        </h2>
        <p className="mt-4 text-sm text-[#5f5c6b]">
          {isId ? 'Arahkan kursor ke setiap tahun untuk menyorot perjalanannya.' : 'Move your cursor across the years to follow the journey.'}
        </p>
        <ol className="journey mt-12 lg:mt-16">
          {timeline.map((m, i) => (
            <li key={m.year}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`journey-item ${i < active ? 'passed' : ''} ${i === active ? 'active' : ''}`}
              >
                <span className="journey-dot" aria-hidden />
                {i < timeline.length - 1 && <span className="journey-seg" aria-hidden />}
                <span className="journey-year block text-3xl font-bold tracking-[-0.02em] text-[#2a1259]/60 lg:text-4xl">
                  {m.year === 'TODAY' ? (isId ? 'HARI INI' : 'TODAY') : m.year}
                </span>
                <span className="journey-text mt-3 block max-w-[260px] text-[15px] leading-6 text-[#5f5c6b]">{pick(m.text)}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default JourneyTimeline;