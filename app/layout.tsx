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
  title: "HazardZero Technology Ltd. | Disaster Intelligence & Emergency Technology",
  description:
    "HazardZero Technology Ltd. builds life-saving disaster intelligence and emergency technology. Our flagship product R!SEWATCH is a solar-powered, offline-first flood early warning system manufactured in Nigeria.",
  keywords: [
    "HazardZero",
    "disaster intelligence",
    "emergency technology",
    "flood warning",
    "early warning system",
    "Nigeria",
    "solar powered",
    "IoT",
    "disaster preparedness",
    "R!SEWATCH",
  ],
  openGraph: {
    title: "HazardZero Technology Ltd. | Disaster Intelligence & Emergency Technology",
    description:
      "Building life-saving disaster intelligence and emergency technology for Africa's most vulnerable communities.",
    type: "website",
    images: [
      {
        url: "/HAZARDZERO%20LOGO.png",
        width: 1200,
        height: 1200,
        alt: "HazardZero logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/HAZARDZERO%20LOGO.png"],
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
