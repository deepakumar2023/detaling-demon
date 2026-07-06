import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://loremflickr.com/1920/1080/supercar?lock=35";
const SPLIT_IMAGE_URL = "https://tse3.mm.bing.net/th/id/OIP.UXC7KPVz_SIVkTwkJL1ocQHaHa?pid=Api&P=0&h=180";

export default function WindshieldProtection() {
  return (
    <ServiceLayout
      title="PHANTOM WINDSHIELD PROTECTION FILM"
      subtitle="CRYSTAL CLEAR DEFENSE"
      seoDescription="Protect your car's windshield against rock chips, cracks, and pitting with our premium Windshield Protection Film. Enjoy optical clarity and advanced hydrophobic properties."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Windshield Protection Film is a highly functional layer designed to absorb impacts from road debris, preventing chips, cracks, and costly replacements."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="BEYOND THE GLASS"
      splitSubtitle="Unmatched Durability"
      splitDescription="Our advanced windshield protection film not only acts as an invisible shield against flying stones and road hazards, but also integrates superior optical clarity, ensuring zero distortion while driving. Say goodbye to the anxiety of shattered windshields."
      features={[
        'IMPACT RESISTANCE',
        'HYDROPHOBIC PROPERTIES',
        '99% UV REJECTION',
        'OPTICAL CLARITY'
      ]}
      benefitsTitle="WHY CHOOSE WINDSHIELD FILM?"
      benefits={[
        {
          icon: 'shield',
          title: 'Absorbs Impact',
          description: 'Scientifically engineered to absorb the shock of flying rocks, minimizing the risk of a broken or chipped windshield.'
        },
        {
          icon: 'speed',
          title: 'Optical Clarity',
          description: 'Constructed using a high-quality PET base layer ensuring crystal clear vision with no distortion or haze.'
        },
        {
          icon: 'awesome',
          title: 'Hydrophobic Surface',
          description: 'Features a water-repellent top coat that allows water and snow to easily slide off, improving visibility in bad weather.'
        }
      ]}
    />
  );
}
