import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-custom flex w-full scroll-mt-16 flex-col items-center py-8">
      {children}
    </section>
  );
}
