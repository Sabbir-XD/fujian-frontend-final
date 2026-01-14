"use client";

import { memo, useState } from "react";
import Link from "next/link";
import { Factory, Globe, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const banners = [
  {
    badge: "Leading Garment Accessories Manufacturer in Bangladesh",
    title: "Garment Accessories",
    subtitle: "Reliable RMG Accessories Supplier & Exporter",
    desc: "We are a trusted Bangladesh garment accessories manufacturer supplying premium buttons, zippers, labels, tags, elastics, and custom trims for global apparel brands with strict quality control and compliance.",
    bgImage: "hero/accessories-picture.webp",
    // features: [
    //   {
    //     icon: Factory,
    //     title: "Own Manufacturing Unit",
    //     text: "Factory direct production in Bangladesh",
    //   },
    //   {
    //     icon: ShieldCheck,
    //     title: "Export Quality",
    //     text: "Strict QC & compliance standards",
    //   },
    //   {
    //     icon: Globe,
    //     title: "Global Supply",
    //     text: "Serving worldwide apparel brands",
    //   },
    // ],
  },
  {
    badge: "OEM & ODM Garment Accessories Services",
    title: "Customized Accessories Solutions for RMG",
    subtitle: "From Sampling to Bulk Production",
    desc: "We offer OEM & ODM garment accessories solutions in Bangladesh with flexible MOQ, fast sampling, competitive pricing, and reliable on-time delivery for fashion brands and buying houses.",
    bgImage: "hero/customized-accessories.jpeg",
    // features: [
    //   {
    //     icon: Factory,
    //     title: "OEM / ODM Support",
    //     text: "Custom designs & development",
    //   },
    //   {
    //     icon: Truck,
    //     title: "On-Time Delivery",
    //     text: "Efficient logistics & shipment",
    //   },
    //   {
    //     icon: Globe,
    //     title: "Trusted Worldwide",
    //     text: "Preferred supplier for exporters",
    //   },
    // ],
  },
  {
    badge: "Quality & Compliance Assurance",
    title: "International Standard Quality Control",
    subtitle: "Consistency, Durability & Performance",
    desc: "Our multi-stage quality inspection process ensures durability, color fastness, and performance, meeting international buyer requirements and global compliance standards.",
    bgImage: "hero/sewing-machine.jpeg",
    // features: [
    //   {
    //     icon: ShieldCheck,
    //     title: "Certified QC Process",
    //     text: "Batch & inline inspection",
    //   },
    //   {
    //     icon: Factory,
    //     title: "Modern Production Facility",
    //     text: "Advanced machinery & skilled workforce",
    //   },
    //   {
    //     icon: Globe,
    //     title: "Buyer Compliance Ready",
    //     text: "Export-ready for global markets",
    //   },
    // ],
  },
];

function HeroSlider() {
  const [key, setKey] = useState(0);

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={900}
        effect="fade"
        onSlideChange={() => setKey((k) => k + 1)}
      >
        {banners.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-[80vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/40 to-black/20" />

              <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 md:px-6">
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl text-white"
                >
                  <span className="inline-block rounded-md bg-white/15 px-4 py-1 text-xs font-semibold tracking-wide">
                    {item.badge}
                  </span>

                  <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h1>

                  <h2 className="mt-2 text-lg font-medium text-gray-200 sm:text-xl">
                    {item.subtitle}
                  </h2>

                  <p className="mt-5 text-base leading-relaxed text-gray-300">
                    {item.desc}
                  </p>

                  <div className="mt-8 flex gap-4">
                    <Button className="bg-white px-8 text-[#00019A] hover:bg-gray-100">
                      Get a Quote
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="border-white bg-transparent px-8 text-white hover:bg-white hover:text-[#00019A]"
                    >
                      <Link href="/products">View Products</Link>
                    </Button>
                  </div>

                  {/* Trust Items */}
                  <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {/* {item.features.map((f, idx) => (
                      <TrustItem
                        key={idx}
                        icon={<f.icon className="h-5 w-5 text-[#00019A]" />}
                        title={f.title}
                        text={f.text}
                      />
                    ))} */}
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

// const TrustItem = memo(function TrustItem({
//   icon,
//   title,
//   text,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   text: string;
// }) {
//   return (
//     <div className="flex items-center gap-3 rounded-md bg-white/10 p-3 backdrop-blur">
//       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
//         {icon}
//       </div>
//       <div>
//         <p className="text-sm font-semibold">{title}</p>
//         <p className="text-xs text-gray-300">{text}</p>
//       </div>
//     </div>
//   );
// });

export default memo(HeroSlider);
