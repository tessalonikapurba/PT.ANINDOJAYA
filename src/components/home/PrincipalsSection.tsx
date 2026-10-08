import { principals } from '@/data/homeContent';
import { useHome } from './useHome';

const PrincipalsSection = () => {
  const { isId } = useHome();

  return (
    <section
      id="principals"
      className="bg-[#f3f2f5] py-14 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* Header */}
        <div>
          <p className="eyebrow">
            {isId ? 'Principal Kami' : 'Our principals'}
          </p>

          <h2
            className="
              h-section
              mt-4
              max-w-[900px]
            "
          >
            {isId
              ? 'Kemitraan jangka panjang dengan produsen tepercaya'
              : 'Long-term partnerships with trusted manufacturers'}
          </h2>
        </div>

        {/* Principal Logos */}
        <ul
          className="
            mt-10
            grid
            grid-cols-2
            border-l
            border-t
            border-[#dcd8e3]
            bg-white
            lg:mt-12
            lg:grid-cols-3
          "
        >
          {principals.map((p) => (
            <li
              key={p.name}
              className="
                flex
                h-[150px]
                items-center
                justify-center
                border-b
                border-r
                border-[#dcd8e3]
                p-6
                sm:h-[170px]
                sm:p-8
                lg:h-[190px]
                lg:p-10
              "
            >
              <img
                src={p.logo}
                alt={p.name}
                loading="lazy"
                className="
                  max-h-full
                  max-w-[85%]
                  object-contain
                "
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default PrincipalsSection;