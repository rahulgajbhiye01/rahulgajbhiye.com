import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blogs | Rahul Gajbhiye",
    template: "%s | Blogs",
  },
};

export default function blogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
