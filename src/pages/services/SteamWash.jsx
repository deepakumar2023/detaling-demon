import SEO from '../../components/SEO';
export default function SteamWash() {
  return (
    <div className="min-h-screen pt-48 px-5 md:px-20 bg-[var(--color-background)]">
      <SEO title="Steam Wash | Detailing Demons" description="Learn more about our Steam Wash services." />
      <h1 className="text-4xl font-bold font-[Space_Mono] text-[var(--color-primary-container)] mb-8">
        Steam Wash
      </h1>
      <p className="text-[var(--color-on-surface-variant)] font-[Geist] text-lg">
        Detailed information about Steam Wash will go here.
      </p>
    </div>
  );
}
