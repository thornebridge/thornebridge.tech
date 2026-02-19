import { useState, useRef, useEffect } from "react";

interface Position {
  department: string;
  title: string;
  delay: string;
  location: string;
  type: string;
  payBand: string;
  description: string;
  responsibilities: string[];
  growth: string;
}

const positions: Position[] = [
  {
    department: "Sales",
    title: "Sales Development Representative",
    delay: "0.1s",
    location: "Remote — US",
    type: "Full-time",
    payBand: "$65,000 – $95,000 OTE",
    description:
      "First point of contact for lending brokerages, funders, and ISOs discovering Thornebridge. You'll open doors to firms ready to replace fragmented tooling with institutional-grade infrastructure.",
    responsibilities: [
      "Outbound prospecting into the business lending ecosystem",
      "Qualify inbound leads from product demos and referral network",
      "Partner with Account Executives to build pipeline for Lend.Works and Banklyze",
    ],
    growth:
      "As AI reshapes financial services through the 2030s, SDRs who understand lending infrastructure become irreplaceable. This role is a launchpad into enterprise sales, partnerships, or product — with a front-row seat to the firms modernizing private capital.",
  },
  {
    department: "Sales",
    title: "Account Executive",
    delay: "0.15s",
    location: "Remote — US",
    type: "Full-time",
    payBand: "$110,000 – $180,000 OTE",
    description:
      "Own the full sales cycle from qualified lead to signed contract. You'll work directly with brokerage owners and fund managers to architect multi-year platform deployments.",
    responsibilities: [
      "Run consultative demos tailored to each firm's lending workflows",
      "Navigate complex deals with multiple stakeholders across operations, compliance, and executive leadership",
      "Close multi-tenant deployments and expansion contracts for existing accounts",
    ],
    growth:
      "The lending technology market is consolidating — firms that digitize now will dominate the next decade. AEs here don't just sell software; they shape how capital moves. Clear path to VP Sales or Head of Partnerships as we scale.",
  },
  {
    department: "Growth",
    title: "GTM Specialist",
    delay: "0.2s",
    location: "Remote — US",
    type: "Full-time",
    payBand: "$85,000 – $130,000",
    description:
      "Architect the go-to-market motion for products at the intersection of AI and institutional finance. You'll own positioning, launch strategy, and demand generation across Banklyze, Lend.Works, and PM.",
    responsibilities: [
      "Build and execute launch playbooks for new product releases and market entries",
      "Develop positioning and messaging that resonates with technical and executive buyers",
      "Own growth metrics — pipeline contribution, activation rates, and expansion revenue",
    ],
    growth:
      "AI-powered fintech is entering its infrastructure era. GTM talent who can bridge the gap between deeply technical products and the firms that need them will define the next wave of B2B growth. This role grows into Head of Marketing or Chief Revenue Officer.",
  },
  {
    department: "Engineering",
    title: "Fullstack Engineer",
    delay: "0.25s",
    location: "Remote — US",
    type: "Full-time",
    payBand: "$130,000 – $200,000",
    description:
      "Build the systems that lending brokerages run their entire operations on. You'll work across the stack — from real-time WebSocket pipelines to AI-powered document analysis — shipping software that processes millions in deal flow.",
    responsibilities: [
      "Design and implement features across React, Node.js, and PostgreSQL",
      "Build AI integration layers connecting LLMs to deterministic financial workflows",
      "Own end-to-end delivery from architecture through production monitoring",
    ],
    growth:
      "Engineers who build at the intersection of AI and regulated finance will be the most sought-after talent of the 2030s. You'll gain deep domain expertise in lending infrastructure while working with cutting-edge AI tooling — a combination that compounds in value every year.",
  },
];

function mailtoHref(title: string) {
  const subject = encodeURIComponent(title);
  const body = encodeURIComponent(
    `Hello,\n\nI'm interested in the ${title} position. I've attached my resume below.\n\nBest regards`
  );
  return `mailto:careers@thornebridge.tech?subject=${subject}&body=${body}`;
}

function ExpandableRole({ pos }: { pos: Position }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div
      className="animate-reveal"
      style={{ animationDelay: pos.delay }}
    >
      {/* Clickable header row */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="group flex w-full items-center justify-between py-4 text-left first:pt-0 last:pb-0"
        aria-expanded={open}
      >
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-base font-medium text-stone-800 transition-colors duration-300 group-hover:text-brand md:text-lg">
            {pos.title}
          </span>
          <span className="hidden font-serif text-xs tracking-wide text-stone-500 sm:inline">
            {pos.department}
          </span>
        </div>
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`h-4 w-4 shrink-0 text-stone-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {/* Expandable detail panel */}
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          maxHeight: open ? `${height}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="pb-6 pt-1">
          {/* Meta row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span className="font-serif text-sm text-stone-600">{pos.location}</span>
            <span className="font-serif text-sm text-stone-600">{pos.type}</span>
          </div>

          {/* Pay band */}
          <div className="mt-4 inline-block rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5">
            <span className="font-serif text-sm font-medium tracking-wide text-brand">
              {pos.payBand}
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 font-serif text-[15px] leading-relaxed text-stone-700 sm:text-base">
            {pos.description}
          </p>

          {/* Responsibilities */}
          <h4 className="mt-5 font-serif text-sm font-medium tracking-[0.1em] text-stone-500 uppercase">
            What You'll Do
          </h4>
          <ul className="mt-2 space-y-2">
            {pos.responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-2 font-serif text-[15px] leading-relaxed text-stone-700 sm:text-base"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/40" />
                {item}
              </li>
            ))}
          </ul>

          {/* Growth vision */}
          <h4 className="mt-5 font-serif text-sm font-medium tracking-[0.1em] text-stone-500 uppercase">
            Why Now
          </h4>
          <p className="mt-2 font-serif text-[15px] leading-relaxed text-stone-700 sm:text-base">
            {pos.growth}
          </p>

          {/* Apply link */}
          <a
            href={mailtoHref(pos.title)}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-5 py-2 font-serif text-sm font-medium tracking-wide text-brand transition-all duration-300 hover:border-brand hover:bg-brand/10"
          >
            Apply for this role
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
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
            <ExpandableRole key={pos.title} pos={pos} />
          ))}
        </div>
      </div>
    </section>
  );
}
