import React from 'react';
import { MdCheckCircle, MdCancel } from 'react-icons/md';

export default function PricingPackages() {
  return (
    <section className="px-5 md:px-20 py-[120px] max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[var(--color-primary)] italic uppercase mb-4">THE ARSENAL</h2>
        <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-secondary)] max-w-2xl mx-auto">Select your level of dominance. Every package includes a multi-stage decontamination wash.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Package 1 */}
        <div className="bg-[var(--color-surface-container)] p-8 border border-[var(--color-surface-container-highest)] hover:glow-red transition-all duration-500">
          <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-secondary)] uppercase block mb-4">Entry Tier</span>
          <h3 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[var(--color-on-surface)] mb-2 uppercase">CERAMIC PRO</h3>
          <div className="text-4xl font-[Anybody] font-extrabold text-[var(--color-primary)] mb-8 tracking-[-0.04em]">$799<span className="text-sm font-[Space_Mono] tracking-[0.1em] text-[var(--color-secondary)] ml-2 uppercase">USD</span></div>
          <ul className="space-y-4 mb-10 text-[var(--color-on-surface-variant)] font-[Geist] text-[16px] leading-[24px] border-t border-[var(--color-surface-container-highest)] pt-6">
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> 2-Year Protection</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Single Stage Polish</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Glass Coating (Front)</li>
            <li className="flex items-center gap-2 text-[var(--color-secondary)]/50 line-through"><MdCancel className="text-[var(--color-secondary)]/30 text-xl" /> Full Interior Armor</li>
          </ul>
          <button className="w-full py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-all">SELECT PACKAGE</button>
        </div>
        
        {/* Package 2 - Featured */}
        <div className="bg-[var(--color-surface-container-high)] p-8 border-2 border-[var(--color-primary)] scale-105 shadow-[0_0_40px_rgba(230,0,0,0.2)] relative z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-[var(--color-background)] px-4 py-1 font-[Space_Mono] text-[10px] uppercase font-bold tracking-widest">MOST AGGRESSIVE</div>
          <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] uppercase block mb-4">Professional Tier</span>
          <h3 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[var(--color-on-surface)] mb-2 uppercase">THE DEMON SHIELD</h3>
          <div className="text-4xl font-[Anybody] font-extrabold text-[var(--color-primary)] mb-8 tracking-[-0.04em]">$1,499<span className="text-sm font-[Space_Mono] tracking-[0.1em] text-[var(--color-secondary)] ml-2 uppercase">USD</span></div>
          <ul className="space-y-4 mb-10 text-[var(--color-on-surface)] font-[Geist] text-[16px] leading-[24px] border-t border-[var(--color-primary)]/20 pt-6">
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> 5-Year Protection</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Dual Stage Paint Correction</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> All Glass &amp; Rim Coating</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Interior Leather Coating</li>
          </ul>
          <button className="w-full py-4 bg-[var(--color-primary)] text-[var(--color-background)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase hover:glow-red transition-all">CHOOSE DEMON SHIELD</button>
        </div>
        
        {/* Package 3 */}
        <div className="bg-[var(--color-surface-container)] p-8 border border-[var(--color-surface-container-highest)] hover:glow-red transition-all duration-500">
          <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-secondary)] uppercase block mb-4">Ultimate Tier</span>
          <h3 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[var(--color-on-surface)] mb-2 uppercase">TRACK READY</h3>
          <div className="text-4xl font-[Anybody] font-extrabold text-[var(--color-primary)] mb-8 tracking-[-0.04em]">$2,899<span className="text-sm font-[Space_Mono] tracking-[0.1em] text-[var(--color-secondary)] ml-2 uppercase">USD</span></div>
          <ul className="space-y-4 mb-10 text-[var(--color-on-surface-variant)] font-[Geist] text-[16px] leading-[24px] border-t border-[var(--color-surface-container-highest)] pt-6">
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Lifetime Protection</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Full Paint Correction</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Caliper &amp; Undercarriage</li>
            <li className="flex items-center gap-2"><MdCheckCircle className="text-[var(--color-primary)] text-xl" /> Anti-Microbial Interior</li>
          </ul>
          <button className="w-full py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-all">SELECT PACKAGE</button>
        </div>
      </div>
    </section>
  );
}
