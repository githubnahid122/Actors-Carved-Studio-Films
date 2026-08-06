import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import { SITE } from "@/lib/constants";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Production House, Casting Desk & Acting Academy`,
    template: `%s — ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "casting desk",
    "acting academy",
    "production house",
    "actor registration",
    "casting call India",
    "acting classes",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Production House, Casting Desk & Acting Academy`,
    description: SITE.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Production House, Casting Desk & Acting Academy`,
    description: SITE.description,
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.line1,
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  sameAs: Object.values(SITE.social),
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased dark`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
