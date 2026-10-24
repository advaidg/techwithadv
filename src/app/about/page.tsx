import type { Metadata } from "next";
import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Philosophy } from "@/components/about/philosophy";

export const metadata: Metadata = {
  title: "About",
  description: "Advaid Gireesan is an AI architect and hands-on engineering leader working across enterprise payments, agentic AI, OpenShift, modernization, and cloud platforms.",
};

export default function AboutPage() {
  return <main className="pb-24 pt-28 sm:pt-36">
    <div className="shell">
      <section className="grid gap-12 border-b border-black/15 pb-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <div>
          <p className="eyebrow text-accent">About · Advaid Gireesan</p>
          <h1 className="display mt-5">I stay close to the hard parts.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted">I like taking ambiguous enterprise problems apart, understanding the system deeply, designing the architecture, building the difficult pieces, and helping teams carry the solution into production.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 text-muted"><MapPin size={15}/>Greater Chicago Area</span>
            <a href="/resume/Advaid_Gireesan_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-semibold text-background"><Download size={15}/>Résumé</a>
          </div>
        </div>
        <div className="paper-grid relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.25rem] bg-[#dbe0fb]">
          <Image src="/images/Headshot.png" alt="Advaid Gireesan" fill priority className="object-contain object-bottom"/>
        </div>
      </section>

      <section className="grid gap-8 py-16 md:grid-cols-3">
        <p className="eyebrow text-accent">The short version</p>
        <div className="space-y-5 text-lg leading-relaxed md:col-span-2">
          <p>I’m a Senior Consultant at Capgemini with 6+ years across enterprise software engineering, cloud platforms, modernization, payments, and applied AI.</p>
          <p className="text-muted">My range is deliberate: I have led an OpenShift COE serving a 300+ practitioner community, acted as a hands-on platform SME for application teams, guided multi-team delivery groups of 30+ people, and now help lay the technical foundation for an enterprise payments platform. Alongside that work, I build full products across agent platforms, document intelligence, financial software, and vertical SaaS.</p>
        </div>
      </section>

      <section className="py-16"><Philosophy/></section>
      <section className="py-20"><Experience/></section>
      <section className="py-20"><Skills/></section>
      <section className="grid gap-6 border-t border-black/15 pt-12 md:grid-cols-3">
        <div><p className="eyebrow text-muted">Education</p><p className="mt-4 font-semibold">B.Tech, Mechanical Engineering</p><p className="mt-1 text-sm text-muted">TKM College of Engineering · 2020</p></div>
        <div><p className="eyebrow text-muted">Certification</p><p className="mt-4 font-semibold">Certified Kubernetes Application Developer</p><p className="mt-1 text-sm text-muted">CKAD</p></div>
        <div><p className="eyebrow text-muted">Recognition</p><p className="mt-4 font-semibold">Delivery, customer delight & innovation</p><p className="mt-1 text-sm text-muted">Multiple professional awards</p></div>
      </section>
    </div>
  </main>;
}
