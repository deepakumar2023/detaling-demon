import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "/services/paint-protection-film/protection-coating/hero-img.jpg";
const SPLIT_IMAGE_URL = "/services/paint-protection-film/protection-coating/split-img.jpg";

export default function PPFProtectionCoating() {
  return (
    <ServiceLayout
      title="PHANTOM PPF PROTECTION COATING"
      subtitle="ENHANCE YOUR SHIELD"
      seoDescription="Maximize the lifespan and performance of your Paint Protection Film with a specialized PPF Ceramic Coating."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="Already have PPF installed? Take its performance to the next level with a specialized PPF Ceramic Coating. This top-layer treatment enhances gloss, adds hydrophobics, and extends the life of your film."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="DOUBLE THE DEFENSE"
      splitSubtitle="Synergistic Protection"
      splitDescription="While PPF offers incredible physical protection against rock chips, a PPF-specific ceramic coating provides the ultimate chemical resistance and ease of cleaning, creating a synergistic double-layer defense system."
      features={[
        'DESIGNED SPECIFICALLY FOR PPF',
        'INCREASES FILM LIFESPAN',
        'EXTREME WATER BEADING',
        'PREVENTS DIRT BUILDUP'
      ]}
      benefitsTitle="WHY COAT YOUR PPF?"
      benefits={[
        {
          icon: 'shield',
          title: 'Extended Lifespan',
          description: 'Protects the porous surface of the polyurethane film from absorbing dirt and UV rays, preventing early degradation.'
        },
        {
          icon: 'awesome',
          title: 'Self-Cleaning Effect',
          description: 'Adds an incredibly slick, hydrophobic layer that causes water to bead up and roll off, carrying dirt away.'
        },
        {
          icon: 'speed',
          title: 'Enhanced Gloss',
          description: 'Deepens the visual impact of the film, making it look glossier and more like bare, polished clear coat.'
        }
      ]}
    />
  );
}
