export default function BridgeLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Towers */}
      <line x1="12" y1="6" x2="12" y2="20" />
      <line x1="28" y1="6" x2="28" y2="20" />

      {/* Tower caps */}
      <line x1="10.5" y1="6" x2="13.5" y2="6" />
      <line x1="26.5" y1="6" x2="29.5" y2="6" />

      {/* Main cable (catenary arc) */}
      <path d="M2 8 Q 12 18, 20 12 Q 28 6, 38 8" />

      {/* Deck */}
      <line x1="2" y1="20" x2="38" y2="20" />

      {/* Suspender cables */}
      <line x1="7" y1="12.5" x2="7" y2="20" />
      <line x1="16" y1="15.5" x2="16" y2="20" />
      <line x1="20" y1="12" x2="20" y2="20" />
      <line x1="24" y1="9.5" x2="24" y2="20" />
      <line x1="33" y1="12.5" x2="33" y2="20" />
    </svg>
  );
}
