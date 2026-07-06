import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdCalendarMonth, MdMenu, MdClose } from 'react-icons/md';


const NAV_LINKS = [
  { label: 'SERVICES', href: '/services', isRoute: true },
  { label: 'PORTFOLIO', href: '/portfolio', isRoute: true },
  { label: 'PACKAGES', href: '/#packages' },
  { label: 'ABOUT', href: '/about', isRoute: true },
  { label: 'CONTACT', href: '/contact', isRoute: true },
];

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Update active link based on current path/hash
    if (location.pathname === '/services') {
      setActiveLink('SERVICES');
    } else if (location.pathname === '/') {
      if (location.hash === '#portfolio') setActiveLink('PORTFOLIO');
      else if (location.hash === '#packages') setActiveLink('PACKAGES');
      else if (location.hash === '#about') setActiveLink('ABOUT');
      else setActiveLink('');
    } else {
      setActiveLink('');
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, link) => {
    if (link.isRoute) {
      // Allow default Link behavior for routes
      setMobileOpen(false);
      setActiveLink(link.label);
      return;
    }

    // Smooth scrolling for hash links
    if (window.location.pathname === '/' || link.href.startsWith('/#')) {
      const targetId = link.href.replace('/#', '#');
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveLink(link.label);
        setMobileOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[var(--color-background)]/80 backdrop-blur-xl border-b border-[var(--color-surface-container-highest)] transition-shadow duration-300 ${scrolled ? 'shadow-[0_0_20px_rgba(230,0,0,0.15)]' : ''
        }`}
    >
      <div className="relative flex justify-between items-center w-full px-5 md:px-20 py-2 md:py-3 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center -ml-2 md:-ml-4 relative z-10 transition-transform duration-300 hover:scale-[1.02]">
          <img
            alt="Detailing Demons Logo"
            className="h-10 md:h-20 lg:h-20 w-auto"
            src="/detaildemon logo.png"
          />
        </Link>

        {/* Desktop Nav Links (Absolutely Centered) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleSmoothScroll(e, link)}
              className={`font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase transition-all duration-300 relative group ${activeLink === link.label
                  ? 'text-[var(--color-primary-container)]'
                  : 'text-[var(--color-on-surface)] hover:text-[var(--color-primary-container)]'
                }`}
            >
              {link.label}
              {/* Animated Underline */}
              <span className={`absolute -bottom-2 left-1/2 w-0 h-[2px] bg-[var(--color-primary-container)] transition-all duration-300 -translate-x-1/2 ${activeLink === link.label ? 'w-full shadow-[0_0_10px_rgba(230,0,0,0.8)]' : 'group-hover:w-full group-hover:shadow-[0_0_10px_rgba(230,0,0,0.8)]'
                }`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Book Now Button */}
          <Link
            to="/contact"
            className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase px-6 py-3 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            BOOK NOW
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--color-on-surface)] text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-surface-container)] border-t border-[var(--color-surface-container-highest)] px-5 py-6 flex flex-col gap-6 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleSmoothScroll(e, link)}
              className={`font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase ${activeLink === link.label
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-on-surface)]'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
