"use client";

import { FadeIn } from "@/components/ui/animated-text";
import { Badge } from "@/components/ui/badge";

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  badge?: string;
}

const roles: Role[] = [
  {
    title: "Founder",
    company: "NioTap",
    period: "Jan 2026 – Present",
    location: "Remote",
    badge: "Current",
    description: [
      "Co-founded an AI email support platform focused on retrieval-augmented response drafting",
      "Defined early product vision and system architecture for multi-tenant AI SaaS",
      "Provided high-level guidance on AI use cases, RAG pipelines, and platform design",
    ],
  },
  {
    title: "Senior Consultant – Cloud, Platform & Applied AI Systems",
    company: "Capgemini",
    period: "Jul 2025 – Present",
    location: "Illinois, United States",
    badge: "Current",
    description: [
      "Designed internal GenAI accelerators using LLMs, RAG, and agentic workflows",
      "Built AI-powered analytics assistants and document intelligence prototypes",
      "Developed agent-based AI systems combining structured data, documents, and safe tool execution",
      "Integrated AWS-managed AI services including Amazon Bedrock",
      "Designed human-in-the-loop workflows with review, escalation, and auditability",
      "Evaluated cost, latency, reliability, and security trade-offs for enterprise GenAI adoption",
    ],
  },
  {
    title: "DevOps Specialist | Kubernetes & OpenShift Developer",
    company: "Capgemini",
    period: "Dec 2022 – Jul 2025",
    location: "India → Illinois, US",
    description: [
      "Backend and platform engineering using Java-based services and cloud-native architectures",
      "Developed custom Helm charts for scalable deployments across environments",
      "Implemented Argo Workflows for automation and orchestration",
      "Built enterprise CI/CD pipelines supporting blue-green and canary deployments",
      "Integrated security solutions including ServiceNow Data Security API and HashiCorp Vault",
      "Delivered Kubernetes and OpenShift training across multiple teams",
    ],
  },
  {
    title: "Java API Developer & DevOps Enthusiast",
    company: "Cognizant",
    period: "Sep 2020 – Nov 2022",
    location: "Chennai & Coimbatore, India",
    description: [
      "Led migration of enterprise applications from PCF to OpenShift for a major US bank",
      "Built and integrated Java REST APIs with Spring Boot and Kofax platforms",
      "Designed document extraction and classification workflows using Kofax TotalAgility",
      "Implemented JWT-based authentication and end-to-end data security",
      "Recognized with promotion to Associate for delivery excellence",
    ],
  },
];

export function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Experience
      </h2>
      <div className="relative space-y-0">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border" />

        {roles.map((role, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative pl-8 pb-10 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-border bg-background">
                {role.badge && (
                  <div className="absolute inset-[3px] rounded-full bg-accent" />
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-base font-semibold text-foreground">
                  {role.title}
                </h3>
                {role.badge && (
                  <Badge variant="accent">{role.badge}</Badge>
                )}
              </div>
              <p className="text-sm text-accent">{role.company}</p>
              <p className="mt-1 text-xs text-muted">
                {role.period} &middot; {role.location}
              </p>
              <ul className="mt-3 space-y-2">
                {role.description.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
