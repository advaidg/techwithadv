"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/animated-text";
import { getFeaturedProjects, categoryLabels } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <Section>
      <SectionHeader
        title="Featured Projects"
        description="Selected AI systems I've designed and built, showcasing different aspects of applied AI engineering."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
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
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          View all projects &rarr;
        </Link>
      </div>
    </Section>
  );
}
