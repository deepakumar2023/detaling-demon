import { MdCalendarMonth } from 'react-icons/md';

export default function StickyCTA() {
  return (
    <div className="fixed bottom-8 right-8 z-40 hidden md:block group">
      <button className="bg-[var(--color-primary-container)] text-black p-4 flex items-center gap-4 shadow-[0_10px_30px_rgba(230,0,0,0.3)] transition-all hover:pr-8 active:scale-95">
        <MdCalendarMonth className="text-3xl" />
        <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-xs transition-all duration-500">
          BOOK YOUR SESSION
        </span>
      </button>
    </div>
  );
}
