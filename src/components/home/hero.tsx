"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Code2, Landmark, MapPin, UsersRound } from "lucide-react";

const leadership = [
  { icon: Code2, label: "Platform SME", title: "From code to cluster", copy: "Debugging application code, CI/CD, deployment configuration, runtime behavior, and OpenShift integration as one problem space." },
  { icon: UsersRound, label: "COE leadership", title: "Enable 300+ practitioners", copy: "Led Capgemini's OpenShift Container Platform COE, resolving delivery blockers and scaling DevOps patterns across a large engineering community." },
  { icon: Landmark, label: "Current focus", title: "Enterprise payments", copy: "Technical lead and senior developer laying engineering foundations, delivery patterns, and visibility for an enterprise payments platform." },
  { icon: Boxes, label: "Delivery scale", title: "Lead across teams", copy: "Worked across delivery groups of 30+ people while directly guiding teams up to 15 through platform and application modernization." },
];
export function Hero() {
  return <section className="relative overflow-hidden pt-24 sm:pt-28">
    <div className="shell">
      <div className="flex items-center justify-between border-b border-black/15 py-4"><p className="eyebrow">AI Architect · Forward-Deployed Engineer</p><p className="hidden items-center gap-2 text-xs text-muted sm:flex"><MapPin size={13} /> Chicago, Illinois</p></div>
      <div className="grid gap-10 py-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end lg:py-16">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-2 text-sm font-medium"><span className="h-2 w-2 rounded-full bg-[#4daf72] shadow-[0_0_0_5px_rgba(77,175,114,.12)]" /> Open to select AI architecture roles</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.22,1,0.36,1] }} className="display max-w-5xl">I turn AI ambition into <span className="text-accent">working systems.</span></motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }} className="mt-8 grid max-w-4xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">I design, build, and lead enterprise AI—from discovery and proof of value to production. Agentic systems, RAG, MCP, and the cloud platforms beneath them.</p>
            <Link href="/projects" className="group inline-flex items-center gap-3 text-sm font-semibold">Explore the work <span className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:translate-x-1"><ArrowRight size={17} /></span></Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-[#dbe0fb]">
            <div className="absolute inset-0 paper-grid opacity-70" />
            <Image src="/images/Headshot.png" alt="Advaid Gireesan" fill priority className="object-contain object-bottom" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between"><p className="text-sm font-semibold">Advaid Gireesan</p><span className="rounded-full bg-[#d7ff52] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">6+ years</span></div>
              <p className="mt-1 text-xs text-muted">Architecture close to the code.</p>
            </div>
          </div>
          <div className="absolute -right-3 top-6 rounded-2xl bg-foreground px-4 py-3 text-background shadow-xl sm:-right-8"><p className="eyebrow text-white/50">Currently</p><p className="mt-1 text-sm font-semibold">Senior Consultant</p></div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-6 text-background sm:p-8 lg:p-10">
        <div className="grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div><p className="eyebrow text-[#d7ff52]">What I actually do</p><h2 className="mt-4 text-3xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-5xl">Stay with the problem across every layer.</h2></div>
          <p className="max-w-2xl text-base leading-relaxed text-white/55">I move between application code, platform engineering, architecture, delivery leadership, and enablement. The value is not a diagram—it is removing the blocker and leaving the system and team stronger.</p>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-2">{leadership.map((item, index) => <article key={item.title} className="bg-[#1c1d20] p-6 sm:p-7"><div className="flex items-center justify-between"><item.icon size={20} className="text-[#d7ff52]"/><span className="font-mono text-[10px] text-white/25">0{index + 1}</span></div><p className="eyebrow mt-10 text-white/35">{item.label}</p><h3 className="mt-2 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-white/50">{item.copy}</p></article>)}</div>
      </div>
    </div>
  </section>;
}
