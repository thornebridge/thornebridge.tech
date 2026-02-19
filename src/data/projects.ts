export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problemsSolved: string[];
  futureGoals: string[];
  techStack: string[];
  category: string;
  type: "product" | "partnership";
  externalUrl?: string;
  sdkInstall?: string;
  logoSrc?: string;
  previewSrc?: string;
}

export const projects: Project[] = [
  {
    slug: "banklyze",
    name: "Banklyze",
    tagline: "Kill the Spreadsheet. Underwrite in Seconds.",
    category: "Fintech / AI",
    type: "product",
    description:
      "The entire lending industry still underwrites off PDFs that humans squint at for hours. We built a 9-stage AI pipeline that eats bank statements alive — 60 seconds, 98.7% accuracy, zero hallucination risk on credit decisions. LLMs read the chaos; deterministic rules enforce the law. Every competitor is building AI that guesses. We built AI that knows.",
    techStack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "TaskIQ",
      "Claude Haiku",
      "pdfplumber",
      "Tesseract",
      "Textract",
      "WeasyPrint",
      "Next.js",
      "Docker",
    ],
    problemsSolved: [
      "Underwriters burning hours on manual PDF review — obliterated to under 60 seconds",
      "Industry-wide hallucination risk in AI credit decisions — eliminated entirely with hybrid architecture",
      "98.7% extraction accuracy where competitors plateau at 80%",
    ],
    futureGoals: [
      "Global expansion — every bank format, every country, every currency",
      "Open SDK ecosystem so any lender can plug in (pip install banklyze)",
      "Real-time streaming analysis for live decisioning",
      "Become the standard underwriting layer for the entire MCA/ISO industry",
    ],
    sdkInstall: "pip install banklyze",
  },
  {
    slug: "lend-works",
    name: "Lend.Works",
    tagline: "The Operating System for Business Lending",
    category: "Fintech / SaaS",
    type: "product",
    description:
      "Lending brokerages run on Salesforce hacks, duct-taped spreadsheets, and 10 tools that don't talk to each other. We're replacing all of it. Lend.Works is a single platform purpose-built for how capital actually moves — multi-tenant from day one, designed for the complexity that generic CRMs can't touch. 200+ brokers per tenant. Millions of leads. Zero compromises.",
    techStack: [
      "Node.js",
      "Hono",
      "tRPC",
      "React 19",
      "TanStack Router",
      "PostgreSQL",
      "Drizzle",
      "Redis",
      "BullMQ",
      "Meilisearch",
      "MinIO",
      "Socket.io",
      "Turborepo",
      "Docker",
      "Caddy",
    ],
    problemsSolved: [
      "Killed the 10-tool Frankenstein stack brokerages have been suffering through",
      "Built lending-native workflows that Salesforce will never understand",
      "Solved multi-tier commission modeling that makes accountants cry",
      "Engineered for millions of leads where legacy systems buckle at thousands",
    ],
    futureGoals: [
      "AI-powered lender matching — the right capital for every deal, instantly",
      "Client self-service portal that makes brokers look like Goldman Sachs",
      "Compliance automation that turns regulation into a competitive advantage",
      "Full syndicate deal management — the Bloomberg Terminal for business lending",
    ],
  },
  {
    slug: "pm",
    name: "PM",
    tagline: "Project Management, Liberated",
    category: "Open Source",
    type: "product",
    description:
      "Jira costs $50K/year and makes your team slower. We built PM to prove a point: project management should be instant, free, and yours. One SQLite file. No vendor lock-in. No infrastructure. No subscription. Real-time collaboration, push notifications, and a UI so fast it makes Notion feel like a government website. MIT licensed, because tools this essential shouldn't have a paywall.",
    techStack: [
      "SvelteKit 2",
      "TypeScript",
      "SQLite",
      "better-sqlite3",
      "Drizzle ORM",
      "Tailwind CSS 4",
      "WebSocket",
      "Web Push API",
      "Docker",
    ],
    problemsSolved: [
      "Broke teams free from vendor lock-in and predatory enterprise pricing",
      "Eliminated infrastructure overhead — one file is your entire database",
      "Gave teams full data ownership and sovereignty, no cloud dependency",
      "Proved enterprise-grade PM doesn't need an enterprise price tag",
    ],
    futureGoals: [
      "Plugin ecosystem so teams can build exactly what they need",
      "Team analytics that actually drive decisions, not dashboards",
      "Mobile companion app for managing on the move",
      "Federated sync — collaborate across orgs without a central server",
    ],
    externalUrl: "https://github.com/thornebridge/pm",
  },
  {
    slug: "ccs",
    name: "Creative Capital Solutions",
    tagline: "Where the Future Gets Battle-Tested",
    category: "Partnership",
    type: "partnership",
    description:
      "Most software companies build in a vacuum and pray it works in production. We build inside a live brokerage moving real capital, every single day. CCS isn't just our partner — it's our crucible. Every feature in Lend.Works and Banklyze gets forged under the pressure of actual deal flow before it ships to anyone else. When we say battle-tested, we mean it literally.",
    techStack: [],
    problemsSolved: [
      "Eliminated the gap between product vision and operational reality",
      "Created the fastest feedback loop in fintech — build, deploy, validate, same week",
      "Every workflow ships pre-proven with real money on the line",
    ],
    futureGoals: [
      "Scale the partnership model — embed inside more firms, build better software",
      "White-label platform deployment across the CCS network",
      "Joint go-to-market that turns one partnership into an industry standard",
    ],
  },
];
