import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://loremflickr.com/1920/1080/supercar?lock=17";
const SPLIT_IMAGE_URL = "https://loremflickr.com/1920/1080/supercar,detail?lock=18";

export default function PPFAdvancedChemistry() {
  return (
    <ServiceLayout
      title="PHANTOM ADVANCED CHEMISTRY PPF"
      subtitle="NEXT-GENERATION FILM TECH"
      seoDescription="Discover Advanced Chemistry PPF, combining extreme protection with industry-leading self-healing and stain-resistant polymers."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Advanced Chemistry PPF takes paint protection to the next level by integrating sophisticated molecular bonds that offer unprecedented resistance against discoloration and environmental damage."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="MOLECULAR DEFENSE"
      splitSubtitle="Engineered for Perfection"
      splitDescription="Engineered with the latest in polymer science, this film provides an impenetrable barrier against harsh chemicals, bird droppings, and tree sap, all while maintaining extreme optical clarity."
      features={[
        'ADVANCED POLYMER MATRIX',
        'EXTREME STAIN RESISTANCE',
        'ANTI-YELLOWING GUARANTEE',
        'ENHANCED CLARITY'
      ]}
      benefitsTitle="ADVANCED FEATURES"
      benefits={[
        {
          icon: 'shield',
          title: 'Chemical Resistance',
          description: 'Highly resistant to acidic and alkaline contaminants, preventing permanent etching on the film.'
        },
        {
          icon: 'awesome',
          title: 'Non-Yellowing',
          description: 'UV-stable topcoat prevents the film from yellowing over time, keeping white and light cars looking bright.'
        },
        {
          icon: 'speed',
          title: 'Optically Clear',
          description: 'Zero orange peel effect, ensuring the film is entirely invisible and enhances the natural paint gloss.'
        }
      ]}
    />
  );
}
