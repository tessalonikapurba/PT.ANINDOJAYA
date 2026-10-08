import { ArrowRight } from 'lucide-react';
import { images, productCategories } from '@/data/homeContent';
import pharmaceuticalImage from '@/assets/pharmaceutical-lab.png';
import { useHome } from './useHome';

const divisions = [
  {
    cat: productCategories[0],
    image: pharmaceuticalImage,
    position: 'object-center',
  },
  {
    cat: productCategories[1],
    image: images.food,
    position: 'object-center',
  },
];

const BusinessDivisions = () => {
  const { isId, pick, goTo } = useHome();

  return (
    <section id="industries" className="bg-[#f3f2f5]">

      {/* Section Header */}
      <div className="mx-auto max-w-[1280px] px-5 pb-8 pt-16 lg:px-8 lg:pb-10 lg:pt-20">
        <p className="eyebrow">
          {isId ? 'Bisnis Kami' : 'Our business'}
        </p>

        <h2 className="h-section mt-4 max-w-[760px]">
          {isId
            ? 'Dua bidang usaha utama'
            : 'Two areas of business'}
        </h2>
      </div>

      {/* Business Cards */}
      <div className="mx-auto max-w-[1280px] px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="grid gap-6 lg:grid-cols-2">

          {divisions.map(({ cat, image, position }) => (
            <button
              key={cat.key}
              onClick={() => goTo(cat.to)}
              className="
                img-zoom
                group
                relative
                isolate
                min-h-[360px]
                overflow-hidden
                text-left
                text-white
                lg:min-h-[440px]
              "
            >
              {/* Background Image */}
              <img
                src={image}
                alt=""
                className={`
                  absolute
                  inset-0
                  -z-20
                  h-full
                  w-full
                  object-cover
                  ${position}
                `}
              />

              {/* Overlay */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2a1259]/95 via-[#2a1259]/55 to-[#2a1259]/10" />

              {/* Content */}
              <div className="flex min-h-[360px] flex-col justify-end p-6 sm:p-8 lg:min-h-[440px] lg:p-10">

                <h3 className="text-2xl font-bold uppercase leading-tight tracking-[-0.01em] lg:text-3xl">
                  {pick(cat.title)}
                </h3>

                <p className="mt-3 max-w-[460px] text-sm leading-6 text-white/85 lg:text-base lg:leading-7">
                  {pick(cat.text)}
                </p>

                <span className="arrow-link on-dark mt-6 w-fit">
                  {isId ? 'Jelajahi' : 'Explore'}
                  <ArrowRight className="h-4 w-4" />
                </span>

              </div>
            </button>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;