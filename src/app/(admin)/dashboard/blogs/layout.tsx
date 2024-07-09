import type { Metadata } from "next";
import { BlogProvider } from "@/contexts/blogContext";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlogProvider>
      <section className="flex w-full flex-col items-center py-8">
        {children}
      </section>
    </BlogProvider>
  );
}
