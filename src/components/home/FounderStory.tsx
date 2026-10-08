import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { images } from '@/data/homeContent';
import coOwnerImage from '@/assets/co-owner-standing.jpeg';
import { useHome } from './useHome';

const FounderStory = () => {
  const { isId } = useHome();
  const [activeSlide, setActiveSlide] = useState(0);

  const profiles = [
    {
      image: images.founder,
      imageAlt: isId
        ? 'Djohan Arifin, pendiri PT. Anindojaya Swakarsa'
        : 'Djohan Arifin, founder of PT. Anindojaya Swakarsa',
      label: isId
        ? 'Sosok di Balik Anindojaya'
        : 'The person behind Anindojaya',
      name: 'Djohan Arifin',
      role: isId ? 'Pendiri' : 'Founder',

      // Ukuran foto disamakan dengan Josep
      imageScale: 1,
      imageOffsetY: 10,

      description: isId
        ? [
            'Pengalaman Djohan Arifin di bidang bahan baku farmasi dimulai sejak 1981. Pada 4 Desember 1993, PT. Anindojaya Swakarsa didirikan berdasarkan akta notaris, dimulai sebagai bisnis sampingan di akhir pekan.',
            'Dari pengalaman itu, Anindojaya tumbuh menjadi importir dan distributor bahan baku farmasi, dan kini meluas ke bahan pangan dan pemanis alami.',
          ]
        : [
            'Djohan Arifin’s experience in pharmaceutical raw materials began in 1981. On December 4, 1993, PT. Anindojaya Swakarsa was incorporated by notarial deed, starting as a weekend side business.',
            'From that experience, Anindojaya grew into an importer and distributor of pharmaceutical raw materials, now extending into food ingredients and natural sweeteners.',
          ],

      quote: isId
        ? '“Visi besar yang diberikan dan dipercayakan oleh Tuhan Yang Maha Esa kepada saya memungkinkan saya untuk terus maju hari demi hari, menjadi berkat buat principals, suppliers, customers, dan Indonesia.”'
        : '“A great vision granted and trusted by the Almighty God to me enabling me to move on day after day, becoming a blessing for principals, suppliers, customers, and Indonesia.”',
    },

    {
      image: coOwnerImage,
      imageAlt: isId
        ? 'Josep Musu, komisaris PT. Anindojaya Swakarsa'
        : 'Josep Musu, commissioner of PT. Anindojaya Swakarsa',
      label: isId
        ? 'Sosok di Balik Anindojaya'
        : 'The people behind Anindojaya',
      name: 'Josep Musu',
      role: isId ? 'Komisaris' : 'Commissioner',

      imageScale: 1,
      imageOffsetY: 10,

      description: isId
        ? [
            'Josep Musu merupakan bagian dari jajaran kepemimpinan PT. Anindojaya Swakarsa sebagai Komisaris.',
            'Perannya menjadi bagian dari struktur kepemimpinan perusahaan dalam mendukung arah dan keberlanjutan Anindojaya.',
          ]
        : [
            'Josep Musu is part of the leadership of PT. Anindojaya Swakarsa as Commissioner.',
            'His role forms part of the company’s leadership structure in supporting Anindojaya’s direction and long-term continuity.',
          ],

      quote: null,
    },
  ];

  const currentProfile = profiles[activeSlide];

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? profiles.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === profiles.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="story"
      className="overflow-hidden bg-white py-14 lg:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-12">

            {/* PHOTO */}
            <div
              className="
                relative
                h-[360px]
                overflow-hidden
                bg-[#f3f2f5]
                lg:col-span-5
                lg:h-[440px]
              "
            >
              <img
                key={currentProfile.image}
                src={currentProfile.image}
                alt={currentProfile.imageAlt}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  mix-blend-multiply
                "
                style={{
                  transform: `scale(${currentProfile.imageScale}) translateY(${currentProfile.imageOffsetY}px)`,
                  transformOrigin: 'center bottom',
                }}
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div
              className="
                min-w-0
                bg-white
                px-6
                pt-0
                pb-10
                sm:px-9
                lg:col-span-7
                lg:px-11
                lg:pt-0
                lg:pb-10
              "
            >
              {/* Label */}
              <p className="eyebrow">
                {currentProfile.label}
              </p>

              {/* Name */}
              <h2
                className="
                  mt-3
                  break-words
                  text-3xl
                  font-bold
                  uppercase
                  leading-tight
                  tracking-[-0.02em]
                  text-[#2a1259]
                  sm:text-4xl
                  lg:text-[2.8rem]
                "
              >
                {currentProfile.name}
              </h2>

              {/* Role */}
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#5f5c6b]">
                {currentProfile.role}
              </p>

              {/* Yellow Accent */}
              <div className="mt-5 h-[3px] w-14 bg-[#f4bd0a]" />

              {/* Description */}
              <div className="mt-5 max-w-[620px] space-y-3">
                {currentProfile.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[15px] leading-6 text-[#6b6875]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quote */}
              {currentProfile.quote && (
                <blockquote
                  className="
                    mt-6
                    max-w-[620px]
                    border-l-[3px]
                    border-[#f4bd0a]
                    pl-5
                    text-[15px]
                    font-medium
                    italic
                    leading-6
                    text-[#2a1259]
                  "
                >
                  {currentProfile.quote}
                </blockquote>
              )}

              {/* Slider Controls */}
              <div className="mt-7 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {profiles.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      aria-label={
                        isId
                          ? `Buka profil ${index + 1}`
                          : `Open profile ${index + 1}`
                      }
                      className={`h-2 transition-all duration-300 ${
                        activeSlide === index
                          ? 'w-8 bg-[#f4bd0a]'
                          : 'w-2 bg-[#dcd8e3]'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous profile"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-[#dcd8e3]
                      text-[#2a1259]
                      transition-colors
                      hover:border-[#2a1259]
                      hover:bg-[#2a1259]
                      hover:text-white
                    "
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next profile"
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-[#dcd8e3]
                      text-[#2a1259]
                      transition-colors
                      hover:border-[#2a1259]
                      hover:bg-[#2a1259]
                      hover:text-white
                    "
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;