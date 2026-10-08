import { ArrowRight } from 'lucide-react';
import { images, productCategories } from '@/data/homeContent';
import { useHome } from './useHome';

const categoryImages = [
  images.pharmaProducts,
  images.foodIngredients,
  images.steviaSweetener,
];

const ProductCategories = () => {
  const { isId, pick, goTo } = useHome();

  return (
    <section id="products" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">
              {isId ? 'Produk Kami' : 'Our products'}
            </p>

            <h2 className="h-section mt-4 max-w-[640px]">
              {isId
                ? 'Temukan produk berdasarkan kategori'
                : 'Discover products by category'}
            </h2>
          </div>

          <button
            onClick={() => goTo('pharmaceuticals')}
            className="btn btn-gold w-fit"
          >
            {isId ? 'Lihat Katalog Produk' : 'View product catalog'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Product Cards */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3">
          {productCategories.map((c, i) => (
            <article
              key={c.key}
              className="flex h-full flex-col overflow-hidden border border-[#e5e1ea] bg-white"
            >
              {/* Image */}
              <div className="h-[220px] w-full overflow-hidden bg-[#f3f2f5]">
                <img
                  src={categoryImages[i]}
                  alt={pick(c.title)}
                  className="h-full w-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 lg:p-7">

                {/* Number */}
                <p className="text-sm font-bold tracking-[0.18em] text-[#8a6d00]">
                  0{i + 1}
                </p>

                {/* Title */}
                <h3 className="mt-3 min-h-[58px] text-2xl font-bold uppercase leading-tight tracking-[-0.01em] text-[#2a1259]">
                  {pick(c.title)}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[84px] text-base leading-7 text-[#5f5c6b]">
                  {pick(c.text)}
                </p>

                {/* Examples */}
                <div className="mt-5 min-h-[48px]">
                  {c.examples.length > 0 && (
                    <p className="text-sm leading-6 text-[#2b2a33]">
                      <span className="font-semibold">
                        {isId ? 'Contoh: ' : 'Examples: '}
                      </span>
                      {c.examples.join(' · ')}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={() => goTo(c.to)}
                  className="arrow-link mt-auto w-fit pt-7"
                >
                  {isId ? 'Lihat produk' : 'View products'}
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;