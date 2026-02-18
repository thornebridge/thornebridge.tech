import BridgeLogo from "./BridgeLogo";

export default function App() {
  return (
    <div className="min-h-svh bg-[#e8e5e0] p-3 md:p-5">
      <div className="relative mx-auto flex min-h-[calc(100svh-24px)] max-w-[1440px] flex-col overflow-hidden rounded-[2rem] bg-[#faf9f7] shadow-[inset_0_2px_12px_rgba(0,0,0,0.08),inset_0_1px_3px_rgba(0,0,0,0.06)] md:min-h-[calc(100svh-40px)]">
        {/* Header */}
        <header className="animate-reveal relative z-10 flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
          <div className="flex items-center gap-2.5">
            <BridgeLogo className="h-5 w-auto text-stone-700 md:h-6" />
            <span className="font-serif text-xl font-medium tracking-[0.04em] text-stone-800 md:text-2xl">
              Thornebridge
            </span>
          </div>
          <a
            href="mailto:projects@thornebridge.tech"
            className="rounded-full border border-stone-300 px-5 py-2.5 font-serif text-[11px] tracking-[0.15em] text-stone-600 uppercase transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white"
          >
            Contact Us
          </a>
        </header>

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

        {/* Bridge watermark */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-full max-w-3xl opacity-[0.05]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 70%, transparent 100%)",
          }}
        >
          <img src="/bridge.png" alt="" className="w-full" />
        </div>

        {/* Footer */}
        <footer className="relative z-10 px-8 py-6 md:px-12 md:py-8">
          <p className="font-serif text-[11px] tracking-[0.1em] text-stone-400">
            &copy; 2025 Thornebridge Holdings LLC.
          </p>
        </footer>
      </div>
    </div>
  );
}
