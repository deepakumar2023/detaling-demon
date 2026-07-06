import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://images.pexels.com/photos/14231678/pexels-photo-14231678.jpeg";
const SPLIT_IMAGE_URL = "https://images.pexels.com/photos/6872146/pexels-photo-6872146.jpeg";

export default function CeramicWash() {
  return (
    <ServiceLayout
      title="PHANTOM CERAMIC WASH"
      subtitle="ENHANCED MAINTENANCE"
      seoDescription="Experience our premium Ceramic Wash that cleans your car safely while boosting gloss and adding a temporary hydrophobic layer."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="A traditional car wash simply removes dirt. Our Ceramic Wash goes a step further by safely lifting contaminants while infusing the paint with SiO2 (Silicon Dioxide) polymers for instant gloss and protection."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="WASH AND PROTECT"
      splitSubtitle="Advanced SiO2 Technology"
      splitDescription="Perfect for vehicles that are already ceramic coated, or for unprotected cars needing a quick boost in shine and water beading. This wash leaves a slick, highly hydrophobic finish that lasts for weeks."
      features={[
        'PH NEUTRAL SiO2 SHAMPOO',
        'TWO-BUCKET SAFE WASH',
        'INSTANT HYDROPHOBICS',
        'DEEP CANDY GLOSS BOOST'
      ]}
      benefitsTitle="THE CERAMIC WASH ADVANTAGE"
      benefits={[
        {
          icon: 'awesome',
          title: 'Instant Gloss Boost',
          description: 'The SiO2 polymers instantly bond to the paint, leaving behind a noticeable increase in slickness and visual depth.'
        },
        {
          icon: 'shield',
          title: 'Maintains Coatings',
          description: 'The perfect maintenance wash for ceramic coated cars, helping to rejuvenate the water-beading effect of the existing coating.'
        },
        {
          icon: 'speed',
          title: 'Scratch-Free Process',
          description: 'Heavy lubrication in the ceramic shampoo encapsulates dirt, allowing it to be safely rinsed away without inflicting swirl marks.'
        }
      ]}
    />
  );
}
