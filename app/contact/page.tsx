import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Fujian Accessories CO. Ltd.",
  description:
    "Contact Fujian Accessories CO. Ltd. for garment accessories manufacturing, OEM services, quotations, and export inquiries.",
  keywords: [
    "contact garment accessories manufacturer",
    "Fujian Accessories contact",
    "garment accessories factory China",
    "OEM garment accessories supplier",
  ],
  openGraph: {
    title: "Contact Fujian Accessories CO. Ltd.",
    description:
      "Get in touch with Fujian Accessories CO. Ltd. for factory-direct garment accessories manufacturing and global export.",
    url: "https://faclbangladesh.com/contact",
    siteName: "Fujian Accessories CO. Ltd.",
    type: "website",
  },
  alternates: {
    canonical: "https://faclbangladesh.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <section className="w-full">
      <div>
        {/* HEADER */}
        <section className="mx-auto max-w-3xl text-center space-y-4 mt-5 mb-10">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
           
            Contact Fujian Accessories Co. Ltd.
          </span> */}

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in Touch 
          </h1>

          <p className="text-gray-600">
            OEM & export-ready garment accessories manufacturer.
          </p>
        </section>
        <ContactPageClient />
      </div>
    </section>
  );
}
