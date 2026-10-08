import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type FoodProduct = {
  id: string;
  code: string;
  name: string;
  applications: string[];
  referenceDosage?: string;
};

const Food = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const isId = lang === 'id';

  const foodProducts: FoodProduct[] = [
    {
      id: 'CK531',
      code: 'CK531',
      name: 'Corn Flavor',
      applications: ['Ice Cream', 'Beverage', 'Dairy Products', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK501A',
      code: 'CK501A',
      name: 'Orange Flavor',
      applications: ['Ice Cream', 'Dairy Products', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK505',
      code: 'CK505',
      name: 'Strawberry Flavor',
      applications: ['Ice Cream', 'Dairy Products', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK507',
      code: 'CK507',
      name: 'Melon Flavor',
      applications: ['Ice Cream', 'Candy', 'Jam', 'Baking'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK559',
      code: 'CK559',
      name: 'Durian Flavor',
      applications: ['Candy', 'Ice Cream', 'Jam'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK516',
      code: 'CK516',
      name: 'Blueberry Flavor',
      applications: ['Ice Cream', 'Candy', 'Beverage', 'Baking'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK618',
      code: 'CK618',
      name: 'Coconut Flavor',
      applications: ['Water', 'Cake', 'Ice Cream', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK521',
      code: 'CK521',
      name: 'Chocolate Flavor',
      applications: ['Ice Cream', 'Dairy Product', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK022',
      code: 'CK022',
      name: 'Coffee Flavor',
      applications: ['Candy', 'Beverage', 'Cold Drinks'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK023',
      code: 'CK023',
      name: 'Vanilla Flavor',
      applications: [
        'Cream Sandwich',
        'Candy',
        'Biscuit',
        'Cake',
        'Ice Cream',
      ],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK510',
      code: 'CK510',
      name: 'Lychee Flavor',
      applications: ['Ice Cream', 'Dairy Product', 'Candy', 'Jelly'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK319',
      code: 'CK319',
      name: 'Cola Flavor',
      applications: ['Ice Cream', 'Beverage', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK525M',
      code: 'CK525M',
      name: 'Yogurt Flavor',
      applications: ['Ice Cream', 'Beverage'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK525',
      code: 'CK525',
      name: 'Fresh Milk Flavor',
      applications: ['Ice Cream', 'Beverage', 'Dairy Products'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK525G',
      code: 'CK525G',
      name: 'Pure Milk Flavor',
      applications: ['Ice Cream', 'Beverage'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK526A',
      code: 'CK526A',
      name: 'Taro Flavor',
      applications: ['Ice Cream', 'Candy', 'Cake'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK527',
      code: 'CK527',
      name: 'Red Date Flavor',
      applications: ['Ice Cream', 'Dairy Products', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK530',
      code: 'CK530',
      name: 'Peanut Flavor',
      applications: [
        'Ice Products',
        'Peanut Milk',
        'Beverage',
        'Sandwich Fillings',
      ],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK532A',
      code: 'CK532A',
      name: 'Red Bean Flavor (Premium)',
      applications: ['Ice Cream', 'Filling', 'Baking'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK537A',
      code: 'CK537A',
      name: 'Dark Sugar Flavor',
      applications: ['Ice Cream', 'Dairy Product', 'Candy', 'Biscuit'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK546',
      code: 'CK546',
      name: 'Sweet Potato Flavor',
      applications: ['Ice Cream', 'Dairy Products', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK024',
      code: 'CK024',
      name: 'Cheese Flavor',
      applications: ['Baking'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK526',
      code: 'CK526',
      name: 'Milk Flavor',
      applications: ['Biscuit', 'Cake'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK647',
      code: 'CK647',
      name: 'Egg Oil Flavor',
      applications: ['Egg Yolks', 'Cake', 'Biscuit'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK612',
      code: 'CK612',
      name: 'Beef Flavor',
      applications: ['Baking', 'Halogen Products'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK047',
      code: 'CK047',
      name: 'Salted Egg Yolk Flavor',
      applications: ['Biscuit', 'Wafer', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK602',
      code: 'CK602',
      name: 'Ginger Flavor',
      applications: ['Dairy Products', 'Baking', 'Candy'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK218',
      code: 'CK218',
      name: 'Coconut Powder Flavor',
      applications: [
        'Baking',
        'Ice Cream',
        'Dairy Products',
        'Beverage',
      ],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK225',
      code: 'CK225',
      name: 'Milk Powder Flavor',
      applications: ['Biscuit', 'Cakes', 'Breads', 'Candies'],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK225A',
      code: 'CK225A',
      name: 'Fresh Milk Powder Flavor',
      applications: [
        'Baking',
        'Ice Cream',
        'Dairy Products',
        'Roasted Seeds and Nuts',
      ],
    },
    {
      id: 'CK225B',
      code: 'CK225B',
      name: 'Sweet Milk Powder Flavor',
      applications: [
        'Baking',
        'Ice Cream',
        'Dairy Products',
        'Roasted Seeds and Nuts',
      ],
    },
    {
      id: 'CK226',
      code: 'CK226',
      name: 'Taro Powder Flavor',
      applications: [
        'Biscuit',
        'Cakes',
        'Candies',
        'Brewing Drinks',
      ],
      referenceDosage: '0.1% - 0.5%',
    },
    {
      id: 'CK257',
      code: 'CK257',
      name: 'Potato Powder Flavor',
      applications: ['Snack Food'],
    },
    {
      id: 'CK247',
      code: 'CK247',
      name: 'Egg Milk Powder Flavor',
      applications: ['Cake', 'Biscuit', 'Ice Cream'],
    },
    {
      id: 'CK247A',
      code: 'CK247A',
      name: 'Cake Flavor',
      applications: ['Cake', 'Dairy Products', 'Bread'],
      referenceDosage: '0.1% - 0.5%',
    },
  ];

  const categories = [
    {
      number: '01',
      name: 'Fruit Flavors',
      count: 8,
    },
    {
      number: '02',
      name: 'Dairy Flavors',
      count: 7,
    },
    {
      number: '03',
      name: 'Beverage Flavors',
      count: 2,
    },
    {
      number: '04',
      name: 'Specialty Flavors',
      count: 6,
    },
    {
      number: '05',
      name: 'Baking Flavors',
      count: 4,
    },
    {
      number: '06',
      name: 'Asian Flavors',
      count: 3,
    },
    {
      number: '07',
      name: 'Powder Series Flavors',
      count: 8,
    },
  ];

  const qualityFeatures = [
    {
      number: '01',
      title: isId ? 'Grade Profesional' : 'Professional Grade',
      description: isId
        ? 'Pilihan perisa untuk mendukung kebutuhan produksi industri makanan dan minuman.'
        : 'Flavor ingredients designed to support food and beverage manufacturing requirements.',
    },
    {
      number: '02',
      title: isId ? 'Formula Konsentrat' : 'Concentrated Formula',
      description: isId
        ? 'Formula perisa dengan konsentrasi yang dirancang untuk berbagai kebutuhan aplikasi.'
        : 'Concentrated flavor formulations designed for a range of application requirements.',
    },
    {
      number: '03',
      title: isId ? 'Kualitas Konsisten' : 'Consistent Quality',
      description: isId
        ? 'Portofolio produk dengan spesifikasi yang jelas untuk membantu menjaga konsistensi proses produksi.'
        : 'Products with defined specifications to support consistency across production processes.',
    },
    {
      number: '04',
      title: isId ? 'Beragam Aplikasi' : 'Versatile Applications',
      description: isId
        ? 'Pilihan perisa untuk aplikasi seperti es krim, minuman, confectionery, dairy, dan baking.'
        : 'Flavor options for applications including ice cream, beverages, confectionery, dairy, and baking.',
    },
  ];

  const sortedProducts = [...foodProducts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="min-h-screen bg-white text-[#27242d]">
      <Navigation />

      {/* HERO */}
      <section className="border-b border-[#dcd8e3] bg-[#f5f3f7]">
        <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-28 lg:px-8 lg:pb-20 lg:pt-36">
          <button
            onClick={() => navigate(`/${lang}`)}
            className="mb-12 text-sm font-semibold text-[#5f5c6b] transition-colors hover:text-[#2a1259]"
          >
            ← {isId ? 'Beranda' : 'Home'}
          </button>

          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a6d00]">
                {isId
                  ? 'Bahan Pangan & Perisa'
                  : 'Food Ingredients & Flavors'}
              </p>

              <h1 className="mt-5 max-w-[850px] text-4xl font-bold uppercase leading-[1.02] tracking-[-0.025em] text-[#2a1259] sm:text-5xl lg:text-7xl">
                {isId
                  ? 'Bahan Pangan & Perisa'
                  : 'Food Ingredients & Flavors'}
              </h1>

              <p className="mt-7 max-w-[700px] text-lg leading-8 text-[#5f5c6b] lg:text-xl">
                {isId
                  ? 'Portofolio perisa untuk mendukung berbagai kebutuhan industri makanan dan minuman.'
                  : 'A portfolio of flavor ingredients supporting a wide range of food and beverage applications.'}
              </p>
            </div>

            <div className="border-l-2 border-[#f4bd0a] pl-6 lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
                Principal
              </p>

              <p className="mt-2 text-2xl font-bold text-[#2a1259]">
                Ally FNF
              </p>

              <p className="mt-1 text-sm text-[#5f5c6b]">
                Hangzhou, China
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
                {isId ? 'Principal Kami' : 'Our Principal'}
              </p>

              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-[#2a1259] lg:text-4xl">
                Ally FNF
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-[720px] text-lg leading-8 text-[#5f5c6b]">
                {isId
                  ? 'Ally FNF merupakan principal yang terkait dengan portofolio bahan perisa untuk kebutuhan industri makanan dan minuman.'
                  : 'Ally FNF is the principal associated with our flavor ingredient portfolio for food and beverage industry applications.'}
              </p>

              <div className="mt-8 grid gap-4 border-t border-[#dcd8e3] pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                    Origin
                  </p>

                  <p className="mt-2 font-semibold text-[#2a1259]">
                    Hangzhou, China
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                    Category
                  </p>

                  <p className="mt-2 font-semibold text-[#2a1259]">
                    Food Flavors
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                    Portfolio
                  </p>

                  <p className="mt-2 font-semibold text-[#2a1259]">
                    {foodProducts.length} {isId ? 'produk' : 'products'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-[#f5f3f7]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
                {isId ? 'Product Range' : 'Product Range'}
              </p>

              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-[#2a1259] lg:text-4xl">
                {isId
                  ? 'Beragam kategori perisa'
                  : 'A broad flavor portfolio'}
              </h2>

              <p className="mt-5 text-base leading-7 text-[#5f5c6b]">
                {isId
                  ? 'Portofolio mencakup berbagai kategori perisa untuk kebutuhan aplikasi makanan dan minuman.'
                  : 'The portfolio covers multiple flavor categories for food and beverage applications.'}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-[#dcd8e3]">
                {categories.map((category) => (
                  <div
                    key={category.number}
                    className="grid grid-cols-[52px_1fr_auto] items-center gap-4 border-b border-[#dcd8e3] py-5"
                  >
                    <span className="text-sm font-bold tracking-[0.15em] text-[#8a6d00]">
                      {category.number}
                    </span>

                    <span className="text-base font-bold uppercase text-[#2a1259]">
                      {isId && t('foodProducts.categories')?.[category.name]
                        ? t('foodProducts.categories')[category.name]
                        : category.name}
                    </span>

                    <span className="text-sm font-medium text-[#5f5c6b]">
                      {category.count}{' '}
                      {isId ? 'produk' : 'products'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-[760px]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
              {isId ? 'Product Catalogue' : 'Product Catalogue'}
            </p>

            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-[#2a1259] sm:text-4xl lg:text-5xl">
              {isId
                ? 'Daftar bahan perisa'
                : 'Flavor ingredient catalogue'}
            </h2>

            <p className="mt-5 text-base leading-7 text-[#5f5c6b]">
              {isId
                ? 'Informasi produk, kode, aplikasi, dan dosis referensi untuk portofolio perisa yang tersedia.'
                : 'Product codes, applications, and reference dosage information across the available flavor portfolio.'}
            </p>
          </div>

          <div className="mt-12 border-t border-[#cfcbd6]">
            {sortedProducts.map((product, index) => (
              <article
                key={product.id}
                className="border-b border-[#cfcbd6] py-7"
              >
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
                  {/* NUMBER */}
                  <div className="lg:col-span-1">
                    <span className="text-sm font-bold tracking-[0.15em] text-[#8a6d00]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* PRODUCT NAME */}
                  <div className="lg:col-span-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="text-xl font-bold uppercase leading-tight text-[#2a1259] lg:text-2xl">
                        {product.name}
                      </h3>

                      <span className="border border-[#dcd8e3] px-2.5 py-1 text-[11px] font-bold tracking-[0.08em] text-[#5f5c6b]">
                        {product.code}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-[#8a6d00]">
                      Food Flavor
                    </p>
                  </div>

                  {/* APPLICATIONS */}
                  <div className="lg:col-span-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a6d00]">
                      {isId ? 'Aplikasi' : 'Applications'}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {product.applications.map((app) => (
                        <span
                          key={app}
                          className="text-sm text-[#2b2a33]"
                        >
                          {isId && t('foodProducts.applications')?.[app]
                            ? t('foodProducts.applications')[app]
                            : app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* DOSAGE */}
                  <div className="lg:col-span-2 lg:text-right">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a6d00]">
                      {isId ? 'Dosis Referensi' : 'Reference Dosage'}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#2a1259]">
                      {product.referenceDosage || '—'}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-[#f5f3f7]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
                {isId ? 'Quality & Applications' : 'Quality & Applications'}
              </p>

              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-[#2a1259] lg:text-4xl">
                {isId
                  ? 'Mendukung kebutuhan produksi'
                  : 'Supporting production requirements'}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-[#dcd8e3]">
                {qualityFeatures.map((feature) => (
                  <div
                    key={feature.number}
                    className="grid gap-4 border-b border-[#dcd8e3] py-6 sm:grid-cols-[60px_1fr]"
                  >
                    <span className="text-sm font-bold tracking-[0.15em] text-[#8a6d00]">
                      {feature.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold uppercase text-[#2a1259]">
                        {feature.title}
                      </h3>

                      <p className="mt-2 max-w-[680px] text-sm leading-6 text-[#5f5c6b]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#3b1a72] text-white">
        <div className="absolute inset-y-0 left-0 w-2 bg-[#f4bd0a]" />

        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4bd0a]">
                {isId ? 'Hubungi Kami' : 'Get in touch'}
              </p>

              <h2 className="mt-4 text-4xl font-bold uppercase leading-[1.03] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                {isId
                  ? 'Diskusikan kebutuhan bahan pangan Anda'
                  : 'Discuss your food ingredient requirements'}
              </h2>

              <p className="mt-5 max-w-[650px] text-base leading-7 text-white/80 lg:text-lg">
                {isId
                  ? 'Hubungi tim Anindojaya untuk informasi produk, aplikasi, ketersediaan, dan kebutuhan bahan pangan atau perisa.'
                  : 'Contact the Anindojaya team for product information, applications, availability, and food ingredient requirements.'}
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <button
                onClick={() => navigate(`/${lang}#contact`)}
                className="inline-flex items-center gap-3 bg-[#f4bd0a] px-6 py-3.5 text-sm font-bold text-[#2a1259] transition-colors hover:bg-white"
              >
                {isId ? 'Hubungi Kami' : 'Contact us'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Food;