"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/animated-text";

interface ArticlePreview {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
}

export function LatestArticles({
  articles,
}: {
  articles: ArticlePreview[];
}) {
  if (articles.length === 0) {
    return (
      <Section>
        <SectionHeader
          title="Latest Articles"
          description="Technical writing on applied AI, system design, and engineering practices."
        />
        <div className="rounded-xl border border-border/50 bg-surface/50 p-12 text-center">
          <p className="text-muted">
            Articles coming soon. Stay tuned.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeader
        title="Latest Articles"
        description="Technical writing on applied AI, system design, and engineering practices."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {articles.slice(0, 3).map((article, i) => (
          <FadeIn key={article.slug} delay={i * 0.1}>
            <Link href={`/blog/${article.slug}`} className="block h-full">
              <GlowCard className="flex h-full flex-col" as="article">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar size={12} />
                    <time>{article.date}</time>
                    <span>&middot;</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-muted" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {article.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </GlowCard>
            </Link>
          </FadeIn>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          Read all articles &rarr;
        </Link>
      </div>
    </Section>
  );
}
