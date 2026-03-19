import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { strings } from "@/utils/content";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const baseUrl = "https://bytethreadsllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: strings.site.title,
    template: "%s | ByteThreads",
  },
  description: strings.site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "ByteThreads",
    title: strings.site.title,
    description: strings.site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: strings.site.title,
    description: strings.site.description,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "ByteThreads LLC",
              url: baseUrl,
              description: strings.site.description,
              address: {
                "@type": "PostalAddress",
                addressRegion: "MN",
                addressCountry: "US",
              },
              email: "contact@bytethreadsllc.com",
              areaServed: "US",
              serviceType: [
                ".NET Development",
                "iOS App Development",
                "Full-Stack Web Development",
                "AI & Automation",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
