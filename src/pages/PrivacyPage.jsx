import React from 'react';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-48 pb-20 px-5 md:px-20 bg-[var(--color-background)]">
      <SEO title="Privacy Policy | Detailing Demons" description="Privacy policy for Detailing Demons." />
      <div className="max-w-4xl mx-auto text-[var(--color-on-surface-variant)] font-[Geist]">
        <h1 className="text-4xl font-bold font-[Space_Mono] text-[var(--color-primary-container)] mb-8 uppercase italic tracking-wide">Privacy Policy</h1>
        <div className="space-y-6">
          <p>At Detailing Demons, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">1. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, phone number, and vehicle details when you book a service, contact us, or visit our facilities.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">2. How We Use Your Information</h2>
          <p>Your information is used to schedule services, process transactions, communicate regarding your appointments, and improve our overall customer experience. We may also send promotional materials if you have opted in.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">3. Data Protection</h2>
          <p>We implement strict security measures to maintain the safety of your personal data. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">4. Media and Vehicle Photography</h2>
          <p>We frequently photograph and record video of the vehicles we work on for portfolio and marketing purposes. License plates will be blurred upon request. If you do not wish for your vehicle to be featured, please let us know beforehand.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">5. Contact Us</h2>
          <p>If you have any questions regarding this privacy policy, you may contact us at INFO@DETAILINGDEMONS.COM.</p>
        </div>
      </div>
    </div>
  );
}
