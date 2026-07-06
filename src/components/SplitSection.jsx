import { MdCheckCircle } from 'react-icons/md';
import { Reveal } from '../hooks/useReveal.jsx';

const CAR_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCerA1RJif8FncRzcDbyVl6nwI9Dhw8IQM4T_4f0GZVvbl9xIFq9M8ASJVximrTRehH2aQ8Zv2tPPbDd6vqV6AZyHnrugvNpTT1fd462gM1aVHCkqu1_aOv24qMs1mGnmhlHF5Qgxx0aDwOOa10C0jOR8IOtNe6BqAPVQxDDOgd1vVnWBgnCQGdF-2cmwNl0jDAEBDBkzVzqLk45ZT0WLqFL4tRnHg7RJPnmikra2W-IjB8cqqi7v4B-m1hgYoOKLLEkrEhWCUnIA';

const features = [
  '10H HARDNESS RATING',
  'SELF-CLEANING PROPERTIES',
  'LIFETIME GUARANTEE OPTIONS',
];

export default function SplitSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Image Side */}
      <div className="relative overflow-hidden group min-h-[400px] md:min-h-0">
        <div
          className="bg-cover bg-center w-full h-full transition-transform duration-[2000ms] group-hover:scale-110 absolute inset-0"
          style={{ backgroundImage: `url('${CAR_IMAGE_URL}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] to-transparent md:bg-none" />
      </div>

      {/* Content Side */}
      <div className="bg-[var(--color-surface-container-lowest)] flex flex-col justify-center p-5 md:p-20">
        <Reveal>
          <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] mb-4 block">
            DEMONIC DURABILITY
          </span>
          <h2 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold uppercase italic mb-8">
            BEYOND THE SHINE
          </h2>
          <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] mb-10 leading-relaxed">
            Our coatings don't just look incredible—they create a permanent barrier against UV
            rays, acid rain, bird droppings, and light scratches. Washing your car becomes a
            10-minute task as dirt and water slide off with zero effort.
          </p>
          <ul className="space-y-4 mb-12">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-4 font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold"
              >
                <MdCheckCircle className="text-[var(--color-primary)] text-xl flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="bg-[var(--color-primary-container)] text-black font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase px-12 py-5 glow-red transition-all">
            VIEW PORTFOLIO
          </button>
        </Reveal>
      </div>
    </section>
  );
}
