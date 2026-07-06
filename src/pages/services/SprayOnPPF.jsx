import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "/services/spray-on-ppf/hero-img.jpg";
const SPLIT_IMAGE_URL = "/services/spray-on-ppf/split-img.jpg";

export default function SprayOnPPF() {
  return (
    <ServiceLayout
      title="PHANTOM SPRAY-ON PPF"
      subtitle="SEAMLESS PEELABLE PAINT"
      seoDescription="Spray-On PPF offers a truly seamless, peelable protective layer that conforms to any complex shape without stretch marks or edges."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Spray-On Paint Protection Film (also known as Peelable Paint) is a revolutionary product applied with a spray gun, providing a thick, completely seamless protective layer over the entire vehicle."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="SEAMLESS PROTECTION"
      splitSubtitle="The Future of PPF"
      splitDescription="Unlike traditional sheet PPF, Spray-On PPF has no edges to lift, no stretch marks, and no relief cuts. It conforms perfectly to the most complex aerodynamic shapes, vents, and grilles, offering undetectable, edge-to-edge protection."
      features={[
        '100% SEAMLESS FINISH',
        'NO VISIBLE EDGES',
        'CAN BE WET-SANDED & POLISHED',
        'EASILY PEELABLE REMOVAL'
      ]}
      benefitsTitle="WHY SPRAY-ON PPF?"
      benefits={[
        {
          icon: 'awesome',
          title: 'True Seamless Finish',
          description: 'No edges means dirt cannot collect at the seams, making the protection completely invisible to the naked eye.'
        },
        {
          icon: 'shield',
          title: 'Customizable Thickness',
          description: 'Can be sprayed thicker in high-impact areas like the front bumper for maximum rock chip resistance.'
        },
        {
          icon: 'speed',
          title: 'Polishable Surface',
          description: 'Just like real clear coat, Spray-On PPF can be wet-sanded, compounded, and polished to a mirror finish.'
        }
      ]}
    />
  );
}
