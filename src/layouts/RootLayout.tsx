import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import ScrollToTop from "../components/ScrollToTop";
import { useKonamiCode } from "../hooks/useKonamiCode";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { konamiActive, toastVisible } = useKonamiCode();
  const { pathname } = useLocation();

  return (
    <div className="min-h-svh bg-[#e8e5e0] p-3 md:p-5">
      <ScrollToTop />
      <div className="relative mx-auto flex min-h-[calc(100svh-24px)] max-w-[1440px] flex-col overflow-hidden rounded-[2rem] bg-[#faf9f7] shadow-[inset_0_2px_12px_rgba(0,0,0,0.08),inset_0_1px_3px_rgba(0,0,0,0.06)] md:min-h-[calc(100svh-40px)]">
        {/* Header */}
        <header className="animate-reveal relative z-10 flex items-center justify-between px-8 py-6 md:px-12 md:py-8">
          <Link
            to="/"
            className="font-serif text-xl font-medium tracking-[0.04em] text-stone-800 md:text-2xl"
          >
            Thornebridge
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-center gap-4 md:flex">
            <Link
              to="/projects"
              className={`rounded-full border px-5 py-2.5 font-serif text-[11px] tracking-[0.15em] uppercase transition-all duration-500 ${
                pathname === "/projects"
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-transparent text-stone-500 hover:text-stone-800"
              }`}
            >
              Projects
            </Link>
            <a
              href="https://github.com/thornebridge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 transition-colors duration-500 hover:text-stone-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
            <a
              href="mailto:projects@thornebridge.tech"
              className="rounded-full border border-stone-300 px-5 py-2.5 font-serif text-[11px] tracking-[0.15em] text-stone-600 uppercase transition-all duration-500 hover:border-brand hover:bg-brand/10 hover:text-brand"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-stone-600 md:hidden"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </header>

        {/* Mobile menu overlay */}
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Page content */}
        <Outlet />

        {/* Bridge watermark */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-full max-w-3xl transition-opacity duration-[2000ms]"
          style={{
            opacity: konamiActive ? 0.12 : 0.05,
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 25%, black 70%, transparent 100%)",
          }}
        >
          <img src="/bridge.png" alt="" role="presentation" className="w-full" />
        </div>

        {/* Konami toast */}
        {toastVisible && (
          <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full border border-brand/20 bg-brand/5 px-5 py-2 font-serif text-sm tracking-wide text-brand animate-reveal">
            The vault is open.
          </div>
        )}

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
