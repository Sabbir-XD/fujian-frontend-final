"use client";

import { memo } from "react";
import Image from "next/image";
import {
  Factory,
  Globe,
  ShieldCheck,
  Award,
  Truck,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

/* ===================== JSON DATA ===================== */

const ABOUT_DATA = {
  overview: {
    title: "Premium Garment Accessories Manufacturer & Global Supplier",
    image: "/hero/about-banner.jpeg",
    description: [
      "We are a leading manufacturer and supplier of high-quality garment accessories, delivering innovative branding and trimming solutions to fashion brands worldwide.",
      "Our core product range includes woven labels, printed labels, offset printing with back boards, heat transfer prints, twill tapes, drawstrings, drawcords, elastic tapes, rubber and silicone patches, leather patches, and gum tapes. With advanced manufacturing facilities and strict quality control, we ensure consistent quality, competitive pricing, and on-time global delivery.",
    ],
    experience: "04+",
    stats: [
      { icon: Factory, value: "15K+", label: "Monthly Production Capacity" },
      { icon: Globe, value: "05+", label: "Countries Served" },
      { icon: ShieldCheck, value: "99.99%", label: "Quality Assurance" },
    ],
  },
  strengths: {
    title: "Our Core Strengths",
    subtitle: "Why Global Brands Choose Us",
    items: [
      {
        icon: Factory,
        title: "In-House Manufacturing",
        description:
          "State-of-the-art facilities for woven labels, printed labels, heat transfer prints, elastics, patches, and packaging accessories.",
      },
      {
        icon: Award,
        title: "Consistent Quality Control",
        description:
          "Strict inspection standards from raw materials to finished garment accessories.",
      },
      {
        icon: Users,
        title: "Skilled Production Team",
        description:
          "Experienced professionals specializing in garment trims, branding labels, and fashion accessories.",
      },
      {
        icon: ShieldCheck,
        title: "Compliance & Reliability",
        description:
          "Manufacturing processes aligned with international quality and safety standards.",
      },
      {
        icon: TrendingUp,
        title: "Scalable Production Capacity",
        description:
          "Flexible MOQs with the ability to handle both small orders and bulk production.",
      },
      {
        icon: Target,
        title: "Customized Branding Solutions",
        description:
          "Tailor-made woven labels, elastic tapes, drawstrings, patches, and printed accessories to match brand identity.",
      },
    ],
  },
  journey: {
    title: "Our Journey",
    subtitle: "Built on Quality, Trust, and Innovation",
    steps: [
      {
        icon: Users,
        title: "Company Established",
        text: "Founded with a mission to manufacture reliable and high-quality garment accessories for the apparel industry.",
      },
      {
        icon: Award,
        title: "Product Line Expansion",
        text: "Expanded into woven labels, printed labels, elastics, heat transfer printing, rubber & silicone patches, leather patches, and gum tapes.",
      },
      {
        icon: Truck,
        title: "Global Supply Network",
        text: "Successfully supplying garment accessories to international apparel brands, exporters, and manufacturers worldwide.",
      },
    ],
  },
};
/* ===================== PAGE ===================== */

function AboutPageClient() {
  const { overview, strengths, journey } = ABOUT_DATA;

  return (
    <main className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white">
      {/* ================= OVERVIEW ================= */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={overview.image}
                alt="Manufacturing facility"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#00019A] text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold">{overview.experience}</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {overview.title}
            </h2>

            {overview.description.map((text, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {text}
              </p>
            ))}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              {overview.stats.map((item, i) => (
                <StatCard
                  key={i}
                  icon={<item.icon />}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE STRENGTHS ================= */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead title={strengths.title} subtitle={strengths.subtitle} />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.items.map((item, i) => (
              <StrengthCard
                key={i}
                icon={<item.icon />}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="py-10 bg-blue-50">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={journey.title} subtitle={journey.subtitle} />

          <div className="grid gap-8 md:grid-cols-3">
            {journey.steps.map((step, i) => (
              <JourneyCard
                key={i}
                icon={<step.icon />}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===================== UI COMPONENTS ===================== */

interface SectionHeadProps {
  title: string;
  subtitle: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StrengthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface JourneyCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const SectionHead = ({ title, subtitle }: SectionHeadProps) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
    <p className="text-gray-600 mt-3 max-w-xl mx-auto">{subtitle}</p>
  </div>
);

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <div className="rounded-xl bg-blue-50 p-5 flex items-center gap-4 border hover:shadow-md transition">
    <div className="bg-[#00019A] p-3 rounded-lg text-white">{icon}</div>
    <div>
      <p className="text-2xl font-bold text-[#00019A]">{value}</p>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  </div>
);

const StrengthCard = memo(({ icon, title, description }: StrengthCardProps) => (
  <div className="rounded-2xl border bg-white p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-[#00019A]">
      {icon}
    </div>
    <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
));

StrengthCard.displayName = "StrengthCard";

const JourneyCard = memo(({ icon, title, text }: JourneyCardProps) => (
  <div className="rounded-2xl border bg-white p-10 text-center shadow-sm hover:shadow-lg transition">
    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-[#00019A]">
      {icon}
    </div>
    <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
));

JourneyCard.displayName = "JourneyCard";

export default memo(AboutPageClient);
