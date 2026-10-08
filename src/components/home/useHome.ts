import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Bi } from '@/data/homeContent';

/** Shared helpers for homepage sections: language pick + routing. */
export const useHome = () => {
  const { language } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const pick = (b: Bi) => b[language];
  const scrollTo = (hash: string) => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  const goTo = (page: string) => navigate(`/${lang}/${page}`);
  return { language, isId: language === 'id', lang, pick, scrollTo, goTo };
};
