import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-foreground">404</p>
      <p className="mt-4 text-lg text-muted">Page not found.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface"
      >
        Go home
      </Link>
    </div>
  );
}
