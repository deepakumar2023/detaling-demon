import { MdLayers, MdAutoFixHigh, MdAirlineSeatReclineExtra, MdArrowForward, MdSettingsSuggest } from 'react-icons/md';
import { Reveal } from '../hooks/useReveal.jsx';

const services = [
  {
    icon: MdLayers,
    title: 'CERAMIC COATING',
    description:
      'Military-grade surface protection that bonds at a molecular level. Experience extreme hydrophobicity and a permanent candy-like gloss that lasts for years.',
    price: '',
    delay: '100ms',
  },
  {
    icon: MdAutoFixHigh,
    title: 'PAINT CORRECTION',
    description:
      'A multi-stage mechanical process to eliminate 95%+ of swirl marks, scratches, and oxidation. Restoring depth and clarity to your paint\'s original finish.',
    price: '',
    delay: '200ms',
  },
  {
    icon: MdAirlineSeatReclineExtra,
    title: 'INTERIOR DETAIL',
    description:
      'Deep steam cleaning, leather conditioning, and surgical-level sanitization. We restore your cabin to a sterile, factory-fresh environment using premium pH-balanced agents.',
    price: '',
    delay: '300ms',
  },
];

function ServiceCard({ icon: Icon, title, description, price, delay }) {
  return (
    <Reveal className="group transition-all duration-500" style={{ transitionDelay: delay }}>
      <div className="bg-[var(--color-surface-container-high)] border border-[var(--color-surface-container-highest)] p-8 h-full flex flex-col transition-all duration-300 hover:border-[var(--color-primary-container)]/50 hover:shadow-[0_0_30px_rgba(230,0,0,0.2)] group-hover:-translate-y-2">
        <div className="mb-8">
          <Icon className="text-[var(--color-primary-container)] text-5xl" />
        </div>
        <h3 className="font-[Anybody] text-[32px] leading-[40px] font-bold uppercase italic slanted mb-4 group-hover:text-[var(--color-primary-container)] transition-colors">
          <span className="skew-fix inline-block">{title}</span>
        </h3>
        <p className="font-[Geist] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] mb-8 flex-grow">
          {description}
        </p>
        <div className="pt-6 border-t border-[var(--color-surface-container-highest)] flex justify-between items-center">
          <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold">
            {price}
          </span>
          <MdArrowForward className="text-[var(--color-primary-container)] text-xl transition-transform group-hover:translate-x-2" />
        </div>
      </div>
    </Reveal>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-[120px] px-5 md:px-20 bg-[var(--color-surface-container-lowest)] relative overflow-hidden"
    >
      {/* Carbon pattern background */}
      <div className="absolute top-0 right-0 w-1/2 h-full carbon-pattern opacity-10 pointer-events-none" />

      {/* Section Header */}
      <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-2xl">
          <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] mb-4 block">
            PRECISION PACKAGES
          </span>
          <h2 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold uppercase italic">
            ENGINEERED FOR PERFECTION
          </h2>
        </div>
        <div className="hidden md:block">
          <MdSettingsSuggest className="text-[var(--color-primary)] text-6xl opacity-20" />
        </div>
      </Reveal>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
