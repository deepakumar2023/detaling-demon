import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const HERO_BG_IMAGE = "https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg";
const SPLIT_IMAGE_URL = "https://images.pexels.com/photos/8478221/pexels-photo-8478221.jpeg";

export default function MaintenanceWash() {
  return (
    <ServiceLayout
      title="PHANTOM MAINTENANCE WASH"
      subtitle="PRESERVING PERFECTION"
      seoDescription="Our Maintenance Wash safely removes dirt and grime without inflicting swirl marks, preserving your vehicle's delicate paintwork."
      heroBgImage={HERO_BG_IMAGE}
      heroDescription="The majority of swirl marks and scratches are inflicted during improper washing. Our Maintenance Wash is a meticulous, multi-step process designed to safely clean your vehicle while preserving the clear coat."
      splitImageUrl={SPLIT_IMAGE_URL}
      splitTitle="SAFE WASH PROTOCOL"
      splitSubtitle="No More Swirls"
      splitDescription="We utilize thick snow foam pre-washes, the traditional two-bucket method with grit guards, and plush microfiber wash mitts. Your car is gently air-dried to prevent any unnecessary towel contact with the paint."
      features={[
        'SNOW FOAM PRE-WASH',
        'SAFE TWO-BUCKET METHOD',
        'WHEEL & BARREL CLEANING',
        'TOUCHLESS AIR DRYING'
      ]}
      benefitsTitle="WHY A DETAILER'S WASH?"
      benefits={[
        {
          icon: 'shield',
          title: 'Prevents Scratches',
          description: 'Our highly lubricated soaps and safe wash media ensure dirt is lifted away safely, avoiding the dreaded spider-web scratches.'
        },
        {
          icon: 'awesome',
          title: 'Thorough Cleaning',
          description: 'We do not just wash the paint; we meticulously clean door jambs, exhaust tips, and deep within the wheel barrels.'
        },
        {
          icon: 'speed',
          title: 'Protects Your Investment',
          description: 'Regular safe washing prevents the buildup of corrosive brake dust and environmental fallout that ruins paint over time.'
        }
      ]}
    />
  );
}
