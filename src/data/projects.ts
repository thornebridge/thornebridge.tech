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
    tagline: "AI-Powered Bank Statement Intelligence",
    category: "Fintech / AI",
    type: "product",
    description:
      "Automated 9-stage pipeline transforming bank statement PDFs into underwriting intelligence in under 60 seconds. 98.7% extraction accuracy. LLMs handle the unstructured problem — reading PDFs — while deterministic rules handle the regulated problem — credit decisions.",
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
      "Manual PDF review taking hours — now under 60 seconds",
      "Zero hallucination risk for credit decisions",
      "98.7% extraction accuracy across diverse bank statement formats",
    ],
    futureGoals: [
      "International bank statement formats",
      "SDK ecosystem (pip install banklyze)",
      "Real-time streaming analysis",
      "Broader MCA/ISO integrations",
    ],
    sdkInstall: "pip install banklyze",
  },
  {
    slug: "lend-works",
    name: "Lend.Works",
    tagline: "Brokerage-in-a-Box",
    category: "Fintech / SaaS",
    type: "product",
    description:
      "Comprehensive business lending platform replacing Salesforce + spreadsheets + 10 fragmented tools. Multi-tenant from day one. Built for funders, ISOs, direct lenders, and syndicates. Scales to 200+ brokers per tenant.",
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
      "Fragmented tooling across dozens of disconnected systems",
      "Generic CRMs that don't understand lending workflows",
      "Complex commission modeling for multi-tier brokerage operations",
      "Scaling to millions of leads without performance degradation",
    ],
    futureGoals: [
      "AI-powered lender matching",
      "Client self-service portal",
      "Advanced compliance tooling",
      "Syndicate deal management",
    ],
  },
  {
    slug: "pm",
    name: "PM",
    tagline: "Open Source Project Management",
    category: "Open Source",
    type: "product",
    description:
      "Lightning fast, 100% free, self-hosted Kanban boards with real-time collaboration. Single-file SQLite database, zero infrastructure dependencies, MIT licensed.",
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
      "Vendor lock-in with proprietary project management platforms",
      "Infrastructure overhead and operational complexity",
      "Data ownership and privacy concerns",
      "Cost of enterprise PM tools for small teams",
    ],
    futureGoals: [
      "Plugin ecosystem",
      "Team analytics",
      "Mobile companion app",
      "Federated sync",
    ],
    externalUrl: "https://github.com/thornebridge/pm",
  },
  {
    slug: "ccs",
    name: "Creative Capital Solutions",
    tagline: "Strategic Partner & Primary Investor",
    category: "Partnership",
    type: "partnership",
    description:
      "CCS is the proving ground for Thornebridge's lending infrastructure. We build the future of brokerages inside CCS, then release it to the world. Real-world validation at scale with a direct feedback loop from active brokerage operations.",
    techStack: [],
    problemsSolved: [
      "Real-world validation of platform architecture at scale",
      "Direct operational feedback loop from active brokerage",
      "Battle-tested workflows before public release",
    ],
    futureGoals: [
      "Expand partnership model",
      "White-label platform deployment for CCS network",
      "Joint go-to-market strategy",
    ],
  },
];
