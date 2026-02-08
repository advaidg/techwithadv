import type { MDXComponents } from "mdx/types";
import { Badge } from "@/components/ui/badge";

function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip";
}) {
  const styles = {
    info: "border-accent/30 bg-accent/5",
    warning: "border-yellow-500/30 bg-yellow-500/5",
    tip: "border-green-500/30 bg-green-500/5",
  };

  return (
    <div
      className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}
    >
      {children}
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-10 mb-4 text-3xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-8 mb-3 text-2xl font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-6 mb-2 text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-4 leading-relaxed text-muted" {...props} />
  ),
  ul: (props) => (
    <ul className="my-4 ml-6 list-disc space-y-2 text-muted" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 ml-6 list-decimal space-y-2 text-muted" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent-hover hover:decoration-accent"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-border pl-4 italic text-muted"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm text-muted" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-border px-4 py-2 text-left font-semibold text-foreground"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-border/50 px-4 py-2" {...props} />
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-6 rounded-lg border border-border"
      alt={props.alt || ""}
      {...props}
    />
  ),
  Callout,
  Badge,
};
