"use client";

import { memo } from "react";
import Image from "next/image";
import {
  Layers,
  CheckCircle,
  ShieldCheck,
  Truck,
  HeartPulse,
  ClipboardCheck,
  Award,
  Globe,
  Factory,
  BarChart,
} from "lucide-react";

/**
 * Manufacturing Page
 * Clean structure, professional tone, data-driven rendering
 */

const data = {
  hero: {
    tag: "Garment Accessories Manufacturer & Supplier",
    title: "Reliable Manufacturer & Supplier of Garment Accessories",
    description:
      "Fujian Accessories Co. Ltd. is a professional manufacturer and supplier of high-quality garment accessories, delivering consistent, scalable, and export-ready solutions for global apparel brands.",
    image: "/manufacturing/manufacturing.jpg",
    alt: "Garment accessories manufacturing facility",
  },

  productCategories: {
    title: "Our Garment Accessories Product Range",
    description:
      "We manufacture and supply a comprehensive range of garment accessories designed to meet international quality standards and buyer requirements.",
    items: [
      "Woven & Printed Labels",
      "Heat Transfer Prints",
      "Twill Tapes & Drawcords",
      "Elastic (Normal, Woven & Jacquard)",
      "Rubber, Silicone & Leather Patches",
      "Packaging & Gum Tapes",
    ],
  },

  manufacturingProcess: {
    title: "Manufacturing & Quality Process",
    steps: [
      {
        icon: Layers,
        title: "Material Selection",
        text: "Carefully sourced raw materials ensuring durability and compliance.",
      },
      {
        icon: CheckCircle,
        title: "Controlled Production",
        text: "Standardized production systems for consistent output.",
      },
      {
        icon: ShieldCheck,
        title: "Quality Assurance",
        text: "Multi-stage inspections aligned with international standards.",
      },
      {
        icon: Truck,
        title: "Packing & Export",
        text: "Export-grade packing with global logistics support.",
      },
    ],
  },

  compliance: {
    title: "Quality, Safety & Compliance",
    items: [
      {
        icon: HeartPulse,
        title: "Ethical Workplace",
        text: "Safe, ethical, and compliant working environment.",
      },
      {
        icon: ClipboardCheck,
        title: "Buyer Compliance",
        text: "Aligned with global buyer and brand audit requirements.",
      },
      {
        icon: Award,
        title: "Consistent Quality",
        text: "Strict quality management to prevent defects.",
      },
    ],
  },

  globalReach: {
    title: "Serving Global Apparel Brands",
    stats: [
      { icon: Globe, text: "Worldwide export capability" },
      { icon: ClipboardCheck, text: "OEM & ODM support" },
      { icon: Award, text: "Trusted long-term supplier" },
    ],
  },

  capacity: {
    title: "Production Capacity & Lead Time",
    description:
      "A scalable manufacturing setup supporting both small and large volume orders.",
    metrics: [
      "Flexible order quantities",
      "15–30 days lead time",
      "Global shipment support",
      "Full customization available",
    ],
    image:
      "/manufacturing/time-management.jpg",
    alt: "Garment accessories production workflow",
  },
};

function ManufacturingPage() {
  return (
    <div className="space-y-24 py-12">
      {/* Hero */}
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-5">
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            {data.hero.tag}
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {data.hero.title}
          </h1>
          <p className="max-w-xl text-gray-600">{data.hero.description}</p>
        </div>
        <Image
          src={data.hero.image}
          alt={data.hero.alt}
          width={700}
          height={500}
          priority
          className="h-80 w-full rounded-3xl object-cover shadow-lg lg:h-105"
        />
      </section>

      {/* Product Categories */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          {data.productCategories.title}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          {data.productCategories.description}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.productCategories.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-white px-5 py-4 text-sm font-medium text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          {data.manufacturingProcess.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.manufacturingProcess.steps.map((step, i) => (
            <div key={i} className="rounded-3xl border bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-[#00019A]">
                <step.icon />
              </div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          {data.compliance.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.compliance.items.map((item, i) => (
            <div key={i} className="rounded-3xl border bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-[#00019A]">
                <item.icon />
              </div>
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Reach */}
      <section className="rounded-3xl bg-blue-50 p-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          {data.globalReach.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {data.globalReach.stats.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#00019A]">
                <item.icon />
              </div>
              <p className="text-sm font-medium text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capacity */}
      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            {data.capacity.title}
          </h2>
          <p className="text-gray-600">{data.capacity.description}</p>
          <ul className="space-y-2 text-sm text-gray-700">
            {data.capacity.metrics.map((m, i) => (
              <li key={i} className="flex items-center gap-2">
                <BarChart className="h-4 w-4 text-[#00019A]" /> {m}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={data.capacity.image}
          alt={data.capacity.alt}
          width={600}
          height={400}
          className="h-80 w-full rounded-3xl object-cover shadow-lg"
        />
      </section>
    </div>
  );
}

export default memo(ManufacturingPage);
