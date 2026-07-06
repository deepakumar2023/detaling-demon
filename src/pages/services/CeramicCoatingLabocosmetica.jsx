import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "/services/ceramic-coating/labocosmetica/hero-img.jpg";
const SPLIT_IMAGE_URL = "/services/ceramic-coating/labocosmetica/split-img.avif";

export default function CeramicCoatingLabocosmetica() {
  return (
    <ServiceLayout
      title="PHANTOM LABOCOSMETICA COATING"
      subtitle="ITALIAN EXCELLENCE IN CAR CARE"
      seoDescription="Experience the pinnacle of Italian detailing chemistry with Labocosmetica Ceramic Coatings. Superior gloss, extreme hydrophobics, and unmatched durability."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Labocosmetica represents the height of Italian chemical engineering. Born from Mafra's legacy, these state-of-the-art coatings provide an unrivaled balance of gloss, slickness, and robust protection."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="THE ITALIAN MASTERPIECE"
      splitSubtitle="Precision Engineering"
      splitDescription="Formulated in Milan, Labocosmetica coatings are designed to withstand the harshest environmental conditions while delivering a breathtaking, glass-like finish. It's not just a coating; it's a testament to automotive passion."
      features={[
        'MULTI-LAYER TECHNOLOGY',
        'EXTREME SLICKNESS',
        'CHEMICAL RESISTANCE (PH 2-13)',
        'INTENSE COLOR DEPTH'
      ]}
      benefitsTitle="WHY LABOCOSMETICA?"
      benefits={[
        {
          icon: 'awesome',
          title: '3D Gloss Effect',
          description: 'Enhances the paint color, creating a stunning three-dimensional depth that makes the car look perpetually wet.'
        },
        {
          icon: 'shield',
          title: 'Self-Healing Properties',
          description: 'Advanced polymer structure that can self-heal minor swirls and micro-marring under direct heat.'
        },
        {
          icon: 'speed',
          title: 'Anti-Static Surface',
          description: 'Repels dust and atmospheric fallout, keeping your vehicle cleaner for much longer periods between washes.'
        }
      ]}
    />
  );
}
