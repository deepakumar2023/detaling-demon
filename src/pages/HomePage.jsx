import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import SplitSection from '../components/SplitSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="font-[Geist] text-[16px] leading-[24px] selection:bg-[var(--color-primary-container)] selection:text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SplitSection />
      <Footer />
    </div>
  );
}
