import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Github } from "lucide-react";
import { projects, getProjectBySlug, categoryLabels } from "@/data/projects";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }
export async function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: `${project.title} — ${project.tagline}`, description: project.description } : {};
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <main className="pb-24 pt-28 sm:pt-36">
    <div className="shell">
      <Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground"><ArrowLeft size={15}/>All work</Link>

      <div className="overflow-hidden rounded-[2.25rem] bg-foreground text-background">
        <div className="grid min-h-[36rem] lg:grid-cols-[1.2fr_.8fr]">
          <div className="flex flex-col p-7 sm:p-12">
            <div className="flex flex-wrap gap-3"><span className="eyebrow text-[#d7ff52]">{categoryLabels[project.category]}</span>{project.status && <span className="eyebrow text-white/35">· {project.status}</span>}</div>
            <h1 className="mt-6 text-5xl font-semibold leading-[.94] tracking-[-.06em] sm:text-7xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-xl text-white/65">{project.tagline}</p>
            <div className="mt-auto pt-14">
              <p className="max-w-2xl text-base leading-relaxed text-white/60">{project.description}</p>
              {project.role && <p className="mt-5 text-sm font-semibold text-white">Role · {project.role}</p>}
            </div>
          </div>
          <div className="paper-grid relative flex items-center justify-center bg-[#d7ff52] p-8 text-foreground">
            <div className="w-full max-w-sm rounded-3xl border border-black/15 bg-white/75 p-6 shadow-2xl backdrop-blur">
              <p className="eyebrow text-muted">System anatomy</p>
              <div className="mt-6 space-y-3">{project.aiConcepts.slice(0,4).map((concept, index) => <div key={concept} className="flex items-center gap-3 rounded-2xl bg-white p-4"><span className="grid h-7 w-7 place-items-center rounded-full bg-foreground font-mono text-[9px] text-background">0{index + 1}</span><span className="text-sm font-semibold">{concept}</span></div>)}</div>
            </div>
          </div>
        </div>
      </div>

      {project.image && <section className="py-8 sm:py-12">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black p-2 shadow-[0_30px_90px_rgba(18,19,21,.14)] sm:p-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-white">
            <Image src={project.image} alt={`${project.title} live product interface`} fill priority sizes="(max-width: 1280px) 100vw, 1216px" className="object-cover"/>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2">
          <p className="eyebrow text-muted">Captured from the live product · October 2026</p>
          {project.links?.website && <a href={project.links.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold">Open live product <ExternalLink size={14}/></a>}
        </div>
      </section>}

      {project.problem && <section className="grid gap-8 border-b border-black/15 py-16 md:grid-cols-[.35fr_1fr]"><p className="eyebrow text-accent">The problem</p><p className="max-w-4xl text-2xl font-medium leading-snug tracking-[-.025em] sm:text-3xl">{project.problem}</p></section>}

      <section className="grid gap-12 py-16 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <p className="eyebrow text-accent">What the system does</p>
          <h2 className="section-title mt-4">Capability with an operating model.</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">{project.capabilities.map((capability) => <div key={capability} className="flex gap-3 rounded-2xl border border-black/10 bg-white/60 p-5"><Check size={16} className="mt-0.5 shrink-0 text-accent"/><p className="text-sm leading-relaxed text-muted">{capability}</p></div>)}</div>
        </div>
        <aside className="lg:border-l lg:border-black/15 lg:pl-10">
          <p className="eyebrow text-muted">Technology</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.techStack.map((tech) => <span key={tech} className="rounded-full border border-black/15 px-3 py-2 text-xs font-medium">{tech}</span>)}</div>
          {project.links && <div className="mt-10 space-y-3">{project.links.website && <a href={project.links.website} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background">Visit website <ExternalLink size={15}/></a>}{project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">Source code <Github size={15}/></a>}</div>}
        </aside>
      </section>

      {project.architecture && <section className="rounded-[2rem] bg-[#dfe4ff] p-7 sm:p-10"><div className="grid gap-10 lg:grid-cols-[.5fr_1fr]"><div><p className="eyebrow text-accent">Architecture</p><h2 className="mt-4 text-4xl font-semibold leading-none tracking-[-.05em]">How it fits together.</h2></div><div className="space-y-3">{project.architecture.map((item, index) => <div key={item} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl bg-white/70 p-5"><span className="font-mono text-xs text-accent">0{index + 1}</span><p className="text-sm leading-relaxed">{item}</p></div>)}</div></div></section>}

      {project.decisions && <section className="py-16"><p className="eyebrow text-accent">Key decisions</p><div className="mt-8 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-3">{project.decisions.map((decision, index) => <article key={decision.title} className="bg-white p-7"><span className="font-mono text-xs text-accent">0{index + 1}</span><h3 className="mt-10 text-xl font-semibold tracking-[-.03em]">{decision.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{decision.detail}</p></article>)}</div></section>}

      <Link href="/projects" className="group flex items-center justify-between border-t border-black/15 py-10 text-3xl font-semibold tracking-[-.04em] sm:text-5xl">Explore another system <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></Link>
    </div>
  </main>;
}
