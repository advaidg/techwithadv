import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
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

        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          {project.image && (
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border bg-white p-3 sm:h-24 sm:w-24">
              <Image
                src={project.image}
                alt={`${project.title} logo`}
                fill
                className="object-contain p-2"
              />
            </div>
          )}
          <div>
            <div className="mb-3">
              <Badge variant="accent">
                {categoryLabels[project.category]}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>

            {project.links && (
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-all hover:border-accent/30 hover:text-foreground"
                  >
                    <ExternalLink size={14} />
                    Visit Website
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted transition-all hover:border-accent/30 hover:text-foreground"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
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
