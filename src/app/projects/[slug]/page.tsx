import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects, getProjectBySlug, categoryLabels } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.tagline}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <Section className="py-0">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to projects
        </Link>

        <div className="mb-4">
          <Badge variant="accent">
            {categoryLabels[project.category]}
          </Badge>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-muted">{project.tagline}</p>
      </Section>

      <Section className="py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Overview
              </h2>
              <p className="leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Key Capabilities
              </h2>
              <ul className="space-y-3">
                {project.capabilities.map((cap, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                AI Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.aiConcepts.map((concept) => (
                  <Badge key={concept} variant="accent">
                    {concept}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
