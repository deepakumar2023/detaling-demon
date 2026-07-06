import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "/services/car-denting-painting/hero-img.avif";
const SPLIT_IMAGE_URL = "/services/car-denting-painting/split-img.avif";

export default function CarDentingPainting() {
  return (
    <ServiceLayout
      title="PHANTOM DENTING & PAINTING"
      subtitle="FLAWLESS RESTORATION"
      seoDescription="Professional car denting and painting services. We restore your vehicle's bodywork to its original factory finish."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Accidents happen, but the damage doesn't have to be permanent. Our expert body shop technicians utilize state-of-the-art tools and color-matching technology to completely erase dents, scratches, and collision damage."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="ART OF RESTORATION"
      splitSubtitle="Precision Craftsmanship"
      splitDescription="We don't just 'cover up' damage. We reshape metal to its original contour, perfectly blend high-quality automotive paint, and bake it to a factory-hard finish. It will look as if the damage never occurred."
      features={[
        'PAINTLESS DENT REMOVAL (PDR)',
        'COMPUTERIZED COLOR MATCHING',
        'PREMIUM CLEAR COATS',
        'RUST TREATMENT & PREVENTION'
      ]}
      benefitsTitle="OUR RESTORATION DIFFERENCE"
      benefits={[
        {
          icon: 'awesome',
          title: 'Perfect Color Match',
          description: 'Advanced spectrophotometers ensure the new paint flawlessly blends with your existing, slightly faded paint.'
        },
        {
          icon: 'shield',
          title: 'OEM Quality Materials',
          description: 'We only use top-tier automotive paints and clear coats to guarantee long-term durability and gloss.'
        },
        {
          icon: 'speed',
          title: 'Invisible Repairs',
          description: 'Meticulous blending and polishing techniques ensure that the transition between old and new paint is completely invisible.'
        }
      ]}
    />
  );
}
