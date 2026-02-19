const positions = [
  {
    department: "Sales",
    title: "Sales Development Representative",
    delay: "0.1s",
  },
  {
    department: "Sales",
    title: "Account Executive",
    delay: "0.15s",
  },
  {
    department: "Growth",
    title: "GTM Specialist",
    delay: "0.2s",
  },
  {
    department: "Engineering",
    title: "Fullstack Engineer",
    delay: "0.25s",
  },
];

function mailtoHref(title: string) {
  const subject = encodeURIComponent(title);
  const body = encodeURIComponent(
    `Hello,\n\nI'm interested in the ${title} position. I've attached my resume below.\n\nBest regards`
  );
  return `mailto:careers@thornebridge.tech?subject=${subject}&body=${body}`;
}

export default function CareersSection() {
  return (
    <section id="careers" aria-label="Open positions" className="relative z-10 px-8 pb-12 md:px-12">
      <div className="mx-auto mb-8 h-px w-full max-w-4xl bg-stone-200" />

      <div className="mx-auto max-w-4xl">
        <h2
          className="animate-reveal font-serif text-lg font-semibold tracking-tight text-stone-800 md:text-xl"
        >
          Open Positions
        </h2>

        <div className="mt-6 divide-y divide-stone-200">
          {positions.map((pos) => (
            <a
              key={pos.title}
              href={mailtoHref(pos.title)}
              className="animate-reveal group flex items-center justify-between py-4 transition-colors duration-300 first:pt-0 last:pb-0"
              style={{ animationDelay: pos.delay }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-base font-medium text-stone-800 transition-colors duration-300 group-hover:text-brand md:text-lg">
                  {pos.title}
                </span>
                <span className="hidden font-serif text-xs tracking-wide text-stone-400 sm:inline">
                  {pos.department}
                </span>
              </div>
              <span className="font-serif text-sm text-stone-400 transition-colors duration-300 group-hover:text-brand">
                Apply &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
