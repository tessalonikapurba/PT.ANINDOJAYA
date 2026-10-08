import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Product = {
  id: number;
  name: string;
  category: string;
  grade: string;
  applications: string[];
  description: string;
  specifications: string[];
  form?: string;
  hasSubProducts: boolean;
  subProducts?: {
    name: string;
    certification: string;
  }[];
};

const Pharmaceuticals = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const isId = lang === 'id';

  const [openProduct, setOpenProduct] = useState<number | null>(null);

  const pharmaceuticalProducts: Product[] = [
    {
      id: 1,
      name: 'Vancomycin HCL',
      category: 'Antibiotic',
      grade: 'Pharmaceutical Grade',
      applications: [
        'Injectable Solutions',
        'Hospital Treatment',
        'Severe Infections',
        'MRSA Treatment',
      ],
      description:
        'High-purity vancomycin hydrochloride for pharmaceutical applications.',
      specifications: [
        'USP Standard',
        'Injectable Grade',
        'Sterile Processing',
      ],
      hasSubProducts: false,
    },
    {
      id: 2,
      name: 'Gentamycin Sulfate',
      category: 'Antibiotic',
      grade: 'Pharmaceutical Grade',
      applications: [
        'Topical Treatments',
        'Injectable Solutions',
        'Eye Drops',
        'Wound Care',
      ],
      description:
        'Aminoglycoside antibiotic material available for a range of pharmaceutical applications.',
      specifications: [
        'Multi-form Available',
        'Pharmaceutical Grade',
        'Broad Application',
      ],
      hasSubProducts: false,
    },
    {
      id: 3,
      name: 'Fusidic Acid',
      category: 'Antibiotic',
      grade: 'EP (CEP) / FDA',
      applications: [
        'Topical Creams',
        'Ointments',
        'Skin Infections',
        'Wound Treatment',
      ],
      description:
        'Fusidic acid available in multiple pharmaceutical forms for topical antimicrobial preparations.',
      specifications: [
        'Multiple Forms',
        'EP Certified',
        'FDA Approved',
      ],
      form: 'Powder / micronized',
      hasSubProducts: true,
      subProducts: [
        {
          name: 'Fusidic acid',
          certification: 'EP (CEP) / FDA',
        },
        {
          name: 'Fusidic acid sterile',
          certification: 'EP (CEP)',
        },
        {
          name: 'Sodium fusidate',
          certification: 'EP (CEP) / FDA',
        },
        {
          name: 'Sodium fusidate sterile',
          certification: 'EP',
        },
        {
          name: 'Diethanolamine fusidate',
          certification: 'In-house specifications',
        },
      ],
    },
    {
      id: 4,
      name: 'Fosfomycins',
      category: 'Broad-spectrum Antibiotic',
      grade: 'EP',
      applications: [
        'UTI Treatment',
        'Powder Sachets',
        'Oral Administration',
        'Injectable Solutions',
      ],
      description:
        'Fosfomycin range including calcium salts and various pharmaceutical forms.',
      specifications: [
        'Multiple Forms',
        'Oral Applications',
        'Injectable Options',
      ],
      form: 'Powder / compacted',
      hasSubProducts: true,
      subProducts: [
        {
          name: 'Fosfomycin calcium powder',
          certification: 'EP',
        },
        {
          name: 'Fosfomycin calcium compacted',
          certification: 'EP',
        },
        {
          name: 'Fosfomycin sodium non sterile',
          certification: 'EP',
        },
        {
          name: 'Fosfomycin sodium sterile',
          certification: 'EP',
        },
        {
          name: 'Fosfomycin trometamol',
          certification: 'EP',
        },
        {
          name: 'Fosfomycin sodium intravenous (succinic acid)',
          certification: 'EP',
        },
        {
          name: 'Fosfomycin sodium intravenous (citric acid)',
          certification: 'EP',
        },
      ],
    },
    {
      id: 5,
      name: 'Erythromycins',
      category: 'Macrolide Antibiotic',
      grade: 'EP (CEP) / USP FDA',
      applications: [
        'Oral Tablets',
        'Capsules',
        'Topical Gels',
        'Respiratory Infections',
        'Pediatric Suspensions',
      ],
      description:
        'Erythromycin variants available in multiple pharmaceutical forms.',
      specifications: [
        'Multiple Variants',
        'Various Forms',
        'Pharmaceutical Grade',
      ],
      form: 'Powder / compacted / micronized',
      hasSubProducts: true,
      subProducts: [
        {
          name: 'Erythromycin base',
          certification: 'EP (CEP) / USP FDA',
        },
        {
          name: 'Erythromycin base dihydrate',
          certification: 'EP',
        },
        {
          name: 'Erythromycin ethylsuccinate',
          certification: 'EP (CEP) / USP FDA',
        },
        {
          name: 'Erythromycin stearate',
          certification: 'EP / USP FDA',
        },
        {
          name: 'Erythromycin estolate',
          certification: 'EP / USP FDA',
        },
        {
          name: 'Erythromycin propionate',
          certification: 'In-house specifications',
        },
      ],
    },
    {
      id: 6,
      name: 'Erythromycin Derivatives',
      category: 'Macrolide Derivatives',
      grade: 'EP (CEP) / USP',
      applications: [
        'Advanced Formulations',
        'Specialized Treatment',
        'Respiratory Infections',
        'Skin Conditions',
      ],
      description:
        'Erythromycin derivatives available for specialized pharmaceutical applications.',
      specifications: [
        'Specialized Use',
        'High Purity',
        'Advanced Formulations',
      ],
      form: 'Powder / compacted / micronized',
      hasSubProducts: true,
      subProducts: [
        {
          name: 'Azithromycin dihydrate',
          certification: 'EP (CEP) / USP',
        },
        {
          name: 'Clarithromycin',
          certification: 'EP (CEP) / USP',
        },
      ],
    },
    {
      id: 7,
      name: 'Famotidine',
      category: 'H2 Receptor Antagonist',
      grade: 'EP / USP FDA',
      applications: [
        'Acid Reflux',
        'Peptic Ulcers',
        'GERD Treatment',
        'Gastric Protection',
      ],
      description:
        'Famotidine available in multiple grades for pharmaceutical applications.',
      specifications: [
        'High Purity',
        'Multiple Grades',
        'Dual Certification',
      ],
      form: 'Powder / micronized',
      hasSubProducts: true,
      subProducts: [
        {
          name: 'Powder grade',
          certification: 'EP / USP FDA',
        },
        {
          name: 'Micronized grade',
          certification: 'EP / USP',
        },
      ],
    },
    {
      id: 8,
      name: 'Amlodipine Besylate',
      category: 'Calcium Channel Blocker',
      grade: 'EP',
      applications: [
        'Hypertension',
        'Angina',
        'Cardiovascular Treatment',
        'Long-term Therapy',
      ],
      description:
        'Amlodipine besylate available for pharmaceutical cardiovascular applications.',
      specifications: [
        'High Purity',
        'Cardiovascular Applications',
        'EP Certified',
      ],
      form: 'Crystalline powder',
      hasSubProducts: false,
    },
  ];

  const qualityFeatures = [
    {
      number: '01',
      title: isId ? 'Sumber Terpercaya' : 'Trusted Sourcing',
      description: isId
        ? 'Bahan baku diperoleh melalui kerja sama dengan principal dan produsen yang relevan dengan kebutuhan industri.'
        : 'Materials are sourced through partnerships with principals and manufacturers relevant to industry requirements.',
    },
    {
      number: '02',
      title: isId ? 'Standar Farmasi' : 'Pharmaceutical Standards',
      description: isId
        ? 'Portofolio mencakup material dengan berbagai standar dan sertifikasi sesuai informasi produk yang tersedia.'
        : 'The portfolio includes materials with various standards and certifications based on available product information.',
    },
    {
      number: '03',
      title: isId ? 'Pilihan Bentuk Produk' : 'Multiple Product Forms',
      description: isId
        ? 'Beberapa bahan tersedia dalam bentuk powder, compacted, micronized, maupun sterile sesuai produknya.'
        : 'Selected materials are available in powder, compacted, micronized, and sterile forms depending on the product.',
    },
    {
      number: '04',
      title: isId ? 'Kemitraan Jangka Panjang' : 'Long-term Partnership',
      description: isId
        ? 'Kami mendukung kebutuhan bahan baku industri melalui hubungan kerja sama yang konsisten dan responsif.'
        : 'We support industrial ingredient requirements through consistent and responsive business partnerships.',
    },
  ];

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
            ← {t('nav.home')}
          </button>

          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a6d00]">
                {isId
                  ? 'Portofolio Bahan Baku Farmasi'
                  : 'Pharmaceutical Ingredient Portfolio'}
              </p>

              <h1 className="mt-5 max-w-[850px] text-4xl font-bold uppercase leading-[1.02] tracking-[-0.025em] text-[#2a1259] sm:text-5xl lg:text-7xl">
                {isId
                  ? 'Bahan Baku Farmasi'
                  : 'Pharmaceutical Ingredients'}
              </h1>

              <p className="mt-7 max-w-[700px] text-lg leading-8 text-[#5f5c6b] lg:text-xl">
                {isId
                  ? 'Portofolio bahan baku farmasi untuk mendukung kebutuhan manufaktur dan formulasi industri di Indonesia.'
                  : 'A portfolio of pharmaceutical ingredients supporting manufacturing and formulation requirements across Indonesia.'}
              </p>
            </div>

            <div className="border-l-2 border-[#f4bd0a] pl-6 lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
                Principal
              </p>
              <p className="mt-2 text-2xl font-bold text-[#2a1259]">
                Ercros
              </p>
              <p className="mt-1 text-sm text-[#5f5c6b]">
                {isId ? 'Spanyol' : 'Spain'}
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
                Ercros
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-[720px] text-lg leading-8 text-[#5f5c6b]">
                {isId
                  ? 'Ercros, Spanyol, merupakan principal yang terkait dengan portofolio bahan baku farmasi yang ditampilkan pada halaman ini.'
                  : 'Ercros, Spain, is the principal associated with the pharmaceutical ingredient portfolio presented on this page.'}
              </p>

              <div className="mt-8 grid gap-4 border-t border-[#dcd8e3] pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                    Origin
                  </p>
                  <p className="mt-2 font-semibold text-[#2a1259]">
                    Spain
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                    Category
                  </p>
                  <p className="mt-2 font-semibold text-[#2a1259]">
                    Pharmaceutical
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                    Portfolio
                  </p>
                  <p className="mt-2 font-semibold text-[#2a1259]">
                    {pharmaceuticalProducts.length} {isId ? 'kategori' : 'categories'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO */}
      <section className="bg-[#f5f3f7]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-[760px]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
              {isId ? 'Product Portfolio' : 'Product Portfolio'}
            </p>

            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-[#2a1259] sm:text-4xl lg:text-5xl">
              {isId
                ? 'Pilihan bahan baku farmasi'
                : 'Pharmaceutical ingredient range'}
            </h2>

            <p className="mt-5 text-base leading-7 text-[#5f5c6b]">
              {isId
                ? 'Lihat kategori, grade, aplikasi, dan variasi produk yang tersedia dalam portofolio kami.'
                : 'Explore product categories, grades, applications, and available variations across our portfolio.'}
            </p>
          </div>

          <div className="mt-12 border-t border-[#cfcbd6]">
            {pharmaceuticalProducts.map((product, index) => {
              const isOpen = openProduct === product.id;

              return (
                <article
                  key={product.id}
                  className="border-b border-[#cfcbd6]"
                >
                  <button
                    onClick={() =>
                      product.hasSubProducts
                        ? setOpenProduct(isOpen ? null : product.id)
                        : undefined
                    }
                    className={`w-full py-7 text-left ${
                      product.hasSubProducts
                        ? 'cursor-pointer'
                        : 'cursor-default'
                    }`}
                  >
                    <div className="grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-8">
                      <div className="lg:col-span-1">
                        <span className="text-sm font-bold tracking-[0.15em] text-[#8a6d00]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="lg:col-span-5">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold uppercase leading-tight text-[#2a1259] lg:text-2xl">
                            {product.name}
                          </h3>

                          {product.hasSubProducts &&
                            (isOpen ? (
                              <ChevronUp className="h-5 w-5 shrink-0 text-[#8a6d00]" />
                            ) : (
                              <ChevronDown className="h-5 w-5 shrink-0 text-[#8a6d00]" />
                            ))}
                        </div>

                        <p className="mt-2 text-sm font-medium text-[#5f5c6b]">
                          {product.category}
                        </p>
                      </div>

                      <div className="lg:col-span-2">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a6d00]">
                          Grade
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#2b2a33]">
                          {product.grade}
                        </p>
                      </div>

                      <div className="lg:col-span-3">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8a6d00]">
                          {isId ? 'Bentuk' : 'Form'}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#2b2a33]">
                          {product.form || '—'}
                        </p>
                      </div>

                      <div className="lg:col-span-1 lg:text-right">
                        {product.hasSubProducts && (
                          <span className="text-xs font-semibold text-[#5f5c6b]">
                            {product.subProducts?.length}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? 'grid-rows-[1fr] pb-8'
                        : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 border-l-2 border-[#f4bd0a] pl-5 lg:grid-cols-12 lg:gap-10 lg:pl-8">
                        <div className="lg:col-span-5">
                          <p className="text-sm leading-6 text-[#5f5c6b]">
                            {product.description}
                          </p>

                          <div className="mt-6">
                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                              {isId ? 'Aplikasi' : 'Applications'}
                            </p>

                            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                              {product.applications.map((application) => (
                                <span
                                  key={application}
                                  className="text-sm text-[#2b2a33]"
                                >
                                  {application}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-7">
                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6d00]">
                            {isId
                              ? 'Variasi Produk'
                              : 'Product Variations'}
                          </p>

                          <div className="mt-4 divide-y divide-[#dcd8e3] border-y border-[#dcd8e3]">
                            {product.subProducts?.map((subProduct) => (
                              <div
                                key={subProduct.name}
                                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between"
                              >
                                <span className="text-sm font-semibold text-[#2a1259]">
                                  {subProduct.name}
                                </span>

                                <span className="text-xs font-medium text-[#5f5c6b]">
                                  {subProduct.certification}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8a6d00]">
                {isId ? 'Quality & Compliance' : 'Quality & Compliance'}
              </p>

              <h2 className="mt-4 text-3xl font-bold uppercase leading-tight text-[#2a1259] lg:text-4xl">
                {isId
                  ? 'Standar yang mendukung kebutuhan industri'
                  : 'Standards that support industry requirements'}
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
                  ? 'Diskusikan kebutuhan bahan baku Anda'
                  : 'Discuss your ingredient requirements'}
              </h2>

              <p className="mt-5 max-w-[650px] text-base leading-7 text-white/80 lg:text-lg">
                {isId
                  ? 'Hubungi tim Anindojaya untuk informasi produk, ketersediaan, dan kebutuhan bahan baku farmasi.'
                  : 'Contact the Anindojaya team for product information, availability, and pharmaceutical ingredient requirements.'}
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

export default Pharmaceuticals;