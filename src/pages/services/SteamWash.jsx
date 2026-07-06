import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://images.unsplash.com/photo-1605164598708-25701594473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwc3RlYW0lMjB3YXNoaW5nfGVufDB8fDB8fHww";
const SPLIT_IMAGE_URL = "https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg";

export default function SteamWash() {
  return (
    <ServiceLayout
      title="PHANTOM STEAM WASH"
      subtitle="ECO-FRIENDLY DEEP CLEAN"
      seoDescription="Our Steam Wash provides a superior, chemical-free deep clean for your vehicle's interior and exterior, killing 99% of bacteria."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Harness the power of high-pressure, high-temperature steam. A Steam Wash breaks down tough grime, grease, and stains instantly, sanitizing surfaces without the need for harsh, toxic chemicals."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="SANITIZE & PURIFY"
      splitSubtitle="The Ultimate Clean"
      splitDescription="Steam is highly effective at reaching deep into crevices where traditional brushes cannot. It sanitizes the AC vents, effectively kills bacteria in the upholstery, and safely melts away engine bay grease with minimal water usage."
      features={[
        'KILLS 99.9% OF BACTERIA',
        'CHEMICAL-FREE PROCESS',
        'CLEANS VENTS & CREVICES',
        'LOW WATER CONSUMPTION'
      ]}
      benefitsTitle="THE POWER OF STEAM"
      benefits={[
        {
          icon: 'shield',
          title: 'Deep Sanitization',
          description: 'High temperatures instantly kill germs, mold, and allergens lurking deep within seats and carpets.'
        },
        {
          icon: 'awesome',
          title: 'Safe on Electronics',
          description: 'Because it uses minimal water, steam is the safest way to effectively degrease modern, sensor-heavy engine bays.'
        },
        {
          icon: 'speed',
          title: 'Odor Removal',
          description: 'Eliminates stubborn odors from smoke, pets, or spilled food by breaking down the odor-causing bacteria at the source.'
        }
      ]}
    />
  );
}
