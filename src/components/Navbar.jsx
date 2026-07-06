import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdCalendarMonth, MdMenu, MdClose, MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

const NAV_LINKS = [
  {
    label: 'SERVICES',
    href: '/services',
    isRoute: true,
    subLinks: [
      {
        label: 'Phantom Ceramic Coating',
        href: '/services/ceramic-coating',
        subLinks: [
          { label: 'Labocosmetica', href: '/services/ceramic-coating/labocosmetica' },
          { label: 'Opti-Coat', href: '/services/ceramic-coating/opti-coat' },
        ]
      },
      {
        label: 'Phantom Paint Protection Film',
        href: '/services/paint-protection-film',
        subLinks: [
          { label: 'Lubrizol', href: '/services/paint-protection-film/lubrizol' },
          { label: 'Color & Texture PPF', href: '/services/paint-protection-film/color-texture' },
          { label: 'Advanced Chemistry', href: '/services/paint-protection-film/advanced-chemistry' },
          { label: 'PPF Protection Coating', href: '/services/paint-protection-film/protection-coating' },
        ]
      },
      { label: 'Phantom Sunroof Protection Film', href: '/services/sunroof-protection' },
      { label: 'Phantom Precut Paint Protection Film', href: '/services/precut-ppf' },
      { label: 'Phantom Window Films', href: '/services/window-films' },
      { label: 'Phantom Bike Detailing', href: '/services/bike-detailing' },
      { label: 'Phantom Ceramic Wash', href: '/services/ceramic-wash' },
      { label: 'Phantom Steam Wash', href: '/services/steam-wash' },
      { label: 'Phantom Maintenance Wash', href: '/services/maintenance-wash' },
      { label: 'Phantom Spray-On PPF/ Peelable Paint', href: '/services/spray-on-ppf' },
      { label: 'Phantom Car Denting Painting', href: '/services/car-denting-painting' },
      { label: 'Phantom Windshield Protection Film', href: '/services/windshield-protection' },
    ]
  },
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
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});

  useEffect(() => {
    if (location.pathname.startsWith('/services')) {
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
    if (link.isRoute && !link.subLinks) {
      setMobileOpen(false);
      setActiveLink(link.label);
      return;
    }
    
    if (link.subLinks) {
       // Just clicking on parent link like Services, could navigate or just open dropdown
       if (window.innerWidth < 768) {
          e.preventDefault();
          toggleMobileMenu(link.label);
       }
       return;
    }

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

  const toggleMobileMenu = (label) => {
    setExpandedMobileMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const renderMobileLinks = (links, depth = 0) => {
    return links.map((link) => (
      <div key={link.label} className="w-full">
        <div className="flex justify-between items-center w-full">
          <Link
            to={link.href}
            onClick={(e) => {
              if (link.subLinks) {
                e.preventDefault();
                toggleMobileMenu(link.label);
              } else {
                handleSmoothScroll(e, link);
                setMobileOpen(false);
              }
            }}
            className={`font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase py-2 flex items-center gap-2 ${
              activeLink === link.label ? 'text-[var(--color-primary)]' : 'text-[var(--color-on-surface)]'
            }`}
            style={{ paddingLeft: `${depth * 1.5}rem` }}
          >
            {link.label}
          </Link>
          {link.subLinks && (
            <button onClick={() => toggleMobileMenu(link.label)} className="p-2 text-[var(--color-primary)]">
              {expandedMobileMenus[link.label] ? <MdKeyboardArrowDown size={20} /> : <MdKeyboardArrowRight size={20} />}
            </button>
          )}
        </div>
        {link.subLinks && expandedMobileMenus[link.label] && (
          <div className="flex flex-col gap-2 mt-2 border-l border-[var(--color-primary)]/30 ml-2">
            {renderMobileLinks(link.subLinks, depth + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[var(--color-background)]/90 backdrop-blur-xl border-b border-[var(--color-surface-container-highest)] transition-shadow duration-300 ${scrolled ? 'shadow-[0_0_20px_rgba(230,0,0,0.15)]' : ''}`}
    >
      <div className="relative flex justify-between items-center w-full px-5 md:px-20 py-2 md:py-3 mx-auto">
        <Link to="/" className="flex-shrink-0 flex items-center -ml-2 md:-ml-4 relative z-10 transition-transform duration-300 hover:scale-[1.02]">
          <img
            alt="Detailing Demons Logo"
            className="h-16 md:h-28 lg:h-32 w-auto object-contain"
            src="/logo1.png"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group/navItem h-16 flex items-center">
              <Link
                to={link.href}
                onClick={(e) => handleSmoothScroll(e, link)}
                className={`font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase transition-all duration-300 relative flex items-center gap-1 ${
                  activeLink === link.label
                    ? 'text-[var(--color-primary-container)]'
                    : 'text-[var(--color-on-surface)] group-hover/navItem:text-[var(--color-primary-container)]'
                }`}
              >
                {link.label}
                {link.subLinks && <MdKeyboardArrowDown size={16} />}
                <span className={`absolute -bottom-2 left-1/2 w-0 h-[2px] bg-[var(--color-primary-container)] transition-all duration-300 -translate-x-1/2 ${
                  activeLink === link.label ? 'w-full shadow-[0_0_10px_rgba(230,0,0,0.8)]' : 'group-hover/navItem:w-full group-hover/navItem:shadow-[0_0_10px_rgba(230,0,0,0.8)]'
                }`}></span>
              </Link>
              
              {/* Dropdown Menu Level 1 */}
              {link.subLinks && (
                <div className="absolute top-16 left-0 min-w-[260px] opacity-0 invisible group-hover/navItem:opacity-100 group-hover/navItem:visible transition-all duration-300 bg-[var(--color-surface-container)] border border-[var(--color-surface-container-highest)] shadow-xl flex flex-col py-2">
                  {link.subLinks.map((subLink) => (
                    <div key={subLink.label} className="relative group/subItem">
                      <Link
                        to={subLink.href}
                        className="font-[Space_Mono] text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase px-4 py-3 text-[var(--color-on-surface)] hover:text-[var(--color-primary-container)] hover:bg-[var(--color-surface-container-high)] flex justify-between items-center transition-colors"
                      >
                        {subLink.label}
                        {subLink.subLinks && <MdKeyboardArrowRight size={16} />}
                      </Link>
                      
                      {/* Dropdown Menu Level 2 */}
                      {subLink.subLinks && (
                        <div className="absolute top-0 left-full min-w-[240px] opacity-0 invisible group-hover/subItem:opacity-100 group-hover/subItem:visible transition-all duration-300 bg-[var(--color-surface-container)] border border-[var(--color-surface-container-highest)] shadow-xl flex flex-col py-2 -ml-1">
                          {subLink.subLinks.map((subSubLink) => (
                            <Link
                              key={subSubLink.label}
                              to={subSubLink.href}
                              className="font-[Space_Mono] text-[11px] leading-[14px] tracking-[0.08em] font-bold uppercase px-4 py-3 text-[var(--color-on-surface)] hover:text-[var(--color-primary-container)] hover:bg-[var(--color-surface-container-high)] transition-colors"
                            >
                              {subSubLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:block bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase px-6 py-3 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            BOOK NOW
          </Link>
          <button
            className="lg:hidden text-[var(--color-on-surface)] text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-surface-container)] border-t border-[var(--color-surface-container-highest)] px-5 py-6 max-h-[80vh] overflow-y-auto animate-fade-in flex flex-col gap-4">
          {renderMobileLinks(NAV_LINKS)}
          <div className="mt-4 pt-4 border-t border-[var(--color-surface-container-highest)]">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase px-6 py-4"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
