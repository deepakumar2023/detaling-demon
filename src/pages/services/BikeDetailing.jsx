import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://images.pexels.com/photos/4513014/pexels-photo-4513014.jpeg";
const SPLIT_IMAGE_URL = "/bike-deatiling-image.png";

export default function BikeDetailing() {
  return (
    <ServiceLayout
      title="PHANTOM BIKE DETAILING"
      subtitle="TWO-WHEELED PERFECTION"
      seoDescription="Expert motorcycle and superbike detailing services. We clean, polish, and protect your bike to showroom condition."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Your motorcycle deserves as much attention as any supercar. Our specialized bike detailing reaches every intricate component, from the engine block to the exhaust pipes, restoring true brilliance."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="SURGICAL PRECISION"
      splitSubtitle="Intricate Cleaning"
      splitDescription="Motorcycles are completely exposed to the elements, accumulating grease, road grime, and baked-on bugs. Our detailing process safely breaks down these stubborn contaminants without damaging sensitive electronics or finishes."
      features={[
        'DEGREASING & SNOW FOAM WASH',
        'PAINT CORRECTION ON FAIRINGS',
        'CHROME & METAL POLISHING',
        'CERAMIC COATING OPTIONS'
      ]}
      benefitsTitle="WHY CHOOSE US FOR BIKES?"
      benefits={[
        {
          icon: 'awesome',
          title: 'Specialized Tools',
          description: 'We use specialized brushes and swabs to safely clean intricate engine cooling fins and tight suspension linkages.'
        },
        {
          icon: 'shield',
          title: 'Safe Products',
          description: 'No harsh acids or alkaline cleaners that can stain aluminum or damage delicate engine plastics.'
        },
        {
          icon: 'speed',
          title: 'Long Lasting Finish',
          description: 'High-temperature resistant sealants applied to exhaust and engine parts to prevent oxidation.'
        }
      ]}
    />
  );
}
