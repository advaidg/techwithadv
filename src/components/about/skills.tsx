"use client";

import { FadeIn } from "@/components/ui/animated-text";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    title: "AI & GenAI Systems",
    skills: [
      "Applied AI",
      "Generative AI",
      "Agentic AI",
      "RAG Pipelines",
      "Intelligent Document Processing",
      "LLM Integration",
      "Guardrails & Safety",
      "Human-in-the-Loop Design",
      "Prompt Engineering",
      "Tool Calling / MCP",
    ],
  },
  {
    title: "Backend & Platform",
    skills: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "REST APIs",
      "Kubernetes",
      "OpenShift",
      "Docker",
      "CI/CD Pipelines",
      "Helm",
      "Argo Workflows",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Amazon Bedrock",
      "Terraform",
      "S3",
      "Lambda",
      "CloudWatch",
      "OpenSearch",
      "PostgreSQL",
      "Redis",
      "FAISS",
      "pgvector",
    ],
  },
  {
    title: "AI Frameworks & Tools",
    skills: [
      "Anthropic Claude",
      "OpenAI",
      "Google Gemini",
      "ChromaDB",
      "HuggingFace",
      "Streamlit",
      "Next.js",
      "React",
      "TypeScript",
    ],
  },
];

export function Skills() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Skills & Technologies
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
