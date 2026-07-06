import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "/services/ceramic-coating/opti-coat/hero-img.jpg";
const SPLIT_IMAGE_URL = "/services/ceramic-coating/opti-coat/split-img.jpg";

export default function CeramicCoatingOptiCoat() {
  return (
    <ServiceLayout
      title="PHANTOM OPTI-COAT PRO"
      subtitle="THE ULTIMATE PERMANENT COATING"
      seoDescription="Opti-Coat Pro delivers permanent paint protection with a Silicon Carbide formula. Experience superior scratch resistance and chemical defense."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Unlike traditional ceramic coatings, Opti-Coat Pro is a permanent, Silicon Carbide (SiC) based coating. It becomes a permanent part of your vehicle's clear coat, offering unmatched durability."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="SILICON CARBIDE STRENGTH"
      splitSubtitle="Permanent Protection"
      splitDescription="Opti-Coat Pro is not a wax or sealant that will wash away or break down over time. It is a clear resin coating that provides permanent protection for all factory paints, increasing the clear coat's hardness and resistance to damage."
      features={[
        'PERMANENT BOND',
        'SILICON CARBIDE (SiC) FORMULA',
        'SUPERIOR SCRATCH RESISTANCE',
        'FACTORY WARRANTY INCLUDED'
      ]}
      benefitsTitle="THE OPTI-COAT DIFFERENCE"
      benefits={[
        {
          icon: 'shield',
          title: 'Permanent Durability',
          description: 'Unlike quartz-based coatings that degrade over time, Opti-Coat Pro forms a permanent bond that never needs to be re-applied.'
        },
        {
          icon: 'speed',
          title: 'Chemical Resistance',
          description: 'Impervious to harsh chemicals, preventing damage from bird droppings, bug splatter, and acid rain.'
        },
        {
          icon: 'awesome',
          title: 'Enhanced Thickness',
          description: 'Adds a measurable, thick layer of clear coat to the vehicle, significantly increasing scratch and marring resistance.'
        }
      ]}
    />
  );
}
