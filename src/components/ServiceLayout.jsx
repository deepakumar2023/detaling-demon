import React from 'react';
import SEO from './SEO';
import { MdCheckCircle, MdShield, MdAutoAwesome, MdSpeed } from 'react-icons/md';
import { Reveal } from '../hooks/useReveal.jsx';

export default function ServiceLayout({
  title,
  subtitle,
  seoDescription,
  heroBgImage,
  heroDescription,
  splitImageUrl,
  splitTitle,
  splitSubtitle,
  splitDescription,
  features,
  benefitsTitle,
  benefits
}) {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <SEO 
        title={`${title} | Detailing Demons`} 
        description={seoDescription} 
      />
      
      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex items-center pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url('${heroBgImage}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-[var(--color-background)]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-5 md:px-20 max-w-4xl">
          <Reveal>
            <h1 className="font-[Anybody] text-[48px] leading-[52px] md:text-[72px] md:leading-[80px] tracking-[-0.04em] font-extrabold text-[var(--color-on-surface-variant)] italic mb-6">
              {title.split(' ')[0]} <span className="text-[var(--color-primary-container)]">{title.split(' ').slice(1).join(' ')}</span>
            </h1>
            {subtitle && (
              <h2 className="font-[Anybody] text-[24px] md:text-[32px] text-[var(--color-on-surface-variant)] italic mb-4">
                {subtitle}
              </h2>
            )}
            <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-secondary)] max-w-xl">
              {heroDescription}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] mt-10">
        {/* Image Side */}
        <div className="relative overflow-hidden group min-h-[400px] md:min-h-0">
          <div
            className="bg-cover bg-center w-full h-full transition-transform duration-[2000ms] group-hover:scale-110 absolute inset-0"
            style={{ backgroundImage: `url('${splitImageUrl}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] to-transparent md:bg-none" />
        </div>

        {/* Content Side */}
        <div className="bg-[var(--color-surface-container-lowest)] flex flex-col justify-center p-5 md:p-20">
          <Reveal>
            <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] mb-4 block uppercase">
              {splitSubtitle}
            </span>
            <h2 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold uppercase italic mb-8 text-[var(--color-on-surface-variant)]">
              {splitTitle}
            </h2>
            <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] mb-10 leading-relaxed">
              {splitDescription}
            </p>
            <ul className="space-y-4 mb-12">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-on-surface-variant)]"
                >
                  <MdCheckCircle className="text-[var(--color-primary)] text-xl flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-5 md:px-20 bg-[var(--color-surface-container)]">
        <Reveal>
          <div className="text-center mb-16">
             <h2 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold uppercase italic text-[var(--color-on-surface-variant)]">
              {benefitsTitle || "WHY CHOOSE THIS SERVICE?"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              // Select an icon based on index or title if needed
              const Icon = benefit.icon === 'shield' ? MdShield : benefit.icon === 'speed' ? MdSpeed : MdAutoAwesome;
              return (
                <div key={index} className="bg-[var(--color-surface-container-lowest)] p-10 border border-[var(--color-outline-variant)] hover:border-[var(--color-primary)] transition-colors h-full flex flex-col">
                  <Icon className="text-[40px] text-[var(--color-primary-container)] mb-6" />
                  <h3 className="font-[Space_Mono] text-[18px] font-bold text-[var(--color-on-surface-variant)] mb-4 uppercase">
                    {benefit.title}
                  </h3>
                  <p className="font-[Geist] text-[16px] text-[var(--color-secondary)] flex-grow">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-5 md:px-20 text-center bg-[var(--color-background)]">
        <Reveal>
          <h2 className="font-[Anybody] text-[32px] md:text-[48px] font-bold text-[var(--color-on-surface-variant)] italic mb-6 uppercase">
            READY TO PROTECT YOUR INVESTMENT?
          </h2>
          <p className="font-[Geist] text-[18px] text-[var(--color-secondary)] mb-10 max-w-2xl mx-auto">
            Get the ultimate detailing experience with our premium services. Don't compromise on quality when it comes to your vehicle.
          </p>
          <a href="/contact" className="inline-block bg-[var(--color-primary-container)] text-black font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase px-12 py-5 glow-red transition-all hover:scale-105">
            CONTACT US
          </a>
        </Reveal>
      </section>
    </div>
  );
}
