import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3002/"),
  title: "Tyler Love - Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer & AI Engineer specializing in creating innovative solutions that bridge the gap between human interaction and artificial intelligence.",
  keywords: [
    "Tyler Love",
    "Full Stack Developer",
    "AI Engineer",
    "Portfolio",
    "Developer Portfolio",
    "Next.js",
    "React",
    "Artificial Intelligence",
  ],
  openGraph: {
    title: "Tyler Love - Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer specializing in creating innovative solutions that bridge the gap between human interaction and artificial intelligence.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Tyler Love Portfolio",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
