"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import { type Project, categoryLabels } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <GlowCard className="flex h-full flex-col" as="article">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant="accent">
            {categoryLabels[project.category]}
          </Badge>
          <ArrowUpRight size={14} className="text-muted" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>
      </GlowCard>
    </Link>
  );
}
