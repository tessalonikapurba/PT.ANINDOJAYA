import HomeHero from '@/components/home/HomeHero';
import WhatWeDo from '@/components/home/WhatWeDo';
import BusinessDivisions from '@/components/home/BusinessDivisions';
import FounderStory from '@/components/home/FounderStory';
import JourneyTimeline from '@/components/home/JourneyTimeline';
import ProductCategories from '@/components/home/ProductCategories';
import PrincipalsSection from '@/components/home/PrincipalsSection';
import WhyAnindojaya from '@/components/home/WhyAnindojaya';
import LatestInsights from '@/components/home/LatestInsights';
import ContactCta from '@/components/home/ContactCta';

const CorporateHome = () => (
  <main>
    <HomeHero />
    <WhatWeDo />
    <BusinessDivisions />
    <FounderStory />
    <JourneyTimeline />
    <ProductCategories />
    <PrincipalsSection />
    <WhyAnindojaya />
    <LatestInsights />
    <ContactCta />
  </main>
);

export default CorporateHome;
