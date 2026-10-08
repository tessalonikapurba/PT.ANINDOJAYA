/**
 * Homepage content. Every factual statement here is taken from existing
 * Anindojaya site content (src/i18n/translations.ts, Contact.tsx) or the
 * brief. Anything marked PLACEHOLDER must be replaced with real content.
 */
import officeImage from '@/assets/anindo-jaya.jpg';
import officeCrop from '@/assets/office-team-crop.png';
import steviaImage from '@/assets/stevia-products.jpg';
import heroImage from '@/assets/hero-stevia.jpg';
import founderImage from "@/assets/owner-standing-web.jpeg";
import pharmaceuticalImage from '@/assets/pharmaceutical-lab.png';
import pharmaProducts from '@/assets/pharma-products.png';
import foodIngredients from '@/assets/food-ingredients.jpeg';
import steviaSweetener from '@/assets/stevia-sweetener.jpeg';
import ercros from '@/assets/principals-logos/principals/ercros.png';
import ally from '@/assets/principals-logos/principals/ally.png';
import xinfu from '@/assets/principals-logos/principals/xinfu.png';
import tianxin from '@/assets/principals-logos/principals/tianxin.png';
import kangda from '@/assets/principals-logos/principals/kangda.png';import jinrui from '@/assets/principals-logos/principals/jinrui.png';
export type Lang = 'id' | 'en';
export type Bi = { id: string; en: string };

export const images = {
  hero: officeCrop,
  pharma: officeCrop,
  office: officeImage,
  food: steviaImage,
  aijs: heroImage,
  founder: founderImage,

  pharmaProducts,
  foodIngredients,
  steviaSweetener,
};
export const contact = {
  email: 'secretary@anindojaya.com',
  emailSecondary: 'djarifin@anindojaya.com',
  phones: ['021-45842050', '021-45857369', '021-45843965'],
  whatsapp: '085718192020',
  address:
    'Jl. Dewi Shinta Blok B2 No.1, RT.7/RW.8, Klp. Gading Timur, Kec. Klp. Gading, Jakarta Utara, DKI Jakarta 14240',
  hours: {
    id: 'Senin – Jumat, 08:00 – 17:00 WIB',
    en: 'Monday – Friday, 08:00 – 17:00 WIB',
  } as Bi,
};

export const timeline: { year: string; text: Bi }[] = [
  {
    year: '1981',
    text: {
      id: 'Pengalaman di bidang bahan baku farmasi mulai dibangun.',
      en: 'Experience in pharmaceutical raw materials begins.',
    },
  },
  {
    year: '1993',
    text: {
      id: 'PT. Anindojaya Swakarsa didirikan berdasarkan akta notaris pada 4 Desember 1993, dimulai sebagai bisnis sampingan di akhir pekan.',
      en: 'PT. Anindojaya Swakarsa is established by notarial deed on December 4, 1993, starting as a weekend side business.',
    },
  },
  {
    year: '1997',
    text: {
      id: 'Kembali ke bahan baku farmasi setelah mendapat izin dari perusahaan tempat bekerja.',
      en: 'Return to pharmaceutical raw materials after obtaining permission from the employing company.',
    },
  },
  {
    year: '2025',
    text: {
      id: 'AIJS Food Industry dibuka sebagai anak perusahaan dengan produk andalan AIJS Sweetener pada akhir 2025.',
      en: 'AIJS Food Industry opens as a subsidiary, with AIJS Sweetener as its flagship product, at the end of 2025.',
    },
  },
  {
    year: 'TODAY',
    text: {
      id: 'Importir dan distributor bahan baku farmasi, berkembang ke bahan pangan dan pemanis alami AIJS.',
      en: 'Importer and distributor of pharmaceutical raw materials, expanding into food ingredients and AIJS natural sweetener.',
    },
  },
];

export const principals: { name: string; logo: string }[] = [
  { name: 'Ercros', logo: ercros },
  { name: 'Ally F&F', logo: ally },
  { name: 'Yifan / Xinfu', logo: xinfu },
  { name: 'Tianxin Pharmaceutical', logo: tianxin },
  { name: 'Kangda New Materials', logo: kangda },
  { name: 'Jin Rui', logo: jinrui },
];

export const productCategories = [
  {
    key: 'pharma',
    title: { id: 'Bahan Baku Farmasi', en: 'Pharmaceutical Ingredients' } as Bi,
    text: {
      id: 'Bahan baku farmasi berpotensi tinggi dengan impuritas minimal, terutama dari Ercros, Spanyol.',
      en: 'High-potency pharmaceutical raw materials with minimal impurities, primarily from Ercros, Spain.',
    } as Bi,
    examples: ['Fusidic Acid', 'Fosfomycin', 'Vancomycin HCL', 'Gentamycin Sulfate'],
    to: 'pharmaceuticals',
  },
  {
    key: 'food',
    title: { id: 'Bahan Pangan', en: 'Food Ingredients' } as Bi,
    text: {
      id: 'Bahan baku perisa berkualitas dengan harga bersaing dari Ally FNF untuk industri makanan dan minuman.',
      en: 'Quality flavor raw materials at competitive prices from Ally FNF for the food and beverage industry.',
    } as Bi,
    examples: ['Corn Flavor', 'Orange Flavor', 'Strawberry Flavor', 'Melon Flavor'],
    to: 'food',
  },
  {
    key: 'aijs',
    title: { id: 'AIJS Sweetener', en: 'AIJS Sweetener' } as Bi,
    text: {
      id: 'Pemanis alami berbasis stevia, produk andalan anak perusahaan kami, AIJS Food Industry.',
      en: 'Stevia-based natural sweetener, the flagship product of our subsidiary, AIJS Food Industry.',
    } as Bi,
    examples: [] as string[],
    to: 'food',
  },
];

export const strengths: { key: string; title: Bi; text: Bi }[] = [
  {
    key: 'quality',
    title: { id: 'Kualitas', en: 'Quality' },
    text: {
      id: 'Bahan baku berkualitas ultra tinggi dengan potensi luar biasa dan impuritas minimal.',
      en: 'Ultra-high-quality raw materials with exceptional potency and minimal impurities.',
    },
  },
  {
    key: 'reliability',
    title: { id: 'Keandalan', en: 'Reliability' },
    text: {
      id: 'Kemitraan langsung dengan principal untuk pasokan bahan grade farmasi yang konsisten.',
      en: 'Direct principal partnerships for a consistent supply of pharmaceutical-grade materials.',
    },
  },
  {
    key: 'expertise',
    title: { id: 'Keahlian', en: 'Expertise' },
    text: {
      id: 'Pengalaman di bahan baku farmasi sejak 1981, kini meluas ke bahan pangan.',
      en: 'Experience in pharmaceutical raw materials since 1981, now extended to food ingredients.',
    },
  },
  {
    key: 'partnership',
    title: { id: 'Kemitraan', en: 'Partnership' },
    text: {
      id: 'Menjadi berkat bagi principal, pemasok, pelanggan, dan Indonesia.',
      en: 'Being a blessing to principals, suppliers, customers, and Indonesia.',
    },
  },
];

/**
 * PLACEHOLDER editorial items. Titles reference facts already on the site;
 * add real dates and article pages when an editorial workflow exists.
 */
export const insights = [
  {
    key: 'aijs',
    category: { id: 'Berita Perusahaan', en: 'Company News' } as Bi,
    date: { id: 'Akhir 2025', en: 'Late 2025' } as Bi,
    title: {
      id: 'AIJS Food Industry hadir dengan AIJS Sweetener',
      en: 'AIJS Food Industry launches with AIJS Sweetener',
    } as Bi,
    image: 'aijs' as const,
    to: 'food',
  },
  {
    key: 'edu',
    category: { id: 'Wawasan Industri', en: 'Industry Insights' } as Bi,
    date: undefined as Bi | undefined,
    title: {
      id: 'Diet gula dan pemakaian pemanis',
      en: 'Sugar diet and sweetener use',
    } as Bi,
    image: 'food' as const,
    to: 'food',
  },
  {
    key: 'catalog',
    category: { id: 'Pembaruan Produk', en: 'Product Updates' } as Bi,
    date: undefined as Bi | undefined,
    title: {
      id: 'Katalog produk farmasi: Fusidic Acid, Fosfomycin, dan lainnya',
      en: 'Pharmaceutical catalog: Fusidic Acid, Fosfomycin and more',
    } as Bi,
    image: 'office' as const,
    to: 'pharmaceuticals',
  },
];
