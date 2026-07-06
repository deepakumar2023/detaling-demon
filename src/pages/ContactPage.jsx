import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaWhatsapp } from 'react-icons/fa';
export default function ContactPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="font-[Geist] text-[16px] leading-[24px] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary-container)] carbon-bg text-[var(--color-on-surface)]">
      <Navbar />
      
      <main className="pt-32 pb-section-gap max-w-[1440px] mx-auto px-5 md:px-margin-desktop min-h-screen">
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px w-12 bg-[var(--color-primary-container)]"></div>
            <span className="font-label-caps text-[var(--color-primary-container)] tracking-widest uppercase">Intake Protocol v4.0</span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase italic leading-none text-[var(--color-on-surface)]">
            Vehicle <span className="text-[var(--color-primary-container)]">Encryption</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left: Contact Details & Emergency Line */}
          <aside className="lg:col-span-5 space-y-12">
            <div className="relative p-2 border border-[var(--color-outline-variant)]/30 bg-[var(--color-surface-container-low)] overflow-hidden">
              <div className="scanline"></div>
              <div className="p-8 space-y-8 relative z-10">
                {/* Primary Location */}
                <div className="space-y-4">
                  <h3 className="font-label-caps text-[var(--color-on-surface-variant)] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary-container)]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    India HQ
                  </h3>
                  <p className="font-headline-md text-body-lg leading-tight text-[var(--color-on-surface)]">
                    First Floor Office 16 Tower 2, Graphix, Block A,<br/>
                    Sector 62, Noida, Uttar Pradesh 201309
                  </p>
                  <div className="space-y-1 pt-2">
                    <h4 className="font-label-caps text-[var(--color-on-surface-variant)] text-[10px] uppercase">Direct Frequency</h4>
                    <p className="font-body-lg text-body-lg font-bold">+91 7291004000 / 7291004001 / 7291004005</p>
                  </div>
                </div>

                <div className="h-px w-full bg-[var(--color-outline-variant)]/30"></div>

                {/* Secondary Location */}
                <div className="space-y-4">
                  <h3 className="font-label-caps text-[var(--color-on-surface-variant)] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[var(--color-primary-container)]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    Dubai
                  </h3>
                  <p className="font-headline-md text-body-lg leading-tight text-[var(--color-on-surface)]">
                    21/2 12th St - Al Qouz Ind.second<br/>
                    Al Quoz - Dubai - United Arab Emirates
                  </p>
                </div>

                <div className="h-px w-full bg-[var(--color-outline-variant)]/30"></div>

                <div className="space-y-2 text-[var(--color-on-surface)]">
                  <h4 className="font-label-caps text-[var(--color-on-surface-variant)] text-[10px] uppercase">Secure Intel</h4>
                  <p className="font-body-lg text-[14px] font-bold">INFO@DETAILINGDEMONS.COM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Inquiry */}
            <a className="group block relative p-1 bg-[var(--color-primary-container)] transition-all hover:glow-red" href="https://wa.me/917291004000" target="_blank" rel="noopener noreferrer">
              <div className="bg-black p-8 flex items-center justify-between transition-colors group-hover:bg-[var(--color-primary-container)]/10">
                <div>
                  <span className="font-label-caps text-[var(--color-primary-container)] group-hover:text-white transition-colors">Instant Support</span>
                  <h2 className="font-headline-md text-headline-md text-white uppercase italic">WhatsApp Inquiry</h2>
                </div>
                <FaWhatsapp className="text-[var(--color-primary-container)] text-5xl group-hover:text-white transition-colors" />
              </div>
            </a>

            {/* Custom Dark Map */}
            <div className="w-full h-80 relative border border-[var(--color-outline-variant)]/30 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="absolute inset-0 bg-[var(--color-primary-container)]/5 pointer-events-none z-10"></div>
              <div className="w-full h-full bg-[var(--color-surface-container-highest)]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="A cinematic, high-contrast satellite view of a coastal industrial district at night in Florida" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiyeIcKEr1nXn7UWOHVdP3AP53t1lBHIaKK24fYory7Pn7W--ChprDKYthbmvIZl9i8SV-gbUzS245VyD09PpT7SJM3AJeiAHQjrrMk_xf7doK3EBBVGTqVHxgzum2W_g8Uc4fKzpw3THQEFWvPXvW8bSTL1nNLNXvU_aqh2hPdzdVG894HQ8dH9NxXtOTBPcfgQezh_ch1Jn5yZcCI5FQ9p3DKVdBjtpHG0TllhgrCWPZRJNxqe1ebhs2sBZS_cWmz_maqhQ9rQ"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-[var(--color-primary-container)] blur-xl opacity-50 animate-pulse"></div>
                  <span className="material-symbols-outlined text-[var(--color-primary-container)] relative text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Multi-step Booking Form */}
          <section className="lg:col-span-7 bg-[var(--color-surface-container)] p-5 md:p-12 border border-[var(--color-outline-variant)]/20 relative mt-8 lg:mt-0">
            <div className="absolute top-0 right-0 p-4 font-label-caps text-[10px] text-[var(--color-outline)] opacity-50">
              SECURE_INTAKE_SESSION: 0x9823-DD
            </div>
            
            <form className="space-y-10" id="intake-form" onSubmit={handleSubmit}>
              {/* Progress Bar */}
              <div className="flex gap-2 h-1 mb-12">
                <div className="flex-1 bg-[var(--color-primary-container)] h-full"></div>
                <div className={`flex-1 h-full transition-colors duration-500 ${activeStep >= 2 ? 'bg-[var(--color-primary-container)]' : 'bg-[var(--color-outline-variant)]'}`}></div>
                <div className={`flex-1 h-full transition-colors duration-500 ${activeStep >= 3 ? 'bg-[var(--color-primary-container)]' : 'bg-[var(--color-outline-variant)]'}`}></div>
              </div>

              {/* Step 1: Vehicle Specs */}
              <div className="space-y-8" id="form-step-1">
                <div className="flex items-end gap-4">
                  <span className="font-headline-md text-headline-md text-[var(--color-primary-container)]">01</span>
                  <h3 className="font-label-caps uppercase text-[var(--color-on-surface)]">Vehicle Identification</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-2">
                    <label className="font-label-caps text-[var(--color-outline)] text-[10px] uppercase">Make / Manufacturer</label>
                    <input 
                      className="w-full bg-[var(--color-surface-container-low)] border-0 border-b-2 border-[var(--color-outline-variant)]/50 p-4 text-[var(--color-on-surface)] input-focus-effect font-headline-md transition-all outline-none" 
                      placeholder="e.g. Porsche" 
                      type="text"
                      onFocus={() => setActiveStep(Math.max(activeStep, 1))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-[var(--color-outline)] text-[10px] uppercase">Model / Variant</label>
                    <input 
                      className="w-full bg-[var(--color-surface-container-low)] border-0 border-b-2 border-[var(--color-outline-variant)]/50 p-4 text-[var(--color-on-surface)] input-focus-effect font-headline-md transition-all outline-none" 
                      placeholder="e.g. 911 GT3 RS" 
                      type="text"
                      onFocus={() => setActiveStep(Math.max(activeStep, 1))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-[var(--color-outline)] text-[10px] uppercase">Condition Severity (1-10)</label>
                  <input 
                    className="w-full accent-[var(--color-primary-container)] bg-[var(--color-outline-variant)] h-1 rounded-none appearance-none cursor-pointer" 
                    max="10" 
                    min="1" 
                    type="range"
                    defaultValue="5"
                    onChange={() => setActiveStep(Math.max(activeStep, 1))}
                  />
                  <div className="flex justify-between font-label-caps text-[10px] text-[var(--color-outline)]">
                    <span>PRISTINE</span>
                    <span>TOTAL RECOVERY</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Service Arsenal */}
              <div className="space-y-8" id="form-step-2">
                <div className="flex items-end gap-4">
                  <span className="font-headline-md text-headline-md text-[var(--color-primary-container)]">02</span>
                  <h3 className="font-label-caps uppercase text-[var(--color-on-surface)]">Service Configuration</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {/* Service Cards */}
                  <label className="relative cursor-pointer group">
                    <input 
                      className="peer sr-only" 
                      type="checkbox"
                      defaultChecked
                      onChange={() => setActiveStep(Math.max(activeStep, 2))}
                    />
                    <div className="p-6 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/30 peer-checked:border-[var(--color-primary-container)] peer-checked:bg-[var(--color-primary-container)]/5 transition-all flex items-center gap-6">
                      <div className="material-symbols-outlined text-3xl text-[var(--color-on-surface)] peer-checked:text-[var(--color-primary-container)]">shield</div>
                      <div className="flex-1 text-[var(--color-on-surface)]">
                        <h4 className="font-headline-md text-body-lg font-bold uppercase">Ceramic Pro Coating</h4>
                        <p className="text-xs text-[var(--color-outline)]">Nano-technology shielding. Lifetime warranty.</p>
                      </div>
                      <div className="w-6 h-6 border-2 border-[var(--color-outline-variant)] group-hover:border-[var(--color-primary-container)] peer-checked:bg-[var(--color-primary-container)] flex items-center justify-center">
                        <span className="material-symbols-outlined text-black text-sm hidden peer-checked:block">check</span>
                      </div>
                    </div>
                  </label>

                  <label className="relative cursor-pointer group">
                    <input 
                      className="peer sr-only" 
                      type="checkbox"
                      onChange={() => setActiveStep(Math.max(activeStep, 2))}
                    />
                    <div className="p-6 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/30 peer-checked:border-[var(--color-primary-container)] peer-checked:bg-[var(--color-primary-container)]/5 transition-all flex items-center gap-6">
                      <div className="material-symbols-outlined text-3xl text-[var(--color-on-surface)] peer-checked:text-[var(--color-primary-container)]">auto_fix_high</div>
                      <div className="flex-1 text-[var(--color-on-surface)]">
                        <h4 className="font-headline-md text-body-lg font-bold uppercase">Multi-Stage Correction</h4>
                        <p className="text-xs text-[var(--color-outline)]">Eradicating swirls and surface defects.</p>
                      </div>
                      <div className="w-6 h-6 border-2 border-[var(--color-outline-variant)] group-hover:border-[var(--color-primary-container)] peer-checked:bg-[var(--color-primary-container)] flex items-center justify-center">
                        <span className="material-symbols-outlined text-black text-sm hidden peer-checked:block">check</span>
                      </div>
                    </div>
                  </label>

                  <label className="relative cursor-pointer group">
                    <input 
                      className="peer sr-only" 
                      type="checkbox"
                      onChange={() => setActiveStep(Math.max(activeStep, 2))}
                    />
                    <div className="p-6 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)]/30 peer-checked:border-[var(--color-primary-container)] peer-checked:bg-[var(--color-primary-container)]/5 transition-all flex items-center gap-6">
                      <div className="material-symbols-outlined text-3xl text-[var(--color-on-surface)] peer-checked:text-[var(--color-primary-container)]">airline_seat_recline_extra</div>
                      <div className="flex-1 text-[var(--color-on-surface)]">
                        <h4 className="font-headline-md text-body-lg font-bold uppercase">Deep Interior Sanitization</h4>
                        <p className="text-xs text-[var(--color-outline)]">Steam extraction and leather nourishment.</p>
                      </div>
                      <div className="w-6 h-6 border-2 border-[var(--color-outline-variant)] group-hover:border-[var(--color-primary-container)] peer-checked:bg-[var(--color-primary-container)] flex items-center justify-center">
                        <span className="material-symbols-outlined text-black text-sm hidden peer-checked:block">check</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 3: Deployment Window */}
              <div className="space-y-8" id="form-step-3">
                <div className="flex items-end gap-4">
                  <span className="font-headline-md text-headline-md text-[var(--color-primary-container)]">03</span>
                  <h3 className="font-label-caps uppercase text-[var(--color-on-surface)]">Mission Schedule</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[var(--color-primary-container)] text-sm">event</span>
                    <label className="font-label-caps text-[var(--color-outline)] text-[10px] uppercase tracking-widest">Select Target Date</label>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <button onClick={() => setActiveStep(3)} className="p-4 bg-[var(--color-surface-container-low)] border border-[var(--color-primary-container)] text-[var(--color-primary-container)] font-label-caps text-center hover:bg-[var(--color-primary-container)] hover:text-black transition-all cursor-pointer" type="button">ASAP</button>
                    <button onClick={() => setActiveStep(3)} className="p-4 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] font-label-caps text-center hover:border-[var(--color-primary-container)] transition-all focus:border-[var(--color-primary-container)] focus:text-[var(--color-primary-container)] cursor-pointer" type="button">OCT 24</button>
                    <button onClick={() => setActiveStep(3)} className="p-4 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] font-label-caps text-center hover:border-[var(--color-primary-container)] transition-all focus:border-[var(--color-primary-container)] focus:text-[var(--color-primary-container)] cursor-pointer" type="button">OCT 25</button>
                    <button onClick={() => setActiveStep(3)} className="p-4 bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] font-label-caps text-center hover:border-[var(--color-primary-container)] transition-all focus:border-[var(--color-primary-container)] focus:text-[var(--color-primary-container)] cursor-pointer" type="button">OCT 26</button>
                  </div>
                </div>

                <div className="space-y-4 pt-8">
                  <button 
                    className={`w-full ${isSubmitted ? 'bg-green-600' : 'bg-[var(--color-primary-container)]'} text-black font-label-caps py-6 text-lg uppercase font-black flex items-center justify-center gap-4 hover:glow-red transition-all active:scale-[0.98] cursor-pointer`}
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    style={{ pointerEvents: isSubmitting ? 'none' : 'auto', opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? (
                      <><span className="material-symbols-outlined animate-spin">sync</span> ENCRYPTING DATA...</>
                    ) : isSubmitted ? (
                      <><span className="material-symbols-outlined">check_circle</span> PROTOCOL COMPLETE</>
                    ) : (
                      <>
                        Initiate Booking Protocol
                        <span className="material-symbols-outlined font-black">arrow_forward</span>
                      </>
                    )}
                  </button>
                  <p className="text-center font-label-caps text-[10px] text-[var(--color-outline)] uppercase tracking-[0.2em]">
                    All bookings are final upon technical review.
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
