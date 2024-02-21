import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function projectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
