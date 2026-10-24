import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/blog-card";
export const metadata:Metadata={title:"Field Notes",description:"Writing by Advaid Gireesan on enterprise AI, system design, agentic architecture, RAG, and production engineering."};
export default function BlogPage(){const posts=getAllPosts();return <main className="pb-24 pt-28 sm:pt-36"><div className="shell"><section className="grid gap-10 border-b border-black/15 pb-14 lg:grid-cols-[1fr_.55fr] lg:items-end"><div><p className="eyebrow text-accent">Field notes</p><h1 className="display mt-5">Ideas, after contact with reality.</h1></div><p className="text-lg leading-relaxed text-muted">Notes on enterprise AI, architecture, developer tooling, and the decisions that turn prototypes into dependable systems.</p></section><section className="pt-8">{posts.map((post,index)=><BlogCard key={post.slug} post={post} index={index}/>)}</section></div></main>}
