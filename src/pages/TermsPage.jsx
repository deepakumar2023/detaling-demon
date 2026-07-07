import React from 'react';
import SEO from '../components/SEO';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-48 pb-20 px-5 md:px-20 bg-[var(--color-background)]">
      <SEO title="Terms and Conditions | Detailing Demons" description="Terms and conditions for Detailing Demons." />
      <div className="max-w-4xl mx-auto text-[var(--color-on-surface-variant)] font-[Geist]">
        <h1 className="text-4xl font-bold font-[Space_Mono] text-[var(--color-primary-container)] mb-8 uppercase italic tracking-wide">Terms and Conditions</h1>
        <div className="space-y-6">
          <p>Welcome to Detailing Demons. By accessing our website and using our services, you agree to abide by the following Terms and Conditions.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">1. Services</h2>
          <p>Detailing Demons provides premium automotive detailing, ceramic coating, paint protection films (PPF), and related services. All services are subject to availability and may require prior booking.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">2. Pricing and Payments</h2>
          <p>Prices for our services are subject to change without notice. We reserve the right to modify or discontinue a service at any time. Payment is required upon completion of the service unless otherwise agreed.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">3. Warranties and Guarantees</h2>
          <p>We use industry-leading products and apply them with professional precision. However, warranties on ceramic coatings and PPF are subject to the manufacturer's terms and require proper maintenance by the vehicle owner.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">4. Liability</h2>
          <p>While we take the utmost care of your vehicle, Detailing Demons is not liable for pre-existing damage, interior wear, or mechanical issues. Customers are advised to remove personal belongings before handing over their vehicle.</p>
          
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)] mt-8">5. Modifications to Terms</h2>
          <p>We may update these terms occasionally. Your continued use of our services constitutes acceptance of the new terms.</p>
        </div>
      </div>
    </div>
  );
}
