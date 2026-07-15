import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://akeboss-tech.github.io/palantir-operational-ai-hub/"),
  title: "Operational AI Field Index",
  description: "An evidence-labeled research interface for 100 Palantir videos, the operational AI stack, organizations, and a 32-source intelligence watchlist.",
  openGraph: { title: "Operational AI Field Index", description: "100 videos. 32 sources. Independent Terra reviews.", type: "website", images: [{ url: "og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Operational AI Field Index", description: "The system around the model is the product.", images: ["og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
