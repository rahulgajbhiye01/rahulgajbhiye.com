import type { Metadata } from "next";
import { BlogProvider } from "@/contexts/blogContext";
import Navbar from "@/components/pages/Dashboard/navbar";
import { AuthProvider } from "@/contexts/authContext";
export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <BlogProvider>
        <section className="flex w-full flex-col items-center gap-4 py-8">
          <Navbar />
          {children}
        </section>
      </BlogProvider>
    </AuthProvider>
  );
}
