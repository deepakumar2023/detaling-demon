import { Link } from 'react-router-dom';



const navLinks = [
  { label: 'SERVICES', href: '/services' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'PACKAGES', href: '/#packages' },
  { label: 'ABOUT', href: '/about' },
];

const socialLinks = [
  { label: 'INSTAGRAM', href: '#' },
  { label: 'FACEBOOK', href: '#' },
  { label: 'YOUTUBE', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface-container-lowest)] w-full mt-[120px] border-t-2 border-[var(--color-primary)]/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-5 md:px-20 py-16 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center mb-8 relative z-10">
            <img
              alt="Footer Logo"
              className="h-14 md:h-20 lg:h-24 w-auto object-contain transition-transform hover:scale-[1.05]"
              src="/detaildemon logo.png"
            />
          </div>
          <p className="font-[Geist] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] max-w-sm mb-8">
            High-performance automotive care for those who demand absolute perfection. Engineered
            for precision, finished with passion.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--color-on-surface)] hover:text-[var(--color-primary)] transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div>
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

        {/* Contact Column */}
        <div>
          <h4 className="font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold text-[var(--color-primary)] mb-6">
            CONTACT
          </h4>
          <address className="not-italic space-y-4 font-[Geist] text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
            <p>
              666 PRECISION DRIVE
              <br />
              ADRENALINE BAY, FL 33010
            </p>
            <p>+1 (555) DEMONS-9</p>
            <p>INFO@DETAILINGDEMONS.COM</p>
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
