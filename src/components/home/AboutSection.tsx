"use client";

import Image from "next/image";
import Link from "next/link";
import { Factory, ShieldCheck, Globe } from "lucide-react";
import React from "react";

/**
 * Content JSON (single source of truth)
 * Update text here without touching layout/design
 */
const aboutData = {
  badge: "About Fujian Accessories",
  title: "Trusted Garment Accessories Manufacturer & Supplier for RMG Industry",
  description:
    "We are a reliable garment accessories manufacturing company and global supplier supporting the Bangladesh ready-made garments (RMG) industry. We specialize in high-quality apparel accessories, delivering consistent production, strict quality assurance and on-time supply for export-oriented garment factories. From product development and sampling to bulk manufacturing, we help apparel brands and garment manufacturers in Bangladesh achieve efficiency, compliance, and cost competitiveness.",
  cta: {
    label: "More About Us",
    href: "/about",
  },
  features: [
    {
      icon: Factory,
      title: "Factory-Direct Garment Accessories Manufacturing",
      desc: "Vertically integrated manufacturing facilities ensuring fast turnaround, stable quality and competitive pricing for Bangladesh garment factories.",
    },
    {
      icon: ShieldCheck,
      title: "International Quality & Compliance Standards",
      desc: "Strict quality control systems covering raw materials, in-process inspections, and final checks to meet buyer, brand and compliance requirements.",
    },
    {
      icon: Globe,
      title: "Reliable Supply for Bangladesh Apparel Industry",
      desc: "Efficient export logistics and supply chain support for woven, knit, denim and sweater manufacturers across Bangladesh.",
    },
  ],
  images: {
    main: {
      src: "manufacturing/about-pic.jpg",
      alt: "Garment accessories manufacturing factory supplying Bangladesh apparel industry",
      title: "Advanced Garment Accessories Manufacturing",
      subtitle: "Quality-driven, scalable and export-ready production",
    },
    secondary: [
      {
        src: "manufacturing/quality-control.jpg",
        alt: "Garment accessories quality inspection for Bangladesh RMG factories",
        label: "Quality Control & Inspection",
      },
      {
        src: "manufacturing/production-process.jpeg",
        alt: "Garment accessories production line for apparel manufacturers",
        label: "Efficient Production Process",
      },
    ],
  },
};

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 items-center">
        {/* Content */}
        <div className="lg:col-span-2 space-y-3">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 text-xs font-medium text-[#00019A]">
            {aboutData.badge}
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            {aboutData.title}
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            {aboutData.description}
          </p>

          <div className="space-y-3 pt-2">
            {aboutData.features.map((item, i) => (
              <Feature
                key={i}
                icon={<item.icon />}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>

          <Link href={aboutData.cta.href} className="inline-block mt-5">
            <button className="w-full bg-[#00019A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              {aboutData.cta.label}
            </button>
          </Link>
        </div>

        {/* Images */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image */}
            <div className="col-span-2 row-span-2">
              <div className="relative h-100 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={aboutData.images.main.src}
                  alt={aboutData.images.main.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">
                    {aboutData.images.main.title}
                  </h3>
                  <p className="text-sm mt-1">
                    {aboutData.images.main.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Small Images */}
            {aboutData.images.secondary.map((img, i) => (
              <div
                key={i}
                className="relative h-60 rounded-2xl overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                  {img.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-[#00019A]">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="text-xs text-gray-600">{desc}</p>
    </div>
  </div>
);

export default AboutSection;
