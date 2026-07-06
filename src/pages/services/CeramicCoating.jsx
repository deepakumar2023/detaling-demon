import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://loremflickr.com/1920/1080/supercar?lock=5";
const SPLIT_IMAGE_URL = "https://loremflickr.com/1920/1080/supercar,detail?lock=6";

export default function CeramicCoating() {
  return (
    <ServiceLayout
      title="PHANTOM CERAMIC COATING"
      subtitle="UNRIVALED GLOSS & PROTECTION"
      seoDescription="Protect your vehicle's paint with our premium Ceramic Coating services. Experience long-lasting shine, hydrophobic properties, and superior defense against environmental contaminants."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Transform your vehicle's surface with our advanced Ceramic Coating. It bonds at a molecular level, providing a sacrificial layer of protection that outperforms traditional waxes and sealants."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="BEYOND THE SHINE"
      splitSubtitle="Nanotechnology Defense"
      splitDescription="Our ceramic coating doesn't just look incredible—it creates a permanent barrier against UV rays, acid rain, bird droppings, and light scratches. Washing your car becomes a breeze as dirt and water slide off with zero effort."
      features={[
        '10H HARDNESS RATING',
        'SELF-CLEANING PROPERTIES',
        'UV & CHEMICAL RESISTANCE',
        'DEEP CANDY GLOSS'
      ]}
      benefitsTitle="THE CERAMIC ADVANTAGE"
      benefits={[
        {
          icon: 'shield',
          title: 'Extreme Durability',
          description: 'Forms a permanent chemical bond with the factory clear coat, providing years of protection instead of months.'
        },
        {
          icon: 'awesome',
          title: 'Hydrophobic Effect',
          description: 'Water beads up and rolls right off the surface, taking dirt and grime with it, making maintenance washes effortless.'
        },
        {
          icon: 'speed',
          title: 'Enhanced Gloss',
          description: 'Amplifies the depth and clarity of your paint, leaving a mirror-like finish that turns heads everywhere you go.'
        }
      ]}
    />
  );
}
