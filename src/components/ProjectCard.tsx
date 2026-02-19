import type { Project } from "../data/projects";
import TechBadge from "./TechBadge";

function Placeholder({ ratio, label, icon }: { ratio: string; label: string; icon: React.ReactNode }) {
  return (
    <div
      className={`flex ${ratio} items-center justify-center rounded-xl border border-stone-200 bg-stone-100/60`}
    >
      <div className="flex flex-col items-center gap-2 text-stone-300">
        {icon}
        <span className="font-serif text-[11px] tracking-[0.1em] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}

const logoIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const previewIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="2" y1="8" x2="22" y2="8" />
    <circle cx="6" cy="6" r="0.5" fill="currentColor" />
    <circle cx="9" cy="6" r="0.5" fill="currentColor" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;
  const isPartnership = project.type === "partnership";

  const visuals = (
    <div className="flex flex-col gap-4">
      <Placeholder ratio="aspect-[3/2]" label="Logo" icon={logoIcon} />
      {!isPartnership && (
        <Placeholder ratio="aspect-video" label="Preview" icon={previewIcon} />
      )}
    </div>
  );

  const content = (
    <div className="flex flex-col gap-6 lg:gap-8">
      {/* Vision */}
      <div>
        <h3 className="font-serif text-sm font-medium tracking-[0.1em] text-stone-500 uppercase">
          Vision
        </h3>
        <p className="mt-2 font-serif text-[15px] leading-relaxed text-stone-700 sm:mt-3 sm:text-base">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      {!isPartnership && project.techStack.length > 0 && (
        <div>
          <h3 className="font-serif text-sm font-medium tracking-[0.1em] text-stone-500 uppercase">
            Tech Stack
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>
      )}

      {/* Problems Solved */}
      <div>
        <h3 className="font-serif text-sm font-medium tracking-[0.1em] text-stone-500 uppercase">
          Problems Solved
        </h3>
        <ul className="mt-2 space-y-2 sm:mt-3">
          {project.problemsSolved.map((problem) => (
            <li
              key={problem}
              className="flex gap-2 font-serif text-[15px] leading-relaxed text-stone-700 sm:text-base"
            >
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/40" />
              {problem}
            </li>
          ))}
        </ul>
      </div>

      {/* Future Goals */}
      <div>
        <h3 className="font-serif text-sm font-medium tracking-[0.1em] text-stone-500 uppercase">
          Future Goals
        </h3>
        <ul className="mt-2 space-y-2 sm:mt-3">
          {project.futureGoals.map((goal) => (
            <li
              key={goal}
              className="flex gap-2 font-serif text-[15px] leading-relaxed text-stone-700 sm:text-base"
            >
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
              {goal}
            </li>
          ))}
        </ul>
      </div>

      {/* SDK callout */}
      {project.sdkInstall && (
        <div className="overflow-x-auto rounded-lg border border-brand/20 bg-brand/5 px-4 py-3">
          <code className="whitespace-nowrap font-mono text-sm text-brand">{project.sdkInstall}</code>
        </div>
      )}

      {/* External link */}
      {project.externalUrl && (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-2 inline-flex items-center gap-2 rounded-lg px-2 py-2 font-serif text-sm tracking-wide text-brand transition-colors duration-300 hover:bg-brand/5 hover:text-brand/70"
        >
          View on GitHub
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
            <path d="M5 3h8v8M13 3 3 13" />
          </svg>
        </a>
      )}
    </div>
  );

  return (
    <section className="animate-reveal" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
      {/* Divider */}
      <div className="mb-6 h-px w-full bg-stone-200 lg:mb-8" />

      {/* Header row */}
      <div className="mb-4 flex items-center justify-between lg:mb-6">
        <span className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 font-serif text-[11px] tracking-[0.15em] text-brand uppercase">
          {project.category}
        </span>
        <span className="font-serif text-sm tracking-wide text-stone-300">
          {num}
        </span>
      </div>

      {/* Name + tagline */}
      <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-stone-900">
        {project.name}
      </h2>
      <p className="mt-1.5 font-serif text-base text-stone-600 sm:mt-2 sm:text-lg">
        {project.tagline}
      </p>

      {/* Two-column layout — mobile: single col, visuals first; desktop: alternating sides */}
      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-16">
        <div className={!isEven ? "lg:order-2" : ""}>{visuals}</div>
        <div className={!isEven ? "lg:order-1" : ""}>{content}</div>
      </div>
    </section>
  );
}
