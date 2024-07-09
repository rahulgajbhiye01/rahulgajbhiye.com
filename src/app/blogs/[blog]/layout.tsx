export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 md:p-0">{children}</div>;
}
