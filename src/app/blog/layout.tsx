import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function blogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
