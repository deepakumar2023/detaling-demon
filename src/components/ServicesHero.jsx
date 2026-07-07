import React from 'react';

const HERO_BG_IMAGE = "/services/servicemainpageimg.png";

export default function ServicesHero() {
  return (
    <header className="relative w-full h-[70vh] flex items-center pt-24 slant-header overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${HERO_BG_IMAGE}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 px-5 md:px-20 max-w-4xl">
        <h1 className="font-[Anybody] text-[48px] leading-[52px] md:text-[72px] md:leading-[80px] tracking-[-0.04em] font-extrabold text-[var(--color-on-surface-variant)] italic mb-6">
          ELITE <span className="text-[var(--color-primary-container)]">CERAMIC</span><br />ENGINEERING.
        </h1>
        <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-secondary)] max-w-xl">
          We don't just wash cars. We protect investments with aerospace-grade coatings and clinical precision. Experience the Demon Shield.
        </p>
      </div>
    </header>
  );
}
