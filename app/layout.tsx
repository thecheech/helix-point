import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HelixPoint - Seamless Digital Credit Management",
  description: "Power your platform with instant, secure credit purchases. Simple API integration for SaaS, digital goods, and online tools. HelixPoint LLC, Wyoming.",
  keywords: ["digital credits", "prepaid credits", "SaaS payments", "credit management", "API integration"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

