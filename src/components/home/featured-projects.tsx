"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const work = [
  {
    slug: "idp-platform", no: "01", title: "Grounded IDP", type: "Document intelligence",
    copy: "Template-free classification and extraction where every accepted value must carry verifiable source evidence, identity, and an audit trail.",
    tags: ["Grounding", "Human review", "Multi-tenant", "Audit"], image: "/images/projects/live/grounded-idp.png",
  },
  {
    slug: "orepli", no: "02", title: "Orepli", type: "Grounded customer support",
    copy: "One evidence-backed knowledge spine for automated email and embedded customer chat, with strict refusal and escalation behavior.",
    tags: ["RAG", "Email agent", "Chat widget", "Audit"], image: "/images/projects/live/orepli.png",
  },
  {
    slug: "feegoat", no: "03", title: "FeeGoat", type: "Payments SaaS",
    copy: "A region-aware invoicing, reminder, and reconciliation product exploring Zelle and UPI-first collection workflows.",
    tags: ["Payments", "Reconciliation", "Dunning", "Multi-tenant"], image: "/images/projects/live/feegoat.png",
  },
  {
    slug: "ledgerai", no: "04", title: "LedgerAI", type: "AI-native finance product",
    copy: "An AI bookkeeper built on a real double-entry accounting engine, with guarded automation, reconciliation, and a review-first experience.",
    tags: ["Double entry", "Assistant", "Reconciliation", "PWA"], image: "/images/projects/live/ledgerai.png",
  },
];

export function FeaturedProjects() {
  return <section className="pb-24 sm:pb-32">
    <div className="shell">
      <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end">
        <div>
          <p className="eyebrow text-accent">Independent SaaS portfolio</p>
          <h2 className="section-title mt-4">Built to learn the whole loop.</h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-muted md:justify-self-end">Working product surfaces shaped by a long-running interest in SaaS: product framing, multi-tenant architecture, AI guardrails, deployment, and operations. Pricing may appear in-product, but it is not currently enforced.</p>
      </div>

      <div className="space-y-4">
        {work.map((item, i) => <motion.article key={item.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .55, delay: i * .05 }}>
          <Link href={`/projects/${item.slug}`} className="group grid overflow-hidden rounded-[2rem] border border-black/10 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(18,19,21,.10)] md:grid-cols-[.58fr_1fr_auto]">
            <div className="relative min-h-52 overflow-hidden bg-black">
              <Image src={item.image} alt={`${item.title} live product interface`} fill sizes="(max-width: 768px) 100vw, 38vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"/>
              <span className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"/>
              <p className="absolute bottom-5 left-5 font-mono text-xs font-semibold text-white/80">{item.no} · LIVE PRODUCT</p>
            </div>
            <div className="p-6 sm:p-8">
              <p className="eyebrow text-muted">{item.type}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-.045em]">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-medium">{tag}</span>)}</div>
            </div>
            <div className="flex items-end justify-end p-6"><span className="grid h-12 w-12 place-items-center rounded-full border border-black/15 transition-colors group-hover:bg-foreground group-hover:text-background"><ArrowUpRight size={18}/></span></div>
          </Link>
        </motion.article>)}
      </div>

      <Link href="/projects" className="mt-8 inline-flex items-center gap-3 border-b border-black pb-1 text-sm font-semibold">View the complete project archive <ArrowUpRight size={15}/></Link>
    </div>
  </section>;
}
