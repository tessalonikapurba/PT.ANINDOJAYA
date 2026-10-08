import { useHome } from './useHome';

const WhatWeDo = () => {
  const { isId } = useHome();

  const capabilities = isId
    ? [
        {
          number: '01',
          title: 'Bahan Baku Farmasi',
          text: 'Importir dan distributor bahan baku farmasi untuk kebutuhan industri di Indonesia.',
        },
        {
          number: '02',
          title: 'Bahan Pangan & Perisa',
          text: 'Bahan pangan dan perisa untuk mendukung kebutuhan industri makanan dan minuman.',
        },
        {
          number: '03',
          title: 'Natural Sweetener',
          text: 'Pemanis berbasis stevia melalui AIJS Food Industry.',
        },
      ]
    : [
        {
          number: '01',
          title: 'Pharmaceutical Ingredients',
          text: 'Importer and distributor of pharmaceutical raw materials for industries across Indonesia.',
        },
        {
          number: '02',
          title: 'Food Ingredients & Flavors',
          text: 'Food ingredients and flavors supporting food and beverage industry requirements.',
        },
        {
          number: '03',
          title: 'Natural Sweetener',
          text: 'Stevia-based sweetener through AIJS Food Industry.',
        },
      ];

  return (
    <section
      id="about"
      className="bg-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">
            <p className="eyebrow">
              {isId ? 'Apa yang Kami Lakukan' : 'What we do'}
            </p>

            <h2 className="h-section mt-4 max-w-[520px]">
              {isId
                ? 'Mitra bahan baku untuk industri farmasi dan pangan'
                : 'Your ingredient partner for pharmaceutical and food industries'}
            </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">

            {/* Main Statement */}
            <p className="text-xl font-medium leading-snug text-[#2a1259] lg:text-2xl">
              {isId
                ? 'Kami menghubungkan produsen bahan baku global yang tepercaya dengan bisnis di seluruh Indonesia, menyediakan produk yang andal, pengetahuan industri, dan kemitraan jangka panjang.'
                : 'We connect trusted global ingredient manufacturers with businesses across Indonesia, providing reliable products, industry knowledge, and long-term partnership.'}
            </p>

            {/* Supporting Paragraph */}
            <p className="lead mt-5 max-w-[680px]">
              {isId
                ? 'PT. Anindojaya Swakarsa mengkhususkan diri sebagai importir dan distributor bahan baku farmasi, dengan keahlian yang meluas ke bahan pangan, perisa, dan pemanis alami.'
                : 'PT. Anindojaya Swakarsa specializes as an importer and distributor of pharmaceutical raw materials, with expertise extending to food ingredients, flavors, and natural sweeteners.'}
            </p>

            {/* Capabilities */}
            <div className="mt-8 border-t border-[#dcd8e3]">
              {capabilities.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[44px_1fr] gap-4 border-b border-[#dcd8e3] py-4 sm:grid-cols-[52px_1fr]"
                >
                  <span className="pt-0.5 text-sm font-bold tracking-[0.12em] text-[#8a6d00]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-base font-bold uppercase leading-tight tracking-[0.01em] text-[#2a1259]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 max-w-[620px] text-sm leading-6 text-[#5f5c6b]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;