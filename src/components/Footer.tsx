import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/anindojaya-logo.jpg';
import { contact } from '@/data/homeContent';

const Footer = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const id = language === 'id';

  const switchLanguage = (next: 'id' | 'en') => {
    if (next === language) return;
    const path = window.location.pathname.replace(/^\/(id|en)/, '') || '';
    navigate(`/${next}${path}`, { replace: true });
  };

  return (
    <footer className="bg-[#1f0e42] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-11 w-11 object-contain" />
            <span className="text-xl font-bold tracking-[0.04em]">ANINDOJAYA</span>
          </div>
          <p className="mt-5 max-w-[320px] text-sm leading-6 text-white/70">
            PT. Anindojaya Swakarsa. {id ? 'Bahan baku farmasi dan bahan pangan.' : 'Pharmaceutical raw materials and food ingredients.'}
          </p>
        </div>

        <div className="text-sm leading-6 text-white/80 lg:col-span-6">
          <p className="eyebrow on-dark">{id ? 'Kontak' : 'Contact'}</p>
          <address className="mt-5 not-italic">
            <p>{contact.address}</p>
            <p className="mt-4">{contact.email}<br />{contact.emailSecondary}</p>
            <p className="mt-4">{contact.phones.join(' / ')}<br />WA: {contact.whatsapp}</p>
            <p className="mt-4 text-white/60">{contact.hours[language]}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} PT. Anindojaya Swakarsa. {id ? 'Semua hak dilindungi.' : 'All rights reserved.'}</p>
          <div className="font-semibold tracking-wider">
            <button onClick={() => switchLanguage('id')} className={language === 'id' ? 'text-white' : 'hover:text-white'}>ID</button>
            <span className="mx-2 text-white/30">|</span>
            <button onClick={() => switchLanguage('en')} className={language === 'en' ? 'text-white' : 'hover:text-white'}>EN</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;