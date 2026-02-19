import CareersSection from "../components/CareersSection";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <main className="relative z-10 flex flex-1 flex-col justify-center px-8 pb-24 md:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <span
              className="animate-reveal inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 font-serif text-[11px] tracking-[0.15em] text-brand uppercase"
              style={{ animationDelay: "0.2s" }}
            >
              Est. 2025
            </span>
            <h1
              className="animate-reveal mt-8 max-w-2xl font-serif text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-stone-900"
              style={{ animationDelay: "0.4s" }}
            >
              Engineered
              <br />
              for Permanence
            </h1>
          </div>
          <p
            className="animate-reveal max-w-xs font-serif text-base leading-relaxed text-stone-500 lg:mt-28 lg:text-[17px]"
            style={{ animationDelay: "0.7s" }}
          >
            Bespoke software infrastructure for institutional finance, private
            capital, and the firms that move markets.
          </p>
        </div>
      </main>

      {/* Careers */}
      <CareersSection />
    </>
  );
}
