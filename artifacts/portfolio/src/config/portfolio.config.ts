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
  tagline: "Builder at heart, shipping AI products that create real impact.",
  bio: [
    "I started my career building X-ray imaging systems at Philips. I loved the craft, but I kept asking one question: who decides what to build, and why? That question led me to an MBA, then into product management. The engineer in me never left — it just found a better outlet.",
    "Now I build AI products at Tesla. Before that, I shipped GenAI systems at Deluxe that drove $2M in savings and 30% call deflection — not by writing better PRDs, but by getting close to real problems and being obsessive about outcomes. I write about what I learn on Substack.",
  ],
  quote: "The best PMs create clarity for everyone around them when no one can see the full terrain.",
  /** Cycling titles shown in the hero */
  heroTitles: ["AI Product Manager", "Builder", "Substack Writer", "AI Enthusiast"],
  photo: "/photos/headshot.jpg",
};

// ── Links ─────────────────────────────────────────────────────
export const links = {
  linkedin: "https://linkedin.com/in/dheenadayalan-kathirvel/",
  substack: "https://dheenakathirvel31.substack.com/",
  /** Path to the PDF in /public — the Resume button downloads this */
  resume: "/Dheenadayalan_Kathirvel_Resume.pdf",
  resumeFilename: "Dheenadayalan_Kathirvel_Resume.pdf",
  email: "dheenavel@gmail.com",
  /** YouTube keynote — used in the Speaking section */
  youtubeKeynote: "https://www.youtube.com/live/itHp7_GQLaY",
  /** Add GitHub, Twitter/X, etc. here as needed */
  // github: "https://github.com/...",
  // twitter: "https://x.com/...",
};

// ── Experience ────────────────────────────────────────────────
export const experience = [
  {
    company: "Tesla",
    logo: "/photos/tesla.jpg",
    logoAlt: "Tesla",
    logoBg: "bg-black",
    role: "AI Product Manager",
    dates: "2025 – Present",
    location: "Austin, TX",
    bullets: [
      "Owning product strategy and delivery for Tesla's Global Payment Reconciliation platform, designed to automate and scale financial reconciliation across international markets.",
    ] as string[],
    photo: null as string | null,
  },
  {
    company: "Deluxe Corporation",
    logo: "/logos/deluxe-logo.png",
    logoAlt: "Deluxe Corporation logo",
    logoBg: "bg-white",
    role: "AI Product Manager",
    dates: "Jul 2024 – 2025",
    location: "Atlanta, GA",
    bullets: [
      'Launched GenAI Document AI combining OCR, entity extraction, and ML 3-way matching for receivables automation, earning the company\'s "Red Shoes Award" for innovation.',
      "Shipped a GenAI chatbot on Deluxe.com using Claude and GPT APIs, deflecting 30% of inbound call center volume and improving self-service resolution.",
      "Built an AI call deflection and analytics product for the Print and Promo division, delivering $300K in annual cost savings and improving NPS by 40 points.",
      "Identified and automated high-friction manual workflows across 4 business units, driving $2M in annualized savings and eliminating 50K labor hours.",
    ],
    photo: null as string | null,
  },
  {
    company: "Dell Technologies",
    logo: "/logos/dell-logo.png",
    logoAlt: "Dell Technologies logo",
    logoBg: "bg-white",
    role: "Graduate PM Intern, Multi Cloud (ISG)",
    dates: "May 2023 – Aug 2023",
    location: "Austin, TX",
    bullets: [
      "Conducted competitive analysis across 3 hybrid and multi-cloud platforms, producing strategic recommendations that directly shaped the ISG product roadmap.",
      "Ran 30+ stakeholder interviews across engineering, sales, and customer success to surface unmet needs and influence the product enhancement backlog.",
      'Recognized with the "Bravo Dell Inspire" award for contribution quality and leadership impact during a 3-month internship.',
    ],
    photo: null as string | null,
  },
  {
    company: "Philips India",
    logo: "/logos/philips-logo.png",
    logoAlt: "Philips logo",
    logoBg: "bg-[#0B1E8F]",
    role: "Software Development Engineer II/I, Image Acquisition Platform",
    dates: "Feb 2019 – Jun 2022",
    location: "Bangalore, India",
    bullets: [
      "Launched a call rate analysis system that identified recurring field failure patterns across MRI imaging platforms, reducing customer complaint rates by 30%.",
      "Led software upgrade prioritization for MRI backup systems, cutting backup completion time by 10% and reducing unplanned downtime risk.",
      'Earned the "Q1-2021 Quality Champion Award" for driving cross-functional quality improvements on the Image Acquisition Platform.',
      "Designed and deployed workflow automation tools for the engineering team, improving team efficiency by 60% and eliminating manual reporting overhead.",
    ],
    photo: null as string | null,
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    name: "GenAI OCR + Cash Application",
    description:
      "AI-powered document processing with OCR, entity extraction, and ML 3-way matching for receivables automation at Deluxe (R360+ product).",
    tags: ["GenAI", "OCR", "ML"],
    /** Replace "#" with a live demo or GitHub URL */
    link: "https://www.deluxe.com/receivables-management/cash-application/",
  },
  {
    name: "Deluxe GenAI Chatbot",
    description:
      "Deployed GenAI chatbots using Claude and GPT APIs on Deluxe.com and MyCorporation.com, reducing call center volume by 30%.",
    tags: ["Claude", "GPT", "GenAI"],
    link: "https://www.deluxe.com/",
  },
  {
    name: "Competitive Analysis Agent",
    description: "Automates market research and competitive insight generation using AI agents.",
    tags: ["Lovable", "n8n", "Gemini"],
    // TODO: add your live demo or GitHub URL
    link: "#",
  },
  {
    name: "DocWriter Assistant",
    description:
      "MCP server that scrapes web data and collaboratively edits documents via conversation.",
    tags: ["Claude Sonnet 3.7", "MCP"],
    // TODO: add your live demo or GitHub URL
    link: "#",
  },
  {
    name: "Reflect.ai",
    description: "Full-stack app analyzing user reflections through conversational UI.",
    tags: ["Lovable", "Supabase"],
    // TODO: add your live demo or GitHub URL
    link: "#",
  },
];

// ── Writing / Substack ────────────────────────────────────────
export const writing = {
  heading: "Thoughts on Building",
  subheading:
    "I write about AI, Product Management, and the future of building, on Substack.",
  posts: [
    {
      tag: "[Career]",
      title: "Two Years In: What Product Management Actually Demands of You",
      description:
        "The honest account of an engineer who chased the idea of building products and what building them actually taught him.",
      date: "2025",
      url: "https://dheenakathirvel31.substack.com/p/two-years-in-what-product-management",
    },
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
      date: "2025",
      url: "https://dheenakathirvel31.substack.com/p/the-product-managers-guide-to-the",
    },
  ],
};

// ── Speaking ──────────────────────────────────────────────────
export const speaking = [
  {
    type: "Keynote Presentation",
    title: "Product Operating Model for the AI Era",
    description:
      "Keynote presented to 100+ product leaders on moving to a new operating model for the AI era. Discussed the shift from traditional agile cadences to AI-assisted rapid prototyping and delivery.",
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
      "GPT", "Claude", "Gemini", "Document AI", "n8n",
      "LangChain", "MCP", "RAG", "Prompt Design", "Tableau", "Power BI",
    ],
  },
  {
    title: "Technical",
    color: "border-green-500/20 text-green-400 bg-green-500/10",
    items: ["Python", "SQL", "Java", "C#", "APIs", "SDKs", "RPA"],
  },
  {
    title: "Tools",
    color: "border-orange-500/20 text-orange-400 bg-orange-500/10",
    items: ["JIRA", "MS Office"],
  },
  {
    title: "Certifications",
    color: "border-neutral-500/20 text-neutral-400 bg-neutral-500/10",
    items: ["AI Product Management (OpenAI, Dec 2025)"],
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
    "AI PM shipping enterprise GenAI products. $2M+ in savings, 30% call deflection. Writing on Substack. Speaker at Product Coffee Atlanta.",
  ogImage: "/photos/headshot.jpg",
  twitterHandle: "",
  siteUrl: "https://dheenakathirvel.replit.app",
};
