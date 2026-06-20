import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DevPassport — The Universal Reputation Network for Developers",
  description:
    "Connect your developer accounts, calculate your Developer Credit Score, and build a verified global reputation. The FICO Score for Software Engineers.",
  keywords: ["developer reputation", "coding score", "developer profile", "github score", "leetcode rank"],
  openGraph: {
    title: "DevPassport — The Universal Reputation Network for Developers",
    description: "The Credit Score for Developers. Connect. Verify. Rank.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
