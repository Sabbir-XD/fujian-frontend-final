import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Fujian Accessories CO. Ltd.",
  description:
    "Discover Fujian Accessories CO. Ltd.'s manufacturing capabilities, quality control process, production capacity, and advanced machinery for garment accessories.",
  keywords: [
    "garment accessories manufacturing",
    "buttons factory",
    "zippers manufacturing",
    "labels production",
    "OEM garment accessories",
    "Fujian Accessories manufacturing",
  ],
  openGraph: {
    title: "Manufacturing Capabilities | Fujian Accessories CO. Ltd.",
    description:
      "Advanced manufacturing, strict quality control, and global export-ready production for garment accessories.",
    url: "https://faclbangladesh.com/manufacturing",
    siteName: "Fujian Accessories CO. Ltd.",
    images: [
      {
        url: "/manufacturing/manufacturing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Garment Accessories Manufacturing",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://faclbangladesh.com/manufacturing",
  },
};

export default function ManufacturingPage() {
  return (
    <section className="flex flex-col lg:gap-20 px-4 md:px-6">
      <div>
        {/*  HERO  */}
        {/* <section className="pt-10 px-4">
          <div className="mx-auto max-w-4xl text-center space-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
              Manufacturing Fujian Accessories Co. Ltd.
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Manufacturing Capabilities
            </h1>
          </div>
        </section> */}
        <ManufacturingClient />
      </div>
    </section>
  );
}
