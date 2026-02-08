import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Skills } from "@/components/about/skills";
import { Experience } from "@/components/about/experience";
import { Philosophy } from "@/components/about/philosophy";
import { Award, GraduationCap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Advaid Gireesan — Applied AI & Platform Engineer building production-grade AI systems.",
};

const certifications = [
  "CKAD – Certified Kubernetes Application Developer",
  "Kofax RPA 10.4 Essentials",
  "Kofax TotalAgility 7.9",
  "Kofax TotalAgility 7.8 Cognitive Capture",
  "Kofax TotalAgility 7.7 Essentials",
];

const awards = [
  "Excellence in Delivering Complex Engagements",
  "Always Striving, Never Settling",
  "Customer Delight Award",
  "Innovation Award",
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <Section className="py-0 pb-16">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-border bg-surface sm:h-28 sm:w-28">
            <Image
              src="/images/Headshot.png"
              alt="Advaid Gireesan"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              About
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advaid Gireesan
            </h1>
            <p className="mt-1 text-lg text-muted">
              Applied AI &amp; Platform Engineer
            </p>
          </div>
        </div>

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            I&apos;m a senior software engineer with a strong foundation in
            backend and platform engineering (Java, cloud-native systems,
            Kubernetes/OpenShift), now focused on building applied AI and GenAI
            systems that work reliably in real-world environments.
          </p>
          <p>
            My work is centered around AI systems engineering — not research or
            demos — integrating LLMs, retrieval-augmented generation (RAG),
            agentic workflows, and document intelligence into scalable platforms
            with attention to security, cost, observability, and human-in-the-loop
            design.
          </p>
          <p>
            I build production-grade AI systems — not demos — focused on
            Applied AI, GenAI platforms, and agentic workflows. My work spans
            multi-tenant AI SaaS platforms, GenAI content systems, document
            intelligence (IDP), voice-enabled operations agents, and
            analytics-focused AI assistants.
          </p>
          <p>
            I am a founding member at NioTap, an AI email support platform, and
            currently work as a Senior Consultant at Capgemini, where I
            contribute to internal AI accelerators, GenAI prototypes, and
            platform capabilities.
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <Skills />
      </Section>

      {/* Experience */}
      <Section>
        <Experience />
      </Section>

      {/* Education + Certifications + Awards grid */}
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Education */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <GraduationCap size={20} className="text-accent" />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Education
            </h3>
            <div>
              <p className="text-sm font-medium text-foreground">
                Bachelor of Technology (B.Tech)
              </p>
              <p className="text-sm text-muted">Mechanical Engineering</p>
              <p className="mt-1 text-xs text-muted">
                TKM College of Engineering, Kollam
              </p>
              <p className="text-xs text-muted">2016 – 2020</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <ShieldCheck size={20} className="text-accent" />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Award size={20} className="text-accent" />
            </div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Honors &amp; Awards
            </h3>
            <ul className="space-y-2">
              {awards.map((award) => (
                <li key={award} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <Philosophy />
      </Section>
    </div>
  );
}
