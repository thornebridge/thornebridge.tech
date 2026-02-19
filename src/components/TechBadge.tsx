export default function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-stone-200 bg-stone-50 px-3 py-1 font-serif text-[11px] tracking-wide text-stone-600">
      {label}
    </span>
  );
}
