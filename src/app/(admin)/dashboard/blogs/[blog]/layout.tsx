export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return <div className="px-4 md:p-0">{children}</div>;
}
