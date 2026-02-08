import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/blog-card";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on applied AI, system design, and engineering practices by Advaid Gireesan.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-20">
      <Section className="py-0 pb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 text-base text-muted">
          Technical writing on applied AI, system design, and engineering
          practices.
        </p>
      </Section>

      <Section className="py-0">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border/50 bg-surface/50 p-12 text-center">
            <p className="text-muted">
              Articles coming soon. Stay tuned.
            </p>
          </div>
        )}
      </Section>
    </div>
  );
}
