import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaMarkup from "@/components/SchemaMarkup";
import { AGENCY_CONFIG } from "@/config/agency";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondthetimeline.com"),
  title: {
    default: `${AGENCY_CONFIG.name} | ${AGENCY_CONFIG.tagline}`,
    template: `%s | ${AGENCY_CONFIG.name}`,
  },
  description: AGENCY_CONFIG.description,
  keywords: [
    "Website Development in Vizag",
    "Website Developers in Rajam",
    "Affordable SEO Services in Andhra Pradesh",
    "Student Web Developers India",
    "MERN Stack Developers Vizag",
    "Web Design Visakhapatnam",
    "E-Commerce Development Vijayawada",
    "College Website Developers AP",
    "AI Solutions India",
    "SaaS Developers Andhra Pradesh"
  ],
  authors: [{ name: "Beyond the Timeline Student Entrepreneurs" }],
  creator: "Beyond the Timeline Team",
  publisher: "Beyond the Timeline Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${AGENCY_CONFIG.name} | ${AGENCY_CONFIG.tagline}`,
    description: AGENCY_CONFIG.description,
    url: "https://beyondthetimeline.com",
    siteName: AGENCY_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${AGENCY_CONFIG.name} - Digital Success Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AGENCY_CONFIG.name} | ${AGENCY_CONFIG.tagline}`,
    description: AGENCY_CONFIG.description,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-placeholder-code-12345",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": AGENCY_CONFIG.name,
    "url": "https://beyondthetimeline.com",
    "logo": "https://beyondthetimeline.com/logo.png",
    "description": AGENCY_CONFIG.description,
    "telephone": AGENCY_CONFIG.phone,
    "email": AGENCY_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GMRIT Campus, Rajam",
      "addressLocality": "Rajam",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "532127",
      "addressCountry": "IN"
    },
    "sameAs": Object.values(AGENCY_CONFIG.socials)
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${inter.variable} h-full`}>
      <head>
        <SchemaMarkup schema={organizationSchema} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground transition-colors duration-300">
        <Providers>
          <Header />
          <Breadcrumbs />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  );
}
