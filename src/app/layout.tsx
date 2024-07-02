import type { Metadata } from "next";
import type { Viewport } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/contexts/theme-provider";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://${process.env.VERCEL_URL}"),
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description: "Portfolio Website of Rahul Gajbhiye",
  keywords: [],
  authors: [
    {
      name: "Rahul Gajbhiye",
      url: "https://dev.rahulgajbhiye.com",
    },
  ],
  creator: "Rahul Gajbhiye",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      // {
      //   url: siteConfig.ogImage,
      //   width: 1200,
      //   height: 630,
      //   alt: siteConfig.name,
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter.href.split("/").pop(),
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-screen flex-col overflow-x-hidden overflow-y-scroll scrollbar-track-primary scrollbar-thumb-background md:scrollbar-thin xl:snap-y xl:snap-mandatory">
            <div className="bg-background text-foreground">
              <Navbar />
              {children}
            </div>
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
