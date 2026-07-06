import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import ComparisonSlider from '../components/ComparisonSlider';
import TechSpecs from '../components/TechSpecs';
import PricingPackages from '../components/PricingPackages';
import Footer from '../components/Footer';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-[Geist] text-[16px] leading-[24px] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary-container)]">
      <Navbar />
      <ServicesHero />
      <ComparisonSlider />
      <TechSpecs />
      <PricingPackages />
      <Footer />
    </div>
  );
}
