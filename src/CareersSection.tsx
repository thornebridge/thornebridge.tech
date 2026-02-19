const positions = [
  {
    department: "Sales",
    title: "Sales Development Representative",
    description:
      "Source and qualify opportunities across institutional finance and private capital markets.",
    delay: "0.1s",
  },
  {
    department: "Sales",
    title: "Account Executive",
    description:
      "Own the full sales cycle for enterprise infrastructure engagements, from discovery through close.",
    delay: "0.2s",
  },
  {
    department: "Growth",
    title: "GTM Specialist",
    description:
      "Design and execute go-to-market strategy for new verticals and product launches.",
    delay: "0.3s",
  },
  {
    department: "Engineering",
    title: "Fullstack Engineer",
    description:
      "Build and ship production systems across the stack — from React frontends to distributed backend services.",
    delay: "0.4s",
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
    <section id="careers" className="relative z-10 px-8 pb-16 md:px-12">
      <div className="mx-auto mb-12 h-px w-full max-w-4xl bg-stone-200" />

      <div className="mx-auto max-w-4xl">
        <span
          className="animate-reveal inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 font-serif text-[11px] tracking-[0.15em] text-brand uppercase"
        >
          Careers
        </span>

        <h2
          className="animate-reveal mt-8 font-serif text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight text-stone-900"
          style={{ animationDelay: "0.1s" }}
        >
          Build What Endures
        </h2>

        <p
          className="animate-reveal mt-4 max-w-lg font-serif text-base leading-relaxed text-stone-500 md:text-[17px]"
          style={{ animationDelay: "0.2s" }}
        >
          We're assembling a small, exceptional team to architect infrastructure
          for firms that demand precision. If that sounds like your kind of
          problem, we'd like to hear from you.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {positions.map((pos) => (
            <div
              key={pos.title}
              className="animate-reveal group rounded-2xl border border-stone-200 p-6 transition-colors duration-500 hover:border-brand/30"
              style={{ animationDelay: pos.delay }}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-[11px] tracking-[0.15em] text-stone-400 uppercase">
                  {pos.department}
                </span>
                <span className="font-serif text-[11px] tracking-[0.1em] text-stone-400">
                  Full-time
                </span>
              </div>

              <h3 className="mt-3 font-serif text-lg font-semibold text-stone-800">
                {pos.title}
              </h3>

              <p className="mt-2 font-serif text-sm leading-relaxed text-stone-500">
                {pos.description}
              </p>

              <a
                href={mailtoHref(pos.title)}
                className="mt-4 inline-block font-serif text-sm tracking-wide text-brand transition-opacity duration-300 hover:opacity-70"
              >
                Apply &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
