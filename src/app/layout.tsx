import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
    default: "Advaid Gireesan — Applied AI & Platform Engineer",
    template: "%s | techwithadv",
  },
  description:
    "Building production-grade AI systems at the intersection of cloud platforms, backend engineering, and GenAI. Portfolio, projects, and technical articles by Advaid Gireesan.",
  metadataBase: new URL("https://techwithadv.com"),
  openGraph: {
    title: "Advaid Gireesan — Applied AI & Platform Engineer",
    description:
      "Building production-grade AI systems at the intersection of cloud platforms, backend engineering, and GenAI.",
    url: "https://techwithadv.com",
    siteName: "techwithadv",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advaid Gireesan — Applied AI & Platform Engineer",
    description:
      "Building production-grade AI systems at the intersection of cloud platforms, backend engineering, and GenAI.",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
