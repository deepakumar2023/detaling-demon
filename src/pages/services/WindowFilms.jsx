import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://images.pexels.com/photos/3370332/pexels-photo-3370332.jpeg?_gl=1*153ad4t*_ga*MTA2NzQ3NDYzNy4xNzgzMzIyODY1*_ga_8JE65Q40S6*czE3ODMzMjI4NjQkbzEkZzEkdDE3ODMzMjM5OTkkajU5JGwwJGgw";
const SPLIT_IMAGE_URL = "https://images.pexels.com/photos/36806222/pexels-photo-36806222.jpeg?_gl=1*9vkp6m*_ga*MTA2NzQ3NDYzNy4xNzgzMzIyODY1*_ga_8JE65Q40S6*czE3ODMzMjI4NjQkbzEkZzEkdDE3ODMzMjM5OTkkajU5JGwwJGgw";

export default function WindowFilms() {
  return (
    <ServiceLayout
      title="PHANTOM WINDOW FILMS"
      subtitle="PREMIUM TINT & UV PROTECTION"
      seoDescription="Upgrade your vehicle with premium Window Films. Enhance privacy, reject solar heat, and block 99% of harmful UV rays."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Window tinting is more than just aesthetics. Our premium Window Films provide superior heat rejection, glare reduction, and UV protection, ensuring a cooler and more comfortable ride."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="COMFORT & PRIVACY"
      splitSubtitle="Advanced Nano-Ceramic Tints"
      splitDescription="We offer the highest quality nano-ceramic window films on the market. Unlike traditional dyed tints that fade and bubble, our ceramic films block up to 80% of infrared heat without interfering with GPS or cell phone signals."
      features={[
        'SUPERIOR HEAT REJECTION',
        '99.9% UV RAY BLOCKAGE',
        'ZERO SIGNAL INTERFERENCE',
        'ENHANCED CABIN PRIVACY'
      ]}
      benefitsTitle="THE CERAMIC TINT DIFFERENCE"
      benefits={[
        {
          icon: 'awesome',
          title: 'Stay Cool',
          description: 'Dramatically reduces the interior temperature of your car, meaning your AC doesn’t have to work as hard.'
        },
        {
          icon: 'shield',
          title: 'Interior Protection',
          description: 'Blocks harmful UV rays that cause your leather seats to crack and your dashboard to fade over time.'
        },
        {
          icon: 'speed',
          title: 'Glare Reduction',
          description: 'Improves driving safety by significantly reducing blinding glare from the sun and headlights of other vehicles.'
        }
      ]}
    />
  );
}
