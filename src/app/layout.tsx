import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blake Pfaff - Frontend Engineer",
  description: "Portfolio of Blake Pfaff, a passionate frontend engineer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Blake Pfaff", "Frontend Engineer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Blake Pfaff" }],
  creator: "Blake Pfaff",
  openGraph: {
    title: "Blake Pfaff - Frontend Engineer",
    description: "Portfolio of Blake Pfaff, a passionate frontend engineer specializing in React, Next.js, and modern web technologies.",
    url: "https://blakepfaff.dev",
    siteName: "Blake Pfaff Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blake Pfaff - Frontend Engineer",
    description: "Portfolio of Blake Pfaff, a passionate frontend engineer specializing in React, Next.js, and modern web technologies.",
    creator: "@blakepfaff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
