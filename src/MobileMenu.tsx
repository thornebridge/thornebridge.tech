import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#faf9f7]">
      {/* Close button */}
      <div className="flex justify-end px-8 py-6">
        <button
          onClick={onClose}
          className="text-stone-600"
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-1 flex-col items-center justify-center gap-10">
        <a
          href="#careers"
          onClick={onClose}
          className="font-serif text-2xl tracking-wide text-stone-800 transition-colors duration-300 hover:text-brand"
        >
          Careers
        </a>
        <a
          href="https://github.com/thornebridge"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="font-serif text-2xl tracking-wide text-stone-800 transition-colors duration-300 hover:text-brand"
        >
          GitHub
        </a>
        <a
          href="mailto:projects@thornebridge.tech"
          onClick={onClose}
          className="font-serif text-2xl tracking-wide text-stone-800 transition-colors duration-300 hover:text-brand"
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
}
