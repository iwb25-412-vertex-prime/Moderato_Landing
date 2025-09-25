import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://moderato.dev";
const titleDefault = "Moderato.dev — Content Moderation as a Service";
const descriptionDefault =
  "Moderato (CMaaS) provides a simple API to automatically moderate text and keep your platform safe and compliant.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Moderato",
  title: {
    default: titleDefault,
    template: "%s · Moderato.dev",
  },
  description: descriptionDefault,
  keywords: [
    "Moderato",
    "content moderation",
    "CMaaS",
    "moderation API",
    "text moderation",
    "trust and safety",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: titleDefault,
    description: descriptionDefault,
    siteName: "Moderato.dev",
    images: [
      {
        url: "/globe.svg",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: descriptionDefault,
    images: ["/globe.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Moderato",
              url: siteUrl,
              logo: `${siteUrl}/favicon.ico`,
              sameAs: [
                "https://iwb25-412-vertex-prime.github.io/Moderato_Doc/",
                "https://www.youtube.com/watch?si=-HZR1iYAgfCa0WpT&v=if3RSk4qULw&feature=youtu.be",
              ],
            }),
          }}
        />
        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Moderato.dev",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
