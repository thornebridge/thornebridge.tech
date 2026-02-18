export default function App() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#08090a]">
      {/* Bridge watermark */}
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-[0.035]"
        style={{
          backgroundImage: "url('/bridge.png')",
          backgroundSize: "min(85vw, 1000px)",
          filter: "invert(1)",
        }}
      />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-6">
        <img
          src="/logo.png"
          alt="Thornebridge Holdings Co."
          className="animate-reveal w-32 rounded-2xl shadow-2xl shadow-black/50 md:w-40"
        />

        <div
          className="animate-reveal mt-10 mb-8 h-px w-10 bg-brand/50"
          style={{ animationDelay: "0.3s" }}
        />

        <p
          className="animate-reveal font-serif text-base tracking-[0.2em] font-light text-stone-500 uppercase md:text-lg"
          style={{ animationDelay: "0.6s" }}
        >
          Engineered for permanence
        </p>
      </main>

      {/* Contact */}
      <footer
        className="animate-reveal absolute bottom-8"
        style={{ animationDelay: "1.2s" }}
      >
        <a
          href="mailto:inquiries@thornebridge.tech"
          className="font-serif text-[11px] tracking-[0.3em] text-stone-700 uppercase transition-colors duration-700 hover:text-brand"
        >
          Inquiries
        </a>
      </footer>
    </div>
  );
}
