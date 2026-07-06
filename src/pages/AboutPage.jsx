import React, { useEffect } from 'react';

import SEO from '../components/SEO';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Micro-interactions for scrolling effects
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector('.hero-parallax');
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-[Geist] text-[16px] leading-[24px] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary-container)] carbon-bg">
      <SEO 
        title="About Us | Detailing Demons" 
        description="Learn about Detailing Demons' legacy of automotive perfection, engineered precision, and military-grade surface protection." 
      />
     
      <main className="pt-0">
        {/* Hero Section: The Cult */}
        <section className="relative h-screen flex items-center overflow-hidden border-b border-primary/20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10"></div>
            <img 
              className="hero-parallax w-full h-full object-cover grayscale brightness-75 contrast-125" 
              alt="A gritty, high-contrast, cinematic group portrait of a professional car detailing team" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWNanbx5ysuhWjFK_7hYRRkveyF5apHGXOJRIFWPM5EtRsYc00QprUC-v7eraFK2s8rnmtZ20XYZL2nGKoW4H-XqUiKyKhh2lYvYSc7DKneYN9cIskIVPYRBt-0viCajkEPhNbNzX1DVgQmPvs4j2cabt39IMi-9klpjS9i8rnEzElfWX8KI-YcYi1QYwOy113AYQJZ1MH1MUgm2gZmY4cme7ZYyuP14Vb4z7HgyCN6MygVV364yqkxxSW-t-pULQin9_mQhZ4uA"
            />
          </div>
          <div className="relative z-20 px-margin-desktop max-w-[1440px] mx-auto w-full">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-4 block uppercase glow-red-text">EST. 2014 — THE INNER CIRCLE</span>
              <h1 className="font-display-lg text-display-lg uppercase italic leading-none mb-6 text-on-surface">About <br/> <span className="text-primary glow-red-text">The Cult</span></h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                We don't clean cars. We perform exorcisms. We are the guardians of the gloss, the obsessed elite who see what others ignore.
              </p>
              <div className="flex gap-4">
                <div className="h-1 w-24 bg-primary mt-4"></div>
                <div className="font-label-caps text-label-caps uppercase italic text-on-surface">Precision is our only religion.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Obsession */}
        <section className="py-section-gap px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5">
              <h2 className="font-headline-lg text-headline-lg uppercase italic mb-8 red-line-acc text-on-surface">The Obsession</h2>
              <div className="space-y-6">
                <p className="font-body-lg text-body-lg text-on-surface">
                  Our philosophy is rooted in a fundamental refusal to accept "good enough." Every micro-swirl, every speck of industrial fallout, and every hint of orange peel is an affront to our standards.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We treat every vehicle as a high-fidelity instrument. Our process is non-linear, adaptive, and relentlessly focused on the atomic level of paint preservation and enhancement. We are not a service; we are a standard.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <div className="font-headline-md text-headline-md text-primary glow-red-text">0.01</div>
                    <div className="font-label-caps text-label-caps uppercase text-on-surface-variant">Micron Tolerance</div>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-2">
                    <div className="font-headline-md text-headline-md text-primary glow-red-text">∞</div>
                    <div className="font-label-caps text-label-caps uppercase text-on-surface-variant">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 relative">
              <div className="aspect-video relative overflow-hidden bg-surface-container border border-outline-variant/30">
                <img 
                  className="w-full h-full object-cover" 
                  alt="A macro close-up of a high-end dual-action polisher head making contact with the glossy black hood" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-I4QynRLJ-OeKQ6_Y4wxyvRzYlEWckOVqXoqsGr1guOsAcr9W5TNF8UG98LLOBPlIoPrJpIyFryZFpOWwqFhFURG5OWHU5Q8KGJW9cawi-Ra45W4mNIDQ4NGhWUTON1C6mqigibCEP3PrM0jEZro4abTwxuupvFpKpyjqvEq7P1JzZrv-iEUVbX7Vu_9BrR8fDiViRDw-dwyPi0mz2yaTw-yshRqNu_DrR5e1sCJZx4zaSOQC92Y_DCQHo9Y2rV5YI9ACak60A"
                />
                <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 font-label-caps text-label-caps text-on-primary-fixed uppercase font-bold">In-Action Precision</div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border-r-4 border-b-4 border-primary opacity-30"></div>
            </div>
          </div>
        </section>

        {/* Section: The Lab */}
        <section className="bg-surface-container-low py-section-gap">
          <div className="px-margin-desktop max-w-[1440px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg uppercase italic inline-block relative px-12 text-on-surface">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-1 bg-primary"></span>
                The Lab
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-1 bg-primary"></span>
              </h2>
              <p className="font-label-caps text-label-caps text-on-surface-variant mt-4">SURGICAL GRADE ENVIRONMENTS</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Spec Card 1 */}
              <div className="bg-surface-container-high p-8 border border-outline-variant/20 hover:border-primary transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>air_purifier</span>
                <h3 className="font-headline-md text-headline-md uppercase italic mb-4 text-on-surface">ISO-Class Air</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Negative pressure ventilation systems ensure zero airborne particulates during the coating application process.
                </p>
                <div className="text-primary font-label-caps text-[10px] tracking-widest uppercase">Status: Optimal</div>
              </div>
              {/* Spec Card 2 */}
              <div className="bg-surface-container-high p-8 border border-outline-variant/20 hover:border-primary transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>light_mode</span>
                <h3 className="font-headline-md text-headline-md uppercase italic mb-4 text-on-surface">Multi-Spectrum</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Our proprietary lighting array uses 15,000 lumens across variable Kelvin temperatures to reveal every defect.
                </p>
                <div className="text-primary font-label-caps text-[10px] tracking-widest uppercase">Status: Calibrated</div>
              </div>
              {/* Spec Card 3 */}
              <div className="bg-surface-container-high p-8 border border-outline-variant/20 hover:border-primary transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
                <span className="material-symbols-outlined text-primary mb-6 text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>precision_manufacturing</span>
                <h3 className="font-headline-md text-headline-md uppercase italic mb-4 text-on-surface">Atomic Seals</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Climate-controlled curing zones locked at precisely 72°F and 40% humidity for perfect molecular bonding.
                </p>
                <div className="text-primary font-label-caps text-[10px] tracking-widest uppercase">Status: Locked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The Masters */}
        <section className="py-section-gap px-margin-desktop max-w-[1440px] mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-display-lg text-[64px] leading-tight uppercase italic glow-red-text text-on-surface">The <br/>Masters</h2>
            </div>
            <div className="max-w-md text-right border-r-4 border-primary pr-6">
              <p className="font-body-md text-body-md text-on-surface">
                Our technicians are craftsmen, vetted through years of rigorous paint correction training. Meet the hands behind the halo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Master 1 */}
            <div className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-4 skew-box border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                <img 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 skew-fix scale-110 group-hover:scale-100" 
                  alt="A portrait of a lead car detailing master" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQNBnCmlvPk-kQeCeARu0Xsx2rS-bY9gvUc-crq9NaJh7ie0vgQi4HrS57dl1QSdQKBVqtG6ebZOYScl84ixpogcvzdO7JNu4aTHtG-vOfuQPVR1b8klwN7r2xmeFOuNvM7kPxEXbsSXzmTWy1USzVpXVuJ7mBqDIpx2Dl2AIi8pUtdyMvsjqz6jBVqxgFkmHfsz9sTTtfga649FsNsuo94zwE8t8Bdc5k9zDtMTWWgAveszPxjV8X1en_0-aFoM7ig6aCAyrILA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 skew-fix">
                  <div className="font-headline-md text-2xl uppercase italic text-on-surface mb-0">Victor "The Blade"</div>
                  <div className="font-label-caps text-[10px] text-primary tracking-widest uppercase font-bold">Chief Paint Surgeon</div>
                </div>
              </div>
            </div>
            {/* Master 2 */}
            <div className="group relative lg:mt-12">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-4 skew-box border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                <img 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 skew-fix scale-110 group-hover:scale-100" 
                  alt="A professional detailer focused on their work" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBINUkS-rIsKIvCaVug8cdHxY9lWwo9d1OBsBQ7FQkQY_UavnZDyTLwmA4H9vUiPpGTzOrALW2-wkffFqU-9U8oC5TYlASMa99msMI_huLxyEfoGpEyF_71Vim6c7MHoakOxtHFXqq0Gj1JrOJ_Ob06jJgZ1d_4UFHeAuTaQ7c50ZiuaL42z1A3EceHdTpb4ewh8TRxcUEM--4u3-rCN5dLBxAqEb-hY7uKhO2CclG0GWYcai7WtKkTehUgqxdyGzBxaxH68B8O3g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 skew-fix">
                  <div className="font-headline-md text-2xl uppercase italic text-on-surface mb-0">Elias Thorne</div>
                  <div className="font-label-caps text-[10px] text-primary tracking-widest uppercase font-bold">Ceramic Specialist</div>
                </div>
              </div>
            </div>
            {/* Master 3 */}
            <div className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-4 skew-box border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                <img 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 skew-fix scale-110 group-hover:scale-100" 
                  alt="A portrait of a technician standing with arms crossed" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqjmYrzACjou8FZKs3GtYz_uS-18EWlJ5EKwKIZ8Ue57aY7QV1ZEJNIO3K3bq5kSuTu7tXlxghSp13OdGCP-zk0t4Mk_3zHHrRpWHPhRrc_56ph1Rseg1FcjcgupPS7WyUsh4HqH6PtE-hWswzPqLsyHc-vtZC3oM8UGihN-XCV91zDK02V0XH5V3HVpv86cIkmvPZjOm-wMn0qj56uQdIiAucVg03cYOMlvvjntJn46D4vo3fdR8u3ruRAB8MtdU5ZfgrN-h78g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 skew-fix">
                  <div className="font-headline-md text-2xl uppercase italic text-on-surface mb-0">Marcus Kane</div>
                  <div className="font-label-caps text-[10px] text-primary tracking-widest uppercase font-bold">PPF Engineer</div>
                </div>
              </div>
            </div>
            {/* Master 4 */}
            <div className="group relative lg:mt-12">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-4 skew-box border border-outline-variant/30 group-hover:border-primary/50 transition-colors">
                <img 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 skew-fix scale-110 group-hover:scale-100" 
                  alt="A close-up dramatic portrait of a detailing master" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzI-4WfQ7ehexG5Af2l6U_34Jm2u-t6cHGS6a2d6qVJWK9BsaFwY841-QxL-Hvmi08rbZLyqkFtynEAmssLW9s-Xlfi1kOwN5pffHwInzuhueTDsmnimYyK4XYVVND0gIxC8tKIwwbFvuNg08IXvCzO6FJ8ba7XHEuRqjrL2uSNcmeq7VSInu1VOmbvll9VvOrwMcxse94QhugZgijY8MHnqKUvaKYkAaV0W1ymGRQ9h2jTWDqXVMdmlBYHr5Uj3Z_cdGershGvQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 skew-fix">
                  <div className="font-headline-md text-2xl uppercase italic text-on-surface mb-0">Jax Vane</div>
                  <div className="font-label-caps text-[10px] text-primary tracking-widest uppercase font-bold">Master Finisher</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-gap relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-container/10 skew-y-3 origin-right z-0"></div>
          <div className="px-margin-desktop max-w-[1440px] mx-auto text-center relative z-10">
            <h2 className="font-display-lg text-display-lg uppercase italic mb-8 text-on-surface">Ready to <span className="text-primary glow-red-text">Convert?</span></h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mb-12">
              Our schedule is tight, and our standards are absolute. Secure your appointment for the ultimate automotive transformation.
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-primary text-black px-12 py-4 font-label-caps text-label-caps uppercase font-bold hover:bg-white hover:text-black transition-colors cursor-pointer">
                Initialize Booking
              </button>
              <button className="border-2 border-primary text-primary px-12 py-4 font-label-caps text-label-caps uppercase font-bold hover:bg-primary hover:text-black transition-colors cursor-pointer">
                View Showroom
              </button>
            </div>
          </div>
        </section>
      </main>
</div>
  );
}
