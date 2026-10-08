import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Droplets, Package, Leaf, Star, ArrowRight, TestTube, ChevronRight, Beaker, FlaskConical, Apple, Grape, Wheat, Candy, Pill, Syringe, Atom } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useParams } from 'react-router-dom';

const Products = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const handleViewAllProducts = () => {
    navigate(`/${lang}/pharmaceuticals`);
    // Smooth scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Pharmaceutical products from Ercros
  const pharmaceuticalProducts = [
    {
      id: 1,
      name: 'Vancomycin HCL',
      category: 'Antibiotic',
      grade: 'Pharmaceutical Grade',
      applications: ['Injectable Solutions', 'Hospital Treatment', 'Severe Infections', 'MRSA Treatment'],
      description: 'High-purity vancomycin hydrochloride for severe gram-positive bacterial infections.',
      specifications: ['USP Standard', 'Launch within 2026', 'Injectable Grade', 'Sterile Processing'],
      launchStatus: 'Launch within 2026',
      hasSubProducts: false
    },
    {
      id: 2,
      name: 'Gentamycin Sulfate',
      category: 'Antibiotic',
      grade: 'Pharmaceutical Grade',
      applications: ['Topical Treatments', 'Injectable Solutions', 'Eye Drops', 'Wound Care'],
      description: 'Broad-spectrum aminoglycoside antibiotic for various bacterial infections.',
      specifications: ['New Launch', 'Multi-form Available', 'Broad Spectrum', 'High Efficacy'],
      launchStatus: 'New launch',
      hasSubProducts: false
    },
    {
      id: 3,
      name: 'Fusidic Acid',
      category: 'Antibiotic',
      grade: 'EP (CEP) / FDA',
      applications: ['Topical Creams', 'Ointments', 'Skin Infections', 'Wound Treatment'],
      description: 'Premium fusidic acid available in multiple pharmaceutical forms for topical antimicrobial preparations.',
      specifications: ['Multiple Forms', 'EP Certified', 'FDA Approved', 'High Bioavailability'],
      form: 'Powder / micronized',
      hasSubProducts: true,
      subProducts: [
        { name: 'Fusidic acid', certification: 'EP (CEP) / FDA' },
        { name: 'Fusidic acid sterile', certification: 'EP (CEP)' },
        { name: 'Sodium fusidate', certification: 'EP (CEP) / FDA' },
        { name: 'Sodium fusidate sterile', certification: 'EP' },
        { name: 'Diethanolamine fusidate', certification: 'In-house specifications' }
      ]
    },
    {
      id: 4,
      name: 'Fosfomycins',
      category: 'Broad-spectrum Antibiotic',
      grade: 'EP',
      applications: ['UTI Treatment', 'Powder Sachets', 'Oral Administration', 'Injectable Solutions'],
      description: 'Complete fosfomycin range including calcium salts and various pharmaceutical forms.',
      specifications: ['Multiple Forms', 'UTI Specialist', 'Broad Spectrum', 'Injectable Options'],
      hasSubProducts: true,
      subProducts: [
        { name: 'Fosfomycin calcium powder', certification: 'EP' },
        { name: 'Fosfomycin calcium compacted', certification: 'EP' },
        { name: 'Fosfomycin sodium non sterile', certification: 'EP' },
        { name: 'Fosfomycin sodium sterile', certification: 'EP' },
        { name: 'Fosfomycin trometamol', certification: 'EP' },
        { name: 'Fosfomycin sodium intravenous (succinic acid)', certification: 'EP' },
        { name: 'Fosfomycin sodium intravenous (citric acid)', certification: 'EP' }
      ]
    },
    {
      id: 5,
      name: 'Erythromycins',
      category: 'Macrolide Antibiotic',
      grade: 'EP (CEP) / USP FDA',
      applications: ['Oral Tablets', 'Capsules', 'Topical Gels', 'Respiratory Infections', 'Pediatric Suspensions'],
      description: 'Complete range of erythromycin variants available in multiple pharmaceutical forms.',
      specifications: ['Multiple Variants', 'Various Forms', 'Pediatric Suitable', 'Versatile Use'],
      form: 'Powder / compacted / micronized',
      hasSubProducts: true,
      subProducts: [
        { name: 'Erythromycin base', certification: 'EP (CEP) / USP FDA' },
        { name: 'Erythromycin base dihydrate', certification: 'EP' },
        { name: 'Erythromycin ethylsuccinate', certification: 'EP (CEP) / USP FDA' },
        { name: 'Erythromycin stearate', certification: 'EP / USP FDA' },
        { name: 'Erythromycin estolate', certification: 'EP / USP FDA' },
        { name: 'Erythromycin propionate', certification: 'In-house specifications' }
      ]
    },
    {
      id: 6,
      name: 'Erythromycin Derivatives',
      category: 'Macrolide Derivatives',
      grade: 'EP (CEP) / USP',
      applications: ['Advanced Formulations', 'Specialized Treatment', 'Respiratory Infections', 'Skin Conditions'],
      description: 'Advanced erythromycin derivatives with enhanced properties and specialized applications.',
      specifications: ['Enhanced Properties', 'Specialized Use', 'High Purity', 'Advanced Formulations'],
      form: 'Powder / compacted / micronized',
      hasSubProducts: true,
      subProducts: [
        { name: 'Azithromycin dihydrate', certification: 'EP (CEP) / USP' },
        { name: 'Clarithromycin', certification: 'EP (CEP) / USP' }
      ]
    },
    {
      id: 7,
      name: 'Famotidine',
      category: 'H2 Receptor Antagonist',
      grade: 'EP / USP FDA',
      applications: ['Acid Reflux', 'Peptic Ulcers', 'GERD Treatment', 'Gastric Protection'],
      description: 'High-purity famotidine available in multiple grades for gastric acid suppression.',
      specifications: ['High Purity', 'Multiple Grades', 'Gastric Specialist', 'Dual Certification'],
      hasSubProducts: true,
      subProducts: [
        { name: 'Powder grade', certification: 'EP / USP FDA' },
        { name: 'Micronized grade', certification: 'EP / USP' }
      ]
    },
    {
      id: 8,
      name: 'Amlodipine Besylate',
      category: 'Calcium Channel Blocker',
      grade: 'EP',
      applications: ['Hypertension', 'Angina', 'Cardiovascular Treatment', 'Long-term Therapy'],
      description: 'High-purity amlodipine besylate for cardiovascular treatment and hypertension management.',
      specifications: ['High Purity', 'Cardiovascular Specialist', 'Long-acting', 'EP Certified'],
      hasSubProducts: false
    }
  ];

  // Agent products
  const agentProducts = {
    allyFnf: [
      {
        id: 'CK531',
        code: 'CK531',
        name: 'Corn Flavor',
        applications: ['Es Krim', 'Minuman', 'Produk Susu', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK501A',
        code: 'CK501A',
        name: 'Orange Flavor',
        applications: ['Es Krim', 'Produk Susu', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK505',
        code: 'CK505',
        name: 'Strawberry Flavor',
        applications: ['Es Krim', 'Produk Susu', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK507',
        code: 'CK507',
        name: 'Melon Flavor',
        applications: ['Es Krim', 'Permen', 'Selai', 'Panggang'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK559',
        code: 'CK559',
        name: 'Durian Flavor',
        applications: ['Permen', 'Es Krim', 'Selai'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK516',
        code: 'CK516',
        name: 'Blueberry Flavor',
        applications: ['Es Krim', 'Permen', 'Minuman', 'Panggang'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK618',
        code: 'CK618',
        name: 'Coconut Flavor',
        applications: ['Air', 'Kue', 'Es Krim', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK521',
        code: 'CK521',
        name: 'Chocolate Flavor',
        applications: ['Es Krim', 'Produk Susu', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK022',
        code: 'CK022',
        name: 'Coffee Flavor',
        applications: ['Permen', 'Minuman', 'Minuman Dingin'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK023',
        code: 'CK023',
        name: 'Vanilla Flavor',
        applications: ['Sandwich Krim', 'Permen', 'Biskuit', 'Kue', 'Es Krim'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK510',
        code: 'CK510',
        name: 'Lychee Flavor',
        applications: ['Es Krim', 'Produk Susu', 'Permen', 'Jeli'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK319',
        code: 'CK319',
        name: 'Cola Flavor',
        applications: ['Es Krim', 'Minuman', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK525M',
        code: 'CK525M',
        name: 'Yogurt Flavor',
        applications: ['Es Krim', 'Minuman'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK525',
        code: 'CK525',
        name: 'Fresh Milk Flavor',
        applications: ['Es Krim', 'Minuman', 'Produk Susu'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK525G',
        code: 'CK525G',
        name: 'Pure Milk Flavor',
        applications: ['Es Krim', 'Minuman'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK526A',
        code: 'CK526A',
        name: 'Taro Flavor',
        applications: ['Es Krim', 'Permen', 'Kue'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK527',
        code: 'CK527',
        name: 'Red Date Flavor',
        applications: ['Es Krim', 'Produk Susu', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK530',
        code: 'CK530',
        name: 'Peanut Flavor',
        applications: ['Produk Es', 'Susu Kacang', 'Minuman', 'Isian Sandwich'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK532A',
        code: 'CK532A',
        name: 'Red Bean Flavor (Premium)',
        applications: ['Es Krim', 'Isian', 'Panggang'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK537A',
        code: 'CK537A',
        name: 'Dark Sugar Flavor',
        applications: ['Es Krim', 'Produk Susu', 'Permen', 'Biskuit'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK546',
        code: 'CK546',
        name: 'Sweet Potato Flavor',
        applications: ['Es Krim', 'Produk Susu', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK024',
        code: 'CK024',
        name: 'Cheese Flavor',
        applications: ['Panggang'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK526',
        code: 'CK526',
        name: 'Milk Flavor',
        applications: ['Biskuit', 'Kue'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK647',
        code: 'CK647',
        name: 'Egg Oil Flavor',
        applications: ['Kuning Telur', 'Kue', 'Biskuit'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK612',
        code: 'CK612',
        name: 'Beef Flavor',
        applications: ['Panggang', 'Produk Halogen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK047',
        code: 'CK047',
        name: 'Salted Egg Yolk Flavor',
        applications: ['Biskuit', 'Wafer', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK602',
        code: 'CK602',
        name: 'Ginger Flavor',
        applications: ['Produk Susu', 'Panggang', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK218',
        code: 'CK218',
        name: 'Coconut Powder Flavor',
        applications: ['Panggang', 'Es Krim', 'Produk Susu', 'Minuman'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK225',
        code: 'CK225',
        name: 'Milk Powder Flavor',
        applications: ['Biskuit', 'Kue', 'Roti', 'Permen'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK225A',
        code: 'CK225A',
        name: 'Fresh Milk Powder Flavor',
        applications: ['Panggang', 'Es Krim', 'Produk Susu', 'Kacang Panggang']
      },
      {
        id: 'CK225B',
        code: 'CK225B',
        name: 'Sweet Milk Powder Flavor',
        applications: ['Panggang', 'Es Krim', 'Produk Susu', 'Kacang Panggang']
      },
      {
        id: 'CK226',
        code: 'CK226',
        name: 'Taro Powder Flavor',
        applications: ['Biskuit', 'Kue', 'Permen', 'Minuman Fermentasi'],
        referenceDosage: '0.1% - 0.5%'
      },
      {
        id: 'CK257',
        code: 'CK257',
        name: 'Potato Powder Flavor',
        applications: ['Makanan Ringan']
      },
      {
        id: 'CK247',
        code: 'CK247',
        name: 'Egg Milk Powder Flavor',
        applications: ['Kue', 'Biskuit', 'Es Krim']
      },
      {
        id: 'CK247A',
        code: 'CK247A',
        name: 'Cake Flavor',
        applications: ['Kue', 'Produk Susu', 'Roti'],
        referenceDosage: '0.1% - 0.5%'
      }
    ],
    zhejiangHangzou: [
      { name: "D. Calpan" },
      { name: "D. Panthenol" }
    ],
    zhejiangTianxin: [
      { name: "B1 HCL" },
      { name: "B1 Mononitrat" },
      { name: "B6 HCL" }
    ],
    henanKangda: [
      { name: "Ceftriaxone Sodium" },
      { name: "Cefotaxime Sodium" },
      { name: "Cefepime Dihydrocloride" },
      { name: "Cefoperazone Sodium" }
    ],
    tianjinZhongrui: [
      { name: "Nicotinamide" },
      { name: "Nicotinic Acid" }
    ]
  };


  const AgentProductCard = ({ product, company }: { product: any, company: string }) => {
    // Pick varied icons and colorful gradients based on product name/company
    const pickIconAndColor = (name: string, brand: string) => {
      const lower = name.toLowerCase();
      if (/(cola|soda)/.test(lower)) return { Icon: Candy, gradient: 'from-rose-500 to-pink-600' };
      if (/(corn|maize)/.test(lower)) return { Icon: Wheat, gradient: 'from-amber-500 to-yellow-600' };
      if (/orange/.test(lower)) return { Icon: Candy, gradient: 'from-orange-500 to-red-500' };
      if (/pineapple/.test(lower)) return { Icon: Apple, gradient: 'from-lime-500 to-emerald-600' };
      if (/strawberry/.test(lower)) return { Icon: Apple, gradient: 'from-red-500 to-pink-600' };
      if (/melon/.test(lower)) return { Icon: Apple, gradient: 'from-green-500 to-emerald-600' };
      if (/durian/.test(lower)) return { Icon: Apple, gradient: 'from-yellow-500 to-orange-600' };
      if (/blueberry/.test(lower)) return { Icon: Apple, gradient: 'from-blue-500 to-indigo-600' };
      if (/coconut/.test(lower)) return { Icon: Candy, gradient: 'from-green-400 to-emerald-500' };
      if (/chocolate/.test(lower)) return { Icon: Candy, gradient: 'from-amber-600 to-yellow-800' };
      if (/coffee/.test(lower)) return { Icon: Candy, gradient: 'from-yellow-600 to-amber-800' };
      if (/vanilla/.test(lower)) return { Icon: Candy, gradient: 'from-yellow-200 to-yellow-400' };
      if (/lychee/.test(lower)) return { Icon: Apple, gradient: 'from-pink-400 to-red-500' };
      if (/yogurt|milk/.test(lower)) return { Icon: Candy, gradient: 'from-blue-200 to-blue-400' };
      if (/taro/.test(lower)) return { Icon: Apple, gradient: 'from-purple-400 to-purple-600' };
      if (/peanut/.test(lower)) return { Icon: Candy, gradient: 'from-yellow-600 to-orange-600' };
      if (/sugar/.test(lower)) return { Icon: Candy, gradient: 'from-yellow-300 to-yellow-500' };
      if (/sweet potato/.test(lower)) return { Icon: Apple, gradient: 'from-orange-400 to-red-500' };
      if (/cheese/.test(lower)) return { Icon: Candy, gradient: 'from-yellow-400 to-orange-500' };
      if (/egg/.test(lower)) return { Icon: Candy, gradient: 'from-yellow-500 to-yellow-700' };
      if (/beef/.test(lower)) return { Icon: Candy, gradient: 'from-red-600 to-red-800' };
      if (/ginger/.test(lower)) return { Icon: Apple, gradient: 'from-yellow-500 to-orange-600' };
      if (/potato/.test(lower)) return { Icon: Apple, gradient: 'from-yellow-400 to-yellow-600' };
      if (/cake/.test(lower)) return { Icon: Candy, gradient: 'from-pink-300 to-pink-500' };
      if (/(nicotin|nicotinamide)/.test(lower)) return { Icon: Atom, gradient: 'from-fuchsia-500 to-purple-600' };
      if (/(cef|triax|taxi|pime|perazone)/.test(lower)) return { Icon: Syringe, gradient: 'from-sky-500 to-blue-600' };
      if (/(vitamin|\bb1\b|\bb6\b)/.test(lower)) return { Icon: Pill, gradient: 'from-teal-500 to-cyan-600' };
      if (/(panthenol|calpan)/.test(lower)) return { Icon: Beaker, gradient: 'from-violet-500 to-indigo-600' };
      // Company-based fallback
      if (/ally/.test(brand.toLowerCase())) return { Icon: Grape, gradient: 'from-purple-500 to-pink-600' };
      return { Icon: FlaskConical, gradient: 'from-gray-400 to-gray-600' };
    };

    const { Icon, gradient } = pickIconAndColor(product.name, company);

    return (
      <Card className="card-gradient hover:shadow-hover transition-smooth group border-secondary/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-2">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            {product.code && (
              <Badge variant="outline" className="text-xs">
                {product.code}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg font-bold text-foreground">{product.name}</CardTitle>
          <p className="text-xs text-muted-foreground">{company}</p>
        </CardHeader>
        {product.applications && product.applications.length > 0 && (
          <CardContent className="pt-0">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">
                {lang === 'id' ? 'Aplikasi' : 'Applications'}
              </p>
              <div className="flex flex-wrap gap-1">
                {product.applications.map((app, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {lang === 'en' && t('foodProducts.applications')[app] 
                      ? t('foodProducts.applications')[app] 
                      : app}
                  </Badge>
                ))}
              </div>
              {product.referenceDosage && (
                <div className="mt-2">
                  <p className="text-xs font-medium text-gray-600">
                    {lang === 'id' ? 'Dosis Referensi' : 'Reference Dosage'}: {product.referenceDosage}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    );
  };

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {lang === 'id' ? 'Rangkaian Produk Kami' : 'Our Product Range'}
          </h2>
        </div>

        {/* Pharmaceutical Products */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <TestTube className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground">{lang === 'id' ? 'Produk Ercros' : 'Ercros Pharmaceutical Products'}</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {pharmaceuticalProducts.map((product, index) => {
              // Define different colors for each product
              const colors = [
                'from-blue-500 to-purple-600',
                'from-green-500 to-teal-600', 
                'from-orange-500 to-red-600',
                'from-purple-500 to-pink-600',
                'from-indigo-500 to-blue-600',
                'from-pink-500 to-rose-600',
                'from-teal-500 to-cyan-600',
                'from-violet-500 to-purple-600'
              ];
              
              return (
              <Card key={product.id} className="card-gradient hover:shadow-hover transition-smooth group border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <TestTube className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{product.name}</CardTitle>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-wrap gap-1">
                      {product.form
                        ? product.form.split(' / ').map((form, index) => (
                            <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                              {form}
                            </Badge>
                          ))
                        : product.launchStatus && (
                            <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                              {product.launchStatus}
                            </Badge>
                          )}
                    </div>
                    {product.hasSubProducts && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <ChevronRight className="w-3 h-3 mr-1" />
                        {product.subProducts?.length} {lang === 'id' ? 'Variasi' : 'Variations'}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {product.hasSubProducts && product.subProducts && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                        <ChevronRight className="w-3 h-3 mr-1 text-indigo-600" />
                        {lang === 'id' ? 'Variasi Produk' : 'Product Variations'} ({product.subProducts.length})
                      </h4>
                      <div className="space-y-2">
                        {product.subProducts.map((subProduct, subIndex) => (
                          <div key={subIndex} className="bg-gray-50 rounded-md p-3 border border-gray-200">
                            <div className="flex justify-between items-start">
                              <h5 className="font-medium text-gray-900 text-xs leading-tight">{subProduct.name}</h5>
                              <Badge variant="secondary" className="text-xs ml-2">
                                {subProduct.certification}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>

        {/* Agent Products Section */}
        <div id="agent-products" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {lang === 'id' ? 'Kami Juga Menyediakan Produk Berkualitas Tinggi Yang Kami Ageni' : 'We Also Provide High Quality Products That We Represent'}
            </h3>
          </div>

          {/* Ally FNF */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-primary">1.</span> Ally FNF
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {agentProducts.allyFnf.map((product, index) => (
                <AgentProductCard key={product.id || index} product={product} company="Ally FNF" />
              ))}
            </div>
          </div>

          {/* Zhejiang Hangzou Xinfu */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-primary">2.</span> Zhejiang Hangzou Xinfu
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {agentProducts.zhejiangHangzou.map((product, index) => (
                <AgentProductCard key={index} product={product} company="Zhejiang Hangzou Xinfu" />
              ))}
            </div>
          </div>

          {/* Zhejiang Tianxin */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-primary">3.</span> Zhejiang Tianxin
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {agentProducts.zhejiangTianxin.map((product, index) => (
                <AgentProductCard key={index} product={product} company="Zhejiang Tianxin" />
              ))}
            </div>
          </div>

          {/* Henan Kangda */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-primary">4.</span> Henan Kangda
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {agentProducts.henanKangda.map((product, index) => (
                <AgentProductCard key={index} product={product} company="Henan Kangda" />
              ))}
            </div>
          </div>

          {/* Tianjin Zhongrui Pharmaceutical */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <span className="text-primary">5.</span> Tianjin Zhongrui Pharmaceutical
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {agentProducts.tianjinZhongrui.map((product, index) => (
                <AgentProductCard key={index} product={product} company="Tianjin Zhongrui Pharmaceutical" />
              ))}
            </div>
            <h4 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="text-primary">6.</span>{' '}
              {lang === 'id'
                ? 'Dari manufacturer lain sesuai permintaan customers.'
                : 'From other manufacturers based on customer requests.'}
            </h4>
          </div>
        </div>

        {/* AIJS Sweetener Section */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Image Left */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-12">
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-800 mb-2">AIJS Sweetener</h4>
                </div>
              </div>
            </div>
            {/* Text Right */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                {lang === 'id' ? 'AIJS Sweetener - Produk Unggulan Kami' : 'AIJS Sweetener - Our Flagship Product'}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {lang === 'id' 
                  ? 'Pada akhir tahun 2025, kami akan fokus memasarkan produk unggulan anak perusahaan kami yaitu PT. AIJS Food Industry sebuah sweetener yang kami ciptakan sebagai solusi untuk mengatasi pemakaian gula yang berlebihan dengan produk yang berkualitas tinggi, aman, dan harga terjangkau yaitu AIJS sweetener with stevia.'
                  : 'At the end of 2025, we will focus on marketing the flagship product of our subsidiary PT. AIJS Food Industry, a sweetener we created as a solution to overcome excessive sugar consumption with a high-quality, safe, and affordable product, AIJS sweetener with stevia.'
                }
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Products;