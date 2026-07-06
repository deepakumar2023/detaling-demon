import React from 'react';
import { MdShield, MdOpacity, MdSunny, MdAutoAwesome } from 'react-icons/md';

const specs = [
  {
    icon: MdShield,
    title: "9H HARDNESS",
    description: "Permanent protection against scratches, stone chips, and bird droppings."
  },
  {
    icon: MdOpacity,
    title: "HYDROPHOBIC",
    description: "Self-cleaning effect ensures dirt and water slide off instantly."
  },
  {
    icon: MdSunny,
    title: "UV RESISTANT",
    description: "Blocks harmful UV rays to prevent paint oxidation and fading."
  },
  {
    icon: MdAutoAwesome,
    title: "MIRROR GLOSS",
    description: "Unmatched depth and clarity that makes paintwork look liquid."
  }
];

export default function TechSpecs() {
  return (
    <section className="bg-[var(--color-surface-container-lowest)] py-[120px] carbon-pattern">
      <div className="px-5 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div key={index} className="p-8 border border-[var(--color-surface-container-highest)] bg-[var(--color-surface-container)]/50 hover:border-[var(--color-primary)] transition-all duration-300">
              <spec.icon className="text-[var(--color-primary)] mb-4 text-4xl" />
              <h3 className="font-[Anybody] text-[32px] leading-[40px] font-bold text-[var(--color-on-surface)] mb-2 uppercase">{spec.title}</h3>
              <p className="font-[Geist] text-[16px] leading-[24px] text-[var(--color-secondary)]">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
