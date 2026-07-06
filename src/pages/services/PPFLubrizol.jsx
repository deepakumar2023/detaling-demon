import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://loremflickr.com/1920/1080/supercar?lock=21";
const SPLIT_IMAGE_URL = "https://loremflickr.com/1920/1080/supercar,detail?lock=22";

export default function PPFLubrizol() {
  return (
    <ServiceLayout
      title="PHANTOM LUBRIZOL PPF"
      subtitle="PREMIUM TPU PROTECTION"
      seoDescription="Lubrizol PPF offers superior TPU-based protection, ensuring maximum elasticity and long-lasting defense for your vehicle."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Utilizing premium TPU (Thermoplastic Polyurethane) resins from Lubrizol, this PPF offers exceptional elasticity, making it highly conformable and resistant to yellowing."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="ELASTICITY AND STRENGTH"
      splitSubtitle="Industry Leading Materials"
      splitDescription="Lubrizol is a global leader in specialty chemicals. By using their high-grade TPU, our film provides unmatched puncture resistance, stretchability for complex curves, and a brilliant, long-lasting finish."
      features={[
        'LUBRIZOL TPU BASE',
        'HIGH PUNCTURE RESISTANCE',
        'EXCEPTIONAL ELASTICITY',
        'LONG-LASTING DURABILITY'
      ]}
      benefitsTitle="THE LUBRIZOL ADVANTAGE"
      benefits={[
        {
          icon: 'shield',
          title: 'Maximum Toughness',
          description: 'The premium TPU base offers superior resistance against tears, punctures, and road debris impacts.'
        },
        {
          icon: 'awesome',
          title: 'Seamless Installation',
          description: 'High elasticity allows the film to conform perfectly to complex vehicle curves without lifting or tension lines.'
        },
        {
          icon: 'speed',
          title: 'Weather Resistant',
          description: 'Engineered to withstand extreme temperature fluctuations without cracking or degrading over time.'
        }
      ]}
    />
  );
}
