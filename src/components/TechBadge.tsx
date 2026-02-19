export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-stone-300 bg-stone-100/60 px-3 py-1 font-serif text-[11px] tracking-wide text-stone-700">
      {label}
    </span>
  );
}
