import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shermel Nepth R. Vital | Full-Stack .NET Developer",
  description:
    "Junior Full-Stack .NET Developer specializing in C#, ASP.NET Core, React, and enterprise web applications. Based in Pampanga, Philippines.",
  keywords: [
    "Shermel Vital",
    ".NET Developer",
    "Full-Stack Developer",
    "ASP.NET Core",
    "React",
    "Philippines",
  ],
  authors: [{ name: "Shermel Nepth R. Vital" }],
  openGraph: {
    title: "Shermel Nepth R. Vital | Full-Stack .NET Developer",
    description:
      "Building enterprise-grade software with precision and edge.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
