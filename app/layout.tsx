import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "R!SEWATCH | Offline Flood Early Warning System",
  description:
    "R!SEWATCH is a market-ready, solar-powered, offline-first flood early warning system manufactured in Nigeria. Saving lives through real-time water level monitoring and AI-powered rate-of-rise prediction.",
  keywords: [
    "flood warning",
    "early warning system",
    "Nigeria",
    "solar powered",
    "IoT",
    "disaster preparedness",
    "R!SEWATCH",
  ],
  openGraph: {
    title: "R!SEWATCH | Offline Flood Early Warning System",
    description:
      "Market-ready, solar-powered flood early warning system manufactured in Nigeria.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#001a45",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
