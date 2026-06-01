import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.tagline}`,
  description: portfolio.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
