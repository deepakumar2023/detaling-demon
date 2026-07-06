const fs = require('fs');
const path = require('path');

const dir = 'src/pages/services';
fs.mkdirSync(dir, { recursive: true });

const pages = [
  { name: 'CeramicCoating', title: 'Ceramic Coating' },
  { name: 'CeramicCoatingLabocosmetica', title: 'Ceramic Coating - Labocosmetica' },
  { name: 'CeramicCoatingOptiCoat', title: 'Ceramic Coating - Opti-Coat' },
  { name: 'PPF', title: 'Paint Protection Film (PPF)' },
  { name: 'PPFLubrizol', title: 'PPF - Lubrizol' },
  { name: 'PPFColorTexture', title: 'Color & Texture PPF' },
  { name: 'PPFAdvancedChemistry', title: 'PPF - Advanced Chemistry' },
  { name: 'PPFProtectionCoating', title: 'PPF Protection Coating' },
  { name: 'SunroofProtection', title: 'Sunroof Protection Film' },
  { name: 'PrecutPPF', title: 'Precut Paint Protection Film' },
  { name: 'WindowFilms', title: 'Window Films' },
  { name: 'BikeDetailing', title: 'Bike Detailing' },
  { name: 'CeramicWash', title: 'Ceramic Wash' },
  { name: 'SteamWash', title: 'Steam Wash' },
  { name: 'MaintenanceWash', title: 'Maintenance Wash' },
  { name: 'SprayOnPPF', title: 'Spray-On PPF / Peelable Paint' },
  { name: 'CarDentingPainting', title: 'Car Denting & Painting' },
  { name: 'WindshieldProtection', title: 'Windshield Protection Film' }
];

pages.forEach(p => {
  const content = `export default function ${p.name}() {
  return (
    <div className="min-h-screen pt-32 px-5 md:px-20 bg-[var(--color-background)]">
      <h1 className="text-4xl font-bold font-[Space_Mono] text-[var(--color-primary-container)] mb-8">
        ${p.title}
      </h1>
      <p className="text-[var(--color-on-surface-variant)] font-[Geist] text-lg">
        Detailed information about ${p.title} will go here.
      </p>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(dir, p.name + '.jsx'), content);
});
console.log('Created all service page components.');
