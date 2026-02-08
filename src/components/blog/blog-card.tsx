"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/lib/mdx";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <GlowCard className="flex h-full flex-col" as="article">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted">
            <Calendar size={12} />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
          <ArrowUpRight size={14} className="text-muted" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {post.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {post.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </GlowCard>
    </Link>
  );
}
