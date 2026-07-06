import React, { useEffect } from 'react';

import ServicesHero from '../components/ServicesHero';
import ComparisonSlider from '../components/ComparisonSlider';
import TechSpecs from '../components/TechSpecs';
import PricingPackages from '../components/PricingPackages';

import SEO from '../components/SEO';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-[Geist] text-[16px] leading-[24px] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary-container)]">
      <SEO 
        title="Our Services | Detailing Demons" 
        description="Explore our elite detailing services, ceramic coatings, paint correction, and PPF packages." 
      />
     
      <ServicesHero />
      <ComparisonSlider />
      <TechSpecs />
      <PricingPackages />
     
    </div>
  );
}
