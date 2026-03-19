import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ByteThreads. Tell me about your project and I'll get back to you within one business day.",
  alternates: {
    canonical: "https://bytethreadsllc.com/contact",
  },
  openGraph: {
    title: "Contact | ByteThreads",
    description:
      "Get in touch with ByteThreads. Tell me about your project and I'll get back to you within one business day.",
    url: "https://bytethreadsllc.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
