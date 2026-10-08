import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";
import Index from "./pages/Index";
import Pharmaceuticals from "./pages/Pharmaceuticals";
import Food from "./pages/Food";
import NotFound from "./pages/NotFound";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const queryClient = new QueryClient();

// Component to handle language-specific routes
const LanguageRoute = () => {
  const { lang } = useParams<{ lang: string }>();
  const validLanguages = ['id', 'en'];
  
  // Check if the language is valid
  if (!lang || !validLanguages.includes(lang)) {
    return <Navigate to="/id" replace />;
  }

  return (
    <LanguageProvider initialLanguage={lang as Language}>
      <Index />
    </LanguageProvider>
  );
};

// Component for Pharmaceuticals page with language context
const PharmaceuticalsRoute = () => {
  const { lang } = useParams<{ lang: string }>();
  const validLanguages = ['id', 'en'];
  
  if (!lang || !validLanguages.includes(lang)) {
    return <Navigate to="/id/pharmaceuticals" replace />;
  }

  return (
    <LanguageProvider initialLanguage={lang as Language}>
      <Pharmaceuticals />
    </LanguageProvider>
  );
};

// Component for Food page with language context
const FoodRoute = () => {
  const { lang } = useParams<{ lang: string }>();
  const validLanguages = ['id', 'en'];
  
  if (!lang || !validLanguages.includes(lang)) {
    return <Navigate to="/id/food" replace />;
  }

  return (
    <LanguageProvider initialLanguage={lang as Language}>
      <Food />
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to Indonesian by default */}
          <Route path="/" element={<Navigate to="/id" replace />} />
          
          {/* Language-specific routes */}
          <Route path="/:lang" element={<LanguageRoute />} />
          <Route path="/:lang/pharmaceuticals" element={<PharmaceuticalsRoute />} />
          <Route path="/:lang/chemicals" element={<Navigate to={`/:lang/pharmaceuticals`} replace />} />
          <Route path="/:lang/food" element={<FoodRoute />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
