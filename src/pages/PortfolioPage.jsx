import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO';

const PROJECTS = [
  {
    id: 1,
    category: 'ceramic',
    subtitle: 'Ceramic Pro Ultra',
    title: 'Maranello Glow',
    image: "/portfolioimg1.png",
    alt: "Close-up shot of a deep metallic red Ferrari 812 Superfast showing perfect paint reflections.",
    className: "group relative aspect-[4/5] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]"
  },
  {
    id: 2,
    category: 'correction',
    subtitle: 'Stage 3 Correction',
    title: 'Silver Precision',
    image: "/portfolioimg2.png",
    alt: "A sleek silver Porsche 911 GT3 RS undergoing professional paint correction.",
    className: "group relative aspect-[4/5] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]"
  },
  {
    id: 3,
    category: 'ppf',
    subtitle: 'Xpel Ultimate Plus',
    title: 'Invincible Shield',
    image: "/portfolioimg3.png",
    alt: "A dark blue McLaren 720S being fitted with clear Paint Protection Film (PPF).",
    className: "group relative aspect-[4/5] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]"
  },
  {
    id: 4,
    category: 'ceramic',
    subtitle: 'The Dark Knight Suite',
    title: 'Total Obsidian Transformation',
    image: "/portfolioimg4.png",
    alt: "A wide-angle shot of a custom black Rolls Royce Cullinan parked in a dark warehouse.",
    className: "group relative lg:col-span-2 aspect-[16/9] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]",
    titleClass: "font-display-lg text-headline-lg uppercase italic text-[var(--color-on-surface)] leading-tight"
  },
  {
    id: 5,
    category: 'interior',
    subtitle: 'Interior Restoration',
    title: 'Tactile Luxury',
    image: "/portfolioimg5.png",
    alt: "Macro photography of a luxury car interior.",
    className: "group relative aspect-[1/1] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]"
  },
  {
    id: 6,
    category: 'ppf',
    subtitle: 'Stealth PPF Wrap',
    title: 'Frozen Aggression',
    image: "/portfolioimg6.png",
    alt: "A white Audi R8 V10 Plus featuring a full stealth satin PPF wrap.",
    className: "group relative aspect-[4/5] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]"
  },
  {
    id: 7,
    category: 'correction',
    subtitle: 'Exotic Correction',
    title: 'Carbon Clarity',
    image: "/portfolioimg7.png",
    alt: "Detail shot of a carbon fiber wing on a Koenigsegg.",
    className: "group relative aspect-[4/5] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]"
  },
  {
    id: 8,
    category: 'ceramic',
    subtitle: 'Hydrophobic Armor',
    title: 'Water Sovereign',
    image: "/portfolioimg8.png",
    alt: "A dark green Aston Martin DBS Superleggera in the rain.",
    className: "group relative aspect-[4/5] bg-[var(--color-surface-container-high)] overflow-hidden border border-[var(--color-surface-container-highest)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:border-[var(--color-primary-container)]"
  }
];

const CATEGORIES = [
  { id: 'all', label: 'ALL PROJECTS' },
  { id: 'ceramic', label: 'CERAMIC COATING' },
  { id: 'correction', label: 'PAINT CORRECTION' },
  { id: 'ppf', label: 'PPF PROTECTION' },
  { id: 'interior', label: 'BESPOKE INTERIORS' }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilter = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.category === categoryId));
    }
  };

  return (
    <div className="font-[Geist] text-[16px] leading-[24px] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary-container)] bg-[var(--color-background)] text-[var(--color-on-background)] antialiased min-h-screen">
      <SEO 
        title="Our Portfolio | Detailing Demons" 
        description="View our gallery of elite automotive detailing, ceramic coating, and paint protection film projects." 
      />
    
      
      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
            alt="A cinematic, low-key lighting shot of a matte black Lamborghini Revuelto in a dark, high-end showroom." 
            style={{ backgroundImage: "url('/portfolioimg.png')" }}
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 px-5 md:px-margin-desktop pb-24 max-w-5xl">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-[var(--color-on-surface)] mb-4 leading-none italic uppercase">
            Obsessive <br/> <span className="text-[var(--color-primary-container)] text-glow">Perfection.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-[var(--color-secondary)] max-w-xl mb-8">
            Explore our gallery of automotive excellence. From multi-stage paint corrections to elite ceramic coatings, witness the transformation of the world's finest machinery.
          </p>
          <div className="flex gap-4">
            <div className="w-24 h-[2px] bg-[var(--color-primary-container)] mt-4"></div>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-[var(--color-on-surface)]">Selected Works 2024</span>
          </div>
        </div>
      </header>

      {/* Portfolio Filter */}
      <section className="py-12 bg-[var(--color-surface-container-lowest)] sticky top-20 z-40 border-b border-[var(--color-primary-container)]/10">
        <div className="px-5 md:px-margin-desktop mx-auto flex flex-wrap items-center justify-between gap-6">
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`font-label-caps text-label-caps uppercase px-6 py-2 border-2 transition-all duration-300 hover:border-[var(--color-primary-container)]/50 ${
                  activeCategory === cat.id 
                    ? 'border-[var(--color-primary-container)] text-[var(--color-primary-container)] shadow-[inset_0_0_10px_rgba(230,0,0,0.2)]' 
                    : 'border-[var(--color-surface-container-highest)] text-[var(--color-on-surface)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[var(--color-secondary)] font-label-caps text-label-caps">
            <span className="material-symbols-outlined text-[18px]">grid_view</span>
            <span>DISPLAYING {filteredProjects.length} MASTERPIECES</span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <main className="px-5 md:px-margin-desktop py-section-gap max-w-[1600px] mx-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`${project.className} animate-fade-in`}
            >
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                title={project.alt} 
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 lg:p-12">
                <span className="font-label-caps text-[10px] text-[var(--color-primary-container)] tracking-[0.3em] uppercase mb-2">
                  {project.subtitle}
                </span>
                <h3 
                  className={project.titleClass || "font-headline-md text-headline-md uppercase italic text-[var(--color-on-surface)] leading-tight"}
                  dangerouslySetInnerHTML={{ __html: project.title.replace(' ', ' <br/>') }}
                ></h3>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action */}
      <section className="py-section-gap px-5 md:px-margin-desktop bg-[var(--color-surface-container-lowest)] border-y-2 border-[var(--color-primary-container)]/20 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-display-lg text-headline-lg md:text-display-lg text-[var(--color-on-surface)] uppercase italic mb-6">
            READY FOR THE <span className="text-[var(--color-primary-container)] text-glow">TRANSFORMATION?</span>
          </h2>
          <p className="font-body-lg text-body-lg text-[var(--color-secondary)] max-w-2xl mx-auto mb-10">
            Join the elite circle of enthusiasts who demand nothing but absolute perfection for their vehicles. Our schedule is limited—secure your slot today.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[var(--color-primary-container)] text-[var(--color-background)] font-label-caps text-label-caps px-12 py-5 tracking-[0.3em] hover:shadow-[0_0_40px_rgba(230,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            ENLIST YOUR VEHICLE
          </Link>
        </div>
      </section>
</div>
  );
}
