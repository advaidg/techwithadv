"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilter } from "@/components/projects/project-filter";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const filtered = filter === "all" ? projects : projects.filter((project) => project.category === filter);
  return <main className="pb-24 pt-28 sm:pt-36">
    <div className="shell">
      <div className="grid gap-10 border-b border-black/15 pb-12 lg:grid-cols-[1fr_.65fr] lg:items-end">
        <div><p className="eyebrow text-accent">System archive · {projects.length} builds</p><h1 className="display mt-5 max-w-5xl">Work that carries its own weight.</h1></div>
        <div className="max-w-xl">
          <p className="text-lg leading-relaxed text-muted">Independent SaaS products, production-oriented platforms, AI accelerators, and detailed case studies—grounded in the implementation, not just the pitch.</p>
          <p className="mt-5 rounded-2xl border border-black/10 bg-white/65 p-4 text-sm leading-relaxed text-muted"><span className="font-semibold text-foreground">A note on the SaaS work:</span> these are working products built from long-running product curiosity. Some surfaces show plans or pricing concepts, but public pricing is not currently enforced.</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted">Filter by capability</p><ProjectFilter active={filter} onChange={setFilter}/></div>
      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => <motion.div key={project.slug} layout initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.97}}><ProjectCard project={project} index={index}/></motion.div>)}
        </motion.div>
      </AnimatePresence>
    </div>
  </main>;
}
