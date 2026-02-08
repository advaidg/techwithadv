export type ProjectCategory =
  | "agentic-ai"
  | "rag"
  | "document-intelligence"
  | "genai"
  | "platform";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  aiConcepts: string[];
  techStack: string[];
  category: ProjectCategory;
  featured: boolean;
  image?: string;
  links?: {
    website?: string;
    github?: string;
  };
}

export const categoryLabels: Record<ProjectCategory, string> = {
  "agentic-ai": "Agentic AI",
  rag: "RAG",
  "document-intelligence": "Document Intelligence",
  genai: "GenAI",
  platform: "Platform",
};

export const projects: Project[] = [
  {
    slug: "deckweaver",
    title: "DeckWeaver",
    tagline: "GenAI Slide Narration & Publishing System",
    description:
      "AI-assisted system that converts presentation decks into editable slide narrations, audio previews, and shareable HTML outputs. Focuses on GenAI product architecture with human-in-the-loop editing and selective regeneration capabilities.",
    capabilities: [
      "Auto-generates narration based on tone, audience, and duration",
      "Human-in-the-loop editing and selective regeneration",
      "Per-slide text-to-speech audio previews",
      "Produces HTML-ready presentations that can be shared or embedded",
      "Full-stack system with backend orchestration and frontend UI",
    ],
    aiConcepts: [
      "Generative AI",
      "Prompt Engineering",
      "Human-in-the-Loop Workflows",
      "AI Content Regeneration",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "AWS S3",
      "AWS Polly",
      "PostgreSQL",
      "Terraform",
    ],
    category: "genai",
    featured: true,
  },
  {
    slug: "skyops",
    title: "SkyOps",
    tagline: "Agentic AI for Cloud Operations & Observability",
    description:
      "Voice-enabled, agent-based AI assistant for investigating application health using cloud metrics, logs, and knowledge bases. Features agentic AI with tool-based execution and strict guardrails for safe cloud operations.",
    capabilities: [
      "Chat and voice interface (STT/TTS)",
      "Agentic AI with tool-based execution",
      "Queries CloudWatch metrics and logs",
      "Knowledge-base-backed RAG for operational context",
      "Read-only AWS execution with strict guardrails",
      "Fully provisioned using Terraform",
    ],
    aiConcepts: [
      "Agentic AI",
      "Tool Calling",
      "RAG with Operational Data",
      "Guardrails & Safety Constraints",
    ],
    techStack: [
      "Amazon Bedrock Agents",
      "FastAPI",
      "Next.js",
      "AWS Lambda",
      "CloudWatch",
      "S3",
      "OpenSearch",
      "Terraform",
      "GitHub Actions",
    ],
    category: "agentic-ai",
    featured: true,
  },
  {
    slug: "idp-platform",
    title: "Document Intelligence Platform",
    tagline: "OCR + Layout + LLM Extraction Pipelines",
    description:
      "Enterprise-style intelligent document processing system that turns raw PDFs and images into structured, review-ready data. Features async pipelines with retries, fallbacks, and comprehensive cost and latency tracking.",
    capabilities: [
      "Text-layer detection with OCR fallback",
      "Layout detection (GPU-based optional)",
      "LLM-based classification and extraction",
      "Async pipelines with retries and fallbacks",
      "Cost, latency, and success-rate tracking",
      "Review workflows for low-confidence outputs",
    ],
    aiConcepts: [
      "Intelligent Document Processing",
      "OCR Pipelines",
      "Layout-Aware Extraction",
      "LLM Guardrails",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "Tesseract OCR",
      "pdfplumber",
      "Celery",
      "Redis",
      "Postgres",
      "MinIO",
    ],
    category: "document-intelligence",
    featured: true,
  },
  {
    slug: "finsight-explorer",
    title: "FinSight Explorer",
    tagline: "Agentic Financial Data Assistant",
    description:
      "Claude-powered analytics assistant enabling natural-language exploration of banking transaction datasets. Uses agentic MCP server architecture with schema discovery and validated SQL workflows.",
    capabilities: [
      "Agentic MCP server exposing schema discovery & query tools",
      "Natural-language to validated SQL workflows",
      "RAG over domain documents + schema metadata",
      "Streamlit UI + REST adapter",
      "Schema-aware query analysis and formatting",
    ],
    aiConcepts: [
      "Agentic AI",
      "Tool-Based LLM Execution (MCP)",
      "RAG over Structured Data",
      "AI Guardrails for SQL Safety",
    ],
    techStack: [
      "Python",
      "FastMCP",
      "Anthropic Claude",
      "PostgreSQL",
      "ChromaDB",
      "HuggingFace Embeddings",
      "Streamlit",
      "FastAPI",
    ],
    category: "agentic-ai",
    featured: false,
  },
  {
    slug: "niotap",
    title: "NioTap",
    tagline: "AI Email Support Platform",
    description:
      "Multi-tenant AI email support platform that drafts responses using mailbox-specific knowledge bases. Advisory and architectural role focused on AI SaaS system design and retrieval-augmented response drafting.",
    capabilities: [
      "Retrieval-augmented response drafting",
      "Mailbox-scoped knowledge ingestion",
      "Multi-tenant isolation and RBAC",
      "Gmail / IMAP / SMTP integrations",
      "Citation tracking and audit timelines",
      "Subscription and plan enforcement",
    ],
    aiConcepts: [
      "Retrieval-Augmented Generation (RAG)",
      "AI Workflow Orchestration",
      "AI SaaS System Design",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "Next.js",
      "PostgreSQL",
      "pgvector",
      "OAuth",
      "Docker Compose",
    ],
    category: "rag",
    featured: false,
    image: "/images/projects/niotap.png",
    links: {
      website: "https://niotap.com",
    },
  },
  {
    slug: "research-doc-platform",
    title: "Research Document Analysis",
    tagline: "Summarization, Q&A & Report Generation",
    description:
      "AI platform for analyzing large research documents and producing summaries, answers, and shareable reports. Features document ingestion with OCR and chunking, session-based chat workflows, and optional email delivery.",
    capabilities: [
      "Document ingestion with OCR and chunking",
      "RAG-based summarization and Q&A",
      "Session-based chat workflows",
      "Optional email delivery of reports",
      "Web UI for document viewing and chat",
    ],
    aiConcepts: [
      "RAG Pipelines",
      "Document Summarization",
      "Knowledge Retrieval Systems",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "Next.js",
      "React",
      "FAISS",
      "pgvector",
      "AWS Bedrock",
      "AWS SES",
      "Terraform",
    ],
    category: "rag",
    featured: false,
  },
  {
    slug: "hybrid-rag-nl2sql",
    title: "Hybrid RAG + NL-to-SQL",
    tagline: "Documents + Databases in One AI Workflow",
    description:
      "Hybrid AI assistant combining document Q&A with natural-language database querying. Orchestrates both document and database tools with session memory and citation tracking.",
    capabilities: [
      "Semantic + keyword hybrid retrieval",
      "Natural-language to SQL with safety checks",
      "Hybrid agent orchestrating doc + DB tools",
      "Session memory and citation tracking",
      "Compliance/discrepancy monitoring demos",
    ],
    aiConcepts: [
      "Hybrid AI Systems",
      "NL-to-SQL",
      "Tool Orchestration",
      "AI Safety Constraints",
    ],
    techStack: ["Python", "Gradio", "FAISS", "PostgreSQL", "Google Gemini"],
    category: "rag",
    featured: false,
  },
  {
    slug: "foundational-rag",
    title: "Foundational RAG System",
    tagline: "Streamlit + FAISS Document Q&A",
    description:
      "Early-stage RAG system built to explore document ingestion, embeddings, and grounded Q&A. Features multi-format document ingestion, metadata-aware chunking, and FAISS vector search with MMR reranking.",
    capabilities: [
      "Multi-format document ingestion",
      "Metadata-aware chunking",
      "FAISS vector search with MMR reranking",
      "Gemini / OpenAI embeddings",
      "Streamlit-based UI with chat history",
    ],
    aiConcepts: [
      "Retrieval-Augmented Generation",
      "Vector Search",
      "Prompt Grounding & Safety",
    ],
    techStack: [
      "Python",
      "Streamlit",
      "FAISS",
      "Google Gemini",
      "OpenAI",
    ],
    category: "rag",
    featured: false,
  },
  {
    slug: "ai-agent-workflows",
    title: "Internal AI Agent Workflows",
    tagline: "Classification, Drafting & Reliability Patterns",
    description:
      "Reusable AI agent patterns for classification, drafting, escalation, and reliability. Includes LLM-driven classification with confidence thresholds, retry and validation strategies, and comprehensive observability.",
    capabilities: [
      "LLM-driven classification with confidence thresholds",
      "Escalation and fallback logic",
      "Citation tracking and audit logs",
      "Token usage and cost monitoring",
      "Retry and validation strategies",
    ],
    aiConcepts: [
      "AI Reliability Engineering",
      "Workflow Orchestration",
      "Guardrails & Observability",
    ],
    techStack: ["Python", "FastAPI", "LLM APIs", "Redis", "PostgreSQL"],
    category: "platform",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
