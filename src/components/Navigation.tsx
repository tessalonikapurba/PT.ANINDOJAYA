import { useState } from 'react';

import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

import { useNavigate, useParams } from 'react-router-dom';

import logo from '@/assets/anindojaya-logo.jpg';

type Item = {
  label: string;
  href: string;
};

type NavEntry = {
  key: string;
  label: string;
  href: string;
  children?: Item[];
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const { language } = useLanguage();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const id = language === 'id';

  const go = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(`/${lang}${href}`);
      }
    } else {
      navigate(href);
    }

    setOpen(false);
    setOpenMenu(null);
  };

  const switchLanguage = (next: 'id' | 'en') => {
    if (next === language) return;

    const path =
      window.location.pathname.replace(/^\/(id|en)/, '') || '';

    navigate(`/${next}${path}${window.location.hash}`, {
      replace: true,
    });

    setOpen(false);
    setOpenMenu(null);
  };

  const menu: NavEntry[] = [
    {
      key: 'about',
      label: id ? 'Tentang' : 'About',
      href: '#about',
    },

    {
      key: 'products',
      label: id ? 'Produk' : 'Products',
      href: '#products',
      children: [
        {
          label: id
            ? 'Bahan Baku Farmasi'
            : 'Pharmaceutical Ingredients',
          href: `/${lang}/pharmaceuticals`,
        },
        {
          label: id
            ? 'Bahan Pangan & Sweetener'
            : 'Food Ingredients & Sweetener',
          href: `/${lang}/food`,
        },
      ],
    },

    {
      key: 'industries',
      label: id ? 'Industri' : 'Industries',
      href: '#industries',
      children: [
        {
          label: id ? 'Farmasi' : 'Pharmaceutical',
          href: `/${lang}/pharmaceuticals`,
        },
        {
          label: id ? 'Makanan & Minuman' : 'Food & Beverage',
          href: `/${lang}/food`,
        },
      ],
    },

    {
      key: 'story',
      label: id ? 'Kisah Kami' : 'Our Story',
      href: '#story',
    },

    {
      key: 'principals',
      label: id ? 'Principal' : 'Principals',
      href: '#principals',
    },

    {
      key: 'insights',
      label: id ? 'Wawasan' : 'Insights',
      href: '#insights',
    },

    {
      key: 'contact',
      label: id ? 'Kontak' : 'Contact',
      href: '#contact',
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#dcd8e3] bg-white">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <button
          onClick={() => go(`/${lang}`)}
          className="flex items-center gap-3"
          aria-label="Anindojaya"
        >
          <img
            src={logo}
            alt=""
            className="h-10 w-10 object-contain"
          />

          <span className="text-left leading-none">
            <span className="block text-lg font-bold tracking-[0.04em] text-[#2a1259]">
              ANINDOJAYA
            </span>

            <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5f5c6b] sm:block">
              Pharmaceutical &amp; Food Ingredients
            </span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-7"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {menu.map((m) => (
            <div
              key={m.key}
              className="relative"
              onMouseEnter={() =>
                setOpenMenu(m.children ? m.key : null)
              }
            >
              <button
                onClick={() =>
                  m.children
                    ? setOpenMenu(
                        openMenu === m.key ? null : m.key
                      )
                    : go(m.href)
                }
                aria-expanded={
                  m.children
                    ? openMenu === m.key
                    : undefined
                }
                className="nav-link inline-flex items-center gap-1"
              >
                {m.label}

                {m.children && (
                  <ChevronDown className="h-3 w-3" />
                )}
              </button>

              {/* Dropdown */}
              {m.children && openMenu === m.key && (
                <ul
                  className="
                    absolute
                    left-0
                    top-full
                    min-w-[260px]
                    border
                    border-[#dcd8e3]
                    bg-white
                    py-2
                    shadow-md
                  "
                >
                  {m.children.map((c) => (
                    <li key={c.label}>
                      <button
                        onClick={() => go(c.href)}
                        className="
                          block
                          w-full
                          px-5
                          py-3
                          text-left
                          text-sm
                          font-medium
                          text-[#2a1259]
                          transition-colors
                          hover:bg-[#f3f2f5]
                        "
                      >
                        {c.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 lg:flex">

          {/* Language */}
          <div className="text-xs font-semibold tracking-wider text-[#5f5c6b]">
            <button
              onClick={() => switchLanguage('id')}
              className={
                language === 'id'
                  ? 'text-[#2a1259]'
                  : 'hover:text-[#2a1259]'
              }
            >
              ID
            </button>

            <span className="mx-2 text-[#dcd8e3]">
              |
            </span>

            <button
              onClick={() => switchLanguage('en')}
              className={
                language === 'en'
                  ? 'text-[#2a1259]'
                  : 'hover:text-[#2a1259]'
              }
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={() => go('#contact')}
            className="btn btn-gold !min-h-[40px] !px-5 !text-xs"
          >
            {id ? 'Hubungi' : 'Inquire'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-[#2a1259] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-[#dcd8e3] bg-white px-5 pb-6 pt-2 lg:hidden">
          {menu.map((m) => (
            <div
              key={m.key}
              className="border-b border-[#eeecf2]"
            >
              <button
                onClick={() => go(m.href)}
                className="
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  text-left
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  text-[#2a1259]
                "
              >
                {m.label}
              </button>

              {m.children && (
                <div className="mb-2 ml-3 border-l-2 border-[#f4bd0a] pl-4">
                  {m.children.map((c) => (
                    <button
                      key={c.label}
                      onClick={() => go(c.href)}
                      className="
                        block
                        min-h-[44px]
                        w-full
                        text-left
                        text-sm
                        text-[#5f5c6b]
                      "
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Language + CTA */}
          <div className="mt-5 flex items-center justify-between">
            <div className="text-sm font-semibold">
              <button
                onClick={() => switchLanguage('id')}
                className={
                  language === 'id'
                    ? 'text-[#2a1259]'
                    : 'text-[#5f5c6b]'
                }
              >
                ID
              </button>

              <span className="mx-2 text-[#dcd8e3]">
                |
              </span>

              <button
                onClick={() => switchLanguage('en')}
                className={
                  language === 'en'
                    ? 'text-[#2a1259]'
                    : 'text-[#5f5c6b]'
                }
              >
                EN
              </button>
            </div>

            <button
              onClick={() => go('#contact')}
              className="btn btn-gold"
            >
              {id ? 'Hubungi' : 'Inquire'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;