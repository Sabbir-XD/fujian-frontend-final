import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Fujian Accessories CO. Ltd.",
  description:
    "Learn about Fujian Accessories CO. Ltd., a professional garment accessories manufacturer supplying labels, elastics, tapes, patches, and packaging solutions worldwide.",
  keywords: [
    "Fujian Accessories",
    "garment accessories manufacturer",
    "label manufacturer",
    "elastic factory",
    "apparel trims supplier",
  ],
  openGraph: {
    title: "About Fujian Accessories CO. Ltd.",
    description:
      "Professional garment accessories manufacturer with factory-direct production and global export experience.",
    url: "https://faclbangladesh.com/about",
    siteName: "Fujian Accessories CO. Ltd.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <section className="w-full">
      <div>
        {/*  HERO  */}
        <section className="pt-10 pb-20 px-4">
          <div className="mx-auto max-w-4xl text-center space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
              About Fujian Accessories Co. Ltd.
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              About Us
            </h1>
          </div>
        </section>
        <AboutPageClient />
      </div>
    </section>
  );
}
