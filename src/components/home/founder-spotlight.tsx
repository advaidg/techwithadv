"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

export function FounderSpotlight() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-surface to-accent-blue/5 p-8 sm:p-10"
      >
        {/* Accent gradient top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
          {/* Logo */}
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border bg-white p-2 sm:h-24 sm:w-24">
            <Image
              src="/images/projects/niotap.png"
              alt="NioTap"
              fill
              className="object-contain p-1"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <Badge variant="accent">Founder</Badge>
              <Badge variant="outline">Live Product</Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              NioTap — AI Email Support Platform
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Co-founded a multi-tenant AI SaaS platform that drafts email
              responses using mailbox-specific knowledge bases. Built with RAG
              pipelines, role-based access, citation tracking, and production-grade
              AI workflow orchestration.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://niotap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-blue px-5 py-2.5 text-sm font-medium text-background transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                Visit niotap.com
                <ExternalLink
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <Link
                href="/projects/niotap"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition-all hover:border-accent/30 hover:text-foreground"
              >
                View Project Details
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
