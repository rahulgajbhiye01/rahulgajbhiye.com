import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description: "Portfolio Website of Rahul Gajbhiye",
};

import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/toaster";

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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-screen flex-col overflow-x-hidden overflow-y-scroll scrollbar-track-primary scrollbar-thumb-background md:scrollbar-thin xl:snap-y xl:snap-mandatory">
            <div className="bg-background text-foreground">
              <Nav />
              {children}
            </div>
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
