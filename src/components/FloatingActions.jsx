import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingActions() {
  return (
    <>
      {/* Left Side Sticky Call Buttons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-[9999]">
        <a
          href="tel:+917291004000"
          className="bg-[var(--color-primary-container)] text-white flex items-center gap-2 py-3 px-1.5 hover:bg-red-700 transition-colors rounded-r-md group shadow-lg border border-l-0 border-[var(--color-surface-container-highest)]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <div className="relative mb-1 flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
            <FaPhoneAlt className="rotate-90 group-hover:scale-110 transition-transform relative z-10" size={14} />
          </div>
          <span className="font-[Geist] font-bold tracking-widest text-[11px] uppercase">Get a Quote</span>
        </a>
        <a
          href="tel:+917291004000"
          className="bg-[var(--color-primary-container)] text-white flex items-center gap-2 py-3 px-1.5 hover:bg-red-700 transition-colors rounded-r-md group shadow-lg border border-l-0 border-[var(--color-surface-container-highest)]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <div className="relative mb-1 flex items-center justify-center">
            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-40"></div>
            <FaPhoneAlt className="rotate-90 group-hover:scale-110 transition-transform relative z-10" size={14} />
          </div>
          <span className="font-[Geist] font-bold tracking-widest text-[11px] uppercase">Call Us Today!</span>
        </a>
      </div>




      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917291004000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.5)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <FaWhatsapp size={32} className="relative z-10" />
      </a>
    </>
  );
}
