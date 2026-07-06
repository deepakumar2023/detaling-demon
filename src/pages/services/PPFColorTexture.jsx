import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://loremflickr.com/1920/1080/supercar?lock=19";
const SPLIT_IMAGE_URL = "https://loremflickr.com/1920/1080/supercar,detail?lock=20";

export default function PPFColorTexture() {
  return (
    <ServiceLayout
      title="PHANTOM COLOR & TEXTURE PPF"
      subtitle="STYLE MEETS PROTECTION"
      seoDescription="Change your vehicle's look completely while protecting it with our Color and Texture Paint Protection Films."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Why choose between a color wrap and paint protection when you can have both? Our Color & Texture PPF offers full customization with the robust protection of traditional clear bra."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="TRANSFORM & PROTECT"
      splitSubtitle="Limitless Customization"
      splitDescription="Available in matte, satin, carbon fiber, and a wide array of high-gloss colors, these films allow you to completely restyle your vehicle without compromising on defense against road hazards."
      features={[
        'THICKER THAN VINYL WRAPS',
        'MATTE & SATIN FINISHES',
        'CARBON FIBER TEXTURES',
        'FULL COLOR CHANGES'
      ]}
      benefitsTitle="WHY COLOR PPF?"
      benefits={[
        {
          icon: 'awesome',
          title: 'Two-in-One Solution',
          description: 'Get the aesthetic change of a vinyl wrap with the extreme impact protection of a Paint Protection Film.'
        },
        {
          icon: 'shield',
          title: 'No More Rock Chips',
          description: 'Unlike standard vinyl wraps which easily chip, color PPF absorbs impacts and self-heals.'
        },
        {
          icon: 'speed',
          title: 'Reversible Transformation',
          description: 'Change the color of your car safely; the film can be removed without damaging the original OEM paint.'
        }
      ]}
    />
  );
}
