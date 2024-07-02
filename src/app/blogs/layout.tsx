import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Rahul Gajbhiye",
};

export default function blogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
