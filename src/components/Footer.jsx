import { Link } from 'react-router-dom';



import { FaInstagram, FaFacebook, FaYoutube, FaGhost } from 'react-icons/fa';

const navLinks = [
  { label: 'SERVICES', href: '/services' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'PACKAGES', href: '/#packages' },
  { label: 'ABOUT', href: '/about' },
];

const socialLinks = [
  { label: 'INSTAGRAM', icon: FaInstagram, href: '#' },
  { label: 'FACEBOOK', icon: FaFacebook, href: '#' },
  { label: 'YOUTUBE', icon: FaYoutube, href: '#' },
];

const serviceLinks = [
  { label: 'Phantom Ceramic Coating', href: '/services/ceramic-coating' },
  { label: 'Phantom Paint Protection Film', href: '/services/paint-protection-film' },
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
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-container-lowest)] w-full mt-[120px] border-t-2 border-[var(--color-primary)]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 px-5 md:px-20 py-16 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <div className="flex items-center mb-8 relative z-10">
            <img
              alt="Footer Logo"
              className="h-14 md:h-20 lg:h-24 w-auto object-contain transition-transform hover:scale-[1.05]"
              src="/logo1.png"
            />
          </div>
          <p className="font-[Geist] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] max-w-sm mb-8">
            High-performance automotive care for those who demand absolute perfection. Engineered
            for precision, finished with passion.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-all group"
                  aria-label={link.label}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-[Space_Mono] text-[12px] tracking-[0.1em] font-bold">{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Column */}
        <div className="lg:col-span-2">
          <h4 className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] mb-6">
            NAVIGATION
          </h4>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-[Geist] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="lg:col-span-3">
          <h4 className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] mb-6">
            SERVICES
          </h4>
          <ul className="space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-[Space_Mono] text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-all flex items-center gap-2 group"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="lg:col-span-3">
          <h4 className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] mb-6">
            LOCATIONS
          </h4>
          <address className="not-italic space-y-6 font-[Geist] text-[14px] md:text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
            
            {/* Primary Location */}
            <div>
              <p className="font-bold text-[var(--color-on-surface)] mb-1">INDIA HQ</p>
              <p>
                First Floor Office 16 Tower 2, Graphix, Block A,<br />
                Sector 62, Noida, Uttar Pradesh 201309
              </p>
              <p className="mt-1">+91 7291004000 / 7291004001 / 7291004005</p>
            </div>

            {/* Secondary Location */}
            <div>
              <p className="font-bold text-[var(--color-on-surface)] mb-1">DUBAI</p>
              <p>
                21/2 12th St - Al Qouz Ind.second<br />
                Al Quoz - Dubai - United Arab Emirates
              </p>
            </div>

            <p className="pt-4 border-t border-[var(--color-surface-container-highest)]">INFO@DETAILINGDEMONS.COM</p>
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-5 md:px-20 py-8 border-t border-[var(--color-surface-container-highest)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[Geist] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] text-sm">
            © 2024 DETAILING DEMONS. ENGINEERED FOR PRECISION.
          </p>
          <div className="flex gap-8 text-xs font-[Space_Mono] text-[var(--color-on-surface-variant)]">
            <a href="#" className="hover:text-[var(--color-primary)] transition-all">
              TERMS
            </a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-all">
              PRIVACY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
