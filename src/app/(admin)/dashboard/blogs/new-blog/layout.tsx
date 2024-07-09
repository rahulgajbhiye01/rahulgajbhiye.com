export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return (
    <section className="flex w-full flex-col items-center py-8">
      {children}
    </section>
  );
}
