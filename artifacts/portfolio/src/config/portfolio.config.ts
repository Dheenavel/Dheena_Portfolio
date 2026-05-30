/**
 * ============================================================
 *  PORTFOLIO CONFIG — edit everything about your site here
 * ============================================================
 *  All personal data, links, and content live in this one file.
 *  Sections import from here; no hunting through component files.
 * ============================================================
 */

// ── Personal ─────────────────────────────────────────────────
export const personal = {
  name: "Dheenadayalan Kathirvel",
  shortName: "Dheena",
  navName: "DHEENA_KATHIRVEL",
  title: "AI Product Manager",
  tagline: "Engineer by training, AI Product Manager by passion. I love building things that matter to real people.",
  bio: [
    "I was building features for an X-ray imaging system at Philips when something clicked. The feature I was working on was going to help someone. A radiologist. A technician. A patient. I could feel it. That feeling lit a fire in me, and it has never gone out. I started asking questions about the product side of things, discovered product management, and made a decision that changed everything. The engineer in me never left. It just found a better outlet.",
    "Today I'm building AI-powered global payment reconciliation at Tesla. Before that, at Deluxe Corporation, I shipped AI products from scratch: a named GenAI document intelligence platform, customer and internal chatbots, and 10+ automation bots across business units. Work that created $2M+ in savings and eliminated 50,000 hours of manual labor. What kept me going through all of it: pure love for the craft of building.",
  ],
  quote: "The best PMs create clarity for everyone around them.",
  heroTitles: ["AI Product Manager", "Builder", "Substack Writer", "Engineer turned PM"],
  photo: "/photos/headshot.jpg",
};

// ── Links ─────────────────────────────────────────────────────
export const links = {
  linkedin: "https://linkedin.com/in/dheenadayalan-kathirvel/",
  substack: "https://dheenakathirvel31.substack.com/",
  email: "dheenavel@gmail.com",
  youtubeKeynote: "https://www.youtube.com/live/itHp7_GQLaY",
};

// ── Experience ────────────────────────────────────────────────
// Each entry has:
//   context  — one sentence framing the role
//   products — what was built (shown as cards)
//   impact   — achievement chips shown at the bottom of the card
export const experience = [
  {
    company: "Tesla",
    logo: "/photos/tesla.jpg",
    logoAlt: "Tesla",
    logoBg: "bg-black",
    role: "AI Product Manager",
    dates: "May 2026 – Present",
    location: "Bellevue, WA",
    context: "Leading AI-powered financial infrastructure for Tesla's global operations.",
    products: [
      {
        name: "Global Payment Reconciliation Platform",
        description: "End-to-end AI system automating payment reconciliation at global scale across Tesla's financial operations.",
        tags: ["AI", "Fintech", "Scale"],
      },
    ],
    impact: [] as string[],
  },
  {
    company: "Deluxe Corporation",
    logo: "/logos/deluxe-logo.png",
    logoAlt: "Deluxe Corporation logo",
    logoBg: "bg-white",
    role: "AI Product Manager",
    dates: "Jul 2024 – Apr 2026",
    location: "Atlanta, GA",
    context: "Built and shipped Deluxe's first generation of enterprise AI products: from document intelligence to customer engagement to company-wide automation.",
    products: [
      {
        name: "Helius",
        description: "GenAI-powered document intelligence platform combining OCR, entity extraction, and automated validation for receivables teams. Earned the company's Red Shoes Award for enterprise-wide impact.",
        tags: ["GenAI", "OCR", "Document AI"],
      },
      {
        name: "Cerebro",
        description: "3-way ML matching engine for cash application. Automatically reconciled invoices, payments, and remittance data, replacing a fully manual workflow end to end.",
        tags: ["ML", "Cash Application"],
      },
      {
        name: "Conversational AI Suite",
        description: "Designed and deployed RAG and agentic AI chatbots on Deluxe.com and multiple other customer-facing and internal channels. Handled complex client queries without human escalation.",
        tags: ["Claude", "GPT", "RAG", "Agentic AI"],
      },
      {
        name: "RPA Automation Suite",
        description: "10+ robotic process automation bots deployed across 4 business units, aligned with 80+ stakeholders. Delivered $2M in annualized savings and cost avoidance, eliminating 50,000+ labor hours of manual work.",
        tags: ["RPA", "Automation"],
      },
    ],
    impact: ["Red Shoes Award", "$2M+ savings", "50K+ hours saved", "NPS +40%"],
  },
  {
    company: "Dell Technologies",
    logo: "/logos/dell-logo.png",
    logoAlt: "Dell Technologies logo",
    logoBg: "bg-white",
    role: "Graduate PM Intern, Multi-Cloud (ISG)",
    dates: "May 2023 – Aug 2023",
    location: "Austin, TX",
    context: "Embedded within the Infrastructure Solutions Group to shape the multi-cloud product strategy through competitive research and deep stakeholder discovery.",
    products: [
      {
        name: "Dell ISG Multi-Cloud Strategy",
        description: "Competitive deep-dive across 3 leading hybrid and multi-cloud platforms. Findings were adopted directly into the ISG product roadmap, backed by 30+ stakeholder interviews across engineering, sales, and customer success.",
        tags: ["Product Strategy", "Competitive Analysis"],
      },
    ],
    impact: ["Bravo Dell Inspire Award", "Roadmap adopted by ISG"],
  },
  {
    company: "Philips India",
    logo: "/logos/philips-logo.png",
    logoAlt: "Philips logo",
    logoBg: "bg-[#0B1E8F]",
    role: "Software Development Engineer II/I",
    dates: "Feb 2019 – Jun 2022",
    location: "Bangalore, India",
    context: "Built software features for Philips' medical imaging products: MRI systems and DXR X-ray platforms used by radiologists and clinical teams worldwide.",
    products: [
      {
        name: "Autovoice Software Installer",
        description: "Automated the Autovoice software installation as part of MRI system upgrades, replacing a previously manual step with a reliable automated workflow.",
        tags: [],
      },
      {
        name: "Auto-Assist Collimation",
        description: "UI-guided collimation feature for DXR X-ray systems that walked radiologic technologists step-by-step through precise beam positioning, reducing setup errors and improving clinical workflow efficiency.",
        tags: [],
      },
      {
        name: "MRI Video Export",
        description: "Video export capability for MRI diagnostic workstations, enabling clinical teams to export imaging captures to external systems outside the MRI software for remote review and consultation.",
        tags: [],
      },
      {
        name: "Call Rate Analysis System",
        description: "Pattern detection system across MRI imaging platforms that identified recurring failure signatures before they became complaints, reducing customer complaint rates by 30%.",
        tags: [],
      },
    ],
    impact: ["Q1-2021 Quality Champion Award", "30% complaint rate reduction", "60% team efficiency gain"],
  },
];

// ── Featured Work ─────────────────────────────────────────────
// Highlighted products and personal AI prototypes.
// link: "#" shows "In Progress" instead of a link button.
export const projects = [
  {
    name: "Helius — GenAI Document AI",
    description:
      "Enterprise document intelligence platform built at Deluxe. Combined OCR, entity extraction, and ML validation to automate receivables processing at scale.",
    tags: ["GenAI", "OCR", "Enterprise AI"],
    link: "https://www.deluxe.com/receivables-management/cash-application/",
  },
  {
    name: "Competitive Analysis Agent",
    description:
      "Personal build. Automates market research and competitive insight generation using Lovable, n8n, and Gemini — end-to-end from brief to structured report.",
    tags: ["n8n", "Gemini", "Agentic AI"],
    link: "#",
  },
  {
    name: "DocWriter Assistant",
    description:
      "MCP server built with Claude Sonnet that scrapes web data and collaboratively edits documents through natural conversation.",
    tags: ["MCP", "Claude", "Sonnet 3.7"],
    link: "#",
  },
  {
    name: "Reflect.ai",
    description:
      "Full-stack app built with Lovable and Supabase that helps users process and analyze personal reflections through a conversational UI.",
    tags: ["Lovable", "Supabase", "Full-Stack"],
    link: "#",
  },
];

// ── Writing / Substack ────────────────────────────────────────
export const writing = {
  heading: "Thoughts on Building",
  subheading:
    "I write about AI, product management, and what building actually teaches you — on Substack.",
  posts: [
    {
      tag: "[AI]",
      title: "The PM's Operating Model for the AI Era",
      description:
        "Engineering is 10x faster. Product Management is the new bottleneck. Here's the 3-part framework (Impact, Execution, Optics) to fix it.",
      date: "2025",
      url: "https://dheenakathirvel31.substack.com/p/the-pms-operating-model-for-the-ai",
    },
    {
      tag: "[AI Stack]",
      title: "The Product Manager's Guide to the AI Stack",
      description:
        "Navigating architecture reviews, model selection, and infrastructure constraints without being an engineer.",
      date: "2026",
      url: "https://dheenakathirvel31.substack.com/p/the-product-managers-guide-to-the",
    },
    {
      tag: "[Career]",
      title: "Two Years In: What Product Management Actually Demands of You",
      description:
        "The honest account of an engineer who chased the idea of building products and what building them actually taught him.",
      date: "2026",
      url: "https://dheenakathirvel31.substack.com/p/two-years-in-what-product-management",
    },
  ],
};

// ── Speaking ──────────────────────────────────────────────────
export const speaking = [
  {
    type: "Keynote Presentation",
    title: "Product Operating Model for the AI Era",
    description:
      "Keynote presented to 100+ product professionals on the shift to a new operating model for the AI era, moving from traditional agile cadences to AI-assisted rapid prototyping and continuous delivery.",
    event: "Product Coffee",
    location: "Atlanta, GA",
    date: "Dec 2025",
    videoUrl: links.youtubeKeynote,
    thumbnail: "/photos/keynote-thumbnail.png",
  },
];

// ── Skills ────────────────────────────────────────────────────
export const skills = [
  {
    title: "Core PM",
    color: "border-blue-500/20 text-blue-400 bg-blue-500/10",
    items: ["Roadmapping", "Product Strategy", "Prototyping", "Customer Research", "Agile"],
  },
  {
    title: "AI & Analytics",
    color: "border-purple-500/20 text-purple-400 bg-purple-500/10",
    items: [
      "LLM APIs", "Document AI", "RAG", "Agentic Workflows", "Prompt Design",
      "LangChain", "MCP", "n8n", "Tableau", "Power BI",
    ],
  },
  {
    title: "Technical",
    color: "border-green-500/20 text-green-400 bg-green-500/10",
    items: ["Python", "SQL", "Java", "C#", "WPF", "R", "APIs", "SDKs", "RPA"],
  },
  {
    title: "Tools",
    color: "border-orange-500/20 text-orange-400 bg-orange-500/10",
    items: ["JIRA", "JetBrains", "MS Office", "Lovable", "Supabase"],
  },
  {
    title: "Certifications",
    color: "border-neutral-500/20 text-neutral-400 bg-neutral-500/10",
    items: ["AI Product Management — OpenAI (Dec 2025)"],
  },
];

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    school: "Texas A&M University, Mays Business School",
    logo: "/logos/tamu-logo.png",
    logoAlt: "Texas A&M University Mays Business School logo",
    logoBg: "bg-[#500000]",
    degree: "Master of Business Administration (MBA)",
    date: "May 2024",
    location: "College Station, TX",
  },
  {
    school: "PSG College of Technology",
    logo: "/logos/psg-logo.png",
    logoAlt: "PSG College of Technology logo",
    logoBg: "bg-white",
    degree: "B.Tech, Information Technology",
    date: "May 2019",
    location: "Coimbatore, India",
  },
];

// ── SEO / Meta ────────────────────────────────────────────────
export const seo = {
  title: "Dheenadayalan Kathirvel — AI Product Manager",
  description:
    "AI PM shipping enterprise GenAI products. $2M+ in savings, NPS +40%, 50K hours saved. Writing on Substack. Speaker at Product Coffee Atlanta.",
  ogImage: "/photos/headshot.jpg",
  twitterHandle: "",
  siteUrl: "https://dheenakathirvel.com",
};

// ── Nav ───────────────────────────────────────────────────────
export const nav = {
  links: [
    { label: "About",      href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work",       href: "#projects" },
    { label: "Writing",    href: "#writing" },
    { label: "Speaking",   href: "#speaking" },
    { label: "Skills",     href: "#skills" },
    { label: "Education",  href: "#education" },
    { label: "Contact",    href: "#contact" },
  ],
};

// ── Sections ──────────────────────────────────────────────────
export const sections = [
  { id: "about",      enabled: true },
  { id: "experience", enabled: true },
  { id: "projects",   enabled: true },
  { id: "writing",    enabled: true },
  { id: "speaking",   enabled: true },
  { id: "skills",     enabled: true },
  { id: "education",  enabled: true },
  { id: "contact",    enabled: true },
] as const;
