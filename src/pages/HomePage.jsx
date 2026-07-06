
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import SplitSection from '../components/SplitSection';

import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <div className="font-[Geist] text-[16px] leading-[24px] selection:bg-[var(--color-primary-container)] selection:text-white">
      <SEO 
        title="Detailing Demons | Elite Automotive Precision" 
        description="Premium automotive detailing, military-grade ceramic coating, and precision paint protection film services in India and Dubai." 
      />
     
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SplitSection />
   
    </div>
  );
}
