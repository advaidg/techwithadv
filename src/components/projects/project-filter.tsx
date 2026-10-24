"use client";
import { cn } from "@/lib/utils";
import { type ProjectCategory, categoryLabels } from "@/data/projects";
const categories:(ProjectCategory|"all")[]=["all","product","agentic-ai","rag","document-intelligence","platform"];
export function ProjectFilter({active,onChange}:{active:ProjectCategory|"all";onChange:(category:ProjectCategory|"all")=>void}){return <div className="flex flex-wrap gap-2">{categories.map(cat=><button key={cat} onClick={()=>onChange(cat)} className={cn("rounded-full border px-4 py-2 text-xs font-semibold transition-all",active===cat?"border-foreground bg-foreground text-background":"border-black/15 bg-white/40 text-muted hover:border-black/40 hover:text-foreground")}>{cat==="all"?"All systems":categoryLabels[cat]}</button>)}</div>}
