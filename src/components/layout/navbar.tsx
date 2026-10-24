"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [{ href: "/projects", label: "Work" }, { href: "/about", label: "About" }, { href: "/blog", label: "Notes" }];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className={cn("mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-5", scrolled || open ? "border-black/10 bg-[#f4f3ef]/90 shadow-[0_8px_30px_rgba(18,19,21,.08)] backdrop-blur-xl" : "border-transparent bg-transparent")}>
        <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3" aria-label="Advaid Gireesan, home"><span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-[10px] font-bold tracking-tight text-background">AG</span><span className="hidden text-sm font-semibold tracking-[-.02em] sm:block">Advaid Gireesan</span></Link>
        <div className="hidden items-center gap-1 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className={cn("rounded-full px-4 py-2 text-sm transition-colors", pathname.startsWith(link.href) ? "bg-foreground text-background" : "text-muted hover:bg-black/[.05] hover:text-foreground")}>{link.label}</Link>)}</div>
        <div className="hidden items-center gap-2 md:flex"><a href="/resume/Advaid_Gireesan_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-muted hover:text-foreground"><ArrowDownToLine size={14} /> Résumé</a><a href="mailto:advaidg@gmail.com?subject=Let%27s%20build%20something" className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5">Start a conversation</a></div>
        <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background md:hidden" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={17} /> : <Menu size={17} />}</button>
      </nav>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: .98 }} className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#f4f3ef]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-2xl px-5 py-4 text-2xl font-semibold tracking-tight hover:bg-white">{link.label}</Link>)}<div className="mt-2 grid grid-cols-2 gap-2 border-t border-black/10 pt-3"><a href="/resume/Advaid_Gireesan_Resume.pdf" download className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold">Résumé</a><a href="mailto:advaidg@gmail.com" className="rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white">Contact</a></div></motion.div>}</AnimatePresence>
    </header>
  );
}
