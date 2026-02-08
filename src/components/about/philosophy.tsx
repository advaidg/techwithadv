"use client";

import { FadeIn } from "@/components/ui/animated-text";
import { Shield, Eye, DollarSign, Users } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Reliable",
    subtitle: "not just impressive",
    description:
      "AI systems should work consistently in production, not just in demos. I prioritize robustness, fallbacks, and retry strategies.",
  },
  {
    icon: Eye,
    title: "Explainable",
    subtitle: "not opaque",
    description:
      "Every AI output should be traceable. I build systems with citation tracking, audit logs, and transparent decision paths.",
  },
  {
    icon: DollarSign,
    title: "Cost-Aware",
    subtitle: "not wasteful",
    description:
      "Token usage, latency, and API costs are first-class concerns. I design systems that track and optimize AI spend.",
  },
  {
    icon: Users,
    title: "Human-Centered",
    subtitle: "not fully autonomous",
    description:
      "AI should augment teams, not replace judgment. I build human-in-the-loop workflows with review, escalation, and override capabilities.",
  },
];

export function Philosophy() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          How I Think About AI
        </h2>
        <p className="mt-3 text-base text-muted">
          My goal is to build AI that augments teams, fits into existing
          platforms, and survives real operational constraints.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {principles.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <p.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {p.title},{" "}
                <span className="font-normal text-muted">{p.subtitle}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
