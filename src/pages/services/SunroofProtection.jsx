import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://loremflickr.com/1920/1080/supercar?lock=31";
const SPLIT_IMAGE_URL = "https://loremflickr.com/1920/1080/supercar,detail?lock=32";

export default function SunroofProtection() {
  return (
    <ServiceLayout
      title="PHANTOM SUNROOF PROTECTION"
      subtitle="OVERHEAD SHIELDING"
      seoDescription="Protect your vehicle's sunroof from rock chips and shattering with our high-impact Sunroof Protection Film."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Panoramic sunroofs are a beautiful feature, but they are highly susceptible to damage from falling debris and temperature shocks. Our specialized Sunroof Protection Film offers peace of mind."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="PREVENT SHATTERING"
      splitSubtitle="Impact Resistance"
      splitDescription="A shattered panoramic sunroof can be incredibly dangerous and extremely expensive to replace. Our thick, impact-resistant film acts as a net, absorbing the shock of rocks or hail and holding the glass together in the event of a breakage."
      features={[
        'IMPACT & SHATTER RESISTANCE',
        '99% UV REJECTION',
        'HEAT REDUCTION',
        'OPTICALLY CLEAR FINISH'
      ]}
      benefitsTitle="WHY PROTECT YOUR SUNROOF?"
      benefits={[
        {
          icon: 'shield',
          title: 'Safety First',
          description: 'Prevents glass shards from falling into the cabin if the sunroof is struck by a heavy object.'
        },
        {
          icon: 'awesome',
          title: 'Heat Rejection',
          description: 'Reflects infrared heat, keeping your vehicle cabin significantly cooler during the scorching summer months.'
        },
        {
          icon: 'speed',
          title: 'Cost Effective',
          description: 'Replacing a panoramic sunroof costs thousands. Our protection film is a fraction of the cost, saving you from expensive repairs.'
        }
      ]}
    />
  );
}
