import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="relative z-10 flex-1 px-8 pb-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="pb-16 pt-4">
          <span
            className="animate-reveal inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 font-serif text-[11px] tracking-[0.15em] text-brand uppercase"
            style={{ animationDelay: "0.1s" }}
          >
            Portfolio
          </span>
          <h1
            className="animate-reveal mt-8 max-w-2xl font-serif text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tight text-stone-900"
            style={{ animationDelay: "0.3s" }}
          >
            The Work
          </h1>
          <p
            className="animate-reveal mt-6 max-w-lg font-serif text-base leading-relaxed text-stone-600 lg:text-[17px]"
            style={{ animationDelay: "0.5s" }}
          >
            We don't build tools. We replace entire categories of software
            that the industry settled for.
          </p>
        </div>

        {/* Project sections */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
