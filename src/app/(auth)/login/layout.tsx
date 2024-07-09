import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-custom w-full scroll-mt-16 flex-col items-center py-8">
      {children}
    </section>
  );
}
