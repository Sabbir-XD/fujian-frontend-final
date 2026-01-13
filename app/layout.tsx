import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";
import FloatingContact from "@/shared/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://faclbangladesh.com"),
  title: {
    default: "Fujian Accessories CO. Ltd. | Garment Accessories Manufacturer",
    template: "%s | Fujian Accessories CO. Ltd.",
  },
  description:
    "Fujian Accessories CO. Ltd. is a professional garment accessories manufacturer supplying buttons, zippers, labels, and custom accessories for global fashion brands.",
  keywords: [
    "Fujian Accessories",
    "garment accessories manufacturer",
    "buttons supplier",
    "zippers manufacturer",
    "custom clothing accessories",
    "China accessories factory",
    "faclbangladesh",
    "faclbangla",
    "faclbangladesh.com",
  ],
  alternates: {
    canonical: "https://faclbangladesh.com",
  },
  openGraph: {
    title: "Fujian Accessories CO. Ltd.",
    description:
      "Professional garment accessories manufacturer for global fashion brands.",
    url: "https://faclbangladesh.com",
    siteName: "Fujian Accessories CO. Ltd.",
    images: [
      {
        url: "/fujian-og.png",
        width: 1200,
        height: 630,
        alt: "Fujian Accessories CO. Ltd.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fujian Accessories CO. Ltd.",
    description:
      "Garment accessories manufacturer supplying buttons, zippers, labels, and custom accessories worldwide.",
    images: ["/fujian-og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Fujian Accessories CO. Ltd.",
              url: "https://faclbangladesh.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://faclbangladesh.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              hasPart: [
                {
                  "@type": "SiteNavigationElement",
                  name: "Home",
                  url: "https://faclbangladesh.com",
                  description: "Garment accessories manufacturer homepage",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Products",
                  url: "https://faclbangladesh.com/products",
                  description:
                    "Buttons, zippers, labels, and custom accessories",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Manufacturing",
                  url: "https://faclbangladesh.com/manufacturing",
                  description:
                    "Production facilities and manufacturing process",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Quality",
                  url: "https://faclbangladesh.com/quality",
                  description: "Quality assurance and certifications",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "About",
                  url: "https://faclbangladesh.com/about",
                  description: "Company profile and business overview",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Contact",
                  url: "https://faclbangladesh.com/contact",
                  description: "Contact Fujian Accessories CO. Ltd.",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <FloatingContact />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
