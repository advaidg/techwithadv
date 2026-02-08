import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/advaidg",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/advaid-g-cloud-platform-engineer",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:advaidg@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            techwithadv
          </Link>
          <p className="text-center text-xs text-muted md:text-left">
            Building production-grade AI systems.
          </p>
        </div>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label={link.label}
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border/30 py-6 text-center text-xs text-muted/60">
        &copy; {new Date().getFullYear()} Advaid Gireesan. All rights reserved.
      </div>
    </footer>
  );
}
