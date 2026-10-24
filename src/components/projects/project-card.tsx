"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project, categoryLabels } from "@/data/projects";

const colors = ["bg-[#d7ff52]", "bg-[#cdd6ff]", "bg-[#ffc2b5]", "bg-[#e3d8ff]", "bg-[#f4e6b7]"];

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(18,19,21,.10)]">
    <div className={`${colors[index % colors.length]} relative flex min-h-44 items-start justify-between overflow-hidden p-6`}>
      {project.image && <Image src={project.image} alt={`${project.title} product interface`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"/>}
      {project.image && <span className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/10"/>}
      <span className={`eyebrow relative z-10 ${project.image ? "text-white" : ""}`}>{categoryLabels[project.category]}</span>
      <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 transition-colors group-hover:bg-foreground group-hover:text-background"><ArrowUpRight size={16}/></span>
      {!project.image && <span className="project-index absolute bottom-1 left-4 opacity-60">{String(index + 1).padStart(2, "0")}</span>}
    </div>
    <div className="flex flex-1 flex-col p-6">
      {project.status && <p className="eyebrow mb-3 text-accent">{project.status}</p>}
      <h2 className="text-2xl font-semibold tracking-[-.04em]">{project.title}</h2>
      <p className="mt-2 text-sm font-medium">{project.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.techStack.slice(0, 3).map((tech) => <span key={tech} className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-medium text-muted">{tech}</span>)}</div>
    </div>
  </Link>;
}
