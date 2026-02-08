"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0" />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent-blue/5 blur-3xl" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-8"
        >
          <div className="headshot-glow relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-accent/20 bg-surface sm:h-36 sm:w-36">
            <Image
              src="/images/Headshot.png"
              alt="Advaid Gireesan"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <p className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-accent">
            Applied AI &amp; Platform Engineer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Building AI Systems{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text-animated">That Work</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          I design and build production-grade AI systems — from agentic
          workflows and RAG pipelines to intelligent document processing — with
          a focus on reliability, cost-awareness, and human-centered design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-blue px-7 py-3 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/30 hover:bg-accent/5"
          >
            <FileText size={16} />
            Read Articles
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          className="mx-auto mt-16 flex max-w-md flex-wrap items-center justify-center gap-8 border-t border-border/50 pt-8 sm:gap-12"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">9+</p>
            <p className="mt-1 text-xs text-muted">AI Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">5+</p>
            <p className="mt-1 text-xs text-muted">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">CKAD</p>
            <p className="mt-1 text-xs text-muted">Certified</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
