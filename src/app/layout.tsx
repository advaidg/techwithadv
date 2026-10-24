import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Advaid Gireesan — AI Architect & Forward-Deployed Engineer",
    template: "%s | techwithadv",
  },
  description:
    "AI architect and hands-on engineering leader specializing in agentic AI, RAG, MCP, intelligent document processing, enterprise modernization, and cloud-native platforms.",
  metadataBase: new URL("https://techwithadv.com"),
  openGraph: {
    title: "Advaid Gireesan — AI Architect & Forward-Deployed Engineer",
    description:
      "Enterprise AI systems from discovery and proof of value to production.",
    url: "https://techwithadv.com",
    siteName: "techwithadv",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "Advaid Gireesan — AI Architect and Forward-Deployed Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advaid Gireesan — AI Architect & Forward-Deployed Engineer",
    description:
      "Enterprise AI systems from discovery and proof of value to production.",
    images: ["/images/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
