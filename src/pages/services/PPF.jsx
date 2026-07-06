import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://loremflickr.com/1920/1080/supercar?lock=15";
const SPLIT_IMAGE_URL = "https://loremflickr.com/1920/1080/supercar,detail?lock=16";

export default function PPF() {
  return (
    <ServiceLayout
      title="PHANTOM PAINT PROTECTION FILM"
      subtitle="THE ULTIMATE INVISIBLE SHIELD"
      seoDescription="Protect your car's paint from rock chips, scratches, and stains with our premium Paint Protection Film (PPF)."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Paint Protection Film (PPF) is a virtually invisible urethane layer that protects your vehicle's paint from everyday damage, ensuring it looks brand new for years."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="DEFEND YOUR PAINT"
      splitSubtitle="Self-Healing Technology"
      splitDescription="Our high-quality PPF absorbs impacts from road debris, preventing rock chips, scratches, and stains. With advanced self-healing properties, minor scratches disappear with heat, keeping the film flawless."
      features={[
        'ROCK CHIP PROTECTION',
        'SELF-HEALING SURFACE',
        'STAIN RESISTANCE',
        'HIGH GLOSS FINISH'
      ]}
      benefitsTitle="WHY INVEST IN PPF?"
      benefits={[
        {
          icon: 'shield',
          title: 'Maximum Protection',
          description: 'The thickest and most durable clear layer available to prevent physical damage to your clear coat.'
        },
        {
          icon: 'awesome',
          title: 'Self-Healing',
          description: 'Advanced polymers automatically heal light scratches and swirl marks when exposed to the sun or engine heat.'
        },
        {
          icon: 'speed',
          title: 'Resale Value Retention',
          description: 'Maintains pristine factory paint, significantly increasing the resale value of your vehicle.'
        }
      ]}
    />
  );
}
