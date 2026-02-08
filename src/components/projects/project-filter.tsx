"use client";

import { cn } from "@/lib/utils";
import { type ProjectCategory, categoryLabels } from "@/data/projects";

const categories: (ProjectCategory | "all")[] = [
  "all",
  "agentic-ai",
  "rag",
  "document-intelligence",
  "genai",
  "platform",
];

export function ProjectFilter({
  active,
  onChange,
}: {
  active: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
}) {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-all",
            active === cat
              ? "bg-foreground text-background"
              : "border border-border text-muted hover:border-border-hover hover:text-foreground"
          )}
        >
          {cat === "all" ? "All" : categoryLabels[cat]}
        </button>
      ))}
    </div>
  );
}
