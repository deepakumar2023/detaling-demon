import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "/services/precut-ppf/hero-img.jpg";
const SPLIT_IMAGE_URL = "/services/precut-ppf/split-img.jpg";

export default function PrecutPPF() {
  return (
    <ServiceLayout
      title="PHANTOM PRECUT PPF"
      subtitle="PRECISION COMPUTER CUT FILM"
      seoDescription="Experience flawless PPF installation with our advanced computer-cut patterns, ensuring a perfect fit without the use of blades on your vehicle."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Our Precut PPF service utilizes advanced software and plotting machines to cut the film to the exact dimensions of your vehicle's panels, eliminating the need to cut film directly on the car."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="ZERO BLADE GUARANTEE"
      splitSubtitle="Precision Engineering"
      splitDescription="With precut patterns, we ensure a safer, faster, and more precise installation. You never have to worry about a razor blade scratching your factory paint, as the film is perfectly shaped before it ever touches your vehicle."
      features={[
        'COMPUTER GENERATED PATTERNS',
        'NO BLADES ON PAINT',
        'PERFECT PANEL FITMENT',
        'FASTER INSTALLATION TIME'
      ]}
      benefitsTitle="THE PRECUT ADVANTAGE"
      benefits={[
        {
          icon: 'shield',
          title: 'Risk-Free Install',
          description: 'Eliminates the risk of knife marks on your clear coat by using perfectly sized, machine-cut templates.'
        },
        {
          icon: 'speed',
          title: 'Efficient Process',
          description: 'Pre-cut panels allow our technicians to install the film much faster, reducing the time your vehicle is in the shop.'
        },
        {
          icon: 'awesome',
          title: 'Consistent Quality',
          description: 'Every piece is cut to exact manufacturer specifications, ensuring symmetrical and consistent coverage across all edges.'
        }
      ]}
    />
  );
}
