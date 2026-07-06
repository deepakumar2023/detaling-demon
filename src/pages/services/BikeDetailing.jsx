import SEO from '../../components/SEO';
export default function BikeDetailing() {
  return (
    <div className="min-h-screen pt-48 px-5 md:px-20 bg-[var(--color-background)]">
      <SEO title="Bike Detailing | Detailing Demons" description="Learn more about our Bike Detailing services." />
      <h1 className="text-4xl font-bold font-[Space_Mono] text-[var(--color-primary-container)] mb-8">
        Bike Detailing
      </h1>
      <p className="text-[var(--color-on-surface-variant)] font-[Geist] text-lg">
        Detailed information about Bike Detailing will go here.
      </p>
    </div>
  );
}
