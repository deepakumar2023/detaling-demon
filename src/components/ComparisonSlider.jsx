import React, { useState, useRef, useEffect } from 'react';

const AFTER_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuB9i-jyxHyax7H1E67wwJvp0PepfuIGYPSuJ4Pg1aLHwrCjLNSVLbHfTazOPj2qDVSgakXyQY63BujfV-0oMGvW3V61VzGAjhypW5ZLtUXjKqEfipg4pKMwdqcYb9-2xYI4E-XIAaO1sYwSBNh6-hfFsJnpoRdk-P27SAozIhoJeQhg9s8xN-5DTME4UhtzVWj4nikdMN4yUgMqeRQqjGuOMYN88X6WQjx2yr4e3-cFnzO8Ry1Hr-70_05CqFRQficoPpof3kTn7Q";
const BEFORE_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAhESHcTlWQuJIC6VIUc6uuoYAG4BPRdEc7csL_bV7UajskwOR2ysR7CjPR4-cy-Ud0uOQ_q3dt3lNBStByi_0swRrqha4_R_AKrP9AizGwJa1qIIh3DdYTysRo_hv99uMoHhOG5PegSJBD8pxVC_pRP9kh-QWN7J84oFFkrfLOM4gF4tgYT1r6EkvFnZVGjKxnlmvzu106WkP6iQ9nAFP5hQXsGpZAGC8uNMIcrE1t3d_yQD_V5xpGEzS9EX3raW92E7umHezCVg";

export default function ComparisonSlider() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let newPosition = (x / rect.width) * 100;
    newPosition = Math.max(0, Math.min(newPosition, 100));
    setPosition(newPosition);
  };

  useEffect(() => {
    const onMouseMove = (e) => handleMove(e.clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);
    const onMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="px-5 md:px-20 py-[120px]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] uppercase block mb-2">The Results</span>
          <h2 className="font-[Anybody] text-[40px] leading-[48px] tracking-[-0.02em] font-bold text-[var(--color-on-surface)]">EXTREME CLARITY</h2>
        </div>
        <div className="max-w-md text-[var(--color-secondary)]">
          <p className="font-[Geist] text-[16px] leading-[24px]">Observe the transition from weathered factory clear coat to our signature high-gloss obsidian finish. 100% hydrophobic, 100% demonic.</p>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[600px] overflow-hidden group border border-[var(--color-surface-container-highest)] cursor-col-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* After (Top) */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${AFTER_IMAGE}')` }}></div>
        </div>
        
        {/* Before (Bottom, clipped) */}
        <div 
          className="absolute inset-0 w-full h-full z-10" 
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${BEFORE_IMAGE}')` }}></div>
        </div>
        
        {/* Handle */}
        <div 
          className="absolute inset-y-0 slider-handle flex items-center justify-center -ml-[2px] z-20"
          style={{ left: `${position}%` }}
        >
          <div className="diamond-handle"></div>
        </div>
        
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 z-30 bg-black/80 px-4 py-2 border border-[var(--color-primary)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase text-[var(--color-primary)]">BEFORE</div>
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-30 bg-black/80 px-4 py-2 border border-[var(--color-on-surface)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase text-[var(--color-on-surface)]">AFTER</div>
      </div>
    </section>
  );
}
