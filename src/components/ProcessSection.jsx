import { MdSanitizer, MdVerified } from 'react-icons/md';
import { Reveal } from '../hooks/useReveal.jsx';

const steps = [
  {
    number: '01',
    title: 'DECONTAMINATION',
    description:
      'A multi-stage chemical and mechanical wash. We remove industrial fallout, iron particles, and tar using synthetic clay bars and specialized iron-dissolving agents.',
    colSpan: 'md:col-span-8',
    bgClass: 'bg-[var(--color-surface-container)]',
    textClass: '',
    descClass: 'text-[var(--color-on-surface-variant)]',
    numClass: 'text-[var(--color-primary-container)]/30',
    hasIcon: true,
  },
  {
    number: '02',
    title: 'INSPECTION',
    description:
      'Using high-output LED arrays to map every micro-scratch and paint depth measurement on the vehicle\'s body.',
    colSpan: 'md:col-span-4',
    bgClass: 'bg-[var(--color-primary-container)]',
    textClass: 'text-black',
    descClass: 'text-black/80',
    numClass: 'text-black/30',
    hasIcon: false,
  },
  {
    number: '03',
    title: 'SURGERY',
    description:
      'Rotary and dual-action polishing to level the clear coat, removing defects without compromising paint integrity.',
    colSpan: 'md:col-span-4',
    bgClass: 'bg-[var(--color-surface-container-high)]',
    textClass: '',
    descClass: 'text-[var(--color-on-surface-variant)]',
    numClass: 'text-[var(--color-primary-container)]/30',
    hasIcon: false,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-[120px] px-5 md:px-20 bg-[var(--color-background)]">
      {/* Header */}
      <Reveal className="text-center mb-16">
        <h2 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold uppercase italic mb-4">
          THE DEMONIC METHOD
        </h2>
        <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-2xl mx-auto">
          Surgical precision at every stage. We don't just wash cars; we perform automotive
          restoration.
        </p>
      </Reveal>

      {/* Bento Grid */}
      <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Steps 1-3 */}
        {steps.map((step) => (
          <div
            key={step.number}
            className={`${step.colSpan} ${step.bgClass} p-10 relative overflow-hidden group`}
          >
            {step.hasIcon && (
              <div className="absolute -right-10 -bottom-10 opacity-5 transition-transform group-hover:scale-110 duration-700">
                <MdSanitizer className="text-[200px]" />
              </div>
            )}
            <span
              className={`font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold ${step.numClass} mb-6 block`}
            >
              {step.number}
            </span>
            <h4
              className={`font-[Anybody] text-[32px] leading-[40px] font-bold uppercase italic mb-4 ${step.textClass}`}
            >
              {step.title}
            </h4>
            <p className={`font-[Geist] text-[18px] leading-[28px] ${step.descClass} max-w-lg`}>
              {step.description}
            </p>
          </div>
        ))}

        {/* Step 4 - Special layout */}
        <div className="md:col-span-8 border-2 border-[var(--color-surface-container-highest)] p-10 relative overflow-hidden group">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-grow">
              <span className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[var(--color-primary-container)]/30 mb-6 block">
                04
              </span>
              <h4 className="font-[Anybody] text-[32px] leading-[40px] font-bold uppercase italic mb-4">
                SHIELDING
              </h4>
              <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)]">
                Application of ceramic coatings or paint protection films in a
                temperature-controlled environment for optimal bonding.
              </p>
            </div>
            <div className="shrink-0">
              <div className="w-32 h-32 border-4 border-[var(--color-primary-container)] rounded-full flex items-center justify-center animate-pulse">
                <MdVerified className="text-5xl text-[var(--color-primary-container)]" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
